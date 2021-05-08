# Blob

Blob 对象是一个不可变、原始数据的类文件对象。

- 数据类型
  - 文本 text
  - 二进制 binary
  - 可读取流 ReadableStream

## 从 lib.dom.d.ts 中看 Blob

```ts
interface Blob {
    readonly size: number;
    readonly type: string;
    arrayBuffer(): Promise<ArrayBuffer>;
    slice(start?: number, end?: number, contentType?: string): Blob;
    stream(): ReadableStream;
    text(): Promise<string>;
}

declare var Blob: {
    prototype: Blob;
    new(blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
};
```

构造函数中：

- BlobPart
- BlobPropertyBag

```ts
type BlobPart = BufferSource | Blob | string;

interface BlobPropertyBag {
    endings?: EndingType;
    type?: string;
}

type EndingType = "native" | "transparent";
type BufferSource = ArrayBufferView | ArrayBuffer;

interface ArrayBufferView {
    buffer: ArrayBufferLike;
    byteLength: number;
    byteOffset: number;
}

interface ArrayBuffer {
    readonly [Symbol.toStringTag]: string;
}

interface ArrayBufferConstructor {
    readonly prototype: ArrayBuffer;
    new(byteLength: number): ArrayBuffer;
    isView(arg: any): arg is ArrayBufferView;
}
declare var ArrayBuffer: ArrayBufferConstructor;
```

## blob 示例

- JSON

```ts
var myJSON = {hellp: 'JSON'};

var blob = new Blob([JSON.stringify(myJSON, null,2)], {type: 'application/json'})
```

## blob 与 url(数字化 URL)

blob -> url, 可以用在 img.src 上直接访问图片

```ts
// 类型数组
let typedArray = GetTheTypedArraySomeHow()
let blob = new Blob([typeArray.buffer], {type: 'application/-your-suitable-type'});

var url = URL.createObjectURL(blob);
```

## 从 blob 提取数据

```ts
var reader = new FileReader();

reader.addEventListener("loadend", function () {
    // 
})

reader.readAsArrayBuffer(blob);
```

## 与 File 之间的关系

## 参考

1. [Blob MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Blob#using_blobs)
