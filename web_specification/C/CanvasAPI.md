# Canvas API

Canvas API 提供了一个通过 JavaScript 和 HTML 的 `<canvas>` 元素来绘制图形的方式。它可以用于动画、游戏绘画、数据可视化、图片编辑以及实时视频处理等方面。

Canvas API 主要聚焦与 2D 图形。而同样使用 `<canvas>` 元素的 WebGL API 则用于绘制硬件加速的 2D 和 3D图形。

## 基础示例

```html
<canvas id="canvas"></canvas>
```

### JavaScript

Document.getElementById() 方法获取 <canvas> 元素的引用。接着 HTMLCanvasElement.getContext() 方法获取这个元素的 context - 图像稍后将在被渲染。

由 CanvasRenderingContext2D 接口完成实际的绘制。 fillStyle 属性让长方形变成绿色。

fillRect() 方法将它的左上角放在(10, 10), 把它的大小设置成款 150 高 100。

```javascript
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
```

## 参考

1. [Canvas MDN web api](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)

- HTMLCanvasElement
- CanvasRenderingContext2D
- CanvasGradient
- CanvasImageSource
- CanvasPattern
- ImageBitmap
- ImageData
- RenderingContext
- TextMetrics
- OffscreenCanvas
- Path2D
- ImageBitmapRenderingContext

## 教程与指导

- Canvas 教程
- 代码片段： Canvas
- 深入 HTML5 Canvas
- Demo: 一个基础的光线追踪器
- 使用 Canvas 绘制视频

## 库

- EaslJS
- Fabric.js
- heatmap.js
- JavaScript InfoVis Tookit
- Knova.js
- p5.js
- Paper.js
- Phaser
- Processing.js
- Pts.js
- Rekapi
- Scrawl-canvas
- ZIM

