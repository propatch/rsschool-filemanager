// ++ disp curren dir

import { currentlyPath } from "./test.js";

export const cd = async ([pathToDir]) => {
  process.chdir(pathToDir);
  currentlyPath();
  // ++ valid path ?
};
