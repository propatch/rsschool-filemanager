import * as readline from "node:readline/promises";
import { up } from "./up.js";
import { cd } from "./cd.js";
import { ls } from "./ls.js";
import { os } from "./os.js";
import { currentDir } from "./displayCurDir.js";

export const getUserName = async () => {
  try {
    const getArgs = process.argv.slice(2);

    const acc = [];
    getArgs.forEach((arg, i, arr) => {
      if (arg.startsWith("--")) {
        const transformArg = arg.slice(2);
        acc.push(transformArg);
      }
      return acc;
    });

    const parseUserName = (str) => {
      let i = str.indexOf("=");
      if (i === -1) return err;
      let result = "";
      while (i++ < str.length - 1) {
        result = result + str[i];
      }
      return result;
    };

    const userName = parseUserName(acc[0]);

    console.log(`Welcome to the File Manager, ${userName}!`);

    return userName;
  } catch (err) {
    throw new Error(`Operation failed`);
  }
};

currentDir();
export const userName = await getUserName();
await getUserName();

// entities commanding-menu

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `user-session > `,
});

rl.prompt();
rl.on("line", (line) => {
  switch (line.trim()) {
    case "up":
      currentDir();
      up();
      break;
    case "cd":
      console.log(process.argv);
      currentDir();
      break;
    case "ls":
      currentDir();
      ls();
      break;
    case "cat":
      currentDir();
      break;
    case "add":
      currentDir();
      break;
    case "rn":
      currentDir();
      console.log(process.cwd());
      break;
    case "cp":
      currentDir();
      break;
    case "os":
      currentDir();
      os();
      currentDir();
      break;
    case ".exit":
      console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
      process.exit(0);

    default:
      console.log(`Invalid input`);
      break;
  }
  rl.prompt();
}).on("close", () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit(0);
});
