# FocusEvent

>FocusEvent() 构造函数返回一个新创建的 `FocusEvent` 一个可选的对象 `EventTarget`。当事件同时具有源和目的地时，`relatedTarget` 必须将该值设置为另一个目标。

## 继承关系

- FocusEvent
- UIEvent
- Event

## 基本用法

```ts
var focusEvent = new FocusEvent(typeArg[, focusEventInit]);
```

## 从 lib.dom.d.ts 中看 dom

```ts
interface FocusEvent extends UIEvent {
    readonly relatedTarget: EventTarget | null;
}

declare var FocusEvent: {
    prototype: FocusEvent;
    new(type: string, eventInitDict?: FocusEventInit): FocusEvent;
};
```

## 参考

1. [FocusEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent)
