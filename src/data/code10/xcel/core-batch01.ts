import type { PRFCT10Question } from "../types";
// ============================================================
// PRFCT10 CHALLENGE
// QUESTION BANK — BATCH 01
// PROGRAM: XCEL
// TOPICS: EXECUTION / LANDINGS / GENERAL
// VERIFIED AGAINST:
// USA Gymnastics Women's Xcel Code of Points
// Revision: August 2026
// Cycle: 2022–2028
// ============================================================

export const xcelCoreBatch01: PRFCT10Question[] = [

  // ----------------------------------------------------------
  // 001
  // ----------------------------------------------------------

  {
    id: "xcel-core-001",

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

    category: "GENERAL",
    subcategory: "COMPOSITION",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "TRUE OR FALSE",

    question:
      "Xcel routines can receive composition deductions for how the routine is constructed.",

    options: [
      {
        id: "A",
        text: "True"
      },
      {
        id: "B",
        text: "False"
      }
    ],

    correctOptionId: "B",

    explanation:
      "Composition deductions are not applied in the Xcel Program. The emphasis is on allowable skills, requirements, execution and artistry.",

    takeaway:
      "XCEL DOES NOT USE COMPOSITION DEDUCTIONS.",

    ruleKey:
      "xcel.general.no_composition_deductions",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "General / Judges",
      pageLabel: "GENERAL / JUDGES - 7"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "general",
      "composition",
      "all-divisions"
    ]
  },

  // ----------------------------------------------------------
  // 002
  // ----------------------------------------------------------

  {
    id: "xcel-core-002",

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

    category: "EXECUTION",
    subcategory: "MAXIMUM_EXECUTION",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "HOW MUCH?",

    question:
      "What is the maximum total for execution deductions in an Xcel Bars, Beam or Floor routine?",

    options: [
      {
        id: "A",
        text: "2.00"
      },
      {
        id: "B",
        text: "3.00"
      },
      {
        id: "C",
        text: "4.00"
      },
      {
        id: "D",
        text: "5.00"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Execution deductions can total a maximum of 4.00. Falls are included in that maximum. Artistry and spotting deductions can be taken in addition.",

    takeaway:
      "EXECUTION CAN MAX OUT AT 4.00.",

    ruleKey:
      "xcel.general.execution_maximum",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "General / Judges — Routine Requirement Formula",
      pageLabel: "GENERAL / JUDGES - 7"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "execution",
      "maximum",
      "falls"
    ]
  },

  // ----------------------------------------------------------
  // 003
  // ----------------------------------------------------------

  {
    id: "xcel-core-003",

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

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "MISSING_SR",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "SPECIAL REQUIREMENT",

    question:
      "How much is deducted from Start Value for each missing Special Requirement?",

    options: [
      {
        id: "A",
        text: "0.10"
      },
      {
        id: "B",
        text: "0.30"
      },
      {
        id: "C",
        text: "0.50"
      },
      {
        id: "D",
        text: "1.00"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Each missing Special Requirement reduces the Start Value by 0.50.",

    takeaway:
      "ONE MISSING SR = 0.50 OFF START VALUE.",

    ruleKey:
      "xcel.general.missing_special_requirement",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "General / Judges — Calculating Start Values",
      pageLabel: "GENERAL / JUDGES - 7"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "special-requirements",
      "start-value",
      "sr"
    ]
  },

  // ----------------------------------------------------------
  // 004
  // ----------------------------------------------------------

  {
    id: "xcel-core-004",

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

    category: "RESTRICTIONS",
    subcategory: "RESTRICTED_ELEMENT",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "WHAT HAPPENS?",

    question:
      "What happens when a gymnast performs a restricted element in her Xcel division?",

    options: [
      {
        id: "A",
        text: "Only 0.10 execution is deducted"
      },
      {
        id: "B",
        text: "The element receives full credit but loses bonus"
      },
      {
        id: "C",
        text: "0.50 comes off Start Value and the restricted element does not receive VP credit"
      },
      {
        id: "D",
        text: "The entire routine automatically receives a zero"
      }
    ],

    correctOptionId: "C",

    explanation:
      "A restricted element receives no Value Part credit and causes a 0.50 deduction from Start Value. Because an element must receive VP credit to fulfill a Special Requirement, it cannot be used to satisfy an SR.",

    takeaway:
      "RESTRICTED ELEMENT = NO VP + 0.50 OFF SV.",

    ruleKey:
      "xcel.general.restricted_element",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "General / Judges — Calculating Start Values",
      pageLabel: "GENERAL / JUDGES - 7"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "restrictions",
      "restricted-element",
      "vp",
      "sr",
      "start-value"
    ]
  },

  // ----------------------------------------------------------
  // 005
  // ----------------------------------------------------------

  {
    id: "xcel-core-005",

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

    category: "GENERAL",
    subcategory: "NO_DISMOUNT",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "HOW MUCH?",

    question:
      "How much is deducted from Start Value when an Xcel Bars, Beam or Floor exercise is without a dismount?",

    options: [
      {
        id: "A",
        text: "0.10"
      },
      {
        id: "B",
        text: "0.30"
      },
      {
        id: "C",
        text: "0.50"
      },
      {
        id: "D",
        text: "1.00"
      }
    ],

    correctOptionId: "B",

    explanation:
      "An exercise without a dismount receives a 0.30 deduction from Start Value.",

    takeaway:
      "NO DISMOUNT = 0.30 OFF START VALUE.",

    ruleKey:
      "xcel.general.exercise_without_dismount",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "General / Judges — Calculating Start Values",
      pageLabel: "GENERAL / JUDGES - 7"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "dismount",
      "start-value"
    ]
  },

  // ----------------------------------------------------------
  // 006
  // ----------------------------------------------------------

  {
    id: "xcel-core-006",

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

    category: "EXECUTION",
    subcategory: "FOOT_FORM",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "FEET CHECK",

    question:
      "Flexed or sickled feet on an Xcel Floor Value Part or skill can cost:",

    options: [
      {
        id: "A",
        text: "Nothing if the skill is completed"
      },
      {
        id: "B",
        text: "0.05 each time"
      },
      {
        id: "C",
        text: "0.20 each time"
      },
      {
        id: "D",
        text: "0.50 each time"
      }
    ],

    correctOptionId: "B",

    explanation:
      "Flexed or sickled feet on Floor Value Parts or skills receive a 0.05 execution deduction each time.",

    takeaway:
      "FOOT FORM STILL COUNTS.",

    ruleKey:
      "xcel.fx.execution.flexed_sickled_feet",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Execution & Artistry Deductions",
      pageLabel: "FLOOR EXERCISE - 18"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "feet",
      "execution"
    ]
  },

  // ----------------------------------------------------------
  // 007
  // ----------------------------------------------------------

  {
    id: "xcel-core-007",

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

    category: "LANDING",
    subcategory: "SMALL_MEDIUM_STEP",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "LANDING MATH",

    question:
      "On Xcel Bars or Beam dismounts and applicable Floor acro landings, how much can each small or medium landing step cost?",

    options: [
      {
        id: "A",
        text: "0.05 only"
      },
      {
        id: "B",
        text: "0.10–0.15"
      },
      {
        id: "C",
        text: "0.20–0.30"
      },
      {
        id: "D",
        text: "0.50"
      }
    ],

    correctOptionId: "B",

    explanation:
      "Each small or medium landing step can receive a 0.10 to 0.15 deduction, with a maximum of 0.40 for these steps.",

    takeaway:
      "SMALL OR MEDIUM STEPS: 0.10–0.15 EACH.",

    ruleKey:
      "xcel.execution.landing.small_medium_steps",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Execution — Landing Deductions",
      pageLabel: "UB 27 / BB 21 / FX 18"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "landing",
      "steps",
      "execution"
    ]
  },

  // ----------------------------------------------------------
  // 008
  // ----------------------------------------------------------

  {
    id: "xcel-core-008",

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

    category: "LANDING",
    subcategory: "STEP_MAXIMUM",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "TRUE OR FALSE",

    question:
      "Small and medium landing-step deductions can keep adding beyond 0.40.",

    options: [
      {
        id: "A",
        text: "True"
      },
      {
        id: "B",
        text: "False"
      }
    ],

    correctOptionId: "B",

    explanation:
      "Small and medium landing steps are subject to a maximum total deduction of 0.40.",

    takeaway:
      "SMALL/MEDIUM STEP DEDUCTIONS MAX OUT AT 0.40.",

    ruleKey:
      "xcel.execution.landing.small_medium_step_maximum",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Execution — Landing Deductions",
      pageLabel: "UB 27 / BB 21 / FX 18"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "landing",
      "steps",
      "maximum"
    ]
  },

  // ----------------------------------------------------------
  // 009
  // ----------------------------------------------------------

  {
    id: "xcel-core-009",

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

    category: "LANDING",
    subcategory: "CONTROLLED_LUNGE",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "CONTROL CHECK",

    question:
      "After an Xcel Floor acro element, a gymnast takes a small controlled step in the direction of the skill to finish in a lunge. Is a step deduction automatically taken?",

    options: [
      {
        id: "A",
        text: "Yes, every step must always be deducted"
      },
      {
        id: "B",
        text: "No, not if the landing remains controlled"
      },
      {
        id: "C",
        text: "Only in Sapphire"
      },
      {
        id: "D",
        text: "Only if her arms move"
      }
    ],

    correctOptionId: "B",

    explanation:
      "A small step continuing in the direction of the acro skill to finish in a lunge or on one knee is acceptable unless the landing appears out of control.",

    takeaway:
      "CONTROL MATTERS.",

    ruleKey:
      "xcel.fx.landing.controlled_lunge_step",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Execution & Artistry Deductions",
      pageLabel: "FLOOR EXERCISE - 18"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "landing",
      "lunge",
      "control"
    ]
  },

  // ----------------------------------------------------------
  // 010
  // ----------------------------------------------------------

  {
    id: "xcel-core-010",

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

    category: "LANDING",
    subcategory: "LARGE_STEP",

    difficulty: "FOUNDATION",

    format: "WHICH_COSTS_MORE",
    eyebrow: "WHICH COSTS MORE?",

    question:
      "Which Xcel Floor landing mistake can receive the larger deduction?",

    options: [
      {
        id: "A",
        text: "A slight hop"
      },
      {
        id: "B",
        text: "A large step or jump of approximately 3 feet or more"
      }
    ],

    correctOptionId: "B",

    explanation:
      "A slight hop can receive up to 0.10. A large step or jump of approximately 3 feet or more receives 0.20 each, with a maximum of 0.40.",

    takeaway:
      "A LARGE STEP COSTS MORE THAN A SLIGHT HOP.",

    ruleKey:
      "xcel.fx.landing.large_step_vs_slight_hop",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Execution Deductions",
      pageLabel: "FLOOR EXERCISE - 18 / 19"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "landing",
      "large-step",
      "hop"
    ]
  },

  // ----------------------------------------------------------
  // 011
  // ----------------------------------------------------------

  {
    id: "xcel-core-011",

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

    category: "LANDING",
    subcategory: "SQUAT_LANDING",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "HOW MUCH?",

    question:
      "How much can a deep squat on an Xcel Floor landing cost?",

    options: [
      {
        id: "A",
        text: "0.10"
      },
      {
        id: "B",
        text: "0.20"
      },
      {
        id: "C",
        text: "Up to 0.30"
      },
      {
        id: "D",
        text: "Always 0.50"
      }
    ],

    correctOptionId: "C",

    explanation:
      "A squat landing can receive up to 0.30 when the hips are lower than the knees or the knee compression is extreme.",

    takeaway:
      "A DEEP SQUAT CAN COST UP TO 0.30.",

    ruleKey:
      "xcel.fx.landing.squat",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Execution Deductions",
      pageLabel: "FLOOR EXERCISE - 19"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "landing",
      "squat"
    ]
  },

  // ----------------------------------------------------------
  // 012
  // ----------------------------------------------------------

  {
    id: "xcel-core-012",

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

    category: "LANDING",
    subcategory: "SQUAT_THEN_FALL",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "WHAT IF SHE FALLS?",

    question:
      "A gymnast lands an Xcel Floor acro element in a deep squat and then falls. What can be deducted?",

    options: [
      {
        id: "A",
        text: "Only the fall"
      },
      {
        id: "B",
        text: "Only the squat"
      },
      {
        id: "C",
        text: "Up to 0.30 for the squat plus 0.50 for the fall"
      },
      {
        id: "D",
        text: "The element automatically receives a zero"
      }
    ],

    correctOptionId: "C",

    explanation:
      "The squat or compressed landing deduction may be applied and an additional 0.50 is deducted for the fall.",

    takeaway:
      "A LANDING ERROR AND A FALL CAN BOTH COUNT.",

    ruleKey:
      "xcel.fx.landing.squat_then_fall",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Execution Deductions",
      pageLabel: "FLOOR EXERCISE - 19"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "landing",
      "squat",
      "fall"
    ]
  },

  // ----------------------------------------------------------
  // 013
  // ----------------------------------------------------------

  {
    id: "xcel-core-013",

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

    category: "LANDING",
    subcategory: "HAND_BRUSH",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "BRUSH OR FALL?",

    question:
      "A gymnast briefly brushes the Floor landing surface with one hand but does not support her body weight. This is automatically considered a fall.",

    options: [
      {
        id: "A",
        text: "True"
      },
      {
        id: "B",
        text: "False"
      }
    ],

    correctOptionId: "B",

    explanation:
      "A brush or touch of the landing surface without support can receive up to 0.30. Supporting body weight on the hand or hands is treated differently.",

    takeaway:
      "A BRUSH IS NOT THE SAME AS SUPPORT.",

    ruleKey:
      "xcel.fx.landing.hand_brush_no_support",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Execution Deductions",
      pageLabel: "FLOOR EXERCISE - 19"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "landing",
      "hands",
      "brush"
    ]
  },

  // ----------------------------------------------------------
  // 014
  // ----------------------------------------------------------

  {
    id: "xcel-core-014",

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

    category: "LANDING",
    subcategory: "HAND_SUPPORT",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "HOW MUCH?",

    question:
      "How much is deducted when a gymnast supports herself on one or two hands on the Floor landing surface?",

    options: [
      {
        id: "A",
        text: "0.10"
      },
      {
        id: "B",
        text: "0.30"
      },
      {
        id: "C",
        text: "0.50"
      },
      {
        id: "D",
        text: "1.00"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Support on the Floor landing surface with one or two hands receives a 0.50 deduction.",

    takeaway:
      "HAND SUPPORT = 0.50.",

    ruleKey:
      "xcel.fx.landing.hand_support",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Execution Deductions",
      pageLabel: "FLOOR EXERCISE - 19"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "landing",
      "hands",
      "fall"
    ]
  },

  // ----------------------------------------------------------
  // 015
  // ----------------------------------------------------------

  {
    id: "xcel-core-015",

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

    category: "LANDING",
    subcategory: "FALL_KNEES_HIPS",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "HOW MUCH?",

    question:
      "How much is deducted for a fall onto the knees or hips on the Floor mat?",

    options: [
      {
        id: "A",
        text: "0.20"
      },
      {
        id: "B",
        text: "0.30"
      },
      {
        id: "C",
        text: "0.50"
      },
      {
        id: "D",
        text: "1.00"
      }
    ],

    correctOptionId: "C",

    explanation:
      "A fall onto the knees or hips on the Floor mat receives a 0.50 deduction.",

    takeaway:
      "A FALL TO KNEES OR HIPS = 0.50.",

    ruleKey:
      "xcel.fx.landing.fall_knees_hips",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Execution Deductions",
      pageLabel: "FLOOR EXERCISE - 19"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "fall",
      "landing"
    ]
  },

  // ----------------------------------------------------------
  // 016
  // ----------------------------------------------------------

  {
    id: "xcel-core-016",

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

    category: "EXECUTION",
    subcategory: "BENT_LEGS",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "BENT KNEES",

    question:
      "Bent legs during an Xcel Floor element can receive a deduction of up to:",

    options: [
      {
        id: "A",
        text: "0.10"
      },
      {
        id: "B",
        text: "0.20"
      },
      {
        id: "C",
        text: "0.30"
      },
      {
        id: "D",
        text: "0.50"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Bent legs are a large execution fault of up to 0.30. A bend of 90° or greater receives the maximum 0.30 deduction.",

    takeaway:
      "BENT LEGS CAN COST UP TO 0.30.",

    ruleKey:
      "xcel.fx.execution.bent_legs",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Execution Deductions",
      pageLabel: "FLOOR EXERCISE - 19"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "execution",
      "legs",
      "knees"
    ]
  },

  // ----------------------------------------------------------
  // 017
  // ----------------------------------------------------------

  {
    id: "xcel-core-017",

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
    subcategory: "HIT_APPARATUS",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "BARS CHECK",

    question:
      "A gymnast hits the bar with her foot or feet during an Xcel Bars element. What deduction applies?",

    options: [
      {
        id: "A",
        text: "0.05"
      },
      {
        id: "B",
        text: "0.10"
      },
      {
        id: "C",
        text: "0.20"
      },
      {
        id: "D",
        text: "Automatic fall"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Hitting the apparatus with the foot or feet receives a 0.20 deduction. A lighter touch or brush is evaluated separately and may receive a smaller deduction.",

    takeaway:
      "A HIT IS DIFFERENT FROM A BRUSH.",

    ruleKey:
      "xcel.ub.execution.hit_apparatus_feet",

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
      "apparatus-contact"
    ]
  },

  // ----------------------------------------------------------
  // 018
  // ----------------------------------------------------------

  {
    id: "xcel-core-018",

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

    category: "LANDING",
    subcategory: "TRUNK_ARM_MOVEMENT",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "SAVE OR STICK?",

    question:
      "A gymnast sticks her Xcel Bars dismount but makes extra arm or trunk movements to maintain balance. She can still receive an execution deduction.",

    options: [
      {
        id: "A",
        text: "True"
      },
      {
        id: "B",
        text: "False"
      }
    ],

    correctOptionId: "A",

    explanation:
      "Additional trunk movements or arm swings used to maintain balance or control can receive up to 0.20, even when the feet do not move.",

    takeaway:
      "A STICK CAN STILL HAVE LANDING ERRORS.",

    ruleKey:
      "xcel.ub.landing.trunk_arm_balance",

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
      "landing",
      "arms",
      "balance",
      "stick"
    ]
  },

  // ----------------------------------------------------------
  // 019
  // ----------------------------------------------------------

  {
    id: "xcel-core-019",

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

    category: "LANDING",
    subcategory: "NO_DOUBLE_COUNT",

    difficulty: "CODE_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "DON'T DOUBLE COUNT IT",

    question:
      "On an Xcel Bars dismount, a gymnast swings her arms to save the landing and that movement leads directly into a step. What should be deducted?",

    options: [
      {
        id: "A",
        text: "The arm swing and the step"
      },
      {
        id: "B",
        text: "The step only"
      },
      {
        id: "C",
        text: "Nothing"
      },
      {
        id: "D",
        text: "Automatic 0.50"
      }
    ],

    correctOptionId: "B",

    explanation:
      "When trunk or arm movement leads directly to a step, the additional balance movement is not deducted separately. Deduct only for the step.",

    takeaway:
      "DON'T COUNT THE SAME LANDING ERROR TWICE.",

    ruleKey:
      "xcel.ub.landing.arm_movement_leads_to_step",

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
      "landing",
      "step",
      "balance"
    ]
  },

  // ----------------------------------------------------------
  // 020
  // ----------------------------------------------------------

  {
    id: "xcel-core-020",

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

    category: "LANDING",
    subcategory: "FEET_APART",

    difficulty: "CODE_SMART",

    format: "HOW_MUCH",
    eyebrow: "FEET APART",

    question:
      "A gymnast lands her Xcel Beam dismount with her feet no wider than hip-width, controls the landing, but never joins her heels. What is the deduction?",

    options: [
      {
        id: "A",
        text: "No deduction"
      },
      {
        id: "B",
        text: "0.05"
      },
      {
        id: "C",
        text: "0.10"
      },
      {
        id: "D",
        text: "0.20"
      }
    ],

    correctOptionId: "B",

    explanation:
      "When the feet land no wider than hip-width but the heels are not joined on the controlled extension, the deduction is 0.05.",

    takeaway:
      "CONTROLLED DOESN'T ALWAYS MEAN DEDUCTION-FREE.",

    ruleKey:
      "xcel.bb.landing.hip_width_feet_not_joined",

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

    tags: [
      "xcel",
      "beam",
      "landing",
      "feet-apart",
      "dismount"
    ]
  }

];
