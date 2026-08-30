# CODE 10 content handoff

Production route: /play/code-10

Development UI/engine fixture:
- Run npm run dev.
- Open /play/code-10?code10Dev=1.
- The query flag is explicit, not persisted, and ignored by a production build.
- Every screen and exported test result identifies development fixture content.
- 20 token-matching records contain NO gymnastics rules. Two complete MIX games
  can be played without immediate repetition. Narrow filters may correctly
  show insufficient content; fixtures are intentionally small.

## Import verified batches
1. Preserve the supplied IDs, wording, options, answer keys and QA metadata.
2. Add PRFCT10Question records to their corresponding xcel/*.ts module.
3. Use uppercase program/division/apparatus/difficulty/format values in types.ts.
   Apparatus supports one value or an array, including VT/UB/BB/FX aliases.
   The engine maps aliases for filtering only; source records remain unchanged.
4. Existing English text can use question/explanation/takeaway and option.text.
   Optional *_en / *_es fields are supported without automatic translation.
5. Keep source, verification and ruleKey internal. UI selects only display fields.
6. index.ts aggregates production modules. Never import dev/ there.
7. selectVerifiedChallenge ALWAYS requires verification.status === VERIFIED.
   There is no production fixture fallback.

Sampling:
- Exactly 10 unique valid records.
- Difficulty quotas 5 FOUNDATION / 3 COMPETITION_SMART / 2 CODE_SMART.
- MIX attempts 2 per apparatus + 1 GENERAL + 1 COMPETITION_SMART.
- If that matrix is unavailable, balance buckets while preserving difficulty.
- Prefer excluding the previous game's IDs. Reuse only if a valid fresh set
  cannot be composed. Previous IDs live in sessionStorage; storage failure
  does not prevent play.
- Single-category challenges need enough verified questions at all three tiers.
- Sparse/invalid banks return controlled insufficient-content states.

Scoring:
rawScore is the canonical number of correct answers.
getCode10Score derives incorrectAnswers, numeric gymnasticsScore,
three-decimal formattedScore, vintageDisplayScore and accuracy.
Live score uses only answered mistakes; unanswered questions are not mistakes.
Final score cannot be calculated before all ten answers are locked.

Presentation:
Code10VintageScoreboard supports compact/hero/story/print sizes. Original SVG
markup is shared with Story (1080x1920) and feed (1080x1350) PNG renderers.
No personal data, accounts, timers, sounds, new dependencies or source citations
are required by the UI.

Content received: owner-supplied core Batch 01, xcel-core-001 through 020,
marked VERIFIED by the owner on 2026-08-30. The batch text and its source
metadata are preserved verbatim in core-batch01.ts (not independently audited).
Owner-supplied Vault Batch 02 adds xcel-vt-001 through 025, marked VERIFIED
on 2026-08-30. Its text and metadata are preserved verbatim in vault-batch02.ts
(not independently audited).
Owner-supplied Bars Batch 03 adds xcel-ub-001 through 030, marked VERIFIED
on 2026-08-30. Its text and metadata are preserved verbatim in bars-batch03.ts
(not independently audited).
Owner-supplied Beam Batch 04 adds xcel-bb-001 through 030, marked VERIFIED
on 2026-08-30. Its text and metadata are preserved verbatim in beam-batch04.ts
(not independently audited).
Owner-supplied Floor Batch 05 adds xcel-fx-001 through 040, marked VERIFIED
on 2026-08-30. Its text and metadata are preserved verbatim in floor-batch05.ts
(not independently audited).
Owner-supplied Batch 06 adds 40 records: xcel-art-001 through 017 and
xcel-gen-018 through 040, in artistry-general-batch06.ts.
Owner-supplied Batch 07 adds 40 records: xcel-trap-001 through 040,
in myth-or-rule-batch07.ts.
Owner-supplied Batch 08 adds 40 records: xcel-call-001 through 040,
in whats-the-call-batch08.ts.
All three batches are marked VERIFIED by the owner on 2026-08-30; their
text and metadata are preserved verbatim, not independently audited.
Total production records: 265, with no duplicate IDs.

Current availability, preserving exact 5/3/2 difficulty quotas:
- MIX, VAULT, BARS, BEAM, FLOOR, MYTH_OR_RULE and WHATS_THE_CALL support all
  six divisions. Shared rules keep their supplied apparatus/division scope.
- ARTISTRY has only one eligible CODE_SMART record and remains insufficient.
- COMPETITION_SMART supports Sapphire. On the owner's designation of Batch 06
  for this mode, challengeMembership.js explicitly connects xcel-gen-018..040
  to the challenge without changing the supplied category or any source field.
  The 17 ARTISTRY records remain separate. The resent Batch 06 is identical;
  no duplicate questions were added, and the total remains 265.
- Other Competition Smart divisions have 4 FOUNDATION, 5 COMPETITION_SMART
  and 1 CODE_SMART record each: they need one more FOUNDATION and one more
  CODE_SMART. Sapphire has 7 / 9 / 7. Membership never bypasses verification,
  program, division, unique-ID validation or the exact 5/3/2 quotas.
- A difficulty of COMPETITION_SMART alone still does not imply membership in
  that challenge type. Existing category/format/tag matching also remains valid.
Do not change difficulties or extend a rule to another apparatus to fill gaps.

Verification:
npm test
npm run build
Search dist/assets for DEV-UI- and UI_FIXTURE: neither should be present.
