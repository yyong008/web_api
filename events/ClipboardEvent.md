# ClipboardEvent

>该ClipboardEvent接口代表提供与剪贴板，那就是修改信息的事件 `cut`，`copy` 和 `paste` 事件。

## 简单示例

```ts
var clipboardEvent = new ClipboardEvent(type[, options]);
```

## 从 lib.dom.d.ts 中看 ClipboardEvent

```ts
interface ClipboardEvent extends Event {
    readonly clipboardData: DataTransfer | null;
}

declare var ClipboardEvent: {
    prototype: ClipboardEvent;
    new(type: string, eventInitDict?: ClipboardEventInit): ClipboardEvent;
};
```

### type 类型

- copy
- cut
- paste

### ClipboardEvent options

- clipboardData：`DataTransfer` 包含剪贴板事件相关数据的。
- dataType： DOMString 包含 `data` 参数中包含的数据的MIME类型。
- data： `DOMString` 包含剪贴板事件相关数据的。

## 参考

1. [ClipboardEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent)
