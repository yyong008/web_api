# OverconstrainedError

>在OverconstrainedError该界面媒体捕获和流API表示设置的当前所需的功能，MediaStreamTrack目前还不能得到满足。在MediaStreamTrack上引发此事件时，它将被静音，直到可以建立当前约束或应用了可满足的约束为止。

## 基本示例

```ts
var OverconstrainedError = new OverconstrainedError()
```

## 从 lib.dom.d.ts 中看 OverconstrainedError 

```ts
interface OverconstrainedError extends Error {
    constraint: string;
}

declare var OverconstrainedError: {
    prototype: OverconstrainedError;
    new(): OverconstrainedError;
};
```

## 参考

1. [OverconstrainedError](https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError)