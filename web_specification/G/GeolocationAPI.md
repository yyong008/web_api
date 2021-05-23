# Geplocation

地理位置通过 navigation.getlocation 提供

```javascript
if ("geolocation" in navigation) {
  /* 地理位置可用 */
} else {
  /* 地理位置不可用 */
}
```

## 获取当前定位

```javascript
navigation.gaolocation.getCurrenPosition(function() {
  do_something(position.coords.latitude, position.coords.longitude);
} ) 
```

## 定位监视

- watchPosition

## 调整返回结果

- clearWatch

## 描述定位

- coords
- position

## 处理错误

```javascript
function errorCallback(error) {
  alert("")
} 
```

## 地理位置示例

```javascript

```

## 授权描述

## 浏览器兼容性

## 参考


