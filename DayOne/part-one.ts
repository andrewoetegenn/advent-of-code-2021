import * as fs from "fs";

const data = fs.readFileSync("./Day 1/input.txt", "utf8");
const entries = data.split("\n").map((e) => parseInt(e));

let increases = 0;

for (let i = 0; i < entries.length; i++) {
  if (i === 0) continue;

  if (entries[i] > entries[i - 1]) {
    increases++;
  }
}

console.log(increases);
