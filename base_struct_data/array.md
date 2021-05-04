# Array

>JavaScript的 Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。

## TS 版本示例

```ts
let arr: number[] = [1,3,4];
let arr_any: any[] = [false, 1, 'string', true, {x: 'this is good'}, [23, 34], () => 123];
let arr_new = new Array(2)
```

## 版本：lib.es2015.core.d.ts 中看 Array

```ts
interface Array<T> {
    find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
    findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
    fill(value: T, start?: number, end?: number): this;
    copyWithin(target: number, start: number, end?: number): this;
}

interface ArrayConstructor {
    from<T>(arrayLike: ArrayLike<T>): T[];
    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
    of<T>(...items: T[]): T[];
}
```

## 版本：lib.es2015.iterable.d.ts 中看 Array

```ts
interface Array<T> {
    [Symbol.iterator](): IterableIterator<T>;
    entries(): IterableIterator<[number, T]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<T>;
}

interface ArrayConstructor {
    from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
    from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
}

interface ReadonlyArray<T> {
    [Symbol.iterator](): IterableIterator<T>;
    entries(): IterableIterator<[number, T]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<T>;
}
```

## 从 lib.es2015.symbol.wellknown.d.ts 中看 Array

```ts
interface Array<T> {
    [Symbol.unscopables](): {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    };
}
```

## 从 lib.es2016.array.include.d.ts 中 Array 相关

```ts
interface Array<T> {
    includes(searchElement: T, fromIndex?: number): boolean;
}

interface ReadonlyArray<T> {
    includes(searchElement: T, fromIndex?: number): boolean;
}

interface Int8Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint8Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint8ClampedArray {
    includes(searchElement: number, fromIndex?: number): boolean;
}

interface Int16Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint16Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}

interface Int32Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint32Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}

interface Float32Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}

interface Float64Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}
```

## 从 lib.es5.d.ts 中看 Array

```ts
interface ReadonlyArray<T> {
    readonly length: number;
    toString(): string;
    toLocaleString(): string;
    concat(...items: ConcatArray<T>[]): T[];
    concat(...items: (T | ConcatArray<T>)[]): T[];
    join(separator?: string): string;
    slice(start?: number, end?: number): T[];
    indexOf(searchElement: T, fromIndex?: number): number;
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    every<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[];
    every(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;
    some(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[];
    filter<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[];
    filter(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[];
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;
    readonly [n: number]: T;
}

interface ConcatArray<T> {
    readonly length: number;
    readonly [n: number]: T;
    join(separator?: string): string;
    slice(start?: number, end?: number): T[];
}

interface Array<T> {
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): T | undefined;
    push(...items: T[]): number;
    concat(...items: ConcatArray<T>[]): T[];
    concat(...items: (T | ConcatArray<T>)[]): T[];
    join(separator?: string): string;
    reverse(): T[];
    shift(): T | undefined;
    slice(start?: number, end?: number): T[];
    sort(compareFn?: (a: T, b: T) => number): this;
    splice(start: number, deleteCount?: number): T[];
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    unshift(...items: T[]): number;
    indexOf(searchElement: T, fromIndex?: number): number;
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
    every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

    [n: number]: T;
}

interface ArrayConstructor {
    new(arrayLength?: number): any[];
    new <T>(arrayLength: number): T[];
    new <T>(...items: T[]): T[];
    (arrayLength?: number): any[];
    <T>(arrayLength: number): T[];
    <T>(...items: T[]): T[];
    isArray(arg: any): arg is any[];
    readonly prototype: any[];
}

declare var Array: ArrayConstructor;

interface TypedPropertyDescriptor<T> {
    enumerable?: boolean;
    configurable?: boolean;
    writable?: boolean;
    value?: T;
    get?: () => T;
    set?: (value: T) => void;
}
```

## 参考

1. [Array MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
