# ProgressEvent

ProgressEvent接口表示事件测量的底层过程的进展，比如一个HTTP请求（用于XMLHttpRequest，或的底层资源的装载`<img>`，`<audio>`，`<video>`，`<style>`或`<link>`）

## 继承关系

1. ProgressEvent
2. Event

## 基本用法

用于 xhr 的请求进度控制

```ts
let progressBar = document.getElement("p"),
    clinet = new XMLHttpRequest();

client.open("GET", "");
client.onprogress  = function (pe) {
    if(pe.lengthComputable) {
    progressBar.max = pe.total
    progressBar.value = pe.loaded
  }
}

client.onlodend = function (pe) {
    progressBar.value = pe.load
}

client.send()
```

## 参考

1. [ProgressEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent)
