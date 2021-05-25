# 媒体会话 API

Media Session API 提供了一种自定义媒体通知的方法。它通过提供源数据一以提供用户代理显示您的web 应用程序正在播放的媒体来实现。

## 访问媒体会话 API

```javascript
navigator.mediaSession.playbackState = 'playing';
```

## Interface

- MediaMetadata
- MediaSession
- MediaImage
- MediaPositionState
- MediaSessionActionDetails

## 例子

```javascript

if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: 'Unforgettable',
    artist: 'Nat King Cole',
    album: 'The Ultimate Collection (Remastered)',
    artwork: [
      { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
      { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
      { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
      { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
      { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
      { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
    ]
  });

  navigator.mediaSession.setActionHandler('play', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('pause', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('stop', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('seekbackward', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('seekforward', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('seekto', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('previoustrack', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('nexttrack', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('skipad', function() { /* Code excerpted. */ });
}
```

一些用户代理在移动设备上禁用媒体元素的自动播放，并需要用户手势来启动媒体。下面的示例将pointerup事件添加到页面播放按钮上，然后将其用于启动媒体会话代码：


```javascript
playButton.addEventListener('pointerup', function(event) {
  var audio = document.querySelector('audio');

  // User interacted with the page. Let's play audio...
  audio.play()
  .then(_ => { /* Set up media session controls, as shown above. */ })
  .catch(error => { console.log(error) });
});
```

