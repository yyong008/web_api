# TrackEvent

>TrackEvent接口是HTML DOM规范的一部分，用于发生事件，这些事件表示对HTML媒体元素上的一组可用磁道的更改；这些事件是addtrack和removetrack。重要的是不要TrackEvent与该RTCTrackEvent接口混淆，该接口用于属于的轨道RTCPeerConnection。

基于的事件TrackEvent始终发送到媒体轨道列表类型之一：

- 涉及视频轨道事件总是被发送到 VideoTrackList 发现 HTMLMediaElement.videoTracks
- 涉及音轨的事件总是发送到 AudioTrackList 指定的 HTMLMediaElement.audioTracks
- 影响文本轨道的事件被发送到 TextTrackList 表示的对象HTMLMediaElement.textTracks。

## 基本示例

```ts
trackEvent = new TrackEvent(type, eventInfo);
```

## 从 lib.dom.d.ts 中看  TrackEvent

```ts
interface TrackEvent extends Event {
    /**
     * Returns the track object (TextTrack, AudioTrack, or VideoTrack) to which the event relates.
     */
    readonly track: TextTrack | null;
}

declare var TrackEvent: {
    prototype: TrackEvent;
    new(type: string, eventInitDict?: TrackEventInit): TrackEvent;
};
```

## 参考

1. [TrackEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/TrackEvent)
