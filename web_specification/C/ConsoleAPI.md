# ConsoleAPI

Console API 提供了允许开发人员执行调试任务的功能，例如在代码中的某个记录消息或者变量值，或者计算任务完成所需要的事件

## 概念和用法

Console API 最初是一个专有 API，不同的浏览器以自己的方式来实现它。 Console  API 规范统一了这个 API的行文，并且所有现代浏览器都决定实现这种行为一致尽管一些实现人仍然有自己的附加专有功能。

- Google Chrome DevTools implementation
- Safari DevTools implementation

用法非常简单 console 可以通过 window.console 获取到，在 workers 里面使用 WorkerGlobalScope.console 获取， console 包含了许多方法，您可以调用他们来执行基本的调试任务，通常专注于将各种值记录到浏览器中 WEB 控制台。

到目前为止，最常用的方法是 console.log, 它用于记录特定的变量中包含的当前值。

## 接口

console


```javascript
let myString = 'Hello world";

console.log(myString);
```

## 参考

1. [Console API MDN API](https://developer.mozilla.org/zh-CN/docs/Web/API/Console_API)

