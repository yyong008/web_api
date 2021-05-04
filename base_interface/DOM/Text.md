#  Text

该 Text 界面表示 Element 或的文本内容 Attr。如果元素在其内容内没有标记，则它只有一个子实现 Text，其中包含该元素的文本。但是，如果元素包含标记，则将其解析为 Text 构成其子元素的信息项和节点。

新文档Text的每个文本块都有一个节点。随着时间的流逝，Text 随着文档内容的更改，可能会创建更多的节点。该 Node.normalize() 方法将 Text 每个文本块的相邻对象合并回单个节点。

## 依赖关系

- CharacterData
- Slottable

## 从 lib.dom.d.ts 中看 Text

```ts
interface Text extends CharacterData, Slottable {
    readonly assignedSlot: HTMLSlotElement | null;
    readonly wholeText: string;
    splitText(offset: number): Text;
}

declare var Text: {
    prototype: Text;
    new(data?: string): Text;
};
```

## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/Text

