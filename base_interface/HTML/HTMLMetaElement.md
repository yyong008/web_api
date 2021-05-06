# HTMLMetaElement

>该HTMLMetaElement界面包含有关文档的描述性元数据。它继承了HTMLElement接口中描述的所有属性和方法。

## 继承关系

- HTMLMetaElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLMetaElement

```ts
interface HTMLMetaElement extends HTMLElement {
    content: string;
    httpEquiv: string;
    name: string;
    /** @deprecated */
    scheme: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMetaElement: {
    prototype: HTMLMetaElement;
    new(): HTMLMetaElement;
};
```

## 参考

1. [HTMLMetaElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement)
