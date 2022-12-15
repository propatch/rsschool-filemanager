export const handlerAdd = async ([newFile]) => {
  let fileHandler;
  try {
    const pathToFile = resolve(process.cwd(), newFile);
    fileHandler = await open(pathToFile, "w");
    //display current Dir
  } catch (err) {
    console.error("Invalid input");
  } finally {
    fileHandler?.close();
  }
};
