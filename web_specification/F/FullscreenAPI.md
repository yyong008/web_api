# Fullscreen API

全屏 API 为了使用用户的整个屏幕展现网络内容提供了一种简单的方式，并且在不需要退出全屏模式，这种 API  让你可以简单的控制浏览器，是的一个元素与其自元素，如果存在的话，可以占据整个平哭，并在此期间，从屏幕隐藏所有的浏览器用户界面以及其他应用。

## 接口

全屏 API 没有它自己的接口实现

## 方法

Document 中的方法


- Document.exitFullscreen()
- Element.requestFullscreen()
- DocumentOrShadowRoot.fullscreenElement
- Document.fullscreenEnabled

## 事件处理程序

- Document.onfullscreenchange
- Document.onfullscreenchange
- Element.onfullscreenchange
- Element.onfullscreenerror

## 废弃属性

- Document.fullscreen

## 事件

- 全屏 API 定义两个事件

    1. 可用来检测全屏式合适打开和关闭
    2. 在全屏模式和窗口模式之间切换锅中发生了错误。

## Dictionaries

FullscreenOptions

## 访问控制权

## 使用说明

## 示例

## 监听

## 切换全屏模式

```javascript
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 13k) {
    toggleFullScreen()
  } 
} )
```

## 切换全屏模式

当用户按下 `enter` 按键的时候，这段代码会被调用，

```javascript
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.fullscreenElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } 
  } 
}
```


这段代码首先检查 document 的 fullscreenElement 属性的值，如果其为 null，文档当前处于窗口模式中，所以我们需要切换到全屏模式，通过调用 element.requestFullscreen(), 可以切换到全屏模式。

如果全屏模式已经激活 fullscreenElement 不为 null， 我们可以调用 document.exitFullscreent

## 参考

1. [Fullscreen_API MND Web docs](https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API)
