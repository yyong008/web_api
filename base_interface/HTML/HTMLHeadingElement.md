# HTMLHeadingElement

`HTMLHeadingElement` 接口表示不同标题元素，`<h1>`通过`<h6>`。它从 `HTMLElement` 接口继承方法和属性。

## 从 lib.dom.d.ts 中看 HTMLHeadingElement

```ts
interface HTMLHeadingElement extends HTMLElement {
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLHeadingElement: {
    prototype: HTMLHeadingElement;
    new(): HTMLHeadingElement;
};
```

## 参考

1. [HTMLHeadingElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement)