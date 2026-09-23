/* Rebuild app data from SWIMMING-PLAN.md; run: node scripts/import-plan.cjs */
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "SWIMMING-PLAN.md"), "utf8");
const revision = "2026-09-23-freestyle-breaststroke-v2-full-names";
const monthIndex = { September: 8, October: 9 };
const dow = {
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
  Sunday: "Sun",
};
const weekNames = ["Peak week", "Taper", "Race week", "Competition"];

function plain(text) {
  return text
    .replace(/\*\*/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function sentence(text) {
  const value = plain(text);
  return value ? value[0].toUpperCase() + value.slice(1) : value;
}

function kind(title) {
  if (/max speed|max test/i.test(title)) return "max";
  if (/technique|light drills/i.test(title)) return "tech";
  if (/turn|start|breakout|finish practice/i.test(title)) return "skill";
  if (/pace|race|test: breaststroke|build|brief speed|activation/i.test(title))
    return "pace";
  if (/endurance|aerobic|volume/i.test(title)) return "endurance";
  return "easy";
}

function weekIndex(date) {
  const value = Date.UTC(2026, date.getMonth(), date.getDate());
  if (value < Date.UTC(2026, 8, 28)) return 0;
  if (value < Date.UTC(2026, 9, 5)) return 1;
  if (value < Date.UTC(2026, 9, 12)) return 2;
  return 3;
}

const sessionPattern =
  /^### (Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d+) (September|October) — (.+?) · ([\d,]+) m\s*\n([\s\S]*?)(?=^### |^## Monday, 12 October — Competition|$(?![\s\S]))/gm;
const matches = [...source.matchAll(sessionPattern)];
assert.equal(matches.length, 18, "Expected every dated session from 24 Sep to 11 Oct");

const counters = [0, 0, 0, 0];
const days = matches.map((match) => {
  const date = new Date(2026, monthIndex[match[3]], Number(match[2]));
  const wi = weekIndex(date);
  const di = counters[wi]++;
  const metres = Number(match[5].replace(",", ""));
  const body = match[6];
  const rows = [
    ...body.matchAll(
      /^\| ([^|]+?) \| ([^|]+?) \| ([\d,]+) \| ([^|]+?) \| ([^|]+?) \|$/gm,
    ),
  ];
  const rest = metres === 0;
  const blocks = rows.map((row, index) => {
    const blockMetres = Number(row[3].replace(",", ""));
    assert.equal(blockMetres % 25, 0, `${match[1]} ${match[2]} block metres`);
    return {
      n: blockMetres / 25,
      t: row[1],
      d: `${row[2]}. ${row[4]}`,
      r: row[5] === "—" ? "" : row[5],
      k: kind(row[1]),
      meters: blockMetres,
      volume: row[2],
      progressKey: `v2-b${index}`,
    };
  });
  assert.equal(
    blocks.reduce((sum, block) => sum + block.meters, 0),
    metres,
    `${match[1]} ${match[2]} metres`,
  );
  const checkpoint = body.match(/^\*\*Checkpoint:\*\* (.+)$/m)?.[1];
  const restNote = rest ? plain(body) : "";
  return {
    id: `w${wi + 1}d${di}`,
    wi,
    di,
    date: `2026-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
    dow: dow[match[1]],
    title: match[4],
    pool: rest ? "—" : "25 m",
    laps: metres / 25,
    dist: `${metres.toLocaleString("en-US")} m`,
    ...(rest ? { rest: 1 } : {}),
    blocks,
    note: checkpoint ? sentence(checkpoint) : restNote,
    weekName: weekNames[wi],
  };
});

const raceBody = source.match(
  /^## Monday, 12 October — Competition\s*\n([\s\S]*)$/m,
)?.[1];
assert(raceBody, "Expected the 12 October competition section");

const raceRows = [
  ...raceBody.matchAll(/^\| ([^|]+?) \| ([^|]+?) \| ([^|]+?) \|$/gm),
].filter((row) => row[1] !== "Order" && !/^---/.test(row[1]));
const raceAmounts = {
  "Warm-up": { n: 8, unit: "LENGTHS" },
  Technique: { n: 2, unit: "LENGTHS" },
  Build: { n: 2, unit: "LENGTHS" },
  "Start + burst": { n: 2, unit: "LENGTHS" },
  Settle: { n: 2, unit: "LENGTHS" },
  Race: { n: 8, unit: "PLANNED LENGTHS" },
  "Between events": { n: "4", unit: "OPTIONAL LENGTHS" },
  "Re-warm-up": { n: "3", unit: "OPTIONAL LENGTHS" },
  "Cool-down": { n: 4, unit: "LENGTHS" },
};
const raceBlocks = raceRows.map((row, index) => ({
  ...raceAmounts[row[1]],
  t: row[1],
  d: plain(row[2]),
  r: plain(row[3]),
  k: kind(row[1]),
  progressKey: `v2-r${index}`,
}));
assert.equal(raceBlocks.length, 9, "Expected all nine competition rows");

const raceCueText = [
  ...raceBody.matchAll(/^- \*\*([^*]+):\*\* (.+)$/gm),
]
  .map((cue) => `${cue[1]}: ${plain(cue[2])}`)
  .join(" · ");
raceBlocks.push({
  n: "3",
  unit: "CUES",
  t: "Race cues",
  d: raceCueText,
  r: "Use one familiar cue for each event.",
  k: "skill",
  progressKey: "v2-race-cues",
});
raceBlocks.push({
  n: "1",
  unit: "LOG",
  t: "Rehearsal / race log",
  d: "Date ___ · Stroke ___ · Distance ___ · Time ___ · First 25 ___ · Later splits ___ · Legal turn/finish? ___ · Breathing controlled? ___ · One cue for next swim ___",
  r: "Complete after the swim, once settled.",
  k: "easy",
  progressKey: "v2-race-log",
});

days.push({
  id: "race",
  wi: 3,
  di: 0,
  date: "2026-10-12",
  dow: "Mon",
  title: "Competition",
  pool: "Meet timetable",
  laps: 28,
  dist: "700 m planned · up to 875 m",
  race: 1,
  blocks: raceBlocks,
  note:
    "Use the meet timetable. Confirm call-room times, event order and warm-up access; follow your coach’s shorter re-warm-up for later events. If you also race on 13 October, prioritise recovery and add no training session between competition days.",
  weekName: weekNames[3],
});

const howToUse = source.match(
  /^## How to use it\s*\n([\s\S]*?)(?=^\| Dates \|)/m,
)?.[1];
assert(howToUse, "Expected How to use guidance");
const guidance = [...howToUse.matchAll(/^- (.+)$/gm)].map((item) =>
  plain(item[1]),
);
guidance.push(
  "No breath-hold sets, hyperventilation, underwater time or distance targets, or forced kick counts. Breathe whenever needed; all swimming is supervised.",
  "Fast-turn drill: start about 10 m from the wall, swim in at race speed, turn, sprint about 15 m out, then ease. Count it as 25 m.",
);

const techniqueBody = source.match(
  /^## Technique card\s*\n([\s\S]*?)(?=^\*\*No breath-hold sets)/m,
)?.[1];
assert(techniqueBody, "Expected technique card");
const technique = [
  ...techniqueBody.matchAll(/^\| ([^|]+?) \| ([^|]+?) \|$/gm),
]
  .filter((row) => row[1] !== "Focus" && !/^---/.test(row[1]))
  .map((row) => ({ focus: plain(row[1]), cue: plain(row[2]) }));
assert.equal(technique.length, 8, "Expected all eight technique cues");

const weeks = [
  {
    name: "Peak week",
    sub: "24–27 Sep · quality work plus recovery",
    start: "2026-09-24",
    distance: "4,900 m full week · 2,700 m listed",
  },
  {
    name: "Taper",
    sub: "28 Sep–4 Oct · keep quality, cut volume",
    start: "2026-09-28",
    distance: "3,600 m",
  },
  {
    name: "Race week",
    sub: "5–11 Oct · short, sharp and fresh",
    start: "2026-10-05",
    distance: "2,250 m",
  },
  {
    name: "Competition",
    sub: "12 Oct · follow the meet timetable",
    start: "2026-10-12",
    distance: "700 m planned · up to 875 m",
  },
];

const output = `/* Generated from SWIMMING-PLAN.md by scripts/import-plan.cjs. */\n"use strict";\nvar PLAN_REVISION = ${JSON.stringify(revision)};\nvar PLAN_GUIDANCE = ${JSON.stringify(guidance, null, 2)};\nvar TECHNIQUE_CUES = ${JSON.stringify(technique, null, 2)};\nvar DAYS = ${JSON.stringify(days, null, 2)};\nvar WEEKS = ${JSON.stringify(weeks, null, 2)};\nvar MON = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];\nvar LAB = {easy:"easy",tech:"technique",skill:"skill",pace:"race pace",endurance:"endurance",max:"maximum"};\nDAYS.forEach(function(day) { day.date = new Date(day.date.slice(0, 10) + "T00:00:00"); });\nWEEKS.forEach(function(week, wi) { week.days = DAYS.filter(function(day) { return day.wi === wi; }); });\nvar RACE_DATE = new Date(2026, 9, 12);\nfunction fmt(date) { return date.getDate() + " " + MON[date.getMonth()]; }\nfunction total(day) { return day.blocks.length; }\n`;

fs.writeFileSync(path.join(root, "assets/data.js"), output);
console.log(
  `Imported ${days.length} dates, ${days.reduce((sum, day) => sum + day.blocks.length, 0)} blocks and all prescribed training metres.`,
);
