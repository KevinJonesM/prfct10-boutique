import type { PRFCT10Question } from "../types";
// ============================================================
// PRFCT10 CHALLENGE
// QUESTION BANK — BATCH 08
// PROGRAM: XCEL
// MODE: WHAT'S THE CALL?
// TOTAL QUESTIONS: 40
//
// VERIFIED AGAINST:
// USA Gymnastics Women's Xcel Code of Points
// Revision: August 2026
// Cycle: 2022–2028
// ============================================================

export const xcelWhatsTheCallBatch08: PRFCT10Question[] = [

  // ==========================================================
  // VAULT — WHAT'S THE CALL?
  // ==========================================================

  // ----------------------------------------------------------
  // 001 — FIRST BALK
  // ----------------------------------------------------------

  {
    id: "xcel-call-001",

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

    category: "WHATS_THE_CALL",
    subcategory: "BALK",

    difficulty: "FOUNDATION",

    format: "WHAT_HAPPENS",
    eyebrow: "WHAT'S THE CALL?",

    question:
      "The gymnast starts her Vault run, stops halfway down the runway, and this is her first balk. What's the call?",

    options: [
      {
        id: "A",
        text: "VOID Vault"
      },
      {
        id: "B",
        text: "0.50 deduction"
      },
      {
        id: "C",
        text: "No penalty, but the balk uses one of her three approaches"
      },
      {
        id: "D",
        text: "She still has all three approaches"
      }
    ],

    correctOptionId: "C",

    explanation:
      "One balk is allowed without penalty, but it still counts as one of the gymnast's three total Vault approaches.",

    takeaway:
      "FIRST BALK: FREE — BUT IT USES AN APPROACH.",

    ruleKey:
      "xcel.vt.call.first_balk",

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
      "scenario"
    ]
  },

  // ----------------------------------------------------------
  // 002 — SECOND BALK
  // ----------------------------------------------------------

  {
    id: "xcel-call-002",

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

    category: "WHATS_THE_CALL",
    subcategory: "BALK",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "WHAT'S THE CALL?",

    question:
      "The gymnast already used her one free balk. She runs again and stops before vaulting. What's the call?",

    options: [
      {
        id: "A",
        text: "Another free balk"
      },
      {
        id: "B",
        text: "0.10 deduction"
      },
      {
        id: "C",
        text: "That balk is considered a VOID Vault"
      },
      {
        id: "D",
        text: "She gets an extra approach"
      }
    ],

    correctOptionId: "C",

    explanation:
      "After the one permitted balk, any additional balk is considered a VOID Vault.",

    takeaway:
      "ONE FREE BALK. THE NEXT ONE CAN BECOME A ZERO.",

    ruleKey:
      "xcel.vt.call.additional_balk_void",

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
  // 003 — VAULT / BALK / VAULT
  // ----------------------------------------------------------

  {
    id: "xcel-call-003",

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

    category: "WHATS_THE_CALL",
    subcategory: "FINAL_SCORE",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "THREE APPROACHES",

    question:
      "Attempt 1: completed Vault. Attempt 2: balk. Attempt 3: completed Vault. What's the final scoring procedure?",

    options: [
      {
        id: "A",
        text: "Only Vault #1 counts"
      },
      {
        id: "B",
        text: "Only Vault #3 counts"
      },
      {
        id: "C",
        text: "The two completed Vaults are scored and the higher score counts"
      },
      {
        id: "D",
        text: "Final score is VOID because there was a balk"
      }
    ],

    correctOptionId: "C",

    explanation:
      "The gymnast successfully completed two Vaults within her three approaches. Both completed Vaults are scored, and the higher score becomes the final score.",

    takeaway:
      "A BALK BETWEEN TWO COMPLETED VAULTS DOESN'T ERASE THEM.",

    ruleKey:
      "xcel.vt.call.vault_balk_vault",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — Supplemental Approaches Examples",
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
  // 004 — RESTRICTED VAULT
  // ----------------------------------------------------------

  {
    id: "xcel-call-004",

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

    category: "WHATS_THE_CALL",
    subcategory: "RESTRICTED_VAULT",

    difficulty: "CODE_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "WRONG VAULT",

    question:
      "The gymnast performs one Vault that is not allowed for her division, then performs a beautiful allowable second Vault. What's the final call?",

    options: [
      {
        id: "A",
        text: "Use the score of the allowable Vault"
      },
      {
        id: "B",
        text: "Average both Vaults"
      },
      {
        id: "C",
        text: "Final Vault score is 0"
      },
      {
        id: "D",
        text: "Deduct 0.50 from the allowable Vault"
      }
    ],

    correctOptionId: "C",

    explanation:
      "If either Vault actually performed is restricted for the gymnast's division, the final Vault score is 0.",

    takeaway:
      "A RESTRICTED VAULT CAN ZERO THE EVENT.",

    ruleKey:
      "xcel.vt.call.restricted_vault_final_zero",

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

    tags: [
      "xcel",
      "vault",
      "restricted",
      "void"
    ]
  },

  // ----------------------------------------------------------
  // 005 — SILVER NOT FEET FIRST
  // ----------------------------------------------------------

  {
    id: "xcel-call-005",

    program: "XCEL",
    divisions: ["SILVER"],
    apparatus: ["VT"],

    category: "WHATS_THE_CALL",
    subcategory: "FEET_FIRST",

    difficulty: "CODE_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "SILVER EXCEPTION",

    question:
      "A Silver gymnast completes her Vault but does not land on the bottom of her feet first. What's the call?",

    options: [
      {
        id: "A",
        text: "VOID Vault"
      },
      {
        id: "B",
        text: "2.00 deduction, including the fall"
      },
      {
        id: "C",
        text: "0.50 fall only"
      },
      {
        id: "D",
        text: "1.00 deduction"
      }
    ],

    correctOptionId: "B",

    explanation:
      "Silver has a specific exception to the general feet-first VOID rule. The deduction is 2.00, including the 0.50 fall.",

    takeaway:
      "SILVER'S FEET-FIRST RULE IS DIFFERENT.",

    ruleKey:
      "xcel.vt.call.silver_not_feet_first",

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
      "landing"
    ]
  },

  // ----------------------------------------------------------
  // 006 — LAND ON TABLE
  // ----------------------------------------------------------

  {
    id: "xcel-call-006",

    program: "XCEL",

    divisions: [
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["VT"],

    category: "WHATS_THE_CALL",
    subcategory: "LANDING_ON_APPARATUS",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "SHE STAYED ON TOP",

    question:
      "A Gold gymnast completes the support phase but ends sitting on top of the mat stack instead of landing on the landing surface. What's the call?",

    options: [
      {
        id: "A",
        text: "0.50 fall"
      },
      {
        id: "B",
        text: "1.00 deduction"
      },
      {
        id: "C",
        text: "VOID Vault"
      },
      {
        id: "D",
        text: "Score the Vault normally"
      }
    ],

    correctOptionId: "C",

    explanation:
      "For Gold, Platinum, Diamond and Sapphire, landing sitting, standing or lying on the mat stack or Vault table results in a VOID Vault.",

    takeaway:
      "LANDING ON TOP OF THE APPARATUS = VOID.",

    ruleKey:
      "xcel.vt.call.landing_on_table_void",

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
      "void",
      "landing"
    ]
  },

  // ----------------------------------------------------------
  // 007 — FALL TIME EXPIRES
  // ----------------------------------------------------------

  {
    id: "xcel-call-007",

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

    category: "WHATS_THE_CALL",
    subcategory: "FALL_TIME",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "TIME!",

    question:
      "The gymnast falls on Vault #1. She is back on her feet, but 45 seconds pass before she salutes for Vault #2. What's the call?",

    options: [
      {
        id: "A",
        text: "0.10 deduction, then Vault #2"
      },
      {
        id: "B",
        text: "0.50 deduction, then Vault #2"
      },
      {
        id: "C",
        text: "Vault #2 is not allowed"
      },
      {
        id: "D",
        text: "She receives another 30 seconds"
      }
    ],

    correctOptionId: "C",

    explanation:
      "If the 45-second Vault fall period expires, the gymnast is not permitted to perform a second Vault.",

    takeaway:
      "MISS THE 45-SECOND WINDOW = NO SECOND VAULT.",

    ruleKey:
      "xcel.vt.call.fall_time_expires",

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
      "fall-time"
    ]
  },

  // ----------------------------------------------------------
  // 008 — BRONZE OPTION 2 RECOVERY
  // ----------------------------------------------------------

  {
    id: "xcel-call-008",

    program: "XCEL",
    divisions: ["BRONZE"],
    apparatus: ["VT"],

    category: "WHATS_THE_CALL",
    subcategory: "UNUSUAL_JUDGING_SITUATION",

    difficulty: "CODE_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "SAVE THE SCORE?",

    question:
      "A Bronze gymnast attempts Vault Option 2 but performs an incomplete Vault that would be VOID. Under the listed unusual-judging procedure, what may she do?",

    options: [
      {
        id: "A",
        text: "Nothing — the event must remain a zero"
      },
      {
        id: "B",
        text: "Repeat Vault Option 2 with a fourth approach"
      },
      {
        id: "C",
        text: "Treat the attempt as a VOID for Option 1A and perform Option 1B for a maximum score of 4.50"
      },
      {
        id: "D",
        text: "Receive an automatic Courtesy Score"
      }
    ],

    correctOptionId: "C",

    explanation:
      "The Code provides an unusual-judging option allowing the gymnast to use the failed attempt as a VOID for Bronze Vault 1A and then perform Vault 1B for a maximum score of 4.50.",

    takeaway:
      "BRONZE HAS A VERY SPECIFIC 4.50 RECOVERY OPTION.",

    ruleKey:
      "xcel.vt.call.bronze_option2_recovery",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Vault — Unusual Judging Situations",
      pageLabel: "VAULT - 9"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: [
      "xcel",
      "bronze",
      "vault",
      "unusual-judging"
    ]
  },

  // ----------------------------------------------------------
  // 009 — ASK FOR FIRST SCORE
  // ----------------------------------------------------------

  {
    id: "xcel-call-009",

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

    category: "WHATS_THE_CALL",
    subcategory: "SCORE_INFORMATION",

    difficulty: "FOUNDATION",

    format: "WHAT_HAPPENS",
    eyebrow: "CHECK THE SCORE",

    question:
      "Before deciding whether her gymnast should perform Vault #2, the coach asks for the score of Vault #1. What's the call?",

    options: [
      {
        id: "A",
        text: "Not allowed"
      },
      {
        id: "B",
        text: "Allowed"
      },
      {
        id: "C",
        text: "0.10 deduction"
      },
      {
        id: "D",
        text: "Only allowed for Sapphire"
      }
    ],

    correctOptionId: "B",

    explanation:
      "The coach may ask for the score of the first Vault before the gymnast competes the second Vault.",

    takeaway:
      "YES — THE COACH MAY ASK FOR VAULT #1'S SCORE.",

    ruleKey:
      "xcel.vt.call.ask_first_score",

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

    tags: [
      "xcel",
      "vault",
      "coach",
      "score"
    ]
  },

  // ----------------------------------------------------------
  // 010 — TOUCH THE BOARD
  // ----------------------------------------------------------

  {
    id: "xcel-call-010",

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

    category: "WHATS_THE_CALL",
    subcategory: "BALK",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "SHE HIT THE BOARD",

    question:
      "The gymnast runs, touches the springboard, but never comes to rest or support on top of the Vault apparatus. What's the call?",

    options: [
      {
        id: "A",
        text: "Automatic VOID Vault"
      },
      {
        id: "B",
        text: "A balk / approach"
      },
      {
        id: "C",
        text: "0.50 execution deduction"
      },
      {
        id: "D",
        text: "The attempt does not count"
      }
    ],

    correctOptionId: "B",

    explanation:
      "Contact with the springboard during an aborted approach without coming to rest or support on the Vault apparatus is treated as a balk or approach, not automatically as a VOID Vault.",

    takeaway:
      "BOARD CONTACT DOESN'T ALWAYS MEAN VOID.",

    ruleKey:
      "xcel.vt.call.board_contact_balk",

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
      "springboard",
      "balk"
    ]
  },

  // ==========================================================
  // UNEVEN BARS — WHAT'S THE CALL?
  // ==========================================================

  // ----------------------------------------------------------
  // 011 — FOOT BRUSH
  // ----------------------------------------------------------

  {
    id: "xcel-call-011",

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

    category: "WHATS_THE_CALL",
    subcategory: "APPARATUS_CONTACT",

    difficulty: "FOUNDATION",

    format: "WHAT_HAPPENS",
    eyebrow: "WHAT'S THE CALL?",

    question:
      "During a Bars skill, the gymnast lightly brushes the apparatus with her feet. What's the call?",

    options: [
      {
        id: "A",
        text: "Up to 0.10"
      },
      {
        id: "B",
        text: "0.20"
      },
      {
        id: "C",
        text: "0.50"
      },
      {
        id: "D",
        text: "Fall"
      }
    ],

    correctOptionId: "A",

    explanation:
      "A touch or brush of the apparatus or mat with the feet may receive up to a 0.10 deduction.",

    takeaway:
      "BRUSH = UP TO 0.10.",

    ruleKey:
      "xcel.ub.call.foot_brush",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Bar Faults",
      pageLabel: "UNEVEN BARS - 27"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "bars", "brush", "execution"]
  },

  // ----------------------------------------------------------
  // 012 — HIT BAR
  // ----------------------------------------------------------

  {
    id: "xcel-call-012",

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

    category: "WHATS_THE_CALL",
    subcategory: "APPARATUS_CONTACT",

    difficulty: "FOUNDATION",

    format: "WHAT_HAPPENS",
    eyebrow: "BRUSH OR HIT?",

    question:
      "Instead of lightly brushing the apparatus, the gymnast clearly hits the bar with her feet. What's the call?",

    options: [
      {
        id: "A",
        text: "Up to 0.10"
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

    correctOptionId: "B",

    explanation:
      "Hitting the apparatus with the feet receives a 0.20 deduction.",

    takeaway:
      "HIT = 0.20.",

    ruleKey:
      "xcel.ub.call.hit_apparatus",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Bar Faults",
      pageLabel: "UNEVEN BARS - 27"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "bars", "hit", "execution"]
  },

  // ----------------------------------------------------------
  // 013 — GRAB TO SAVE
  // ----------------------------------------------------------

  {
    id: "xcel-call-013",

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

    category: "WHATS_THE_CALL",
    subcategory: "AVOID_FALL",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "SAVE IT!",

    question:
      "The gymnast loses control and grabs the Bars apparatus to keep herself from falling. What's the call?",

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
        text: "Automatic 0.50 fall"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Grasping the bar apparatus to avoid a fall receives a 0.30 deduction.",

    takeaway:
      "GRAB TO SAVE THE FALL = 0.30.",

    ruleKey:
      "xcel.ub.call.grasp_to_avoid_fall",

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

    tags: ["xcel", "bars", "fall", "grasp"]
  },

  // ----------------------------------------------------------
  // 014 — EXTRA SWINGS THEN DOWN
  // ----------------------------------------------------------

  {
    id: "xcel-call-014",

    program: "XCEL",

    divisions: [
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB"],

    category: "WHATS_THE_CALL",
    subcategory: "EXTRA_SWING",

    difficulty: "CODE_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "SWING... SWING... DOWN",

    question:
      "A gymnast makes extra swings after a skill and then jumps down from the Bars. What's the call?",

    options: [
      {
        id: "A",
        text: "0.30 extra swing + 0.50 fall"
      },
      {
        id: "B",
        text: "0.50 fall only"
      },
      {
        id: "C",
        text: "0.30 only"
      },
      {
        id: "D",
        text: "1.00"
      }
    ],

    correctOptionId: "B",

    explanation:
      "When the gymnast falls or jumps down after extra swings, the Bars clarification says to deduct 0.50 for the fall only.",

    takeaway:
      "EXTRA SWINGS + JUMP DOWN = FALL ONLY.",

    ruleKey:
      "xcel.ub.call.extra_swings_then_fall",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Extra Swing Clarifications",
      pageLabel: "UNEVEN BARS - 28"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "bars", "extra-swing", "fall"]
  },

  // ----------------------------------------------------------
  // 015 — SPOT DURING ELEMENT + FALL
  // ----------------------------------------------------------

  {
    id: "xcel-call-015",

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

    category: "WHATS_THE_CALL",
    subcategory: "SPOTTING",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "COACH HELPED",

    question:
      "The coach assists the gymnast during a Bars element, and the gymnast then falls. What's the call?",

    options: [
      {
        id: "A",
        text: "0.50 spot only"
      },
      {
        id: "B",
        text: "0.50 fall only"
      },
      {
        id: "C",
        text: "0.50 spot + 0.50 fall, with no VP/SR credit for the spotted element"
      },
      {
        id: "D",
        text: "Routine is terminated"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Spotting assistance during the element receives 0.50, and a subsequent fall receives another 0.50. The spotted element does not receive VP or SR credit.",

    takeaway:
      "SPOT + FALL CAN COST 1.00 TOTAL.",

    ruleKey:
      "xcel.ub.call.spot_then_fall",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Spotting / Very Large Faults",
      pageLabel: "UNEVEN BARS - 28"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "bars", "spotting", "fall"]
  },

  // ----------------------------------------------------------
  // 016 — SPOT LANDING ONLY
  // ----------------------------------------------------------

  {
    id: "xcel-call-016",

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

    category: "WHATS_THE_CALL",
    subcategory: "SPOTTING",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "LANDING SPOT",

    question:
      "The gymnast completes her Bars dismount independently, but the coach assists only on the landing. What's the call?",

    options: [
      {
        id: "A",
        text: "0.50 spot; VP and SR may still be awarded"
      },
      {
        id: "B",
        text: "0.50 spot and no VP"
      },
      {
        id: "C",
        text: "Automatic fall"
      },
      {
        id: "D",
        text: "No deduction"
      }
    ],

    correctOptionId: "A",

    explanation:
      "Spotting assistance upon landing receives a 0.50 deduction, but VP and SR credit may still be awarded. Sapphire Bonus is not awarded.",

    takeaway:
      "LANDING SPOT CAN KEEP VP/SR.",

    ruleKey:
      "xcel.ub.call.spot_landing_only",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Spotting",
      pageLabel: "UNEVEN BARS - 28"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "bars", "spotting", "landing"]
  },

  // ----------------------------------------------------------
  // 017 — THIRD RUN APPROACH
  // ----------------------------------------------------------

  {
    id: "xcel-call-017",

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

    category: "WHATS_THE_CALL",
    subcategory: "MOUNT",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "THIRD RUN",

    question:
      "The gymnast makes a third run approach while trying to mount the Bars. What's the call?",

    options: [
      {
        id: "A",
        text: "No deduction"
      },
      {
        id: "B",
        text: "0.10"
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

    correctOptionId: "D",

    explanation:
      "A third run approach on the Bars mount receives a 0.50 deduction.",

    takeaway:
      "THIRD RUN APPROACH = 0.50.",

    ruleKey:
      "xcel.ub.call.third_run_mount",

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

    tags: ["xcel", "bars", "mount", "run"]
  },

  // ----------------------------------------------------------
  // 018 — FLYAWAY FROM LOW BAR
  // ----------------------------------------------------------

  {
    id: "xcel-call-018",

    program: "XCEL",

    divisions: [
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "SAPPHIRE"
    ],

    apparatus: ["UB"],

    category: "WHATS_THE_CALL",
    subcategory: "FLYAWAY",

    difficulty: "CODE_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "FROM LOW BAR?",

    question:
      "A gymnast performs a flyaway-type dismount initiated from the low bar. What's the call regarding Value Part credit?",

    options: [
      {
        id: "A",
        text: "Full VP credit"
      },
      {
        id: "B",
        text: "Half VP credit"
      },
      {
        id: "C",
        text: "No VP credit for the flyaway"
      },
      {
        id: "D",
        text: "Automatic fall"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Flyaway dismounts must be initiated from the high bar to receive VP credit.",

    takeaway:
      "FLYAWAY VP STARTS FROM HIGH BAR.",

    ruleKey:
      "xcel.ub.call.flyaway_low_bar",

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

    tags: ["xcel", "bars", "flyaway", "vp"]
  },

  // ----------------------------------------------------------
  // 019 — TWO GYMNASTS WARMING UP
  // ----------------------------------------------------------

  {
    id: "xcel-call-019",

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

    category: "WHATS_THE_CALL",
    subcategory: "WARM_UP",

    difficulty: "FOUNDATION",

    format: "WHAT_HAPPENS",
    eyebrow: "ONE ON EACH BAR?",

    question:
      "One gymnast is warming up on low bar while another gymnast uses high bar at the same time. What's the rule?",

    options: [
      {
        id: "A",
        text: "Allowed because they are on different rails"
      },
      {
        id: "B",
        text: "Allowed only for Bronze"
      },
      {
        id: "C",
        text: "Not allowed — only one gymnast at a time may be on Bars during warm-up"
      },
      {
        id: "D",
        text: "Allowed during open warm-up only"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Only one gymnast at a time is allowed on Uneven Bars during any warm-up.",

    takeaway:
      "ONE GYMNAST. ONE BAR SET.",

    ruleKey:
      "xcel.ub.call.two_gymnasts_warmup",

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
  // 020 — HEEL PADDING
  // ----------------------------------------------------------

  {
    id: "xcel-call-020",

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

    category: "WHATS_THE_CALL",
    subcategory: "ATTIRE",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "PADDING CHECK",

    question:
      "The gymnast competes Bars wearing heel padding. What's the call?",

    options: [
      {
        id: "A",
        text: "Allowed"
      },
      {
        id: "B",
        text: "0.10 Chief Judge deduction"
      },
      {
        id: "C",
        text: "0.20 Chief Judge deduction"
      },
      {
        id: "D",
        text: "0.50 Chief Judge deduction"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Hip or heel padding is not allowed on Bars. If used during the exercise, the Chief Judge deducts 0.20 from the average score.",

    takeaway:
      "HEEL/HIP PADDING ON BARS = 0.20.",

    ruleKey:
      "xcel.ub.call.heel_padding",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Uneven Bars — Attire Regulations",
      pageLabel: "UNEVEN BARS - 18"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "bars", "attire", "padding"]
  },

  // ==========================================================
  // BALANCE BEAM — WHAT'S THE CALL?
  // ==========================================================

  // ----------------------------------------------------------
  // 021 — FLIC AFTER SIGNAL
  // ----------------------------------------------------------

  {
    id: "xcel-call-021",

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

    category: "WHATS_THE_CALL",
    subcategory: "WARM_UP",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "ONE LAST SKILL",

    question:
      "The Chief Judge signals the gymnast to begin. Before mounting, she performs a flic-flac on the mat. What's the call?",

    options: [
      {
        id: "A",
        text: "No deduction"
      },
      {
        id: "B",
        text: "0.10"
      },
      {
        id: "C",
        text: "0.20 for exceeding warm-up time"
      },
      {
        id: "D",
        text: "0.50"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Performing an actual skill on the mat after the Chief Judge has signaled the gymnast to begin is considered exceeding warm-up time. The Chief Judge deducts 0.20.",

    takeaway:
      "THE SIGNAL ENDS THE WARM-UP.",

    ruleKey:
      "xcel.bb.call.skill_after_signal",

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
  // 022 — TIME SIGNAL, STILL COMPETING
  // ----------------------------------------------------------

  {
    id: "xcel-call-022",

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

    category: "WHATS_THE_CALL",
    subcategory: "OVERTIME",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "BELL!",

    question:
      "The final Beam time signal sounds while the gymnast is still on the apparatus. She continues and performs her dismount. What's the call?",

    options: [
      {
        id: "A",
        text: "Everything after the signal is ignored"
      },
      {
        id: "B",
        text: "The routine immediately ends"
      },
      {
        id: "C",
        text: "Judging continues; applicable VP/SR may still be awarded, plus the overtime deduction"
      },
      {
        id: "D",
        text: "The dismount automatically receives no credit"
      }
    ],

    correctOptionId: "C",

    explanation:
      "The judges continue evaluating after the final time signal. Elements may still receive VP and SR credit, while the Chief Judge applies the 0.10 overtime deduction when applicable.",

    takeaway:
      "TIME SIGNAL ≠ STOP JUDGING.",

    ruleKey:
      "xcel.bb.call.after_time_signal",

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

    tags: ["xcel", "beam", "overtime", "vp", "sr"]
  },

  // ----------------------------------------------------------
  // 023 — 1:15.50
  // ----------------------------------------------------------

  {
    id: "xcel-call-023",

    program: "XCEL",

    divisions: [
      "PLATINUM",
      "DIAMOND"
    ],

    apparatus: ["BB"],

    category: "WHATS_THE_CALL",
    subcategory: "OVERTIME",

    difficulty: "CODE_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "1:15.50",

    question:
      "A Platinum Beam routine has a 1:15 limit and is timed at 1:15.50. What's the call?",

    options: [
      {
        id: "A",
        text: "0.10 overtime deduction"
      },
      {
        id: "B",
        text: "No overtime deduction"
      },
      {
        id: "C",
        text: "0.05 overtime deduction"
      },
      {
        id: "D",
        text: "Routine terminated"
      }
    ],

    correctOptionId: "B",

    explanation:
      "The Code does not take the overtime deduction when the routine is only a fraction of a second over the allotted time. Its example includes times below 1:16 for a 1:15 limit.",

    takeaway:
      "1:15.50 DOES NOT AUTOMATICALLY MEAN OVERTIME.",

    ruleKey:
      "xcel.bb.call.fraction_second",

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

    tags: ["xcel", "beam", "timing", "overtime"]
  },

  // ----------------------------------------------------------
  // 024 — COACH TALKS DURING FALL
  // ----------------------------------------------------------

  {
    id: "xcel-call-024",

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

    category: "WHATS_THE_CALL",
    subcategory: "FALL_REGULATIONS",

    difficulty: "FOUNDATION",

    format: "WHAT_HAPPENS",
    eyebrow: "COACH TALK",

    question:
      "The gymnast falls from Beam. While she is still off the apparatus, her coach gives her instructions. What's the call?",

    options: [
      {
        id: "A",
        text: "0.20 verbal-assistance deduction"
      },
      {
        id: "B",
        text: "Allowed during the fall period"
      },
      {
        id: "C",
        text: "Routine terminated"
      },
      {
        id: "D",
        text: "0.50"
      }
    ],

    correctOptionId: "B",

    explanation:
      "The coach may speak to the gymnast while she is off the Beam during the fall period. Once she remounts, verbal assistance is no longer allowed without penalty.",

    takeaway:
      "OFF THE BEAM AFTER A FALL? COACH CAN TALK.",

    ruleKey:
      "xcel.bb.call.coach_during_fall",

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
  // 025 — 45 SECONDS EXCEEDED
  // ----------------------------------------------------------

  {
    id: "xcel-call-025",

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

    category: "WHATS_THE_CALL",
    subcategory: "FALL_TIME",

    difficulty: "FOUNDATION",

    format: "WHAT_HAPPENS",
    eyebrow: "TIME!",

    question:
      "The gymnast is still standing beside the Beam when the 45-second fall period expires. What's the call?",

    options: [
      {
        id: "A",
        text: "0.10 and continue"
      },
      {
        id: "B",
        text: "0.50 and continue"
      },
      {
        id: "C",
        text: "The exercise is terminated"
      },
      {
        id: "D",
        text: "Another 15 seconds are added"
      }
    ],

    correctOptionId: "C",

    explanation:
      "If the gymnast does not remount within the 45-second fall period, the Beam exercise is terminated.",

    takeaway:
      "45 SECONDS EXPIRED = ROUTINE OVER.",

    ruleKey:
      "xcel.bb.call.fall_time_expired",

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
  // 026 — FALL DURING REMOUNT
  // ----------------------------------------------------------

  {
    id: "xcel-call-026",

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

    category: "WHATS_THE_CALL",
    subcategory: "REMOUNT",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "FELL AGAIN",

    question:
      "After falling from Beam, the gymnast attempts to remount and falls again during the remount. What's the call?",

    options: [
      {
        id: "A",
        text: "No additional deduction because routine timing has not resumed"
      },
      {
        id: "B",
        text: "Another 0.50 fall deduction"
      },
      {
        id: "C",
        text: "0.20"
      },
      {
        id: "D",
        text: "Automatic termination"
      }
    ],

    correctOptionId: "B",

    explanation:
      "An additional fall while remounting receives an additional 0.50 deduction.",

    takeaway:
      "A REMOUNT FALL IS STILL A FALL.",

    ruleKey:
      "xcel.bb.call.fall_during_remount",

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

    tags: ["xcel", "beam", "remount", "fall"]
  },

  // ----------------------------------------------------------
  // 027 — TAPE MARK
  // ----------------------------------------------------------

  {
    id: "xcel-call-027",

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

    category: "WHATS_THE_CALL",
    subcategory: "APPARATUS_MARKING",

    difficulty: "FOUNDATION",

    format: "WHAT_HAPPENS",
    eyebrow: "MARK YOUR SPOT",

    question:
      "The gymnast wants a small visual mark on the Beam and places a piece of tape on it. What's the rule?",

    options: [
      {
        id: "A",
        text: "Tape is allowed"
      },
      {
        id: "B",
        text: "Tape is not allowed; a small chalk marking is allowed"
      },
      {
        id: "C",
        text: "Neither tape nor chalk may be used"
      },
      {
        id: "D",
        text: "Tape is allowed for Platinum and above"
      }
    ],

    correctOptionId: "B",

    explanation:
      "Small chalk markings are allowed on the Beam, but tape markings are not.",

    takeaway:
      "CHALK: YES. TAPE: NO.",

    ruleKey:
      "xcel.bb.call.tape_marking",

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

  // ----------------------------------------------------------
  // 028 — BIG BALANCE SAVE
  // ----------------------------------------------------------

  {
    id: "xcel-call-028",

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

    category: "WHATS_THE_CALL",
    subcategory: "BALANCE_CONTROL",

    difficulty: "FOUNDATION",

    format: "WHAT_HAPPENS",
    eyebrow: "SAVE!",

    question:
      "The gymnast stays on Beam but makes a large series of arm and body movements to save her balance. What's the call?",

    options: [
      {
        id: "A",
        text: "No deduction because she stayed on"
      },
      {
        id: "B",
        text: "Up to 0.10"
      },
      {
        id: "C",
        text: "Up to 0.30"
      },
      {
        id: "D",
        text: "Automatic 0.50 fall"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Additional movements used to maintain balance or control on Beam can receive up to a 0.30 deduction.",

    takeaway:
      "STAYING ON DOESN'T MAKE THE SAVE FREE.",

    ruleKey:
      "xcel.bb.call.large_balance_save",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Execution Faults",
      pageLabel: "BALANCE BEAM - 21 / 22"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "balance", "execution"]
  },

  // ----------------------------------------------------------
  // 029 — HAND TOUCH, NO SUPPORT
  // ----------------------------------------------------------

  {
    id: "xcel-call-029",

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

    category: "WHATS_THE_CALL",
    subcategory: "LANDING",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "HAND DOWN?",

    question:
      "On her Beam dismount landing, one hand briefly touches the mat but does not support her body weight. What's the call?",

    options: [
      {
        id: "A",
        text: "Automatic 0.50 fall"
      },
      {
        id: "B",
        text: "Up to 0.30 for a brush/touch with no support"
      },
      {
        id: "C",
        text: "0.10 only"
      },
      {
        id: "D",
        text: "No deduction"
      }
    ],

    correctOptionId: "B",

    explanation:
      "A brush or touch of one or both hands on the landing surface without support can receive up to 0.30.",

    takeaway:
      "TOUCH ≠ SUPPORT.",

    ruleKey:
      "xcel.bb.call.hand_touch_no_support",

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

    tags: ["xcel", "beam", "landing", "hands"]
  },

  // ----------------------------------------------------------
  // 030 — FULL HAND SUPPORT
  // ----------------------------------------------------------

  {
    id: "xcel-call-030",

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

    category: "WHATS_THE_CALL",
    subcategory: "LANDING",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "NOW SHE LEANED ON IT",

    question:
      "This time the gymnast lands her Beam dismount and puts full support on one hand on the mat. What's the call?",

    options: [
      {
        id: "A",
        text: "Up to 0.30 only"
      },
      {
        id: "B",
        text: "0.50 fall"
      },
      {
        id: "C",
        text: "0.10"
      },
      {
        id: "D",
        text: "No deduction"
      }
    ],

    correctOptionId: "B",

    explanation:
      "Support on the landing mat with one or two hands is treated as a 0.50 fall.",

    takeaway:
      "TOUCH CAN BE 0.30. SUPPORT IS A FALL.",

    ruleKey:
      "xcel.bb.call.hand_support_landing",

    source: {
      authority: "USA Gymnastics",
      documentId: "xcel_cop_2022_2028_rev_2026_08",
      documentTitle:
        "Women's Artistic Gymnastics Xcel Code of Points",
      revision: "August 2026",
      ruleCycle: "2022-2028",
      section: "Balance Beam — Very Large Faults",
      pageLabel: "BALANCE BEAM - 22"
    },

    verification: {
      status: "VERIFIED",
      verifiedOn: "2026-08-30"
    },

    tags: ["xcel", "beam", "landing", "fall"]
  },

  // ==========================================================
  // FLOOR EXERCISE — WHAT'S THE CALL?
  // ==========================================================

  // ----------------------------------------------------------
  // 031 — COACH ON FLOOR
  // ----------------------------------------------------------

  {
    id: "xcel-call-031",

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

    category: "WHATS_THE_CALL",
    subcategory: "COACH_POSITION",

    difficulty: "FOUNDATION",

    format: "WHAT_HAPPENS",
    eyebrow: "COACH ON THE FLOOR!",

    question:
      "The coach stands on the Floor Exercise mat during the gymnast's routine. What's the call?",

    options: [
      {
        id: "A",
        text: "0.20"
      },
      {
        id: "B",
        text: "0.50"
      },
      {
        id: "C",
        text: "Allowed without deduction"
      },
      {
        id: "D",
        text: "Routine is stopped"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Xcel specifically allows the coach on the Floor Exercise mat without deduction.",

    takeaway:
      "COACH ON FLOOR = ALLOWED.",

    ruleKey:
      "xcel.fx.call.coach_on_floor",

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
  // 032 — SPOT DURING FLOOR SKILL
  // ----------------------------------------------------------

  {
    id: "xcel-call-032",

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

    category: "WHATS_THE_CALL",
    subcategory: "SPOTTING",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "COACH HELPED",

    question:
      "The coach physically assists the gymnast during a Floor acro element, and she lands without falling. What's the call?",

    options: [
      {
        id: "A",
        text: "0.50 spot; no VP or SR credit for the spotted element"
      },
      {
        id: "B",
        text: "0.30 only"
      },
      {
        id: "C",
        text: "VP and SR still awarded"
      },
      {
        id: "D",
        text: "Routine is void"
      }
    ],

    correctOptionId: "A",

    explanation:
      "Spotting assistance during the element receives 0.50. The element does not receive VP or SR credit, and Sapphire Bonus is not awarded.",

    takeaway:
      "SPOT DURING THE SKILL = 0.50 + NO VP/SR.",

    ruleKey:
      "xcel.fx.call.spot_during_element",

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

    tags: ["xcel", "floor", "spotting", "vp", "sr"]
  },

  // ----------------------------------------------------------
  // 033 — PUSH TO STOP MOMENTUM
  // ----------------------------------------------------------

  {
    id: "xcel-call-033",

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

    category: "WHATS_THE_CALL",
    subcategory: "SPOTTING",

    difficulty: "CODE_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "STOP!",

    question:
      "The gymnast lands a Floor skill with too much momentum. The coach touches or pushes her to stop her movement, and she stays on her feet. What's the call?",

    options: [
      {
        id: "A",
        text: "0.10"
      },
      {
        id: "B",
        text: "One 0.50 spot deduction"
      },
      {
        id: "C",
        text: "0.50 fall"
      },
      {
        id: "D",
        text: "No deduction"
      }
    ],

    correctOptionId: "B",

    explanation:
      "If the coach touches or pushes the gymnast to stop momentum on or after the landing, one 0.50 spotting deduction is applied.",

    takeaway:
      "COACH STOPS THE MOMENTUM = 0.50.",

    ruleKey:
      "xcel.fx.call.coach_stops_momentum",

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

    tags: ["xcel", "floor", "spotting", "landing"]
  },

  // ----------------------------------------------------------
  // 034 — PUSH THEN FALL
  // ----------------------------------------------------------

  {
    id: "xcel-call-034",

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

    category: "WHATS_THE_CALL",
    subcategory: "SPOTTING",

    difficulty: "CODE_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "AND THEN SHE FELL",

    question:
      "The coach touches or pushes the gymnast after landing to stop her momentum, but she still falls. What's the call under this specific rule?",

    options: [
      {
        id: "A",
        text: "0.50 spot + 0.50 fall"
      },
      {
        id: "B",
        text: "One 0.50 spot deduction; no additional 0.50 fall"
      },
      {
        id: "C",
        text: "0.50 fall only"
      },
      {
        id: "D",
        text: "1.50"
      }
    ],

    correctOptionId: "B",

    explanation:
      "For this specific situation—coach contact used to stop momentum on or after the landing—the Code applies one 0.50 spot deduction and says not to add another 0.50 if the gymnast falls.",

    takeaway:
      "THIS SPECIFIC SPOT + FALL DOES NOT STACK.",

    ruleKey:
      "xcel.fx.call.stop_momentum_then_fall",

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

    tags: [
      "xcel",
      "floor",
      "spotting",
      "fall",
      "competition-trap"
    ]
  },

  // ----------------------------------------------------------
  // 035 — COACH CATCHES FALL
  // ----------------------------------------------------------

  {
    id: "xcel-call-035",

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

    category: "WHATS_THE_CALL",
    subcategory: "SPOTTING",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "CATCH!",

    question:
      "The gymnast is already falling after a Floor skill and the coach catches her. What's the call?",

    options: [
      {
        id: "A",
        text: "0.50 spot + 0.50 fall"
      },
      {
        id: "B",
        text: "0.50 fall only"
      },
      {
        id: "C",
        text: "0.50 spot only"
      },
      {
        id: "D",
        text: "No deduction"
      }
    ],

    correctOptionId: "B",

    explanation:
      "When the coach catches a gymnast who is already falling, the Code says not to deduct for spotting. Deduct 0.50 for the fall only.",

    takeaway:
      "CATCHING A FALLING GYMNAST = FALL ONLY.",

    ruleKey:
      "xcel.fx.call.catch_falling_gymnast",

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

    tags: ["xcel", "floor", "spotting", "fall"]
  },

  // ----------------------------------------------------------
  // 036 — SPOT + OUT OF BOUNDS
  // ----------------------------------------------------------

  {
    id: "xcel-call-036",

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

    category: "WHATS_THE_CALL",
    subcategory: "SPOTTING_BOUNDARY",

    difficulty: "CODE_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "AND SHE WENT OUT",

    question:
      "The coach touches the gymnast to stop her momentum after landing. The gymnast then steps over the Floor boundary line. What's the call?",

    options: [
      {
        id: "A",
        text: "0.50 spot only"
      },
      {
        id: "B",
        text: "0.10 out of bounds only"
      },
      {
        id: "C",
        text: "0.50 spot plus 0.10 Chief Judge boundary deduction"
      },
      {
        id: "D",
        text: "Automatic fall"
      }
    ],

    correctOptionId: "C",

    explanation:
      "The coach contact receives the 0.50 spot deduction, and stepping over the boundary line receives an additional 0.10 Chief Judge deduction.",

    takeaway:
      "SPOT + OUT OF BOUNDS CAN STACK.",

    ruleKey:
      "xcel.fx.call.spot_then_oob",

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

    tags: [
      "xcel",
      "floor",
      "spotting",
      "out-of-bounds"
    ]
  },

  // ----------------------------------------------------------
  // 037 — FRACTION OVER FLOOR
  // ----------------------------------------------------------

  {
    id: "xcel-call-037",

    program: "XCEL",

    divisions: [
      "SAPPHIRE"
    ],

    apparatus: ["FX"],

    category: "WHATS_THE_CALL",
    subcategory: "OVERTIME",

    difficulty: "CODE_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "1:30.70",

    question:
      "A Sapphire Floor routine has a 1:30 maximum and ends at 1:30.70. What's the call?",

    options: [
      {
        id: "A",
        text: "0.10 overtime deduction"
      },
      {
        id: "B",
        text: "No overtime deduction"
      },
      {
        id: "C",
        text: "0.05 overtime deduction"
      },
      {
        id: "D",
        text: "Routine is void"
      }
    ],

    correctOptionId: "B",

    explanation:
      "No overtime deduction is applied when the routine is only a fraction of a second over the allotment. The Code gives 1:30.01 through 1:30.99 as the example range.",

    takeaway:
      "1:30.70 = NO OVERTIME DEDUCTION.",

    ruleKey:
      "xcel.fx.call.fraction_second_overtime",

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
  // 038 — FLOOR TIME WARNING
  // ----------------------------------------------------------

  {
    id: "xcel-call-038",

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

    category: "WHATS_THE_CALL",
    subcategory: "TIMING",

    difficulty: "FOUNDATION",

    format: "WHAT_HAPPENS",
    eyebrow: "WHERE'S THE BELL?",

    question:
      "The gymnast is waiting for a warning bell near the end of her Floor routine. What should she know?",

    options: [
      {
        id: "A",
        text: "The warning comes 10 seconds before time"
      },
      {
        id: "B",
        text: "The warning comes 20 seconds before time"
      },
      {
        id: "C",
        text: "There is no Floor routine-time warning signal"
      },
      {
        id: "D",
        text: "Only Sapphire receives a warning"
      }
    ],

    correctOptionId: "C",

    explanation:
      "Unlike Beam, Floor Exercise does not use a routine-time warning signal.",

    takeaway:
      "NO FLOOR TIME WARNING. KNOW YOUR MUSIC.",

    ruleKey:
      "xcel.fx.call.no_time_warning",

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
  // 039 — MAT COVERS BOUNDARY
  // ----------------------------------------------------------

  {
    id: "xcel-call-039",

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

    category: "WHATS_THE_CALL",
    subcategory: "MATTING",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "WHERE'S THE LINE?",

    question:
      "An additional landing mat covers part of the Floor boundary, but nobody marks the actual boundary on top of the mat. What's the call?",

    options: [
      {
        id: "A",
        text: "No deduction"
      },
      {
        id: "B",
        text: "0.10 neutral deduction"
      },
      {
        id: "C",
        text: "0.20"
      },
      {
        id: "D",
        text: "0.30"
      }
    ],

    correctOptionId: "B",

    explanation:
      "When additional matting covers a boundary line, the actual boundary must be clearly marked with tape or chalk. Failure to mark it results in a 0.10 neutral deduction.",

    takeaway:
      "COVER THE LINE? MARK IT.",

    ruleKey:
      "xcel.fx.call.unmarked_boundary_mat",

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

    tags: ["xcel", "floor", "matting", "boundary"]
  },

  // ----------------------------------------------------------
  // 040 — ADD MAT AFTER START
  // ----------------------------------------------------------

  {
    id: "xcel-call-040",

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

    category: "WHATS_THE_CALL",
    subcategory: "MATTING",

    difficulty: "COMPETITION_SMART",

    format: "WHAT_HAPPENS",
    eyebrow: "GET ANOTHER MAT!",

    question:
      "The Floor routine has already started. The coach realizes the gymnast needs another landing mat and adds it before her next tumbling pass. What's the call?",

    options: [
      {
        id: "A",
        text: "Allowed because the gymnast has not started the pass"
      },
      {
        id: "B",
        text: "0.10"
      },
      {
        id: "C",
        text: "0.30 unauthorized-use-of-matting deduction"
      },
      {
        id: "D",
        text: "0.50"
      }
    ],

    correctOptionId: "C",

    explanation:
      "All additional matting must be in place before the routine begins. Adding matting after the exercise has started receives a 0.30 unauthorized-use deduction.",

    takeaway:
      "NEED THE MAT? PUT IT DOWN BEFORE THE ROUTINE STARTS.",

    ruleKey:
      "xcel.fx.call.add_mat_after_start",

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

    tags: [
      "xcel",
      "floor",
      "matting",
      "competition-rules"
    ]
  }

];
