# HTMLTableColElement

> `HTMLTableColElement` 接口提供了特殊的属性（除了 `HTMLElement` 接口之外，它还可以继承）来操纵单个或分组的表列元素。

## 继承关系

- HTMLTableColElement
- HTMLElement
- Element
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLTabColElement

```ts
interface HTMLTableColElement extends HTMLElement {
    /** @deprecated */
    align: string;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    span: number;
    /** @deprecated */
    vAlign: string;
    /** @deprecated */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableColElement: {
    prototype: HTMLTableColElement;
    new(): HTMLTableColElement;
};

```

## 参考

1. [HTMLTableColElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement)
