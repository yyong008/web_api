# MediaStream Recording API

- NediaRecorder
- 录制过程
  - 建立一个 MediaStream
  - 创建一个 MediaRecorder
  - 给 dataavailable 对象指定源
  - 一旦媒体播放，就准备录制
  - dataavailable 事件函数 blob.
  - 媒体源停止播放的时候，自动的结束录制
  - 你可随时的结束录制  MediaRecorder.stop



