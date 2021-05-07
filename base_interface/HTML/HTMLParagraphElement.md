# HTMLParagraphElement

> HTMLParagraphElement 接口提供了一些特殊的属性（超出了 HTMLElement 它继承的常规对象接口的属性）来处理 `<p>` 元素。

## 继承关系

- HTMLParagrphElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLParagraphElement

```ts
interface HTMLParagraphElement extends HTMLElement {
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLParagraphElement: {
    prototype: HTMLParagraphElement;
    new(): HTMLParagraphElement;
};
```

## 参考

1. [HTMLParagraphElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement)
