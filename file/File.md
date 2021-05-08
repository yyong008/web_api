# File

File 是特殊类型的 Blob 对象。允许 JavaScript 访问 File 中的内容。

## 继承关系

- File
- Blob

## 从 lib.dom.d.ts 中看 File

```ts
interface File extends Blob {
    readonly lastModified: number;
    readonly name: string;
}

declare var File: {
    prototype: File;
    new(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
};
```

filtBits:

- ArrayBuffer
- ArrayBufferView
- Blob
- DOMString
- Array
- 或者上面的组合

## 示例

```ts
var myFile = new File(bits, 'name', 'options');
```

## 参考

1. [File MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/File/File)
