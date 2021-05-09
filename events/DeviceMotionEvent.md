# DeviceMotionEvent

>DeviceMotionEvent 提供 Web 开发人员与有关设备的位置和方向变化的速度信息。

## 简单用法

```ts
var deviceMotionEvent = new DeviceMotionEvent(type[, options])
```

## 从  lib.dom.d.ts 中看 DeviceMotionEvnt

```ts
interface DeviceMotionEvent extends Event {
    readonly acceleration: DeviceMotionEventAcceleration | null;
    readonly accelerationIncludingGravity: DeviceMotionEventAcceleration | null;
    readonly interval: number;
    readonly rotationRate: DeviceMotionEventRotationRate | null;
}

declare var DeviceMotionEvent: {
    prototype: DeviceMotionEvent;
    new(type: string, eventInitDict?: DeviceMotionEventInit): DeviceMotionEvent;
    requestPermission(): Promise<PermissionState>;
};

interface DeviceMotionEventAcceleration {
    readonly x: number | null;
    readonly y: number | null;
    readonly z: number | null;
}

interface DeviceMotionEventRotationRate {
    readonly alpha: number | null;
    readonly beta: number | null;
    readonly gamma: number | null;
}
```

## 参考

1. [DeviceMotionEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)
