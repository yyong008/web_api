# Navigator

>Navigator 接口表示用户代理的状态和标识。 它允许脚本查询它和注册自己进行一些活动

## 依赖关系

- 不从NavigatorID, NavigatorLanguage, NavigatorOnLine, NavigatorGeolocation, NavigatorPlugins, NavigatorUserMedia, 和 NetworkInformation 中继承任何属性，但是实现了定义在这些对象中的如下属性。
- 使用只读 `window.navigator` 属性检索 navigator 对象。

- MSFileSaver
- MSNavigatorDoNotTrack
- NavigatorAutomationInformation
- NavigatorBeacon
- NavigatorConcurrentHardware
- NavigatorContentUtils
- NavigatorCookies
- NavigatorID
- NavigatorLanguage
- NavigatorOnLine
- NavigatorPlugins
- NavigatorStorage
 
## 从 lib.dom.d.ts 中看 Navigator

```ts
interface Navigator extends MSFileSaver, MSNavigatorDoNotTrack, NavigatorAutomationInformation, NavigatorBeacon, NavigatorConcurrentHardware, NavigatorContentUtils, NavigatorCookies, NavigatorID, NavigatorLanguage, NavigatorOnLine, NavigatorPlugins, NavigatorStorage {
    readonly activeVRDisplays: ReadonlyArray<VRDisplay>;
    readonly clipboard: Clipboard;
    readonly credentials: CredentialsContainer;
    readonly doNotTrack: string | null;
    readonly geolocation: Geolocation;
    readonly maxTouchPoints: number;
    readonly mediaDevices: MediaDevices;
    readonly msManipulationViewsEnabled: boolean;
    readonly msMaxTouchPoints: number;
    readonly msPointerEnabled: boolean;
    readonly permissions: Permissions;
    readonly pointerEnabled: boolean;
    readonly serviceWorker: ServiceWorkerContainer;
    getGamepads(): (Gamepad | null)[];
    getUserMedia(constraints: MediaStreamConstraints, successCallback: NavigatorUserMediaSuccessCallback, errorCallback: NavigatorUserMediaErrorCallback): void;
    getVRDisplays(): Promise<VRDisplay[]>;
    msLaunchUri(uri: string, successCallback?: MSLaunchUriCallback, noHandlerCallback?: MSLaunchUriCallback): void;
    requestMediaKeySystemAccess(keySystem: string, supportedConfigurations: MediaKeySystemConfiguration[]): Promise<MediaKeySystemAccess>;
    sendBeacon(url: string, data?: BodyInit | null): boolean;
    share(data?: ShareData): Promise<void>;
    vibrate(pattern: number | number[]): boolean;
}

declare var Navigator: {
    prototype: Navigator;
    new(): Navigator;
};
```

## 参考

1. [Navigator MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator)