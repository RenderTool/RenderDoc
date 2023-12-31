---
title: EXP3.C++控制蓝图节点输入输出
order : 3
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
测试不同传参方法对应的蓝图节点结果
</chatmessage>

## 实践

### 1. 新建一个蓝图函数库类

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
蓝图函数库是一个静态函数的合集，便于测试
</chatmessage>

![](..%2Fassets%2Flibexpcpp.jpg)

### 2. Const控制
```cpp
	UFUNCTION(BlueprintCallable, Category ="TEST",meta = ( tooltip = "值传递"))
	static void PassbyValue(TArray<ACameraActor*>Camera, int32 test);
	
	UFUNCTION(BlueprintCallable, Category ="TEST",meta = ( tooltip = "值引用"))
	static void PassbyConstReference(const TArray<ACameraActor*>& Camera, const int32 test);
	
	UFUNCTION(BlueprintCallable, Category ="TEST",meta = ( tooltip = "const修饰的值引用"))
    	static void PassbyReference(TArray<ACameraActor*>& Camera,int32 &test);
```

![](..%2Fassets%2FUEvaluepass.jpg)

### 3. `UPARAM(ref)`

```cpp
UFUNCTION(BlueprintCallable)
void FillDogInfo(FDogInfo& OutResult);

UFUNCTION(BlueprintCallable)
void UseAndFillDogInfo(
    UPARAM(ref) FDogInfo& SearchParams);

UFUNCTION(BlueprintCallable)
void UseDogInfo(const FDogInfo& SearchParams);
```

![](..%2Fassets%2Fuparam-ref.jpg)

## 其他

### 蓝图中数组只能用引用传递。

<gifwithbutton src="../../assets/unrealgif/defalutreference.gif"/>

