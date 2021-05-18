# Borcode Detection API

条形码检测 API，还是不完整的，仍然处于草案阶段。他可以用来检测图像当中的线性条形二维码和二维条形码。

## detect 方法

- Blob
- ImageData
- CanvasImageSource
- BarcodeDetector

## 示例

```javascript
if (!('BarcodeDetector' in window)) {
  console.log('Barcode Detector is not supported by this browser.');
} else {
  console.log("Barcode Detector supported!);
  
  var barcodeDetector = new BarcodeDetector({formats: ["code_39", "codabar", "ean_13"]";
```

## 支持的格式

```javascript
BarcodeDetector.getSupportedFormats()
  .then(supportedFormats => {
    supportedFormats.forEach(format => console.log(format));
  } )
```

## 参考

1. [条形码检测 API](https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API)
