# ChildNode

## 继承关系

- Node

## 从 lib/dom.d.ts 看

```ts
interface ChildNode extends Node {
    after(...nodes: (Node | string)[]): void;
    before(...nodes: (Node | string)[]): void;
    remove(): void;
    replaceWith(...nodes: (Node | string)[]): void;
}
```

## 参考

1. https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts
