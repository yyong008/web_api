# TouchEvent

>TouchEvent接口表示UIEvent其被发送时与触敏表面接触的变化的状态。例如，该表面可以是触摸屏或触控板。该事件可以描述与屏幕的一个或多个接触点，并且包括用于检测运动，接触点的添加和移除等的支持。
>触摸由Touch对象表示；每次触摸都由位置，大小和形状，压力大小以及目标元素来描述。触摸列表由TouchList对象表示。

## 继承关系

- TouchEvent
- UIEvent
- Event

## 构建函数

```ts
let event = new TouchEvent(typeArg, touchEventInit);
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

1. [TouchEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent)
