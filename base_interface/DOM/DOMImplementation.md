# DOMImplementation

## 继承关系

无

## 从 lib.dom.d.ts 中看 DOMImplementation

```ts
interface DOMImplementation {
    createDocument(namespace: string | null, qualifiedName: string | null, doctype?: DocumentType | null): XMLDocument;
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
    createHTMLDocument(title?: string): Document;
    /** @deprecated */
    hasFeature(...args: any[]): true;
}

declare var DOMImplementation: {
    prototype: DOMImplementation;
    new(): DOMImplementation;
};
```

## 参考

1. https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts
