# number

## JavaScript 中 number 特点

- JavaScript的Number类型为双精度IEEE 754 64位浮点类型。
- 最近出了stage3BigInt 任意精度数字类型，已经进入stage3规范

## 一些特殊的例子以及原因

```ts
0.1 + 0.2 = 0.30000000000000004
```

原因简单的来讲，是因为 IEEE 754 双精度造成的

## Number 构造函数

```ts
let nu: Object = new Number(1);
let nuType: string = typeOf(nu); // "object"

let num: number = Number(123);
let numType: string = typeOf(num); // "number"
```

## 从 lib.es5.d.ts 中看 Number

```ts
interface Number {
    toString(radix?: number): string;
    toFixed(fractionDigits?: number): string;
    toExponential(fractionDigits?: number): string;
    toPrecision(precision?: number): string;
    valueOf(): number;
}

interface NumberConstructor {
    new(value?: any): Number;
    (value?: any): number;
    readonly prototype: Number;
    readonly MAX_VALUE: number;
    readonly MIN_VALUE: number;
    readonly NaN: number;
    readonly NEGATIVE_INFINITY: number;
    readonly POSITIVE_INFINITY: number;
}

declare var Number: NumberConstructor;
```

## Number 类型转换

- string => number 数字字符串直接去掉字符串
- ...

```ts
let nu: number = Number('12312');
```

## 参考

1. [Number MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)
