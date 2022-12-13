import repl from 'node:repl'
import { parseUserName } from './start.js';

const msg = 'message';
repl.start(`user-${parseUserName}-session >`);


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
