# HTMLUListElement

> HTMLUListElement接口提供了特殊的属性（除了在常规 `HTMLElement` 接口上定义的那些属性以外，还可以通过继承使用它）来操纵无序列表元素。

## 继承关系

- HTMLUListElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLUListElement

```ts
interface HTMLUListElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    /** @deprecated */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLUListElement: {
    prototype: HTMLUListElement;
    new(): HTMLUListElement;
};
```

## 参考

1. [HTMLUListElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement)