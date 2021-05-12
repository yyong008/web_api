# WebGLContextEvent

>WebContextEvent接口是的一部分的WebGL API和是针对响应于状态改变到WebGL的渲染上下文生成的事件的接口。

## 继承关系

- WebGLContextEvent
- Event

## 基本用法

```ts
let wgl = canvasEl.getContext('webgl');

canvasEl.addEventListener('webglcontextlost',function (e) {
    console.log(e)
}, false);

gl.getExtension('WEBGL_lose_context').loseContext();
```

## 参考

1. [WebGLContextEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/WebGLContextEvent)
