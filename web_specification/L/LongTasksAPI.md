# Long Task

1. 可交互延迟
2. 哪些任务执行耗费了50毫秒或更多时间

## 阻塞主线程 50 ms 以上会导致哪些问题？

1. 可交互时间
2. 严重不稳定的交互行为
3. 严重不稳定的事件回调延迟
4. 紊乱的动画和滚动

## 长时间回调

- long running event handlers
- expensive reflows and other re-renders
- work the browser does between different turns of the event loop that exceeds 50ms

## 浏览上下文的罪魁容器

- the top level page
- iframe
- embed
- object

## 任务清单

```javascript
var observer = new PerformanceObserver(() => {
  var perfEntries = list.genEntries();

  for (var i = 0; i < perfEntries.length; i++) {
    // your code
  }
})

observer.observe({entryTypes: ["longtask"]} )
```

## 接口

- PerformanceLongTaskTiming
- TaskAttributionTiming
