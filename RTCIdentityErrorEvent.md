# RTCIdentityErrorEvent

废弃使用

>RTCIdentityErrorEvent接口表示与身份提供者（idP）相关的错误。这通常是为 RTCPeerConnection。使用此类型发送了两个事件：idpassertionerror 和 idpvalidationerror。

## 一个实际的例子

```ts
pc.onidpassertionerror = function( ev ) {
    alert("The idp named '" +
            ev.idp +
            "' encountered an error " +
            "while generating an assertion.");
    }
```

## 参考

1. [RTCIdentityErrorEvent](https://developer.mozilla.org/en-US/docs/Web/API/RTCIdentityErrorEvent)