# Sanitizer API Concepts and Usage

可以获取不授信任的 HTML 字符串，并对其进行清理以安全地插入文档的 DOM 中。

```javascript

// our input string to clean
const stringToClean = 'Some text <b><i>with</i></b> <blink>tags</blink>, including a rogue script <script>alert(1)</script> def.';

const result = new Sanitizer().sanitizeToString(stringToClean);
console.log(result);
// Logs: "Some text <b><i>with</i></b>, including a rogue script def."
```

## ggge

```javascript
// our input string to clean
const stringToClean = 'Some text <b><i>with</i></b> <blink>tags</blink>, including a rogue script <script>alert(1)</script> def.';

const result = new Sanitizer().sanitize(stringToClean);
// Result: A DocumentFragment containing text nodes and a <b> element, with a <i> child element
```

