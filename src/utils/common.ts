import * as fs from "fs";

function createDir(dirName: string): void {
    // fs.Sync
    fs.mkdirSync(dirName)
    return
}

function isExistsPath(path: string): boolean {
    const isExist = fs.existsSync(path)
    return isExist;
}

function getRawType(target: unknown): string {
    const rawTypeReg = /^\[object (\w)\]$/
    const targetTypeString: string = Object.prototype.toString.call(target);

    return rawTypeReg.exec(targetTypeString)[1];
}
function getCurExecPath() {
    return process.cwd();
}

export {
    createDir,
    getRawType,
    isExistsPath,
    getCurExecPath
}