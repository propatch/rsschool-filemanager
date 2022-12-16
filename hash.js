import { createReadStream } from "fs";
import { resolve } from "path";
import { pipeline } from "stream/promises";

///+++  import output() from ../.js

export const handlerHash = async ([pathToFile]) => {
  try {
    const pathFile = resolve(pathToFile);
    const hash = crypto.createHash("sha256");
    const readable = createReadStream(pathFile, { encoding: "utf-8" });
    await pipeline(readable, hash.setEncoding("hex"), output());
  } catch (error) {
    console.error("Invalid input"); k
  }
};
