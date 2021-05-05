# HTMLFrameSetElement

>不推荐使用
>该HTMLFrameSetElement接口提供了HTMLElement用于操纵`<frameset>`元素的特殊属性（除了它们还继承的常规接口的属性之外）。

## 继承关系

- HTMLElement
- WindowEventHandlers

## 从 lib.dom.d.ts 中看 HTMLFrameSetElement

```ts
interface HTMLFrameSetElement extends HTMLElement, WindowEventHandlers {
    /** @deprecated */
    cols: string;
    /** @deprecated */
    rows: string;
    addEventListener<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLFrameSetElement: {
    prototype: HTMLFrameSetElement;
    new(): HTMLFrameSetElement;
};
```

## 参考

1. [HTMLFrameSetElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFrameSetElement)
