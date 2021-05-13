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

```ts
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

```ts
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

```ts
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

```ts
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

```ts
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

```ts
let number = event.timeStamp;
```

- type

```ts
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
2. Composition Events 事件
3. Keyboard Events 键盘事件
4. Focus Events 聚焦事件
5. Form Events 表单事件
6. Generic Events
7. Mouse Events 鼠标事件
8. Pointer Events 指针事件
9. Selection Events
10. Touch Events 触摸事件
11. UI Events
12. Wheel Events 滚轮事件
13. Media Events 媒体事件
14. Image Events 图片事件
15. Animation Events 动画事件
16. Transition Events 过渡事件
17. Other Events 其他事件

## 参考

1. [事件处理程序](https://react.docschina.org/docs/handling-events.html)
2. [合成事件](https://react.docschina.org/docs/events.html)