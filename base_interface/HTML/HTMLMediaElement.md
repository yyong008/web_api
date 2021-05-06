# HTMLMediaElement

>该HTMLMediaElement接口增加HTMLElement了支持与音频和视频通用的基本媒体相关功能所需的属性和方法。在HTMLVideoElement和HTMLAudioElement元素都继承这个接口。

## 依赖关系

- HTMLMediaElement
- HTMLElement
- Element
- Node
- EventTarget

## 从 lib.dom.d.ts 中看 HTMLMediaElement

```ts
interface HTMLMediaElement extends HTMLElement {
    autoplay: boolean;
    readonly buffered: TimeRanges;
    controls: boolean;
    crossOrigin: string | null;
    readonly currentSrc: string;
    currentTime: number;
    defaultMuted: boolean;
    defaultPlaybackRate: number;
    readonly duration: number;
    readonly ended: boolean;
    readonly error: MediaError | null;
    loop: boolean;
    readonly mediaKeys: MediaKeys | null;
    muted: boolean;
    readonly networkState: number;
    onencrypted: ((this: HTMLMediaElement, ev: MediaEncryptedEvent) => any) | null;
    onwaitingforkey: ((this: HTMLMediaElement, ev: Event) => any) | null;
    readonly paused: boolean;
    playbackRate: number;
    readonly played: TimeRanges;
    preload: string;
    readonly readyState: number;
    readonly seekable: TimeRanges;
    readonly seeking: boolean;
    src: string;
    srcObject: MediaProvider | null;
    readonly textTracks: TextTrackList;
    volume: number;
    addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack;
    canPlayType(type: string): CanPlayTypeResult;
    fastSeek(time: number): void;
    load(): void;
    pause(): void;
    play(): Promise<void>;
    setMediaKeys(mediaKeys: MediaKeys | null): Promise<void>;
    readonly HAVE_CURRENT_DATA: number;
    readonly HAVE_ENOUGH_DATA: number;
    readonly HAVE_FUTURE_DATA: number;
    readonly HAVE_METADATA: number;
    readonly HAVE_NOTHING: number;
    readonly NETWORK_EMPTY: number;
    readonly NETWORK_IDLE: number;
    readonly NETWORK_LOADING: number;
    readonly NETWORK_NO_SOURCE: number;
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMediaElement: {
    prototype: HTMLMediaElement;
    new(): HTMLMediaElement;
    readonly HAVE_CURRENT_DATA: number;
    readonly HAVE_ENOUGH_DATA: number;
    readonly HAVE_FUTURE_DATA: number;
    readonly HAVE_METADATA: number;
    readonly HAVE_NOTHING: number;
    readonly NETWORK_EMPTY: number;
    readonly NETWORK_IDLE: number;
    readonly NETWORK_LOADING: number;
    readonly NETWORK_NO_SOURCE: number;
};
```

## 参考

1. [HTMLMediaElement MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)
