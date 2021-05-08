# BeforeUnloadEvent

>beforeunload当窗口，文档及其资源即将被卸载时，将触发该事件。

## 继承关系

- BeforeUnloadEvent
- Event

## 简单的示例

```ts
window.addEventListener("beforeunload", function(event) {
    event.returnValue = "\o/";
    event.preventDefault();

    // WebKit
    var confirmationMessage = "\o/";
    (e || window.event).returnValue = confirmationMessage;     // Gecko + IE
    return confirmationMessage;        
})
```

## 参考

1. [BeforeUnloadEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/BeforeUnloadEvent)
