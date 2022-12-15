import { createReadStream } from "fs";
import { resolve } from "path";
import { pipeline } from "stream/promises";
// import customOutput() from "./ ,,, .js"

export const handlerCat = async ([pathToFile]) => {
  try {
    //нарушена - мутирует аргумент pathToFile
    const pathFile = resolve(pathToFile);
    const readable = createReadStream(pathFile, { encoding: "utf-8" });
    await pipeline(ReadableStream, customOutput());
    // displ cur dir
  } catch (err) {
    // ++ обернуть все handler не писать в каждом,
    // + const = ' invalid input';
    console.error("Invalid input");
  }
};
