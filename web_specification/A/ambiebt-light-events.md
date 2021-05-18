# Ambient Light Event

>不推荐使用，因为很多的浏览器并没有实现这个 api

当设备检测到环境光发生变化的时候，会触发这个事件。

## 环境光事件

```javascript
if ('ondevicelight' in window) {
    window.addEventListener('devicelight', function(event) {
     var body = document.querySelector('body');
        if (event.value < 50) {
            body.classList.add('darklight');
            body.classList.remove('brightlight');
        } else {
            body.classList.add('brightlight');
            body.classList.remove('darklight');
        }
    });
} else {
    console.log('devicelight event not supported');
}
```

## 参考

1. [DeviceLightEvent MDN web api](https://developer.mozilla.org/en-US/docs/Web/API/DeviceLightEvent)
