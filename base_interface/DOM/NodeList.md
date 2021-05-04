# NodeList

NodeList 对象是节点的集合，通常是由属性，如Node.childNodes 和 方法，如document.querySelectorAll 返回的。

## 特点

- 不是数组，是一个 ArrayLike
- 支持 forEach 遍历

## 版本 lib.dom.d.ts 中看 NodeList

```ts
interface NodeList {
    readonly length: number;
    item(index: number): Node | null;
    forEach(callbackfn: (value: Node, key: number, parent: NodeList) => void, thisArg?: any): void;
    [index: number]: Node;
}

declare var NodeList: {
    prototype: NodeList;
    new(): NodeList;
};
```
## 版本 lib.dom.iterable.d.ts

```ts
interface NodeList {
    [Symbol.iterator](): IterableIterator<Node>;
    entries(): IterableIterator<[number, Node]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<Node>;
}
```

## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList