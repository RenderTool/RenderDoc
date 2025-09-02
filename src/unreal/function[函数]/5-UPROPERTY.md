---
title: F5.UPROPERTY
order: 5
category:
  - u++
tag:
  - Specifiers
---

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
UPROPERTY是啥啊？
</chatmessage>

### UPROPERTY定义

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

`UPROPERTY` 是一个宏（macro），用于声明类的属性。这个宏允许你定义在UE编辑器中可以编辑和序列化的属性。`UPROPERTY` 主要用于声明类的成员变量，并指定它们的元数据以及在UE编辑器中的显示行为。

</chatmessage>


<chatmessage avatar="../../assets/emoji/bqb01.png" :avatarWidth="40">
还是不理解！
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
你知道C++的变量声明和定义语法吗？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb01.png" :avatarWidth="40">
这个倒是知道
</chatmessage>

```cpp
//声明一个变量
int32 MyInt;
//定义一个变量
int32 MyInt = 0;
```
<chatmessage avatar="../../assets/emoji/new5.png" :avatarWidth="40" alignLeft>
Good!那么现在这个变量你知道怎么暴露给UE编辑器的蓝图使用吗？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="40">

搜得寺内！这个`UPROPERTY`莫非就是一个暴露变量给蓝图反射的一个宏！

</chatmessage>

<chatmessage avatar="../../assets/emoji/new5.png" :avatarWidth="40" alignLeft>

没错，当然`UPROPERTY` 不仅仅是用于声明类的属性，还用于将这些属性暴露给反射系统，以便在蓝图中访问和编辑。这种方式称为"Reflection"（反射）。

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="45">
具体怎么用呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/new5.png" :avatarWidth="40" alignLeft>

在变量前加上`UPROPERTY` 并在`()`内填入对应的参数(元数据标记)

</chatmessage>

```cpp
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "MyTest.generated.h"

UCLASS()
class EXORCIST_API AMyTest : public AActor
{
	GENERATED_BODY()
	
public:
	
	UPROPERTY(VisibleAnywhere,BlueprintReadOnly)
	int32 VisibleAnywhereNumber;

	UPROPERTY(VisibleDefaultsOnly,BlueprintReadOnly)
	int32 VisibleDefaultsOnly;
    
	UPROPERTY(VisibleInstanceOnly,BlueprintReadOnly)
	int32 VisibleInstanceOnly;
    
	UPROPERTY(EditAnywhere,BlueprintReadWrite)
	int32 EditAnywhereNumber;

	UPROPERTY(EditDefaultsOnly)
	int32 EditDefaultsOnlyNumber;
};
```

## 属性说明符


![默认可见和实例化可见](..%2Fassets%2Ftestactor.png)

### `VisibleAnywhere`&`BlueprintReadOnly`

> 该属性在所有属性窗口中可见，但不可编辑，需配合BlueprintReadOnly。

```cpp
    UPROPERTY(VisibleAnywhere,BlueprintReadOnly)
	int32 VisibleAnywhereNumber;
```


### `VisibleDefaultsOnly` & `BlueprintReadOnly`
> 该属性在所有属性窗口中可见，但只能在类的默认属性面板中编辑。在蓝图中是只读的。

```cpp
    UPROPERTY(VisibleDefaultsOnly, BlueprintReadOnly)
    int32 VisibleDefaultsOnlyNumber;
```

<hr>

### `VisibleInstanceOnly` & `BlueprintReadOnly`
> 该属性在所有属性窗口中可见，但只能在每个实例的属性面板中编辑。在蓝图中是只读的。

```cpp
    UPROPERTY(VisibleInstanceOnly, BlueprintReadOnly)
    int32 VisibleInstanceOnlyNumber;
```

<hr>

### `EditAnywhere`&`BlueprintReadWrite`

> 该属性在所有属性窗口中可见且可编辑。在蓝图中可以读写。
```cpp
    UPROPERTY(EditAnywhere, BlueprintReadWrite)
    int32 EditAnywhereNumber;
```

