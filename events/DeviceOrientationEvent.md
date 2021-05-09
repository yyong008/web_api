# DeviceOrientationEvent

## 简单用法

```ts
var deviceOrientationEvent = new DeviceOrientationEvent(type[, options])
```

## 从 lib.dom.d.ts 中看 DeviceOrientationEvent 

```ts
interface DeviceOrientationEvent extends Event {
    readonly absolute: boolean;
    readonly alpha: number | null;
    readonly beta: number | null;
    readonly gamma: number | null;
}

declare var DeviceOrientationEvent: {
    prototype: DeviceOrientationEvent;
    new(type: string, eventInitDict?: DeviceOrientationEventInit): DeviceOrientationEvent;
    requestPermission(): Promise<PermissionState>;
};
```

## 参考

1. [DeviceOrientationEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/DeviceOrientationEvent)