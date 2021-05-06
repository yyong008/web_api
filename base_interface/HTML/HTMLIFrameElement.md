# HTMLIFrameElement

## 依赖关系

- HTMLIFrameElement
- HTMLElement
- Element
- Node
- EventTarget 

## 从 lib.dom.d.ts 中思考 HTMLIFrameElement

```ts
interface HTMLIFrameElement extends HTMLElement {
    /** @deprecated */
    align: string;
    allow: string;
    allowFullscreen: boolean;
    allowPaymentRequest: boolean;
    readonly contentDocument: Document | null;
    readonly contentWindow: WindowProxy | null;
    /** @deprecated */
    frameBorder: string;
    height: string;
    /** @deprecated */
    longDesc: string;
    /** @deprecated */
    marginHeight: string;
    /** @deprecated */
    marginWidth: string;
    name: string;
    referrerPolicy: ReferrerPolicy;
    readonly sandbox: DOMTokenList;
    /** @deprecated */
    scrolling: string;
    src: string;
    srcdoc: string;
    width: string;
    getSVGDocument(): Document | null;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLIFrameElement: {
    prototype: HTMLIFrameElement;
    new(): HTMLIFrameElement;
};
```

## 参考

1. [HTMLLIFrameElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement)
