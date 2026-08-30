import type { PRFCT10Question } from "../types";
// ============================================================
// PRFCT10 CHALLENGE
// QUESTION BANK — BATCH 05
// PROGRAM: XCEL
// APPARATUS: FLOOR EXERCISE
// TOTAL QUESTIONS: 40
//
// VERIFIED AGAINST:
// USA Gymnastics Women's Xcel Code of Points
// Revision: August 2026
// Cycle: 2022–2028
// ============================================================

export const xcelFloorBatch05: PRFCT10Question[] = [

  // ----------------------------------------------------------
  // 001 — BRONZE ACRO CONNECTION
  // ----------------------------------------------------------

  {
    id: "xcel-fx-001",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO_PASS_1",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "BRONZE FLOOR",

    question:
      "What is required in Bronze Floor's first acro Special Requirement?",

    options: [
      {
        id: "A",
        text: "Two directly connected acro elements"
      },
      {
        id: "B",
        text: "One salto"
      },
      {
        id: "C",
        text: "Two aerials"
      },
      {
        id: "D",
        text: "Three flight elements"
      }
    ],

    correctOptionId: "A",

    explanation:
      "Bronze requires a minimum of two directly connected acro elements. The elements may be performed with or without flight.",

    takeaway:
      "BRONZE SR #1 = TWO DIRECTLY CONNECTED ACRO ELEMENTS.",

    ruleKey:
      "xcel.fx.bronze.sr1_two_connected_acro",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Bronze",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "floor",
      "acro",
      "connection"
    ]
  },

  // ----------------------------------------------------------
  // 002 — BRONZE SECOND ACRO PASS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-002",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO_PASS_2",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "SECOND PASS",

    question:
      "Bronze Floor requires a second acro pass containing at least one acro element.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Bronze SR #2 requires a second acro pass with at least one acro element, with or without flight.",

    takeaway:
      "BRONZE NEEDS A SECOND ACRO PASS.",

    ruleKey:
      "xcel.fx.bronze.sr2_second_acro_pass",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Bronze",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "floor",
      "acro-pass"
    ]
  },

  // ----------------------------------------------------------
  // 003 — BRONZE DANCE PASSAGE
  // ----------------------------------------------------------

  {
    id: "xcel-fx-003",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_PASSAGE",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "SPLIT CHECK",

    question:
      "What split angle is required in Bronze Floor's dance passage?",

    options: [
      { id: "A", text: "No split requirement" },
      { id: "B", text: "60°" },
      { id: "C", text: "90°" },
      { id: "D", text: "120°" }
    ],

    correctOptionId: "B",

    explanation:
      "Bronze requires a dance passage with at least two different Group 1 elements, including one leap with a minimum 60° cross or side split.",

    takeaway:
      "BRONZE FLOOR SPLIT TARGET = 60°.",

    ruleKey:
      "xcel.fx.bronze.dance_split_60",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Bronze",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "floor",
      "dance-passage",
      "split"
    ]
  },

  // ----------------------------------------------------------
  // 004 — BRONZE TURN
  // ----------------------------------------------------------

  {
    id: "xcel-fx-004",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "TURN",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "TURN CHECK",

    question:
      "What is the minimum turn requirement for Bronze Floor?",

    options: [
      { id: "A", text: "¼ turn on one foot" },
      { id: "B", text: "½ turn on one foot" },
      { id: "C", text: "Full turn on one foot" },
      { id: "D", text: "No turn is required" }
    ],

    correctOptionId: "B",

    explanation:
      "Bronze requires a minimum ½ turn on one foot.",

    takeaway:
      "BRONZE FLOOR = MINIMUM ½ TURN.",

    ruleKey:
      "xcel.fx.bronze.half_turn",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Bronze",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "bronze", "floor", "turn"]
  },

  // ----------------------------------------------------------
  // 005 — BRONZE SALTOS / AERIALS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-005",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["FX"],

    category: "RESTRICTIONS",
    subcategory: "SALTOS_AERIALS",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "ALLOWED OR NOT?",

    question:
      "Saltos and aerials are allowed in Xcel Bronze Floor.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Bronze does not allow saltos or aerials.",

    takeaway:
      "NO SALTOS OR AERIALS IN BRONZE.",

    ruleKey:
      "xcel.fx.bronze.no_saltos_aerials",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Bronze",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "floor",
      "salto",
      "aerial",
      "restriction"
    ]
  },

  // ----------------------------------------------------------
  // 006 — BRONZE FLIGHT LIMIT
  // ----------------------------------------------------------

  {
    id: "xcel-fx-006",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["FX"],

    category: "RESTRICTIONS",
    subcategory: "ACRO_FLIGHT_LIMIT",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "FLIGHT LIMIT",

    question:
      "What is the maximum number of acro flight elements allowed in a Bronze Floor routine?",

    options: [
      { id: "A", text: "One" },
      { id: "B", text: "Two" },
      { id: "C", text: "Three" },
      { id: "D", text: "Unlimited" }
    ],

    correctOptionId: "B",

    explanation:
      "Bronze is limited to a maximum of two acro flight elements in the routine.",

    takeaway:
      "BRONZE: MAXIMUM TWO ACRO FLIGHT ELEMENTS.",

    ruleKey:
      "xcel.fx.bronze.max_two_acro_flight",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Bronze",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "floor",
      "flight",
      "restriction"
    ]
  },

  // ----------------------------------------------------------
  // 007 — SILVER FIRST PASS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-007",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO_PASS_1",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "SILVER FLOOR",

    question:
      "What must Silver Floor's first acro connection include?",

    options: [
      {
        id: "A",
        text: "Two directly connected acro elements, with at least one flight element"
      },
      {
        id: "B",
        text: "Two saltos"
      },
      {
        id: "C",
        text: "One aerial only"
      },
      {
        id: "D",
        text: "Three non-flight elements"
      }
    ],

    correctOptionId: "A",

    explanation:
      "Silver requires at least two directly connected acro elements, and one of them must have flight.",

    takeaway:
      "SILVER CONNECTION = TWO ACRO + AT LEAST ONE FLIGHT.",

    ruleKey:
      "xcel.fx.silver.sr1_connected_acro_with_flight",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Silver",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "floor",
      "acro",
      "flight"
    ]
  },

  // ----------------------------------------------------------
  // 008 — SILVER SECOND PASS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-008",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO_PASS_2",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "SECOND PASS",

    question:
      "Which can fulfill Silver Floor's second acro-pass requirement?",

    options: [
      {
        id: "A",
        text: "A second connection of at least two directly connected acro elements"
      },
      {
        id: "B",
        text: "One acro flight element"
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
      "Silver SR #2 may be fulfilled by a second connection of at least two acro elements, with or without flight, or by one acro flight element.",

    takeaway:
      "SILVER HAS TWO OPTIONS FOR THE SECOND PASS.",

    ruleKey:
      "xcel.fx.silver.sr2_options",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Silver",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "floor",
      "acro-pass"
    ]
  },

  // ----------------------------------------------------------
  // 009 — SILVER SPLIT
  // ----------------------------------------------------------

  {
    id: "xcel-fx-009",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_SPLIT",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "SPLIT CHECK",

    question:
      "What split angle is required in Silver Floor's dance passage?",

    options: [
      { id: "A", text: "60°" },
      { id: "B", text: "90°" },
      { id: "C", text: "120°" },
      { id: "D", text: "155°" }
    ],

    correctOptionId: "B",

    explanation:
      "Silver requires a leap with a minimum 90° cross or side split within the dance passage.",

    takeaway:
      "SILVER FLOOR SPLIT = 90°.",

    ruleKey:
      "xcel.fx.silver.split_90",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Silver",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "silver", "floor", "split"]
  },

  // ----------------------------------------------------------
  // 010 — SILVER TURN
  // ----------------------------------------------------------

  {
    id: "xcel-fx-010",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "TURN",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "TURN CHECK",

    question:
      "What minimum turn is required in Silver Floor?",

    options: [
      { id: "A", text: "½ turn on one foot" },
      { id: "B", text: "Full turn on one foot" },
      { id: "C", text: "1½ turn" },
      { id: "D", text: "No turn is required" }
    ],

    correctOptionId: "B",

    explanation:
      "Silver requires a minimum full turn on one foot.",

    takeaway:
      "SILVER FLOOR = FULL TURN.",

    ruleKey:
      "xcel.fx.silver.full_turn",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Silver",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "silver", "floor", "turn"]
  },

  // ----------------------------------------------------------
  // 011 — SILVER SALTO / AERIAL LIMIT
  // ----------------------------------------------------------

  {
    id: "xcel-fx-011",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["FX"],

    category: "RESTRICTIONS",
    subcategory: "SALTO_AERIAL_LIMIT",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "HOW MANY?",

    question:
      "How many saltos or aerials may a Silver gymnast perform in her Floor routine?",

    options: [
      { id: "A", text: "None" },
      { id: "B", text: "Maximum one" },
      { id: "C", text: "Maximum two" },
      { id: "D", text: "Unlimited" }
    ],

    correctOptionId: "B",

    explanation:
      "Silver permits a maximum of one salto or aerial in the routine.",

    takeaway:
      "SILVER = MAXIMUM ONE SALTO OR AERIAL.",

    ruleKey:
      "xcel.fx.silver.max_one_salto_aerial",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Silver",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "floor",
      "salto",
      "aerial",
      "restriction"
    ]
  },

  // ----------------------------------------------------------
  // 012 — GOLD FIRST ACRO PASS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-012",

    program: "XCEL",
    divisions: ["GOLD"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO_PASS_1",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "GOLD FLOOR",

    question:
      "Gold Floor requires at least two directly connected acro flight elements in its first acro Special Requirement.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Gold SR #1 requires a minimum of two directly connected acro flight elements.",

    takeaway:
      "GOLD SR #1 = TWO CONNECTED FLIGHT ELEMENTS.",

    ruleKey:
      "xcel.fx.gold.sr1_two_flight_elements",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Gold",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "gold", "floor", "acro", "flight"]
  },

  // ----------------------------------------------------------
  // 013 — GOLD SECOND PASS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-013",

    program: "XCEL",
    divisions: ["GOLD"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO_PASS_2",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "SECOND PASS",

    question:
      "Which can fulfill Gold Floor SR #2?",

    options: [
      {
        id: "A",
        text: "A second connection of at least two directly connected acro flight elements"
      },
      {
        id: "B",
        text: "One aerial or salto"
      },
      {
        id: "C",
        text: "Either A or B"
      },
      {
        id: "D",
        text: "One non-flight skill only"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Gold may use a second connection of at least two directly connected acro flight elements or one aerial or salto.",

    takeaway:
      "GOLD SR #2 HAS TWO PATHS.",

    ruleKey:
      "xcel.fx.gold.sr2_options",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Gold",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "gold", "floor", "acro-pass"]
  },

  // ----------------------------------------------------------
  // 014 — GOLD SPLIT
  // ----------------------------------------------------------

  {
    id: "xcel-fx-014",

    program: "XCEL",
    divisions: ["GOLD"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_SPLIT",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "SPLIT CHECK",

    question:
      "What minimum split angle is required in Gold Floor's dance passage?",

    options: [
      { id: "A", text: "90°" },
      { id: "B", text: "120°" },
      { id: "C", text: "155°" },
      { id: "D", text: "180°" }
    ],

    correctOptionId: "B",

    explanation:
      "Gold requires at least one leap with a minimum 120° split in its dance passage.",

    takeaway:
      "GOLD FLOOR SPLIT = 120°.",

    ruleKey:
      "xcel.fx.gold.split_120",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Gold",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "gold", "floor", "split"]
  },

  // ----------------------------------------------------------
  // 015 — GOLD TWISTING SALTO
  // ----------------------------------------------------------

  {
    id: "xcel-fx-015",

    program: "XCEL",
    divisions: ["GOLD"],
    apparatus: ["FX"],

    category: "RESTRICTIONS",
    subcategory: "TWISTING_SALTO",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "ALLOWED OR NOT?",

    question:
      "A 'B' Value Part twisting salto is allowed in Xcel Gold Floor.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Gold does not allow 'B' Value Part twisting saltos. It also does not allow 'C' or higher Value Parts.",

    takeaway:
      "GOLD: NO B TWISTING SALTOS.",

    ruleKey:
      "xcel.fx.gold.no_b_twisting_salto",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Gold",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "gold",
      "floor",
      "twisting-salto",
      "restriction"
    ]
  },

  // ----------------------------------------------------------
  // 016 — PLATINUM FIRST PASS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-016",

    program: "XCEL",
    divisions: ["PLATINUM"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO_PASS_1",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "PLATINUM FLOOR",

    question:
      "What must Platinum Floor's first acro pass include?",

    options: [
      {
        id: "A",
        text: "Two directly connected acro flight elements with an A or B salto"
      },
      {
        id: "B",
        text: "Two non-flight skills"
      },
      {
        id: "C",
        text: "One aerial only"
      },
      {
        id: "D",
        text: "One C salto only"
      }
    ],

    correctOptionId: "A",

    explanation:
      "Platinum SR #1 requires at least two directly connected acro flight elements with an 'A' or 'B' salto.",

    takeaway:
      "PLATINUM SR #1 INCLUDES A SALTO.",

    ruleKey:
      "xcel.fx.platinum.sr1_flight_with_salto",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Platinum",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "platinum",
      "floor",
      "acro",
      "salto"
    ]
  },

  // ----------------------------------------------------------
  // 017 — PLATINUM SECOND PASS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-017",

    program: "XCEL",
    divisions: ["PLATINUM"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO_PASS_2",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "SECOND PASS",

    question:
      "Which can fulfill Platinum Floor SR #2?",

    options: [
      {
        id: "A",
        text: "A second connection of at least two directly connected acro flight elements"
      },
      {
        id: "B",
        text: "One B salto"
      },
      {
        id: "C",
        text: "Either A or B"
      },
      {
        id: "D",
        text: "One dance element"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Platinum SR #2 may be fulfilled by another connection of at least two directly connected acro flight elements or one 'B' salto.",

    takeaway:
      "PLATINUM SECOND PASS: CONNECTION OR B SALTO.",

    ruleKey:
      "xcel.fx.platinum.sr2_options",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Platinum",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "platinum",
      "floor",
      "acro-pass"
    ]
  },

  // ----------------------------------------------------------
  // 018 — PLATINUM SPLIT
  // ----------------------------------------------------------

  {
    id: "xcel-fx-018",

    program: "XCEL",
    divisions: ["PLATINUM"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_SPLIT",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "PLATINUM SPLIT",

    question:
      "What is the current split requirement for Platinum Floor?",

    options: [
      { id: "A", text: "120°" },
      { id: "B", text: "150°" },
      { id: "C", text: "155°" },
      { id: "D", text: "180°" }
    ],

    correctOptionId: "C",

    explanation:
      "The current Platinum Floor dance-passage requirement includes a leap with a minimum 155° cross or side split.",

    takeaway:
      "PLATINUM FLOOR = 155°.",

    ruleKey:
      "xcel.fx.platinum.split_155",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Platinum",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "platinum",
      "floor",
      "split",
      "155-degrees"
    ]
  },

  // ----------------------------------------------------------
  // 019 — OVERTIME
  // ----------------------------------------------------------

  {
    id: "xcel-fx-019",

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

    category: "TIMING",
    subcategory: "OVERTIME",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "OVERTIME",

    question:
      "What is the Chief Judge deduction when an Xcel Floor routine exceeds its maximum time?",

    options: [
      { id: "A", text: "0.05" },
      { id: "B", text: "0.10" },
      { id: "C", text: "0.30" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "B",

    explanation:
      "The Chief Judge deducts 0.10 from the average score for overtime.",

    takeaway:
      "FLOOR OVERTIME = 0.10.",

    ruleKey:
      "xcel.fx.timing.overtime",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Timing of the Exercise",
      pageLabel: "FLOOR EXERCISE - 16"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "timing",
      "overtime"
    ]
  },

  // ----------------------------------------------------------
  // 020 — DIAMOND ACRO PASSES
  // ----------------------------------------------------------

  {
    id: "xcel-fx-020",

    program: "XCEL",
    divisions: ["DIAMOND"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO_PASS_1",

    difficulty: "CODE_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "DIAMOND ACRO",

    question:
      "Which is one valid way to fulfill Diamond Floor SR #1?",

    options: [
      {
        id: "A",
        text: "Two separate acro flight passes, each with at least two directly connected acro flight elements"
      },
      {
        id: "B",
        text: "One isolated A salto"
      },
      {
        id: "C",
        text: "One dance passage only"
      },
      {
        id: "D",
        text: "One non-flight acro element"
      }
    ],

    correctOptionId: "A",

    explanation:
      "One option for Diamond SR #1 is two separate acro flight passes, each containing at least two directly connected acro flight elements.",

    takeaway:
      "DIAMOND CAN USE TWO FULL ACRO FLIGHT PASSES.",

    ruleKey:
      "xcel.fx.diamond.sr1_two_flight_passes",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Diamond",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "diamond",
      "floor",
      "acro-pass"
    ]
  },

  // ----------------------------------------------------------
  // 021 — DIAMOND ALTERNATE SR #1
  // ----------------------------------------------------------

  {
    id: "xcel-fx-021",

    program: "XCEL",
    divisions: ["DIAMOND"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO_PASS_1",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "CODE SMART",

    question:
      "Diamond SR #1 may also be fulfilled with one acro flight pass of two directly connected flight elements plus a separate isolated C salto.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Diamond has an alternate SR #1 option: one qualifying acro flight pass plus one separate or isolated 'C' salto.",

    takeaway:
      "DIAMOND HAS AN ALTERNATE C-SALTO PATH.",

    ruleKey:
      "xcel.fx.diamond.sr1_c_salto_option",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Diamond",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "diamond",
      "floor",
      "c-salto",
      "acro"
    ]
  },

  // ----------------------------------------------------------
  // 022 — DIAMOND SALTOS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-022",

    program: "XCEL",
    divisions: ["DIAMOND"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "SALTOS",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "SALTO CHECK",

    question:
      "Diamond Floor requires two different saltos. What difficulty must at least one have?",

    options: [
      { id: "A", text: "Minimum A" },
      { id: "B", text: "Minimum B" },
      { id: "C", text: "Minimum C" },
      { id: "D", text: "Minimum D" }
    ],

    correctOptionId: "B",

    explanation:
      "Diamond SR #2 requires two different saltos, with at least one having a minimum 'B' value.",

    takeaway:
      "DIAMOND NEEDS TWO DIFFERENT SALTOS + ONE MINIMUM B.",

    ruleKey:
      "xcel.fx.diamond.two_saltos_one_b",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Diamond",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "diamond",
      "floor",
      "salto",
      "b-value"
    ]
  },

  // ----------------------------------------------------------
  // 023 — DIAMOND DANCE
  // ----------------------------------------------------------

  {
    id: "xcel-fx-023",

    program: "XCEL",
    divisions: ["DIAMOND"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_SPLIT",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "DIAMOND SPLIT",

    question:
      "What minimum split angle is required in Diamond Floor's dance passage?",

    options: [
      { id: "A", text: "120°" },
      { id: "B", text: "150°" },
      { id: "C", text: "155°" },
      { id: "D", text: "180°" }
    ],

    correctOptionId: "C",

    explanation:
      "Diamond requires a leap with a minimum 155° cross or side split in the dance passage.",

    takeaway:
      "DIAMOND FLOOR SPLIT = 155°.",

    ruleKey:
      "xcel.fx.diamond.split_155",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Diamond",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "diamond",
      "floor",
      "split"
    ]
  },

  // ----------------------------------------------------------
  // 024 — DIAMOND TURN
  // ----------------------------------------------------------

  {
    id: "xcel-fx-024",

    program: "XCEL",
    divisions: ["DIAMOND"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "TURN",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "TURN CHECK",

    question:
      "What minimum difficulty is required for Diamond Floor's turn on one foot?",

    options: [
      { id: "A", text: "A" },
      { id: "B", text: "B" },
      { id: "C", text: "C" },
      { id: "D", text: "D" }
    ],

    correctOptionId: "B",

    explanation:
      "Diamond requires a minimum 'B' turn on one foot.",

    takeaway:
      "DIAMOND TURN = MINIMUM B.",

    ruleKey:
      "xcel.fx.diamond.min_b_turn",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Diamond",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "diamond",
      "floor",
      "turn",
      "b-value"
    ]
  },

  // ----------------------------------------------------------
  // 025 — SAPPHIRE ACRO PASS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-025",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "ACRO_PASS",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "SAPPHIRE FLOOR",

    question:
      "Sapphire Floor requires one acro pass containing two saltos.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Sapphire SR #1 requires one acro pass containing two saltos. The saltos may be the same or different.",

    takeaway:
      "SAPPHIRE NEEDS A TWO-SALTO PASS.",

    ruleKey:
      "xcel.fx.sapphire.two_salto_pass",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Sapphire",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "sapphire",
      "floor",
      "salto",
      "acro-pass"
    ]
  },

  // ----------------------------------------------------------
  // 026 — SAPPHIRE THREE SALTOS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-026",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "SALTOS",

    difficulty: "CODE_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "SALTO COUNT",

    question:
      "How many different saltos are required for Sapphire Floor SR #2?",

    options: [
      { id: "A", text: "Two" },
      { id: "B", text: "Three" },
      { id: "C", text: "Four" },
      { id: "D", text: "Five" }
    ],

    correctOptionId: "B",

    explanation:
      "Sapphire requires three different saltos, with at least one being a minimum 'B'.",

    takeaway:
      "SAPPHIRE = THREE DIFFERENT SALTOS.",

    ruleKey:
      "xcel.fx.sapphire.three_different_saltos",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Sapphire",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "sapphire",
      "floor",
      "salto"
    ]
  },

  // ----------------------------------------------------------
  // 027 — SAPPHIRE DANCE
  // ----------------------------------------------------------

  {
    id: "xcel-fx-027",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_SPLIT",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "SAPPHIRE SPLIT",

    question:
      "What split must the required Sapphire Floor dance-passage leap require?",

    options: [
      { id: "A", text: "120°" },
      { id: "B", text: "155°" },
      { id: "C", text: "170°" },
      { id: "D", text: "180°" }
    ],

    correctOptionId: "D",

    explanation:
      "Sapphire requires a dance passage containing a leap that requires a 180° split.",

    takeaway:
      "SAPPHIRE FLOOR = 180°.",

    ruleKey:
      "xcel.fx.sapphire.split_180",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Sapphire",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "sapphire",
      "floor",
      "split"
    ]
  },

  // ----------------------------------------------------------
  // 028 — SAPPHIRE TURN
  // ----------------------------------------------------------

  {
    id: "xcel-fx-028",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "TURN",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "TURN CHECK",

    question:
      "What minimum difficulty is required for Sapphire Floor's turn on one foot?",

    options: [
      { id: "A", text: "A" },
      { id: "B", text: "B" },
      { id: "C", text: "C" },
      { id: "D", text: "D" }
    ],

    correctOptionId: "B",

    explanation:
      "Sapphire requires a minimum 'B' turn on one foot.",

    takeaway:
      "SAPPHIRE TURN = MINIMUM B.",

    ruleKey:
      "xcel.fx.sapphire.min_b_turn",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Sapphire",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "sapphire",
      "floor",
      "turn",
      "b-value"
    ]
  },

  // ----------------------------------------------------------
  // 029 — SR #1 + SR #2 SAME PASS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-029",

    program: "XCEL",

    divisions: [
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM"
    ],

    apparatus: ["FX"],

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "SEPARATE_ACRO_PASSES",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "CODE SMART",

    question:
      "In Bronze, Silver, Gold and Platinum Floor, SR #1 and SR #2 may be fulfilled in the same acro pass.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "For Bronze through Platinum, SR #1 and SR #2 may not be combined in the same acro pass.",

    takeaway:
      "SR #1 + SR #2 NEED SEPARATE PASSES.",

    ruleKey:
      "xcel.fx.sr1_sr2.separate_passes",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Clarifications",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "acro-pass",
      "special-requirement"
    ]
  },

  // ----------------------------------------------------------
  // 030 — DIVE ROLL
  // ----------------------------------------------------------

  {
    id: "xcel-fx-030",

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

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DIVE_ROLL",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "MYTH OR RULE?",

    question:
      "A dive roll fulfills a Floor flight Special Requirement.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "A dive roll does not fulfill a Floor flight Special Requirement.",

    takeaway:
      "DIVE ROLL ≠ FLIGHT SR.",

    ruleKey:
      "xcel.fx.dive_roll.no_flight_sr",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Clarifications",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "dive-roll",
      "flight"
    ]
  },

  // ----------------------------------------------------------
  // 031 — DANCE PASSAGE CONNECTION
  // ----------------------------------------------------------

  {
    id: "xcel-fx-031",

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

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_PASSAGE_CONNECTION",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "DANCE PASSAGE",

    question:
      "The two required dance elements in a Floor dance passage must always be directly connected.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Dance-passage elements may be directly or indirectly connected. Running steps, small hops, skips, chassés, assemblés and turns may occur between them, but pauses or stops are not allowed.",

    takeaway:
      "INDIRECT IS OK. A STOP IS NOT.",

    ruleKey:
      "xcel.fx.dance_passage.indirect_connection_allowed",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Clarifications Regarding Connections",
      pageLabel: "FLOOR EXERCISE - 21"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "dance-passage",
      "connection"
    ]
  },

  // ----------------------------------------------------------
  // 032 — ACRO INSIDE DANCE PASSAGE
  // ----------------------------------------------------------

  {
    id: "xcel-fx-032",

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

    category: "SPECIAL_REQUIREMENTS",
    subcategory: "DANCE_PASSAGE_BREAK",

    difficulty: "CODE_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "BREAK THE PASSAGE?",

    question:
      "A gymnast performs a switch leap, then a flic-flac, then a straddle jump. What happens to the dance passage?",

    options: [
      {
        id: "A",
        text: "The flic-flac breaks the dance passage"
      },
      {
        id: "B",
        text: "The passage still receives credit"
      },
      {
        id: "C",
        text: "Only 0.05 is deducted"
      },
      {
        id: "D",
        text: "The flic-flac counts as dance"
      }
    ],

    correctOptionId: "A",

    explanation:
      "An acrobatic element performed between the dance elements breaks the dance passage, so the dance-passage Special Requirement is not awarded.",

    takeaway:
      "ACRO BETWEEN DANCE ELEMENTS BREAKS THE PASSAGE.",

    ruleKey:
      "xcel.fx.dance_passage.acro_breaks_connection",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Clarifications Regarding Connections",
      pageLabel: "FLOOR EXERCISE - 21"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "dance-passage",
      "acro"
    ]
  },

  // ----------------------------------------------------------
  // 033 — ENDING POSE
  // ----------------------------------------------------------

  {
    id: "xcel-fx-033",

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
    subcategory: "ENDING_POSE",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "FINISH IT!",

    question:
      "How much is deducted if a gymnast fails to hold her Floor ending pose for one second?",

    options: [
      { id: "A", text: "0.05" },
      { id: "B", text: "0.10" },
      { id: "C", text: "0.20" },
      { id: "D", text: "0.30" }
    ],

    correctOptionId: "A",

    explanation:
      "Failure to hold the ending pose for one second receives a 0.05 deduction.",

    takeaway:
      "OWN THE FINISH FOR ONE SECOND.",

    ruleKey:
      "xcel.fx.execution.ending_pose_one_second",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Specific Execution Errors",
      pageLabel: "FLOOR EXERCISE - 19"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "ending-pose",
      "execution"
    ]
  },

  // ----------------------------------------------------------
  // 034 — CONCENTRATION PAUSE
  // ----------------------------------------------------------

  {
    id: "xcel-fx-034",

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
    subcategory: "CONCENTRATION_PAUSE",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "DON'T FREEZE",

    question:
      "A concentration pause of two seconds or more on Floor costs:",

    options: [
      { id: "A", text: "0.05" },
      { id: "B", text: "0.10 each" },
      { id: "C", text: "0.20 each" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "B",

    explanation:
      "Concentration pauses of two seconds or more receive a 0.10 deduction each.",

    takeaway:
      "A TWO-SECOND CONCENTRATION PAUSE = 0.10.",

    ruleKey:
      "xcel.fx.execution.concentration_pause",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Specific Execution Errors",
      pageLabel: "FLOOR EXERCISE - 19"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "pause",
      "execution"
    ]
  },

  // ----------------------------------------------------------
  // 035 — LEAVING FLOOR
  // ----------------------------------------------------------

  {
    id: "xcel-fx-035",

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

    category: "COMPETITION_RULES",
    subcategory: "LEAVING_FLOOR_AREA",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "WHERE ARE YOU GOING?",

    question:
      "How much is deducted if a gymnast leaves the Floor Exercise mat during her routine?",

    options: [
      { id: "A", text: "0.10" },
      { id: "B", text: "0.20" },
      { id: "C", text: "0.30" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "D",

    explanation:
      "Leaving the Floor Exercise mat during the routine receives a 0.50 deduction, subject to the specific exceptions listed for certain fall or medical situations.",

    takeaway:
      "LEAVING THE FLOOR MAT = 0.50.",

    ruleKey:
      "xcel.fx.competition.leaving_floor",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Specific Execution Errors",
      pageLabel: "FLOOR EXERCISE - 19"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "competition-rules"
    ]
  },

  // ----------------------------------------------------------
  // 036 — MUSIC WITH WORDS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-036",

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

    category: "COMPETITION_RULES",
    subcategory: "MUSIC",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "MUSIC CHECK",

    question:
      "What is the deduction for Floor music with spoken or sung words?",

    options: [
      { id: "A", text: "0.10" },
      { id: "B", text: "0.30" },
      { id: "C", text: "0.50" },
      { id: "D", text: "The routine receives a zero" }
    ],

    correctOptionId: "C",

    explanation:
      "The Chief Judge deducts 0.50 from the average score for music with words or song. The same deduction applies for absence of music.",

    takeaway:
      "WORDS IN THE MUSIC = 0.50.",

    ruleKey:
      "xcel.fx.music.words",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Music Regulations",
      pageLabel: "FLOOR EXERCISE - 17"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "music",
      "words"
    ]
  },

  // ----------------------------------------------------------
  // 037 — ALLOWED SOUNDS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-037",

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

    category: "COMPETITION_RULES",
    subcategory: "MUSIC",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "MUSIC OR NO?",

    question:
      "Which can be used in Xcel Floor music without automatically creating a music-with-words deduction?",

    options: [
      {
        id: "A",
        text: "Whistles and animal sounds"
      },
      {
        id: "B",
        text: "Human sounds without spoken or sung words"
      },
      {
        id: "C",
        text: "Both A and B"
      },
      {
        id: "D",
        text: "Full song lyrics"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Whistles and animal sounds are allowed. Human sounds are also permitted provided there are no spoken or sung words.",

    takeaway:
      "SOUNDS ARE OK. WORDS ARE THE ISSUE.",

    ruleKey:
      "xcel.fx.music.allowed_sounds",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Music Regulations",
      pageLabel: "FLOOR EXERCISE - 17"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "music",
      "sounds"
    ]
  },

  // ----------------------------------------------------------
  // 038 — OUT OF BOUNDS
  // ----------------------------------------------------------

  {
    id: "xcel-fx-038",

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

    category: "COMPETITION_RULES",
    subcategory: "OUT_OF_BOUNDS",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "OUT!",

    question:
      "How much is deducted each time any part of a gymnast's body touches outside the Floor boundary?",

    options: [
      { id: "A", text: "0.05" },
      { id: "B", text: "0.10" },
      { id: "C", text: "0.20" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "B",

    explanation:
      "Each time any part of the body touches outside the prescribed Floor area, the Chief Judge deducts 0.10 from the average score.",

    takeaway:
      "OUT OF BOUNDS = 0.10 EACH TIME.",

    ruleKey:
      "xcel.fx.boundary.out_of_bounds",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Line Violations",
      pageLabel: "FLOOR EXERCISE - 17"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "boundary",
      "out-of-bounds"
    ]
  },

  // ----------------------------------------------------------
  // 039 — ON THE LINE
  // ----------------------------------------------------------

  {
    id: "xcel-fx-039",

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

    category: "COMPETITION_RULES",
    subcategory: "BOUNDARY_LINE",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "ON THE LINE",

    question:
      "Stepping on the Floor boundary line without going over it is considered out of bounds.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "A gymnast who steps on the boundary line but does not go over it is not considered out of bounds.",

    takeaway:
      "ON THE LINE IS STILL IN.",

    ruleKey:
      "xcel.fx.boundary.line_is_in",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Line Violations",
      pageLabel: "FLOOR EXERCISE - 17"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "boundary",
      "line"
    ]
  },

  // ----------------------------------------------------------
  // 040 — NO MINIMUM TIME
  // ----------------------------------------------------------

  {
    id: "xcel-fx-040",

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

    category: "TIMING",
    subcategory: "MINIMUM_TIME",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "TIME CHECK",

    question:
      "Xcel Floor routines have a minimum routine time requirement.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Xcel Floor routines do not have a minimum time requirement.",

    takeaway:
      "XCEL FLOOR HAS NO MINIMUM ROUTINE TIME.",

    ruleKey:
      "xcel.fx.timing.no_minimum_time",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise Rules — Clarifications",
      pageLabel: "FLOOR EXERCISE - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "timing"
    ]
  }

];
