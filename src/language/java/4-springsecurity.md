---
title: JDK|4.SpringSecurity
order: 4
---

## 描述

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">

Spring Security基本使用流程 [官方网站https://springdoc.cn/spring-security/](https://springdoc.cn/spring-security/)

</chatmessage>

### 1. 引入Spring Security依赖

```xml
   <!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

### 2.登录

![](assets%2FSecurity.png)

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">

如果不配置默认会打印一条随机的登录密码，账户名默认为`User`

</chatmessage>

![](assets%2FSecurity001.png)

### 4.使用Configuration注解

```java

```