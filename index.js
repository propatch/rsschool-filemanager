//import parseArgs from "./start.js";
import { homedir } from "os";

console.log(`${process.cwd()}`);
process.chdir(homedir());

console.log(`${process.cwd()}`);


