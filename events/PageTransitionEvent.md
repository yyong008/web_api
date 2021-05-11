# PageTransitionEvent

>PageTransitionEvent 事件对象是可用的内部处理函数 pageshow 和 pagehide 事件，发射被加载或卸载文档时。

## 继承关系

- PageTransitionEvent
- Event

## 事件

- pageshow
- pagehide

## 简单示例

```ts
window.addEventListener('pageshow', myFunction);

function myFunction(event) {
  if (event.persisted) {
    alert("The page was cached by the browser");
  } else {
    alert("The page was NOT cached by the browser");
  }
}
```

## 参考

1. [PageTransitionEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/PageTransitionEvent)
