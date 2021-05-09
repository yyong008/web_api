# HashChangeEvent

## 继承关系

- HashChangeEvent
- Event

## 基础示例

```ts
window.onhashchange = funcRef;
```

## 从 lib.dom.d.ts 中看 HashChangeEvent

```ts
interface HashChangeEvent extends Event {
    readonly newURL: string;
    readonly oldURL: string;
}

declare var HashChangeEvent: {
    prototype: HashChangeEvent;
    new(type: string, eventInitDict?: HashChangeEventInit): HashChangeEvent;
};
```

## 参考

1. [HashChangeEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent)