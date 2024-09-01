---
title: JDK|springValidation
order: 6
---

## 描述

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
springValidation校验
</chatmessage>


### 1. 引入依赖

```xml
   <!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

### 校验字段加注解

```java
//DTO层
public class UserDTO {
    @NotNull(message = "age 不能为空")
    private Integer age;
}
```

### 3. Controller类上加Validated注解

```java
 public ResultInfo registerUser(@RequestBody @Valid UserDTO userDTO) 
 {
 //业务代码
 }
```
<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
jar包会针对一些错误抛出异常，浏览器表现为500，很显然这不太符合业务需求。需要定义一个全局异常处理类配合返回的结果状态码
</chatmessage>

### 4.全局异常处理

```java
package com.exorcist.exception;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalControllerAdvice {
    private static final String BAD_REQUEST_MSG = "客户端请求参数错误";
    private static final String INTERNAL_SERVER_ERROR_MSG = "服务器内部错误";

    // <1> 处理 form data 方式调用接口校验失败抛出的异常
    @ExceptionHandler(BindException.class)
    public ResultInfo bindExceptionHandler(BindException e) {
        List<FieldError> fieldErrors = e.getBindingResult().getFieldErrors();
        List<String> collect = fieldErrors.stream()
                .map(o -> o.getDefaultMessage())
                .collect(Collectors.toList());
        return new ResultInfo().success(HttpStatus.BAD_REQUEST.value(), BAD_REQUEST_MSG, collect);
    }

    // <2> 处理 JSON 请求体调用接口校验失败抛出的异常
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResultInfo methodArgumentNotValidExceptionHandler(MethodArgumentNotValidException e) {
        List<FieldError> fieldErrors = e.getBindingResult().getFieldErrors();
        List<String> collect = fieldErrors.stream()
                .map(o -> o.getDefaultMessage())
                .collect(Collectors.toList());
        return new ResultInfo().success(HttpStatus.BAD_REQUEST.value(), BAD_REQUEST_MSG, collect);
    }

    // <3> 处理单个参数校验失败抛出的异常
    @ExceptionHandler(ConstraintViolationException.class)
    public ResultInfo constraintViolationExceptionHandler(ConstraintViolationException e) {
        Set<ConstraintViolation<?>> constraintViolations = e.getConstraintViolations();
        List<String> collect = constraintViolations.stream()
                .map(o -> o.getMessage())
                .collect(Collectors.toList());
        return new ResultInfo().success(HttpStatus.BAD_REQUEST.value(), BAD_REQUEST_MSG, collect);
    }

    // <4> 处理所有未捕获的异常
    @ExceptionHandler(Exception.class)
    public ResultInfo globalExceptionHandler(Exception e) {
        return new ResultInfo().error(HttpStatus.INTERNAL_SERVER_ERROR.value(), INTERNAL_SERVER_ERROR_MSG);
    }
}
```

### 5.返回状态码

```java
package com.exorcist.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

//统一响应结果
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResultInfo<T> {
    private Integer code;//业务状态码  0-成功  1-失败
    private String message;//提示信息
    private T data;//响应数据

    //快速返回操作成功响应结果(带响应数据)
    public static <E> ResultInfo<E> success(E data) {
        return new ResultInfo<>(0, "操作成功", data);
    }

    //快速返回操作成功响应结果
    public static ResultInfo success() {
        return new ResultInfo(0, "操作成功", null);
    }
    //快速返回操作成功结果(全参数版)
    public ResultInfo success(int value, String badRequestMsg, List<String> collect) {
        return new ResultInfo(value, badRequestMsg, collect);
    }

    public static ResultInfo error(String message) {
        return new ResultInfo(1, message, null);
    }
    public static ResultInfo error(int value, String badRequestMsg) {
        return new ResultInfo(value, badRequestMsg, null);
    }
}
```
![](assets%2Fresult.png)