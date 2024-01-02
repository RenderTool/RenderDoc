---
title: GP4.Subsystem|子系统
order : 4
category:
  - u++
---

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
什么是子系统？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
虚幻引擎中的子系统是生命周期受控的自动实例化类。
这些类提供了易用的扩展点，程序员可直接获得蓝图和Python公开，同时避免繁复的引擎类修改或覆盖。
</ChatMessage>

![](..%2Fassets%2Fsubs.png)

<ChatMessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
按照惯例，先看官方源码注释
</ChatMessage>

```cpp
/** Subsystems are auto instanced classes that share the lifetime of certain engine constructs
 * 
 *	Currently supported Subsystem lifetimes are:
 *		Engine		 -> inherit UEngineSubsystem
 *		Editor		 -> inherit UEditorSubsystem
 *		GameInstance -> inherit UGameInstanceSubsystem
 *		World		 -> inherit UWorldSubsystem
 *		LocalPlayer	 -> inherit ULocalPlayerSubsystem
 *
 *
 *	Normal Example:
 *		class UMySystem : public UGameInstanceSubsystem
 *	Which can be accessed by:
 *		UGameInstance* GameInstance = ...;
 *		UMySystem* MySystem = GameInstance->GetSubsystem<UMySystem>();
 *
 *	or the following if you need protection from a null GameInstance
 *		UGameInstance* GameInstance = ...;
 *		UMyGameSubsystem* MySubsystem = UGameInstance::GetSubsystem<MyGameSubsystem>(GameInstance);
 *
 *
 *	You can get also define interfaces that can have multiple implementations.
 *	Interface Example :
 *      MySystemInterface
 *    With 2 concrete derivative classes:
 *      MyA : public MySystemInterface
 *      MyB : public MySystemInterface
 *
 *	Which can be accessed by:
 *		UGameInstance* GameInstance = ...;
 *		const TArray<UMyGameSubsystem*>& MySubsystems = GameInstance->GetSubsystemArray<MyGameSubsystem>();
 *
 */
```

### 文档翻译

:::note

子系统是自动实例化的类，与特定引擎构造的生命周期共享

当前支持的子系统生命周期有：
```md
- 引擎		-> 继承 UEngineSubsystem
- 编辑器		-> 继承 UEditorSubsystem
- 游戏实例	-> 继承 UGameInstanceSubsystem
- 世界		-> 继承 UWorldSubsystem
- 本地玩家	-> 继承 ULocalPlayerSubsystem
```

常规示例：
```cpp
class UMySystem : public UGameInstanceSubsystem
```
可通过以下方式访问：
```cpp
UGameInstance* GameInstance = ...;
UMySystem* MySystem = GameInstance->GetSubsystem<UMySystem>();
```

或者，如果需要防止空 GameInstance 的情况，可以使用以下方式：
```cpp
UGameInstance* GameInstance = ...;
UMyGameSubsystem* MySubsystem = UGameInstance::GetSubsystem<MyGameSubsystem>(GameInstance);
```

您还可以定义具有多个实现的接口。
接口示例：
```cpp
MySystemInterface
```
具有两个具体的派生类：
```cpp
MyA : public MySystemInterface
MyB : public MySystemInterface
```
可通过以下方式访问：
```cpp
UGameInstance* GameInstance = ...;
const TArray<UMyGameSubsystem*>& MySubsystems = GameInstance->GetSubsystemArray<MyGameSubsystem>();
```
:::

## 实践

<ChatMessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
按照官方文档做一遍。
</ChatMessage>

![](..%2Fassets%2Fsubsst.png)

::: code-tabs#language

@tab ExorcistGameInstanceSubsystem.h

```cpp
#pragma once

#include "CoreMinimal.h"
#include "Subsystems/GameInstanceSubsystem.h"
#include "ExorcistGameInstanceSubsystem.generated.h"

UCLASS()
class EXORCIST_API UExorcistGameInstanceSubsystem : public UGameInstanceSubsystem
{
	GENERATED_BODY()
	
};

```
@tab ExorcistGameInstanceSubsystem.cpp
```cpp

#include "ExorcistGameInstanceSubsystem.h"

```
:::


<ChatMessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
看来并没有什么特殊的，咱的类继承了UGameInstanceSubsystem，那么我们康康UGameInstanceSubsystem里面写了什么。
</ChatMessage>


::: code-tabs#language

@tab GameInstanceSubsystem.h

