# Beacon API

>Beacon 接口用于将异步和阻塞请求发送到服务器。信标（Beacon）请求使用 HTTP 协议中的POST 方法，请求通常不需要响应。这个请请求被保证，在页面的 unload 转台从发起到完成之前，被发送。而并不需要一个阻塞请求，例如 XMLHttpRequst。

## 为什么需要信标？

满足了分析和诊断代码的需求，这个代码通常会尝试在卸载之前将数据发送到 web 服务器。

## 全局环境


- Navigator.sendBeacon()
- ArrayBufferView
- Blob
- DOMString
- FormData

## 生产环境

- WorkerNavigator.sendBeacon()

## 参考

1. [Beacon API](https://developer.mozilla.org/zh-CN/docs/Web/API/Beacon_API)

