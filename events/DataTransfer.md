# DataTransfer

>DataTransfer对象用于保存在拖放操作期间要拖动的数据。它可以保存一个或多个数据项，每种一种或多种数据类型。

## 简单用法

```ts
var dataTrans = new DataTransfer()
```

## 从 lib.dom.d.ts 中看 DataTransfer

```ts
interface DataTransfer {
    dropEffect: "none" | "copy" | "link" | "move";
    effectAllowed: "none" | "copy" | "copyLink" | "copyMove" | "link" | "linkMove" | "move" | "all" | "uninitialized";
    readonly files: FileList;
    readonly items: DataTransferItemList;
    readonly types: ReadonlyArray<string>;
    clearData(format?: string): void;
    getData(format: string): string;
    setData(format: string, data: string): void;
    setDragImage(image: Element, x: number, y: number): void;
}

declare var DataTransfer: {
    prototype: DataTransfer;
    new(): DataTransfer;
};
```

## 参考

1. [DataTransfer MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)