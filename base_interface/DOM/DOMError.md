# DOMError

## DOMError 继承关系

没有

## 从 lib.dom.d.ts 看 DOMError

```ts
interface DOMError {
    readonly name: string;
    toString(): string;
}

declare var DOMError: {
    prototype: DOMError;
    new(): DOMError;
};
```

## 参考

1. https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts
