import { currentDir } from "./displayCurDir.js";

export const cd = async ([pathToDir]) => {
  process.chdir(pathToDir);
  currentDir();
};
