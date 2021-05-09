# CustomEvent

> CustomEvent接口表示由应用程序出于任何目的初始化的事件。

## 用法示例

```ts
let event = new CustomEvent(typeArg: DOMString, customEventInit: { detail: any});
```

## 简单示例

- 监听自定义事件
- 定义自定事件
- 触发自定义事件

```ts
//  监听一个 go 的自定义事件
let div = document.createElement('div');
div.addEventListener('go', function() {
    console.log('go custom listner callback');
})

// 定义 go 自定义事件
let event = new CustomEvent('go', {
    detailt: {
        sss: 'xxx'
    }
})

// div 派发事件
div.dispatchEvent('go');
```

## 从 lib.dom.d.ts 中看 CustomEvent

```ts
interface CustomEvent<T = any> extends Event {
    /**
     * Returns any custom data event was created with. Typically used for synthetic events.
     */
    readonly detail: T;
    initCustomEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, detailArg: T): void;
}

declare var CustomEvent: {
    prototype: CustomEvent;
    new<T>(typeArg: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
};
```

## 参考

1. [CustomEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)
