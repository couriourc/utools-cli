/**
 *  @author      : couriourc 
 *  @description : 
 *  @complete    : false
 *  @createDate  : Sat, 25 Dec 2021 04:10:13 GMT
 *  @version     : 1.0.0
*/
import * as fs from "fs"
import { HTML_TEMPLATE, PLUGIN_JSON_TEMPLATE, JS_TEMPLATE } from "../utils/constants";
import { createDir } from "../utils/common";
function createUiTemplate(path: string, pluginName: string): void {
    const dirName = `${path}/${pluginName}`;
    if (!fs.existsSync(path)) return;

    createDir(dirName);
    fs.writeFileSync(`${dirName}/preload.json`, Buffer.from(PLUGIN_JSON_TEMPLATE))
    fs.writeFileSync(`${dirName}/index.html`, Buffer.from(HTML_TEMPLATE))
    createDir(`${dirName}/js`);
    fs.writeFileSync(`${dirName}/js/index.js`, Buffer.from(JS_TEMPLATE))

    return;
}


export {
    createUiTemplate
}

