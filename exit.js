import repl from "node:repl";
// import { parseUserName } from './start.js';

const msg = "Thank you for using File Manager, $Username, goodbye!";
repl.start(`user-session >`).context.m = msg;

process.on('exit', () => {
    console.log(msg);
    process.exit();
  });




