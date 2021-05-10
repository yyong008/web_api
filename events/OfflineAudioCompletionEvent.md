# OfflineAudioCompletionEvent

>所述网络音频API OfflineAudioCompletionEvent接口表示时的处理中发生的事件OfflineAudioContext被终止。该complete事件实现此接口。

## 简单示例

```ts
var offlineAudioCompletionEvent = new OfflineAudioCompletionEvent(type, init)
```

## 从 lib.dom.d.ts 中看 OfflineAudioCompletionEvent

```ts
interface OfflineAudioCompletionEvent extends Event {
    readonly renderedBuffer: AudioBuffer;
}

declare var OfflineAudioCompletionEvent: {
    prototype: OfflineAudioCompletionEvent;
    new(type: string, eventInitDict: OfflineAudioCompletionEventInit): OfflineAudioCompletionEvent;
};
```

## 参考

1. [OfflineAudioCompletionEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioCompletionEvent)