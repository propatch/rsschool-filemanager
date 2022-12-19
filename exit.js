import repl from "node:repl";
import { getUserName } from "./start.js";

// message output
export const msg = `Thank you for using File Manager, ${getUserName()}, goodbye!`;

process.on("exit", () => {
  console.log(msg);
  process.exit();
});
