//const returnName = (el) => JSON.parse(el, "USERNAME");

const getEnt = Object.entries(process.env);

const parseArgs = () => {
  const helloMsg = "Welcome to the File Manager, Username!";

  const getAgrs = process.argv.slice(2);

  const acc = [];
  getAgrs.forEach((arg, i, arr) => {
    if (arg.startsWith("--")) {
      const transformArg = arg.slice(2);
      acc.push(transformArg);
    }
    return acc;
  });

  console.log(getAgrs);

  console.log(acc);
};

const newArgs = parseArgs();
console.log(newArgs);

// switch (newArgs[1]) {
//   case "username":
//     console.log(getEnt);
//     break;
//   default:
//     console.log("notFind");
// }

// const isFind = getKey.find((element) => {
//   return element === "USERNAME";
// });
// swich (getAgrs[0]) {};
