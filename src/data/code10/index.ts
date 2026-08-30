import { xcelQuestionBank } from "./xcel/index";
import type { PRFCT10Question, Program } from "./types";

// No fixture imports here. This registry is the only production content source.
export const questionBankRegistry: Record<Program, PRFCT10Question[]> = {
  XCEL: xcelQuestionBank,
  COMPULSORY: [],
  OPTIONAL: []
};
export const code10QuestionBank = Object.values(questionBankRegistry).flat();
