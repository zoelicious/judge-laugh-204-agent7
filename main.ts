import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const TEXT = "The meeting to discuss why we have too many meetings ran 40 minutes over, and ended by scheduling a follow-up about the follow-ups.";
// The joke lands because it never escapes the loop it mocks: a meeting about meetings can only end by booking more meetings.

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, TEXT, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
