import * as fs from "fs";

function createDir(dirName: string): void {
    // fs.Sync
    fs.mkdirSync(dirName)
    return
}

function isExistsPath(path: string): boolean {
    return false
}

function getRawType(target: unknown): string {
    const rawTypeReg = /^\[object (\w)\]$/
    const targetTypeString: string = Object.prototype.toString.call(target);

    return rawTypeReg.exec(targetTypeString)[1];
}
export {
    createDir,
    getRawType,
    isExistsPath
}