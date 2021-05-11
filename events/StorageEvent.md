# StorageEvent

当AStorageEvent可以访问的存储区域在另一个文档的上下文中更改时，A将发送到窗口。

## 简单示例

```ts
void initStorageEvent(
  in DOMString type,
  in boolean canBubble,
  in boolean cancelable,
  in DOMString key,
  in DOMString oldValue,
  in DOMString newValue,
  in USVString url,
  in Storage storageArea
);
```

## 从 lib.dom.d.ts 中看 StorageEvent

```ts
interface StorageEvent extends Event {
    readonly key: string | null;
    readonly newValue: string | null;
    readonly oldValue: string | null;
    readonly storageArea: Storage | null;
    readonly url: string;
}

declare var StorageEvent: {
    prototype: StorageEvent;
    new(type: string, eventInitDict?: StorageEventInit): StorageEvent;
};
```

## 参考

1. [StorageEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent)
