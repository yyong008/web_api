# DocumentFragment

## 继承关系

- Node
- NonElementParentNode
- ParentNode

## 从 lib.dom.d.ts 看 DocumentFragment 

```ts
interface DocumentFragment extends Node, NonElementParentNode, ParentNode {
    readonly ownerDocument: Document;
    getElementById(elementId: string): HTMLElement | null;
}

declare var DocumentFragment: {
    prototype: DocumentFragment;
    new(): DocumentFragment;
};
```

## 参考

1. https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts
