import type { PRFCT10Question } from "../types";
// ============================================================
// PRFCT10 CHALLENGE
// QUESTION BANK — BATCH 02
// PROGRAM: XCEL
// APPARATUS: VAULT
// VERIFIED AGAINST:
// USA Gymnastics Women's Xcel Code of Points
// Revision: August 2026
// Cycle: 2022–2028
// ============================================================

export const xcelVaultBatch02: PRFCT10Question[] = [

  // ----------------------------------------------------------
  // 001
  // ----------------------------------------------------------

  {
    id: "xcel-vt-001",

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

    category: "VAULT_RULES",
    subcategory: "ALLOWABLE_VAULTS",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "TRUE OR FALSE",

    question:
      "An Xcel gymnast may perform any vault she knows, even if it is not listed for her division.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Only vaults permitted for the gymnast's Xcel division may be performed. An unlisted vault is considered a VOID vault.",

    takeaway:
      "YOUR VAULT MUST BE ALLOWED FOR YOUR DIVISION.",

    ruleKey:
      "xcel.vt.allowed_vaults.only",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault Rules — Allowable Vaults",
      pageLabel: "VAULT - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "vault",
      "allowable-vault",
      "void"
    ]
  },

  // ----------------------------------------------------------
  // 002
  // ----------------------------------------------------------

  {
    id: "xcel-vt-002",

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

    category: "VAULT_RULES",
    subcategory: "NUMBER_OF_VAULTS",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "VAULT BASICS",

    question:
      "How many scored vaults does an Xcel gymnast have the right to perform?",

    options: [
      { id: "A", text: "One" },
      { id: "B", text: "Two" },
      { id: "C", text: "Three" },
      { id: "D", text: "Four" }
    ],

    correctOptionId: "B",

    explanation:
      "An Xcel gymnast has the right to perform two vaults. The better score is used as her final Vault score.",

    takeaway:
      "TWO VAULTS. BEST SCORE COUNTS.",

    ruleKey:
      "xcel.vt.two_vaults",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — General Information",
      pageLabel: "VAULT - 4"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "vault",
      "attempts",
      "final-score"
    ]
  },

  // ----------------------------------------------------------
  // 003
  // ----------------------------------------------------------

  {
    id: "xcel-vt-003",

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

    category: "VAULT_RULES",
    subcategory: "SAME_OR_DIFFERENT",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "TRUE OR FALSE",

    question:
      "A gymnast's two Xcel vaults must be different.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "The two vaults may be the same or different, as long as each vault is allowed for the gymnast's division.",

    takeaway:
      "YOUR TWO VAULTS MAY BE THE SAME.",

    ruleKey:
      "xcel.vt.same_or_different_vaults",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — General Information",
      pageLabel: "VAULT - 4"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "vault",
      "attempts"
    ]
  },

  // ----------------------------------------------------------
  // 004
  // ----------------------------------------------------------

  {
    id: "xcel-vt-004",

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

    category: "COMPETITION_RULES",
    subcategory: "TOTAL_APPROACHES",

    difficulty: "COMPETITION_SMART",

    format: "MULTIPLE_CHOICE",
    eyebrow: "HOW MANY?",

    question:
      "What is the maximum number of running approaches an Xcel gymnast may use to successfully complete one or both vaults?",

    options: [
      { id: "A", text: "Two" },
      { id: "B", text: "Three" },
      { id: "C", text: "Four" },
      { id: "D", text: "Unlimited" }
    ],

    correctOptionId: "B",

    explanation:
      "A maximum of three running approaches is allowed to successfully complete one or both vaults.",

    takeaway:
      "THREE APPROACHES MAX.",

    ruleKey:
      "xcel.vt.max_three_approaches",

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

    tags: [
      "xcel",
      "vault",
      "approach",
      "attempts"
    ]
  },

  // ----------------------------------------------------------
  // 005
  // ----------------------------------------------------------

  {
    id: "xcel-vt-005",

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

    category: "COMPETITION_RULES",
    subcategory: "BALK",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "BALK!",

    question:
      "A gymnast runs down the runway, stops before vaulting and has not already used a balk. What happens?",

    options: [
      { id: "A", text: "She receives a zero" },
      { id: "B", text: "0.50 is deducted" },
      { id: "C", text: "It is her one allowed balk with no penalty" },
      { id: "D", text: "She must leave the event" }
    ],

    correctOptionId: "C",

    explanation:
      "One balk is allowed within the three approaches without penalty. An additional balk is considered a VOID vault.",

    takeaway:
      "ONE BALK IS FREE. ANOTHER CAN BECOME A VOID.",

    ruleKey:
      "xcel.vt.one_balk_allowed",

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

    tags: [
      "xcel",
      "vault",
      "balk",
      "void"
    ]
  },

  // ----------------------------------------------------------
  // 006
  // ----------------------------------------------------------

  {
    id: "xcel-vt-006",

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

    category: "COMPETITION_RULES",
    subcategory: "FOURTH_ATTEMPT",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "TRUE OR FALSE",

    question:
      "If a gymnast uses all three Vault approaches, she may take a fourth approach if she has not completed two vaults.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "A fourth Vault approach is not permitted.",

    takeaway:
      "NO FOURTH ATTEMPT.",

    ruleKey:
      "xcel.vt.no_fourth_attempt",

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

    tags: [
      "xcel",
      "vault",
      "attempts"
    ]
  },

  // ----------------------------------------------------------
  // 007
  // ----------------------------------------------------------

  {
    id: "xcel-vt-007",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["VT"],

    category: "VAULT_RULES",
    subcategory: "BRONZE_OPTION_1_SV",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "BRONZE VAULT",

    question:
      "What is the total Start Value of Xcel Bronze Vault Option 1?",

    options: [
      { id: "A", text: "8.0" },
      { id: "B", text: "9.0" },
      { id: "C", text: "9.5" },
      { id: "D", text: "10.0" }
    ],

    correctOptionId: "B",

    explanation:
      "Bronze Vault Option 1 has two parts worth 4.50 each: the stretch jump onto the mat stack and the kick to handstand, fall to flat back.",

    takeaway:
      "BRONZE OPTION 1 = 9.0 TOTAL SV.",

    ruleKey:
      "xcel.vt.bronze.option1.start_value",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault Rules — Bronze",
      pageLabel: "VAULT - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "vault",
      "start-value"
    ]
  },

  // ----------------------------------------------------------
  // 008
  // ----------------------------------------------------------

  {
    id: "xcel-vt-008",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["VT"],

    category: "VAULT_RULES",
    subcategory: "BRONZE_OPTION_2_SV",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "BRONZE VAULT",

    question:
      "What is the Start Value of Bronze Vault Option 2: Jump to Handstand — Fall to Flat Back?",

    options: [
      { id: "A", text: "9.0" },
      { id: "B", text: "9.5" },
      { id: "C", text: "10.0" },
      { id: "D", text: "It depends on the mat height" }
    ],

    correctOptionId: "C",

    explanation:
      "Bronze Vault Option 2 has a 10.0 Start Value.",

    takeaway:
      "BRONZE OPTION 2 STARTS FROM 10.0.",

    ruleKey:
      "xcel.vt.bronze.option2.start_value",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault Rules — Bronze",
      pageLabel: "VAULT - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "vault",
      "start-value"
    ]
  },

  // ----------------------------------------------------------
  // 009
  // ----------------------------------------------------------

  {
    id: "xcel-vt-009",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["VT"],

    category: "VAULT_RULES",
    subcategory: "BRONZE_REPULSION",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "TRUE OR FALSE",

    question:
      "Bronze Vault Option 2 requires visible repulsion from the hands to receive credit.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "Repulsion is not required for Bronze Vault Option 2.",

    takeaway:
      "BRONZE OPTION 2 DOES NOT REQUIRE REPULSION.",

    ruleKey:
      "xcel.vt.bronze.option2.no_repulsion_required",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Bronze Vault 2",
      pageLabel: "VAULT - 11"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "vault",
      "repulsion"
    ]
  },

  // ----------------------------------------------------------
  // 010
  // ----------------------------------------------------------

  {
    id: "xcel-vt-010",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["VT"],

    category: "VAULT_RULES",
    subcategory: "BRONZE_FLATBACK_SLIDE",

    difficulty: "COMPETITION_SMART",

    format: "TRUE_FALSE",
    eyebrow: "MYTH OR RULE?",

    question:
      "A Bronze gymnast lands correctly in a flat-back position and then slides off the end of the mat. She automatically receives a fall deduction.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "If the gymnast reaches the required flat-back position and then slides off the end of the mat, there is no fall penalty.",

    takeaway:
      "FLAT BACK FIRST. SLIDING OFF AFTERWARD IS NOT A FALL.",

    ruleKey:
      "xcel.vt.bronze.flatback_slide_no_fall",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Bronze Vault",
      pageLabel: "VAULT - 11"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "vault",
      "flat-back",
      "fall"
    ]
  },

  // ----------------------------------------------------------
  // 011
  // ----------------------------------------------------------

  {
    id: "xcel-vt-011",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["VT"],

    category: "VAULT_RULES",
    subcategory: "SILVER_VAULT_OPTIONS",

    difficulty: "FOUNDATION",

    format: "MULTIPLE_CHOICE",
    eyebrow: "SILVER VAULT",

    question:
      "Which of these is an allowable Xcel Silver vault option?",

    options: [
      { id: "A", text: "Handspring over the mat stack" },
      { id: "B", text: "Yurchenko layout full" },
      { id: "C", text: "Tsukahara tuck" },
      { id: "D", text: "Handspring front tuck" }
    ],

    correctOptionId: "A",

    explanation:
      "Silver Vault Option 1 is a handspring over the sideways mat stack.",

    takeaway:
      "SILVER OPTION 1 = HANDSPRING OVER THE MAT STACK.",

    ruleKey:
      "xcel.vt.silver.option1",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Silver Division Vault",
      pageLabel: "VAULT - 12"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "vault",
      "allowable-vault"
    ]
  },

  // ----------------------------------------------------------
  // 012
  // ----------------------------------------------------------

  {
    id: "xcel-vt-012",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["VT"],

    category: "VAULT_RULES",
    subcategory: "SILVER_OPTION_2_TWIST",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "TOO MUCH TWIST?",

    question:
      "A Silver gymnast performs Vault Option 2 but adds more twist than the permitted ¼–½ turn onto the mat stack. What happens?",

    options: [
      { id: "A", text: "0.10 deduction" },
      { id: "B", text: "0.30 deduction" },
      { id: "C", text: "The vault is VOID" },
      { id: "D", text: "No deduction" }
    ],

    correctOptionId: "C",

    explanation:
      "Silver Vault Option 2 permits a ¼–½ turn on. Additional twist results in a VOID vault.",

    takeaway:
      "EXTRA TWIST CAN VOID A SILVER VAULT.",

    ruleKey:
      "xcel.vt.silver.option2.additional_twist_void",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault Rules — Silver",
      pageLabel: "VAULT - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "vault",
      "twist",
      "void"
    ]
  },

  // ----------------------------------------------------------
  // 013
  // ----------------------------------------------------------

  {
    id: "xcel-vt-013",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["VT"],

    category: "EXECUTION",
    subcategory: "TWO_FOOT_PUNCH",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "BOARD CHECK",

    question:
      "A Silver gymnast fails to punch the board or alternative springboard simultaneously with two feet. What is the deduction?",

    options: [
      { id: "A", text: "0.10" },
      { id: "B", text: "0.20" },
      { id: "C", text: "0.30" },
      { id: "D", text: "VOID" }
    ],

    correctOptionId: "B",

    explanation:
      "Failure to punch the board or alternative springboard simultaneously with two feet receives a 0.20 deduction.",

    takeaway:
      "TWO FEET TOGETHER MATTER.",

    ruleKey:
      "xcel.vt.silver.board.two_foot_punch",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Silver Division Vault Deductions",
      pageLabel: "VAULT - 12"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "vault",
      "board",
      "execution"
    ]
  },

  // ----------------------------------------------------------
  // 014
  // ----------------------------------------------------------

  {
    id: "xcel-vt-014",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["VT"],

    category: "EXECUTION",
    subcategory: "ADDITIONAL_HAND_PLACEMENTS",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "HANDS CHECK",

    question:
      "During the support phase of a Silver vault, how much is deducted for each additional hand placement or hand step?",

    options: [
      { id: "A", text: "0.05 each" },
      { id: "B", text: "0.10 each, maximum 0.30" },
      { id: "C", text: "0.20 each, no maximum" },
      { id: "D", text: "0.50 each" }
    ],

    correctOptionId: "B",

    explanation:
      "Additional hand placements or steps on the hands receive 0.10 each, up to a maximum of 0.30.",

    takeaway:
      "HAND STEPS: 0.10 EACH, MAX 0.30.",

    ruleKey:
      "xcel.vt.silver.additional_hand_placements",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Silver Division Vault Deductions",
      pageLabel: "VAULT - 12"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "vault",
      "hands",
      "support"
    ]
  },

  // ----------------------------------------------------------
  // 015
  // ----------------------------------------------------------

  {
    id: "xcel-vt-015",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["VT"],

    category: "VAULT_RULES",
    subcategory: "NO_HAND_CONTACT",

    difficulty: "FOUNDATION",

    format: "WHAT_HAPPENS",
    eyebrow: "VOID OR SCORE?",

    question:
      "A Silver gymnast completes her vault without making hand contact with the mat stack. What is the result?",

    options: [
      { id: "A", text: "0.30 deduction" },
      { id: "B", text: "0.50 deduction" },
      { id: "C", text: "1.00 deduction" },
      { id: "D", text: "VOID" }
    ],

    correctOptionId: "D",

    explanation:
      "No hand contact on the mat stack results in a VOID Silver vault.",

    takeaway:
      "NO HAND CONTACT = VOID.",

    ruleKey:
      "xcel.vt.silver.no_hand_contact_void",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Silver Division Vault Deductions",
      pageLabel: "VAULT - 12"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "vault",
      "hands",
      "void"
    ]
  },

  // ----------------------------------------------------------
  // 016
  // ----------------------------------------------------------

  {
    id: "xcel-vt-016",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["VT"],

    category: "EXECUTION",
    subcategory: "ONE_HAND_CONTACT",

    difficulty: "CODE_SMART",

    format: "HOW_MUCH",
    eyebrow: "ONE HAND?",

    question:
      "If only one hand contacts the mat stack on a Silver vault and at least half the judging panel sees it, what Chief Judge deduction applies?",

    options: [
      { id: "A", text: "0.30" },
      { id: "B", text: "0.50" },
      { id: "C", text: "1.00" },
      { id: "D", text: "VOID" }
    ],

    correctOptionId: "C",

    explanation:
      "Touching with only one hand receives a 1.00 Chief Judge deduction when at least half of the panel sees the one-hand contact.",

    takeaway:
      "ONE HAND CAN COST 1.00.",

    ruleKey:
      "xcel.vt.silver.one_hand_contact",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Silver Division Vault Deductions",
      pageLabel: "VAULT - 12"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "vault",
      "hands",
      "chief-judge"
    ]
  },

  // ----------------------------------------------------------
  // 017
  // ----------------------------------------------------------

  {
    id: "xcel-vt-017",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["VT"],

    category: "EXECUTION",
    subcategory: "HEAD_CONTACT",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "HEAD CONTACT",

    question:
      "How much is deducted when a Silver gymnast's head contacts the mat stack during the support phase?",

    options: [
      { id: "A", text: "0.50" },
      { id: "B", text: "1.00" },
      { id: "C", text: "2.00" },
      { id: "D", text: "VOID" }
    ],

    correctOptionId: "C",

    explanation:
      "Head contact with the mat stack during support receives a 2.00 deduction. This amount includes 0.50 for extreme arm bend.",

    takeaway:
      "HEAD CONTACT IN SUPPORT = 2.00.",

    ruleKey:
      "xcel.vt.silver.head_contact_support",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Silver Division Vault Deductions",
      pageLabel: "VAULT - 12"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "silver",
      "vault",
      "head-contact",
      "support"
    ]
  },

  // ----------------------------------------------------------
  // 018
  // ----------------------------------------------------------

  {
    id: "xcel-vt-018",

    program: "XCEL",
    divisions: ["GOLD"],
    apparatus: ["VT"],

    category: "VAULT_RULES",
    subcategory: "ALTERNATIVE_SPRINGBOARD",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "GOLD VAULT",

    question:
      "What happens to the Start Value when an Xcel Gold gymnast uses an allowed alternative springboard?",

    options: [
      { id: "A", text: "It stays 10.0" },
      { id: "B", text: "It becomes 9.5" },
      { id: "C", text: "It becomes 9.0" },
      { id: "D", text: "The vault is VOID" }
    ],

    correctOptionId: "B",

    explanation:
      "Gold vaults have a 10.0 Start Value, but the Start Value becomes 9.5 when the allowed alternative springboard is used.",

    takeaway:
      "GOLD + ALTERNATIVE SPRINGBOARD = 9.5 SV.",

    ruleKey:
      "xcel.vt.gold.alternative_springboard",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault Rules — Gold",
      pageLabel: "VAULT - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "gold",
      "vault",
      "springboard",
      "start-value"
    ]
  },

  // ----------------------------------------------------------
  // 019
  // ----------------------------------------------------------

  {
    id: "xcel-vt-019",

    program: "XCEL",

    divisions: [
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT"],

    category: "VAULT_RULES",
    subcategory: "ALTERNATIVE_SPRINGBOARD",

    difficulty: "FOUNDATION",

    format: "TRUE_FALSE",
    eyebrow: "TRUE OR FALSE",

    question:
      "Platinum, Diamond and Sapphire gymnasts may use an alternative springboard if they accept a lower Start Value.",

    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" }
    ],

    correctOptionId: "B",

    explanation:
      "The alternative springboard is not allowed for Platinum, Diamond or Sapphire. If used, the vault is VOID.",

    takeaway:
      "PLATINUM–SAPPHIRE: ALTERNATIVE SPRINGBOARD = VOID.",

    ruleKey:
      "xcel.vt.ps.alternative_springboard_void",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault Rules",
      pageLabel: "VAULT - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "platinum",
      "diamond",
      "sapphire",
      "vault",
      "springboard",
      "void"
    ]
  },

  // ----------------------------------------------------------
  // 020
  // ----------------------------------------------------------

  {
    id: "xcel-vt-020",

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

    category: "EXECUTION",
    subcategory: "SPOTTING",

    difficulty: "FOUNDATION",

    format: "HOW_MUCH",
    eyebrow: "COACH SPOT",

    question:
      "How much is deducted for coach assistance on the landing of an Xcel vault?",

    options: [
      { id: "A", text: "0.10" },
      { id: "B", text: "0.30" },
      { id: "C", text: "0.50" },
      { id: "D", text: "1.00" }
    ],

    correctOptionId: "C",

    explanation:
      "Coach assistance on the landing receives a 0.50 spotting deduction.",

    takeaway:
      "SPOT ON LANDING = 0.50.",

    ruleKey:
      "xcel.vt.spot_on_landing",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault Rules — Spotting",
      pageLabel: "VAULT - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "vault",
      "spotting",
      "landing"
    ]
  },

  // ----------------------------------------------------------
  // 021
  // ----------------------------------------------------------

  {
    id: "xcel-vt-021",

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

    category: "EXECUTION",
    subcategory: "SPOTTING",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "COACH SPOT",

    question:
      "How much is deducted for coach assistance during a phase of an Xcel vault other than the landing?",

    options: [
      { id: "A", text: "0.30" },
      { id: "B", text: "0.50" },
      { id: "C", text: "1.00" },
      { id: "D", text: "1.50" }
    ],

    correctOptionId: "C",

    explanation:
      "Coach assistance during another phase of the vault receives a 1.00 spotting deduction. The maximum total spotting deduction is 1.50.",

    takeaway:
      "SPOT DURING THE VAULT = 1.00.",

    ruleKey:
      "xcel.vt.spot_during_vault",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault Rules — Spotting",
      pageLabel: "VAULT - 1"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "vault",
      "spotting"
    ]
  },

  // ----------------------------------------------------------
  // 022
  // ----------------------------------------------------------

  {
    id: "xcel-vt-022",

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

    category: "EXECUTION",
    subcategory: "MAX_EXECUTION",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "HOW MUCH?",

    question:
      "What is the maximum execution deduction on an Xcel vault?",

    options: [
      { id: "A", text: "2.00" },
      { id: "B", text: "3.00" },
      { id: "C", text: "4.00" },
      { id: "D", text: "5.00" }
    ],

    correctOptionId: "C",

    explanation:
      "The maximum execution deduction is 4.00. For Bronze Vault Option 1, that maximum applies to Parts 1A and 1B combined.",

    takeaway:
      "VAULT EXECUTION MAX = 4.00.",

    ruleKey:
      "xcel.vt.execution.maximum",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — General Information",
      pageLabel: "VAULT - 8"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "vault",
      "execution",
      "maximum"
    ]
  },

  // ----------------------------------------------------------
  // 023
  // ----------------------------------------------------------

  {
    id: "xcel-vt-023",

    program: "XCEL",

    divisions: [
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT"],

    category: "LANDING",
    subcategory: "FEET_FIRST",

    difficulty: "CODE_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "FEET FIRST?",

    question:
      "For Gold, Platinum, Diamond or Sapphire, what happens if a vault does not land on any part of the bottom of the feet first?",

    options: [
      { id: "A", text: "0.30 deduction" },
      { id: "B", text: "0.50 fall deduction only" },
      { id: "C", text: "1.00 deduction" },
      { id: "D", text: "The vault is VOID" }
    ],

    correctOptionId: "D",

    explanation:
      "Gold, Platinum, Diamond and Sapphire vaults must land on the bottom of the feet first. Failure to do so results in a VOID vault. Silver has a specific exception and receives a 2.00 deduction instead.",

    takeaway:
      "FEET FIRST OR THE VAULT MAY BE VOID.",

    ruleKey:
      "xcel.vt.landing.feet_first",

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

    tags: [
      "xcel",
      "vault",
      "landing",
      "feet-first",
      "void"
    ]
  },

  // ----------------------------------------------------------
  // 024
  // ----------------------------------------------------------

  {
    id: "xcel-vt-024",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["VT"],

    category: "LANDING",
    subcategory: "SILVER_NOT_FEET_FIRST",

    difficulty: "CODE_SMART",

    format: "HOW_MUCH",
    eyebrow: "SILVER EXCEPTION",

    question:
      "A Silver vault fails to land on the feet first. What deduction applies under the Silver exception?",

    options: [
      { id: "A", text: "0.50" },
      { id: "B", text: "1.00" },
      { id: "C", text: "2.00, including the fall" },
      { id: "D", text: "Automatic VOID" }
    ],

    correctOptionId: "C",

    explanation:
      "Silver is the exception to the general feet-first VOID rule. A Silver vault that does not land feet first receives a 2.00 deduction, which includes 0.50 for the fall.",

    takeaway:
      "SILVER EXCEPTION: 2.00, INCLUDING THE FALL.",

    ruleKey:
      "xcel.vt.silver.not_feet_first",

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

    tags: [
      "xcel",
      "silver",
      "vault",
      "landing",
      "feet-first"
    ]
  },

  // ----------------------------------------------------------
  // 025
  // ----------------------------------------------------------

  {
    id: "xcel-vt-025",

    program: "XCEL",

    divisions: [
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT"],

    category: "COMPETITION_RULES",
    subcategory: "FALL_TIME",

    difficulty: "COMPETITION_SMART",

    format: "HOW_MUCH",
    eyebrow: "ON THE CLOCK",

    question:
      "After a fall on the first Xcel vault, how much fall time does the gymnast have before she must salute for the second vault?",

    options: [
      { id: "A", text: "30 seconds" },
      { id: "B", text: "45 seconds" },
      { id: "C", text: "60 seconds" },
      { id: "D", text: "90 seconds" }
    ],

    correctOptionId: "B",

    explanation:
      "Vault fall time is 45 seconds. The clock starts when the gymnast is standing on her feet after the fall and stops when she salutes for the second vault. If time expires, the second vault is not allowed.",

    takeaway:
      "45 SECONDS TO RESET AND SALUTE.",

    ruleKey:
      "xcel.vt.fall_time",

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

    tags: [
      "xcel",
      "vault",
      "timing",
      "fall-time"
    ]
  }

];
