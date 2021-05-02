# HTMLCollection

## HTMLCollection 依赖关系

- HTMLCollectionBase


## 从 lib.dom.d.ts 中看 HTMLCollection

```ts
interface HTMLCollection extends HTMLCollectionBase {
    namedItem(name: string): Element | null;
}

declare var HTMLCollection: {
    prototype: HTMLCollection;
    new(): HTMLCollection;
};

interface HTMLCollectionBase {
    readonly length: number;
    item(index: number): Element | null;
    [index: number]: Element;
}
```

## 参考

1. https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts
