# HTMLPreElement

>HTMLPreElement接口公开了 HTMLElement 用于操纵一组预格式化文本（`<pre>`）的特定属性和方法（除了该接口所具有的继承属性之外）。

## 继承关系

- HTMLPreElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看  HTMLPreElement

```ts
interface HTMLPreElement extends HTMLElement {
    /** @deprecated */
    width: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLPreElement: {
    prototype: HTMLPreElement;
    new(): HTMLPreElement;
};
```
  
## 参考

1. [HTMLPreElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPreElement)