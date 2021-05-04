# Worker

Worker 接口是 Web Workers API 的一部分，指的是一种可由脚本创建的后台任务，任务执行中可以向其创建者收发信息。要创建一个 Worker ，只须调用 Worker(URL) 构造函数，函数参数 `URL` 为指定的脚本。

Worker 也可以创建新的 Worker，当然，所有 Worker 必须与其创建者同源（注意：Blink暂时不支持嵌套 Worker）。 

需要注意的是，不是所有函数和构造函数(或者说…类)都可以在 Worker 中使用。具体参考页面 Worker 所支持的函数和类。Worker 可以使用 XMLHttpRequest 发送请求，但是请求的  responseXML 与 channel 两个属性值始终返回 null （fetch 仍可正常使用，没有类似的限制）。 

## 从 lib.dom.d.ts 中看 Worker

```ts
interface Worker extends EventTarget, AbstractWorker {
    onmessage: ((this: Worker, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: Worker, ev: MessageEvent) => any) | null;
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: PostMessageOptions): void;
    terminate(): void;
    addEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Worker: {
    prototype: Worker;
    new(stringUrl: string | URL, options?: WorkerOptions): Worker;
};
```

## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/Worker
·