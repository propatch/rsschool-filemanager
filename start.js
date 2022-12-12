//const returnName = (el) => JSON.parse(el, "USERNAME");

const getEnt = Object.entries(process.env);

const parseArgs = () => {
  try {
    const getAgrs = process.argv.slice(2);

    const acc = [];
    getAgrs.forEach((arg, i, arr) => {
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
    throw new Error("Not correct entities");
  }
};

parseArgs();

// const isFind = getKey.find((element) => {
//   return element === "USERNAME";
// });
// swich (getAgrs[0]) {};

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
