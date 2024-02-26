---
title: F6.UEnum|枚举
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

### 使用
C++ 中的枚举类型并不是严格类型安全的，而且它们的大小是由编译器决定的，因此无法直接用作成员变量的类型。
在UE中需要用对应的模板函数声明，有点像TObjcetPtr的味道

```cpp
//带命名空间
UPROPERTY(EditAnywhere, BlueprintReadWrite,Category = "ViewLock")
TEnumAsByte< EDrawDebugTrace::Type> DebugType;

//不带UPROPERTY的普通枚举
 EColorBits ColorType;
 
//带UPROPERTY，不带命名空间
UPROPERTY(EditAnywhere, BlueprintReadWrite,Category = "ViewLock")
TEnumAsByte<EViewLockType> ViewLockType;

```