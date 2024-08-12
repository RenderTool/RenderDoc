---
title: java
icon: j
dir:
  order: 1
category:
  - java
tag:
  - 介绍
  - java
---
## java


### 基本项目结构：

```plaintext
com
    └── exorcist
        ├── controller  // 处理HTTP请求的Controller层
        ├── service     // 业务逻辑接口
        │   └── UserService.java
        ├── service.impl // 业务逻辑实现类
        │   └── UserServiceImpl.java
        ├── mapper       //数据层映射
        │   └── UserMapper.java
        ├── pojo        // 实体类和DTO
        └── util        // 工具类
```

![](assets%2Fywu.png)