```cpp
// Copyright Epic Games, Inc. All Rights Reserved.

#pragma once

#include "Subsystems/Subsystem.h"

#include "GameInstanceSubsystem.generated.h"

class UGameInstance;

/**
 * UGameInstanceSubsystem
 * Base class for auto instanced and initialized systems that share the lifetime of the game instance
 */
UCLASS(Abstract, Within = GameInstance)
class ENGINE_API UGameInstanceSubsystem : public USubsystem
{
	GENERATED_BODY()

public:
	UGameInstanceSubsystem();

	UGameInstance* GetGameInstance() const;

};
```
@tab GameInstanceSubsystem.cpp
```cpp
// Copyright Epic Games, Inc. All Rights Reserved.

#include "Subsystems/GameInstanceSubsystem.h"
#include "Engine/GameInstance.h"

#include UE_INLINE_GENERATED_CPP_BY_NAME(GameInstanceSubsystem)

UGameInstanceSubsystem::UGameInstanceSubsystem()
	: USubsystem()
{

}

UGameInstance* UGameInstanceSubsystem::GetGameInstance() const
{
	return Cast<UGameInstance>(GetOuter());
}
```
:::

<ChatMessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
好像也没什么特别的，大概就是这些内容
</ChatMessage>

1. `UGameInstanceSubsystem` 类是一个抽象基类，继承自 `USubsystem`。这是一个用于定义游戏实例子系统的基础类。

```cpp
UCLASS(Abstract, Within = GameInstance)
```

2. 构造函数 `UGameInstanceSubsystem::UGameInstanceSubsystem()` 初始化了子系统对象，调用基类 `USubsystem` 的构造函数。

3. `UGameInstance* UGameInstanceSubsystem::GetGameInstance() const` 方法返回与该子系统关联的游戏实例指针。它使用 `GetOuter()` 函数获取该子系统的外部对象，并将其转换为 `UGameInstance` 类型。


<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">

除了构造函数就只剩这个常量指针函数`GetGameInstance`。

</ChatMessage>

```cpp
UGameInstance* GetGameInstance() const;
```

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

不对，一定要搞清楚这不是一个常量指针，而是一个常函数，只不过函数返回类型是一个指针`UGameInstance`。

</ChatMessage>

### 常函数&常量指针
:::tip
#### 常函数
>常函数（const member function）是一种承诺，表明在该函数内部不会修改调用对象的成员变量。这是通过在函数声明和定义中使用 const 关键字实现的。

#### 常量指针
>`const int*p` 常量指针，是一种被限制（只读）修改指向值能力的指针。

![](..%2Fassets%2Fptrabs.jpg)

:::

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
GetGameInstance函数定义中的GetOuter()到底是什么啊？
</ChatMessage>

```cpp
UGameInstance* UGameInstanceSubsystem::GetGameInstance() const
{
	return Cast<UGameInstance>(GetOuter());
}
```

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
Cast是一个模板函数，很显然这里将GetOuter()返回值强转成UGameInstance类指针
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我看网友是这样介绍Outer的
</ChatMessage>


![](..%2Fassets%2FOUTER.png)


<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
那么请问你看完后理解了吗？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
一知半解。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
既然咱们理解不了，咱们应该抛开现象看本质，康康这个到底是一个什么东西！
</ChatMessage>

![](..%2Fassets%2Fuobjcet.png)

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
从源码上来看`GetOuter()` 是 UObjectBase 类中的一个内联返回`UObject`指针的函数，用于获取当前对象的外部对象，即包含当前对象的对象。
</ChatMessage>

![返回的就是`UObject`](..%2Fassets%2Frtuobject.png)

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
这里的FORCEINLINE是什么？
</ChatMessage>

### `#defineFORCEINLINE__forceinline`

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

FORCEINLINE是一个宏，也就是`__forceinline` 用于强制将函数进行内联展开。

</ChatMessage>

![](..%2Fassets%2Fforceinline.png)

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">

可是为什么我能在 `UGameInstanceSubsystem` 调到`UObjectBase`的成员函数呢？

</ChatMessage>


<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

这就和UE的继承结构有关了。这个类目开篇我们已经介绍过：<br>
UE中几乎所有类都继承自 `UObject`，`UGameInstanceSubsystem` 类作为子系统也不例外。

</ChatMessage>

### 继承特性

:::tip
在C++中，继承分为公有继承、保护继承和私有继承三种方式。
对于公有继承（public inheritance），子类可以调用父类的公开（public）成员函数.
:::

``` md
             UObject————————————————————————————
               |                                |
           USubsystem                           |
               |                                |
 UGameInstanceSubsystem——Cast<UGameInstance>(GetOuter())
```

