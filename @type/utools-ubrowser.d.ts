/**
 *  @author      : couriourc 
 *  @description : 
 *  @complete    : false
 *  @createDate  : Sat, 25 Dec 2021 04:00:40 GMT
 *  @version     : 1.0.0
*/

// declare module "ubrowser-api" {
interface Headers {
    Referer: string,
    userAgent: string
}

declare interface ubrowser {
    useragent: (userAgent: string) => ubrowser;
    goto(url: string, headers?: Headers): ubrowser;
    goto(mdText: string, title?: string): ubrowser;

    hide(): ubrowser;
    show(): ubrowser;
    css(cssCode: string): ubrowser;

    press(key: string, ...modifier: string[]): ubrowser;

    paste(text: string): ubrowser;
    screenshot(arg: string | {
        x: number,
        y: number,
        width: number,
        height: number
    },
        savePath: string
    ): ubrowser;

    pdf(options: {
        marginsType: 0 | 1 | 2,
        pageSize: ('A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid') | { width: number, height: number }
    }, savePath?: string)
    device(arg: (
        'iPhone 11' | 'iPhone X' | 'iPad' | 'iPhone 6/7/8 Plus' | 'iPhone 6/7/8' | 'iPhone 5/SE' | 'HUAWEI Mate10' | 'HUAWEI Mate20' | 'HUAWEI Mate30' | 'HUAWEI Mate30 Pro'
    ) | {
        size:
        { width: number, height: number },
        useragent: string
    }
    ): ubrowser;

    cookies(name?: string): ubrowser;
    setCookies(name: string, value: string): ubrowser;
    setCookies(cookies: { name: string, value: string }[]): ubrowser;

    removeCookies(name: string): ubrowser;
    clearCookies(url?: string): ubrowser;

    devTools(mode: 'right' | 'bottom' | 'undocked' | 'detach'): ubrowser;
    evaluate(func: (...args: any[]) => any, ...params: any[]): ubrowser;
    wait(ms: number): ubrowser;

    wait(selector: string, timeout?: number): ubrowser;
    wait(func: (...args: any[]) => boolean, timeout: number, ...params: any[])

    when(selector: string): ubrowser;

    when(func: (...args: any[]) => boolean, ...params: any[]): ubrowser;

    end(): ubrowser;
    click(selector: string): ubrowser;

    mousedown(selector: string): ubrowser;
    mouseup(selector: string): ubrowser;

    file(selector: string, payload: string | string[] | Buffer): ubrowser;
    value(selector: string, val: string): ubrowser;
    check(selector: string, checked: boolean): ubrowser;
    focus(selector: string): ubrowser;
    scroll(selector: string): ubrowser;
    scroll(y: number): ubrowser;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    scroll(x: number, y: number): ubrowser;
    //utools.getIdleUBrowsers() 中获得
    run(ubrowserId: number): Promise<any>;
    /**
     * options Object

        Object
        show Boolean (可选) 是否显示
        width Integer (可选) 宽度 默认为 800
        height Integer (可选) 高度 默认为 600
        x Integer (可选) 位置 X
        y Integer (可选) 位置 Y
        center Boolean (可选) 窗口在屏幕居中
        minWidth Integer (可选) 窗口的最小宽度。默认值为 0
        minHeight Integer (可选) 窗口的最小高度。默认值为 0
        maxWidth Integer (可选) 窗口的最大宽度。默认无限制
        maxHeight Integer (可选) 窗口的最大高度。默认无限制
        resizable Boolean (可选) 窗口是否可以改变尺寸。默认值为 true
        movable Boolean (可选) 窗口是否可以移动，在 Linux 中无效。默认值为 true
        minimizable Boolean (可选) 窗口是否可以最小化，在 Linux 中无效。默认值为 true
        maximizable Boolean (可选) 窗口是否可以最大化动，在 Linux 中无效。默认值为 true
        alwaysOnTop Boolean (可选) 窗口是否永远置顶。默认值为 false
        fullscreen Boolean (可选) 窗口是否全屏。默认值为 false
        fullscreenable Boolean (可选) 窗口是否可以进入全屏状态。默认值为 true
        enableLargerThanScreen Boolean (可选) 是否允许改变窗口的大小使之大于屏幕的尺寸，仅适用于 macOS，因为其它操作系统默认允许 大于屏幕的窗口。 默认值为 false
        opacity Number (可选) 设置窗口初始的不透明度，介于 0.0 (完全透明) 和 1.0 (完全不透明) 之间。仅支持 Windows 和 macOS 。
     * 
     * 
    */
    run(options): Promise<any>;
    // ubrowser 管理

    getIdleUBrowsers(): { id: number, title: string, url: string }[];
    // config:https://www.electronjs.org/docs/api/session#sessetproxyconfig
    setUBrowserProxy(config): boolean;
    clearUBrowserCache(): boolean;
}

    // export = ubrowser;
// }
