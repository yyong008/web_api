# Screen

>Screen 接口表示一个屏幕窗口，往往指的是当前正在被渲染的window对象，可以使用 window.screen 获取它。

## 从 lib.dom.d.ts 中看 Screen

```ts
interface Screen {
    readonly availHeight: number;
    readonly availWidth: number;
    readonly colorDepth: number;
    readonly height: number;
    readonly orientation: ScreenOrientation;
    readonly pixelDepth: number;
    readonly width: number;
}

declare var Screen: {
    prototype: Screen;
    new(): Screen;
};
```

## 参考

1. https://developer.mozilla.org/zh-CN/docs/Web/API/Screen
