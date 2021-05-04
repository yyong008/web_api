# HTMLDataElement

>该HTMLDataElement接口提供了HTMLElement用于操作`<data>`元素的特殊属性（除了常规接口以外，还可以通过继承使用它）。

## 从 lib.dom.d.ts 中看 HTMLDataElement

```ts
interface HTMLDataElement extends HTMLElement {
    value: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLDataElement: {
    prototype: HTMLDataElement;
    new(): HTMLDataElement;
};
```

## 参考

1. [HTMLDataElement Web docs](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLDataElement)
