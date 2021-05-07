# HTMLSourceElement

>HTMLSourceElement接口提供了HTMLElement用于操作 `<source>` 元素的特殊属性（除了常规对象接口之外，它还可以通过继承来使用）。

## 继承关系

- HTMLSourceElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLSourceElement

```ts
interface HTMLSourceElement extends HTMLElement {
    media: string;
    sizes: string;
    src: string;
    srcset: string;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLSourceElement: {
    prototype: HTMLSourceElement;
    new(): HTMLSourceElement;
};
```

## 参考

1. [HTMLSourceElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement)
