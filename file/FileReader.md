# FileReader

>FileReader 对象能读取，Web 应用程序异步存储在用户计算机上的文件（原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。

## 从 lib.dom.d.ts 中 FileReader

```ts
interface FileReader extends EventTarget {
    readonly error: DOMException | null;
    onabort: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onerror: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onloadend: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onloadstart: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onprogress: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    readonly readyState: number;
    readonly result: string | ArrayBuffer | null;
    abort(): void;
    readAsArrayBuffer(blob: Blob): void;
    readAsBinaryString(blob: Blob): void;
    readAsDataURL(blob: Blob): void;
    readAsText(blob: Blob, encoding?: string): void;
    readonly DONE: number;
    readonly EMPTY: number;
    readonly LOADING: number;
    addEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var FileReader: {
    prototype: FileReader;
    new(): FileReader;
    readonly DONE: number;
    readonly EMPTY: number;
    readonly LOADING: number;
};
```

## 简单的示例

```ts
const reader = new FileReader()

function printFile(file) {
    reader.onload = function(evt) {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
}
```

## Files 与 formData 配合上传二进制文件

```ts
const onFileChooiceChange = (e) => {
    const { files } = e.target;

    if (files && files[0]) {
        message.error("Your error tips");
    } else {
        const formData = new FormData();
        formData.append('file', files[0], files[0].name;
        formData.append('other', 'other data');

        // 请求上传，使用 formData shangchuan 
        request('/your request url', {
            methods: 'POST',
            body: formData,
        }).then((res) => {
            // 上传的结果处理
        })
    }
}
```

## 参考

1. [FileReader MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
