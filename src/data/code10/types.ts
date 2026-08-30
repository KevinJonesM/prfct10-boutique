export type Program = "XCEL" | "COMPULSORY" | "OPTIONAL";
export type Division = "BRONZE" | "SILVER" | "GOLD" | "PLATINUM" | "DIAMOND" | "SAPPHIRE";
export type VerificationStatus = "DEV_ONLY" | "VERIFIED" | "REVIEW_NEEDED" | "RETIRED";
export type Difficulty = "FOUNDATION" | "COMPETITION_SMART" | "CODE_SMART";
export type Apparatus = "VAULT" | "BARS" | "BEAM" | "FLOOR" | "GENERAL" | "VT" | "UB" | "BB" | "FX";
export type QuestionFormat = "HOW_MUCH" | "TRUE_FALSE" | "TRUE_OR_FALSE" | "MULTIPLE_CHOICE" | "WHICH_COSTS_MORE" | "WHAT_HAPPENS" | "MYTH_OR_RULE" | "WHATS_THE_CALL";
export interface PRFCT10Question {
  id: string;
  program: Program;
  divisions: string[];
  apparatus: Apparatus | Apparatus[];
  category: string;
  subcategory: string;
  difficulty: Difficulty;
  format: QuestionFormat;
  eyebrow: string;
  question: string;
  question_en?: string;
  question_es?: string;
  options: { id: string; text: string; text_en?: string; text_es?: string }[];
  correctOptionId: string;
  explanation: string;
  explanation_en?: string;
  explanation_es?: string;
  takeaway: string;
  takeaway_en?: string;
  takeaway_es?: string;
  ruleKey: string;
  source: { documentTitle: string; page?: string | number; revision?: string; url?: string; authority?: string; documentId?: string; ruleCycle?: string; section?: string; pageLabel?: string };
  verification: { status: VerificationStatus; verifiedOn?: string; verifiedBy?: string };
  tags: string[];
}
export interface ChallengeConfig { program: Program; division: string; category: string; }
