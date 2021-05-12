# UIEvent

>UIEvent界面表示简单的用户界面事件。

## 继承关系

- UIEvent
- Event

## 基本示例

```ts
let event = new UIEvent(typeArg [, UIEventInit])
```

## 从 lib.dom.d.ts 中看 UIEvent

```ts
interface UIEvent extends Event {
    readonly detail: number;
    readonly view: Window | null;
    /** @deprecated */
    readonly which: number;
}

declare var UIEvent: {
    prototype: UIEvent;
    new(type: string, eventInitDict?: UIEventInit): UIEvent;
};
```

## 参考

1. [UIEvent Constructor MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/UIEvent)