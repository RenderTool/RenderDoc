---
title: U++蓝图节点输入输出控制
order : 3
---

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40">
C++蓝图节点输入输出控制
</ChatMessage>

## 实践

> 测试不同传参方法对应的蓝图节点

1. 新建一个蓝图函数库类

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
蓝图函数库是一个静态函数的合集，便于测试
</ChatMessage>

![](..%2F..%2Fassets%2Flibexpcpp.jpg)

2. 输入测试代码
```cpp
	UFUNCTION(BlueprintCallable, Category ="TEST",meta = ( tooltip = "值传递"))
	static void PassbyValue(TArray<ACameraActor*>Camera, int32 test);
	
	UFUNCTION(BlueprintCallable, Category ="TEST",meta = ( tooltip = "值引用"))
	static void PassbyConstReference(const TArray<ACameraActor*>Camera, const int32 test);
	
	UFUNCTION(BlueprintCallable, Category ="TEST",meta = ( tooltip = "const修饰的值引用"))
    	static void PassbyReference(TArray<ACameraActor*> &Camera,int32 &test);
```
3. 测试结果

![](assets%2FUEvaluepass.jpg)

## 蓝图
>蓝图中只有数组默认通过值传递的。

![](assets%2Fdefalutreference.gif)