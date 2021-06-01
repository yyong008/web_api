# 屏幕唤醒锁 API

- WakeLock
- WakeLockSentinel
- Navigator.wakelock

```javascript
if ('wakeLock' in navigator) {
  isSupported = true;
  statusElem.textContent = 'Screen Wake Lock API supported!';
} else {
  wakeButton.disabled = true;
  statusElem.textContent = 'Wake lock is not supported by this browser.';
}
```
