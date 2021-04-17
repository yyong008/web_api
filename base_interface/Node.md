# Node

`Node` 是一个节点，各种 DOM 的 API 都是继承此接口。但是 Node 接口是继承字 `EventTarget` 接口。

## 从 lib.dom.d.td 中查看 Node 类

```ts
interface Node extends EventTarget {
    readonly baseURI: string;
    readonly childNodes: NodeListOf<ChildNode>;
    readonly firstChild: ChildNode | null;
    readonly isConnected: boolean;
    readonly lastChild: ChildNode | null;
    readonly namespaceURI: string | null;
    readonly nextSibling: ChildNode | null;
    readonly nodeName: string;
    readonly nodeType: number;
    nodeValue: string | null;
    readonly ownerDocument:Document | null;
    readonly parentElement: HTMLElement | null;
    readonly parentNode: Node & ParentNode | null;
    readonly previousSibling: ChildNode | null;
    textContent: string | null;
    appendChild<T extends Node>(newChild: T): T;
    cloneNode(deep?: boolean): Nodel
    compareDocumentPosition(other: Node): number;
    contains(other: Node | null): boolean;
    getRootNode(option?: GetRootNodeOptions): Node;
    hasChildNodes(): boolean;
    insertBefore<T extends Node>(newChild: T, refChild: Node | null): T;
    isDefaultNamespace(namespace: string | null): boolean;
    isEqualNode(otherNode: Node | null ): boolean;
    isSameNode(otherNode: Node | null): boolean;
    lookupNamespaceURI(prefix: string | null): string | null;
    lookupPrefix(namespace: string | null): string | null;
    normalize():void;
    removeChild<T extends Node>(newChild: Node, oldChild: T): T;
    readonly ATTRIBUTE_NODE: number;
    readonly CDATA_SECTION_NODE: number;
    readonly COMMENT_NODE: number;
    readonly COMMENT_NODE: number;
    readonly DOCUMENT_NODE: number;
    readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    readonly DOCUMENT_POSITION_FOLLOWING: number;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    readonly DOCUMENT_POSITION_PRECEDING: number;
    readonly DOCUMENT_TYPE_NODE: number;
    readonly DOCUMENT_TYPE_NODE: number;
    readonly ENTITY_NODE: number;
    readonly ENTITY_REFERENCE_NODE: number;
    readonly NOTATION_NODE: number;
    readonly PROCESSING_INSTRUCTION_NODE: number;
    readdonly PROCESSING_INSTRUCTION_NODE: number;
}

declare var Node {
    prototype: Node;
    new(): Node;
    readonly ATTRIBUTE_NODE: number;
    readonly CDATA_SECTION_NODE: number;
    readonly COMMENT_NODE: number;
    readonly DOCUMENT_FRAGMENT_NODE: number;
    readonly DOCUMENT_NODE: number;
    readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    readonly DOCUMENT_POSITION_CONTAINS: number;
    readonly DOCUMENT_POSITION_DISCONNECTED: number;
    readonly DOCUMENT_POSITION_FOLLOWING: number;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    readonly DOCUMENT_POSITION_PRECEDING: number;
    readonly DOCUMENT_TYPE_NODE: number;
    readonly ELEMENT_NODE: number;
    readonly ENTITY_NODE: number;
    readonly ENTITY_REFERENCE_NODE: number;
    readonly NOTATION_NODE: number;
    readonly PROCESSING_INSTRUCTION_NODE: number;
    readonly TEXT_NODE: number;
}
```

## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/Node
