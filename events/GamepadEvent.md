# GamepadEvent

>Gamepad API的GamepadEvent接口包含对连接到系统的游戏板的引用，这是对游戏板事件的响应Window.gamepadconnected并被Window.gamepaddisconnected触发。

## 简单示例

```ts
var gamepadEvent = new GamepadEvent(typeArg, options)
```

## 从 lib.dom.d.ts 中看 GamepadEvent

```ts
interface GamepadEvent extends Event {
    readonly gamepad: Gamepad;
}

declare var GamepadEvent: {
    prototype: GamepadEvent;
    new(type: string, eventInitDict: GamepadEventInit): GamepadEvent;
};
```

## 参考

1. [GamepadEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent)
