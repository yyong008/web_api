# NodeIterator

- 本质: 迭代器
- 作用：遍历 DOM 子树中节点

NodeIterator 可以使用 Document.createNodeIterator() 方法来创建：

```ts
var nodeIterator = document.createNodeIterator(root, whatToShow, filter);
```

## 从 lib.dom.d.ts 中看 NodeIterator

```ts
interface NodeIterator {
    readonly filter: NodeFilter | null;
    readonly pointerBeforeReferenceNode: boolean;
    readonly referenceNode: Node;
    readonly root: Node; // 跟节点属性
    readonly whatToShow: number; //与 NodeFilter 有关联
    detach(): void;
    nextNode(): Node | null;
    previousNode(): Node | null;
}

declare var NodeIterator: {
    prototype: NodeIterator;
    new(): NodeIterator;
};
```

## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/NodeIterator