 import {readdir} from 'fs/promises'
 import { resolve } from "path";
 // + dis curren dir

 export const handlerLs= ()=> {
    try {
        const currentDir = resolve(process.cwd());
        const file =await readdir(currentDir);
        console.table(file);
        // + call disp curr dir
    } catch (err) {
        console.error('Invalid input');
    }
 }