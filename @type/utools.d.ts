/**
 * @author      : couriourc 
 * @description : for utools api
 * @date        : 2021-12-24 21:45
 * @complete    : false
*/

type emptyCallback = () => void | string | [] | object;
type paramsCallback<T> = (callbackParams: T) => void | string | [] | object;

interface onPluginEnterParams {
    code: string,
    type: string,
    payload: string | object | string[]
}

interface subInputChangeObj {
    text: string
}

interface BrowserWindowObject {
    name: string
}
interface Feature {
    code: string,
    explain: string,
    icon?: string,
    platform?: string[],
    cmds: string[]
}

interface uToolsProfile {
    avatar: string,
    nickname: string,
    type: "member" | "user"
}


interface paymentOption {
    goodsId: string,
    outOderId: string,
    attach: string,
}

interface displayObj {
    todo: "https://www.electronjs.org/docs/api/structures/display"
}

interface colorObject {
    hex: string,
    rgb: string,
}
interface userPayments {
    order_id: string,
    out_order_id: string,
    open_id: string,
    pay_fee: number,
    body: string,
    attach: string,
    goods_id: string,
    paid_at: string,
    created_at: string
}
declare namespace utools {
    // 生命周期模块 
    function onPluginReady(callback: emptyCallback);

    function onPluginEnter(callback: paramsCallback<onPluginEnterParams>);
    function onPluginOut(callback: emptyCallback);
    function onPluginDetach(callback: emptyCallback);
    // 窗口控制类型
    function hideMainWindow(isRestorePreWindow: boolean): boolean;
    function showMainWindow(): boolean;
    function setExpendHeight(height: number): boolean;


    // 主窗口事件监听系列

    // 输入框监听事件
    function setSubInput(onChange: paramsCallback<subInputChangeObj>, placeholder?: string, isFocus?: string): boolean;

    function removeSubInput(): boolean;
    function setSubInputValue(value: string): boolean;

    function subInputFocus(): boolean;
    function subInputSelect(): boolean;

    function subInputBlur(): boolean;
    function redirect(label: string, payload: string | object): boolean;

    // 对话框方法 
    // TODO :options的类型选项 与
    /**
     *  Electron API dialog.showSaveDialogSync options:https://www.electronjs.org/docs/latest/api/dialog#dialogshowopendialogsyncbrowserwindow-options
     * */
    function showOpenDialog(options): Array<any> | undefined;
    function findInPage(text: string, options): void;
    function stopFindInPage(action: "clearSelection" | "keepSelection" | "activateSelection"): void;

    function startDrag(file: string | string[]): void;
    // todo:https://www.electronjs.org/docs/api/browser-window

    function createBrowserWindow(url: string, options, callback?: emptyCallback,): BrowserWindowObject;

    // 返回是否为深色模式
    function isDarkColors(): boolean;

    // todo feature 

    function setFeature(feature: Feature);

    function removeFeature(code: string): boolean;

    // 用户模块
    function getUser(): uToolsProfile | null;

    function fetchUserServerTemporaryToken(): Promise<{ token: string, expired_at: number }>;

    // 支付模块
    function openPayment(options: paymentOption, callback: emptyCallback)
    function fetchUserPayments(): Promise<userPayments[]>

    // 工具类
    function screenColorPick(callback: paramsCallback<colorObject>);


    function screenCapture(callback: paramsCallback<string>);

    // 模拟类
    function simulateKeyboardTap(...arg: string[]);
    function simulateMouseMove(x: number, y: number);
    function simulateMouseClick(x?: number, y?: number);
    function simulateMouseRightClick(x?: number, y?: number);
    // 屏幕类

    function getCursorScreenPoint(): { x: number, y: number };
    function getPrimaryDisplay(): displayObj;

    function getAllDisplays(): displayObj[];
    function getDisplayNearestPoint(point: { x: number, y: number }): displayObj;
    function getDisplayMatching(rect: { x: number, y: number, width: number, height: number }): displayObj;

    function copyFile(file: string | string[]): boolean;

    function copyImage(img: string | Buffer): boolean;

    function copyText(text: string): boolean;
    // 系统类
    function showNotification(body: string, clickFeatureCode: string);
    function shellOpenPath(fullPath: string);
    function shellShowItemInFolder(fullPath: string);
    function shellOpenExternal(url: string);
    function shellBeep();
    function getNativeId(): string;
    function getAppVersion(): string;
    function getPath(name: string): string;

    function getFileIcon(filePath: string): string;
    function readCurrentFolderPath(): Promise<string>

    function readCurrentBrowserUrl(): Promise<string>;

    function isDev(): boolean;

    function isMacOs(): boolean;

    function isWindows(): boolean;
    function isLinux(): boolean;

    let ubrowser: ubrowser;
    let db: db;
    let dbStorage: dbStorage;
}