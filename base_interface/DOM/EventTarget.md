# EventTarget

>EventTarget 是一个 DOM 接口，由可以接受事件，并且可以创建侦听器的对象实现。

## 从 lib.dom.d.ts 中和 lib.dom.iterable.d.ts

```ts
interface EventTarget {
    addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}

declare var EventTarget: {
    prototype: EventTarget;
    new(): EventTarget;
};
```

## 实现一个 key-value 版本的 EventTarget

```ts
let EventTarget = function() {
    this.listeners = {}
}

EventTarget.prototype.listeners = null;

EventTarget.prototype.addEventListener = function(type, callback) {
    // 不存在时初始化
    if(!(type in this.listeners)) {
        this.listeners[type] = []
    }

    this.listeners[type].push(callback);
}

EventTarget.prototype.removeEventListener = function(type, callback) {
    if(!(type in this.listener)) {
        return;
    }

    let stack = this.listeners[type];

    for(var i = 0, l = stack.length; i < l; i++) {
        if (stack[i] === callback) {
            stack.splice(i, 1);
            return this.removeEventListener(type, callback);
        }
    }
}

EventTarget.prototype.dispatchEvent = function(event) {
    if(!(type in this.listener)) {
        return;
    }

    let stack = this.listeners[event.type];
    event.target = this;

    for(var i = 0, l = stack.length; i < l; i++) {
        if (stack[i] === callback) {
            stack[i].call(this, event);
        }
    }
}
```

## Class 版本的 EventTarget

```ts
class EventTarget {
   listeners = {};

   addEventListener(type, callback) {
       if(!(type in this.listeners)) {
            this.listeners[type] = []
        }

        this.listeners[type].push(callback);
   }

   removeEventListener(type, callback) {
     if(!(type in this.listener)) {
        return;
    }

    let stack = this.listeners[type];

    for(var i = 0, l = stack.length; i < l; i++) {
        if (stack[i] === callback) {
            stack.splice(i, 1);
            return this.removeEventListener(type, callback);
        }
    }
   }

   dispatchEvent(event) {
    if(!(type in this.listener)) {
        return;
    }

    let stack = this.listeners[event.type];
    event.target = this;

    for(var i = 0, l = stack.length; i < l; i++) {
        if (stack[i] === callback) {
            stack[i].call(this, event);
        }
    }
   }
}
```


## 参考

1. [EventTarget MDN web docs](https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts)
