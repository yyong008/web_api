# MessageEvent

>MessageEvent()构造函数创建一个新的 `MessageEvent` 对象实例

## 基本用法

```ts
var messageEvent = new MessageEvent(type, init);

var myMessage = new MessageEvent('worker', {
  data : 'hello'
});
```

- type
  - DOMString
- init
  - data
  - origin
  - lastEventId
  - source
  - posts

## 从 lib.dom.d.ts 中看 MessageEvent

```ts
interface MessageEvent<T = any> extends Event {
    readonly data: T;
    readonly lastEventId: string;
    readonly origin: string;
    readonly ports: ReadonlyArray<MessagePort>;
    readonly source: MessageEventSource | null;
}

declare var MessageEvent: {
    prototype: MessageEvent;
    new<T>(type: string, eventInitDict?: MessageEventInit<T>): MessageEvent<T>;
};
```

## 参考

1. [MessageEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent)
