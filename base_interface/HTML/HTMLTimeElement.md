# HTMLTimeElement

>HTMLTimeElement接口提供了 HTMLElement 用于操作`<time>`元素的特殊属性（除了常规接口以外，还可以通过继承使用它）。

## 继承关系

- HTMLTimeElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts

```ts
interface HTMLTimeElement extends HTMLElement {
    dateTime: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTimeElement: {
    prototype: HTMLTimeElement;
    new(): HTMLTimeElement;
};
```

## 参考

1. [HTMLTimeElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement)