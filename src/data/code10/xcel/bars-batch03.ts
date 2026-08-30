import type { PRFCT10Question } from "../types";
// ============================================================
// PRFCT10 CHALLENGE
// QUESTION BANK — BATCH 03
// PROGRAM: XCEL
// APPARATUS: UNEVEN BARS
// TOTAL QUESTIONS: 30
//
// VERIFIED AGAINST:
// USA Gymnastics Women's Xcel Code of Points
// Revision: August 2026
// Cycle: 2022–2028
// ============================================================

export const xcelBarsBatch03: PRFCT10Question[] = [

  // ----------------------------------------------------------
  // 001 — BRONZE CAST
  // ----------------------------------------------------------

  {
    id: "xcel-ub-001",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "BRONZE_CAST",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "BRONZE BARS",

    question:
      "To fulfill the Bronze cast Special Requirement, the gymnast's hips must leave the bar.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Bronze does not have a required cast angle, but the hips must leave the bar. The cast cannot be used from the mount or dismount to fulfill this requirement.",

    takeaway:
      "BRONZE: HIPS MUST LEAVE THE BAR.",

    ruleKey:
      "xcel.ub.bronze.cast_hips_leave_bar",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Bronze",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "bars",
      "cast",
      "special-requirement"
    ]
  },

  // ----------------------------------------------------------
  // 002 — BRONZE HIGH BAR
  // ----------------------------------------------------------

  {
    id: "xcel-ub-002",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["UB"],

    category: "RESTRICTIONS",
    subcategory: "HIGH_BAR",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "ALLOWED OR NOT?",

    question:
      "A Bronze gymnast may perform skills on the high bar.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Bronze routines do not allow skills on the high bar. The Bronze mount and dismount requirements are performed from the low bar.",

    takeaway:
      "BRONZE STAYS ON LOW BAR.",

    ruleKey:
      "xcel.ub.bronze.no_high_bar",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Bronze",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "bars",
      "high-bar",
      "restriction"
    ]
  },

  // ----------------------------------------------------------
  // 003 — BRONZE SALTO DISMOUNT
  // ----------------------------------------------------------

  {
    id: "xcel-ub-003",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["UB"],

    category: "RESTRICTIONS",
    subcategory: "SALTO_DISMOUNT",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "DISMOUNT CHECK",

    question:
      "A Bronze gymnast may use a salto as her Bars dismount.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Bronze Bars does not allow salto dismounts. The dismount must also be performed from the low bar.",

    takeaway:
      "NO SALTO DISMOUNTS IN BRONZE.",

    ruleKey:
      "xcel.ub.bronze.no_salto_dismount",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Bronze",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "bars",
      "dismount",
      "restriction"
    ]
  },

  // ----------------------------------------------------------
  // 004 — SILVER CAST ANGLE
  // ----------------------------------------------------------

  {
    id: "xcel-ub-004",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "CAST_ANGLE",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "CAST CHECK",

    question:
      "What is the Silver Bars cast requirement?",

    options: [
      { id: "A", text: "Hips only need to leave the bar" },
      { id: "B", text: "Minimum 45° below horizontal" },
      { id: "C", text: "Minimum horizontal" },
      { id: "D", text: "Handstand" }
    ],

    correctOptionId: "B",

    explanation:
      "Silver requires a cast to a minimum of 45° below horizontal, excluding a cast performed as part of the mount or dismount.",

    takeaway:
      "SILVER CAST: 45° BELOW HORIZONTAL OR HIGHER.",

    ruleKey:
      "xcel.ub.silver.cast_requirement",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Silver",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "bars",
      "cast",
      "angle",
      "special-requirement"
    ]
  },

  // ----------------------------------------------------------
  // 005 — SILVER DISMOUNT BAR
  // ----------------------------------------------------------

  {
    id: "xcel-ub-005",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DISMOUNT",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "TRUE OR FALSE",

    question:
      "A Silver gymnast may dismount from either the low bar or the high bar.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Silver may dismount from either the low bar or high bar, but salto dismounts are not allowed.",

    takeaway:
      "SILVER MAY DISMOUNT FROM EITHER BAR.",

    ruleKey:
      "xcel.ub.silver.dismount_either_bar",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Silver",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "bars",
      "dismount"
    ]
  },

  // ----------------------------------------------------------
  // 006 — SILVER GIANTS
  // ----------------------------------------------------------

  {
    id: "xcel-ub-006",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["UB"],

    category: "RESTRICTIONS",
    subcategory: "GIANTS",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "ALLOWED OR NOT?",

    question:
      "Giants are allowed in Xcel Silver Bars.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Giants are not allowed in Silver on either the low bar or high bar.",

    takeaway:
      "NO GIANTS IN SILVER.",

    ruleKey:
      "xcel.ub.silver.no_giants",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Silver",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "bars",
      "giant",
      "restriction"
    ]
  },

  // ----------------------------------------------------------
  // 007 — GOLD CLEAR SUPPORT
  // ----------------------------------------------------------

  {
    id: "xcel-ub-007",

    program: "XCEL",
    divisions: ["GOLD"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "CLEAR_SUPPORT",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "GOLD BARS",

    question:
      "For Gold SR #1, a skill must finish in clear support at a minimum of:",

    options: [
      { id: "A", text: "45° below horizontal" },
      { id: "B", text: "Horizontal" },
      { id: "C", text: "45° from vertical" },
      { id: "D", text: "Vertical" }
    ],

    correctOptionId: "B",

    explanation:
      "Gold requires a skill finishing in clear support at a minimum of horizontal. The skill cannot be the mount or dismount.",

    takeaway:
      "GOLD CLEAR SUPPORT: HORIZONTAL OR HIGHER.",

    ruleKey:
      "xcel.ub.gold.clear_support_horizontal",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Gold",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "gold",
      "bars",
      "clear-support",
      "special-requirement"
    ]
  },

  // ----------------------------------------------------------
  // 008 — GOLD CIRCLES
  // ----------------------------------------------------------

  {
    id: "xcel-ub-008",

    program: "XCEL",
    divisions: ["GOLD"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "CIRCLING_SKILLS",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "CIRCLE CHECK",

    question:
      "A Gold gymnast may use two directly connected repetitions of the same 360° circling element to fulfill SR #2 and #3.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Gold may fulfill the two circling requirements with two directly connected repetitions of the same circling element.",

    takeaway:
      "GOLD CAN CONNECT THE SAME CIRCLE TWICE.",

    ruleKey:
      "xcel.ub.gold.same_circle_direct_connection",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Gold",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "gold",
      "bars",
      "circling",
      "special-requirement"
    ]
  },

  // ----------------------------------------------------------
  // 009 — GOLD SAME CIRCLE DIFFERENT BARS
  // ----------------------------------------------------------

  {
    id: "xcel-ub-009",

    program: "XCEL",
    divisions: ["GOLD"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "CIRCLING_SKILLS",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "TRUE OR FALSE",

    question:
      "A Gold gymnast may perform the same 360° circling element once on low bar and once on high bar to fulfill the two circling requirements.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Gold allows the same circling element to be used once on low bar and once on high bar for the two circling requirements.",

    takeaway:
      "SAME CIRCLE + DIFFERENT BAR CAN WORK IN GOLD.",

    ruleKey:
      "xcel.ub.gold.same_circle_different_bars",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Gold",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "gold",
      "bars",
      "circling",
      "low-bar",
      "high-bar"
    ]
  },

  // ----------------------------------------------------------
  // 010 — GOLD DISMOUNT
  // ----------------------------------------------------------

  {
    id: "xcel-ub-010",

    program: "XCEL",
    divisions: ["GOLD"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DISMOUNT",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "DISMOUNT CHECK",

    question:
      "Where must a Gold gymnast perform her Bars dismount from?",

    options: [
      { id: "A", text: "Low bar only" },
      { id: "B", text: "High bar only" },
      { id: "C", text: "Either bar" },
      { id: "D", text: "The mount mat" }
    ],

    correctOptionId: "B",

    explanation:
      "The Gold Bars dismount Special Requirement must be performed from the high bar.",

    takeaway:
      "GOLD DISMOUNT = HIGH BAR.",

    ruleKey:
      "xcel.ub.gold.dismount_high_bar",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Gold",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "gold",
      "bars",
      "dismount",
      "high-bar"
    ]
  },

  // ----------------------------------------------------------
  // 011 — GOLD GIANT
  // ----------------------------------------------------------

  {
    id: "xcel-ub-011",

    program: "XCEL",
    divisions: ["GOLD"],
    apparatus: ["UB"],

    category: "RESTRICTIONS",
    subcategory: "GIANTS",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "ALLOWED OR NOT?",

    question:
      "A giant is an allowable 'B' exception in Xcel Gold.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Gold may perform allowable 'B' elements, but giants on either bar are specifically excluded from the Gold 'B' exceptions.",

    takeaway:
      "NO GIANTS IN GOLD.",

    ruleKey:
      "xcel.ub.gold.no_giants",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Gold",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "gold",
      "bars",
      "giant",
      "restriction"
    ]
  },

  // ----------------------------------------------------------
  // 012 — PLATINUM KIP
  // ----------------------------------------------------------

  {
    id: "xcel-ub-012",

    program: "XCEL",
    divisions: ["PLATINUM"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "KIP",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "PLATINUM BARS",

    question:
      "A kip is one of the four Platinum Bars Special Requirements.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Platinum SR #3 requires a kip.",

    takeaway:
      "PLATINUM NEEDS A KIP.",

    ruleKey:
      "xcel.ub.platinum.kip_sr",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Platinum",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "platinum",
      "bars",
      "kip",
      "special-requirement"
    ]
  },

  // ----------------------------------------------------------
  // 013 — PLATINUM CLEAR SUPPORT
  // ----------------------------------------------------------

  {
    id: "xcel-ub-013",

    program: "XCEL",
    divisions: ["PLATINUM"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "CLEAR_SUPPORT",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "CAST / CLEAR SUPPORT",

    question:
      "Platinum SR #1 requires a skill finishing in clear support:",

    options: [
      { id: "A", text: "At 45° below horizontal" },
      { id: "B", text: "At horizontal" },
      { id: "C", text: "Above horizontal" },
      { id: "D", text: "Only at vertical" }
    ],

    correctOptionId: "C",

    explanation:
      "Platinum requires a skill finishing in clear support above horizontal, excluding the mount or dismount.",

    takeaway:
      "PLATINUM MUST GET ABOVE HORIZONTAL.",

    ruleKey:
      "xcel.ub.platinum.clear_support_above_horizontal",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Platinum",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "platinum",
      "bars",
      "clear-support",
      "special-requirement"
    ]
  },

  // ----------------------------------------------------------
  // 014 — PLATINUM DISMOUNT
  // ----------------------------------------------------------

  {
    id: "xcel-ub-014",

    program: "XCEL",
    divisions: ["PLATINUM"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DISMOUNT",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "DISMOUNT CHECK",

    question:
      "What minimum Value Part is required for the Platinum Bars dismount?",

    options: [
      { id: "A", text: "No VP requirement" },
      { id: "B", text: "Minimum A" },
      { id: "C", text: "Minimum B" },
      { id: "D", text: "Minimum C" }
    ],

    correctOptionId: "B",

    explanation:
      "Platinum requires a minimum 'A' dismount from the high bar.",

    takeaway:
      "PLATINUM DISMOUNT: HIGH BAR + MINIMUM A.",

    ruleKey:
      "xcel.ub.platinum.dismount_min_a",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Platinum",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "platinum",
      "bars",
      "dismount",
      "value-part"
    ]
  },

  // ----------------------------------------------------------
  // 015 — PLATINUM TAP SWING
  // ----------------------------------------------------------

  {
    id: "xcel-ub-015",

    program: "XCEL",
    divisions: ["PLATINUM"],
    apparatus: ["UB"],

    category: "VALUE_PARTS",
    subcategory: "TAP_SWING_COUNTERSWING",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "CODE SMART",

    question:
      "In Platinum, one tap swing or underswing-counterswing may receive 'A' VP credit without an extra-swing deduction.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Platinum allows one tap swing or underswing-counterswing to receive 'A' VP credit without the 0.30 extra-swing deduction.",

    takeaway:
      "PLATINUM GETS ONE.",

    ruleKey:
      "xcel.ub.platinum.one_tap_swing_a_vp",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Circle / Swing Clarifications",
      pageLabel: "UNEVEN BARS - 16"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "platinum",
      "bars",
      "tap-swing",
      "counterswing",
      "vp"
    ]
  },

  // ----------------------------------------------------------
  // 016 — DIAMOND CLEAR SUPPORT
  // ----------------------------------------------------------

  {
    id: "xcel-ub-016",

    program: "XCEL",
    divisions: ["DIAMOND"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "CLEAR_SUPPORT",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "DIAMOND BARS",

    question:
      "Diamond SR #1 requires a skill finishing in clear support at a minimum of:",

    options: [
      { id: "A", text: "Horizontal" },
      { id: "B", text: "45° from vertical" },
      { id: "C", text: "20° from vertical" },
      { id: "D", text: "Vertical only" }
    ],

    correctOptionId: "B",

    explanation:
      "Diamond requires a skill finishing in clear support at a minimum of 45° from vertical.",

    takeaway:
      "DIAMOND: 45° FROM VERTICAL.",

    ruleKey:
      "xcel.ub.diamond.clear_support_45_vertical",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Diamond",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "diamond",
      "bars",
      "clear-support",
      "special-requirement"
    ]
  },

  // ----------------------------------------------------------
  // 017 — DIAMOND CIRCLE
  // ----------------------------------------------------------

  {
    id: "xcel-ub-017",

    program: "XCEL",
    divisions: ["DIAMOND"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "CIRCLING_SKILL",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "CIRCLE CHECK",

    question:
      "What minimum difficulty must Diamond SR #2's 360° circling skill have?",

    options: [
      { id: "A", text: "A" },
      { id: "B", text: "B" },
      { id: "C", text: "C" },
      { id: "D", text: "D" }
    ],

    correctOptionId: "B",

    explanation:
      "Diamond SR #2 requires a minimum 'B' 360° circling skill, excluding the mount and dismount.",

    takeaway:
      "DIAMOND CIRCLE = MINIMUM B.",

    ruleKey:
      "xcel.ub.diamond.min_b_circle",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Diamond",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "diamond",
      "bars",
      "circling",
      "b-value"
    ]
  },

  // ----------------------------------------------------------
  // 018 — DIAMOND DISMOUNT
  // ----------------------------------------------------------

  {
    id: "xcel-ub-018",

    program: "XCEL",
    divisions: ["DIAMOND"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DISMOUNT",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "DIAMOND DISMOUNT",

    question:
      "Which can fulfill Diamond's Bars dismount Special Requirement?",

    options: [
      { id: "A", text: "Any A dismount from low bar" },
      { id: "B", text: "Minimum A salto or hecht from high bar" },
      { id: "C", text: "Any low-bar jump off" },
      { id: "D", text: "No dismount is required" }
    ],

    correctOptionId: "B",

    explanation:
      "Diamond may use a minimum 'A' salto or hecht dismount from the high bar, or any minimum 'B' dismount from the high bar.",

    takeaway:
      "DIAMOND DISMOUNT COMES FROM HIGH BAR.",

    ruleKey:
      "xcel.ub.diamond.dismount_requirement",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Diamond",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "diamond",
      "bars",
      "dismount",
      "high-bar"
    ]
  },

  // ----------------------------------------------------------
  // 019 — SAPPHIRE CLEAR SUPPORT
  // ----------------------------------------------------------

  {
    id: "xcel-ub-019",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "CLEAR_SUPPORT",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "SAPPHIRE BARS",

    question:
      "Sapphire SR #1 requires a minimum 'B' skill finishing in clear support at:",

    options: [
      { id: "A", text: "Horizontal" },
      { id: "B", text: "45° from vertical" },
      { id: "C", text: "Vertical" },
      { id: "D", text: "Any angle" }
    ],

    correctOptionId: "C",

    explanation:
      "Sapphire requires a minimum 'B' skill finishing in clear support at vertical, excluding the mount and dismount.",

    takeaway:
      "SAPPHIRE WANTS VERTICAL.",

    ruleKey:
      "xcel.ub.sapphire.clear_support_vertical",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Sapphire",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "sapphire",
      "bars",
      "vertical",
      "special-requirement"
    ]
  },

  // ----------------------------------------------------------
  // 020 — SAPPHIRE SECOND CIRCLE
  // ----------------------------------------------------------

  {
    id: "xcel-ub-020",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "SECOND_CIRCLE",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "CODE SMART",

    question:
      "If a Sapphire gymnast uses a second 360° circling skill for SR #3, it must be different from the circling skill used for SR #2.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Sapphire SR #3 may be fulfilled by a minimum 'B' turn, a minimum 'B' release, or a second minimum 'B' 360° circling skill that is different from SR #2.",

    takeaway:
      "SAPPHIRE'S SECOND CIRCLE MUST BE DIFFERENT.",

    ruleKey:
      "xcel.ub.sapphire.second_circle_different",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Sapphire",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "sapphire",
      "bars",
      "circling",
      "special-requirement"
    ]
  },

  // ----------------------------------------------------------
  // 021 — SAPPHIRE DISMOUNT
  // ----------------------------------------------------------

  {
    id: "xcel-ub-021",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["UB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DISMOUNT",

    difficulty: "CODE_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "SAPPHIRE DISMOUNT",

    question:
      "Which combination can fulfill Sapphire's Bars dismount requirement?",

    options: [
      { id: "A", text: "Any A dismount" },
      { id: "B", text: "Minimum B dismount" },
      { id: "C", text: "C skill directly connected to an A salto dismount" },
      { id: "D", text: "Either B or C" }
    ],

    correctOptionId: "D",

    explanation:
      "Sapphire requires either a minimum 'B' dismount or a 'C' skill directly connected to an 'A' salto dismount.",

    takeaway:
      "SAPPHIRE: B DISMOUNT OR C + A SALTO.",

    ruleKey:
      "xcel.ub.sapphire.dismount_requirement",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Sapphire",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "sapphire",
      "bars",
      "dismount"
    ]
  },

  // ----------------------------------------------------------
  // 022 — FALL TIME
  // ----------------------------------------------------------

  {
    id: "xcel-ub-022",

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

    category: "TIMING",
    subcategory: "FALL_TIME",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "ON THE CLOCK",

    question:
      "How much fall time does an Xcel gymnast have on Bars?",

    options: [
      { id: "A", text: "30 seconds" },
      { id: "B", text: "45 seconds" },
      { id: "C", text: "60 seconds" },
      { id: "D", text: "90 seconds" }
    ],

    correctOptionId: "B",

    explanation:
      "Xcel Bars fall time is 45 seconds. The time begins when the gymnast is back standing on her feet. If an injury is assessed, the fall time begins after the medical assessment is complete.",

    takeaway:
      "BARS FALL TIME = 45 SECONDS.",

    ruleKey:
      "xcel.ub.fall_time_45",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars Rules — Clarifications",
      pageLabel: "UNEVEN BARS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bars",
      "timing",
      "fall-time"
    ]
  },

  // ----------------------------------------------------------
  // 023 — FLEXED / SICKLED FEET
  // ----------------------------------------------------------

  {
    id: "xcel-ub-023",

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

    category: "EXECUTION",
    subcategory: "FOOT_FORM",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "FEET CHECK",

    question:
      "Flexed or sickled feet on an Xcel Bars Value Part or skill can cost:",

    options: [
      { id: "A", text: "0.05 each time" },
      { id: "B", text: "0.10 each time" },
      { id: "C", text: "0.20 each time" },
      { id: "D", text: "0.50 each time" }
    ],

    correctOptionId: "A",

    explanation:
      "Flexed or sickled feet on Value Part or skill elements receive a 0.05 deduction each time.",

    takeaway:
      "POINT YOUR FEET. 0.05 ADDS UP.",

    ruleKey:
      "xcel.ub.execution.flexed_sickled_feet",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Bar Deductions",
      pageLabel: "UNEVEN BARS - 27"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bars",
      "execution",
      "feet"
    ]
  },

  // ----------------------------------------------------------
  // 024 — BRUSH VS HIT
  // ----------------------------------------------------------

  {
    id: "xcel-ub-024",

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

    category: "EXECUTION",
    subcategory: "APPARATUS_CONTACT",

    difficulty: "COMPETITION_SMART",

    format: "WHICH_COSTS_MORE",
    eyebrow: "BRUSH OR HIT?",

    question:
      "Which can receive the larger Bars deduction?",

    options: [
      { id: "A", text: "A light foot brush on the apparatus" },
      { id: "B", text: "Hitting the apparatus with the feet" }
    ],

    correctOptionId: "B",

    explanation:
      "A touch or brush with the feet can receive up to 0.10. Hitting the apparatus with the feet receives 0.20.",

    takeaway:
      "A HIT COSTS MORE THAN A BRUSH.",

    ruleKey:
      "xcel.ub.execution.brush_vs_hit",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Bar Deductions",
      pageLabel: "UNEVEN BARS - 27"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bars",
      "execution",
      "brush",
      "apparatus-contact"
    ]
  },

  // ----------------------------------------------------------
  // 025 — BENT ARMS / LEGS
  // ----------------------------------------------------------

  {
    id: "xcel-ub-025",

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

    category: "EXECUTION",
    subcategory: "BENT_ARMS_LEGS",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "FORM CHECK",

    question:
      "Bent arms in support or bent legs on an Xcel Bars element can each cost up to:",

    options: [
      { id: "A", text: "0.10" },
      { id: "B", text: "0.20" },
      { id: "C", text: "0.30" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "C",

    explanation:
      "Bent arms in support and bent legs can each receive up to 0.30. A bend of 90° or more receives the maximum deduction.",

    takeaway:
      "BENT ARMS OR LEGS CAN COST 0.30 EACH.",

    ruleKey:
      "xcel.ub.execution.bent_arms_legs",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Bar Deductions",
      pageLabel: "UNEVEN BARS - 28"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bars",
      "execution",
      "bent-arms",
      "bent-legs"
    ]
  },

  // ----------------------------------------------------------
  // 026 — GRAB BAR TO SAVE FALL
  // ----------------------------------------------------------

  {
    id: "xcel-ub-026",

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

    category: "EXECUTION",
    subcategory: "GRASP_TO_AVOID_FALL",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "SAVE OR DEDUCTION?",

    question:
      "A gymnast grabs the bar apparatus to avoid falling. What is the deduction?",

    options: [
      { id: "A", text: "0.10" },
      { id: "B", text: "0.20" },
      { id: "C", text: "0.30" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "C",

    explanation:
      "Grasping the bar apparatus to avoid a fall receives a 0.30 deduction.",

    takeaway:
      "GRAB TO SAVE IT = 0.30.",

    ruleKey:
      "xcel.ub.execution.grasp_bar_avoid_fall",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Bar Deductions",
      pageLabel: "UNEVEN BARS - 28"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bars",
      "execution",
      "fall"
    ]
  },

  // ----------------------------------------------------------
  // 027 — EXTRA SWING
  // ----------------------------------------------------------

  {
    id: "xcel-ub-027",

    program: "XCEL",

    divisions: [
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB"],

    category: "EXECUTION",
    subcategory: "EXTRA_SWING",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "EXTRA SWING",

    question:
      "What is the deduction for an intermediate extra swing in Platinum, Diamond or Sapphire?",

    options: [
      { id: "A", text: "0.10" },
      { id: "B", text: "0.20" },
      { id: "C", text: "0.30" },
      { id: "D", text: "0.50 every time" }
    ],

    correctOptionId: "C",

    explanation:
      "An intermediate extra swing receives a 0.30 deduction. Multiple extra swings following an element have a maximum deduction of 0.50.",

    takeaway:
      "EXTRA SWING = 0.30.",

    ruleKey:
      "xcel.ub.execution.extra_swing",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Bar Deductions",
      pageLabel: "UNEVEN BARS - 28"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bars",
      "platinum",
      "diamond",
      "sapphire",
      "extra-swing"
    ]
  },

  // ----------------------------------------------------------
  // 028 — GIANT CREDIT
  // ----------------------------------------------------------

  {
    id: "xcel-ub-028",

    program: "XCEL",

    divisions: [
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB"],

    category: "VALUE_PARTS",
    subcategory: "GIANT_COMPLETION",

    difficulty: "CODE_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "GIANT CHECK",

    question:
      "A backward or forward giant must be completed to within how many degrees of vertical to receive the listed 'B' VP credit?",

    options: [
      { id: "A", text: "10°" },
      { id: "B", text: "20°" },
      { id: "C", text: "30°" },
      { id: "D", text: "45°" }
    ],

    correctOptionId: "B",

    explanation:
      "Backward and forward giant circles must complete to within 20° of vertical to receive the listed 'B' VP credit.",

    takeaway:
      "GIANT CREDIT: WITHIN 20° OF VERTICAL.",

    ruleKey:
      "xcel.ub.value_parts.giant_within_20",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Circle / Swing Clarifications",
      pageLabel: "UNEVEN BARS - 16"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bars",
      "giant",
      "value-part",
      "vertical"
    ]
  },

  // ----------------------------------------------------------
  // 029 — TAP SWING DIAMOND/SAPPHIRE
  // ----------------------------------------------------------

  {
    id: "xcel-ub-029",

    program: "XCEL",

    divisions: [
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB"],

    category: "VALUE_PARTS",
    subcategory: "TAP_SWING_COUNTERSWING",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "MYTH OR CODE?",

    question:
      "A tap swing or underswing-counterswing receives Value Part credit in Diamond and Sapphire.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Tap swings and underswing-counterswings are not Value Parts in Diamond or Sapphire. They can also receive an extra-swing deduction unless an listed exception applies.",

    takeaway:
      "DIAMOND/SAPPHIRE: TAP SWING ≠ VP.",

    ruleKey:
      "xcel.ub.diamond_sapphire.tap_swing_no_vp",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Circle / Swing Clarifications",
      pageLabel: "UNEVEN BARS - 16"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "diamond",
      "sapphire",
      "bars",
      "tap-swing",
      "vp"
    ]
  },

  // ----------------------------------------------------------
  // 030 — FLYAWAY
  // ----------------------------------------------------------

  {
    id: "xcel-ub-030",

    program: "XCEL",

    divisions: [
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB"],

    category: "VALUE_PARTS",
    subcategory: "FLYAWAY_DISMOUNT",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "FLYAWAY CHECK",

    question:
      "A flyaway dismount must be initiated from the high bar to receive Value Part credit.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "All flyaway dismounts must be initiated from the high bar to receive VP credit.",

    takeaway:
      "FLYAWAY VP CREDIT STARTS FROM HIGH BAR.",

    ruleKey:
      "xcel.ub.flyaway.high_bar_required",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Element Clarifications",
      pageLabel: "UNEVEN BARS - 17"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bars",
      "flyaway",
      "dismount",
      "high-bar"
    ]
  }

];
