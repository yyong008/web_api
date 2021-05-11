# RTCDataChannelEvent

RTCDataChannelEvent() 构造函数返回一个新的 RTCDataChannelEvent 对象，它代表一个 datachannel 事件。这些事件 RTCPeerConnection 在其远程对等方要求打开 RTCDataChannel 两个对等方之间时发送给an 。

## 构造函数

```ts
let event = new RTCDataChannelEvent(type, rtcDataChannelEventInit);
```

## 从 lib.dom.d.ts 中看 RTCDataChannelEvent

```ts
interface RTCDataChannelEvent extends Event {
    readonly channel: RTCDataChannel;
}

declare var RTCDataChannelEvent: {
    prototype: RTCDataChannelEvent;
    new(type: string, eventInitDict: RTCDataChannelEventInit): RTCDataChannelEvent;
};
```

## 参考

1. [RTCDataChannelEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannelEvent)
