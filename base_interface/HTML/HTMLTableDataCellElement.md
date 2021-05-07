# HTMLTableDataCellElement

>HTMLTableCellElement接口提供了特殊的属性和方法（除了常规`HTMLElement` 接口之外，它还可以通过继承来使用），用于处理HTML文档中表单元格（标题或数据单元格）的布局和表示。

## 继承关系

- HTMLTableDataCellElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLTableDataCellElement

```ts
interface HTMLTableDataCellElement extends HTMLTableCellElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableDataCellElement: {
    prototype: HTMLTableDataCellElement;
    new(): HTMLTableDataCellElement;
};
```

## 参考

1. [HTMLTableCellElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement)
