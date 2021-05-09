# IDBVersionChangeEvent

>IDBVersionChangeEvent该界面是IndexedDB API表示该数据库的版本已经改变，作为一个结果IDBOpenDBRequest.onupgradeneeded事件处理函数。

## 基础用法

```ts
var idbVersionChangeEvent = new IDBVersionChangeEvent();
```

## 从 lib.dom.d.ts 中看 IDBVersionChangeEvent

```ts
interface IDBVersionChangeEvent extends Event {
    readonly newVersion: number | null;
    readonly oldVersion: number;
}

declare var IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    new(type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent;
};
```

## 参考

1. [IDBVersionChangeEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent)