# HTMLProgressElement

>HTMLProgressElement接口提供了特殊的属性和方法（除了常规 `HTMLElement` 接口之外，还可以通过继承来使用它）来操纵 `<progress>` 元素的布局和表示。

## 继承关系

- HTMLProgressElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLProgressElement

```ts
interface HTMLProgressElement extends HTMLElement {
    readonly labels: NodeListOf<HTMLLabelElement>;
    max: number;
    readonly position: number;
    value: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLProgressElement: {
    prototype: HTMLProgressElement;
    new(): HTMLProgressElement;
};
```

## 参考

1. [HTMLProgressElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement)
