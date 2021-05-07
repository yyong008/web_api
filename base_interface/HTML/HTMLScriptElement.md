# HTMLScriptElement

>HTML `<script>` 元素公开了该 HTMLScriptElement 接口，该接口提供了特殊的属性和方法来操纵 `<script>` 元素的行为和执行（继承的HTMLElement接口之外）。
>JavaScript 文件应该以 `application/javascript` MIME类型提供，但是浏览器比较宽松，只有在脚本以图片类型 `（image/*）`，视频类型`（video/*），音频类型（audio/*）` 或脚本提供脚本时，浏览器才会阻止它们`text/csv` 。如果脚本被阻止，则其元素接收一个 `error` 事件；否则，该元素将接收事件。否则，它将接收一个 load 事件。

## 继承关系

- HTMLScriptElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLScriptElement

```ts
interface HTMLScriptElement extends HTMLElement {
    async: boolean;
    /** @deprecated */
    charset: string;
    crossOrigin: string | null;
    defer: boolean;
    /** @deprecated */
    event: string;
    /** @deprecated */
    htmlFor: string;
    integrity: string;
    noModule: boolean;
    referrerPolicy: string;
    src: string;
    text: string;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLScriptElement: {
    prototype: HTMLScriptElement;
    new(): HTMLScriptElement;
};
```

## 参考

1. [HTMLQuoteElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLQuoteElement)