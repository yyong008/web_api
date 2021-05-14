# React 17 事件系统

React 实现一套自己的事件系统，目的为了跨端与兼容。react 事件系统将是假绑定到 document 上。

## 主要流程

- ReactEventListener 给元素绑定事件
- ReactEventEmmiter 暴露给 React 组件用于添加事件（对外暴露为 listenTo 等方法）
- EventPluginHub 负责管理和注册各种插件
- 插件
  - SimpleEventPlugin
  - EnterLeaveEventPlugin
  - ChangeEventPlugin
  - SelectEventPlugin
  - BeforeInputEventPlugin

执行过程：

- 事件绑定
- 合成事件列表获取
- 事件触发

## 事件分类和优先级

- DiscreteEvent 离散事件 优先级是 0：click-blur-focus-submit-touchStart
- UserBlockingEvent  用户阻塞事件 优先级是 1
- ContinuousEvent 连续事件 load-error-loadStart-abort-animationed 优先级 2

- Immediate 会立即执行，对应 ContinuousEvent
- UserBlocking （250ms）用户交互0，一般需要立即反馈-- UserBlockingEvent、DiscreteEvent
- Normal （5s） 不需要理解做出反应， 如：请求
- Low （10s） 这些任务可以放在后面，但是最钟应该得到执行：例如同志分析
- Idle (no time) 一些没有必要的任务（比如：隐藏的内容）

## 事件绑定

- complate
- finalizeInitialChildren
- setInitialProperties (便利所有的属性，并且执行对应属性的处理)
- setInitialDOMProperties
- ensureListeningTo
- legacyListenToEvent
- legacyListenToTopLeventEvent（对一些不冒泡的事件进行 trapCapturedEvent，其他事件进行 trapBubbledEvent）
- trapBubbledEvent ｜ trapCapturedEvent
- trapEventForPluginEventSystem
- addEventCaptureListener

## 优先级事件创建

```typescript
function trapEventForPluginEventSystem(
    container: Document | Element | Node,
    topLevelType: DOMTopLevelType,
    capture: boolean;
):void {
    let listener;

    switch(getEventPriorityForPluginSystem(topLevelType)) {
        case DiscreteEvent:
                listener = dispatchDiscreteEvent.bind(...);
                break;
        case UserBlockingEvent:
                listener = dispatchUserBlockingUpdate.bind(...);
                break;
        case ContinuousEvent:
        default:
            listener = dispatchEvent.bind(...)
            break;
    }

    if (capture) {
        addEventCaptureListener(container, rawEventName, listener)
    } else {
        addEventBubbleListener(container, rawEventName, listener)
    }
}
```

事件注册过程就发生在：trapEventForPluginEventSystem

- injectEventPluginsByName
- recomputedPluginOrdering
- publishEventForPlugin
- publishRegistrationName
- BeforeInputEventPlugin

## 参数主要是由入口函数进入

```typescript
injectEventPluginByName({
    SimpleEventPlugin: SimpleEventPlugin,
    EnterLeaveEventPlugin: EnterLeaveEventPlugin,
    ChangeEventPlugin: ChangeEventPlugin,
    SelectEventPlugin: SelectEventPlugin,
    BeforeInputEventPlugin: BeforeInputEventPlugin
})
```

## SimpleEventPlugin

传入不同的事件插件，其中 SimpleEventPlugin 的数据结构如下：

```typescript
{
    eventTypes: {
        phasedRegistrationNames: {
            bubbled: 'onClick',
            captured: 'onClick' + 'Capture',
        },
        dependencies: ['onClick'],
        eventPriority: 1
    },
    extractEvents: () => {}
}
```

初始的执行会创建出一套针对不同平台的事件对象（具体方法由个平台传入，本次看到的是 dom 层面定义的一些具体的东西，）

## extractEvent 合成事件

extectEvents 方法等会等到下一个阶段执行时候才会在被执行，大致逻辑是

```typescript
const event = EventConstructor.getPooled(...);

accumulatedTwoPhaseDispatches(event);

return event
```

EventConstructor 来自 SyntheicEvent 基类，这个类可以被扩展，其实就是 extend 方法中实现一个继承机制，这样一些其他事件可以使用基类一些公共方法，比如上面的 getPooled 方法，是从对象池中获取数据，避免对象的重复创建，加少 GC 开销。
模拟捕获和冒泡的事件过程，最终挂载到 event._dipatchListeners 上，它存储了所有的需要触发的监听函数，比如父子绑定了事件，这里需要记录，从而可以模拟冒泡和捕获的执行。

```typescript
export function traversetTwoPhase(inst, fn, arg) {
    const path = [];
    while(inst) {
        path.push(inst);
        inst = getParet(list);
    }

    let i;

    for (i = path.length; i--) {
        fn(...)
    }

    for(i=0; i < path.length; i++) {
        fn(...)
    }
}
```

## 示例

```jsx
<div onClick={A}>
    <div onClickCapture={B}>
        <div onClick={C}></div>
    </div>
</div>
```

最终 event.__dispatchListeners 顺序为 [B,C,A] 因为中间这个事件定义为 「事件捕获」

```jsx
<div onClick={A}>
    <div onClick={B}>
        <div onClick={C}></div>
    </div>
</div>
```

最终 event.__dispatchListeners 顺序为 [C,B,A] 因为中间这个事件定义为 「事件冒泡」

## 事件执行

- dispatchEvent
- attemptToDispatchEvent
- dispatchEventForLegacyPluginEventSystem
- batchEventUpdates
- batchedEventUpdates$1
- handleTopLevel
- runExtractedPluginEventsInBatch
- extractPluginEvents
- 【SimpleEventPlugin -> extrectEvents】触发插件
- accumulateInto
- runEventsInBatch
- executeDispatchesInOrder
- executeDispatch
- finishEventHandler
- runWithPriority$1
- Scheduler_runWithPrority
- flushSyncCallbackQueue

## dispatchEvent 回调

dispatchEvent 中回调了 attemptToDispathchEvent

```ts
export function attemptToDispatchEvent(
    topLevelType: DOMTopLevelEventType,
    eventSystemFlags: EventSystemFlags,
    container: Document | Element | Node,
    nativeEvent: AnyNativeEvent,
) {
    const nativeEventTarget = getEventTarget(nativeEvent);
    let targetInst = getClosedInstanceFromNode(nativeEventTarget);

    //...
    dispatchEventForLegacyPluginEventPlugin(
        topLevelType,
        eventSystemFlags,
        nativeEvent,
        targetInst,
    );
    return null
}
```

这个方法中第四个参数是执行事件监听回调时传入，获取对应的 target 之后，在根据真实的 dom 取出对应的 fiber 节点对象。

## 批量执行



## 参考

1. [React 源码笔记17 - 事件系统](https://www.gitsu.cn/article70)