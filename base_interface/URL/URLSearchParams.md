# URLSearchParams

>URLSearchParams 接口定义了与URL的查询字符串一起使用的实用程序方法。

## 从 lib.dom.d.ts 中看 URLSearchParams

```ts
interface URLSearchParams {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string): boolean;
    set(name: string, value: string): void;
    sort(): void;
    toString(): string;
    forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
}

declare var URLSearchParams: {
    prototype: URLSearchParams;
    new(init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
    toString(): string;
};
```

## 基本用法

```ts
for (const [key, value] of mySearchParams) {}
for (const [key, value] of mySearchParams.entries()) {}
```

## 基本示例

```ts
for (
    const [key,value] of new URLSearchParams(window.location.search)
) {
    console.log(key, value)
}
```

## 参考

1. [URLSearchParams MDN web dcos](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)