# HTMLQuoteElement

>HTMLQuoteElement 接口提供了特殊的属性和方法（除了常规 `HTMLElement` 接口之外，它还可以通过继承来使用它）来操纵引用元素（例如`<blockquote>`和）`<q>`，而不是 `<cite>` 元素。

## 继承关系

- HTMLQuoteElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLQuoteElement

```ts
interface HTMLQuoteElement extends HTMLElement {
    cite: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLQuoteElement: {
    prototype: HTMLQuoteElement;
    new(): HTMLQuoteElement;
};
```

## 参考

1. [HTMLQuoteElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLQuoteElement)
