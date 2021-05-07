# HTMLParamElement

>HTMLParamElement 接口提供了HTMLElement用于操纵 `<param>` 元素的特殊属性（超出了它继承的常规对象接口的属性），代表了一对键和一个用作 `<object>` 元素参数的值。

## 继承关系

- HTMLParamElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLParamElement

```ts
interface HTMLParamElement extends HTMLElement {
    name: string;
    /** @deprecated */
    type: string;
    value: string;
    /** @deprecated */
    valueType: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLParamElement: {
    prototype: HTMLParamElement;
    new(): HTMLParamElement;
};
```

## 参考

1. [HTMLParamElement MDC web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParamElement)