- `UObject` 是 Unreal Engine 中所有对象的基类。
- `USubsystem` 是一个子系统抽象类，继承自 `UObject`。
- `UGameInstanceSubsystem` 也是是一个子系统抽象类，继承自 `USubsystem`。
- 
![](..%2Fassets%2F1472587-20210719153141813-975261415.png)

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
也就是说通过GetOuter()将`UObject`指针强制转成`UGameInstance`类指针。然后绑定关联UGameInstance到UGameInstanceSubsystem是吗。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
是的，这样我们可以直接通过UGameInstanceSubsystem访问UGameInstance。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
自此，`UGameInstanceSubsystem`表象已经被我们摸透。
</ChatMessage>

<hr>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
既然是抽象基类，就意味着有纯虚函数接口。
</ChatMessage>

![](..%2Fassets%2Fabstract.png)

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
这里除了一个构造函数和游戏实例指针也没有看到虚函数接口啊。
</ChatMessage>

### 抽象类
:::note
在C++中，学习继承和多态时我们知道，如果一个类包含至少一个纯虚函数，那么这个类就被认为是一个抽象类。
:::

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

他标记成抽象类，且没有重写虚函数的操作，意味着某个父类中一定有一个纯虚函数。经过IDE追溯发现`USubsystem`中就有（见下面Subsystem头文件23行）

</ChatMessage>



::: code-tabs#language

@tab USubsystem.h

```cpp{23-24}
// USubsystem 类是 UObject 的子类，用于定义子系统的基本结构。
UCLASS(Abstract)//抽象类
class ENGINE_API USubsystem : public UObject
{
	GENERATED_BODY()

public:
	USubsystem();//默认构造

	/** 重写此函数以控制是否应创建子系统。
	 * 例如，您可以仅在服务器上创建系统。
	 * 需要注意的是，如果使用此功能，每次获取子系统时都很重要进行空指针检查。
	 *
	 * 注意：在创建实例之前，此函数在 CDO 上调用！
	 *
	 */
	virtual bool ShouldCreateSubsystem(UObject* Outer) const { return true; }

	/** 实例构造 */
	virtual void Initialize(FSubsystemCollectionBase& Collection) {}

	/** 析构 */
	virtual void Deinitialize() {}//纯虚函数

	/** 重写以检查全局网络上下文 */
	virtual int32 GetFunctionCallspace(UFunction* Function, FFrame* Stack) override;

private:
	friend class FSubsystemCollectionBase;
	FSubsystemCollectionBase* InternalOwningSubsystem;

};

/** DynamicSubsystem 在模块加载和卸载时自动填充/清除现有集合的动态子系统
 *
 * 只有 UEngineSubsystems 和 UEditorSubsystems 允许动态加载。
 * 
 * 如果您的子系统实例未被创建，可能是因为它们所在的模块未被显式加载，
 * 确保有一个 LoadModule("ModuleName") 来加载该模块。
 */
UCLASS(Abstract)
class ENGINE_API UDynamicSubsystem : public USubsystem
{
	GENERATED_BODY()

public:
	UDynamicSubsystem();
};
```
@tab USubsystem.cpp

```cpp
// Copyright Epic Games, Inc. All Rights Reserved.

#include "Subsystems/Subsystem.h"
#include "Engine/Engine.h"

#include UE_INLINE_GENERATED_CPP_BY_NAME(Subsystem)

USubsystem::USubsystem()
{

}

int32 USubsystem::GetFunctionCallspace(UFunction* Function, FFrame* Stack)
{
	return GEngine->GetGlobalFunctionCallspace(Function, this, Stack);
}

UDynamicSubsystem::UDynamicSubsystem()
	: USubsystem()
{

}
```

:::

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
还真的是耶！
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
现在我们来分析一下代码。
</ChatMessage>

`USubsystem`中定义了两个类 `USubsystem` 和 `UDynamicSubsystem`。

1. **USubsystem 类：**
    - 继承自 `UObject`。
    - 使用 `UCLASS(Abstract)` 宏标记为抽象类，表示不能直接实例化该类。
    - 包含一个默认构造函数 `USubsystem()`。
    - 提供了虚函数 `ShouldCreateSubsystem`，用于确定是否应该创建该子系统的实例。
    - 包含虚函数 `Initialize` 用于实例初始化，和 `Deinitialize` 用于析构。
    - 重写了 `GetFunctionCallspace` 函数，用于检查全局网络上下文。
    - 包含一个私有成员 `InternalOwningSubsystem`，被声明为友元类 `FSubsystemCollectionBase` 的一个私有成员。

