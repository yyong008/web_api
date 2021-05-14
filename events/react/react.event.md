# React 事件

React 自己实现了一套 `注册`、`存储`、`分发`和 `重用逻辑`，在 DOM 事件体系上做了很大的改建，减少的内存，简化的逻辑，并最大程度解决了 `IE` 等浏览器的不兼容问题。

特点：

- 合成事件 SyntheticEvent 是对原生浏览的包装
- 与浏览器有相同的接口
  - stopPropagation 函数
  - preventDefault 函数

## 事件写法

- onClick 的大小驼峰写法
- 合成事件 SyntheticEvent
- JSX 函数的写法
- Class 的函数写法
- 函数参数

## 合成对象属性

```typescript
const EventInterface = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function(event) {
    return event.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0,
};
```

访问原生的事件：React 事件提供了 nativeEvent 属性来访问

## 属性集合以及类型

- bubbles -> boolean 是否冒泡
- cancelable -> boolean 事件是否可以取消
- DOMEventTarget -> currentTarget 表示当事件沿着 DOM 触发时事件的当前目标。它总是指向事件绑定的元素

```typescript
function hide(e) {
  e.currentTarget.style.visiability = "hidden";
  console.log(e.currentTarget);
}

let ps = document.getElementByTagName('p');

// 给每一个 p 元素添加一个点击事件
for(let i = 0; i < ps.length; i++) {
  ps[i].addEventListener('click', hide, false);
}

document.body.addEventListener('click', hide, false);
```

- defaultPrevented -> boolean， 当前事件是否调用了 event.preventDefaul() 方法

```typescript
if (e.defaultPrevented) {
  // 是否调用了 defaultPrevented
}
```

- eventPhase 事件处于何种阶段
  - Event.NONE 没有事件被处理
  - Evnet.CAPTURING_PHASE 事件捕获
  - Event.AT_TARGET 事件已经到达事件目标
  - Event.BUBBLING_PHASE 事件冒泡
  
- isTrusted -> boolean 用户触发即可信赖
- nativeEvent 原生事件 DOMEvent
- preventDefaul() 阻止默认行为
- isDefaultPrevented 默认事件被阻止
- stopPropagation() 阻止冒泡
- isPropagationStopped() 是否调用了阻止冒泡
- persist() 在 React 当中，SyntheticEvent 在调用事件回调之后，该对象将被重用。并所有的属性将无效。如果要以异步方式问事件属性，则应该调用 event.presist() 事件，这将从从事件池中删除事件，并允许用户代码保留对该事件的引用。

```typescript
function onClick(event) {
  console.log(event); // nullified object
  console.log(event.type) // 'click'
  const eventType = event.type // click

  setTimeout(() => {
    console.log(event.type); // null
    console.log(eventType); // click
  }, 0)

  this.setState({clickEvent: event}); // no work
  this.setState({eventType: event.type}); //
}
```

- target DOMEventTarget

触发事件的对象的引用。当前事件处理程序在冒泡或捕获阶段被调用，它与 event.currentTarget 不同

```typescript
let ul = document.createElement('ul');
document.body.appendChild(ul);

let li1 = document.createElement('li');
let li2 = document.createElement('li');

ul.appendChild(li1);
ul.appendChild(li2);

function hide(e) {
  e.target.style.visibility = 'hidden';

  ul.addEventListener('click', hide, false)
}
```

- timeStamp

```typescript
let number = event.timeStamp;
```

- type

```typescript
let type = event.type
```

## 理解 React 事件

- 事件注册
- 事件存储
- 事件合成
- 事件分发
- 事件执行

## 注意

1. persis() 方法将不在生效， SyntheticEvent 不在加入事件池中。
2. 事件处理程器返回 false 时，不在阻止事件传递，可以使用
   1. e.stopPropagation
   2. e.preventDefault
   3. 代替

## React 支持的事件

1. Clipboard Events 剪贴板事件
   1. onCopy
   2. onCut
   3. onPaste
   4. DOMDataTransfer
   5. clipboardData
