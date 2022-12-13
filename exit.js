import repl from "node:repl";
import { getUserName } from "./start.js";
//

const msg = `Thank you for using File Manager, ${getUserName()}, goodbye!`;
repl.start(`user-session >`);

process.on("exit", () => {
  console.log(msg);
  process.exit();
});
