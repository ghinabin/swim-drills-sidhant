# Lane 50

A responsive, framework-free pool drill companion for the 50 m and 100 m
freestyle plus 50 m breaststroke taper before the NSA Cup.

## Current plan

The visible schedule runs from Thursday 24 September through competition on
Monday 12 October 2026:

- Peak week: 24–27 September (the full week totals 4,900 m)
- Taper: 28 September–4 October (3,600 m)
- Race week: 5–11 October (2,250 m)
- Competition: 12 October

All training sessions use a 25 m pool. Saturdays are rest days. The displayed
sessions are generated directly from `SWIMMING-PLAN.md`, including the plan
guidance, technique card, daily checkpoints and competition routine.

## Pages

- `index.html`: current or next pool session and the following two days
- `plan.html`: the 19-day training and competition schedule
- `session.html?id=w1d0`: one session's drill checklist and rest timer
- `drills.html`: searchable, filterable set library

The main UI intentionally has no progress log, workout history, race log,
progression gates, or dry-land workout content.

Tap a drill card to check it off, and tap again to undo. Checks are saved per
session in this browser, including offline, and remain after reloading.
The timing note explains start intervals such as “on 2:00” and “on :45”; the
cards display those intervals in minutes and seconds.

## Run

Run `python -m http.server 8000` in this directory and open
http://localhost:8000. There are no application dependencies or build steps.
Use HTTPS or localhost to make the four main screens available offline.

## Organization

- `SWIMMING-PLAN.md`: the approved source plan
- `scripts/import-plan.cjs`: validates the plan tables and generates app data
- `assets/data.js`: generated dated sessions, drill details and guidance
- `assets/app.js`: schedule, session, library, and rest-timer rendering
- `assets/navigation.js`: return context, history, focus, and scroll restoration
- `assets/styles.css` and `assets/interactions.css`: responsive presentation
- `sw.js`: offline shell for the four visible app screens

## Checks

Run `node scripts/import-plan.cjs` after editing `SWIMMING-PLAN.md`, then run
`node tests/sequence.cjs`. With Python, Playwright and Chrome installed, run
`python tests/pool_plan.py` to check mobile and desktop layouts, dates and
distances, completion controls, guidance, drill search and browser errors.
