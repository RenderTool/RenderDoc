---
title: JDK|Redis
order: 8
---

## 描述

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
Redis 是一个开源的内存数据结构存储系统，常用作数据库、缓存和消息代理。(本质是键值对形式)
</chatmessage>

## Redis基本使用

### 1. 引入依赖

```xml
   <!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

### 2. 配置redis

```yml

#application.yml

spring:
  data:
    redis:
      host: 127.0.0.1
      port: 6379
      password: 123456
```
### 3. 下载Redis客户端和服务端

![](assets%2Fredis001.png)

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">

客户端我建议[下载https://redis.tinycraft.cc/zh/](https://redis.tinycraft.cc/zh/)，小皮的不太好用，有时候会乱码

</chatmessage>

![](assets%2Flight_zh.png)

![](assets%2Flight_zh001.png)

### 4.基本使用

```java
@SpringBootTest
public class redisTest {

    @Resource
    private RedisTemplate redisTemplate;

    @Test
    public void testSet(){
        ValueOperations<String, String> ops = redisTemplate.opsForValue();
        ops.set("50","6666",15, TimeUnit.SECONDS);
    }
    @Test
    public void testGet(){
        ValueOperations<String, String> ops = redisTemplate.opsForValue();
        System.out.println(ops.get("50"));
    }
}
```