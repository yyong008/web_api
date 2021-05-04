# XMLDocument

该的XMLDocument接口表示的XML文档。它继承自泛型Document，并且不向其添加任何特定的方法或属性：尽管如此，两种算法对两种类型的文档的行为有所不同。

## 继承关系

1. XMLDocument
2. Document
3. Node
4. EventTarget

## 从 lib.dom.d.ts 中看 XMLDocument 

```ts
interface XMLDocument extends Document {
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLDocument: {
    prototype: XMLDocument;
    new(): XMLDocument;
};
```

## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/XMLDocument
