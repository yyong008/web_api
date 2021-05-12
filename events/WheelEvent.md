# WheelEvent

>WheelEvent界面表示由于用户移动鼠标滚轮或类似输入设备而发生的事件。

## 重要点

不要将 Wheel 与 Scroll 之间发生了混淆

- Wheel 事件不一定派发 Scroll 事件

## 继承关系

- WheelEvent
- MouseEvent
- UIEvent
- Event

## 基本用法

```ts
let wheelEvent = new WheelEvent('your Arg', initData)
```

## 从 lib.dom.d.ts 中看 WheelEvent

```ts
interface WheelEvent extends MouseEvent {
    readonly deltaMode: number;
    readonly deltaX: number;
    readonly deltaY: number;
    readonly deltaZ: number;
    readonly DOM_DELTA_LINE: number;
    readonly DOM_DELTA_PAGE: number;
    readonly DOM_DELTA_PIXEL: number;
}

declare var WheelEvent: {
    prototype: WheelEvent;
    new(type: string, eventInitDict?: WheelEventInit): WheelEvent;
    readonly DOM_DELTA_LINE: number;
    readonly DOM_DELTA_PAGE: number;
    readonly DOM_DELTA_PIXEL: number;
};
```

## 参考

1. [WheelEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent)
