# MouseEvent

>MouseEvent界面表示由于用户与定点设备（例如鼠标）交互而发生的事件。使用这个接口常见的事件包括click，dblclick，mouseup，mousedown。
>MouseEvent从...UIEvent衍生而来Event。尽管MouseEvent.initMouseEvent()保留了该方法是为了实现向后兼容，但MouseEvent应使用MouseEvent()构造函数来完成对象的创建。

## 继承关系

- MouseEvent
- UIEvent
- Event

## 简单示例

```ts
let event = new MouseEvent(typeArg, mouseEventInit);
```

- mouseEventInit
  - screenX
  - screenY
  - clientX
  - clientY
  - ctrlKey
  - shiftKey
  - altKey
  - metaKey
  - button

## 从  lib.dom.d.ts 中看 MouseEvent

```ts
interface MouseEvent extends UIEvent {
    readonly altKey: boolean;
    readonly button: number;
    readonly buttons: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
    readonly movementX: number;
    readonly movementY: number;
    readonly offsetX: number;
    readonly offsetY: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly relatedTarget: EventTarget | null;
    readonly screenX: number;
    readonly screenY: number;
    readonly shiftKey: boolean;
    readonly x: number;
    readonly y: number;
    getModifierState(keyArg: string): boolean;
    initMouseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget | null): void;
}

declare var MouseEvent: {
    prototype: MouseEvent;
    new(type: string, eventInitDict?: MouseEventInit): MouseEvent;
};
```

## 参考

1. [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
