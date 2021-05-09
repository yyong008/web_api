# InputEvent

## 继承关系

- InputEvent
- UIEvent
- Event

## 基础示例

```ts
event = new InputEvent(typeArg, inputEventInit);
```

## 从 lib.dom.d.ts 中看 InputEvent

```ts
interface InputEvent extends UIEvent {
    readonly data: string | null;
    readonly inputType: string;
    readonly isComposing: boolean;
}

declare var InputEvent: {
    prototype: InputEvent;
    new(type: string, eventInitDict?: InputEventInit): InputEvent;
};
```

## 参考

1. [InputEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent)
