# 媒体流处理 API 

是描述音频或视频数据流 WebRTC 的一部分，处理它们的方法，与数据类型相关的约束，成功和错误以及在处理期间触发的事件。

## 基本

操作一个 MediaStream 对象代表音频或者视频相关数据的流量。通常一个 MediaStream 是一个简单的 URL 字符串它可以引用引用存储在 DOM 中的数据 File, 或者 Blob 对象建立 `window.URL.createObjectURL())`。如视频描述。

