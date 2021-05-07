# HTMLTableRowElement

>HTMLTableRowElement 接口提供了特殊的属性和方法（除了 `HTMLElement` 接口以外，还可以通过继承使用它）来操纵HTML表格中行的布局和表示。

## 继承关系

- HTMLTableRowElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLTableRowElement

```ts
interface HTMLTableRowElement extends HTMLElement {
    /** @deprecated */
    align: string;
    /** @deprecated */
    bgColor: string;
    readonly cells: HTMLCollectionOf<HTMLTableDataCellElement | HTMLTableHeaderCellElement>;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    readonly rowIndex: number;
    readonly sectionRowIndex: number;
    /** @deprecated */
    vAlign: string;
    deleteCell(index: number): void;
    insertCell(index?: number): HTMLTableDataCellElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableRowElement: {
    prototype: HTMLTableRowElement;
    new(): HTMLTableRowElement;
};

```

## 参考

1. [HTMLTableRowElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement)
