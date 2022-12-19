//Copy file (should be done using Readable and Writable streams):
//cp path_to_file path_to_new_directory

import fs from  fs;

export const cp = async([pathToFile, pathToNewDir])=>{
    try {
        if (!isDir()) throw new Error("invalid pathDir");
        const pathFile = resolve(pathToFile);
        const { base } = parse(pathFile);
        const pathNewDir = resolve(pathToNewDir, base);
        const rs = fs.createReadStream(pathFile);
        const ws = fs.createWriteStream(pathNewDir);
        await pipeline(rs,ws);
        await unlink(pathFile)
    } catch (error) {
        console.error("Invalid input");
    }

    
}




