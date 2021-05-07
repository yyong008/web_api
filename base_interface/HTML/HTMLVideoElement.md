# HTMLVideoElement

>该HTMLVideoElement界面提供了用于处理视频对象的特殊属性和方法。它还继承了 `HTMLMediaElement` 和的属性和方法 `HTMLElement`。
>受支持的媒体格式列表因浏览器而异。您应该以所有相关浏览器都支持的单一格式提供视频，或者以足够不同的格式提供多个视频源，以涵盖您需要支持的所有浏览器。

## 继承关系

- HTMLVideoElement
- HTMLMediaElement
- HTMLElement
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLVideoElement

```ts
interface HTMLVideoElement extends HTMLMediaElement {
    height: number;
    playsInline: boolean;
    poster: string;
    readonly videoHeight: number;
    readonly videoWidth: number;
    width: number;
    getVideoPlaybackQuality(): VideoPlaybackQuality;
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLVideoElement: {
    prototype: HTMLVideoElement;
    new(): HTMLVideoElement;
};
```

## 参考

1. [HTMLVideoElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)
