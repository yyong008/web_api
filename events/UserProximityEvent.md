# UserProximityEvent

推荐使用

>UserProximityEvent指示附近的物理对象是否存在通过使用装置的接近传感器。

## 基本示例

```ts
window.addEventListener('userproximity', function(){
    if (event.near) {
        navigator.mozPower.screenEnabled = false;
    } else {
        navigator.mozPower.screenEnabled = true
    }
}) 
```


## 参考

1. [UserProximityEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/UserProximityEvent)