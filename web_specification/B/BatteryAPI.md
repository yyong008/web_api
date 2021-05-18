# Battery Status API

## Battery API

提供了系统级别的信息

这个api 是在 window.navigator 扩展了一个 navigator.getBattery 方法，返回的是一个 Bater promise，完成后传递一个 BatteryManager 对象，并提供了一些新的可操作电池状态事件。

## 事件

- charingchange
- levelchange
- chargingtimechange
- dischargingtimechange

```javascript
navigator.getBattery().then(function (battery) {
  console.log("Battery charing?" + (battery.charing ? "Yes" : "No"));
  console.log("Battery level: " + battery.level * 100 + "%");
  console.log("Battery discharging time: " + battery.dischargingTime + "seconds");

  battery.addEventListener("chargingchange", function() {
    console.log("Battery  charging?" + (battery.charging ? "Yes" : "No"));
  } )

  battery.addEventListener("levelchange", function () {
    console.log("Battery Level:" + battery.level * 100 + "%");
  });

  battery.addEventListener("dischargingtimechange", function() {
    console.log("Battery discharging time: " + battery.dischargingTime + "seconds");
  } );
```

## 参考

1. [Battery Status API](https://developer.mozilla.org/zh-CN/docs/Web/API/Battery_Status_API)

