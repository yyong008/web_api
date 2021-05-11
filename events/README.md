# Event 事件

该Event接口表示在DOM中发生的事件。

## 构造函数

```ts
const event = new Event(typeAtg, eventInit)
```

## 简单的示例

```ts
const evt: Event = new Event('go', {bubbles: true, cancelable: false});
document.dispatchEvent(evt); // 使用 dispatchEvent 方法派发的是 Event 的实例

const div = document.createElement('div'); // 使用非 document
div.dispatchEvent(evt);
```

## 从 lib.dom.d.ts 中看 Event

```ts
interface Event {
    readonly bubbles: boolean;
    cancelBubble: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly currentTarget: EventTarget | null;
    readonly defaultPrevented: boolean;
    readonly eventPhase: number;
    readonly isTrusted: boolean;
    returnValue: boolean;
    /** @deprecated */
    readonly srcElement: EventTarget | null;
    readonly target: EventTarget | null;
    readonly timeStamp: number;
    readonly type: string;
    composedPath(): EventTarget[];
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
}

declare var Event: {
    prototype: Event;
    new(type: string, eventInitDict?: EventInit): Event;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
};
```

## 基于事件的接口

### A 系列

- AnimationEvent
- AudioProcessingEvent // 已经被放弃

### B 系列

- BeforeInputEvent
- BeforeUnloadEvent
- BlobEvent

### C 系列

- ClipboardEvent
- CloseEvent
- CompositionEvent
- CSSFontFaceLoadEvent
- CustomEvent

### D 系列

- DeviceLightEvent
- DeviceMotionEvent
- DeviceOrientationEvent
- DeviceProximityEvent
- DOMTransactionEvent
- DragEvent

### E 系列

- EditingBeforeInputEvent
- ErrorEvent

### F 系列

- FetchEvent
- FocusEvent

### G 系列

- GamepadEvent

### H 系列

- HashChangeEvent

### I 系列

- IDBVersionChangeEvent
- InputEvent

### K 系列

- KeyboardEvent

### M 系列

- MediaStreamEvent
- MessageEvent
- MouseEvent
- MutationEvent

### O 系列

- OfflineAudioCompletionEvent
- OverconstrainedError

### P 系列

- PageTransitionEvent
- PaymentRequestUpdateEvent
- PointerEvent
- PopStateEvent
- ProgressEvent

### R 系列

- RelatedEvent
- RTCDataChannelEvent
- RTCIdentityErrorEvent
- RTCIdentityEvent
- RTCPeerConnectionIceEvent

### S 系列

- SensorEvent
- StorageEvent
- SVGEvent
- SVGZoomEvent

### T 系列

- TimeEvent
- TouchEvent
- TrackEvet
- TransitionEvent
  
### U 系列

- UIEvent
- UserProximityEvent

### W 系列

- WebGLContextEvent
- WheelEvent

## 参考

1. [Event MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Event)
