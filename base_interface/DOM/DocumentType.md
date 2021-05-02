# DocumentType

## 继承关系

- Node
- ChildNode

## 从 lib.dom.d.ts 中查看 DocumentType

```ts
interface DocumentType extends Node, ChildNode {
    readonly name: string;
    readonly ownerDocument: Document;
    readonly publicId: string;
    readonly systemId: string;
}

declare var DocumentType: {
    prototype: DocumentType;
    new(): DocumentType;
};
```

## 参考

1. https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts