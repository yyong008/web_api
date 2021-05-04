# NodeFilter

NodeFilter 接口表示一个对象，此对象用于过滤 NodeIterator 或 TreeWalker 中的节点。

## 从 lib.dom.d.ts 中看 NodeFilter

```ts
interface NodeFilter {
    acceptNode(node: Node): number;
}

declare var NodeFilter: {
    readonly FILTER_ACCEPT: number; // 当需要接受一个节点时
    readonly FILTER_REJECT: number; // 当需要拒绝一个节点时
    readonly FILTER_SKIP: number; // 跳过一个节点时
    readonly SHOW_ALL: number;
    readonly SHOW_ATTRIBUTE: number;
    readonly SHOW_CDATA_SECTION: number;
    readonly SHOW_COMMENT: number;
    readonly SHOW_DOCUMENT: number;
    readonly SHOW_DOCUMENT_FRAGMENT: number;
    readonly SHOW_DOCUMENT_TYPE: number;
    readonly SHOW_ELEMENT: number;
    readonly SHOW_ENTITY: number;
    readonly SHOW_ENTITY_REFERENCE: number;
    readonly SHOW_NOTATION: number;
    readonly SHOW_PROCESSING_INSTRUCTION: number;
    readonly SHOW_TEXT: number;
};
```

## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/NodeFilter