import repl from "repl";

//const returnName = (el) => JSON.parse(el, "USERNAME");

//https://nodejs.org/dist/latest-v18.x/docs/api/repl.html

const getUserName = () => {
  const getEnt = Object.entries(process.env);

  const result = getEnt.find(([item]) => {
    if (item.startsWith("USERNAME")) {
      return item;
    }
  });
  return result[1];
};

const parseArgs = () => {
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
    console.log(`Welcome to the File Manager, ${parseUserName(acc[0])}!`);
    console.log(`You are currently in path_to_working_directory`);
  } catch (err) {
    console.error(`Not parameters in arguments: ${err}`);
    console.log(`!!! You default username: ${getUserName()}`);

    // } finally {
    //   repl.start(`user-session >`);
  }
};

parseArgs();

export { getUserName, parseArgs };

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
