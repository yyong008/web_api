# CloseEvent

>CloseEvent()构造函数创建一个新的 CloseEvent。

## 从 lib.dom.d.ts 中看 CloseEvent

```ts
interface CloseEvent extends Event {
    readonly code: number;
    readonly reason: string;
    readonly wasClean: boolean;
}

declare var CloseEvent: {
    prototype: CloseEvent;
    new(type: string, eventInitDict?: CloseEventInit): CloseEvent;
};
```

## 简单的示例

```ts
var event = new CloseEvent(typeArg, closeEventInit);
```

- typeArg
- closeEventInit
  - wasClean
  - code
  - reason

## 参考

1. [CloseEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent)
