---
title: JDK|2.Swagger&knife4j
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

```xml
<!--knife4j https://doc.xiaominfo.com/docs/quick-start-->
<dependency>
<groupId>com.github.xiaoymin</groupId>
<artifactId>knife4j-openapi3-jakarta-spring-boot-starter</artifactId>
<version>4.4.0</version>
</dependency>
```

### 2. 配置 application.yml

```yml
springdoc:
  swagger-ui:
    path: /swagger-ui.html
    tags-sorter: alpha
    operations-sorter: alpha
    enabled: true

  api-docs:
    path: /v3/api-docs
    enabled: true

knife4j:
  enable: true
  setting:
    language: zh_cn
```

### 3.加入config类覆盖默认配置

```java
package com.exorcist.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Swagger3Config {
    @Bean
    public OpenAPI springOpenAPI() {
        return new OpenAPI().info(new Info()
                .title("Exorcist后台管理API")
                .description("这是一个游戏后台API服务页面")
                .version("0.0.1"));
    }
}
```

### 4. API 控制器注解
在控制器类和方法上使用 Swagger 3 的注解来描述 API 端点：

```java

@Tag(name="游戏版本控制模块")
@RestController
@RequestMapping("/api/versionAdmin")
public class UserController {

    @Operation(summary = "上传完整包", description = "上传最新完整包")
    @PostMapping(value = "/uploadLatestGame", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResultInfo uploadLatestGame(@RequestPart("file") MultipartFile file, @Valid VersionDTO versionDTO) {
        return ResultInfo.success(versionService.UpLoadFile("publish/LatestGame/", file, versionDTO));
    }

    @Operation(summary = "上传完整包", description = "上传最新完整包")
    @PostMapping(value = "/uploadLatestGame", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResultInfo uploadLatestGame(
            @RequestPart("file") MultipartFile file,
            @RequestParam("versionName") String versionName,
            @RequestParam("fileName") String fileName,
            @RequestParam("md5") String md5) {

        VersionDTO versionDTO = new VersionDTO();
        versionDTO.setVersionNumber(versionName);
        versionDTO.setFileName(fileName);
        versionDTO.setMd5(md5);

        return ResultInfo.success(versionService.UpLoadFile("publish/LatestGame/", file, versionDTO));
    }

}
```


### 5.api地址

```text
http://localhost:8080/swagger-ui/index.html#/
```


### 6.拦截器

```java
package com.exorcist.config;

import com.exorcist.interceptor.JWTInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private JWTInterceptor jwtInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(jwtInterceptor)
                .addPathPatterns("/**") // 拦截所有路径
                .excludePathPatterns(
                        "/swagger-ui/**",          // 排除 Swagger UI 相关路径
                        "/webjars/**",             // 排除 WebJars 相关路径
                        "/doc.html/**",            // 排除文档相关路径
                        "/v2/**",                  // 排除 Swagger 2 相关路径
                        "/v3/**",                  // 排除 Swagger 3 相关路径
                        "/swagger-ui.html/**",     // 排除 Swagger UI 旧版路径
                        "/api/user/login",         // 排除 用户登录接口
                        "/api/version/**",         // 排除 版本获取信息
                        "/api/user/register",      // 排除 用户注册接口
                        "/templates/**",
                        "/favicon.ico",
                        "/api/version/getLatestVersion"
                );
    }
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("doc.html")
                .addResourceLocations("classpath:/META-INF/resources/");
        registry.addResourceHandler("swagger-ui.html")
                .addResourceLocations("classpath:/META-INF/resources/");
        registry.addResourceHandler("/webjars/**")
                .addResourceLocations("classpath:/META-INF/resources/webjars/");
    }

}
```


### 7.跨域

```java
package com.exorcist.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

/**
 * 全局跨域配置
 */
@Configuration
public class GlobalCorsConfig {

    /**
     * 允许跨域调用的过滤器
     */
    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        //允许所有域名进行跨域调用
        config.addAllowedOriginPattern("*");
        //允许跨越发送cookie
        config.setAllowCredentials(true);
        //放行全部原始头信息
        config.addAllowedHeader("*");
        //允许所有请求方法跨域调用
        config.addAllowedMethod("*");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
```

## 问题

### 问题1：解决不显示文件上传的问题

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
上面的uploadLatestGame接口在knife4j无法正常显示按钮
</chatmessage>

![](assets%2Fswagger001.png)

<chatmessage avatar=" ../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>

**`@RequestBody` 与 `@RequestPart` 不兼容**
- 在 Spring MVC 中，`@RequestBody` 适用于从请求体中解析数据，而 `@RequestPart` 则用于处理 `multipart/form-data` 请求中带有文件的部分。
- 通常这两者不应该在同一控制器方法参数中同时使用。
- 可以将 `VersionDTO` 改为 `@RequestParam` 注解拆散DTO

</chatmessage>

![](assets%2Fswagger002.png)