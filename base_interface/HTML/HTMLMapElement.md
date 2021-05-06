# HTMLMapElement

>该HTMLMapElement接口提供了特殊的属性和方法（除了常规对象HTMLElement接口所具有的属性和方法之外，还可以通过继承来使用它）来操纵地图元素的布局和表示。

## 继承关系

- HTMLMapElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLMapElement

```ts
interface HTMLMapElement extends HTMLElement {
    readonly areas: HTMLCollection;
    name: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMapElement: {
    prototype: HTMLMapElement;
    new(): HTMLMapElement;
};
```

## 参考

1. [HTMLMapElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement)
