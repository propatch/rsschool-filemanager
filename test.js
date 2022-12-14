import path from "node:path";
import repl from "node:repl";

import { parseArgs } from "./start.js";
//
import fs from "fs/promises";

const currentlyPath = () => {
  return path.resolve();
};

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `user-session > `,
});

rl.prompt();

rl.on("line", (line) => {
  switch (line.trim()) {
    case "hello":
      console.log("world!");
      break;
    case "up":
      console.log("world!");
      break;
    case "cd":
      console.log("world!");
      break;
    case "ls":
      console.log("world!");
      break;
    case "cat":
      console.log("world!");
      break;
    case "add":
      console.log("world!");
      break;
    case "rn":
      console.log("world!");
      break;
    case "cp":
      console.log("world!");
      break;

    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on("close", () => {
  console.log(`Thank you for using File Manager, ${parseArgs()}, goodbye!`);
  process.exit(0);
});

// const m = path.basename(process.cwd());

// const r = repl.start(`user-session > `);

// export const write = async () => {
//   process.stdin.on("data", (data) => {
//     process.stdout.write(data);
//   });
// };

// Object.defineProperty(r.context, "m", {
//   configurable: false,
//   enumerable: true,
//   value: m,
// });

// process.on("SIGТERM", () => {
//   console.log("Received SIGINT. Press Control-D to exit.");
// });

// const checkExit = (param) => {
//     if (param ==='.exit') {
//         console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
//         process.on('SIGINT', () => console.log('Received: SIGINT'));
//         //process.exit(1);
//     }

// }

// checkExit();
