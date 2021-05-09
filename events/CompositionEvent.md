# CompositionEvent

DOMCompositionEvent 表示由于用户间接输入文本而发生的事件。

## 继承关系

- CompositionEvent
- UIEvent
- Event

## 种类

- compositionstart
- compositionupdate
- compositionend

## 简单示例

```ts
const myComponentEvent = new CompositionEvent(typeArg , CompositionEventInit)
```

## 其他示例

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CompositionUpdate</title>
  </head>
  <body>
    <input id="input">
    <pre id="log"></pre>
    <script>
      var input = document.getElementById('input')
        , log = document.getElementById('log')
      ;
      ['compositionstart', 'compositionupdate', 'compositionend', 'keydown']
        .forEach(function (event) {
          input.addEventListener(event, function (ev) {
            log.textContent += event + ': ' + (ev.data || ev.keyCode) + '\n';
          }, true);
        })
      ;
    </script>
  </body>
```

## 参考

1. [CompositionEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent/CompositionEvent)
