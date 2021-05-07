# HTMLTableCaptionElement

>HTMLTableCaptionElement 接口的特殊性能（超出常规HTMLElement接口，还具有通过继承提供给它），用于操纵表格标题元素。

## 继承关系

- HTMLTableCaptionElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中 HTMLTableCaptionElement

```ts
interface HTMLTableCaptionElement extends HTMLElement {
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableCaptionElement: {
    prototype: HTMLTableCaptionElement;
    new(): HTMLTableCaptionElement;
};
```

## 参考

1. [HTMLTableCaptionElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCaptionElement)
