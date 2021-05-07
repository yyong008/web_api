# HTMLTableSelectionElement

>HTMLTableSectionElement 接口提供了特殊的属性和方法（除了 `HTMLElement` 接口以外，还可以通过继承使用该方法），用于处理 `HTML` 表格中各节（即页眉，页脚和正文）的布局和表示。

## 继承关系

- HTMLTableSectionElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLTableSectionElement

```ts
interface HTMLTableSectionElement extends HTMLElement {
    /** @deprecated */
    align: string;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    readonly rows: HTMLCollectionOf<HTMLTableRowElement>;
    /** @deprecated */
    vAlign: string;
    deleteRow(index: number): void;
    insertRow(index?: number): HTMLTableRowElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableSectionElement: {
    prototype: HTMLTableSectionElement;
    new(): HTMLTableSectionElement;
};
```

## 参考

1. [HTMLTableSectionElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
