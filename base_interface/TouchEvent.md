# TouchEvent

## 继承关系

- TouchEvent
- UIEvent
- Event

## 基本示例

```ts
var event = new TouchEvent(arg, init)
```

## 从 lib.dom.d.ts 中看 TouchEvent

```ts
interface TouchEvent extends UIEvent {
    readonly altKey: boolean;
    readonly changedTouches: TouchList;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
    readonly shiftKey: boolean;
    readonly targetTouches: TouchList;
    readonly touches: TouchList;
}

declare var TouchEvent: {
    prototype: TouchEvent;
    new(type: string, eventInitDict?: TouchEventInit): TouchEvent;
};
```

## 参考

1. https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