2. **UDynamicSubsystem 类：**
    - 继承自 `USubsystem`，是 `USubsystem` 的一个子类。
    - 使用 `UCLASS(Abstract)` 宏标记为抽象类，表示不能直接实例化该类。
    - 包含一个默认构造函数 `UDynamicSubsystem()`。


<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我看到注释里有个CDO是什么意思啊。
</ChatMessage>

![](..%2Fassets%2Fcdosingleton.png)

[Class Default Object](https://blog.csdn.net/yuxikuo_1/article/details/102628605)

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我还注意到这里有个友元类 `FSubsystemCollectionBase` 是用来干什么呢？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

</ChatMessage>


<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
那么，我们应该在我们的继承类里面写哪些东西呢？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
1.重写至少一个纯虚函数接口，让他变成非抽象类。<br>
2.写入一些测试成员变量或者成员函数。<br>
3.可以拿我们之前的单例做一次联动测试。
</ChatMessage>

::: code-tabs#language

@tab ExorcistGameInstanceSubsystem.h
```cpp
// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Subsystems/GameInstanceSubsystem.h"
#include "ExorcistGameInstanceSubsystem.generated.h"

class UGameSingleton;
/**
 * 
 */
UCLASS()
class EXORCIST_API UExorcistGameInstanceSubsystem : public UGameInstanceSubsystem
{
	GENERATED_BODY()
public:
	//是否创建这个子系统
	virtual bool ShouldCreateSubsystem(UObject* Outer)  const override;
	//初始化
	virtual void Initialize(FSubsystemCollectionBase& Collection) override;
	//销毁
	virtual void Deinitialize() override;
public:
	UPROPERTY(BlueprintReadWrite)
	int32 HP;
private:
	UGameSingleton* UGameSingleton;
};
```
@tab ExorcistGameInstanceSubsystem.cpp

```cpp
// Fill out your copyright notice in the Description page of Project Settings.


#include "ExorcistGameInstanceSubsystem.h"
#include "GameSingleton.h"

bool UExorcistGameInstanceSubsystem::ShouldCreateSubsystem(UObject* Outer) const
{
	return Super::ShouldCreateSubsystem(Outer);
}

void UExorcistGameInstanceSubsystem::Initialize(FSubsystemCollectionBase& Collection)
{
	Super::Initialize(Collection);
	UGameSingleton = UGameSingleton::GetInstance();
	UGameSingleton->InstanceCount++;
	GEngine->AddOnScreenDebugMessage(-1, 5.f, FColor::Red, FString::Printf(TEXT("InstanceCount:%d"), UGameSingleton->InstanceCount));
}

void UExorcistGameInstanceSubsystem::Deinitialize()
{
	Super::Deinitialize();
	UGameSingleton->InstanceCount++;
	GEngine->AddOnScreenDebugMessage(-1, 5.f, FColor::Red, FString::Printf(TEXT("InstanceCount:%d"), UGameSingleton->InstanceCount));
}

```

:::

::: code-tabs#language

@tab GameSingleton.h

```cpp
#pragma once

#include "CoreMinimal.h"
#include "UObject/ObjectMacros.h"
#include "GameSingleton.generated.h"

UCLASS(Blueprintable,BlueprintType)
class EXORCIST_API UGameSingleton : public UObject
{
	GENERATED_BODY()
	
private:
	 UGameSingleton() {}
public:
	UFUNCTION(BlueprintCallable)
	static UGameSingleton* GetInstance();
public:
	UPROPERTY(BlueprintReadWrite)
	int32 InstanceCount = 30;
};


```
@tab GameSingleton.cpp
```cpp
#include "GameSingleton.h"

UGameSingleton* UGameSingleton::GetInstance()
{
	static UGameSingleton* instance=nullptr;
	if (instance==nullptr)
	{
		instance=NewObject<UGameSingleton>();
		instance->AddToRoot();
	}
	return instance;
}
```
:::

>编译运行后任意关卡启动。

<GifWithButton src="../../assets/unrealgif/singtongif.gif"/>

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
可是你明明已经重新运行了为什么打印的数字还是继续递增了？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
咱们在单例中介绍过了，我们实现的单例生命周期等同于GEngine，而自增运算符是对自身的运算操作，所以每次都会继续递增。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
可是为什么每次会增加两个数字呢？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
这就和我们实现的子系统有关了，我们在构造和析构各自调用了一次自增操作。重运行游戏，意味着重启游戏实例状态。<br>
而我们的`GameInstanceSubsystem`的生命周期等同于`GameInstance`每次游戏停止，就会执行一次析构函数。
</ChatMessage>

