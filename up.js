export const up = async () => {
  try {
    process.chdir("../");
    console.log("up");
    console.log(process.cwd());
  } catch (error) {
    console.error("Invalid input");
  }
};
