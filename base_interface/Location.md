# Location

>Location 接口表示其链接到的对象的位置（URL）。所做的修改反映在与之相关的对象上。 Document 和 Window 接口都有这样一个链接的Location，分别通过 Document.location 和 Window.location 访问。

## 从 lib.dom.d.ts 中看 Location

```ts
interface Location {
    readonly ancestorOrigins: DOMStringList;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    toString(): string;
    readonly origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    assign(url: string): void;
    reload(): void;
    /** @deprecated */
    reload(forcedReload: boolean): void;
    replace(url: string): void;
}

declare var Location: {
    prototype: Location;
    new(): Location;
};
```

## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/Location

