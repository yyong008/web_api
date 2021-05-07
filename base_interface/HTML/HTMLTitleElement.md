# HTMLTitleElement

>HTMLTitleElement界面包含文档的标题。该元素继承了 `HTMLElement` 接口的所有属性和方法。

## 继承关系

- HTMLTitleElement
- HTMLElement
- Element
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLTitleElement

```ts
interface HTMLTitleElement extends HTMLElement {
    text: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTitleElement: {
    prototype: HTMLTitleElement;
    new(): HTMLTitleElement;
};
```

## 参考

1. [HTMLTitleElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTitleElement)
