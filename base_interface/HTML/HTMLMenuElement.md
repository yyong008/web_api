# HTMLMenuElement

>该HTMLMenuElement接口提供了HTMLElement用于操作`<menu>`元素的特殊属性（除了在常规接口上定义的属性之外，它还可以通过继承来使用）。

## 继承关系

- HTMLMenuElement
- HTMLElement
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLMenuElement

```ts
interface HTMLMenuElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMenuElement: {
    prototype: HTMLMenuElement;
    new(): HTMLMenuElement;
};
```

## 参考

1. [HTMLMediaElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)
