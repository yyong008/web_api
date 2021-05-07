# HTMLStyleElement

HTMLStyleElement接口表示`<style>`元素。它继承属性和方法来自 HTMLElement，并实现了 LinkStyle。

## 继承关系

- HTMLStyleElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLStyleElement

```ts
interface HTMLStyleElement extends HTMLElement, LinkStyle {
    media: string;
    /** @deprecated */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLStyleElement: {
    prototype: HTMLStyleElement;
    new(): HTMLStyleElement;
};
```

## 参考

1. [HTMLStyleElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement)
