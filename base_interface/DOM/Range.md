# Range

Range 接口表示一个包含节点与文本节点的一部分的文档片段。

可以用 Document 对象的 Document.createRange 方法创建 Range，也可以用 Selection 对象的 getRangeAt 方法获取 Range。另外，还可以通过 Document 对象的构造函数 Range() 来得到 Range。

## 继承关系

- AbstractRange

## 从 lib.dom.d.ts 中看 Range

```ts
interface Range extends AbstractRange {
    readonly commonAncestorContainer: Node;
    cloneContents(): DocumentFragment;
    cloneRange(): Range;
    collapse(toStart?: boolean): void;
    compareBoundaryPoints(how: number, sourceRange: Range): number;
    comparePoint(node: Node, offset: number): number;
    createContextualFragment(fragment: string): DocumentFragment;
    deleteContents(): void;
    detach(): void;
    extractContents(): DocumentFragment;
    getBoundingClientRect(): DOMRect;
    getClientRects(): DOMRectList;
    insertNode(node: Node): void;
    /**
     * Returns whether range intersects node.
     */
    intersectsNode(node: Node): boolean;
    isPointInRange(node: Node, offset: number): boolean;
    selectNode(node: Node): void;
    selectNodeContents(node: Node): void;
    setEnd(node: Node, offset: number): void;
    setEndAfter(node: Node): void;
    setEndBefore(node: Node): void;
    setStart(node: Node, offset: number): void;
    setStartAfter(node: Node): void;
    setStartBefore(node: Node): void;
    surroundContents(newParent: Node): void;
    toString(): string;
    readonly END_TO_END: number;
    readonly END_TO_START: number;
    readonly START_TO_END: number;
    readonly START_TO_START: number;
}

declare var Range: {
    prototype: Range;
    new(): Range;
    readonly END_TO_END: number;
    readonly END_TO_START: number;
    readonly START_TO_END: number;
    readonly START_TO_START: number;
    toString(): string;
};
```

## Range 对象常用于编辑器进行一些操作

### 一个使用 React 在 textArea 中添加 markdown 代码 "``````", 并且光标移动到代码块的中间。

```tsx
import {  useState, useRef } from "react";

function App() {
  const tt = useRef(null);
  const [val, setVal] = useState("");

  const onInsertClick = async () => {
    const sPosition = tt.current.selectionStart; // 光标的位置
    const newVal =
      val.substring(0, sPosition) + "``````" + val.substring(sPosition);
    setVal(newVal);

    await tt.current.focus(); // 注意 focus 是异步的
    tt.current.setSelectionRange(sPosition + 3, sPosition + 3);
  };

  const onChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div className="App">
      <button onClick={onInsertClick}>插入 markdown 代码块</button>
      <textarea ref={tt} value={val} onChange={onChange}></textarea>
    </div>
  );
}

export default App;

```
## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/Range