# ArrayLike

## 简单的示例

```ts
let arr_like: ArrayLike<any> =[{1: 123}, {length: 1}]
```

## 从 lib.es5.d.ts

```ts
interface ArrayLike<T> {
    readonly length: number;
    readonly [n: number]: T;
}
```

## 参考
