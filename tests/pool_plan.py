"""Desktop schedule, timing, checklist, and offline browser checks."""
from datetime import datetime, timedelta, timezone
from functools import partial
from http.server import ThreadingHTTPServer
from pathlib import Path
from threading import Thread
import tempfile

from playwright.sync_api import sync_playwright

from navigation import QuietHandler, ROOT


def run():
    server = ThreadingHTTPServer(
        ("127.0.0.1", 0), partial(QuietHandler, directory=str(ROOT))
    )
    Thread(target=server.serve_forever, daemon=True).start()
    base = f"http://127.0.0.1:{server.server_port}/"
    try:
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(channel="chrome", headless=True)
            for width in (390, 1440):
                page = browser.new_page(viewport={"width": width, "height": 900}, timezone_id="Asia/Kathmandu")
                page.clock.install(time=datetime(2026, 9, 23, 12, tzinfo=timezone(timedelta(hours=5, minutes=45))))
                errors = []
                page.on("pageerror", lambda error: errors.append(str(error)))

                page.goto(base + "index.html")
                assert page.locator("main h1").inner_text() == "Pool drills"
                assert page.locator(".nav-link").all_inner_texts() == [
                    "Overview",
                    "Training plan",
                    "Drill library",
                ]
                assert page.locator('a[href*="progress"], a[href*="race"]').count() == 0
                assert page.locator("#current-session").inner_text() == "Max speed, fast turns, 100 pace"
                if width == 390:
                    page.screenshot(
                        path=str(Path(tempfile.gettempdir()) / "lane50-pool-overview.png"),
                        full_page=True,
                    )

                page.goto(base + "plan.html")
                assert page.locator(".week").count() == 4
                assert page.locator(".session-card").count() == 19
                assert page.locator(".rest-card").count() == 3
                assert page.locator("#day-w1d0 h3").text_content() == "Max speed, fast turns, 100 pace"
                assert page.locator("#day-w2d4 h3").text_content() == "Maximal test + rehearsal 2"
                assert page.locator("#day-w3d6 h3").text_content() == "Pre-race activation"
                assert page.locator("#day-race h3").text_content() == "Competition"
                page.locator(".plan-guide summary").click()
                assert page.locator(".plan-guide-body li").count() == 11
                assert page.locator(".plan-guide-body dt").count() == 8

                totals = page.evaluate(
                    """DAYS.map(day => ({
                        date: fmt(day.date),
                        declared: day.laps,
                        counted: day.blocks.reduce(
                          (sum, block) => sum +
                            (typeof block.n === 'number' ? block.n : 0), 0)
                    }))"""
                )
                assert all(row["declared"] == row["counted"] for row in totals)

                page.goto(base + "session.html?id=w1d0")
                assert "25 m pool · 44 lengths" in page.locator(".page-intro p").inner_text()
                assert page.locator(".set-title").all_inner_texts() == [
                    "Warm-up",
                    "Technique",
                    "Fast turns",
                    "Max speed",
                    "100 pace",
                    "Easy endurance",
                    "Cool-down",
                ]
                assert page.locator("#complete-all, .session-progress-summary").count() == 0
                assert "third is clearly slower" in page.locator(
                    ".session-note:not(.timing-note)"
                ).inner_text()
                assert page.locator("#session-announcement").inner_text() == "0 of 7 complete"
                page.locator("#set-0 .status-dot").click()
                assert page.locator("#set-0").get_attribute("aria-pressed") == "true"
                assert page.locator("#set-0 .status-dot").inner_text() == "✓"
                assert page.locator("#session-announcement").inner_text() == "1 of 7 complete"
                page.reload()
                assert page.locator("#set-0").get_attribute("aria-pressed") == "true"
                page.locator("#set-1").focus()
                page.keyboard.press("Space")
                assert page.locator("#session-announcement").inner_text() == "2 of 7 complete"
                assert page.evaluate("document.activeElement.id") == "set-1"
                page.keyboard.press("Enter")
                assert page.locator("#set-1").get_attribute("aria-pressed") == "false"

                page.goto(base + "session.html?id=w1d0")
                assert page.locator("main h1").inner_text() == "Max speed, fast turns, 100 pace"
                assert "a 50 taking 50 seconds leaves 1 minute 10 seconds" in page.locator(".timing-note").inner_text()
                assert "2–3 minutes" in page.locator("#set-3").inner_text()
                assert "45–60 seconds" in page.locator("#set-2").inner_text()
                page.goto(base + "session.html?id=w1d1")
                assert "8–10 minutes" in page.locator("#set-3").inner_text()
                assert "Full 50 m freestyle at 8/10" in page.locator("#set-3").inner_text()
                page.goto(base + "session.html?id=w1d0")
                assert page.locator("#set-0").get_attribute("aria-pressed") == "true"
                page.locator("#set-0").click()
                page.reload()
                assert page.locator('.set-card[aria-pressed="true"]').count() == 0

                page.goto(base + "session.html?id=w3d3")
                assert "16 lengths" in page.locator(".page-intro p").inner_text()
                assert "NOT a time trial" in page.locator("main").inner_text()
                if width == 390:
                    page.locator("#set-0").click()
                    page.screenshot(
                        path=str(Path(tempfile.gettempdir()) / "lane50-block-starts.png"),
                        full_page=True,
                    )
                assert page.evaluate("document.documentElement.scrollWidth <= innerWidth")

                page.goto(base + "session.html?id=race")
                assert "Meet timetable · 700 m planned · up to 875 m" in page.locator(".page-intro p").inner_text()
                assert page.locator(".set-title").count() == 11
                assert "OPTIONAL LENGTHS" in page.locator("#set-6").inner_text()
                assert "50 m breaststroke" in page.locator("#set-9").inner_text()

                # Storage failures must not prevent marking drills or using the timer.
                page.evaluate("""() => {
                    Storage.prototype.setItem = () => {
                        throw new DOMException('Storage blocked', 'SecurityError');
                    };
                }""")
                page.locator("#set-1").click()
                assert page.locator("#set-1").get_attribute("aria-pressed") == "true"
                assert "could not be saved" in page.locator("#toast").inner_text()
                page.locator("[data-open-timer]").click()
                assert page.locator("#timer-sheet").is_visible()
                page.locator("#timer-toggle").click()
                assert page.locator("#timer-status").inner_text() == "Running"

                page.goto(base + "drills.html")
                page.locator("#drill-search").fill("NOT a time trial")
                assert page.locator("#drill-count").inner_text() == "1 set found"
                assert page.locator("#drill-results").text_content().find(
                    "NOT a time trial"
                ) >= 0

                page.goto(base + "index.html")
                page.evaluate("navigator.serviceWorker.ready")
                page.wait_for_function("navigator.serviceWorker.controller !== null")
                page.context.set_offline(True)
                page.goto(base + "session.html?id=w1d0")
                assert page.locator("main h1").inner_text() == "Max speed, fast turns, 100 pace"
                page.context.set_offline(False)

                assert not errors, errors
                assert page.evaluate("document.documentElement.scrollWidth <= innerWidth")
                page.close()
            browser.close()
    finally:
        server.shutdown()


if __name__ == "__main__":
    run()
    print("PASS desktop schedule, start intervals, checklist, and offline UI")
