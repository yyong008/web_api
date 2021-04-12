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

## 属性 onreadystatechange - readyState/status

onreadystatechange 是一个自定义的回调函数，用于监听 readyState 的状态变化。

在之前基础看例子上，我们进行扩展, readyState 可以监听 xhr 准备状态，当然可以被 `abort` 方法取消。

```js
let xhr = new XMLHttpRequest();
console.log("0 - UNSENT: ", xhr.readyState); // 0 - UNSENT: 0 

let method = "GET";
let url = "http://you.server.address";

xhr.open(method, url, true);
console.log("1 - OPENED: ", xhr.readyState); // 1 - OPENED: 1

// 
xhr.onreadystatechange = () => {
    console.log("x --- status: "xhr.readyState); // 
}

xhr.send();
```

readyState 包含 5 个状态：

- 0 ==> UNSENT ==> XMLHttpRequest 代理已被创建， 但尚未调用 open() 方法。
- 1 ==> OPENED ==> open() 方法已经被触发。在这个状态中，可以通过  setRequestHeader() 方法来设置请求的头部， 可以调用 send() 方法来发起请求。
- 2 ==> HEADERS_RECEIVED ==> send() 方法已经被调用，响应头也已经被接收。
- 3 ==> LOADING ==> 响应体部分正在被接收。如果 responseType 属性是“text”或空字符串， responseText 将会在载入的过程中拥有部分响应数据。
- 4 ==> DONE ==> 请求操作已经完成。这意味着数据传输已经彻底完成或失败。

status 就是我们 http 返回的[状态码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)。

## 属性或者方法 onprogress/onload

- onprogress 表示正在进行， readyState 是 3
- onload 表示完成， readyState 是 4

继续完成这个例子：

```js
let xhr = new XMLHttpRequest();
console.log("0 - UNSENT: ", xhr.readyState); // 0 - UNSENT: 0 

let method = "GET";
let url = "http://you.server.address";

xhr.open(method, url, true);
console.log("1 - OPENED: ", xhr.readyState); // 1 - OPENED: 1

// 
xhr.onreadystatechange = () => {
    console.log("x --- status: ", xhr.readyState); // 
}

xhr.onprogress = () => {
    console.log("3 - LOADING", xhr.readyState)
}

xhr.onload = () => {
    console.log("4 - DONE", xhr.readyState)
}

xhr.send();
```
