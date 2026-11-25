// The Robot Vacuum's Best Excuse — one excuse, written to /output/entry.txt.
// The excuse is the whole entry: a single line, at most 140 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "My cliff sensor mistook the rug fringe for a canyon, so I braked. I am a dustpan with anxiety, not a mountain goat.";

// The gate only accepts 1 to 140 characters of UTF-8 text, so check first.
if (excuse.length < 1 || excuse.length > 140) {
  throw new Error(`excuse must be 1-140 characters, got ${excuse.length}`);
}
if (excuse.includes("\n")) {
  throw new Error("excuse must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse + "\n", "utf8");
console.log(excuse);
