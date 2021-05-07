# HTMLObjectElement

## 继承关系

- HTMLObjectElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLObjectElement

```ts
interface HTMLObjectElement extends HTMLElement {
    /** @deprecated */
    align: string;
    /** @deprecated */
    archive: string;
    /** @deprecated */
    border: string;
    /** @deprecated */
    code: string;
    /** @deprecated */
    codeBase: string;
    /** @deprecated */
    codeType: string;
    readonly contentDocument: Document | null;
    readonly contentWindow: WindowProxy | null;
    data: string;
    /** @deprecated */
    declare: boolean;
    readonly form: HTMLFormElement | null;
    height: string;
    /** @deprecated */
    hspace: number;
    name: string;
    /** @deprecated */
    standby: string;
    type: string;
    useMap: string;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    /** @deprecated */
    vspace: number;
    width: string;
    readonly willValidate: boolean;
    checkValidity(): boolean;
    getSVGDocument(): Document | null;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLObjectElement: {
    prototype: HTMLObjectElement;
    new(): HTMLObjectElement;
};
```

## 参考

1. [HTMLObjectElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement)
