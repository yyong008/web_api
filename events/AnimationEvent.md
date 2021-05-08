# AnimationEvent

>该 AnimationEvent 界面表示事件，提供与动画有关的信息。

## 继承关系

- AnimationEvent
- Event

## 从 lib.dom.d.ts 中看 AnimationEvent

```ts
interface AnimationEvent extends Event {
    readonly animationName: string;
    readonly elapsedTime: number;
    readonly pseudoElement: string;
}

declare var AnimationEvent: {
    prototype: AnimationEvent;
    new(type: string, animationEventInitDict?: AnimationEventInit): AnimationEvent;
};
```

## 简单示例

```ts
const animationEvent: AnimationEvent = new AnimationEvent('goAni');
```

## 参考

1. [AnimationEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent/AnimationEvent)
