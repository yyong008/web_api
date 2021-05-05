# HTMLFieldSetElement

`DOM fieldset` 元素公开 `HTMLFieldSetElement`   （`HTML 4 HTMLFieldSetElement`）接口，该接口提供特殊的属性和方法（除了常规元素对象接口之外，它们还可以通过继承提供给他们）以操纵字段集元素的布局和表示。

## 继承关系

- HTMLElement

## 从 `lib.dom.d.ts` 中看 `HTMLFieldSetElement`

```ts
interface HTMLFieldSetElement extends HTMLElement {
    disabled: boolean;
    readonly elements: HTMLCollection;
    readonly form: HTMLFormElement | null;
    name: string;
    readonly type: string;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    readonly willValidate: boolean;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLFieldSetElement: {
    prototype: HTMLFieldSetElement;
    new(): HTMLFieldSetElement;
};
```

## 参考

1. [HTMLFieldSetElement MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLFieldSetElement)
