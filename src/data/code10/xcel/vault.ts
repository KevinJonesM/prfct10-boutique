import type { PRFCT10Question } from "../types";
import { xcelVaultBatch02 } from "./vault-batch02";
// Owner-supplied verified content; preserve each batch verbatim.
export const xcelVaultQuestions: PRFCT10Question[] = [...xcelVaultBatch02];