2. Composition Events 事件
   1. onCompositionEnd
   2. onCompositionStart
   3. onCompositionUpdate
   4. string
   5. data
3. Keyboard Events 键盘事件
   1. onKeyDown
   2. onKeyPress
   3. onKeyUp
   4. boolean altKey
   5. number charCode
   6. boolean ctrlKey
   7. boolean getModifierState(key)
   8. string key
   9. number keyCode
   10. string locale
   11. number location
   12. boolean metaKey
   13. boolean repeat
   14. boolean shiftKey
   15. number which
4. Focus Events 聚焦事件
   1. onFocus onBlur
   2. DOMEventTarget
   3. relatedTarget
5. Form Events 表单事件
   1. onChange
   2. onInput
   3. onInvalid
   4. onReset
   5. onSubmit
6. Generic Events
   1. onError
   2. onLoad
7. Mouse Events 鼠标事件
   1. onClick
   2. onContextMenu
   3. onDoubleClick
   4. onDrag
   5. onDragEnd
   6. onDragEnter
   7. onDragExit
   8. onDragLeave
   9. onDragOver
   10. onDragStart
   11. onDrop
   12. onMouseDown
   13. onMouseEnter
   14. onMouseLeave
   15. onMouseMove
   16. onMouseOut
   17. onMouseOver
   18. onMouseUp
   19. boolean altKey
   20. number button
   21. number buttons
   22. number clientX
   23. number clientY
   24. boolean ctrlKey
   25. boolean getModifierState(key)
   26. boolean metaKey
   27. number pageX
   28. number pageY
   29. DOMEventTarget relatedTarget
   30. number screenX
   31. number screenY
   32. boolean shiftKey
8. Pointer Events 指针事件
   1. onPointerDown
   2. onPointerMove
   3. onPointerUp
   4. onPointerCancel
   5. onGotPointerCapture
   6. onLostPointerCapture
   7. onPointerEnter
   8. onPointerLeave
   9. onPointerOver
   10. onPointerOut
   11. number pointerId
   12. number width
   13. number height
   14. number pressure
   15. number tangentialPressure
   16. number tiltX
   17. number tiltY
   18. number twist
   19. string pointerType
   20. boolean isPrimary
9. Selection Events
    1. onSelect
10. Touch Events 触摸事件
    1. onTouchCancel
    2. onTouchEnd
    3. onTouchMove
    4. onTouchStart
    5. boolean altKey
    6. DOMTouchList changedTouches
    7. boolean ctrlKey
    8. boolean getModifierState(key)
    9. boolean metaKey
    10. boolean shiftKey
    11. DOMTouchList targetTouches
    12. DOMTouchList touches
11. UI Events
    1. onScroll
    2. number detail
    3. DOMAbstractView view
12. Wheel Events 滚轮事件
    1. onWheel
    2. number deltaMode
    3. number deltaX
    4. number deltaY
    5. number deltaZ
13. Media Events 媒体事件
    1. onAbort
    2. onCanPlay
    3. onCanPlayThrough
    4. onDurationChange
    5. onEmptied
    6. onEncrypted
    7. onEnded
    8. onError
    9. onLoadedData
    10. onLoadedMetadata
    11. onLoadStart
    12. onPause
    13. onPlay
    14. onPlaying
    15. onProgress
    16. onRateChange
    17. onSeeked
    18. onSeeking
    19. onStalled
    20. onSuspend
    21. onTimeUpdate
    22. onVolumeChange
    23. onWaiting
14. Image Events 图片事件
    1. onLoad
    2. onError
15. Animation Events 动画事件
    1. onAnimationStart
    2. onAnimationEnd
    3. onAnimationIteration
    4. string animationName
    5. string pseudoElement
    6. float elapsedTime
16. Transition Events 过渡事件
    1. onTransitionEnd
    2. string propertyName
    3. string pseudoElement
    4. float elapsedTime
17. Other Events 其他事件
    1. onToggle

## 参考

1. [事件处理程序](https://react.docschina.org/docs/handling-events.html)
2. [合成事件](https://react.docschina.org/docs/events.html)
