# History

>History 接口允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录。

## 从 lib.dom.d.ts 中看 History

```ts
interface History {
    readonly length: number;
    scrollRestoration: ScrollRestoration;
    readonly state: any;
    back(): void;
    forward(): void;
    go(delta?: number): void;
    pushState(data: any, title: string, url?: string | null): void;
    replaceState(data: any, title: string, url?: string | null): void;
}

declare var History: {
    prototype: History;
    new(): History;
};
```

## 参考

1. [History MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/API/History)
