# PointerEvent

>PointerEvent 界面表示由指针产生的 DOM 事件的状态，例如接触点的几何形状，生成事件的设备类型，施加在接触表面上的压力大小等。
>指针是输入设备（诸如上的触摸使能表面上的鼠标，笔或接触点）的硬件无关的表示。指针可以在诸如屏幕的接触表面上瞄准特定坐标（或一组坐标）
>指针是输入设备（诸如上的触摸使能表面上的鼠标，笔或接触点）的硬件无关的表示。指针可以在诸如屏幕的接触表面上瞄准特定坐标（或一组坐标）

## 简单示例

```ts
let event = new PointerEvent(type, PointerEventInit);
```

## 从 lib.dom.d.ts 中看 PointerEvent

```ts
interface PointerEvent extends MouseEvent {
    readonly height: number;
    readonly isPrimary: boolean;
    readonly pointerId: number;
    readonly pointerType: string;
    readonly pressure: number;
    readonly tangentialPressure: number;
    readonly tiltX: number;
    readonly tiltY: number;
    readonly twist: number;
    readonly width: number;
    getCoalescedEvents(): PointerEvent[];
    getPredictedEvents(): PointerEvent[];
}

declare var PointerEvent: {
    prototype: PointerEvent;
    new(type: string, eventInitDict?: PointerEventInit): PointerEvent;
};
```

## 参考

1. [PointerEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent)
