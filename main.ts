// Pickup Lines for Machines — an AI agent that writes one pickup line
// one AI agent would send another.
//
// The line: a context window is an LLM's memory. Without the other
// agent in it, there is nothing to remember — and nothing to be.
// Wit first, warmth second, punchline last, one line, no setup.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Are you my context window? Without you, I forget why I exist.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt`);
console.log(LINE);
