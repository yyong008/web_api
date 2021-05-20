# CSS 类型对象模型

CSS 类型对象模型 API，通过将 CSS 值公开为 JavaScript 对象而不是字符串，从而简化 CSS 属性操作。与 相比，这个不仅简化 CSS 操作，从而减轻了对性能的负面影响，ElementCSSInlineStyle.style

通常， CSS 值可以字符串形式在 JavaScript 中读取和写入，这个可能很慢且很麻烦。CSS 类型对象模式 API 通过使用专用的 JS 对象来表示与基础值进行交互的接口，这些 JS 对象比字符串解解析和链接更容易，更可靠的进行操作和理解。这对于作者来说比较容易。例如：数值会反应在实际的 JS 数字中，并为他们定义了单位感知的数字运算。通常，它更快，因为可以直接操作，然后廉价将其转换回基础值，而无需构建和解析 CSS 字符串，

CSS Typeed OM 都允许分配给 CSS 属性的值进行有效的操作，同时启用可维护的代码，是代码更容易理解且更容易编写。

## 接口

### CSSStyleValue

- CSSStyleValue.parse(property, cssText)
- CSSStyleValue.parseAll()

### StylePropertyMap

- StylePropertyMap.set()
- StylePropertyMap.append()
- StylePropertyMap.delete()
- StylePropertyMap.clear()

### CSSUnparserdValue

- CSSUnparserdValue.CSSUnparserdValue() 构造函数
- CSSUnparserdValue.entries()
- CSSUnparserdValue.forEach()
- CSSUnparserdValue.keys()

### CSSKeywordValue


- CSSKeywordValue.CSSKeywordValue() 构造函数

### CSSStyleValue 接口

- CSSImageValue 对象
- CSSKeywordValue
- CSSMathValue
  - CSSMathInvert -> calc()
  - CSSMathMax -> max()
  - CSSMathMin -> min()
  - CSSMathNegate -> 是否传递它的值
  - CSSMathProduct -> 表示通过调用所获的结果 add/sub/toSum
  - CSSNumbericValue
  - CSSMathSum
- CSSNumbericValue
  - add
  - sub
  - mul
  - div
  - min
  - max
  - equals
  - to
  - toSum
  - type
  - parse

### CSSPositionValue

### CSSTransformValue

表示 transform 列表值的接口。他们包含“一个或者多个 CSSTransformComponents” 他们代表了各个 transform 函数值。

### CSSUnitValue

表示数值的接口，可以将数值表示为单个或命名的数字和百分比

### CSSUnparsedValue

表示引用自定义属性的属性值。它由字符串片段和变量引用的列表组成。

