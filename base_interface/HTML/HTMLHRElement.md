# HTMLHRElement

## 从 lib.dom.d.ts 中看 HTMLHRElement

```ts
interface HTMLHRElement extends HTMLElement {
    /** @deprecated */
    align: string;
    /** @deprecated */
    color: string;
    /** @deprecated */
    noShade: boolean;
    /** @deprecated */
    size: string;
    /** @deprecated */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLHRElement: {
    prototype: HTMLHRElement;
    new(): HTMLHRElement;
};
```

## 参考

1. [HTMLHRElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHRElement)