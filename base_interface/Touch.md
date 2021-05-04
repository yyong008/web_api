# Touch

>Touch 对象表示在触控设备上的触摸点。通常是指手指或者触控笔在触屏设备或者触摸板上的操作。

## 从 lib.dom.d.ts 中看 Touch

```ts
interface Touch {
    readonly altitudeAngle: number;
    readonly azimuthAngle: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly force: number;
    readonly identifier: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly radiusX: number;
    readonly radiusY: number;
    readonly rotationAngle: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly target: EventTarget;
    readonly touchType: TouchType;
}

declare var Touch: {
    prototype: Touch;
    new(touchInitDict: TouchInit): Touch;
};
```

## 参考

1. [Touch MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/API/Touch)