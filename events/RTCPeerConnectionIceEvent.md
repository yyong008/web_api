# RTCPeerConnectionIceEvent

>RTCPeerConnectionIceEvent 界面表示与具有目标（通常是）的 ICE 候选者有关的事件 RTCPeerConnection。此类型只有一个事件：icecandidate。

## 基础用法

```ts
var event = new RTCPeerConnectionIceEvent(type, options);
```

## 从 lib.dom.d.ts 中看 RTCPeerConnectionIceEvent 

```ts
interface RTCPeerConnectionIceEvent extends Event {
    readonly candidate: RTCIceCandidate | null;
    readonly url: string | null;
}

declare var RTCPeerConnectionIceEvent: {
    prototype: RTCPeerConnectionIceEvent;
    new(type: string, eventInitDict?: RTCPeerConnectionIceEventInit): RTCPeerConnectionIceEvent;
};
```

## 参考

1. [RTCPeerConnectionIceEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnectionIceEvent)
