/// +++ impotdisp cur dir

export const up = async () => {
  try {
    //process.chdir("..");
    process.chdir("../");
    console.log("up");
    console.log(process.cwd());
    //++ call disp cur dir
  } catch (error) {
    console.error("Invalid input");
  }
};
