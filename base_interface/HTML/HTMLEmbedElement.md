# HTMLEmbedElement

> HTML `<embed>` 元素将外部内容嵌入文档中的指定位置。此内容由外部应用程序或其他交互式内容源（如浏览器插件）提供。

## 从 lib.dom.d.ts 中看 HTMLEnbedElement

```ts
interface HTMLEmbedElement extends HTMLElement {
    /** @deprecated */
    align: string;
    height: string;
    /** @deprecated */
    name: string;
    src: string;
    type: string;
    width: string;
    getSVGDocument(): Document | null;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLEmbedElement: {
    prototype: HTMLEmbedElement;
    new(): HTMLEmbedElement;
};
```

## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/embed
