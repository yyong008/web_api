# HTMLAnchorElement

>HTMLAnchorElement 接口表示超链接元素，并提供一些特别的属性和方法（除了那些继承自普通 HTMLElement对象接口的之外）以用于操作这些元素的布局和显示。

## 继承关系

- HTMLElement
- HTMLHyperlinkElementUtils

## 从 lib.dom.d.ts 中查看

```ts
interface HTMLAnchorElement extends HTMLElement, HTMLHyperlinkElementUtils {
    /** @deprecated */
    charset: string;
    /** @deprecated */
    coords: string;
    download: string;
    hreflang: string;
    /** @deprecated */
    name: string;
    ping: string;
    referrerPolicy: string;
    rel: string;
    readonly relList: DOMTokenList;
    /** @deprecated */
    rev: string;
    /** @deprecated */
    shape: string;
    target: string;
    text: string;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLAnchorElement: {
    prototype: HTMLAnchorElement;
    new(): HTMLAnchorElement;
};
```

## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLAnchorElement
