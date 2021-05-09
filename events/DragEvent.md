# DragEvent

>DragEvent界面是DOM event，代表拖放互动。用户通过将指针设备（例如鼠标）放在触摸表面上，然后将指针拖动到新位置（例如另一个DOM元素）来发起拖动。应用程序可以以特定于应用程序的方式自由解释拖放交互。

## 简单示例

```ts
let de = new DragEvent('go', {});
```

## 从 lib.dom.d.ts 中 看 DragEvent

```ts
interface DragEvent extends MouseEvent {
    /**
     * Returns the DataTransfer object for the event.
     */
    readonly dataTransfer: DataTransfer | null;
}

declare var DragEvent: {
    prototype: DragEvent;
    new(type: string, eventInitDict?: DragEventInit): DragEvent;
};
```

## 参考

1. [DragEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent)
2. [DragEvent Constructor MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/DragEvent)
