import { readdir } from "fs/promises";
import { resolve } from "path";

export const ls = async () => {
  try {
    const currentDir = resolve(process.cwd());
    const file = await readdir(currentDir);
    console.table(file);
  } catch (err) {
    console.error(err);
  }
};
