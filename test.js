import repl from "node:repl";
const msg = 'message';

const r = repl.start('> ');


Object.defineProperty(r.context, 'm', {
  configurable: false,
  enumerable: true,
  value: msg
});



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