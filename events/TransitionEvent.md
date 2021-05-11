# TransitionEvent

>TransitionEvent()构造函数返回一个新创建的 TransitionEvent，代表的关系与过渡的事件。

## 基本使用

```ts
transitionEvent = new TransitionEvent(type, {propertyName: aPropertyName,
                                             elapsedTime  : aFloat,
                                             pseudoElement: aPseudoElementName});
```

## 从 lib.dom.d.ts 中看 TransitionEvent

```ts
interface TransitionEvent extends Event {
    readonly elapsedTime: number;
    readonly propertyName: string;
    readonly pseudoElement: string;
}

declare var TransitionEvent: {
    prototype: TransitionEvent;
    new(type: string, transitionEventInitDict?: TransitionEventInit): TransitionEvent;
};
```

## MDN

1. [TransitionEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent)
