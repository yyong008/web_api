# HTLMFrameElement

## 从 lib.dom.d.ts 中看 HTMLFrameElement

```ts
interface HTMLFrameElement extends HTMLElement {
    /** @deprecated */
    readonly contentDocument: Document | null;
    /** @deprecated */
    readonly contentWindow: WindowProxy | null;
    /** @deprecated */
    frameBorder: string;
    /** @deprecated */
    longDesc: string;
    /** @deprecated */
    marginHeight: string;
    /** @deprecated */
    marginWidth: string;
    /** @deprecated */
    name: string;
    /** @deprecated */
    noResize: boolean;
    /** @deprecated */
    scrolling: string;
    /** @deprecated */
    src: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLFrameElement: {
    prototype: HTMLFrameElement;
    new(): HTMLFrameElement;
};
```

## 参考
