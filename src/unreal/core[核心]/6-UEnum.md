---
title: core6.UEnum|枚举
order : 6
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
UEC++中怎么写Enum
</chatmessage>

<chatmessage avatar="../../assets/emoji/new9.png" :avatarWidth="40" alignLeft>
安排!
</chatmessage>


### 常规

1. Rider添加一个类

![](..%2Fassets%2Fclassadd.png)


2. 添加代码

```cpp
UENUM(Meta = (Bitflags))
enum class EColorBits
{
    ECB_Red,
    ECB_Green,
    ECB_Blue
};
```
### 声明前置

::: code-tabs#language
@tab .h
```cpp
enum class EColorBits: uint8;
```
@tab .cpp
```cpp
enum class EColorBits: uint8;
{
    ECB_Red,
    ECB_Green,
    ECB_Blue
};
```
:::