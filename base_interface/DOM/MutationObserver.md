# MutationObserver

MutationObserver 提供了监视 DOM 结构变动的能力。

## 从 lib.dom.d.ts 中看 MutationObserver

```ts
interface MutationObserverInit {
    attributeFilter?: string[];
    attributeOldValue?: boolean;
    attributes?: boolean;
    characterData?: boolean;
    characterDataOldValue?: boolean;
    childList?: boolean;
    subtree?: boolean;
}

interface MutationObserver {
    disconnect(): void;
    observe(target: Node, options?: MutationObserverInit): void;
    takeRecords(): MutationRecord[];
}

declare var MutationObserver: {
    prototype: MutationObserver;
    new(callback: MutationCallback): MutationObserver;
};
```

## 示例

```ts
const targetNode = document.getElementById('node');
const config = { attributes: true, childList: true, subtree: true };
const callback = () => {}
const observer = new MutationObserver(callback);

observer.observe(targetNode, config);

// 断开链接
observer.disconnect();
```

- node
- config
- callback
- observer object 

## 参考

