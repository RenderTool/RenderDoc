---
title: NT-1.HTTP
order: 1
category:
  - unreal
---
<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
什么是HTTP?
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
HTTP（超文本传输协议）是一种用于在互联网上传输信息的应用层协议。
</chatmessage>

## HTTP

| 协议     | 全称                                 | 描述                                                     |
|--------|------------------------------------|--------------------------------------------------------|
| HTTP   | Hyper Text Transfer Protocol       | 用于从服务器传输超文本到本地浏览器的传送协议。                                |
| HTTPS  | HyperText Transfer Protocol Secure | 一种通过计算机网络进行安全通信的传输协议，利用 SSL/TLS 加密数据包，提供身份认证和保护隐私与完整性。 |
| 默认端口   | 80                                 | 443                                                    |
| URL 示例 | http://                            | https://                                               |

<hr>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
为什么会有HTTPS
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
它是HTTP的安全版本，通过使用TLS（Transport Layer Security）或其前身SSL（Secure Sockets Layer）协议，对数据进行加密和身份验证，从而保护数据的完整性和隐私。
</chatmessage>

### HTTPS


![](..%2Fassets%2Fhttp.jpeg)

<chatmessage avatar=" ../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
HTTPS对应的通信时序
</chatmessage>

![](..%2Fassets%2Fhttp-auth-sequence-diagram.jpg)

<chatmessage avatar=" ../../assets/emoji/kclr.png" :avatarWidth="40" >
看不懂!我想知道浏览器里长啥样!
</chatmessage>


<chatmessage avatar=" ../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
浏览器里一般是这样的,这个证书一般是要钱的!
</chatmessage>

![](..%2Fassets%2Fhttps.jpg)

<hr>

<chatmessage avatar=" ../../assets/emoji/hh.png" :avatarWidth="40">
很好,可是怎么在UE中用他!
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
别急,先把插件安排上!
</chatmessage>

![](..%2Fassets%2Fhttpplugin.png)

<chatmessage avatar=" ../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
使用插件前,先了解一下HTTP基本流程.
</chatmessage>


### HTTP基本流程
HTTP（Hypertext Transfer Protocol）是一种用于传输超文本的协议，通常用于在客户端和服务器之间传递数据。

![](..%2Fassets%2Ffetching_a_page.jpg)

1. **建立连接：**
    - 客户端（例如，Web浏览器）向服务器发起连接请求。
    - 服务器监听来自客户端的连接请求。

2. **建立TCP连接：**
    - 如果使用的是HTTP，通常是通过[TCP](https://developer.mozilla.org/zh-CN/docs/Glossary/TCP)（Transmission Control Protocol）建立连接。连接建立后，客户端和服务器之间可以进行双向通信。

3. **发送HTTP请求（Request）：**
    - 客户端向服务器发送HTTP请求。请求包括：
        - 请求行（Request line）
          - 请求的方法（GET、POST、等需指定对资源的操作）。
          - 请求的URL：指定请求的资源。
          - 请求的HTTP版本：指定使用的HTTP协议版本。
        - 请求头部（Request headers）：包含关于请求的其他信息，如用户代理、接受的数据类型等。
        - 请求体（Request body）（对于POST等请求方法）：包含发送给服务器的数据。

```http request
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: zh
```

![](..%2Fassets%2Fhttprequest.png)

![](..%2Fassets%2Fhttp_request.png)

4. **服务器处理请求：**
    - 服务器收到HTTP请求后，解析请求并确定如何响应。
    - 执行相应的操作，例如获取请求的资源、处理表单数据等。

5. **服务器发送HTTP响应（Response)：**
    - 服务器创建一个HTTP响应。
    - 响应包括：
        - 响应状态码(Response Code)：指示请求成功、失败或其他状态。
        - 响应头（Response Headers）：包含关于响应的其他信息，如服务器类型、内容类型等。
        - 响应体(Response Body)：包含服务器返回给客户端的数据。

