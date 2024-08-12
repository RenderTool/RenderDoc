---
title: JDK|2.Swagger
order: 3
---

## 描述

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">

springboot3基本使用流程[官方文档https://springdoc.org/#getting-started](https://springdoc.org/#getting-started)

</chatmessage>


### 1. 引入Springdoc-openapi依赖

```xml
   <!-- pom.xml -->
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.6.0</version>
</dependency>
```

### 2. 配置 application.yml

```yml
spring:
  mvc:
    pathmatch:
      matching-strategy: ant_path_matcher
  application:
    name: springfox-swagger
server:
  port: 8080
  
# swagger-ui custom path
springdoc:
  swagger-ui:
    path : /swagger-ui.html
```

### 3.加入config类覆盖默认配置

```java
package com.game.server.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Swagger3Config {
    @Bean
    public OpenAPI springOpenAPI() {
        return new OpenAPI().info(new Info()
                .title("Exorcist后台API")
                .description("Exorcist后台管理API")
                .version("0.0.1"));
    }
}
```

### 5. API 控制器注解
在控制器类和方法上使用 Swagger 3 的注解来描述 API 端点：

```java
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Operation(summary = "获取用户信息", description = "通过用户 ID 获取用户的详细信息")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "成功获取用户信息", 
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = User.class))),
        @ApiResponse(responseCode = "404", description = "未找到用户", 
            content = @Content)
    })
    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable Long id) {
        // 示例代码，实际应从数据库或服务中获取用户信息
        return new User(id, "张三", "zhangsan@example.com");
    }
}
```

### 6. 数据模型注解
使用 `@Schema` 注解来描述数据模型：

```java
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "用户实体类")
public class User {

    @Schema(description = "用户ID", example = "1")
    private Long id;

    @Schema(description = "用户名称", example = "张三")
    private String name;

    @Schema(description = "用户邮箱", example = "zhangsan@example.com")
    private String email;

    // 构造函数、Getter和Setter方法省略
}
```

### 7. 请求参数注解
使用 `@Parameter` 注解来详细描述请求参数：

```java
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import org.springframework.web.bind.annotation.RequestParam;

@Operation(summary = "获取用户列表", description = "根据分页参数获取用户列表")
@Parameters({
    @Parameter(name = "page", description = "页码", example = "1"),
    @Parameter(name = "size", description = "每页条数", example = "10")
})
@GetMapping("/users")
public List<User> getUsers(
    @RequestParam(value = "page", defaultValue = "1") int page,
    @RequestParam(value = "size", defaultValue = "10") int size) {
    // 示例代码，实际应从数据库或服务中获取用户列表
    return Arrays.asList(new User(1L, "张三", "zhangsan@example.com"));
}
```

### 8. 自定义响应码
使用 `@ApiResponse` 来描述自定义的 HTTP 响应状态码：

```java
@Operation(summary = "删除用户", description = "通过用户 ID 删除用户")
@ApiResponses(value = {
    @ApiResponse(responseCode = "204", description = "成功删除用户"),
    @ApiResponse(responseCode = "404", description = "未找到用户")
})
@DeleteMapping("/users/{id}")
public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
    // 示例代码，实际应删除用户
    return ResponseEntity.noContent().build();
}
```

### 9.api地址

```text
http://localhost:8080/swagger-ui/index.html#/
```
