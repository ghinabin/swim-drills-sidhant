/* Generated from SWIMMING-PLAN.md by scripts/import-plan.cjs. */
"use strict";
var PLAN_REVISION = "2026-09-23-freestyle-breaststroke-v2-full-names";
var PLAN_GUIDANCE = [
  "Pool window: 07:30–09:30. Finish when the listed work is done; two hours is availability, not a target. Before the water do 5–10 minutes of mobility only. Skip hard gym or dryland work after 30 September.",
  "Speed work comes first, right after warm-up and technique, while fresh. Never do it tired.",
  "Effort scale: easy 2–4/10 · controlled 7/10 · quick 8/10 · race pace 9/10 · max 10/10 only for single short reps (about 25 m or less) with 2–3 minutes rest. No exhaustion sets.",
  "Rest is after each repetition, not a send-off. Take the listed rest or longer, and restart only when breathing has settled.",
  "Race-pace 25s: stop the set early if two reps in a row are more than about 1 second slower than your first, or if technique breaks down. Do not chase the full count.",
  "Green day: easy swimming feels comfortable, technique is coordinated, and you recovered by this morning. Follow the plan.",
  "Amber day (heavy arms, repeated gasping, technique breakdown, lingering fatigue): drop all fast work, swim easy 25s for that session, and go on to the next dated session. Never make up missed metres. Six swim days a week make fatigue more likely, so take amber days seriously.",
  "24 and 25 September are 1,100 m sessions. Use the full distance only if you already tolerate about 1,000 m of interval swimming and recover normally. Otherwise remove the \"Easy endurance\" row on 24 Sep and the \"Easy volume\" row on 25 Sep (the sessions become 850 and 750 m).",
  "If even easy 50s leave you very breathless, split every training 50 into 2 × 25 with 20–30 seconds extra rest and postpone the full-race rehearsals until a continuous easy 50 is comfortable. Unusual breathlessness, wheezing, chest discomfort or dizziness means stop and tell your coach or parent, and get medical advice before pushing harder.",
  "No breath-hold sets, hyperventilation, underwater time or distance targets, or forced kick counts. Breathe whenever needed; all swimming is supervised.",
  "Fast-turn drill: start about 10 m from the wall, swim in at race speed, turn, sprint about 15 m out, then ease. Count it as 25 m."
];
var TECHNIQUE_CUES = [
  {
    "focus": "Freestyle breathing/alignment",
    "cue": "Easy normal freestyle; exhale gently into the water, turn to inhale when needed. Keep the head aligned."
  },
  {
    "focus": "Breaststroke timing",
    "cue": "One cue: pull and breathe, recover the hands forward, kick into a long body line. Keep a brief natural glide; use a quicker connected rhythm at race effort."
  },
  {
    "focus": "Breaststroke kick",
    "cue": "Comfortable and coordinated. The feet must be turned outward during the most propulsive part of the kick; ask your coach to check this. Stop breaststroke kick if knees or groin hurt."
  },
  {
    "focus": "Freestyle turn",
    "cue": "Fast approach, secure foot placement, streamlined push, early return to surface swimming."
  },
  {
    "focus": "Breaststroke turn/finish",
    "cue": "Touch with both hands at the same time and separated (not stacked). The last stroke before the turn or finish may be an arm stroke without a kick."
  },
  {
    "focus": "Freestyle underwater",
    "cue": "Short underwater dolphin kick only as far as comfortable (about 5–8 m), surfacing by the 15 m mark. Coach-checked. No breath-hold goals."
  },
  {
    "focus": "Dive",
    "cue": "Only an already-taught start, supervised, in a permitted start area. Otherwise use a wall push."
  },
  {
    "focus": "Breaststroke pullout",
    "cue": "One underwater arm stroke back to the legs is allowed after a start or turn. One butterfly kick may come before the first breaststroke kick. The head must break the surface before the hands turn inward at the widest part of the second arm stroke. Surface sooner whenever needed; the pullout is not an underwater-distance goal."
  }
];
var DAYS = [
  {
    "id": "w1d0",
    "wi": 0,
    "di": 0,
    "date": "2026-09-24",
    "dow": "Thu",
    "title": "Max speed, fast turns, 100 pace",
    "pool": "25 m",
    "laps": 44,
    "dist": "1,100 m",
    "blocks": [
      {
        "n": 8,
        "t": "Warm-up",
        "d": "8 × 25 m. Alternate 2 freestyle / 2 breaststroke; easy.",
        "r": "20–30 s",
        "k": "easy",
        "meters": 200,
        "volume": "8 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 4,
        "t": "Technique",
        "d": "4 × 25 m. 2 freestyle exhalation/alignment + 2 breaststroke timing.",
        "r": "30 s",
        "k": "tech",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 6,
        "t": "Fast turns",
        "d": "6 × 25 m. Fast-turn drill. 4 freestyle + 2 breaststroke (freestyle, freestyle, breaststroke, freestyle, freestyle, breaststroke).",
        "r": "45–60 s",
        "k": "skill",
        "meters": 150,
        "volume": "6 × 25 m",
        "progressKey": "v2-b2"
      },
      {
        "n": 4,
        "t": "Max speed",
        "d": "4 × 25 m. 3 freestyle + 1 breaststroke from a push or supervised start. Max (10/10) for the first 15 m, hold form to the wall.",
        "r": "2–3 min",
        "k": "max",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b3"
      },
      {
        "n": 8,
        "t": "100 pace",
        "d": "4 × 50 m. Freestyle at 7–8/10, even first and second 25.",
        "r": "60–90 s",
        "k": "pace",
        "meters": 200,
        "volume": "4 × 50 m",
        "progressKey": "v2-b4"
      },
      {
        "n": 10,
        "t": "Easy endurance",
        "d": "5 × 50 m. Alternate freestyle / breaststroke, 3–4/10.",
        "r": "30–40 s",
        "k": "endurance",
        "meters": 250,
        "volume": "5 × 50 m",
        "progressKey": "v2-b5"
      },
      {
        "n": 4,
        "t": "Cool-down",
        "d": "4 × 25 m. Easy freestyle or comfortable backstroke.",
        "r": "20 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b6"
      }
    ],
    "note": "Compare your max 25s; if the third is clearly slower than the first, stop the speed block there. Skip \"Easy endurance\" if you are tired.",
    "weekName": "Peak week"
  },
  {
    "id": "w1d1",
    "wi": 0,
    "di": 1,
    "date": "2026-09-25",
    "dow": "Fri",
    "title": "Race rehearsal 1",
    "pool": "25 m",
    "laps": 44,
    "dist": "1,100 m",
    "blocks": [
      {
        "n": 8,
        "t": "Warm-up",
        "d": "8 × 25 m. Alternate 2 freestyle / 2 breaststroke; easy.",
        "r": "20–30 s",
        "k": "easy",
        "meters": 200,
        "volume": "8 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 4,
        "t": "Light drills",
        "d": "4 × 25 m. 2 freestyle exhalation/alignment + 2 breaststroke timing.",
        "r": "30 s",
        "k": "tech",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 2,
        "t": "Start rehearsal",
        "d": "2 × 25 m. 1 freestyle + 1 breaststroke, familiar supervised start; easy after the breakout.",
        "r": "90–120 s",
        "k": "skill",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b2"
      },
      {
        "n": 2,
        "t": "Race simulation: Freestyle",
        "d": "1 × 50 m. Full 50 m freestyle at 8/10: start, turn, finish.",
        "r": "8–10 min total recovery",
        "k": "pace",
        "meters": 50,
        "volume": "1 × 50 m",
        "progressKey": "v2-b3"
      },
      {
        "n": 4,
        "t": "Between races",
        "d": "4 × 25 m. Very easy freestyle/backstroke. Coach feedback.",
        "r": "30 s",
        "k": "pace",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b4"
      },
      {
        "n": 2,
        "t": "Race simulation: Breaststroke",
        "d": "1 × 50 m. Full 50 m breaststroke at 8/10: legal pullout, rhythm, two-hand turn and finish.",
        "r": "5–8 min until settled",
        "k": "pace",
        "meters": 50,
        "volume": "1 × 50 m",
        "progressKey": "v2-b5"
      },
      {
        "n": 4,
        "t": "100 rehearsal",
        "d": "1 × 100 m. Freestyle at 7/10, even pace: the second 50 within about 2 s of the first.",
        "r": "2–3 min",
        "k": "easy",
        "meters": 100,
        "volume": "1 × 100 m",
        "progressKey": "v2-b6"
      },
      {
        "n": 14,
        "t": "Easy volume",
        "d": "7 × 50 m. 4 freestyle + 3 breaststroke, 3/10; may split into 25s.",
        "r": "30–45 s",
        "k": "endurance",
        "meters": 350,
        "volume": "7 × 50 m",
        "progressKey": "v2-b7"
      },
      {
        "n": 4,
        "t": "Cool-down",
        "d": "4 × 25 m. Easy freestyle or comfortable backstroke.",
        "r": "20 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b8"
      }
    ],
    "note": "Record both 50 times, each 25 split, the 100 splits, start quality and legal touches. \"Easy volume\" is optional if you are fatigued. Not a max effort: that comes on 2 October.",
    "weekName": "Peak week"
  },
  {
    "id": "w1d2",
    "wi": 0,
    "di": 2,
    "date": "2026-09-26",
    "dow": "Sat",
    "title": "Rest",
    "pool": "—",
    "laps": 0,
    "dist": "0 m",
    "rest": 1,
    "blocks": [],
    "note": "Full rest day. No drills, no make-up training.",
    "weekName": "Peak week"
  },
  {
    "id": "w1d3",
    "wi": 0,
    "di": 3,
    "date": "2026-09-27",
    "dow": "Sun",
    "title": "Easy technique and recovery",
    "pool": "25 m",
    "laps": 20,
    "dist": "500 m",
    "blocks": [
      {
        "n": 6,
        "t": "Warm-up",
        "d": "6 × 25 m. 3 freestyle + 3 breaststroke, easy.",
        "r": "20–30 s",
        "k": "easy",
        "meters": 150,
        "volume": "6 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 4,
        "t": "Technique",
        "d": "4 × 25 m. 2 freestyle alignment + 2 breaststroke timing.",
        "r": "30 s",
        "k": "tech",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 8,
        "t": "Easy aerobic",
        "d": "4 × 50 m. Alternate freestyle / breaststroke, 3/10. No fast work.",
        "r": "30–40 s",
        "k": "endurance",
        "meters": 200,
        "volume": "4 × 50 m",
        "progressKey": "v2-b2"
      },
      {
        "n": 2,
        "t": "Cool-down",
        "d": "2 × 25 m. Easy choice.",
        "r": "20 s",
        "k": "easy",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b3"
      }
    ],
    "note": "Leave fresher than you arrived. This is a recovery session, not one to \"win\".",
    "weekName": "Peak week"
  },
  {
    "id": "w2d0",
    "wi": 1,
    "di": 0,
    "date": "2026-09-28",
    "dow": "Mon",
    "title": "Race-pace 25s + 100 pace",
    "pool": "25 m",
    "laps": 32,
    "dist": "800 m",
    "blocks": [
      {
        "n": 8,
        "t": "Warm-up",
        "d": "8 × 25 m. Alternate 2 freestyle / 2 breaststroke; easy.",
        "r": "20–30 s",
        "k": "easy",
        "meters": 200,
        "volume": "8 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 4,
        "t": "Technique",
        "d": "4 × 25 m. 2 freestyle alignment + 2 breaststroke timing.",
        "r": "30 s",
        "k": "tech",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 6,
        "t": "Race-pace 25s",
        "d": "6 × 25 m. 9/10; 4 freestyle + 2 breaststroke (freestyle, freestyle, breaststroke, freestyle, freestyle, breaststroke). Stop early if two reps in a row fade by about 1 s.",
        "r": "45–60 s",
        "k": "pace",
        "meters": 150,
        "volume": "6 × 25 m",
        "progressKey": "v2-b2"
      },
      {
        "n": 4,
        "t": "100 pace",
        "d": "2 × 50 m. Freestyle at 8/10, even split.",
        "r": "90 s",
        "k": "pace",
        "meters": 100,
        "volume": "2 × 50 m",
        "progressKey": "v2-b3"
      },
      {
        "n": 6,
        "t": "Easy",
        "d": "3 × 50 m. Alternate freestyle / breaststroke, 3–4/10.",
        "r": "30–40 s",
        "k": "easy",
        "meters": 150,
        "volume": "3 × 50 m",
        "progressKey": "v2-b4"
      },
      {
        "n": 4,
        "t": "Cool-down",
        "d": "4 × 25 m. Easy freestyle or comfortable backstroke.",
        "r": "20 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b5"
      }
    ],
    "note": "Taper begins. Keep the quality, not the count.",
    "weekName": "Taper"
  },
  {
    "id": "w2d1",
    "wi": 1,
    "di": 1,
    "date": "2026-09-29",
    "dow": "Tue",
    "title": "Starts, breakouts, fast turns",
    "pool": "25 m",
    "laps": 28,
    "dist": "700 m",
    "blocks": [
      {
        "n": 8,
        "t": "Warm-up",
        "d": "8 × 25 m. Alternate 2 freestyle / 2 breaststroke; easy.",
        "r": "20–30 s",
        "k": "easy",
        "meters": 200,
        "volume": "8 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 4,
        "t": "Technique",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke, easy.",
        "r": "30 s",
        "k": "tech",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 4,
        "t": "Starts + breakout",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke. Familiar supervised start, brief comfortable breakout; wall push if needed. Freestyle: short underwater kick only.",
        "r": "90–120 s",
        "k": "skill",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b2"
      },
      {
        "n": 4,
        "t": "Fast turns",
        "d": "4 × 25 m. Fast-turn drill, 2 freestyle + 2 breaststroke.",
        "r": "45–60 s",
        "k": "skill",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b3"
      },
      {
        "n": 6,
        "t": "Easy endurance",
        "d": "3 × 50 m. Alternate freestyle / breaststroke, 3–4/10.",
        "r": "30–45 s",
        "k": "endurance",
        "meters": 150,
        "volume": "3 × 50 m",
        "progressKey": "v2-b4"
      },
      {
        "n": 2,
        "t": "Cool-down",
        "d": "2 × 25 m. Easy choice.",
        "r": "20 s",
        "k": "easy",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b5"
      }
    ],
    "note": "The coach checks the legal breaststroke pullout and first surface stroke. Never extend underwater distance.",
    "weekName": "Taper"
  },
  {
    "id": "w2d2",
    "wi": 1,
    "di": 2,
    "date": "2026-09-30",
    "dow": "Wed",
    "title": "Easy recovery + technique",
    "pool": "25 m",
    "laps": 16,
    "dist": "400 m",
    "blocks": [
      {
        "n": 4,
        "t": "Warm-up",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke, easy.",
        "r": "20–30 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 4,
        "t": "Technique",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke.",
        "r": "30 s",
        "k": "tech",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 4,
        "t": "Easy aerobic",
        "d": "2 × 50 m. 1 freestyle + 1 breaststroke, 3/10.",
        "r": "30 s",
        "k": "endurance",
        "meters": 100,
        "volume": "2 × 50 m",
        "progressKey": "v2-b2"
      },
      {
        "n": 4,
        "t": "Cool-down",
        "d": "4 × 25 m. Easy choice.",
        "r": "20 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b3"
      }
    ],
    "note": "No fast work. Short and easy on purpose.",
    "weekName": "Taper"
  },
  {
    "id": "w2d3",
    "wi": 1,
    "di": 3,
    "date": "2026-10-01",
    "dow": "Thu",
    "title": "Max speed + race pace + 100 pace",
    "pool": "25 m",
    "laps": 28,
    "dist": "700 m",
    "blocks": [
      {
        "n": 8,
        "t": "Warm-up",
        "d": "8 × 25 m. Alternate 2 freestyle / 2 breaststroke; easy.",
        "r": "20–30 s",
        "k": "easy",
        "meters": 200,
        "volume": "8 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 4,
        "t": "Technique",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke, easy.",
        "r": "30 s",
        "k": "tech",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 4,
        "t": "Max speed",
        "d": "4 × 25 m. 3 freestyle + 1 breaststroke from a push or supervised start. Max for the first 15 m.",
        "r": "2–3 min",
        "k": "max",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b2"
      },
      {
        "n": 4,
        "t": "100 pace",
        "d": "2 × 50 m. Freestyle at 8/10, even split.",
        "r": "90 s",
        "k": "pace",
        "meters": 100,
        "volume": "2 × 50 m",
        "progressKey": "v2-b3"
      },
      {
        "n": 4,
        "t": "Race-pace 25s",
        "d": "4 × 25 m. 9/10; 2 freestyle + 2 breaststroke.",
        "r": "45–60 s",
        "k": "pace",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b4"
      },
      {
        "n": 4,
        "t": "Cool-down",
        "d": "4 × 25 m. Easy freestyle or comfortable backstroke.",
        "r": "20 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b5"
      }
    ],
    "note": "Finish feeling you could do more. This is the last hard speed day.",
    "weekName": "Taper"
  },
  {
    "id": "w2d4",
    "wi": 1,
    "di": 4,
    "date": "2026-10-02",
    "dow": "Fri",
    "title": "Maximal test + rehearsal 2",
    "pool": "25 m",
    "laps": 28,
    "dist": "700 m",
    "blocks": [
      {
        "n": 8,
        "t": "Warm-up",
        "d": "8 × 25 m. Alternate 2 freestyle / 2 breaststroke; easy.",
        "r": "20–30 s",
        "k": "easy",
        "meters": 200,
        "volume": "8 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 4,
        "t": "Light drills",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke, easy technique.",
        "r": "30 s",
        "k": "tech",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 2,
        "t": "Start rehearsal",
        "d": "2 × 25 m. 1 freestyle + 1 breaststroke, familiar supervised start; easy after the breakout.",
        "r": "90–120 s",
        "k": "skill",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b2"
      },
      {
        "n": 2,
        "t": "Max test: Freestyle",
        "d": "1 × 50 m. **Max effort** 50 m freestyle, start to finish. Coach or a friend times it and records the 25 splits.",
        "r": "8–10 min total recovery",
        "k": "max",
        "meters": 50,
        "volume": "1 × 50 m",
        "progressKey": "v2-b3"
      },
      {
        "n": 4,
        "t": "Between swims",
        "d": "4 × 25 m. Very easy freestyle/backstroke.",
        "r": "30 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b4"
      },
      {
        "n": 2,
        "t": "Test: Breaststroke",
        "d": "1 × 50 m. 50 m breaststroke at 9/10 with legal pullout and two-hand touches.",
        "r": "3–5 min",
        "k": "pace",
        "meters": 50,
        "volume": "1 × 50 m",
        "progressKey": "v2-b5"
      },
      {
        "n": 2,
        "t": "Easy swim",
        "d": "1 × 50 m. Easy.",
        "r": "",
        "k": "easy",
        "meters": 50,
        "volume": "1 × 50 m",
        "progressKey": "v2-b6"
      },
      {
        "n": 4,
        "t": "Cool-down",
        "d": "4 × 25 m. Easy freestyle or comfortable backstroke.",
        "r": "20 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b7"
      }
    ],
    "note": "This gives you your true pace and 25 splits, so you can set a realistic race target. It is one rep per stroke with full recovery; do not repeat it. Skip the max if you are ill or on an amber day.",
    "weekName": "Taper"
  },
  {
    "id": "w2d5",
    "wi": 1,
    "di": 5,
    "date": "2026-10-03",
    "dow": "Sat",
    "title": "Rest",
    "pool": "—",
    "laps": 0,
    "dist": "0 m",
    "rest": 1,
    "blocks": [],
    "note": "Full rest day. No make-up training.",
    "weekName": "Taper"
  },
  {
    "id": "w2d6",
    "wi": 1,
    "di": 6,
    "date": "2026-10-04",
    "dow": "Sun",
    "title": "Easy",
    "pool": "25 m",
    "laps": 12,
    "dist": "300 m",
    "blocks": [
      {
        "n": 4,
        "t": "Warm-up",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke, easy.",
        "r": "20–30 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 4,
        "t": "Technique",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke.",
        "r": "30 s",
        "k": "tech",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 4,
        "t": "Easy swim",
        "d": "4 × 25 m. Easy choice.",
        "r": "20 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b2"
      }
    ],
    "note": "No fast work.",
    "weekName": "Taper"
  },
  {
    "id": "w3d0",
    "wi": 2,
    "di": 0,
    "date": "2026-10-05",
    "dow": "Mon",
    "title": "Race-week sharpness",
    "pool": "25 m",
    "laps": 20,
    "dist": "500 m",
    "blocks": [
      {
        "n": 6,
        "t": "Warm-up",
        "d": "6 × 25 m. 3 freestyle + 3 breaststroke, easy.",
        "r": "25 s",
        "k": "easy",
        "meters": 150,
        "volume": "6 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 4,
        "t": "Technique",
        "d": "4 × 25 m. 2 freestyle alignment + 2 breaststroke timing.",
        "r": "30 s",
        "k": "tech",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 2,
        "t": "Max speed",
        "d": "2 × 25 m. 1 freestyle max + 1 breaststroke at 9/10, from a push or supervised start.",
        "r": "2–3 min",
        "k": "max",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b2"
      },
      {
        "n": 4,
        "t": "100 pace",
        "d": "2 × 50 m. Freestyle at 8/10, even split.",
        "r": "90 s",
        "k": "pace",
        "meters": 100,
        "volume": "2 × 50 m",
        "progressKey": "v2-b3"
      },
      {
        "n": 4,
        "t": "Cool-down",
        "d": "4 × 25 m. Easy choice.",
        "r": "20 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b4"
      }
    ],
    "note": "No added endurance set, no hard dryland.",
    "weekName": "Race week"
  },
  {
    "id": "w3d1",
    "wi": 2,
    "di": 1,
    "date": "2026-10-06",
    "dow": "Tue",
    "title": "Start, breakout, turn and finish confidence",
    "pool": "25 m",
    "laps": 20,
    "dist": "500 m",
    "blocks": [
      {
        "n": 6,
        "t": "Warm-up",
        "d": "6 × 25 m. 3 freestyle + 3 breaststroke, easy.",
        "r": "25 s",
        "k": "easy",
        "meters": 150,
        "volume": "6 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 4,
        "t": "Technique",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke, easy.",
        "r": "30 s",
        "k": "tech",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 4,
        "t": "Starts + breakout",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke. Familiar supervised start, brief breakout; wall push if needed.",
        "r": "90–120 s",
        "k": "skill",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b2"
      },
      {
        "n": 2,
        "t": "Fast turns",
        "d": "2 × 25 m. Fast-turn drill, 1 freestyle + 1 breaststroke.",
        "r": "45–60 s",
        "k": "skill",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b3"
      },
      {
        "n": 2,
        "t": "Finish practice",
        "d": "2 × 25 m. 1 freestyle + 1 breaststroke, easy approach with an accurate race finish.",
        "r": "30–45 s",
        "k": "skill",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b4"
      },
      {
        "n": 2,
        "t": "Cool-down",
        "d": "2 × 25 m. Easy choice.",
        "r": "20 s",
        "k": "easy",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b5"
      }
    ],
    "note": "If you can get into the meet pool before the 12th, do this session there. Use only familiar skills; do not learn a new dive this week.",
    "weekName": "Race week"
  },
  {
    "id": "w3d2",
    "wi": 2,
    "di": 2,
    "date": "2026-10-07",
    "dow": "Wed",
    "title": "Easy feel for water",
    "pool": "25 m",
    "laps": 12,
    "dist": "300 m",
    "blocks": [
      {
        "n": 4,
        "t": "Warm-up",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke, easy.",
        "r": "25 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 4,
        "t": "Technique",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke, relaxed.",
        "r": "30 s",
        "k": "tech",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 2,
        "t": "Build",
        "d": "2 × 25 m. 1 freestyle + 1 breaststroke, build smoothly to 7/10.",
        "r": "60 s",
        "k": "pace",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b2"
      },
      {
        "n": 2,
        "t": "Cool-down",
        "d": "2 × 25 m. Easy choice.",
        "r": "20 s",
        "k": "easy",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b3"
      }
    ],
    "note": "Stay fresh; no hard work.",
    "weekName": "Race week"
  },
  {
    "id": "w3d3",
    "wi": 2,
    "di": 3,
    "date": "2026-10-08",
    "dow": "Thu",
    "title": "Final controlled full-race rehearsal",
    "pool": "25 m",
    "laps": 16,
    "dist": "400 m",
    "blocks": [
      {
        "n": 6,
        "t": "Warm-up",
        "d": "6 × 25 m. 3 freestyle + 3 breaststroke, easy.",
        "r": "25 s",
        "k": "easy",
        "meters": 150,
        "volume": "6 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 2,
        "t": "Technique",
        "d": "2 × 25 m. 1 freestyle + 1 breaststroke, easy.",
        "r": "30 s",
        "k": "tech",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 4,
        "t": "Full-race sequence",
        "d": "2 × 50 m. 1 freestyle + 1 breaststroke at 7/10, familiar start through finish; NOT a time trial.",
        "r": "5 min between; longer if breathing is unsettled",
        "k": "pace",
        "meters": 100,
        "volume": "2 × 50 m",
        "progressKey": "v2-b2"
      },
      {
        "n": 4,
        "t": "Cool-down",
        "d": "4 × 25 m. Easy choice.",
        "r": "20 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b3"
      }
    ],
    "note": "Rehearse the routine calmly; no additional starts or sprints.",
    "weekName": "Race week"
  },
  {
    "id": "w3d4",
    "wi": 2,
    "di": 4,
    "date": "2026-10-09",
    "dow": "Fri",
    "title": "Light feel for water",
    "pool": "25 m",
    "laps": 12,
    "dist": "300 m",
    "blocks": [
      {
        "n": 4,
        "t": "Warm-up",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke, easy.",
        "r": "25 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 4,
        "t": "Technique",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke, relaxed.",
        "r": "30 s",
        "k": "tech",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 2,
        "t": "Brief speed",
        "d": "2 × 25 m. 1 freestyle + 1 breaststroke at 8/10.",
        "r": "90 s",
        "k": "pace",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b2"
      },
      {
        "n": 2,
        "t": "Cool-down",
        "d": "2 × 25 m. Easy choice.",
        "r": "20 s",
        "k": "easy",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b3"
      }
    ],
    "note": "Leave fresh.",
    "weekName": "Race week"
  },
  {
    "id": "w3d5",
    "wi": 2,
    "di": 5,
    "date": "2026-10-10",
    "dow": "Sat",
    "title": "Rest",
    "pool": "—",
    "laps": 0,
    "dist": "0 m",
    "rest": 1,
    "blocks": [],
    "note": "Full rest day. Prepare bag, cap, goggles and suit; rest and eat normally.",
    "weekName": "Race week"
  },
  {
    "id": "w3d6",
    "wi": 2,
    "di": 6,
    "date": "2026-10-11",
    "dow": "Sun",
    "title": "Pre-race activation",
    "pool": "25 m",
    "laps": 10,
    "dist": "250 m",
    "blocks": [
      {
        "n": 4,
        "t": "Warm-up",
        "d": "4 × 25 m. 2 freestyle + 2 breaststroke, easy.",
        "r": "20–30 s",
        "k": "easy",
        "meters": 100,
        "volume": "4 × 25 m",
        "progressKey": "v2-b0"
      },
      {
        "n": 2,
        "t": "Technique",
        "d": "2 × 25 m. 1 freestyle + 1 breaststroke, relaxed.",
        "r": "30 s",
        "k": "tech",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b1"
      },
      {
        "n": 2,
        "t": "Activation",
        "d": "2 × 25 m. 1 freestyle + 1 breaststroke at 8/10, clean and quick.",
        "r": "90 s",
        "k": "pace",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b2"
      },
      {
        "n": 2,
        "t": "Cool-down",
        "d": "2 × 25 m. Easy choice.",
        "r": "20 s",
        "k": "easy",
        "meters": 50,
        "volume": "2 × 25 m",
        "progressKey": "v2-b3"
      }
    ],
    "note": "Short and sharp. Skip it if you feel unwell or unusually fatigued.",
    "weekName": "Race week"
  },
  {
    "id": "race",
    "wi": 3,
    "di": 0,
    "date": "2026-10-12",
    "dow": "Mon",
    "title": "Competition",
    "pool": "Meet timetable",
    "laps": 28,
    "dist": "700 m planned · up to 875 m",
    "race": 1,
    "blocks": [
      {
        "n": 8,
        "unit": "LENGTHS",
        "t": "Warm-up",
        "d": "4 × 50 easy: 2 freestyle + 2 breaststroke",
        "r": "200 m; 20–30 s rest",
        "k": "easy",
        "progressKey": "v2-r0"
      },
      {
        "n": 2,
        "unit": "LENGTHS",
        "t": "Technique",
        "d": "2 × 25: one of each stroke, relaxed",
        "r": "50 m; 30 s rest",
        "k": "tech",
        "progressKey": "v2-r1"
      },
      {
        "n": 2,
        "unit": "LENGTHS",
        "t": "Build",
        "d": "2 × 25: one of each, building to 8/10",
        "r": "50 m; 60 s rest",
        "k": "pace",
        "progressKey": "v2-r2"
      },
      {
        "n": 2,
        "unit": "LENGTHS",
        "t": "Start + burst",
        "d": "2 × 25: one freestyle, one breaststroke from a start if the warm-up pool allows it, otherwise a wall push",
        "r": "50 m; 90–120 s rest",
        "k": "skill",
        "progressKey": "v2-r3"
      },
      {
        "n": 2,
        "unit": "LENGTHS",
        "t": "Settle",
        "d": "2 × 25 very easy",
        "r": "50 m; 20 s rest",
        "k": "easy",
        "progressKey": "v2-r4"
      },
      {
        "n": 8,
        "unit": "PLANNED LENGTHS",
        "t": "Race",
        "d": "Entered event: familiar start, composed opening, carry rhythm through the finish",
        "r": "50 / 100 m",
        "k": "pace",
        "progressKey": "v2-r5"
      },
      {
        "n": "4",
        "unit": "OPTIONAL LENGTHS",
        "t": "Between events",
        "d": "If a lane is free: 4 × 25 very easy. Stay warm, drink normally, and have a familiar snack if the gap is long.",
        "r": "100 m optional",
        "k": "easy",
        "progressKey": "v2-r6"
      },
      {
        "n": "3",
        "unit": "OPTIONAL LENGTHS",
        "t": "Re-warm-up",
        "d": "If the gap is long and a lane is free: 2 × 25 easy + 1 × 25 controlled for the next stroke",
        "r": "75 m optional",
        "k": "easy",
        "progressKey": "v2-r7"
      },
      {
        "n": 4,
        "unit": "LENGTHS",
        "t": "Cool-down",
        "d": "4 × 25 very easy if available and comfortable",
        "r": "100 m",
        "k": "easy",
        "progressKey": "v2-r8"
      },
      {
        "n": "3",
        "unit": "CUES",
        "t": "Race cues",
        "d": "50 m freestyle: react and drive off the start, keep tempo through the turn, breathe naturally, swim through the touch. · 100 m freestyle: aim for a controlled first 50 and a purposeful second 50; second 50 within about 2 s of the first. · 50 m breaststroke: connected pull–kick timing, legal pullout, quick two-hand touches on the turn and finish.",
        "r": "Use one familiar cue for each event.",
        "k": "skill",
        "progressKey": "v2-race-cues"
      },
      {
        "n": "1",
        "unit": "LOG",
        "t": "Rehearsal / race log",
        "d": "Date ___ · Stroke ___ · Distance ___ · Time ___ · First 25 ___ · Later splits ___ · Legal turn/finish? ___ · Breathing controlled? ___ · One cue for next swim ___",
        "r": "Complete after the swim, once settled.",
        "k": "easy",
        "progressKey": "v2-race-log"
      }
    ],
    "note": "Use the meet timetable. Confirm call-room times, event order and warm-up access; follow your coach’s shorter re-warm-up for later events. If you also race on 13 October, prioritise recovery and add no training session between competition days.",
    "weekName": "Competition"
  }
];
var WEEKS = [
  {
    "name": "Peak week",
    "sub": "24–27 Sep · quality work plus recovery",
    "start": "2026-09-24",
    "distance": "4,900 m full week · 2,700 m listed"
  },
  {
    "name": "Taper",
    "sub": "28 Sep–4 Oct · keep quality, cut volume",
    "start": "2026-09-28",
    "distance": "3,600 m"
  },
  {
    "name": "Race week",
    "sub": "5–11 Oct · short, sharp and fresh",
    "start": "2026-10-05",
    "distance": "2,250 m"
  },
  {
    "name": "Competition",
    "sub": "12 Oct · follow the meet timetable",
    "start": "2026-10-12",
    "distance": "700 m planned · up to 875 m"
  }
];
var MON = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var LAB = {easy:"easy",tech:"technique",skill:"skill",pace:"race pace",endurance:"endurance",max:"maximum"};
DAYS.forEach(function(day) { day.date = new Date(day.date.slice(0, 10) + "T00:00:00"); });
WEEKS.forEach(function(week, wi) { week.days = DAYS.filter(function(day) { return day.wi === wi; }); });
var RACE_DATE = new Date(2026, 9, 12);
function fmt(date) { return date.getDate() + " " + MON[date.getMonth()]; }
function total(day) { return day.blocks.length; }
