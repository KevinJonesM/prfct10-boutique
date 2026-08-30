import type { PRFCT10Question } from "../types";
// ============================================================
// PRFCT10 CHALLENGE
// QUESTION BANK — BATCH 06
// PROGRAM: XCEL
// TOPICS: ARTISTRY + GENERAL / COMPETITION SMART
// TOTAL QUESTIONS: 40
//
// VERIFIED AGAINST:
// USA Gymnastics Women's Xcel Code of Points
// Revision: August 2026
// Cycle: 2022–2028
// ============================================================

export const xcelArtistryGeneralBatch06: PRFCT10Question[] = [

  // ==========================================================
  // FLOOR ARTISTRY
  // ==========================================================

  // ----------------------------------------------------------
  // 001 — ARTISTRY IS REAL
  // ----------------------------------------------------------

  {
    id: "xcel-art-001",

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

    category: "ARTISTRY",
    subcategory: "ARTISTIC_PERFORMANCE",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "TRUE OR FALSE",

    question:
      "A Floor routine can lose points for artistry even when all of its skills receive credit.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Xcel evaluates artistic performance separately from Value Parts. Choreography, musicality, expression, posture, footwork and dynamics can all affect the score.",

    takeaway:
      "HITTING THE SKILLS ISN'T THE WHOLE ROUTINE.",

    ruleKey:
      "xcel.fx.artistry.performance_categories",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Specific Artistic Performance Deductions",
      pageLabel: "FLOOR EXERCISE - 20"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "artistry"]
  },

  // ----------------------------------------------------------
  // 002 — CHOREOGRAPHY MAX
  // ----------------------------------------------------------

  {
    id: "xcel-art-002",

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

    category: "ARTISTRY",
    subcategory: "CHOREOGRAPHY",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "ARTISTRY MATH",

    question:
      "How much can the overall Floor choreography category cost?",

    options: [
      { id: "A", text: "Up to 0.10" },
      { id: "B", text: "Up to 0.20" },
      { id: "C", text: "Up to 0.30" },
      { id: "D", text: "Up to 0.40" }
    ],

    correctOptionId: "D",

    explanation:
      "The Floor choreography category can total up to 0.40 in artistic-performance deductions.",

    takeaway:
      "CHOREOGRAPHY CAN MATTER A LOT: UP TO 0.40.",

    ruleKey:
      "xcel.fx.artistry.choreography_max",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Specific Artistic Performance Deductions",
      pageLabel: "FLOOR EXERCISE - 20"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "artistry", "choreography"]
  },

  // ----------------------------------------------------------
  // 003 — PURPOSEFUL CHOREOGRAPHY
  // ----------------------------------------------------------

  {
    id: "xcel-art-003",

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

    category: "ARTISTRY",
    subcategory: "PURPOSEFUL_CHOREOGRAPHY",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "JUST WALKING?",

    question:
      "Simply walking into position for a tumbling pass counts as choreography just because the gymnast is moving.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "The Code expects purposeful choreography. Steps and arm movements should look choreographed rather than simply moving from one skill to another.",

    takeaway:
      "MOVING ISN'T ALWAYS CHOREOGRAPHY.",

    ruleKey:
      "xcel.fx.artistry.purposeful_choreography",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Choreography",
      pageLabel: "FLOOR EXERCISE - 20"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "floor",
      "artistry",
      "choreography"
    ]
  },

  // ----------------------------------------------------------
  // 004 — CLOSING FEET
  // ----------------------------------------------------------

  {
    id: "xcel-art-004",

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

    category: "ARTISTRY",
    subcategory: "PURPOSEFUL_CHOREOGRAPHY",

    difficulty: "CODE_SMART",

    format: "HOW_MUCH",
    eyebrow: "PREP CHECK",

    question:
      "More than one unchoreographed step used to close the feet before an acro pass can cost:",

    options: [
      { id: "A", text: "0.05 for that pass" },
      { id: "B", text: "0.10 automatically" },
      { id: "C", text: "0.20 automatically" },
      { id: "D", text: "No deduction" }
    ],

    correctOptionId: "A",

    explanation:
      "Within the purposeful-choreography category, more than one step to close the feet without choreography before an acro pass can receive 0.05 for that pass.",

    takeaway:
      "DON'T LET THE PREP LOOK LIKE PREP.",

    ruleKey:
      "xcel.fx.artistry.steps_close_feet",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Choreography",
      pageLabel: "FLOOR EXERCISE - 20"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "artistry", "acro-preparation"]
  },

  // ----------------------------------------------------------
  // 005 — FOCUS
  // ----------------------------------------------------------

  {
    id: "xcel-art-005",

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

    category: "ARTISTRY",
    subcategory: "FOCUS_PROJECTION",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "WHERE ARE YOU LOOKING?",

    question:
      "Keeping the eyes down throughout the entire Floor routine is always considered good focus.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Looking down should be consistent with the choreography. The Code expects changes of focus and different head directions rather than one fixed focus throughout.",

    takeaway:
      "YOUR EYES PERFORM TOO.",

    ruleKey:
      "xcel.fx.artistry.focus_projection",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Choreography / Focus",
      pageLabel: "FLOOR EXERCISE - 20"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "artistry", "focus"]
  },

  // ----------------------------------------------------------
  // 006 — MUSICALITY
  // ----------------------------------------------------------

  {
    id: "xcel-art-006",

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

    category: "ARTISTRY",
    subcategory: "MUSICALITY",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "FEEL THE MUSIC",

    question:
      "How much can insufficient musicality cost on Xcel Floor?",

    options: [
      { id: "A", text: "Up to 0.10" },
      { id: "B", text: "Up to 0.20" },
      { id: "C", text: "Up to 0.30" },
      { id: "D", text: "Up to 0.50" }
    ],

    correctOptionId: "B",

    explanation:
      "Musicality can receive up to 0.20. Movements should fit the music, convey its theme and demonstrate changes in tempo or rhythm.",

    takeaway:
      "FLOOR ISN'T GYMNASTICS WITH BACKGROUND MUSIC.",

    ruleKey:
      "xcel.fx.artistry.musicality",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Musicality",
      pageLabel: "FLOOR EXERCISE - 20"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "artistry", "musicality"]
  },

  // ----------------------------------------------------------
  // 007 — EXPRESSION
  // ----------------------------------------------------------

  {
    id: "xcel-art-007",

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

    category: "ARTISTRY",
    subcategory: "EXPRESSION",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "SELL IT!",

    question:
      "How much can the Expression category cost on Xcel Floor?",

    options: [
      { id: "A", text: "Up to 0.10" },
      { id: "B", text: "Up to 0.20" },
      { id: "C", text: "Up to 0.30" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "B",

    explanation:
      "Expression can receive up to 0.20. Performance quality should communicate emotion and facial expression should match the choreography and music.",

    takeaway:
      "PERFORMANCE QUALITY COUNTS.",

    ruleKey:
      "xcel.fx.artistry.expression",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Expression",
      pageLabel: "FLOOR EXERCISE - 20"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "artistry", "expression"]
  },

  // ----------------------------------------------------------
  // 008 — BODY POSTURE
  // ----------------------------------------------------------

  {
    id: "xcel-art-008",

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

    category: "ARTISTRY",
    subcategory: "BODY_POSTURE",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "POSTURE CHECK",

    question:
      "Poor artistic body posture throughout a Floor routine can cost up to:",

    options: [
      { id: "A", text: "0.10" },
      { id: "B", text: "0.20" },
      { id: "C", text: "0.30" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "C",

    explanation:
      "Body posture can receive up to 0.30. The Code considers the head, shoulders and trunk, including an appropriately lifted chin, long neck and controlled core.",

    takeaway:
      "POSTURE IS PART OF THE SCORE.",

    ruleKey:
      "xcel.fx.artistry.body_posture",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Body Posture",
      pageLabel: "FLOOR EXERCISE - 20"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "artistry", "posture"]
  },

  // ----------------------------------------------------------
  // 009 — FOOTWORK
  // ----------------------------------------------------------

  {
    id: "xcel-art-009",

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

    category: "ARTISTRY",
    subcategory: "FOOTWORK",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "FEET MATTER",

    question:
      "Relaxed, turned-in or unpointed feet throughout Floor can cost up to:",

    options: [
      { id: "A", text: "0.10" },
      { id: "B", text: "0.20" },
      { id: "C", text: "0.30" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "C",

    explanation:
      "The artistic Footwork category can receive up to 0.30. It considers pointed feet, relevé, high toe and quality of steps throughout the routine.",

    takeaway:
      "YOUR FEET DON'T GET TO TAKE CHOREOGRAPHY OFF.",

    ruleKey:
      "xcel.fx.artistry.footwork",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Footwork",
      pageLabel: "FLOOR EXERCISE - 20"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "artistry", "footwork"]
  },

  // ----------------------------------------------------------
  // 010 — DYNAMICS
  // ----------------------------------------------------------

  {
    id: "xcel-art-010",

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

    category: "ARTISTRY",
    subcategory: "DYNAMICS",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "ENERGY CHECK",

    question:
      "How much can the overall Floor Dynamics category cost?",

    options: [
      { id: "A", text: "Up to 0.10" },
      { id: "B", text: "Up to 0.20" },
      { id: "C", text: "Up to 0.30" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "B",

    explanation:
      "Dynamics can receive up to 0.20, including insufficient amplitude in choreographed movement and failure to maintain energy throughout the routine.",

    takeaway:
      "FINISH WITH THE ENERGY YOU STARTED WITH.",

    ruleKey:
      "xcel.fx.artistry.dynamics",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Floor Exercise — Dynamics",
      pageLabel: "FLOOR EXERCISE - 20"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "floor", "artistry", "dynamics"]
  },

  // ==========================================================
  // BEAM ARTISTRY
  // ==========================================================

  // ----------------------------------------------------------
  // 011 — BEAM PURPOSEFUL CHOREOGRAPHY
  // ----------------------------------------------------------

  {
    id: "xcel-art-011",

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

    category: "ARTISTRY",
    subcategory: "PURPOSEFUL_CHOREOGRAPHY",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "BEAM ARTISTRY",

    question:
      "Repeatedly tapping the end of the Beam or making unnecessary adjustments can affect artistry.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Excessive preparation and unnecessary steps or adjustments without choreography are considered under lack of purposeful choreography.",

    takeaway:
      "PREPARATION SHOULD LOOK INTENTIONAL.",

    ruleKey:
      "xcel.bb.artistry.purposeful_choreography",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Artistic Performance",
      pageLabel: "BALANCE BEAM - 23"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "artistry", "choreography"]
  },

  // ----------------------------------------------------------
  // 012 — BEAM DIRECTIONS
  // ----------------------------------------------------------

  {
    id: "xcel-art-012",

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

    category: "ARTISTRY",
    subcategory: "DIRECTIONS",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "USE THE BEAM",

    question:
      "Missing choreography that connects movements sideward or backward can cost:",

    options: [
      { id: "A", text: "0.05 for each missing direction" },
      { id: "B", text: "0.20 automatically" },
      { id: "C", text: "0.30 automatically" },
      { id: "D", text: "Nothing" }
    ],

    correctOptionId: "A",

    explanation:
      "The Beam artistry chart assigns 0.05 for each missing direction within the choreography-in-all-directions category.",

    takeaway:
      "BEAM CHOREOGRAPHY SHOULDN'T ONLY TRAVEL FORWARD.",

    ruleKey:
      "xcel.bb.artistry.all_directions",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Choreography",
      pageLabel: "BALANCE BEAM - 23"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "artistry", "directions"]
  },

  // ----------------------------------------------------------
  // 013 — RHYTHM / TEMPO
  // ----------------------------------------------------------

  {
    id: "xcel-art-013",

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

    category: "ARTISTRY",
    subcategory: "RHYTHM_TEMPO",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "RHYTHM CHECK",

    question:
      "How much can Beam Rhythm and Tempo cost overall?",

    options: [
      { id: "A", text: "Up to 0.10" },
      { id: "B", text: "Up to 0.20" },
      { id: "C", text: "Up to 0.30" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "B",

    explanation:
      "Rhythm and Tempo can receive up to 0.20. The Code considers variation in rhythm and whether the routine looks connected rather than fragmented.",

    takeaway:
      "BEAM SHOULDN'T LOOK LIKE SKILL... STOP... SKILL... STOP.",

    ruleKey:
      "xcel.bb.artistry.rhythm_tempo",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Rhythm and Tempo",
      pageLabel: "BALANCE BEAM - 23"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "artistry", "rhythm"]
  },

  // ----------------------------------------------------------
  // 014 — SURENESS
  // ----------------------------------------------------------

  {
    id: "xcel-art-014",

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

    category: "ARTISTRY",
    subcategory: "SURENESS",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "OWN THE BEAM",

    question:
      "Performing a Beam routine cautiously or tentatively throughout can cost up to:",

    options: [
      { id: "A", text: "0.10" },
      { id: "B", text: "0.20" },
      { id: "C", text: "0.30" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "B",

    explanation:
      "Lack of sureness throughout the Beam exercise can receive up to 0.20.",

    takeaway:
      "CONFIDENCE IS VISIBLE.",

    ruleKey:
      "xcel.bb.artistry.sureness",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Sureness",
      pageLabel: "BALANCE BEAM - 23"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "artistry", "sureness"]
  },

  // ----------------------------------------------------------
  // 015 — BEAM POSTURE
  // ----------------------------------------------------------

  {
    id: "xcel-art-015",

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

    category: "ARTISTRY",
    subcategory: "BODY_POSTURE",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "POSTURE CHECK",

    question:
      "Beam Body Posture can receive an artistry deduction of up to:",

    options: [
      { id: "A", text: "0.10" },
      { id: "B", text: "0.20" },
      { id: "C", text: "0.30" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "C",

    explanation:
      "Body Posture can receive up to 0.30 and includes how the gymnast carries her head, shoulders and trunk.",

    takeaway:
      "POSTURE DOESN'T DISAPPEAR BETWEEN SKILLS.",

    ruleKey:
      "xcel.bb.artistry.body_posture",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Body Posture",
      pageLabel: "BALANCE BEAM - 23"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "artistry", "posture"]
  },

  // ----------------------------------------------------------
  // 016 — BEAM FOOTWORK
  // ----------------------------------------------------------

  {
    id: "xcel-art-016",

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

    category: "ARTISTRY",
    subcategory: "FOOTWORK",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "FEET CHECK",

    question:
      "Poor Beam footwork throughout the routine can cost up to:",

    options: [
      { id: "A", text: "0.10" },
      { id: "B", text: "0.20" },
      { id: "C", text: "0.30" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "C",

    explanation:
      "Beam Footwork can receive up to 0.30. The Code looks for pointed and extended feet, relevé, high toe and quality steps.",

    takeaway:
      "THE JUDGE SEES YOUR FEET BETWEEN SKILLS TOO.",

    ruleKey:
      "xcel.bb.artistry.footwork",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Footwork",
      pageLabel: "BALANCE BEAM - 23"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "artistry", "footwork"]
  },

  // ----------------------------------------------------------
  // 017 — ENERGY
  // ----------------------------------------------------------

  {
    id: "xcel-art-017",

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

    category: "ARTISTRY",
    subcategory: "DYNAMICS",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "FINISH STRONG",

    question:
      "The Code expects the energy at the end of a Beam routine to be similar to the energy shown at the beginning.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Maintaining energy throughout the exercise is specifically considered within Beam Dynamics.",

    takeaway:
      "DON'T LET THE ROUTINE FADE OUT.",

    ruleKey:
      "xcel.bb.artistry.energy_maintained",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Dynamics",
      pageLabel: "BALANCE BEAM - 23"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "artistry", "dynamics"]
  },

  // ==========================================================
  // GENERAL / COMPETITION SMART
  // ==========================================================

  // ----------------------------------------------------------
  // 018 — SAPPHIRE BONUS MAX
  // ----------------------------------------------------------

  {
    id: "xcel-gen-018",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["UB", "BB", "FX"],

    category: "GENERAL",
    subcategory: "BONUS",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "SAPPHIRE BONUS",

    question:
      "What is the maximum bonus available in Xcel Sapphire?",

    options: [
      { id: "A", text: "0.20" },
      { id: "B", text: "0.30" },
      { id: "C", text: "0.40" },
      { id: "D", text: "0.50" }
    ],

    correctOptionId: "C",

    explanation:
      "Sapphire has a maximum of 0.40 bonus.",

    takeaway:
      "SAPPHIRE BONUS MAX = 0.40.",

    ruleKey:
      "xcel.sapphire.bonus.maximum",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Additional Sapphire Information — Bonus",
      pageLabel: "GENERAL / JUDGES - 25"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "sapphire", "bonus"]
  },

  // ----------------------------------------------------------
  // 019 — BONUS CATEGORIES
  // ----------------------------------------------------------

  {
    id: "xcel-gen-019",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["UB", "BB", "FX"],

    category: "GENERAL",
    subcategory: "BONUS",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "BONUS BASICS",

    question:
      "What are the two Sapphire bonus categories?",

    options: [
      {
        id: "A",
        text: "Execution and Artistry"
      },
      {
        id: "B",
        text: "Difficulty and Connection"
      },
      {
        id: "C",
        text: "Dance and Acro"
      },
      {
        id: "D",
        text: "Landing and Amplitude"
      }
    ],

    correctOptionId: "B",

    explanation:
      "Sapphire bonus is divided into Difficulty Bonus and Connection Bonus.",

    takeaway:
      "SAPPHIRE BONUS = DIFFICULTY + CONNECTION.",

    ruleKey:
      "xcel.sapphire.bonus.categories",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Additional Sapphire Information — Bonus",
      pageLabel: "GENERAL / JUDGES - 25"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "sapphire", "bonus"]
  },

  // ----------------------------------------------------------
  // 020 — ALL BONUS ONE CATEGORY
  // ----------------------------------------------------------

  {
    id: "xcel-gen-020",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["UB", "BB", "FX"],

    category: "GENERAL",
    subcategory: "BONUS",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "TRUE OR FALSE",

    question:
      "A Sapphire gymnast must earn some Difficulty Bonus and some Connection Bonus to reach the full 0.40.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "All 0.40 may come from one bonus category or from a combination of Difficulty and Connection Bonus.",

    takeaway:
      "THE 0.40 DOESN'T HAVE TO BE SPLIT.",

    ruleKey:
      "xcel.sapphire.bonus.one_category_allowed",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Additional Sapphire Information — Bonus",
      pageLabel: "GENERAL / JUDGES - 25"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "sapphire", "bonus"]
  },

  // ----------------------------------------------------------
  // 021 — C BONUS
  // ----------------------------------------------------------

  {
    id: "xcel-gen-021",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["UB", "BB", "FX"],

    category: "GENERAL",
    subcategory: "DIFFICULTY_BONUS",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "C BONUS",

    question:
      "How much Difficulty Bonus is an eligible C element worth in Sapphire?",

    options: [
      { id: "A", text: "0.05" },
      { id: "B", text: "0.10" },
      { id: "C", text: "0.20" },
      { id: "D", text: "0.30" }
    ],

    correctOptionId: "B",

    explanation:
      "An eligible 'C' element may receive 0.10 Difficulty Bonus.",

    takeaway:
      "C = +0.10 DIFFICULTY BONUS.",

    ruleKey:
      "xcel.sapphire.bonus.c_difficulty",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Additional Sapphire Information — Bonus",
      pageLabel: "GENERAL / JUDGES - 25"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "sapphire", "bonus", "c-value"]
  },

  // ----------------------------------------------------------
  // 022 — SAME C BONUS TWICE
  // ----------------------------------------------------------

  {
    id: "xcel-gen-022",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["UB", "BB", "FX"],

    category: "GENERAL",
    subcategory: "DIFFICULTY_BONUS",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "DOUBLE BONUS?",

    question:
      "The same C skill can earn C Difficulty Bonus twice in one Sapphire routine.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "The same 'C' skill may receive its C Difficulty Bonus only once.",

    takeaway:
      "SAME C, DIFFICULTY BONUS ONCE.",

    ruleKey:
      "xcel.sapphire.bonus.same_c_once",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Additional Sapphire Information — Bonus",
      pageLabel: "GENERAL / JUDGES - 25"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "sapphire", "bonus"]
  },

  // ----------------------------------------------------------
  // 023 — D BONUS
  // ----------------------------------------------------------

  {
    id: "xcel-gen-023",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["UB", "BB", "FX"],

    category: "GENERAL",
    subcategory: "DIFFICULTY_BONUS",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "D BONUS",

    question:
      "A Sapphire gymnast may perform more than one D element, but only one D is eligible for the 0.10 Difficulty Bonus on an event.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "Additional D elements are allowed, but only one D skill may receive the 0.10 Difficulty Bonus on the event.",

    takeaway:
      "EXTRA D'S CAN BE ALLOWED WITHOUT EXTRA D BONUS.",

    ruleKey:
      "xcel.sapphire.bonus.d_once",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Additional Sapphire Information — Bonus",
      pageLabel: "GENERAL / JUDGES - 25"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "sapphire", "bonus", "d-value"]
  },

  // ----------------------------------------------------------
  // 024 — CONNECTION BONUS
  // ----------------------------------------------------------

  {
    id: "xcel-gen-024",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["UB", "BB", "FX"],

    category: "GENERAL",
    subcategory: "CONNECTION_BONUS",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "CONNECT IT",

    question:
      "An eligible B + B connection, or higher, can earn how much Connection Bonus in Sapphire?",

    options: [
      { id: "A", text: "0.05" },
      { id: "B", text: "0.10" },
      { id: "C", text: "0.20" },
      { id: "D", text: "0.30" }
    ],

    correctOptionId: "B",

    explanation:
      "An eligible B + B combination, or higher, can receive 0.10 Connection Bonus.",

    takeaway:
      "B + B OR HIGHER = +0.10 CONNECTION BONUS.",

    ruleKey:
      "xcel.sapphire.bonus.connection_bb",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Additional Sapphire Information — Bonus",
      pageLabel: "GENERAL / JUDGES - 25"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "sapphire", "connection-bonus"]
  },

  // ----------------------------------------------------------
  // 025 — BONUS REQUIRES VP
  // ----------------------------------------------------------

  {
    id: "xcel-gen-025",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["UB", "BB", "FX"],

    category: "GENERAL",
    subcategory: "BONUS_ELIGIBILITY",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "BONUS CHECK",

    question:
      "An element can receive Sapphire Bonus even if it does not receive Value Part credit.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Only elements that receive Value Part credit may be used for Bonus.",

    takeaway:
      "NO VP = NO BONUS.",

    ruleKey:
      "xcel.sapphire.bonus.requires_vp",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Additional Sapphire Information — Bonus",
      pageLabel: "GENERAL / JUDGES - 25"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "sapphire", "bonus", "vp"]
  },

  // ----------------------------------------------------------
  // 026 — FALL / SPOT BONUS
  // ----------------------------------------------------------

  {
    id: "xcel-gen-026",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["UB", "BB", "FX"],

    category: "GENERAL",
    subcategory: "BONUS_ELIGIBILITY",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "BONUS OR NO?",

    question:
      "A Sapphire element performed with a fall or spotting deduction can still earn Bonus.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "An element performed with a fall or spotting deduction is not eligible for Bonus.",

    takeaway:
      "FALL OR SPOT = NO BONUS.",

    ruleKey:
      "xcel.sapphire.bonus.no_fall_spot",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Additional Sapphire Information — Bonus",
      pageLabel: "GENERAL / JUDGES - 25"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "sapphire", "bonus", "fall", "spot"]
  },

  // ----------------------------------------------------------
  // 027 — SAME SKILL TWO BONUS TYPES
  // ----------------------------------------------------------

  {
    id: "xcel-gen-027",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["UB", "BB", "FX"],

    category: "GENERAL",
    subcategory: "BONUS",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "DOUBLE DUTY",

    question:
      "The same Sapphire element may contribute to both Difficulty Bonus and Connection Bonus.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "An eligible element may receive Difficulty Bonus and also be used as part of a Connection Bonus.",

    takeaway:
      "ONE SKILL CAN DO TWO BONUS JOBS.",

    ruleKey:
      "xcel.sapphire.bonus.difficulty_and_connection",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Additional Sapphire Information — Bonus Clarifications",
      pageLabel: "GENERAL / JUDGES - 25"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "sapphire", "bonus"]
  },

  // ----------------------------------------------------------
  // 028 — EXACT SAME CONNECTION
  // ----------------------------------------------------------

  {
    id: "xcel-gen-028",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["BB"],

    category: "GENERAL",
    subcategory: "CONNECTION_BONUS",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "SAME CONNECTION?",

    question:
      "The exact same Beam connection can receive Sapphire Connection Bonus twice in the same routine.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "The exact same connection may receive Connection Bonus only once. Performing the same skills later in a different order can create a different connection.",

    takeaway:
      "SAME EXACT CONNECTION = BONUS ONCE.",

    ruleKey:
      "xcel.sapphire.bb.exact_connection_once",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Sapphire Bonus Clarifications",
      pageLabel: "GENERAL / JUDGES - 26"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "sapphire",
      "beam",
      "connection-bonus"
    ]
  },

  // ----------------------------------------------------------
  // 029 — INDIRECT DANCE BONUS
  // ----------------------------------------------------------

  {
    id: "xcel-gen-029",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["BB", "FX"],

    category: "GENERAL",
    subcategory: "CONNECTION_BONUS",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "DIRECT OR INDIRECT?",

    question:
      "An indirect dance passage is eligible for Sapphire Connection Bonus.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Dance elements must be directly connected to receive Connection Bonus. An indirect dance passage is not eligible for Connection Bonus.",

    takeaway:
      "DANCE BONUS CONNECTIONS MUST BE DIRECT.",

    ruleKey:
      "xcel.sapphire.dance.indirect_no_connection_bonus",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Sapphire Bonus Clarifications",
      pageLabel: "GENERAL / JUDGES - 26"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "sapphire",
      "dance",
      "connection-bonus"
    ]
  },

  // ----------------------------------------------------------
  // 030 — INDIRECT ACRO FLOOR BONUS
  // ----------------------------------------------------------

  {
    id: "xcel-gen-030",

    program: "XCEL",
    divisions: ["SAPPHIRE"],
    apparatus: ["FX"],

    category: "GENERAL",
    subcategory: "CONNECTION_BONUS",

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "FLOOR BONUS",

    question:
      "Indirect acro connections on Sapphire Floor may be eligible for Connection Bonus.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "The Sapphire bonus clarifications specifically allow eligible indirect acro connections on Floor to receive Connection Bonus.",

    takeaway:
      "INDIRECT ACRO CAN BONUS ON FLOOR.",

    ruleKey:
      "xcel.sapphire.fx.indirect_acro_bonus",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Sapphire Bonus Clarifications",
      pageLabel: "GENERAL / JUDGES - 26"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "sapphire",
      "floor",
      "connection-bonus"
    ]
  },

  // ----------------------------------------------------------
  // 031 — SPOT DURING ELEMENT
  // ----------------------------------------------------------

  {
    id: "xcel-gen-031",

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

    category: "COMPETITION_RULES",
    subcategory: "SPOTTING",

    difficulty: "FOUNDATION",

    format: "WHAT_HAPPENS",
    eyebrow: "COACH SPOT",

    question:
      "A coach assists the gymnast during an element. What happens to that element?",

    options: [
      {
        id: "A",
        text: "0.50 spot deduction and no VP or SR credit"
      },
      {
        id: "B",
        text: "Only 0.10 is deducted"
      },
      {
        id: "C",
        text: "VP and SR are automatically awarded"
      },
      {
        id: "D",
        text: "The entire routine is void"
      }
    ],

    correctOptionId: "A",

    explanation:
      "Spotting assistance during an element receives a 0.50 deduction. VP and SR credit are not awarded, and Sapphire receives no Bonus for the spotted element.",

    takeaway:
      "SPOT DURING THE SKILL = 0.50 + NO VP/SR.",

    ruleKey:
      "xcel.general.spot_during_element",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Spotting Regulations",
      pageLabel: "EVENT-SPECIFIC SPOTTING REGULATIONS"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "spotting", "vp", "sr"]
  },

  // ----------------------------------------------------------
  // 032 — SPOT ON LANDING
  // ----------------------------------------------------------

  {
    id: "xcel-gen-032",

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

    category: "COMPETITION_RULES",
    subcategory: "SPOTTING",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "LANDING SPOT",

    question:
      "If the coach spots only the landing, the skill may still receive VP and SR credit.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "A landing spot receives a 0.50 deduction, but VP and SR credit may still be awarded. Sapphire Bonus is not awarded.",

    takeaway:
      "LANDING SPOT ≠ LOSS OF VP/SR.",

    ruleKey:
      "xcel.general.spot_on_landing",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Spotting Regulations",
      pageLabel: "EVENT-SPECIFIC SPOTTING REGULATIONS"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "spotting", "landing"]
  },

  // ----------------------------------------------------------
  // 033 — CATCH A FALLING GYMNAST
  // ----------------------------------------------------------

  {
    id: "xcel-gen-033",

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

    category: "COMPETITION_RULES",
    subcategory: "SPOTTING",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "CATCH!",

    question:
      "The gymnast is already falling and the coach catches her. What is deducted?",

    options: [
      {
        id: "A",
        text: "0.50 for the fall only"
      },
      {
        id: "B",
        text: "0.50 spot + 0.50 fall"
      },
      {
        id: "C",
        text: "1.00 spot"
      },
      {
        id: "D",
        text: "Nothing"
      }
    ],

    correctOptionId: "A",

    explanation:
      "When the coach catches a falling gymnast, the Code says not to deduct for a spot; deduct 0.50 for the fall only.",

    takeaway:
      "CATCHING A FALL ≠ AN EXTRA SPOT DEDUCTION.",

    ruleKey:
      "xcel.general.coach_catches_fall",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Spotting Regulations",
      pageLabel: "EVENT-SPECIFIC SPOTTING REGULATIONS"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "spotting", "fall"]
  },

  // ----------------------------------------------------------
  // 034 — GYMNAST TOUCHES COACH
  // ----------------------------------------------------------

  {
    id: "xcel-gen-034",

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

    category: "COMPETITION_RULES",
    subcategory: "SPOTTING",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "WHO TOUCHED WHO?",

    question:
      "There is automatically a spot deduction if the gymnast inadvertently touches her coach.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "There is no penalty when the gymnast inadvertently touches the coach.",

    takeaway:
      "ACCIDENTAL GYMNAST-TO-COACH CONTACT IS NOT A SPOT.",

    ruleKey:
      "xcel.general.gymnast_touches_coach",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Spotting Regulations",
      pageLabel: "EVENT-SPECIFIC SPOTTING REGULATIONS"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "spotting", "coach"]
  },

  // ----------------------------------------------------------
  // 035 — COACH ON FLOOR
  // ----------------------------------------------------------

  {
    id: "xcel-gen-035",

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
    subcategory: "COACH_POSITION",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "COACH ON FLOOR?",

    question:
      "A coach is allowed to stand on the Floor Exercise mat without an automatic deduction.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "A",

    explanation:
      "The Xcel Floor spotting regulations allow the coach on the Floor Exercise mat without deduction.",

    takeaway:
      "COACH ON THE FLOOR MAT = ALLOWED.",

    ruleKey:
      "xcel.fx.coach_on_mat",

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

    tags: ["xcel", "floor", "coach", "spotting"]
  },

  // ----------------------------------------------------------
  // 036 — FLOOR TIME WARNING
  // ----------------------------------------------------------

  {
    id: "xcel-gen-036",

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
    subcategory: "WARNING_SIGNAL",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "LISTEN FOR THE BELL?",

    question:
      "Floor gives a warning signal shortly before the routine reaches its maximum time.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Unlike Beam, there is no warning signal for the Floor routine time limit.",

    takeaway:
      "FLOOR DOES NOT GIVE A ROUTINE-TIME WARNING.",

    ruleKey:
      "xcel.fx.timing.no_warning_signal",

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
  // 037 — FRACTION OF SECOND
  // ----------------------------------------------------------

  {
    id: "xcel-gen-037",

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

    difficulty: "CODE_SMART",

    format: "TRUE_FALSE",
    eyebrow: "0.99 SECONDS?",

    question:
      "A Floor routine that is only a fraction of a second over its time allotment automatically receives the 0.10 overtime deduction.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "No overtime deduction is taken when the time is only a fraction of a second over the allotment, as defined in the Code.",

    takeaway:
      "A FRACTION OF A SECOND DOESN'T AUTOMATICALLY COST 0.10.",

    ruleKey:
      "xcel.fx.timing.fraction_second",

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

    tags: ["xcel", "floor", "timing", "overtime"]
  },

  // ----------------------------------------------------------
  // 038 — FLOOR UNDERTIME
  // ----------------------------------------------------------

  {
    id: "xcel-gen-038",

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
    subcategory: "UNDERTIME",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "TOO SHORT?",

    question:
      "Xcel Floor has a specific undertime deduction simply because a routine finishes below the maximum time.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "The Code states there is no undertime deduction for Xcel Floor.",

    takeaway:
      "NO UNDERTIME DEDUCTION.",

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
  // 039 — EQUIPMENT FAILURE
  // ----------------------------------------------------------

  {
    id: "xcel-gen-039",

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

    category: "COMPETITION_RULES",
    subcategory: "EQUIPMENT_FAILURE",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "EQUIPMENT FAILURE?",

    question:
      "Which is specifically listed as an example of equipment failure?",

    options: [
      {
        id: "A",
        text: "A broken or completely torn handgrip"
      },
      {
        id: "B",
        text: "A bandage becoming loose"
      },
      {
        id: "C",
        text: "Incorrect bar setting"
      },
      {
        id: "D",
        text: "Losing part of a shoe"
      }
    ],

    correctOptionId: "A",

    explanation:
      "A broken or completely torn handgrip is listed as equipment failure. Loose bandages, partial loss of footwear and incorrect bar setting are not treated the same way.",

    takeaway:
      "BROKEN GRIP CAN BE EQUIPMENT FAILURE.",

    ruleKey:
      "xcel.general.equipment_failure.broken_grip",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "General / Judges — Equipment Failure",
      pageLabel: "GENERAL / JUDGES - 11"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "competition-rules",
      "equipment-failure",
      "grips"
    ]
  },

  // ----------------------------------------------------------
  // 040 — CAMERA FLASH
  // ----------------------------------------------------------

  {
    id: "xcel-gen-040",

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

    category: "COMPETITION_RULES",
    subcategory: "REPEAT_ROUTINE",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "DO-OVER?",

    question:
      "A camera flash or light is a valid reason for a gymnast to repeat her routine.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "The Code specifically states that a camera flash or light is not a reason to repeat an exercise.",

    takeaway:
      "CAMERA FLASH ≠ AUTOMATIC DO-OVER.",

    ruleKey:
      "xcel.general.camera_flash_no_repeat",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "General / Judges — Equipment Failure / Repetition",
      pageLabel: "GENERAL / JUDGES - 11"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "competition-rules",
      "repeat-routine"
    ]
  }

];
