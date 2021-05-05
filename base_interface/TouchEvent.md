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

## 触摸穿透

当我们触摸一个弹窗的时候，他可能会出现触摸穿透的现象，为了避免这种现象，我们需要组织浏览器的默认行为：

```js
targetNode.addEventListener("touchstart", function (ev) {
    ev.preventDefault(); // 组织默认行文
})
```

点击穿透也有同样的做法

## 参考

1. https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
