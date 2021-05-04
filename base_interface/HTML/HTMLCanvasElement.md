# HTMLCanvasElement

>HTMLCanvasElement接口提供用于操纵`<canvas>`元素的布局和表示的属性和方法。 HTMLCanvasElement接口还继承了HTMLElement接口的属性和方法。

## HTMLCanvasElement 继承关系

- HTMLCanvasElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLCanvasElement

```ts
interface HTMLCanvasElement extends HTMLElement {
    height: number;
    width: number;
    getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings): CanvasRenderingContext2D | null;
    getContext(contextId: "bitmaprenderer", options?: ImageBitmapRenderingContextSettings): ImageBitmapRenderingContext | null;
    getContext(contextId: "webgl", options?: WebGLContextAttributes): WebGLRenderingContext | null;
    getContext(contextId: "webgl2", options?: WebGLContextAttributes): WebGL2RenderingContext | null;
    getContext(contextId: string, options?: any): RenderingContext | null;
    toBlob(callback: BlobCallback, type?: string, quality?: any): void;
    toDataURL(type?: string, quality?: any): string;
    transferControlToOffscreen(): OffscreenCanvas;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLCanvasElement: {
    prototype: HTMLCanvasElement;
    new(): HTMLCanvasElement;
};
```

## 参考

1. [HTMLCanvasElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement)
