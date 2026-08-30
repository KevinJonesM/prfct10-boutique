import type { PRFCT10Question } from "../types";
// ============================================================
// PRFCT10 CHALLENGE
// QUESTION BANK — BATCH 07
// PROGRAM: XCEL
// MODE: MYTH OR RULE? / COMPETITION TRAPS
// TOTAL QUESTIONS: 40
//
// VERIFIED AGAINST:
// USA Gymnastics Women's Xcel Code of Points
// Revision: August 2026
// Cycle: 2022–2028
// ============================================================

export const xcelMythOrRuleBatch07: PRFCT10Question[] = [

  // ==========================================================
  // GENERAL / EXECUTION TRAPS
  // ==========================================================

  // ----------------------------------------------------------
  // 001 — COMPOSITION ON BEAM
  // ----------------------------------------------------------

  {
    id: "xcel-trap-001",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["BB"],

    category: "MYTH_OR_RULE",
    subcategory: "COMPOSITION",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "MYTH OR RULE?",

    question:
      "Xcel Beam routines receive composition deductions for how the routine is constructed.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Composition deductions are not applied in the Xcel Program on Beam. The emphasis is on performing allowable skills and meeting the applicable requirements.",

    takeaway:
      "XCEL BEAM DOES NOT USE COMPOSITION DEDUCTIONS.",

    ruleKey:
      "xcel.bb.composition.not_applied",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Execution & Artistry Deductions",
      pageLabel: "BALANCE BEAM - 21"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "composition", "myth-or-rule"]
  },

  // ----------------------------------------------------------
  // 002 — FLOOR LUNGE
  // ----------------------------------------------------------

  {
    id: "xcel-trap-002",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["FX"],

    category: "MYTH_OR_RULE",
    subcategory: "LANDING",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "STICK OR STEP?",

    question:
      "Every step after landing a Floor acro element must receive a landing deduction.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "A small, controlled step after a Floor acro landing may continue in the direction of the skill to finish in a lunge without deduction.",

    takeaway:
      "A CONTROLLED FLOOR LUNGE CAN BE OK.",

    ruleKey:
      "xcel.fx.landing.controlled_lunge",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "General Deductions — Landing",
      pageLabel: "GENERAL / JUDGES - 22"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "landing", "lunge"]
  },

  // ----------------------------------------------------------
  // 003 — FEET APART + STEP
  // ----------------------------------------------------------

  {
    id: "xcel-trap-003",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB", "BB"],

    category: "MYTH_OR_RULE",
    subcategory: "LANDING",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "DOUBLE DEDUCTION?",

    question:
      "If a gymnast lands a Bars or Beam dismount with her feet apart and then takes a step, she automatically gets both the feet-apart deduction and the step deduction.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "When the landing has feet apart or staggered and the gymnast then takes a step, the Code says to deduct only for the step or steps.",

    takeaway:
      "FEET APART + STEP DOESN'T AUTOMATICALLY MEAN TWO DEDUCTIONS.",

    ruleKey:
      "xcel.ub_bb.landing.feet_apart_then_step",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Bars / Beam Landing Clarifications",
      pageLabel: "UB - 27 / BB - 21"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "bars", "beam", "landing"]
  },

  // ----------------------------------------------------------
  // 004 — STICK WITH TRUNK MOVEMENT
  // ----------------------------------------------------------

  {
    id: "xcel-trap-004",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB", "BB", "FX"],

    category: "MYTH_OR_RULE",
    subcategory: "LANDING_CONTROL",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "BUT I STUCK IT!",

    question:
      "If the gymnast's feet never move on landing, the judge cannot deduct for balance control.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "A stuck landing may still receive up to 0.20 for additional trunk movements used to maintain balance or control.",

    takeaway:
      "FEET DON'T MOVE ≠ AUTOMATICALLY PERFECT LANDING.",

    ruleKey:
      "xcel.general.landing.trunk_movement_stick",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "General Deductions — Landing Control",
      pageLabel: "GENERAL / JUDGES - 22"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "landing", "stick", "control"]
  },

  // ----------------------------------------------------------
  // 005 — SQUAT THEN FALL
  // ----------------------------------------------------------

  {
    id: "xcel-trap-005",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB", "BB", "FX"],

    category: "MYTH_OR_RULE",
    subcategory: "LANDING",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "ONE OR TWO?",

    question:
      "If a gymnast lands in a deep squat and then falls, only the 0.50 fall deduction applies.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "A squat landing can receive up to 0.30, and if the gymnast then falls, the additional 0.50 fall deduction applies.",

    takeaway:
      "DEEP SQUAT + FALL CAN STACK.",

    ruleKey:
      "xcel.general.landing.squat_then_fall",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "General Deductions — Landing",
      pageLabel: "GENERAL / JUDGES - 22"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "landing", "squat", "fall"]
  },

  // ----------------------------------------------------------
  // 006 — HAND TOUCH
  // ----------------------------------------------------------

  {
    id: "xcel-trap-006",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB", "BB", "FX"],

    category: "MYTH_OR_RULE",
    subcategory: "LANDING",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "HAND DOWN!",

    question:
      "Any contact of a hand with the landing mat is automatically a 0.50 fall.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "A brush or touch of one or both hands without support can receive up to 0.30. Actual support on the mat with the hands is treated as a 0.50 fall.",

    takeaway:
      "TOUCH AND SUPPORT ARE NOT THE SAME THING.",

    ruleKey:
      "xcel.general.landing.hand_touch_vs_support",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "General Deductions — Landing",
      pageLabel: "GENERAL / JUDGES - 22"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "landing", "hands", "fall"]
  },

  // ==========================================================
  // BARS TRAPS
  // ==========================================================

  // ----------------------------------------------------------
  // 007 — EXTRA CAST DOUBLE DEDUCTION
  // ----------------------------------------------------------

  {
    id: "xcel-trap-007",

    program: "XCEL",

    divisions: [
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB"],

    category: "MYTH_OR_RULE",
    subcategory: "EXTRA_SWING",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "DOUBLE TROUBLE?",

    question:
      "An extra cast that is also below the required angle automatically receives both the 0.30 extra-swing deduction and the 0.10 amplitude deduction.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "When an extra cast or swing occurs, apply the 0.30 extra-swing deduction only. The additional 0.10 cast-amplitude deduction is not applied.",

    takeaway:
      "EXTRA CAST: DON'T DOUBLE-DIP THE ANGLE DEDUCTION.",

    ruleKey:
      "xcel.ub.extra_cast.no_additional_amplitude",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Bar Faults",
      pageLabel: "UNEVEN BARS - 28"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "bars", "extra-swing", "cast"]
  },

  // ----------------------------------------------------------
  // 008 — FALL AFTER EXTRA SWINGS
  // ----------------------------------------------------------

  {
    id: "xcel-trap-008",

    program: "XCEL",

    divisions: [
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB"],

    category: "MYTH_OR_RULE",
    subcategory: "EXTRA_SWING",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "SWING... SWING... DOWN",

    question:
      "If a gymnast performs extra swings and then jumps down from the Bars, she automatically receives the extra-swing deduction plus the 0.50 fall.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "The Bars clarification says that when the gymnast falls or jumps down after extra swing or swings, deduct 0.50 for the fall only.",

    takeaway:
      "FALL AFTER EXTRA SWINGS = FALL ONLY.",

    ruleKey:
      "xcel.ub.extra_swing.fall_only",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Bar Faults",
      pageLabel: "UNEVEN BARS - 28"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "bars", "extra-swing", "fall"]
  },

  // ----------------------------------------------------------
  // 009 — THIRD RUN
  // ----------------------------------------------------------

  {
    id: "xcel-trap-009",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB"],

    category: "MYTH_OR_RULE",
    subcategory: "MOUNT_APPROACH",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "ONE MORE RUN?",

    question:
      "A third run approach for an Uneven Bars mount has no penalty as long as the gymnast has not touched the Bars.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "The third run approach on a Bars mount receives a 0.50 deduction.",

    takeaway:
      "THIRD BARS RUN APPROACH = 0.50.",

    ruleKey:
      "xcel.ub.mount.third_run",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Very Large Faults",
      pageLabel: "UNEVEN BARS - 28"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "bars", "mount", "run-approach"]
  },

  // ==========================================================
  // BEAM TRAPS
  // ==========================================================

  // ----------------------------------------------------------
  // 010 — SKILL AFTER SIGNAL
  // ----------------------------------------------------------

  {
    id: "xcel-trap-010",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["BB"],

    category: "MYTH_OR_RULE",
    subcategory: "WARM_UP",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "ONE LAST FLIC?",

    question:
      "After the Chief Judge signals a gymnast to begin Beam, she may perform one last skill on the mat before mounting without penalty.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Practicing an actual element on the mat after the signal is considered exceeding warm-up time and receives a 0.20 Chief Judge deduction without a warning.",

    takeaway:
      "SIGNAL GIVEN? WARM-UP IS OVER.",

    ruleKey:
      "xcel.bb.warmup.skill_after_signal",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Timing Regulations",
      pageLabel: "BALANCE BEAM - 18"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "warm-up"]
  },

  // ----------------------------------------------------------
  // 011 — BRIEF TOUCH BEFORE ROUTINE
  // ----------------------------------------------------------

  {
    id: "xcel-trap-011",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["BB"],

    category: "MYTH_OR_RULE",
    subcategory: "WARM_UP",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "TOUCH THE BEAM?",

    question:
      "Immediately before competing Beam, briefly touching the apparatus is automatically additional warm-up.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Immediately before the exercise, the gymnast may briefly touch the Beam or run and jump onto the mounting apparatus without penalty.",

    takeaway:
      "A BRIEF PRE-ROUTINE TOUCH IS ALLOWED.",

    ruleKey:
      "xcel.bb.warmup.brief_touch_allowed",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Touch Warm-Up",
      pageLabel: "BALANCE BEAM - 17"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "warm-up"]
  },

  // ----------------------------------------------------------
  // 012 — SKILLS AFTER TIME
  // ----------------------------------------------------------

  {
    id: "xcel-trap-012",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["BB"],

    category: "MYTH_OR_RULE",
    subcategory: "OVERTIME",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "TIME!",

    question:
      "Once the final Beam time signal sounds, any skills performed afterward are ignored by the judges.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Judges continue evaluating the exercise after the final time signal. Value Parts and Special Requirements may still be awarded; the Chief Judge applies the applicable overtime deduction.",

    takeaway:
      "THE BELL DOESN'T STOP THE JUDGING.",

    ruleKey:
      "xcel.bb.overtime.continue_evaluation",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Timing of the Exercise",
      pageLabel: "BALANCE BEAM - 18"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "overtime"]
  },

  // ----------------------------------------------------------
  // 013 — FRACTION OVER
  // ----------------------------------------------------------

  {
    id: "xcel-trap-013",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["BB"],

    category: "MYTH_OR_RULE",
    subcategory: "OVERTIME",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "1:15.50?",

    question:
      "Being even 0.01 seconds over the Beam maximum automatically causes the 0.10 overtime deduction.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "No overtime deduction is taken when the routine is only a fraction of a second over the time allotment, according to the Code's timing rule.",

    takeaway:
      "A FRACTION OVER DOESN'T AUTOMATICALLY MEAN OVERTIME.",

    ruleKey:
      "xcel.bb.overtime.fraction_second",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Timing of the Exercise",
      pageLabel: "BALANCE BEAM - 18"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "overtime"]
  },

  // ----------------------------------------------------------
  // 014 — FALL WHILE REMOUNTING
  // ----------------------------------------------------------

  {
    id: "xcel-trap-014",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["BB"],

    category: "MYTH_OR_RULE",
    subcategory: "FALL",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "FELL AGAIN?",

    question:
      "If a gymnast falls again while trying to remount Beam before the routine timing resumes, the second fall does not count because the routine has not restarted.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "An additional fall while remounting receives another 0.50 deduction even though the routine timing has not yet resumed.",

    takeaway:
      "A FALL DURING REMOUNT STILL COUNTS.",

    ruleKey:
      "xcel.bb.fall.additional_during_remount",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Timing of Exercise",
      pageLabel: "BALANCE BEAM - 18"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "fall", "remount"]
  },

  // ----------------------------------------------------------
  // 015 — COACH TALKS DURING FALL
  // ----------------------------------------------------------

  {
    id: "xcel-trap-015",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["BB"],

    category: "MYTH_OR_RULE",
    subcategory: "COACHING",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "COACH TALK?",

    question:
      "A coach may speak to the gymnast while she is off the Beam after a fall.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "The coach may speak to the gymnast during the fall period. Once the gymnast remounts, verbal assistance is no longer allowed without penalty.",

    takeaway:
      "OFF THE BEAM AFTER A FALL? COACH MAY TALK.",

    ruleKey:
      "xcel.bb.fall.coach_speak",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Fall Regulations",
      pageLabel: "BALANCE BEAM - 18"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "coach", "fall"]
  },

  // ----------------------------------------------------------
  // 016 — FALL TIME
  // ----------------------------------------------------------

  {
    id: "xcel-trap-016",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["BB"],

    category: "MYTH_OR_RULE",
    subcategory: "FALL_TIME",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "45 SECONDS",

    question:
      "If the gymnast exceeds the 45-second Beam fall period, she may remount with an additional deduction.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Exceeding the 45-second fall period terminates the Beam exercise.",

    takeaway:
      "45 SECONDS EXCEEDED = ROUTINE TERMINATED.",

    ruleKey:
      "xcel.bb.fall_time.termination",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Fall Regulations",
      pageLabel: "BALANCE BEAM - 18"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "fall-time"]
  },

  // ----------------------------------------------------------
  // 017 — BEAM TAPE
  // ----------------------------------------------------------

  {
    id: "xcel-trap-017",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["BB"],

    category: "MYTH_OR_RULE",
    subcategory: "APPARATUS_MARKING",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "MARK YOUR SPOT",

    question:
      "A gymnast may put a small piece of tape on the Beam to mark where she wants to perform a skill.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Small chalk markings are permitted on the Beam, but tape markings are not allowed.",

    takeaway:
      "SMALL CHALK MARK: YES. TAPE: NO.",

    ruleKey:
      "xcel.bb.markings.chalk_not_tape",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Apparatus Specifications",
      pageLabel: "BALANCE BEAM - 17"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "chalk", "tape"]
  },

  // ==========================================================
  // FLOOR TRAPS
  // ==========================================================

  // ----------------------------------------------------------
  // 018 — MATS MUST BE REMOVED?
  // ----------------------------------------------------------

  {
    id: "xcel-trap-018",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["FX"],

    category: "MYTH_OR_RULE",
    subcategory: "MATTING",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "MOVE THE MAT?",

    question:
      "Additional Floor matting must always be removed immediately after the pass where it is used.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "There is no requirement to remove allowable additional matting from the Floor area during the exercise.",

    takeaway:
      "ALLOWED FLOOR MATS MAY STAY.",

    ruleKey:
      "xcel.fx.matting.no_required_removal",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Additional Matting",
      pageLabel: "FLOOR EXERCISE - 15"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "matting"]
  },

  // ----------------------------------------------------------
  // 019 — ADD MAT DURING ROUTINE
  // ----------------------------------------------------------

  {
    id: "xcel-trap-019",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["FX"],

    category: "MYTH_OR_RULE",
    subcategory: "MATTING",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "NEED ANOTHER MAT?",

    question:
      "A coach may add an allowable landing mat after the Floor routine has already started without penalty.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "All additional matting must be in place before the routine starts. Adding matting after the exercise begins receives a 0.30 unauthorized-use deduction.",

    takeaway:
      "ADD THE MAT BEFORE THE MUSIC STARTS.",

    ruleKey:
      "xcel.fx.matting.add_after_start",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Additional Matting",
      pageLabel: "FLOOR EXERCISE - 15"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "matting"]
  },

  // ----------------------------------------------------------
  // 020 — COACH STEPS INSIDE
  // ----------------------------------------------------------

  {
    id: "xcel-trap-020",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["FX"],

    category: "MYTH_OR_RULE",
    subcategory: "MATTING",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "COACH STEPPED IN!",

    question:
      "If a coach briefly steps inside the Floor boundary while properly removing a mat, the gymnast automatically receives an out-of-bounds deduction.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "When removing allowable matting, briefly stepping inside the boundary does not result in a deduction.",

    takeaway:
      "COACH STEPPING IN TO REMOVE A MAT ≠ OOB.",

    ruleKey:
      "xcel.fx.matting.coach_brief_entry",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Additional Matting",
      pageLabel: "FLOOR EXERCISE - 15"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "matting", "coach"]
  },

  // ----------------------------------------------------------
  // 021 — MAT COVERS LINE
  // ----------------------------------------------------------

  {
    id: "xcel-trap-021",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["FX"],

    category: "MYTH_OR_RULE",
    subcategory: "BOUNDARY_MARKING",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "WHERE'S THE LINE?",

    question:
      "If an additional Floor mat covers part of the boundary line, the boundary does not need to be marked on top of the mat.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Any additional matting covering a boundary line must clearly show the actual boundary with tape or chalk. Failure to mark it receives a 0.10 neutral deduction.",

    takeaway:
      "COVER THE LINE? MARK THE LINE.",

    ruleKey:
      "xcel.fx.matting.boundary_mark_required",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Additional Matting",
      pageLabel: "FLOOR EXERCISE - 15"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "boundary", "matting"]
  },

  // ----------------------------------------------------------
  // 022 — FLOOR WARNING SIGNAL
  // ----------------------------------------------------------

  {
    id: "xcel-trap-022",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["FX"],

    category: "MYTH_OR_RULE",
    subcategory: "TIMING",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "WAIT FOR THE WARNING?",

    question:
      "Like Beam, Floor gives a warning signal shortly before the routine reaches its maximum time.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "There is no routine-time warning signal on Floor Exercise.",

    takeaway:
      "NO FLOOR TIME WARNING.",

    ruleKey:
      "xcel.fx.timing.no_warning",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Timing",
      pageLabel: "FLOOR EXERCISE - 16"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "timing"]
  },

  // ----------------------------------------------------------
  // 023 — FLOOR UNDERTIME
  // ----------------------------------------------------------

  {
    id: "xcel-trap-023",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["FX"],

    category: "MYTH_OR_RULE",
    subcategory: "TIMING",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "TOO SHORT?",

    question:
      "A Floor routine can receive an undertime deduction simply for finishing well below its maximum time.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "The Xcel Code specifically states that there is no undertime deduction on Floor.",

    takeaway:
      "NO FLOOR UNDERTIME DEDUCTION.",

    ruleKey:
      "xcel.fx.timing.no_undertime",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Timing",
      pageLabel: "FLOOR EXERCISE - 16"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "timing"]
  },

  // ----------------------------------------------------------
  // 024 — COACH ON FLOOR
  // ----------------------------------------------------------

  {
    id: "xcel-trap-024",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["FX"],

    category: "MYTH_OR_RULE",
    subcategory: "COACH_POSITION",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "GET OFF THE FLOOR?",

    question:
      "A coach standing on the Floor Exercise mat automatically causes a deduction.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "The coach is allowed on the Floor Exercise mat without deduction.",

    takeaway:
      "COACH ON FLOOR MAT = ALLOWED.",

    ruleKey:
      "xcel.fx.coach.on_mat_allowed",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Spotting Regulations",
      pageLabel: "FLOOR EXERCISE - 16"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "coach"]
  },

  // ----------------------------------------------------------
  // 025 — CHEERING AROUND FLOOR
  // ----------------------------------------------------------

  {
    id: "xcel-trap-025",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["FX"],

    category: "MYTH_OR_RULE",
    subcategory: "TEAM_BEHAVIOR",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "TEAM ENERGY",

    question:
      "Gymnasts and coaches are never allowed to stand around the Floor area and cheer during a teammate's routine.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Gymnasts and coaches may stand around the Floor area and cheer as long as they do not obstruct the view of judges or spectators.",

    takeaway:
      "CHEER AWAY. JUST DON'T BLOCK THE VIEW.",

    ruleKey:
      "xcel.fx.team.cheering_allowed",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Obstructing View",
      pageLabel: "FLOOR EXERCISE - 16"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "team", "cheering"]
  },

  // ----------------------------------------------------------
  // 026 — KEEP BLOCKING VIEW
  // ----------------------------------------------------------

  {
    id: "xcel-trap-026",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["FX"],

    category: "MYTH_OR_RULE",
    subcategory: "UNSPORTSMANLIKE_CONDUCT",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "MOVE PLEASE!",

    question:
      "If teammates or coaches continue obstructing the view around Floor after a warning, there can be a 0.20 unsportsmanlike-conduct deduction.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "If the obstruction continues after a warning, 0.20 may be applied to the All-Around score of the individual gymnast causing the obstruction or to the team score of the team in violation.",

    takeaway:
      "CHEERING IS FINE. BLOCKING THE JUDGES ISN'T.",

    ruleKey:
      "xcel.fx.obstruction.after_warning",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Obstructing View",
      pageLabel: "FLOOR EXERCISE - 16"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "unsportsmanlike", "team"]
  },

  // ==========================================================
  // VAULT TRAPS
  // ==========================================================

  // ----------------------------------------------------------
  // 027 — TWO VAULTS
  // ----------------------------------------------------------

  {
    id: "xcel-trap-027",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT"],

    category: "MYTH_OR_RULE",
    subcategory: "FINAL_SCORE",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "TWO VAULTS?",

    question:
      "For all Xcel divisions, a gymnast has the right to perform two Vaults and the better score is counted.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "All Xcel divisions have the right to perform two Vaults. Each is scored separately and the better score is used.",

    takeaway:
      "TWO VAULTS. BETTER SCORE COUNTS.",

    ruleKey:
      "xcel.vt.final_score.two_vaults",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — Final Score",
      pageLabel: "VAULT - 4"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "vault", "final-score"]
  },

  // ----------------------------------------------------------
  // 028 — SAME VAULT TWICE
  // ----------------------------------------------------------

  {
    id: "xcel-trap-028",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT"],

    category: "MYTH_OR_RULE",
    subcategory: "VAULT_SELECTION",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "SAME OR DIFFERENT?",

    question:
      "A gymnast must perform two different Vaults if she chooses to take both attempts.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "The two Vaults may be the same or different in every Xcel division.",

    takeaway:
      "XCEL VAULTS MAY BE THE SAME.",

    ruleKey:
      "xcel.vt.two_vaults.same_or_different",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — Final Score",
      pageLabel: "VAULT - 4"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "vault", "attempts"]
  },

  // ----------------------------------------------------------
  // 029 — ASK FIRST SCORE
  // ----------------------------------------------------------

  {
    id: "xcel-trap-029",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT"],

    category: "MYTH_OR_RULE",
    subcategory: "SCORE_INFORMATION",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "WHAT DID SHE GET?",

    question:
      "The coach must decide whether to take the second Vault without knowing the score of the first Vault.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "The coach may ask for the score of the first Vault before the gymnast performs the second Vault.",

    takeaway:
      "THE COACH MAY ASK FOR VAULT #1'S SCORE.",

    ruleKey:
      "xcel.vt.first_score.before_second",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — Final Score",
      pageLabel: "VAULT - 4"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "vault", "score"]
  },

  // ----------------------------------------------------------
  // 030 — FIRST BALK
  // ----------------------------------------------------------

  {
    id: "xcel-trap-030",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT"],

    category: "MYTH_OR_RULE",
    subcategory: "BALK",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "BALK!",

    question:
      "The first balk in a gymnast's three Vault approaches automatically receives a zero.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "One balk is allowed within the three Vault approaches without penalty.",

    takeaway:
      "FIRST BALK CAN BE FREE.",

    ruleKey:
      "xcel.vt.balk.first_no_penalty",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — Supplemental Approaches",
      pageLabel: "VAULT - 4"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "vault", "balk"]
  },

  // ----------------------------------------------------------
  // 031 — SECOND BALK
  // ----------------------------------------------------------

  {
    id: "xcel-trap-031",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT"],

    category: "MYTH_OR_RULE",
    subcategory: "BALK",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "BALK AGAIN?",

    question:
      "After the one penalty-free balk, an additional balk is considered a VOID Vault.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Any additional balk after the one allowed balk is considered a VOID Vault.",

    takeaway:
      "ONE FREE BALK. NOT TWO.",

    ruleKey:
      "xcel.vt.balk.additional_void",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — Supplemental Approaches",
      pageLabel: "VAULT - 4"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "vault", "balk", "void"]
  },

  // ----------------------------------------------------------
  // 032 — TOUCH BOARD = VOID?
  // ----------------------------------------------------------

  {
    id: "xcel-trap-032",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT"],

    category: "MYTH_OR_RULE",
    subcategory: "BALK",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "SHE TOUCHED THE BOARD!",

    question:
      "If a gymnast touches or runs over the springboard during an aborted Vault approach, the attempt is automatically a VOID Vault.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Contact with the springboard, Hand Placement Mat or Safety Zone Mat without coming to rest or support on top of the Vault apparatus is treated as an approach or balk, not automatically as a VOID Vault.",

    takeaway:
      "TOUCHING THE BOARD CAN STILL BE A BALK, NOT A VOID.",

    ruleKey:
      "xcel.vt.balk.contact_not_automatic_void",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — Supplemental Approaches",
      pageLabel: "VAULT - 4"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "vault", "balk", "springboard"]
  },

  // ----------------------------------------------------------
  // 033 — FOURTH ATTEMPT
  // ----------------------------------------------------------

  {
    id: "xcel-trap-033",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT"],

    category: "MYTH_OR_RULE",
    subcategory: "ATTEMPTS",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "JUST ONE MORE?",

    question:
      "If all three Vault approaches are used but only one Vault was successfully completed, the gymnast may receive a fourth approach to perform her second Vault.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "A fourth Vault approach is not allowed.",

    takeaway:
      "THREE APPROACHES MEANS THREE.",

    ruleKey:
      "xcel.vt.attempts.no_fourth",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — Supplemental Approaches",
      pageLabel: "VAULT - 4"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "vault", "attempts"]
  },

  // ----------------------------------------------------------
  // 034 — SILVER FEET FIRST
  // ----------------------------------------------------------

  {
    id: "xcel-trap-034",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["VT"],

    category: "MYTH_OR_RULE",
    subcategory: "FEET_FIRST",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "VOID OR DEDUCTION?",

    question:
      "If a Silver gymnast fails to land her Vault on the bottom of her feet first, the Vault is automatically scored VOID.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Silver is the listed exception to the general feet-first VOID rule. The Code applies a 2.00 deduction, which includes the 0.50 fall deduction.",

    takeaway:
      "SILVER HAS A FEET-FIRST EXCEPTION.",

    ruleKey:
      "xcel.vt.silver.feet_first_exception",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — Landings",
      pageLabel: "VAULT - 7"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "silver", "vault", "feet-first"]
  },

  // ----------------------------------------------------------
  // 035 — RESTRICTED VAULT
  // ----------------------------------------------------------

  {
    id: "xcel-trap-035",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT"],

    category: "MYTH_OR_RULE",
    subcategory: "RESTRICTED_VAULT",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "BUT THE OTHER VAULT WAS GOOD!",

    question:
      "If one of the two Vaults performed is restricted for the gymnast's division, a good second Vault can still become the counting score.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "If either of the two Vaults actually performed is not allowed for the gymnast's division, the Final Score is 0 because a restricted Vault was performed.",

    takeaway:
      "PERFORMING A RESTRICTED VAULT CAN ZERO THE EVENT.",

    ruleKey:
      "xcel.vt.restricted.final_zero",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — Restricted Vaults",
      pageLabel: "VAULT - 7"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "vault", "restricted", "void"]
  },

  // ----------------------------------------------------------
  // 036 — VAULT WARM-UP IS TIMED?
  // ----------------------------------------------------------

  {
    id: "xcel-trap-036",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT"],

    category: "MYTH_OR_RULE",
    subcategory: "WARM_UP",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "START THE CLOCK?",

    question:
      "Vault touch warm-up is regulated by a 30-second individual time limit just like Bars or Beam.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Vault touch warm-up is not regulated by time. Gymnasts are instead guaranteed a specific maximum number of warm-up Vaults based on division.",

    takeaway:
      "VAULT TOUCH WARM-UP = NUMBER OF VAULTS, NOT 30 SECONDS.",

    ruleKey:
      "xcel.vt.warmup.not_time_regulated",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — Warm-Up Procedures",
      pageLabel: "VAULT - 7 / 8"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "vault", "warm-up"]
  },

  // ----------------------------------------------------------
  // 037 — VAULT FALL TIME
  // ----------------------------------------------------------

  {
    id: "xcel-trap-037",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT"],

    category: "MYTH_OR_RULE",
    subcategory: "FALL_TIME",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "SECOND VAULT?",

    question:
      "After falling on her first Vault, a gymnast can take as long as needed before saluting for Vault #2.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Once she is back on her feet, the gymnast has 45 seconds to salute for the second Vault. If an injury is assessed, the fall time begins after the medical assessment is complete.",

    takeaway:
      "FALL ON VAULT #1? 45 SECONDS TO SALUTE FOR #2.",

    ruleKey:
      "xcel.vt.fall_time.second_vault",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — Fall Timing",
      pageLabel: "VAULT - 8"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "vault", "fall-time"]
  },

  // ==========================================================
  // APPARATUS / ATTIRE TRAPS
  // ==========================================================

  // ----------------------------------------------------------
  // 038 — TWO GYMNASTS ON BARS
  // ----------------------------------------------------------

  {
    id: "xcel-trap-038",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB"],

    category: "MYTH_OR_RULE",
    subcategory: "WARM_UP_SAFETY",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "SHARE THE BARS?",

    question:
      "Two gymnasts may warm up on the Uneven Bars at the same time if they are using different rails.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Only one gymnast at a time is allowed on the Bars during any warm-up, including general, open, timed and 30-second touch warm-ups.",

    takeaway:
      "ONE GYMNAST ON BARS AT A TIME.",

    ruleKey:
      "xcel.ub.warmup.one_gymnast",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Warm-Up Regulations",
      pageLabel: "UNEVEN BARS - 18"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "bars", "warm-up", "safety"]
  },

  // ----------------------------------------------------------
  // 039 — STUD EARRINGS
  // ----------------------------------------------------------

  {
    id: "xcel-trap-039",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT", "UB", "BB", "FX"],

    category: "MYTH_OR_RULE",
    subcategory: "ATTIRE_JEWELRY",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "PIERCING CHECK",

    question:
      "An otherwise prohibited piercing is allowed in competition if the gymnast covers it securely with athletic tape.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Only stud earrings are permitted in the ear. Other piercings must be removed and may not simply be covered with tape or a bandage.",

    takeaway:
      "TAPING OVER A PIERCING DOESN'T MAKE IT LEGAL.",

    ruleKey:
      "xcel.general.attire.piercing_tape",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "General / Judges — Attire Regulations",
      pageLabel: "GENERAL / JUDGES - 21"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "attire", "jewelry", "piercing"]
  },

  // ----------------------------------------------------------
  // 040 — SPRINGBOARD ON 8-INCH MAT
  // ----------------------------------------------------------

  {
    id: "xcel-trap-040",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB", "BB"],

    category: "MYTH_OR_RULE",
    subcategory: "MOUNTING_APPARATUS",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "BOARD ON TOP?",

    question:
      "Because a mount trainer may be placed on an 8-inch skill cushion, a springboard may also be placed directly on an 8-inch skill cushion.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "A mount trainer or mount mat may be used on an 8-inch skill cushion under the applicable rules, but a springboard may not be placed directly on an 8-inch skill cushion.",

    takeaway:
      "MOUNT TRAINER: POSSIBLE. SPRINGBOARD DIRECTLY ON 8-INCH CUSHION: NO.",

    ruleKey:
      "xcel.ub_bb.mount.springboard_8inch_cushion",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Bars / Beam — Matting Regulations for Mounts",
      pageLabel: "UB - 18 / BB - 17"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bars",
      "beam",
      "springboard",
      "mounting-apparatus"
    ]
  }

];
