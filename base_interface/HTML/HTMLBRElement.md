# HTMLBRElement

HTMLBRElement 接口代表一个 HTML 换行元素 (`<br>`)，它从 HTMLElement 继承。

## 继承关系

- HTMLBRElement
- HTMLElement
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLBRElement

```ts
interface HTMLBRElement extends HTMLElement {
    /** @deprecated */
    clear: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLBRElement: {
    prototype: HTMLBRElement;
    new(): HTMLBRElement;
};
```

## 参考

1.[HTMLBRElement MDN web docs](https://developer.cdn.mozilla.net/zh-CN/docs/Web/API/HTMLBRElement)
