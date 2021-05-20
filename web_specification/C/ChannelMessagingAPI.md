# Channel Messaging API

Channel Messaging API 允许连个不同的脚本运行在同一个浏览器的上下文（比如：连个 iframe，或者文档主体和一个 iframe, 使用 SharedWorker 的两个文档，或者连个 worker) 来直接通讯，在每端使用一个端口通过双向频道向彼此传递消息。

## Channel 通信的概念和用法


使用 MessageChannel 构造函数来创建通信信道。一旦创建，信道的两个端口即可使用 MessageChannel.port1 和 MessageChannel.port2 属性进行访问（都会访问 MessagePort 对象）创建信道的应用程序使用 port1，在另一端的程序使用 port2 --- 你向 port2 发送信息，然后携带 2 个参数（需要传递的消息，要传递所有权的对象，在这里是 port 自身）调用 window.postMessage 方法将端口信息传递到另一个浏览器上下文。

当这些可传递的对象被传递后，他们就从之前的上下文中消失了，比如一个 port, 一旦被发送，在原本的上下文中就再也不可用了。注意当前仅有 ArrayBuffer 和 MessagePort 对象发可以被发送。

另以恶搞浏览器上可以使用 MessagePort.onmessage 监听信息，并使用事件的 data 属性来获取消息内容。你可以通过 MessagePort.postMessage 向原来的文档发送应答消息。

当你想停止通过信道发送消息时，你可以用来关闭 MessagePort.close 端口

## Channel 通信接口

- MessageChannel
- MessagePort

## 参考

1. [Channel MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/API/Channel_Messaging_API)

