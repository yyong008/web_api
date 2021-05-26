# NavigationTiming

NavigationTiming 提供了可用衡量一个网站性能的数据。与用相同的其他基于 JavaScript 的机制不一样。该 API 的题哦难过了更游泳的和更加准确的端到端延迟数据  .

- Performance
- PerformanceNavigationTiming

```javascript
function onload() {
  var now = new Date.getTime();
  var page_load_time = now - performance.timing.navigationStart;
  console.log("User-perceived page loading time" + page_load_time);
} 
```

- navigationStart
- unloadEventStart
- unloadEventEnd
- redirectStart
- redirectEnd
- fetchStart
- domainLookupStart
- domainLookupEnd
- connectStart
- connectEnd
- secureConnectionStart
- requestStart
- requestEnd
- domLoading
- domInteractive
- domContentLoadedEventStart
- domContentLoadedEventEnd
- domComplete
- loadEventStart
- loadEventEnd

window.performance.navigation 对象存储了两个属性，它表示触发页面的加载的原因，这些原因可能是页面重定向，前进后退按钮的普通 URL  加载。

- TYPE_NAVIGATE
- TYPE_RELOAD
- TYPE_BACK_FORWARD
- TYPE_UNDEFOND

window.performance.navigation.redirectCount

```javascript
var perfData = window.performance.timing;

var pageLoadingTime = perfData.loadEventEnd - perfeData.navigationStart;
```
