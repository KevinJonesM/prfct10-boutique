import type { PRFCT10Question } from "../types";
// ============================================================
// PRFCT10 CHALLENGE
// QUESTION BANK — BATCH 04
// PROGRAM: XCEL
// APPARATUS: BALANCE BEAM
// TOTAL QUESTIONS: 30
//
// VERIFIED AGAINST:
// USA Gymnastics Women's Xcel Code of Points
// Revision: August 2026
// Cycle: 2022–2028
// ============================================================

export const xcelBeamBatch04: PRFCT10Question[] = [

  // ----------------------------------------------------------
  // 001 — BRONZE TURN
  // ----------------------------------------------------------

  {
    id: "xcel-bb-001",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "TURN",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "BRONZE BEAM",

    question:
      "What is the minimum turn requirement for Xcel Bronze Beam?",

    options: [
      { id: "A", text: "¼ turn" },
      { id: "B", text: "½ turn on one or two feet" },
      { id: "C", text: "Full turn on one foot" },
      { id: "D", text: "No turn is required" }
    ],

    correctOptionId: "B",

    explanation:
      "Bronze requires a minimum ½ turn performed on one foot or two feet.",

    takeaway:
      "BRONZE NEEDS AT LEAST A ½ TURN.",

    ruleKey:
      "xcel.bb.bronze.half_turn",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Bronze",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "beam",
      "turn",
      "special-requirement"
    ]
  },

  // ----------------------------------------------------------
  // 002 — BRONZE SPLIT
  // ----------------------------------------------------------

  {
    id: "xcel-bb-002",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_SPLIT",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "TRUE OR FALSE",

    question:
      "Bronze Beam requires a specific split angle in its jump or leap Special Requirement.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Bronze requires one jump or leap, excluding the mount and dismount, but no split angle is required.",

    takeaway:
      "BRONZE: JUMP OR LEAP, NO REQUIRED SPLIT ANGLE.",

    ruleKey:
      "xcel.bb.bronze.no_split_requirement",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Bronze",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "beam",
      "split",
      "dance"
    ]
  },

  // ----------------------------------------------------------
  // 003 — BRONZE ACRO
  // ----------------------------------------------------------

  {
    id: "xcel-bb-003",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "ACRO CHECK",

    question:
      "What type of acro element is required for Bronze Beam?",

    options: [
      { id: "A", text: "One non-flight acro element" },
      { id: "B", text: "One aerial" },
      { id: "C", text: "One salto" },
      { id: "D", text: "Two flight elements" }
    ],

    correctOptionId: "A",

    explanation:
      "Bronze requires one non-flight acro element.",

    takeaway:
      "BRONZE ACRO = NON-FLIGHT.",

    ruleKey:
      "xcel.bb.bronze.nonflight_acro",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Bronze",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "beam",
      "acro",
      "non-flight"
    ]
  },

  // ----------------------------------------------------------
  // 004 — BRONZE WALKOVER
  // ----------------------------------------------------------

  {
    id: "xcel-bb-004",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["BB"],

    category: "RESTRICTIONS",
    subcategory: "WALKOVER",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "ALLOWED OR NOT?",

    question:
      "Walkovers are allowed in Xcel Bronze Beam.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Walkovers are specifically restricted in Bronze Beam.",

    takeaway:
      "NO WALKOVERS IN BRONZE.",

    ruleKey:
      "xcel.bb.bronze.no_walkovers",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Bronze",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "beam",
      "walkover",
      "restriction"
    ]
  },

  // ----------------------------------------------------------
  // 005 — SILVER TURN
  // ----------------------------------------------------------

  {
    id: "xcel-bb-005",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "TURN",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "SILVER BEAM",

    question:
      "Silver Beam requires a minimum ½ turn performed on:",

    options: [
      { id: "A", text: "Two feet only" },
      { id: "B", text: "One foot" },
      { id: "C", text: "The knees" },
      { id: "D", text: "Either the beam or floor" }
    ],

    correctOptionId: "B",

    explanation:
      "Silver requires a minimum ½ turn on one foot.",

    takeaway:
      "SILVER TURN = ½ ON ONE FOOT.",

    ruleKey:
      "xcel.bb.silver.half_turn_one_foot",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Silver",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "beam",
      "turn"
    ]
  },

  // ----------------------------------------------------------
  // 006 — SILVER SPLIT
  // ----------------------------------------------------------

  {
    id: "xcel-bb-006",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_SPLIT",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "SPLIT CHECK",

    question:
      "What split angle is required for Silver Beam's jump or leap Special Requirement?",

    options: [
      { id: "A", text: "60°" },
      { id: "B", text: "90°" },
      { id: "C", text: "120°" },
      { id: "D", text: "180°" }
    ],

    correctOptionId: "B",

    explanation:
      "Silver requires one jump or leap with a minimum 90° cross or side split.",

    takeaway:
      "SILVER SPLIT REQUIREMENT = 90°.",

    ruleKey:
      "xcel.bb.silver.split_90",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Silver",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "beam",
      "split",
      "90-degrees"
    ]
  },

  // ----------------------------------------------------------
  // 007 — SILVER ACRO RESTRICTION
  // ----------------------------------------------------------

  {
    id: "xcel-bb-007",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["BB"],

    category: "RESTRICTIONS",
    subcategory: "ACRO_DIFFICULTY",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "ALLOWED OR NOT?",

    question:
      "A 'B' acro Value Part is allowed in Xcel Silver Beam.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Silver does not allow 'B' acro Value Parts. It also does not allow 'C' or higher Value Parts.",

    takeaway:
      "SILVER: NO B ACRO.",

    ruleKey:
      "xcel.bb.silver.no_b_acro",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Silver",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "beam",
      "acro",
      "restriction"
    ]
  },

  // ----------------------------------------------------------
  // 008 — GOLD TURN
  // ----------------------------------------------------------

  {
    id: "xcel-bb-008",

    program: "XCEL",
    divisions: ["GOLD"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "TURN",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "GOLD BEAM",

    question:
      "What turn is required in Xcel Gold Beam?",

    options: [
      { id: "A", text: "½ turn on one foot" },
      { id: "B", text: "Minimum full turn on one foot" },
      { id: "C", text: "1½ turn" },
      { id: "D", text: "No turn requirement" }
    ],

    correctOptionId: "B",

    explanation:
      "Gold requires a minimum full turn on one foot.",

    takeaway:
      "GOLD = FULL TURN ON ONE FOOT.",

    ruleKey:
      "xcel.bb.gold.full_turn",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Gold",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "gold",
      "beam",
      "turn"
    ]
  },

  // ----------------------------------------------------------
  // 009 — GOLD DANCE
  // ----------------------------------------------------------

  {
    id: "xcel-bb-009",

    program: "XCEL",
    divisions: ["GOLD"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_ELEMENTS",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "DANCE CHECK",

    question:
      "Gold Beam requires two different Group 2 elements. What must at least one of them show?",

    options: [
      { id: "A", text: "90° split" },
      { id: "B", text: "120° split" },
      { id: "C", text: "155° split" },
      { id: "D", text: "180° split" }
    ],

    correctOptionId: "B",

    explanation:
      "Gold requires two different Group 2 elements, with at least one showing a minimum 120° cross or side split.",

    takeaway:
      "GOLD SPLIT TARGET = 120°.",

    ruleKey:
      "xcel.bb.gold.group2_split_120",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Gold",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "gold",
      "beam",
      "dance",
      "split"
    ]
  },

  // ----------------------------------------------------------
  // 010 — GOLD ACRO
  // ----------------------------------------------------------

  {
    id: "xcel-bb-010",

    program: "XCEL",
    divisions: ["GOLD"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "ACRO CHECK",

    question:
      "Gold Beam requires two acro elements, and at least one must achieve or pass through inverted vertical.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Gold requires two acro elements, with or without flight, and at least one must achieve or pass through inverted vertical.",

    takeaway:
      "GOLD NEEDS TWO ACRO + ONE THROUGH VERTICAL.",

    ruleKey:
      "xcel.bb.gold.two_acro_vertical",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Gold",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "gold",
      "beam",
      "acro",
      "vertical"
    ]
  },

  // ----------------------------------------------------------
  // 011 — PLATINUM DANCE SERIES
  // ----------------------------------------------------------

  {
    id: "xcel-bb-011",

    program: "XCEL",
    divisions: ["PLATINUM"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_SERIES",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "PLATINUM BEAM",

    question:
      "Platinum Beam requires a dance series of two eligible dance elements.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Platinum requires a dance series of two Group 1, 2 or eligible Group 3 elements. The two elements may be the same or different.",

    takeaway:
      "PLATINUM NEEDS A DANCE SERIES.",

    ruleKey:
      "xcel.bb.platinum.dance_series",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Platinum",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "platinum",
      "beam",
      "dance-series"
    ]
  },

  // ----------------------------------------------------------
  // 012 — PLATINUM SPLIT
  // ----------------------------------------------------------

  {
    id: "xcel-bb-012",

    program: "XCEL",
    divisions: ["PLATINUM"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_SPLIT",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "SPLIT CHECK",

    question:
      "What minimum split angle is required for Platinum Beam's split jump or leap requirement?",

    options: [
      { id: "A", text: "90°" },
      { id: "B", text: "120°" },
      { id: "C", text: "155°" },
      { id: "D", text: "180°" }
    ],

    correctOptionId: "B",

    explanation:
      "Platinum requires one jump or leap with a minimum 120° cross or side split. It may be isolated or included in the dance series.",

    takeaway:
      "PLATINUM BEAM SPLIT = 120°.",

    ruleKey:
      "xcel.bb.platinum.split_120",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Platinum",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "platinum",
      "beam",
      "split",
      "120-degrees"
    ]
  },

  // ----------------------------------------------------------
  // 013 — PLATINUM ACRO
  // ----------------------------------------------------------

  {
    id: "xcel-bb-013",

    program: "XCEL",
    divisions: ["PLATINUM"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "ACRO CHECK",

    question:
      "Which can fulfill Platinum Beam's acro Special Requirement?",

    options: [
      {
        id: "A",
        text: "One acro flight element"
      },
      {
        id: "B",
        text: "An acro series, with or without flight, with at least one skill achieving or passing through vertical"
      },
      {
        id: "C",
        text: "Either A or B"
      },
      {
        id: "D",
        text: "Only a salto"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Platinum may fulfill SR #3 with one acro flight element or an acro series, with or without flight, provided at least one skill achieves or passes through vertical. The mount and dismount are excluded.",

    takeaway:
      "PLATINUM HAS TWO WAYS TO HIT THE ACRO SR.",

    ruleKey:
      "xcel.bb.platinum.acro_sr",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Platinum",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "platinum",
      "beam",
      "acro",
      "flight"
    ]
  },

  // ----------------------------------------------------------
  // 014 — DIAMOND SPLIT
  // ----------------------------------------------------------

  {
    id: "xcel-bb-014",

    program: "XCEL",
    divisions: ["DIAMOND"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_SPLIT",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "DIAMOND SPLIT",

    question:
      "What is the current required split angle for Diamond Beam?",

    options: [
      { id: "A", text: "120°" },
      { id: "B", text: "150°" },
      { id: "C", text: "155°" },
      { id: "D", text: "180°" }
    ],

    correctOptionId: "C",

    explanation:
      "The current Diamond Beam requirement is a minimum 155° cross or side split.",

    takeaway:
      "DIAMOND BEAM = 155°.",

    ruleKey:
      "xcel.bb.diamond.split_155",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Diamond",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "diamond",
      "beam",
      "split",
      "155-degrees"
    ]
  },

  // ----------------------------------------------------------
  // 015 — DIAMOND ACRO
  // ----------------------------------------------------------

  {
    id: "xcel-bb-015",

    program: "XCEL",
    divisions: ["DIAMOND"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "DIAMOND ACRO",

    question:
      "Diamond Beam requires an acro series and also an acro flight element.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Diamond requires an acro series, with or without flight, with at least one skill achieving or passing through vertical, plus one acro flight element that may be isolated or in a series.",

    takeaway:
      "DIAMOND: ACRO SERIES + FLIGHT ELEMENT.",

    ruleKey:
      "xcel.bb.diamond.acro_series_and_flight",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Diamond",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "diamond",
      "beam",
      "acro",
      "flight",
      "series"
    ]
  },

  // ----------------------------------------------------------
  // 016 — DIAMOND DISMOUNT
  // ----------------------------------------------------------

  {
    id: "xcel-bb-016",

    program: "XCEL",
    divisions: ["DIAMOND"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DISMOUNT",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "DIAMOND DISMOUNT",

    question:
      "What type of dismount is required for Diamond Beam?",

    options: [
      { id: "A", text: "Any jump off" },
      { id: "B", text: "Cartwheel dismount only" },
      { id: "C", text: "Salto or aerial dismount" },
      { id: "D", text: "No dismount requirement" }
    ],

    correctOptionId: "C",

    explanation:
      "Diamond SR #4 requires a salto or aerial dismount.",

    takeaway:
      "DIAMOND DISMOUNT = SALTO OR AERIAL.",

    ruleKey:
      "xcel.bb.diamond.salto_aerial_dismount",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Diamond",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "diamond",
      "beam",
      "dismount",
      "salto",
      "aerial"
    ]
  },

  // ----------------------------------------------------------
  // 017 — SAPPHIRE SPLIT
  // ----------------------------------------------------------

  {
    id: "xcel-bb-017",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_SPLIT",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "SAPPHIRE SPLIT",

    question:
      "What split angle is required by Sapphire Beam's dance requirement?",

    options: [
      { id: "A", text: "120°" },
      { id: "B", text: "155°" },
      { id: "C", text: "170°" },
      { id: "D", text: "180°" }
    ],

    correctOptionId: "D",

    explanation:
      "Sapphire requires a leap or jump requiring a 180° cross or side split.",

    takeaway:
      "SAPPHIRE TARGET = FULL 180°.",

    ruleKey:
      "xcel.bb.sapphire.split_180",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Sapphire",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "sapphire",
      "beam",
      "split",
      "180-degrees"
    ]
  },

  // ----------------------------------------------------------
  // 018 — SAPPHIRE ACRO
  // ----------------------------------------------------------

  {
    id: "xcel-bb-018",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO_SERIES",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "SAPPHIRE ACRO",

    question:
      "What must Sapphire's Beam acro series include?",

    options: [
      { id: "A", text: "At least one flight skill" },
      { id: "B", text: "Exactly two saltos" },
      { id: "C", text: "Only non-flight skills" },
      { id: "D", text: "A mount" }
    ],

    correctOptionId: "A",

    explanation:
      "Sapphire requires an acro series with at least one flight skill. At least one skill in the series must also pass through or achieve vertical or be a salto or aerial.",

    takeaway:
      "SAPPHIRE ACRO SERIES MUST INCLUDE FLIGHT.",

    ruleKey:
      "xcel.bb.sapphire.acro_series_flight",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Sapphire",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "sapphire",
      "beam",
      "acro",
      "flight",
      "series"
    ]
  },

  // ----------------------------------------------------------
  // 019 — SAPPHIRE DISMOUNT
  // ----------------------------------------------------------

  {
    id: "xcel-bb-019",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DISMOUNT",

    difficulty: "CODE_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "SAPPHIRE DISMOUNT",

    question:
      "Which can fulfill Sapphire's Beam dismount requirement?",

    options: [
      { id: "A", text: "Minimum B dismount" },
      {
        id: "B",
        text: "Acro flight skill directly connected to an A salto or aerial dismount"
      },
      { id: "C", text: "Either A or B" },
      { id: "D", text: "Any A jump off" }
    ],

    correctOptionId: "C",

    explanation:
      "Sapphire may fulfill SR #4 with a minimum 'B' dismount or an acro flight skill directly connected to an 'A' salto or aerial dismount.",

    takeaway:
      "SAPPHIRE HAS TWO DISMOUNT PATHS.",

    ruleKey:
      "xcel.bb.sapphire.dismount_requirement",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Sapphire",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "sapphire",
      "beam",
      "dismount",
      "flight"
    ]
  },

  // ----------------------------------------------------------
  // 020 — SPLIT TOLERANCE
  // ----------------------------------------------------------

  {
    id: "xcel-bb-020",

    program: "XCEL",

    divisions: [
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND"
    ],

    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "SPLIT_TOLERANCE",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "CODE SMART",

    question:
      "In Silver through Diamond Beam, a split that is within 20° of the division requirement may still receive VP and SR credit.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Silver through Diamond may receive VP and SR credit when the required split is within 20° of the division target. An insufficient-split deduction of up to 0.20 may still apply.",

    takeaway:
      "CREDIT DOESN'T ALWAYS MEAN ZERO DEDUCTION.",

    ruleKey:
      "xcel.bb.split_tolerance_20",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Clarifications",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "beam",
      "split",
      "vp",
      "sr"
    ]
  },

  // ----------------------------------------------------------
  // 021 — SAPPHIRE SPLIT TOLERANCE
  // ----------------------------------------------------------

  {
    id: "xcel-bb-021",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["BB"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "SPLIT_TOLERANCE",

    difficulty: "CODE_SMART",

    format: "HOW_MUCH",
    eyebrow: "SPLIT MATH",

    question:
      "For Sapphire Beam, how far short of the 180° split requirement may a jump or leap be and still potentially receive VP and SR credit?",

    options: [
      { id: "A", text: "10°" },
      { id: "B", text: "20°" },
      { id: "C", text: "30°" },
      { id: "D", text: "45°" }
    ],

    correctOptionId: "D",

    explanation:
      "Sapphire may receive VP and SR credit for the specified split element when it is within 45° of the 180° requirement. Insufficient-split deductions may still apply.",

    takeaway:
      "SAPPHIRE CREDIT WINDOW = WITHIN 45°.",

    ruleKey:
      "xcel.bb.sapphire.split_tolerance_45",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Clarifications",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "sapphire",
      "beam",
      "split",
      "vp",
      "sr"
    ]
  },

  // ----------------------------------------------------------
  // 022 — HANDSTAND HOLD
  // ----------------------------------------------------------

  {
    id: "xcel-bb-022",

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

    category: "VALUE_PARTS",
    subcategory: "HANDSTAND_HOLD",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "HANDSTAND CHECK",

    question:
      "An 'A' Value Part handstand on Xcel Beam requires a two-second hold.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "A hold is not required for an 'A' VP handstand. A 'B' or higher handstand requires a two-second hold only when the Table of Elements specifies it.",

    takeaway:
      "A HANDSTAND DOES NOT REQUIRE A HOLD.",

    ruleKey:
      "xcel.bb.handstand.a_no_hold",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam Rules — Clarifications",
      pageLabel: "BALANCE BEAM ELEMENTS - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "beam",
      "handstand",
      "value-part"
    ]
  },

  // ----------------------------------------------------------
  // 023 — FALL TIME
  // ----------------------------------------------------------

  {
    id: "xcel-bb-023",

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

    category: "TIMING",
    subcategory: "FALL_TIME",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "ON THE CLOCK",

    question:
      "After falling from the Beam, how much time does an Xcel gymnast have to remount?",

    options: [
      { id: "A", text: "30 seconds" },
      { id: "B", text: "45 seconds" },
      { id: "C", text: "60 seconds" },
      { id: "D", text: "90 seconds" }
    ],

    correctOptionId: "B",

    explanation:
      "The gymnast has 45 seconds to remount after she is standing on her feet. If an injury is assessed, fall time begins after the medical assessment is complete.",

    takeaway:
      "BEAM FALL TIME = 45 SECONDS.",

    ruleKey:
      "xcel.bb.fall_time_45",

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

    tags: [
      "xcel",
      "beam",
      "fall",
      "timing"
    ]
  },

  // ----------------------------------------------------------
  // 024 — FALL TIME EXCEEDED
  // ----------------------------------------------------------

  {
    id: "xcel-bb-024",

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

    category: "TIMING",
    subcategory: "FALL_TIME_EXCEEDED",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "TIME!",

    question:
      "What happens if an Xcel gymnast does not remount Beam within the 45-second fall period?",

    options: [
      { id: "A", text: "She gets another 15 seconds" },
      { id: "B", text: "0.10 is deducted and she continues" },
      { id: "C", text: "The exercise is terminated" },
      { id: "D", text: "She restarts the routine" }
    ],

    correctOptionId: "C",

    explanation:
      "If the 45-second fall time is exceeded, the Beam exercise is terminated.",

    takeaway:
      "45 SECONDS MEANS 45 SECONDS.",

    ruleKey:
      "xcel.bb.fall_time_exceeded",

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

    tags: [
      "xcel",
      "beam",
      "fall",
      "timing",
      "termination"
    ]
  },

  // ----------------------------------------------------------
  // 025 — COACH DURING FALL
  // ----------------------------------------------------------

  {
    id: "xcel-bb-025",

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

    category: "COMPETITION_RULES",
    subcategory: "COACH_ASSISTANCE",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "COACH TALK",

    question:
      "After a gymnast falls from Beam, her coach may speak to her while she is off the apparatus without penalty.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "The coach may speak to the gymnast while she is off the Beam following a fall. Once she remounts, verbal assistance is no longer allowed without penalty.",

    takeaway:
      "COACHING IS ALLOWED DURING THE FALL PERIOD.",

    ruleKey:
      "xcel.bb.fall_coach_may_speak",

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

    tags: [
      "xcel",
      "beam",
      "coach",
      "fall"
    ]
  },

  // ----------------------------------------------------------
  // 026 — SAPPHIRE TIME LIMIT
  // ----------------------------------------------------------

  {
    id: "xcel-bb-026",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["BB"],

    category: "TIMING",
    subcategory: "TIME_LIMIT",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "BEAT THE CLOCK",

    question:
      "What is the maximum routine time for Xcel Sapphire Beam?",

    options: [
      { id: "A", text: "1:00" },
      { id: "B", text: "1:15" },
      { id: "C", text: "1:30" },
      { id: "D", text: "2:00" }
    ],

    correctOptionId: "C",

    explanation:
      "Sapphire Beam has a maximum routine time of 1 minute 30 seconds. The warning signal occurs at 1 minute 20 seconds.",

    takeaway:
      "SAPPHIRE BEAM MAX = 1:30.",

    ruleKey:
      "xcel.bb.sapphire.time_limit",

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

    tags: [
      "xcel",
      "sapphire",
      "beam",
      "timing"
    ]
  },

  // ----------------------------------------------------------
  // 027 — OVERTIME
  // ----------------------------------------------------------

  {
    id: "xcel-bb-027",

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

    category: "TIMING",
    subcategory: "OVERTIME",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "OVERTIME",

    question:
      "What is the Chief Judge deduction when an Xcel Beam routine exceeds its maximum time?",

    options: [
      { id: "A", text: "0.05" },
      { id: "B", text: "0.10" },
      { id: "C", text: "0.30" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "B",

    explanation:
      "The Chief Judge deducts 0.10 from the average score for overtime. Elements performed after the final time signal are still evaluated.",

    takeaway:
      "OVERTIME = 0.10.",

    ruleKey:
      "xcel.bb.overtime_010",

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

    tags: [
      "xcel",
      "beam",
      "timing",
      "overtime"
    ]
  },

  // ----------------------------------------------------------
  // 028 — BALANCE MOVEMENTS
  // ----------------------------------------------------------

  {
    id: "xcel-bb-028",

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

    category: "EXECUTION",
    subcategory: "BALANCE_MOVEMENTS",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "WOBBLE CHECK",

    question:
      "Additional movements used to maintain balance on the Beam can cost up to:",

    options: [
      { id: "A", text: "0.10" },
      { id: "B", text: "0.20" },
      { id: "C", text: "0.30" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "C",

    explanation:
      "Additional movements used to maintain balance on the Beam can receive up to a 0.30 execution deduction.",

    takeaway:
      "A BIG SAVE CAN COST UP TO 0.30.",

    ruleKey:
      "xcel.bb.execution.balance_movements",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Execution & Artistry Deductions",
      pageLabel: "BALANCE BEAM - 22"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "beam",
      "balance",
      "execution",
      "wobble"
    ]
  },

  // ----------------------------------------------------------
  // 029 — FALL
  // ----------------------------------------------------------

  {
    id: "xcel-bb-029",

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

    category: "EXECUTION",
    subcategory: "FALL",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "OFF THE BEAM",

    question:
      "How much is deducted for a fall onto or off the Beam?",

    options: [
      { id: "A", text: "0.20" },
      { id: "B", text: "0.30" },
      { id: "C", text: "0.50" },
      { id: "D", text: "1.00" }
    ],

    correctOptionId: "C",

    explanation:
      "A fall onto or off the Beam receives a 0.50 deduction.",

    takeaway:
      "FALL = 0.50.",

    ruleKey:
      "xcel.bb.execution.fall",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Execution & Artistry Deductions",
      pageLabel: "BALANCE BEAM - 22"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "beam",
      "fall",
      "execution"
    ]
  },

  // ----------------------------------------------------------
  // 030 — FEET + HANDS SIMULTANEOUSLY
  // ----------------------------------------------------------

  {
    id: "xcel-bb-030",

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

    category: "VALUE_PARTS",
    subcategory: "FEET_FIRST_LANDING",

    difficulty: "CODE_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "VP OR NO VP?",

    question:
      "An element must land feet first for VP credit. What happens if the gymnast's hands and the bottoms of her feet contact at the same time?",

    options: [
      {
        id: "A",
        text: "No VP credit and no fall deduction"
      },
      {
        id: "B",
        text: "VP credit is awarded and 0.50 is deducted for the fall"
      },
      {
        id: "C",
        text: "VP credit is awarded with no deduction"
      },
      {
        id: "D",
        text: "The entire routine is void"
      }
    ],

    correctOptionId: "B",

    explanation:
      "When the hands and bottoms of the feet land simultaneously, VP credit is awarded, but a 0.50 fall deduction is taken.",

    takeaway:
      "VP CREDIT CAN SURVIVE THE FALL.",

    ruleKey:
      "xcel.bb.vp.feet_hands_simultaneous",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Recognition of Value Parts",
      pageLabel: "BALANCE BEAM - 9"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "beam",
      "value-part",
      "landing",
      "fall"
    ]
  }

];
