# EventTarget

`EventTarget` 在 DOM 中是核心的构造函数。他可以用来处理事件：

- 接受事件
- 侦听器的实现

注意：存在于 DOM 中，而不存在于 Nodejs 环境中。
## 从 lib.dom.d.ts 中查看 EventTarget

```ts
interface EventTarget {
    addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
    removeEventListener(type: string,  callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}

declare var EventTarget: {
    prototype: EventTarget;
    new(): EventTarget;
}
```


## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget