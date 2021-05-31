# ResizeObserverAPI

- 高效的机制
  - 可监视元素的大小变化，每次大小的变化都可以通知观察者
- 使用
  - 响应式设计中，监听元素大小的变化
  
## 示例

```javascript
const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        if (entry.contentBoxSize) {
            entry.target.style.borderRaduis = Matg.min(100, (entry.contentBoxSize.inline / 100) + (entry.contentBoxSize.blockSize / 10)) + 10;
        } else {
            entry.target.style.borderRadius = Math.min(100, (entry.contentRect.width / 10) + (entry.contentRect.height/10)) + 'px';
        }
    }
});

resizeObserver.observer(document.querySelecto('div'));
```