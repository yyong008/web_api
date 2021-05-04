# HTMLButtonElement

>HTMLButtonElement 接口提供操作button元素 （除了 `<button>` 对象，这个接口对继承了该对象的元素也有效）的属性和方法。

## 继承关系

- HTMLButtonElement

## 从 lib.dom.d.ts 中看 HTMLButtonElement

```ts
interface HTMLButtonElement extends HTMLElement {
    disabled: boolean;
    readonly form: HTMLFormElement | null;
    formAction: string;
    formEnctype: string;
    formMethod: string;
    formNoValidate: boolean;
    formTarget: string;
    readonly labels: NodeListOf<HTMLLabelElement>;
    name: string;
    type: string;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    value: string;
    readonly willValidate: boolean;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLButtonElement: {
    prototype: HTMLButtonElement;
    new(): HTMLButtonElement;
};
```

## 参考

1. [HTMLButtonElement MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLButtonElement)
