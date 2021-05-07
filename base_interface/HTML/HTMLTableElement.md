# HTMLTableElement

>HTMLTableElement接口提供了特殊的属性和方法（除了常规HTMLElement对象接口之外，它还可以通过继承来使用它）来操纵HTML文档中表格的布局和表示。

## 继承关系

- HTMLTableElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLTableElement

```ts
interface HTMLTableElement extends HTMLElement {
    /** @deprecated */
    align: string;
    /** @deprecated */
    bgColor: string;
    /** @deprecated */
    border: string;
    caption: HTMLTableCaptionElement | null;
    /** @deprecated */
    cellPadding: string;
    /** @deprecated */
    cellSpacing: string;
    /** @deprecated */
    frame: string;
    readonly rows: HTMLCollectionOf<HTMLTableRowElement>;
    /** @deprecated */
    rules: string;
    /** @deprecated */
    summary: string;
    readonly tBodies: HTMLCollectionOf<HTMLTableSectionElement>;
    tFoot: HTMLTableSectionElement | null;
    tHead: HTMLTableSectionElement | null;
    /** @deprecated */
    width: string;
    createCaption(): HTMLTableCaptionElement;
    createTBody(): HTMLTableSectionElement;
    createTFoot(): HTMLTableSectionElement;
    createTHead(): HTMLTableSectionElement;
    deleteCaption(): void;
    deleteRow(index: number): void;
    deleteTFoot(): void;
    deleteTHead(): void;
    insertRow(index?: number): HTMLTableRowElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableElement: {
    prototype: HTMLTableElement;
    new(): HTMLTableElement;
};
```

## 参考

1. [HTMLTableElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement)
