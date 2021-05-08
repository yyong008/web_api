# FileList

>这种类型的对象由filesHTML `<input>` 元素的属性返回。这使您可以访问使用 `<input type="file">` 元素选择的文件列表。使用拖放API时，它还用于拖放到Web内容中的文件列表。DataTransfer 有关此用法的详细信息，请参见对象。

## 从 lib.dom.d.ts 和 lib.dom.iterable.d.ts 中看 FileList

```ts
interface FileList {
    readonly length: number;
    item(index: number): File | null;
    [index: number]: File;
}

declare var FileList: {
    prototype: FileList;
    new(): FileList;
};

interface FileList {
    [Symbol.iterator](): IterableIterator<File>;
}
```

## 一个简单的 FileList 示例

```tsx
<input type="file" multiple />

let file = document.getElementByTagName("input")[0].file[0]
let files = document.getElementByTagName("input").files;

// 遍历所有的文件

for (let i = 0, i < files.length; i++) {
    file = files.item(i);
    file = files[i];
    console.log(file.name);
}
```

## 参考

1. [FileList MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
