---
title: JDK|2.mybatis
order: 2
---

## 描述

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
mybatis基本使用流程
</chatmessage>

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>

原生方法官方教程已经很详细了[传送门](https://mybatis.net.cn/index.html)

</chatmessage>

## 原生方法

### 1. 引入mybatis依赖

```xml
   <!-- pom.xml -->
   <dependency>
       <groupId>org.mybatis</groupId>
       <artifactId>mybatis</artifactId>
       <version>3.5.6</version>
   </dependency>
```
<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
两者的区别是配置文件的区别
</chatmessage>

### 2. 配置 mybatis-config.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <!--别名-->
    <typeAliases>
        <!--命名空间-->
      <package name = "com.gameserver.exorcistserver.pojo"/>
    </typeAliases>
    
    <!--设置连接数据库的环境-->
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://localhost:3306/ExorcistUser"/>
                <property name="username" value="Admin"/>
                <property name="password" value="123456"/>
            </dataSource>
        </environment>
    </environments>
    <!--引入映射文件-->
    <mappers>
        <package name = "com.gameserver.exorcistserver.mapper"/>
    </mappers>

</configuration>
```

### 3. 创建mybatis映射文件-UserMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.gameserver.exorcistserver.mapper.UserMapper">

    <select id="selectAll" resultType="User">

        SELECT * FROM sys_user

    </select>

    <select id="selectById" resultType="User">

        SELECT * FROM sys_user WHERE id = #{id}

    </select>

</mapper>
```
<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
注意映射文件和映射的接口类要保证打包后在同一目录中。
</chatmessage>

![](assets%2Fmybatis001.png)

![](assets%2Fmybatis003.png)


### 4.创建mybatis映射接口类-UserMapper.java

```java
package com.gameserver.exorcistserver.mapper;

import com.gameserver.exorcistserver.pojo.User;

import java.util.List;

public interface UserMapper {

    List<User> selectAll();

    User selectById(int id);
}
```

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
其中User对应的数据POJO类
</chatmessage>

### 5. 创建数据实体类-User.java

```java
package com.gameserver.exorcistserver.pojo;

import lombok.Data;
import java.math.BigInteger;

@Data
public class User {

    private BigInteger id;
    private String name;
}
```
<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
这里用到了上期的lombok，帮我们生成一些封装的get\set等方法
</chatmessage>

### 6.实例化

```java
        //1.加载mybati配置
        SpringApplication.run(ExorcistServerApplication.class, args);
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        //2.获取sqlSessionFactory，执行SQL
        SqlSession sqlSession = sqlSessionFactory.openSession();
        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);

        //3.执行sql
        List<User> users = userMapper.selectAll();
        System.out.println(users);

        //4.释放
        sqlSession.close();
```

## spring框架下的mybatis

### 1. 引入mybatis依赖

```xml
   <!-- pom.xml -->
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>3.0.3</version>
</dependency>
```

### 2. 配置application.yml代替mybatis-config.xml

```yml
server:
  port: 8888

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/ExorcistUser
    username: Admin
    password: 123456
    driver-class-name: com.mysql.cj.jdbc.Driver

mybatis:
  # 类型别名包
  type-aliases-package: com.gameserver.pojo
  # xml映射
  #mapper-locations: classpath:com.gameserver.mapper/*.xml
  configuration:
    map-underscore-to-camel-case: true
```

### 3.使用注解代替XMLMap映射

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
注解可以理解成一种反射、一种类似UE5引擎的红标记
</chatmessage>

```java
package com.gameserver.mapper;

import com.gameserver.exorcistserver.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper {

    @Select("SELECT * FROM sys_user")
    List<User> selectAll();

    @Select("SELECT * FROM sys_user WHERE id = #{id}")
    User selectById(int id);
}
```

![](assets%2Fmybatis002.png)

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
注解只能实现简单业务逻辑，最好还是用xml
</chatmessage>

### 4. 自动扫描 Mapper 接口

```java
package com.game.server;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
@MapperScan("com.game.server.mapper")
public class ExorcistServerApplication {

    public static  void main(String[] args) {

        SpringApplication.run(ExorcistServerApplication.class, args);

    }

}
```

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
但是现在如果不加Autowired注解，我们发现UserMapper指针不会被初始化
</chatmessage>

### 5. Autowired注解
```java

package com.game.server.controller;

import com.game.server.mapper.UserMapper;
import com.game.server.pojo.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class Controller {

    @Autowired
    private UserMapper userMapper;

    @GetMapping("/getAllUserInfo")
    public  List<User> getAllUserInfo() {

       return  userMapper.selectAll();

    }

}
```
