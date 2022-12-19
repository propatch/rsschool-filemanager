// https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md
// https://nodejs.org/dist/latest-v18.x/docs/api/readline.html

import path from "node:path";
import repl from "node:repl";
import { userInfo, cpus, homedir, EOL } from "node:os";
import { getUserName } from "./start.js";
import { msg } from "./exit.js";
//

export const currentlyPath = () => {
  return path.resolve();
};
console.log(`You are currently in ${path.resolve()}`);

import * as readline from "node:readline/promises";
import { up } from "./up.js";
import { cd } from "./cd.js";
import { ls } from "./ls.js";

process.chdir(homedir());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `user-session > `,
});

export const handleOS = ([param]) => {
  try {
    if (![param]) console.error(" NO PARAMETERS");
    const { userName, homedir } = userInfo();
    const cpuInfo = cpus().map(({ model, speed }) => ({
      model,
      speed: `${speed / 1000}`,
    }));

    const os = {
      "--cpus": cpuInfo,
      "--homedir": homedir,
      "--username": userName,
      "--architecture": arch,
      "--EOL": EOL,
    };
    if (!os[param]) console.error(" NO PARAMETERS");
    console.table(os[param]);
    //+= disp cur dir
  } catch (err) {
    console.log(err);
  }
};

rl.prompt();

rl.on("line", (line) => {
  switch (line.trim()) {
    case "hello":
      console.log("world!");
      break;
    case "up":
      up();
      break;
    case "cd":
      console.log(process.argv);

      console.log("world!");
      break;
    case "ls":
      console.log(`You are currently in ${currentlyPath()}`);
      ls();
      break;
    case "cat":
      console.log("world!");
      break;
    case "add":
      console.log("world!");
      console.log(`You are currently in ${currentlyPath()}`);
      break;
    case "rn":
      console.log("world!");
      console.log(process.cwd());
      break;
    case "cp":
      console.log("world!");
      console.log(currentlyPath());
      break;
    case "os":
      console.log(currentlyPath());
      handleOS();
      console.log("handleOS!");

      break;

    case ".exit":
      console.log(msg);
      process.exit(0);

    default:
      console.log(`Invalid input`);
      break;
  }
  rl.prompt();
}).on("close", () => {
  console.log(msg);
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
