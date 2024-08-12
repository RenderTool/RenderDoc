---
title: JDK|1.Lombok
order: 1
---

## 描述

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
Lombok是什么鬼东西？
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>

Lombok是一个Java库，能自动插入编辑器并构建工具，简化Java开发。[官网](https://projectlombok.org/)

</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
啥意思？
</chatmessage>

## 说明

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
有点像我们UE中的宏标记，程序会自动帮我们生成这种重复的代码。
</chatmessage>

### 添加依赖

```xml
<dependency>
	<groupId>org.projectlombok</groupId>
	<artifactId>lombok</artifactId>
	<version>{{ LOMBOK_VERSION }}</version>
	<scope>provided</scope>
</dependency>
```

### 不使用Lombok

```java
package com.gameserver.exorcistserver.controller;

import java.math.BigInteger;

public class UmsAdminController {

    private BigInteger id;
    private String name;


    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "UmsAdminController{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(id, username);
    }

}
```
### 使用Lombok

```java
package com.gameserver.exorcistserver.controller;

import lombok.Data;
import java.math.BigInteger;

@Data
public class UmsAdminController {

    private BigInteger id;
    private String name;
}
```

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
也就是说自动生成一些函数方法。
</chatmessage>
