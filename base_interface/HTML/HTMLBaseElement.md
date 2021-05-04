# HTMLBaseElement

>HTMLBaseElement 接口包含一份HTML文件的基础 URI设定，该对象继承了所有 HTMLElement 接口中定义的方法与属性。

## 从 lib.dom.d.ts 中看 HTMLBaseElement

```ts
interface HTMLBaseElement extends HTMLElement {
    href: string;
    target: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLBaseElement: {
    prototype: HTMLBaseElement;
    new(): HTMLBaseElement;
};
```

## 参考

1. [MDN web docs HTMLBaseElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLBaseElement)