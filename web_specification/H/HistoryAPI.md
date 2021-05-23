# History API

DOM Window 对象通过 history对象提供了对浏览器的会话历史的访问。他暴露了很多游泳的方法和属性，允许你在用户浏览器中向前和向后跳转，同时从 HTML5 开始-提供了对 history 栈中的内容的操作。

## 意义和使用


使用：

- back
- forward
- go

完成在历史记录中向后和向前的跳转。

- window.history.back()
- window.history.forward()
- window.history.go(-1)
- window.history.length
- window.onpopstate = function(e) {}
- history.pushState(object, "page 2", 'bar.html')
- pushState
    - 状态对象
    - 标题
    - URL
- replaceState
    - 状态对象
    - 标题
    - URL

## popstate 事件

window.onpopstate

```javascript
window.addEventListener("load", () => {
  let currentState = history.state;
  console.log('currentState', currentState);
} )
```

