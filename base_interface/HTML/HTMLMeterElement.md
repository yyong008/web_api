# HTMLMeterElement

>HTML`<meter>`元素公开了HTMLMeterElement接口，该接口提供了特殊的属性和方法（除了HTMLElement对象接口之外，它们还可以通过继承而提供给它们），用于操纵`<meter>`元素的布局和表示。

## 继承关系

- HTMLMeterElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLMeterElement

```ts
interface HTMLMeterElement extends HTMLElement {
    high: number;
    readonly labels: NodeListOf<HTMLLabelElement>;
    low: number;
    max: number;
    min: number;
    optimum: number;
    value: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMeterElement: {
    prototype: HTMLMeterElement;
    new(): HTMLMeterElement;
};
```

## 参考

1. [HTMLMeterElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement)