<hr>

### `EditDefaultsOnly`

>  该属性在所有属性窗口中可见，但只能在类的默认属性面板中编辑。在蓝图中可以读写。

```cpp
    UPROPERTY(EditDefaultsOnly)
    int32 EditDefaultsOnlyNumber;
```

## DeterminesOutputType

>动态输出类型

<chatmessage avatar="../../assets/emoji/new5.png" :avatarWidth="40" alignLeft>
你有没有注意过一个细节：官方的GetActorOfClass节点给输入一个ActorClass,能返回对应的Actor对象,但这个Actor不是Actor*而是对应的派生类？
就比如下图的角色类。
</chatmessage>

![](..%2Fassets%2Ftestactor2.png)


```cpp
UFUNCTION(BlueprintCallable, Category="Actor", meta=(WorldContext="WorldContextObject", DeterminesOutputType="ActorClass"))
	static ENGINE_API class AActor* GetActorOfClass(const UObject* WorldContextObject, TSubclassOf<AActor> ActorClass);
	
AActor* UGameplayStatics::GetActorOfClass(const UObject* WorldContextObject, TSubclassOf<AActor> ActorClass)
{
	QUICK_SCOPE_CYCLE_COUNTER(UGameplayStatics_GetActorOfClass);

	// We do nothing if no is class provided
	if (ActorClass)
	{
		if (UWorld* World = GEngine->GetWorldFromContextObject(WorldContextObject, EGetWorldErrorMode::LogAndReturnNull))
		{
			for (TActorIterator<AActor> It(World, ActorClass); It; ++It)
			{
				AActor* Actor = *It;
				return Actor;
			}
		}
	}

	return nullptr;
}
```

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" >
我靠！我有一个维护各种策略的子系统。实际使用中往往需要输出对应的策略派生类。虽然C++可以使用模板，但用了模板后蓝图里就没法玩了。
</chatmessage>

```cpp
UDataStrategyBase* UUserDataSubsystem::FindDataStrategy(FName StrategyName)
{
	UDataStrategyBase* StrategyInstance = RegisteredStrategies.FindRef(StrategyName);
	return StrategyInstance;
}
```

<chatmessage avatar="../../assets/emoji/new5.png" :avatarWidth="40" alignLeft>

是的，我们虽然可以用模板来应对C++开发者，但蓝图中显得不够智能了，每次都要手动Cast,因此才需要我们今天的主角` DeterminesOutputType`

</chatmessage>

> 首先当然是C++的T模板

```cpp

template <typename T>
T* UUserDataSubsystem::FindDataStrategyAs(FName StrategyName)
{
    UDataStrategyBase* BaseInstance = FindDataStrategy(StrategyName);
    return Cast<T>(BaseInstance); // 直接通过Cast返回派生类指针
}

```
> 其次是蓝图节点的改造，通过`DeterminesOutputType`

```cpp

public:

	UFUNCTION(BlueprintCallable, Category="DataStrategy", meta = (DeterminesOutputType = "StrategyClass"))
	UDataStrategyBase* FindDataStrategyByClass(FName StrategyName, TSubclassOf<UDataStrategyBase> StrategyClass)
    {
        UDataStrategyBase* StrategyInstance = FindDataStrategy(StrategyName);
    
        if (StrategyInstance && StrategyInstance->IsA(StrategyClass))
        {
            return StrategyInstance;
        }
    
        return nullptr;
    }
    
	//将UDataStrategyBase* FindDataStrategy(FName StrategyName);移到私有

private:
	UDataStrategyBase* FindDataStrategy(FName StrategyName);

```


## Category

>Category|分组

```cpp
	UPROPERTY(EditAnywhere, Category="分组")
	int32 Category;
	
	UPROPERTY(EditAnywhere, Category="分组|子标签")
	int32 Child;
```

![](..%2Fassets%2Fcategory.png)

