// preload.js 对于无UI时候的模板
const PRELOAD_TEMPLATE = `
window.exports = {
    "features.code": { // 注意：键对应的是 plugin.json 中的 features.code
       mode: "list",  // 列表模式
       args: {
          // 进入插件时调用（可选）
          enter: (action, callbackSetList) => {
             // 如果进入插件就要显示列表数据
             callbackSetList([
                   {
                      title: '这是标题',
                      description: '这是描述',
                      icon:'' // 图标(可选)
                   }
             ])
          },
          // 子输入框内容变化时被调用 可选 (未设置则无搜索)
          search: (action, searchWord, callbackSetList) => {
             // 获取一些数据
             // 执行 callbackSetList 显示出来
             callbackSetList([
                {
                   title: '这是标题',
                   description: '这是描述',
                   icon:'', // 图标
                   url: 'https://yuanliao.info'
                }
             ])
          },
          // 用户选择列表中某个条目时被调用
          select: (action, itemData, callbackSetList) => {
             window.utools.hideMainWindow()
             const url = itemData.url
             require('electron').shell.openExternal(url)
             window.utools.outPlugin()
          },
          // 子输入框为空时的占位符，默认为字符串"搜索"
          placeholder: "搜索"
       } 
    }
 }
`;
// HTML 有 UI 的组件模板
const HTML_TEMPLATE = `
<!DOCTYPE html>
<html lang="zh_CN">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Plugin</title>
  </head>
  <body>
    <h1>Hello world</h1>
    <script src="./js/index.js"></script>
  </body>
</html>

`;

// plugin.json 的模板
const PLUGIN_JSON_TEMPLATE = `
// 20211225182358
// http://u.tools/docs/plugin.json
{
  "main": "index.html", // 入口文件，当该配置为空时，表示插件为模板插件。 main 与 preload 至少存在其一
  "preload": "preload.js",//这是一个关键文件，你可以在此文件内调用 uTools、 nodejs、 electron 提供的 api。 
  "logo": "logo.png",//  插件支持的平台，此为可选项，默认为全平台支持
  "platform": [
    "win32",
    "darwin",
    "linux"
  ],
  "development": {
    "main": ""
  },
  "pluginSetting": {
    "single": true,
    "height": 0
  },
  "features": [
    {
      "code": "uuid",
      "explain": "随机唯一值",
      "icon": "res/xxxx.png",
      "platform": [
        "win32",
        "darwin",
        "linux"
      ],
      "cmds": [
        "uTools",
        "中文",
        {
          "type": "img",
          "label": "图片匹配"
        },
        {
          "type": "files",
          "label": "文件匹配",
          "fileType": "file",
          "match": "/xxx/",
          "minLength": 1,
          "maxLength": 1
        },
        {
          "type": "regex",
          "label": "文本正则匹配",
          "match": "/xxx/i",
          "minLength": 1,
          "maxLength": 1
        },
        {
          "type": "over",
          "label": "无匹配时",
          "exclude": "/xxx/i",
          "minLength": 1,
          "maxLength": 1
        },
        {
          "type": "window",
          "label": "窗口动作",
          "match": {
            "app": [
              "xxx.app",
              "xxx.exe"
            ],
            "title": "/xxxx/",
            "class": [
              "xxx"
            ]
          }
        }
      ]
    }
  ]
}
`;


const JS_TEMPLATE = `
/**这里放置的是js 逻辑代码*/
window.onload = () => {
    let h1Tag = document.querySelector("h1");
    h1Tag.style.color = "red";
  };  
`;

export {
    PRELOAD_TEMPLATE,
    HTML_TEMPLATE,
    PLUGIN_JSON_TEMPLATE,
    JS_TEMPLATE
}