# HTMLFormElement

## 相关接口

- HTMLFormControlsCollection

## 从 lib.dom.d.ts 中看 HTMLFormElement

```ts
interface HTMLFormControlsCollection extends HTMLCollectionBase {
    namedItem(name: string): RadioNodeList | Element | null;
}

declare var HTMLFormControlsCollection: {
    prototype: HTMLFormControlsCollection;
    new(): HTMLFormControlsCollection;
};

interface HTMLFormElement extends HTMLElement {
    acceptCharset: string;
    action: string;
    autocomplete: string;
    readonly elements: HTMLFormControlsCollection;
    encoding: string;
    enctype: string;
    readonly length: number;
    method: string;
    name: string;
    noValidate: boolean;
    target: string;
    checkValidity(): boolean;
    reportValidity(): boolean;
    reset(): void;
        submit(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: Element;
    [name: string]: any;
}

declare var HTMLFormElement: {
    prototype: HTMLFormElement;
    new(): HTMLFormElement;
};
```

## 参考

1. [HTMLFormElement MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLFormElement)
