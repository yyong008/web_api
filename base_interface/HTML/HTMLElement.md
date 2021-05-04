# HTMLElement

>HTMLElement 接口表示所有的 HTML 元素。一些HTML元素直接实现了HTMLElement接口，其它的间接实现HTMLElement接口.

## 继承关系

- Element
- DocumentAndElementEventHandlers
- ElementCSSInlineStyle
- ElementCSSInlineStyle
- ElementContentEditable
- GlobalEventHandlers
- HTMLOrSVGElement

## 从 lib.dom.d.ts 中看 HTMLElement

```ts
interface HTMLElement extends Element, DocumentAndElementEventHandlers, ElementCSSInlineStyle, ElementCSSInlineStyle, ElementContentEditable, GlobalEventHandlers, HTMLOrSVGElement {
    accessKey: string;
    readonly accessKeyLabel: string;
    autocapitalize: string;
    dir: string;
    draggable: boolean;
    hidden: boolean;
    innerText: string;
    lang: string;
    readonly offsetHeight: number;
    readonly offsetLeft: number;
    readonly offsetParent: Element | null;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    spellcheck: boolean;
    title: string;
    translate: boolean;
    click(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLElement: {
    prototype: HTMLElement;
    new(): HTMLElement;
};
```

## 参考

1. [MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement)