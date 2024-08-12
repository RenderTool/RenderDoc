---
title: JDK|application自定义配置信息
order: 5
---

## 描述

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
application自定义配置信息
</chatmessage>

### 配置信息书写|application.yml

```yml
email:
  user: username
  password: password
  host: smtp.163.com
```

### 配置信息获取|注解|Value

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">

多层键名用`·`来分割

</chatmessage>

```java
@Value("${键名}")
@Value("${email.user}")
```

###  配置信息获取|注解|ConfigurationProperties

```java
//注解键名
@ConfigurationProperties(prefix = "email")
```