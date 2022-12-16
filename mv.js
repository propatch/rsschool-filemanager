export const handlerMv = async ([pathToFile, pathToNewDir]) => {
  try {
    //++const isDir = await //+++isDir (pathToNewDir);
    if (!isDir()) throw new Error("invalid pathDir");
    const pathFile = resolve(pathToFile);
    const { base } = parse(pathFile);
    const pathNewDir = resolve(pathToNewDir, base);
    const readable = createReadStream(pathFile);
    const writeable = createWriteStream(pathNewDir);
    await pipeline(readable, writeable);
    await unlink(pathFile);
    //++ diplay Curr Dir
  } catch (error) {
    console.error("Invalid input");
  }
};
