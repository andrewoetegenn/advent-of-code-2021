import { readFileSync } from "fs";

const data = readFileSync("./day-one/input.txt", "utf8");
const entries = data.split("\n").map((e) => parseInt(e));

let increases = 0;

for (let i = 0; i < entries.length; i++) {
  if (i === 0) continue;

  if (entries[i] > entries[i - 1]) {
    increases++;
  }
}

console.log(increases);
