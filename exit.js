import repl from "node:repl";
import { parseArgs } from "./start.js";
//

const msg = `Thank you for using File Manager, ${parseArgs()}, goodbye!`;
repl.start(`user-session >`);

process.on("exit", () => {
  console.log(msg);
  process.exit();
});