```http request
/*状态行*/
HTTP/1.1 200 OK
/*消息报头-start*/
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html
/*消息报头-end*/

<!DOCTYPE html>…（此处是所请求网页的 29769 字节）
```

![](..%2Fassets%2Fhttp_response.png)

![](..%2Fassets%2Fhttpmessage.jpg)



6. **传输数据：**
    - 服务器通过建立的TCP连接将HTTP响应传输到客户端。
    - 客户端接收并解析响应。

7. **关闭连接：**
    - 客户端和服务器其中一方或双方关闭TCP连接。这取决于连接是否需要保持活动状态以进行后续请求。
    - 


<hr>

<chatmessage avatar=" ../../assets/emoji/hh.png" :avatarWidth="40" >
看不懂!请求方法是什么?
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
请求方法是客户端向服务器请求执行特定操作的方式。一般有以下几种请求方法:
</chatmessage>


### HTTP请求操作

1. **GET**

> 用于从服务器获取指定资源的数据。GET 请求通常用于获取网页、图像、文本文件等。它是一个幂等操作，即多次发起相同的GET请求会产生相同的结果。

2. **POST**
> 用于向服务器提交数据，通常用于向服务器发送表单数据或上传文件。POST请求对提交的数据没有长度限制，且可以发送敏感信息（例如密码）。

3. **PUT**
> 用于向服务器上传数据，将指定资源的内容替换为请求中提供的数据。

4. **DELETE**
>用于从服务器删除指定资源。

5. **HEAD**
>与GET类似，但服务器只返回响应头部信息，而不返回实际内容主体。通常用于获取资源的元数据，而无需获取实际数据。

6. **OPTIONS**
>用于获取服务器支持的HTTP方法列表。可以用来确定服务器支持哪些方法。

7. **PATCH**
>用于部分更新资源，只更新资源的一部分内容。

8. **TRACE**
>用于在请求-响应链上的代理服务器之间跟踪请求的传输。

9. **CONNECT**
>用于将连接改为隧道，通常用于加密连接（例如TLS/SSL）的代理服务器。

<hr>

<chatmessage avatar=" ../../assets/emoji/hh.png" :avatarWidth="40" >
响应头和请求头是两个概念嘛?
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
是的，请求头和响应头是两个概念，它们分别指HTTP请求和HTTP响应中包含的头部信息。
</chatmessage>

1. **请求头（Request Headers）：**
    - 请求头是包含在HTTP请求中的信息，用于向服务器传递额外的元数据。请求头通常包括了客户端的信息、所期望的响应格式、身份验证凭证等。一些常见的请求头包括`User-Agent`、`Accept`、`Content-Type`等。

2. **响应头（Response Headers）：**
    - 响应头是包含在HTTP响应中的信息，用于向客户端传递关于响应的元数据。响应头包括了服务器的信息、响应数据的类型、缓存控制等信息。一些常见的响应头包括`Server`、`Content-Type`、`Cache-Control`等。

请求头和响应头都以键值对的形式存在，例如：

``` http request
// 请求头
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8

// 响应头
Server: Apache/2.4.29 (Ubuntu)
Content-Type: text/html; charset=UTF-8
Cache-Control: max-age=3600
```

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
回到正题,官方的HTTP插件.
</chatmessage>

## UEHTTP

### 插件目录

![](..%2Fassets%2Fchajmul.png)

### 蓝图节点

![](..%2Fassets%2Fgfhttpblueprint.png)

### 主要节点

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
我们已经清楚HTTP的基本流程,简单来说需要实现请求和接收,官方优雅的封装了这一过程.
</chatmessage>

![](..%2Fassets%2Fjtzyhttprequest.jpg)

## 扩展阅读

### 套接字-TCP-HTTP

- 套接字  
  |  
  +--- TCP  
  |     |  
  |     +--- HTTP


## 测试工具

[参考文档](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)

[在线测试2](https://www.sojson.com/http/test.html)