# HTMLAreaElement

> HTMLAreaElement 接口提供了一些属性和方法 (除了常见的对象 `HTMLElement` 接口提供的属性和方法通过继承也能获取到) 用来控制一个area元素的布局和展现。

## 从 lib.dom.d.ts 中看 HTMLAreaElment

```ts
interface HTMLAreaElement extends HTMLElement, HTMLHyperlinkElementUtils {
    alt: string;
    coords: string;
    download: string;
    /** @deprecated */
    noHref: boolean;
    ping: string;
    referrerPolicy: string;
    rel: string;
    readonly relList: DOMTokenList;
    shape: string;
    target: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLAreaElement: {
    prototype: HTMLAreaElement;
    new(): HTMLAreaElement;
};
```

## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLAreaElement
