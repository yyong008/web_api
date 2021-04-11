# xhr (XMLHttpRequest)

xhr 是与服务器通信的对象，但是本质上是事件驱动，事件对象的名称就是： XMLHttpRequestEventTarget（xhr 事件对象）。

## 作用

获取服务器数据（任意类型）

## 缺陷

xhr 适合发送，然后服务器响应的，问答式。不适合从服务器接受事件或者消息（这可能： websocket/server-sentevents）更加合适。

## 构造函数 XMLHttpRequest 对象

```js
let xhr = new XMLHttpRequest();
```

## 一个简单发送请求的例子

有了 xhr 对象，我们就可以使用此对象来进行，来发送请求到服务器了：

```js
let xhr = new XMLHttpRequest();
let method = "GET";
let url = "http://you.server.address";

xhr.open(method, url, true);
xhr.send();
```

xhr 调用 open 方法，配置我们要发送的请求。使用 send 真实发送请求。

## 属性

- onreadystatechange