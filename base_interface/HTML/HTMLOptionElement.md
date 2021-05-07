# HTMLOptionElement

该HTMLOptionElement接口表示`<option>`元素，并继承该接口的所有属性和方法 HTMLElement。

## 继承关系

- HTMLOptionsElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLOptions

```ts
interface HTMLOptionElement extends HTMLElement {
    defaultSelected: boolean;
    disabled: boolean;
    readonly form: HTMLFormElement | null;
    readonly index: number;
    label: string;
    selected: boolean;
    text: string;
    value: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLOptionElement: {
    prototype: HTMLOptionElement;
    new(): HTMLOptionElement;
};
```

## 参考

1. [HTMLOptionElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement)