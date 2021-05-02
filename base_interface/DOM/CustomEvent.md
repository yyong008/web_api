# CustomEvent

## 继承关系

- Event

## 从 lib.dom.d.ts 看 Custom.dom.d.ts

```ts
interface CustomEvent<T = any> extends Event {
    readonly detail: T;
    initCustomEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, detailArg: T): void;
}

declare var CustomEvent: {
    prototype: CustomEvent;
    new<T>(typeArg: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
};
```

## 参考

1. https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts
