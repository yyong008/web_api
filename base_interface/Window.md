# Window

Window 是一个窗口，包含了 DOM 结构。 `window.document` 数据就保存了当前的 `DOM` 结构。使用 `document.defaultView` 访问当前窗口所在的文档。

```js
// in browser
document === window.document; // true

// in browser
document.defaultView === window; // true
```

## window 对象与 Window 接口

window 对象实现了 Window 接口， 而 Window 继承自抽象： `AbstractView` 接口。

## 标签页与 window

- 有标签页的浏览器，每一个标签页都有一个自己的 window 对象。

## 从 lib.dom.d.ts

继承关系

- EventTarget
- AnimationFrameProvider
- GlobalEventHandlers
- WindowEventHandlers
- WindowLocalStorage
- WindowOrWorkerGlobalScope
- WindowSessionStorage

```ts
interface Window extends EventTarget, AnimationFrameProvider, GlobalEventHandlers, WindowEventHandlers, WindowLocalStorage, WindowOrWorkerGlobalScope, WindowSessionStorage {
    readonly applicationCache: ApplicationCache;
    readonly clientInformation: Navigator;
    readonly closed: boolean;
    customElements: CustomElementRegistry;
    defaultStatus: string;
    readonly devicePixelRatio: number;
    readonly doNotTrack: string;
    readonly document: Document;
    /** @deprecated */
    readonly event: Event | undefined;
    /** @deprecated */
    readonly external: External;
    readonly frameElement: Element | null;
    readonly frames: Window;
    readonly history: History;
    readonly innerHeight: number;
    readonly innerWidth: number;
    readonly length: number;
    location: Location;
    readonly locationbar: BarProp;
    readonly menubar: BarProp;
    readonly msContentScript: ExtensionScriptApis;
    name: string;
    readonly navigator: Navigator;
    offscreenBuffering: string | boolean;
    oncompassneedscalibration: ((this: Window, ev: Event) => any) | null;
    ondevicelight: ((this: Window, ev: DeviceLightEvent) => any) | null;
    ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => any) | null;
    ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => any) | null;
    ondeviceorientationabsolute: ((this: Window, ev: DeviceOrientationEvent) => any) | null;
    ongamepadconnected: ((this: Window, ev: GamepadEvent) => any) | null;
    ongamepaddisconnected: ((this: Window, ev: GamepadEvent) => any) | null;
    onmousewheel: ((this: Window, ev: Event) => any) | null;
    onmsgesturechange: ((this: Window, ev: Event) => any) | null;
    onmsgesturedoubletap: ((this: Window, ev: Event) => any) | null;
    onmsgestureend: ((this: Window, ev: Event) => any) | null;
    onmsgesturehold: ((this: Window, ev: Event) => any) | null;
    onmsgesturestart: ((this: Window, ev: Event) => any) | null;
    onmsgesturetap: ((this: Window, ev: Event) => any) | null;
    onmsinertiastart: ((this: Window, ev: Event) => any) | null;
    onmspointercancel: ((this: Window, ev: Event) => any) | null;
    onmspointerdown: ((this: Window, ev: Event) => any) | null;
    onmspointerenter: ((this: Window, ev: Event) => any) | null;
    onmspointerleave: ((this: Window, ev: Event) => any) | null;
    onmspointermove: ((this: Window, ev: Event) => any) | null;
    onmspointerout: ((this: Window, ev: Event) => any) | null;
    onmspointerover: ((this: Window, ev: Event) => any) | null;
    onmspointerup: ((this: Window, ev: Event) => any) | null;
    /** @deprecated */
    onorientationchange: ((this: Window, ev: Event) => any) | null;
    onreadystatechange: ((this: Window, ev: ProgressEvent<Window>) => any) | null;
    onvrdisplayactivate: ((this: Window, ev: Event) => any) | null;
    onvrdisplayblur: ((this: Window, ev: Event) => any) | null;
    onvrdisplayconnect: ((this: Window, ev: Event) => any) | null;
    onvrdisplaydeactivate: ((this: Window, ev: Event) => any) | null;
    onvrdisplaydisconnect: ((this: Window, ev: Event) => any) | null;
    onvrdisplayfocus: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypointerrestricted: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypointerunrestricted: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypresentchange: ((this: Window, ev: Event) => any) | null;
    opener: any;
    /** @deprecated */
    readonly orientation: string | number;
    readonly outerHeight: number;
    readonly outerWidth: number;
    readonly pageXOffset: number;
    readonly pageYOffset: number;
    readonly parent: Window;
    readonly personalbar: BarProp;
    readonly screen: Screen;
    readonly screenLeft: number;
    readonly screenTop: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly scrollX: number;
    readonly scrollY: number;
    readonly scrollbars: BarProp;
    readonly self: Window & typeof globalThis;
    readonly speechSynthesis: SpeechSynthesis;
    status: string;
    readonly statusbar: BarProp;
    readonly styleMedia: StyleMedia;
    readonly toolbar: BarProp;
    readonly top: Window;
    readonly visualViewport: VisualViewport;
    readonly window: Window & typeof globalThis;
    alert(message?: any): void;
    blur(): void;
    /** @deprecated */
    captureEvents(): void;
    close(): void;
    confirm(message?: string): boolean;
    departFocus(navigationReason: NavigationReason, origin: FocusNavigationOrigin): void;
    focus(): void;
    getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;
    getMatchedCSSRules(elt: Element, pseudoElt?: string | null): CSSRuleList;
    getSelection(): Selection | null;
    matchMedia(query: string): MediaQueryList;
    moveBy(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    msWriteProfilerMark(profilerMarkName: string): void;
    open(url?: string, target?: string, features?: string, replace?: boolean): Window | null;
    postMessage(message: any, targetOrigin: string, transfer?: Transferable[]): void;
    print(): void;
    prompt(message?: string, _default?: string): string | null;
    /** @deprecated */
    releaseEvents(): void;
    resizeBy(x: number, y: number): void;
    resizeTo(width: number, height: number): void;
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    stop(): void;
    webkitCancelAnimationFrame(handle: number): void;
    webkitConvertPointFromNodeToPage(node: Node, pt: WebKitPoint): WebKitPoint;
    webkitConvertPointFromPageToNode(node: Node, pt: WebKitPoint): WebKitPoint;
    webkitRequestAnimationFrame(callback: FrameRequestCallback): number;
    addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: Window;
}

declare var Window: {
    prototype: Window;
    new(): Window;
};
```


## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/Window
