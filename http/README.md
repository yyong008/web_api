# HTTP

## Content-Type

内容类型，用于指定网络文件类型和网页编码。

- 在响应中，告诉 `客户端` 实际返回的内容的内容类型
- Content-Type 与 MIME_types 息息相关
- Content-Type 与 字符编码息息相关

所以我们 Content-Type 中一般配置了两个字段：charset/mine_types。

## 与 POST 请求相关的  Content-Type

1. `Content-Type: application/x-www-form-urlencoded;charset=utf-8`
2. `Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryrGKCBY7qhFd3TrwA`
3. `Content-Type: text/xml`
4. `Content-Type: application/json;charset=utf-8`

### application/x-www-form-urlencoded

在 post 方法中使用，类似于 get 中，使用 query 的方式进行提交，中间使用 & 符号进行链接。

###  multipart/form-data;

使用 二进制文件进行提交，使用 [FormData](../form-data/README.md) 构造函数来进行操作。

### text/xml

使用 text/xml 的提交方式

### application/json

使用 json 的数据方式进行提交。

## 参考

1. [Content-Type](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type)
2. [HTTP content-type](https://www.runoob.com/http/http-content-type.html)
3. [MIME_types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
