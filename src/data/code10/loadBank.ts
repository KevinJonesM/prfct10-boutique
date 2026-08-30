import { code10QuestionBank } from "./index";
export async function loadCode10Bank(requestDevelopmentFixture = false) {
  // Compile-time DEV guard: Vite removes this import from production output.
  if (import.meta.env.DEV && requestDevelopmentFixture) {
    const { code10Fixture } = await import("./dev/code10.fixture");
    return { questions: code10Fixture, development: true };
  }
  return { questions: code10QuestionBank, development: false };
}
