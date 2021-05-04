# TreeWalker

TreeWalker 对象用于表示文档子树中的节点和它们的位置。

## 从 lib.dom.d.ts 中看 TreeWalker

```ts
interface TreeWalker {
    currentNode: Node;
    readonly filter: NodeFilter | null;
    readonly root: Node;
    readonly whatToShow: number;
    firstChild(): Node | null;
    lastChild(): Node | null;
    nextNode(): Node | null;
    nextSibling(): Node | null;
    parentNode(): Node | null;
    previousNode(): Node | null;
    previousSibling(): Node | null;
}

declare var TreeWalker: {
    prototype: TreeWalker;
    new(): TreeWalker;
};
```

## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/TreeWalker
