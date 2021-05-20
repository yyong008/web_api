# Clipboard API

剪贴板 Clipboard 提供了响应剪贴板命令（剪贴、复制和粘贴）与异步读写系统剪贴板的能力。从权限 Permissions API 获取之后，才能访问剪贴板内容；如果用户没有授权，则不允许读取或者更改剪贴板的内容。

这个 API 被设计取代 document.execCommand 的剪贴板访问方式。

## 访问剪贴板

除了在实例话中创建一个 Clipboard 对象，你可以使用全局 Navigator.clipboard 来访问系统剪贴板。

```javascript
navigator.clipboard.readText().then(
clipText => document.querySelector(".editor").innerText += clipText);
```

上述代码提取了剪贴板的文本并将其附在 class 为 editor 的第一个元素后面。因为当剪贴板中不是文本时，readText 就返回一个空字符串，所有这段代码是安全的。

## 接口


1. clipboard
2. clipboardEvent

## 参考

1. [Clipboard MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard_API)

