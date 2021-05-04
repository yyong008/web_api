# ProcessingInstruction

## 继承关系

- CharacterData
- LinkStyle

## 从 lib.dom.d.ts 中看 ProcessingInstruction

```ts
interface ProcessingInstruction extends CharacterData, LinkStyle {
    readonly ownerDocument: Document;
    readonly target: string;
}

declare var ProcessingInstruction: {
    prototype: ProcessingInstruction;
    new(): ProcessingInstruction;
};
```

## 参考

