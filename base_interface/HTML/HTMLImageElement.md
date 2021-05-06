# HTMLImageElement

>该HTMLImageElement接口表示一个HTML`<img>`元素，提供用于处理图像元素的属性和方法。

## 依赖关系

- HTMLImageElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLImageElement

```ts
interface HTMLImageElement extends HTMLElement {
    /** @deprecated */
    align: string;
    alt: string;
    /** @deprecated */
    border: string;
    readonly complete: boolean;
    crossOrigin: string | null;
    readonly currentSrc: string;
    decoding: "async" | "sync" | "auto";
    height: number;
    /** @deprecated */
    hspace: number;
    isMap: boolean;
    loading: string;
    /** @deprecated */
    longDesc: string;
    /** @deprecated */
    lowsrc: string;
    /** @deprecated */
    name: string;
    readonly naturalHeight: number;
    readonly naturalWidth: number;
    referrerPolicy: string;
    sizes: string;
    src: string;
    srcset: string;
    useMap: string;
    /** @deprecated */
    vspace: number;
    width: number;
    readonly x: number;
    readonly y: number;
    decode(): Promise<void>;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
};

declare var Image: {
    new(width?: number, height?: number): HTMLImageElement;
};
```

## 参考

1. [HTMLImageElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)