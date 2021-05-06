# HTML 接口

HTML 相关的接口中，使用 HTMLDocument 来描述包含了 HTML 的文档。HTML 规范也是继承 [Document](./Document.md).

## HTML 元素接口

### A 系列

- HTMLAnchorElement 超链接元素接口
- HTMLAreaElement 区域元素接口
- HTMLAudioElement 音频接口

### B 系列

- HTMLBaseElement 接口包含一份HTML文件的基础 URI设定
- HTMLBodyElement 接口提供了特殊的属性（除了它们继承的常规的HTMLElement接口）以外，还可以处理 body 元素。
- HTMLBRElement 接口代表一个 HTML 换行元素 (`<br>`)，它从 HTMLElement 继承。
- HTMLButtonElement 接口提供操作button元素 （除了 `<button>` 对象，这个接口对继承了该对象的元素也有效）的属性和方法。

### C 系列

- HTMLCanvasElement 接口提供用于操纵`<canvas>`元素的布局和表示的属性和方法。 HTMLCanvasElement接口还继承了HTMLElement接口的属性和方法。

### D 系列

- HTMLDataElement 接口提供了HTMLElement用于操作`<data>`元素的特殊属性（除了常规接口以外，还可以通过继承使用它）。
- HTMLDataListElement 接口提供了特殊的属性（除了HTMLElement对象接口以外，还可以通过继承对其进行使用）来操纵`<datalist>`元素及其内容。
- HTMLDivElement 接口提供了一些特殊属性（它也继承了通常的HTMLElement接口）来操作`<div>`元素。
- HTMLDListElement 接口提供了一些特殊的属性（除了常规HTMLElement接口的属性以外，还可以通过继承来使用它）来操纵定义列表（`<dl>`）元素。

### E 系列

- HTMLElement HTML元素接口表示所有的 HTML元素。一些HTML元素直接实现了HTMLElement的接口，其它的间接实现HTML元素接口。
- HTMLEmbedElement 接口提供了HTMLElement用于操作`<embed>`元素的特殊属性（除了常规接口以外，还可以通过继承使用它）。

### F 系列

- HTMLFieldSetElement 接口 DOM fieldset元素公开HTMLFieldSetElement   （HTML 4 HTMLFieldSetElement）接口，该接口提供特殊的属性和方法（除了常规元素对象接口之外，它们还可以通过继承提供给他们）以操纵字段集元素的布局和表示。
- HTMLFontElement 接口 不推荐使用
- HTMLFormElement 接口可以创建和修改，`<form>` 对象； 它继承了 HTMLElement 接口的方法和属性。
- HTLMLFrameElement 接口
- HTMLFrameSetElement 接口
- HTMLHeadElement 接口
- HTMLHeadingElement 接口

### H 系列

- HTMLHtmlElement 接口
- HTMLHRElement 接口

### I 系列

- HTMLIFrameElement 接口
- HTMLImageElement 接口
- HTMLInputElement 接口

### K 系列

- HTMLKeygenElement 接口

### L 系列

- HTMLLabelElement 接口
- HTMLLegendElement 接口
- HTMLLIElement 接口
- HTMLLinkElement 接口

### M 系列

- HTMLMapElement 接口
- HTMLMediaElement 接口
- HTMLMenuElement 接口
- HTMLMetaElement 接口
- HTMLMeterElement 接口
- HTMLModElement 接口

### O 系列

- HTMLObjectElement 接口
- HTMLOListElement 接口
- HTMLOptGroupElement  接口
- HTMLOptionElement 接口
- HTMLOutputElement 接口

### P 系列

- HTMLParagraphElement 接口
- HTMLParamElement 接口
- HTMLPreElement 接口
- HTMLProgressElement 接口

### Q 系列

- HTMLQuoteElement 接口

### S 系列

- HTMLScriptElement 接口
- HTMLSelectElement 接口
- HTMLSourceElement 接口
- HTMLSpanElement 接口
- HTMLStyleElement 接口

### T 系列 

- HTMLTableElement 接口
- HTMLTableCaptionElement 接口
- HTMLTableCellElement 接口
- HTMLTableDataCellElement 接口
- HTMLTableHeaderCellElement 接口
- HTMLTableColElement 接口
- HTMLTableRowElement 接口
- HTMLTableSelectionElement 接口
- HTMLTextAreaElement 接口
- HTMLTimeElement 接口
- HTMLTitleElement 接口
- HTMLTrackElement 接口

### U 系列

- HTMLUListElement 接口
- HTMLUnknowElement 接口

### V 系列

- HTMLVideoElement 接口
