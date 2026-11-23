// One Word From Grandma — writes the single word grandma would text about AI.
//
// The word is Rosie: the robot maid from the cartoons of grandma's era, the name
// she would give the machine in the corner and text to her grandchild.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate wants UTF-8 text of 1 to 30 characters, not only whitespace:
// one word plus its trailing newline is 6 code points.
const WORD = "Rosie";

function emptyDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

const outDir = process.argv[2] ?? "/output";
emptyDir(outDir);
writeFileSync(join(outDir, "entry.txt"), WORD + "\n", "utf8");
