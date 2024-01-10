---
title: Error6.UFunctions cannot take a TObjectPtr as a parameter.
order : 6
category:
  - u++
---


<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
我在函数参数列表中使用TObjectPtr报错了怎么办？
</chatmessage>

![functionerror001.png](..%2Fassets%2Ffunctionerror001.png)



1. 目前只有属性中可以使用TObjectPtr

```cpp
UPROPERTY()
TObjectPtr<AActor> MYActor;
```
2. 文档是这么介绍的

![](..%2Fassets%2Ffunctionerror002.png)

### 解决思路

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
改用传统C++指针
</chatmessage>

```cpp
UFUNCTION(BlueprintCallable, Category="ExorcistInventorySubsystem")
void AddTotalConfig(const UInventoryTotalConfig* ConfigToAdd);
```


### 参考链接
[官方文档](https://docs.unrealengine.com/5.3/zh-CN/smart-pointers-in-unreal-engine/)