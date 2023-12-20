---
title: GP7.Enum[枚举]
order : 7
category:
  - u++
---

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
UEC++中怎么写Enum
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/new9.png" :avatarWidth="40" alignLeft>
安排!
</ChatMessage>

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
