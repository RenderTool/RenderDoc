---
title: JDK|JWT
order: 6
---

>前文我们已经得知一些数据需要后端简单有验证，比如手机号位数、账号长度限制等。
而HTTP又是一种无状态协议，不能像Websocket那样保持连接，一些登录后才能访问的数据，该如何判断验证？
如何保证信息安全？

## 描述

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
JWT（JSON Web Token）是一种用于在不同系统之间安全传输信息的紧凑、URL安全的方式。它是基于JSON的，并且因为其结构简单且传输高效，广泛用于认证和信息交换。以下是JWT的工作原理和相关细节：
</chatmessage>

## JWT的结构

![](assets%2Fjwt001.png)

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
一个完整的JWT由三部分组成：
</chatmessage>

1. **Header（头部）**：描述JWT的元数据
2. **Payload（负载）**：承载实际传输的信息
3. **Signature（签名）**：用于验证信息的完整性和真实性

每个部分通过点 (`.`) 分隔开，形成如下格式的JWT：
```
xxxxx.yyyyy.zzzzz
```

#### 1. Header|头部
Header 通常包含两个部分：
- `alg`：签名的算法（例如 HMAC SHA256 或 RSA）
- `typ`：令牌的类型，通常是 "JWT"

例如：
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```
这个JSON对象会被Base64Url编码，形成JWT的第一部分。

#### 2. Payload|负载
Payload是JWT的第二部分，它包含声明（claims）。声明是一些关于实体（通常是用户）以及其他数据的声明。声明分为三类：
- **Registered claims**: 预定义的声明，例如 `iss`（签发者）、`exp`（过期时间）、`sub`（主题）、`aud`（受众）等。
- **Public claims**: 自定义的声明，但需要避免与IANA定义的保留关键字冲突。
- **Private claims**: 私有声明，只在双方之间使用，例如用户ID。

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```
<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
这个JSON对象也会被Base64Url编码，形成JWT的第二部分。注意JWT本质不是加密手段，所以不建议在负载部分写入密码等敏感数据。
</chatmessage>

#### 3. Signature|签名
Signature 由三部分组成：
- 编码后的 Header
- 编码后的 Payload
- 密钥

这些数据通过头部指定的算法进行加密生成签名。例如，如果使用HMAC SHA256算法，签名将会是：
```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
Signature用于验证消息的发送者是否拥有密钥，并且消息在传输过程中没有被篡改。
</chatmessage>

### JWT 的工作流程

1. **用户登录**：
    - 用户提供用户名和密码。
    - 服务器验证用户的凭证。
    - 如果验证通过，服务器生成一个JWT，其中包含用户ID、权限等信息。

2. **JWT的返回**：
    - 生成的JWT返回给用户。一般来说，JWT会被存储在客户端的本地存储或Cookie中。

3. **客户端请求**：
    - 在后续的请求中，客户端将JWT附加在HTTP请求头中（通常在Authorization头部，格式为`Bearer <token>`）。
    - 服务器接收到请求后，解析并验证JWT。

4. **JWT验证**：
    - 服务器通过验证JWT的签名来确认JWT的有效性。
    - 如果验证通过，服务器提取出JWT中的用户信息，并基于这些信息处理请求。

5. **响应请求**：
    - 服务器根据请求处理结果返回相应的数据。


## 小试牛刀

![](assets%2Fjwt002.png)

### 1. 引入依赖

```xml
<!-- pom.xml -->
<!--引入JWT-->
<dependency>
    <groupId>com.auth0</groupId>
    <artifactId>java-jwt</artifactId>
    <version>3.10.0</version>
</dependency>
```

### 2.生成验证Token测试用例

```java
package com.exorcist;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.junit.jupiter.api.Test;

import java.util.Calendar;
import java.util.HashMap;

class JwtTokenTool {

    @Test
    public void TestTokenGen() {

        HashMap<String,Object> map = new HashMap<>();
        Calendar instance = Calendar.getInstance();
        instance.add(Calendar.SECOND,5);//过期时间，按具体业务定义
        String token = JWT.create()
                .withHeader(map) //可以不设定，就是使用默认的
                .withClaim("userId",20)//payload  //自定义用户名
                .withClaim("username","zhangsan")
                .withExpiresAt(instance.getTime()) //指定令牌过期时间
                .sign(Algorithm.HMAC256("fdahuifeuw78921"));//签名

        System.out.println(token);

    }
    @Test
    public void TestTokenParse() {
        String token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjQ4Njc2NzIsInVzZXJJZCI6MjAsInVzZXJuYW1lIjoiemhhbmdzYW4ifQ.cZokDrBg1BPnIJ_ZkHYrPxSE7OYSumhCFoTh0n4xWZo";

        JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256("fdahuifeuw78921")).build();
        DecodedJWT decodedJWT = jwtVerifier.verify(token);
        decodedJWT.getClaim("userId").asInt();//获取负载里面对应的内容
        System.out.println( decodedJWT.getClaim("userId").asInt().toString());
        decodedJWT.getClaim("username").asString();
        decodedJWT.getExpiresAt();//获取过期时间
    }

}
```

### 3.常见异常

>SignatureVerificationException //签名不一致异常
TokenExpiredException //令牌过期异常
AlgorithmMismatchException //算法不匹配异常
InvalidClaimException //失效的payload异常（传给客户端后，token被改动，验证不一致）

### 4.封装工具类

```java
package com.exorcist.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Map;

@Component
@Data
@ConfigurationProperties("jwt.data")
@Slf4j
public class JwtUtil {

    private static final String secret = "GaohHeExorcsit";//令牌
    private static int expiration = 60*60*12;//时间

    // 根据负载生成 token
    public static String createToken(Map<String, Object> claims) {
        return JWT.create()
                .withClaim("claims",claims)
                .withExpiresAt(expirationDate())
                .sign(Algorithm.HMAC256(secret));
    }

    // 验证 token 是否有效
    public static Map<String, Object> parseToken(String token) {
        return JWT.require(Algorithm.HMAC256(secret))
                .build()
                .verify(token)
                .getClaim("claims")
                .asMap();
    }

    // 生成 token 过期时间
    private static Date expirationDate() {
        return new Date(System.currentTimeMillis() + expiration * 1000);
    }
}

```