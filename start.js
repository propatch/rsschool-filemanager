import EventEmitter from "events";
import { homedir } from "os";
import repl from "repl";
import { currentlyPath } from "./test.js";

//const returnName = (el) => JSON.parse(el, "USERNAME");

//https://nodejs.org/dist/latest-v18.x/docs/api/repl.html

//chdir(homedir());

// const getUserName = () => {
//   const getEnt = Object.entries(process.env);

//   const result = getEnt.find(([item]) => {
//     if (item.startsWith("USERNAME")) {
//       return item;
//     }
//   });
//   return result[1];
// };

const getUserName = () => {
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
    console.error(`Not parameters in arguments: ${err}`);

    // } finally {
    //   repl.start(`user-session >`);
  }
};

getUserName();

export { getUserName };

// const eventEmitter = new EventEmitter();
// eventEmitter.setMaxListeners(0);

// eventEmitter
//   .on("up")
//   .on("cd")
//   .on("ls")
//   .on("cat")
//   .on("add")
//   .on("rn")
//   .on("cp")
//   .on("mv")
//   .on("rm")
//   .on("os")
//   .on("hash")
//   .on("compress")
//   .on("decompress");

// const isFind = getKey.find((element) => {
//   return element === "USERNAME";
// });
// switch (getArgs[0]) {};

// switch (acc[0]) {
//   case "username":
//     const result = getEnt.reduce((acc, [key, val]) => {
//       if (key.startsWith("USERNAME")) acc.push(`${val}`);
//       return acc;
//     }, []);
//     console.log(result);
//     break;
//   default:
//     console.log("notFind");
// }
