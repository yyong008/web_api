# KeyboardEvent

>KeyboardEvent对象描述了用户与键盘的交互；每个事件描述了用户与键盘上的某个键（或键与修饰键的组合）之间的单个交互。事件类型（keydown，，keypress或keyup）标识发生了哪种键盘活动。

## 重要事件类型

- keydown
- keypress
- keyup
- ...

## 继承关系

- KeyboardEvent
- UIEvent
- Event

## 简单示例

```ts
let  event = new KeyboardEvent(typeArg, KeyboardEventInit);
```

- typeArg
  - DOMString
- KeyboardEventInit
  - key
  - code
  - location
  - ctrlKey
  - shiftKey
  - altKey
  - metaKey
  - repeat
  - isComposing
  - charCode
  - keyCode
  - which

## 从 lib.dom.d.ts 中看 KeyboardEvent

```ts
interface KeyboardEvent extends UIEvent {
    readonly altKey: boolean;
    /** @deprecated */
    char: string;
    /** @deprecated */
    readonly charCode: number;
    readonly code: string;
    readonly ctrlKey: boolean;
    readonly isComposing: boolean;
    readonly key: string;
    /** @deprecated */
    readonly keyCode: number;
    readonly location: number;
    readonly metaKey: boolean;
    readonly repeat: boolean;
    readonly shiftKey: boolean;
    getModifierState(keyArg: string): boolean;
    readonly DOM_KEY_LOCATION_LEFT: number;
    readonly DOM_KEY_LOCATION_NUMPAD: number;
    readonly DOM_KEY_LOCATION_RIGHT: number;
    readonly DOM_KEY_LOCATION_STANDARD: number;
}

declare var KeyboardEvent: {
    prototype: KeyboardEvent;
    new(type: string, eventInitDict?: KeyboardEventInit): KeyboardEvent;
    readonly DOM_KEY_LOCATION_LEFT: number;
    readonly DOM_KEY_LOCATION_NUMPAD: number;
    readonly DOM_KEY_LOCATION_RIGHT: number;
    readonly DOM_KEY_LOCATION_STANDARD: number;
};
```

## 参考

1. [KeyboardEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
