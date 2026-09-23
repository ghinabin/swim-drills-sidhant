/* Guard the generated freestyle + breaststroke plan against stale data. */
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const plan = {};
vm.createContext(plan);
vm.runInContext(fs.readFileSync(path.join(root, "assets/data.js"), "utf8"), plan);

assert.equal(plan.PLAN_REVISION, "2026-09-23-freestyle-breaststroke-v2");
assert.equal(plan.DAYS.length, 19);
assert.deepEqual(Array.from(plan.WEEKS, (week) => week.name), [
  "Peak week",
  "Taper",
  "Race week",
  "Competition",
]);
assert.equal(plan.DAYS[0].title, "Max speed, fast turns, 100 pace");
assert.equal(plan.DAYS[0].date.getDate(), 24);
assert.equal(plan.DAYS[0].date.getMonth(), 8);
assert.equal(plan.DAYS.at(-1).id, "race");
assert.equal(plan.DAYS.at(-1).date.getDate(), 12);
assert.equal(plan.DAYS.at(-1).date.getMonth(), 9);
assert.equal(new Set(plan.DAYS.map((day) => day.id)).size, 19);
assert.equal(plan.DAYS.filter((day) => day.rest).length, 3);
assert(plan.DAYS.filter((day) => day.dow === "Sat").every((day) => day.rest));
assert.equal(plan.PLAN_GUIDANCE.length, 11);
assert.equal(plan.TECHNIQUE_CUES.length, 8);
assert.deepEqual(
  Array.from(plan.WEEKS.slice(0, 3), (week) =>
    week.days.reduce((sum, day) => sum + day.laps * 25, 0),
  ),
  [2700, 3600, 2250],
);

for (const day of plan.DAYS.filter((day) => !day.race)) {
  const counted = day.blocks.reduce((sum, block) => sum + block.meters, 0);
  assert.equal(counted, day.laps * 25, day.id + " metres");
}

const first = plan.DAYS[0];
assert.equal(first.laps, 44);
assert.deepEqual(Array.from(first.blocks, (block) => block.t), [
  "Warm-up",
  "Technique",
  "Fast turns",
  "Max speed",
  "100 pace",
  "Easy endurance",
  "Cool-down",
]);
assert.match(first.blocks[3].d, /3 FR \+ 1 BR/);
assert.match(plan.DAYS.find((day) => day.id === "w2d4").note, /true pace/i);
assert.match(plan.DAYS.find((day) => day.id === "w3d6").title, /Pre-race activation/);
assert.match(
  plan.DAYS.at(-1).blocks.find((block) => block.t === "Race cues").d,
  /50 BR/,
);
assert.match(plan.DAYS.at(-1).blocks.at(-1).t, /race log/i);

console.log("PASS new 19-day freestyle + breaststroke schedule, metres, guidance and competition routine.");
