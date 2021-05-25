# Intersection Observer


- 观察目标元素与其祖先元素或顶级文档视窗的交叉状态的方法。
- 祖先元素与视窗 ViewPort 称为 Root
-
- - 一旦IntersectionObserver 被创建就无法修改，用来监听可见区域的特定内容。你可以在一个观察者中监听多个元素的变化。

- 构造器
- 属性
- 方法

## 示例

```javascript
var intersectonObserver = new IntersectionObserver(function (enties) {
  if (entries[0].intersectonRatio <= 0) return;

  loadItems(10);
  console.log('sss')
} )

intersectonObserver.observe(document.querySelector('scrollFooter'));
```