## ShowOnlyInnerProperties
 
>内联显示属性

```cpp
USTRUCT()
struct FCat
{
	GENERATED_BODY()
	UPROPERTY(EditDefaultsOnly)
	FString Name;
	UPROPERTY(EditDefaultsOnly)
	int32 Age;
	UPROPERTY(EditDefaultsOnly)
	FLinearColor Color;
};
	//ShowOnlyInnerProperties
	UPROPERTY(EditAnywhere, Category="ShowOnlyInnerProperties")
	FCat NormalProperties;//正常显示
	
	UPROPERTY(EditAnywhere, Category="ShowOnlyInnerProperties", meta=(ShowOnlyInnerProperties))
	FCat ShowOnlyInnerProperties;//内联显示
```

![](..%2Fassets%2Finnerproper.png)

## Tooltip
>提示文本

```cpp
UPROPERTY(EditAnywhere, meta=(ToolTip="提示文本"))
	int32 Tooltip;
```

![](..%2Fassets%2Ftooltips.png)

## DisplayName
>显示名称
```cpp
UPROPERTY(EditAnywhere, meta=(DisplayName="Display Font"))
	FSoftObjectPath DisplayName;
```
![](..%2Fassets%2Fdisplayname.png)

## AdvancedDisplay

> 高级显示，属性隐藏在下拉菜单中

```cpp
UPROPERTY(EditAnywhere, Category="AdvancedDisplay")
    bool NormalDisplay1;
	
UPROPERTY(EditAnywhere, Category="AdvancedDisplay")
	bool NormalDisplay2;
	
UPROPERTY(EditAnywhere, Category="AdvancedDisplay", AdvancedDisplay)
	bool AdvancedDisplay;
```

<gifwithbutton src="../../assets/unrealgif/adisplay.gif"/>


## EditCondition

>属性条件编辑

```cpp
UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "PackageName")
bool bAsPackageName = false;
  
UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "PackageName",meta=(EditCondition="bAsPackageName")
FString PackageNamePrefix;
```

![](..%2Fassets%2FEditCondition.png)

### EditConditionHides

>隐藏属性

```cpp
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "PackageName")
    bool bAsPackageName = false;
  
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "PackageName",meta=(EditCondition="bAsPackageName",EditConditionHides))
    FString PackageNamePrefix;

    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "PackageName",meta=(EditCondition="bAsPackageName",EditConditionHides))
    FString PackageNameSuffix;

    UPROPERTY(BlueprintReadOnly,VisibleAnywhere,Category = "PackageName",meta=(EditCondition="bAsPackageName",EditConditionHides))
    FString PackageNamePreview;
    
```
<gifwithbutton src="../../assets/unrealgif/hpup49.gif"/>

###  InlineEditConditionToggle

>内联属性

```cpp
UPROPERTY(EditAnywhere, meta=(InlineEditConditionToggle))
	bool bCanFly;

UPROPERTY(EditAnywhere, meta=(EditCondition="bCanFly", Units="s"))
	float InlineEditConditionToggle;
```

### ` RequiredAssetDataTags`

> 所需的资产数据标签永久链接永久链接，一般用于指定Datatable的结构体类型

```cpp
    UPROPERTY(EditAnywhere, meta = (RequiredAssetDataTags = "RowStructure=/Script/UMG.RichTextStyleRow"))
	TObjectPtr<UDataTable> TextStyleSet;
```

### ` RowType`

> 仅允许选择具有特定类型的数据表行。

```cpp
    UPROPERTY(EditAnywhere, meta=(RowType="ImageRow"))
	TObjectPtr<UDataTable> TextStyleSet;
```

![](..%2Fassets%2FInlineEditConditionToggle.png)

### 更多参考

- [官方文档](https://docs.unrealengine.com/5.2/zh-CN/unreal-engine-uproperties/)

- [UPROPERTY宏参考](https://benui.ca/unreal/uproperty/)