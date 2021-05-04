# Boolean

- false
- true

## 布尔数据类型

```ts
let b: boolean = false;

let bb: boolean = new Boolean(false);

bb == false // true
```

## const lib.es5.d.ts 中看 boolean

```ts
interface Boolean {
    valueOf(): boolean
}

interface BooleanConstructor {
    new(value?: any): Boolean;
    <T>(value?: T): boolean;
    readonly prototype: Boolean:
}

declare var Boolean: BooleanConstructor;
```

## 参考

1. https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts
