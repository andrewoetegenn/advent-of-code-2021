import * as fs from "fs";

const data = fs.readFileSync("./DayOne/input.txt", "utf8");
const entries = data.split("\n").map((e) => parseInt(e));

let increases = 0;

for (let i = 0; i < entries.length; i++) {
  if (i < 2) continue;

  const firstWindow = entries[i - 3] + entries[i - 2] + entries[i - 1];
  const secondWindow = entries[i - 2] + entries[i - 1] + entries[i];

  if (secondWindow > firstWindow) {
    increases++;
  }
}

console.log(increases);
