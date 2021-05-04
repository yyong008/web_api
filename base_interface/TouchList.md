# TouchList

## 从 lib.dom.d.ts 中看 TouchList

```ts
interface TouchList {
    readonly length: number;
    item(index: number): Touch | null;
    [index: number]: Touch;
}

declare var TouchList: {
    prototype: TouchList;
    new(): TouchList;
};
```

## 参考

1. [TouchList MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/TouchList)
