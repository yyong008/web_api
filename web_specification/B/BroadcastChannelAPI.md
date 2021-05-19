# Broadcast Channel API

Broadcast Channel API 可以实现同 源 下浏览器不同窗口， Tab 页，frame 或者 iframe 的浏览器上下文 （通常是一个网站下不同的页面）之间的通信。

![](https://mdn.mozillademos.org/files/9945/BroadcastChannel.png)

## BroadcastChannel 接口

### 创建或加入某个频道

```javascript
let bc = new BroadcastChannel('test_channel');
```

### 发送消息

现在发送消息就很简单了，只需要调用 BroadcastChannel 对象上的 postMessage() 方法可用。该方法的参数可以是任意对象。最简单的例子就是发送 DOMString 文本消息：

```javascript
bc.postMessage("This is a test message.");
```

### 接受消息

```javascript
bc.onmessage = function(ev) {console.log(ev)};
```

### 与频道断开链接

```javascript
bc.close()
```

## 总结

Broadcast Channel 是一个非常简单的 API，内部包含了跨上下文通讯的几口。它可用检测同源网站环境中其他浏览器选项卡下的用户操作，例如当用户操作。没有定义消息传输协议，故不同上下文中的不同文档需要自己实现它：规范没有对此提出协议或要求。

## 参考

1. [Broadcast Channel API MDN web api](https://developer.mozilla.org/zh-CN/docs/Web/API/Broadcast_Channel_API)
