# HTMLSelectElement

## 继承关系

## 从 lib.dom.d.ts 中看  HTMLSelectElement

```ts
interface HTMLSelectElement extends HTMLElement {
    autocomplete: string;
    disabled: boolean;
    readonly form: HTMLFormElement | null;
    readonly labels: NodeListOf<HTMLLabelElement>;
    length: number;
    multiple: boolean;
    name: string;
    readonly options: HTMLOptionsCollection;
    required: boolean;
    selectedIndex: number;
    readonly selectedOptions: HTMLCollectionOf<HTMLOptionElement>;
    size: number;
    readonly type: string;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    value: string;
    readonly willValidate: boolean;
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    checkValidity(): boolean;
    item(index: number): Element | null;
    namedItem(name: string): HTMLOptionElement | null;
    remove(): void;
    remove(index: number): void;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [name: number]: HTMLOptionElement | HTMLOptGroupElement;
}

declare var HTMLSelectElement: {
    prototype: HTMLSelectElement;
    new(): HTMLSelectElement;
};
```

## 从 lib.dom.iterable.d.ts 中看 HTMLScriptElement

```ts
interface HTMLSelectElement {
    [Symbol.iterator](): IterableIterator<Element>;
}
```

## 参考

1. [HTMLSelectElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement)
