/// +++ impotdisp cur dir

export const handlerUp = async () => {
  try {
    process.chdir("..");
    //++ call disp cur dir
  } catch (error) {
    console.error("Invalid input");
  }
};
