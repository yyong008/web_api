# DOMStringList

## 从 lib.dom.d.ts 中和 lib.dom.iterable.d.ts
```ts
interface DOMStringList {
    readonly length: number;
    contains(string: string): boolean;
    item(index: number): string | null;
    [index: number]: string;
}

declare var DOMStringList: {
    prototype: DOMStringList;
    new(): DOMStringList;
};

interface DOMStringList {
    [Symbol.iterator](): IterableIterator<string>;
}
```

## 参考

1. https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts
2. https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.iterable.d.ts
