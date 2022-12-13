
import repl from 'repl'

//const returnName = (el) => JSON.parse(el, "USERNAME");



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
  } catch (err) {
    console.log(`Welcome to the File Manager, ${getUserName()}!`);
    throw new Error("Not correct entities");
  } finally {
    repl.start(`user-session >`);
  }
};

parseArgs();

export default { parseArgs };

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
