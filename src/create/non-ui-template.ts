/**
 *  @author      : couriourc 
 *  @description : 
 *  @complete    : false
 *  @createDate  : Sat, 25 Dec 2021 07:08:49 GMT
 *  @version     : 1.0.0
*/
import * as fs from "fs"
import { PLUGIN_JSON_TEMPLATE, PRELOAD_TEMPLATE } from "../utils/constants";
import { createDir } from "../utils/common";

function createNonUiTemplate(path: string, pluginName: string): void {
    const dirName = `${path}/${pluginName}`;
    if (!fs.existsSync(path)) return;
    createDir(dirName);

    fs.writeFileSync(`${dirName}/plugin.json`, Buffer.from(PLUGIN_JSON_TEMPLATE))
    fs.writeFileSync(`${dirName}/preload.js`, Buffer.from(PRELOAD_TEMPLATE))

    return;
}

export {
    createNonUiTemplate
}