---
title: GP4.子系统[Subsystem]TODO
order : 4
category:
  - u++
---

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
什么是子系统？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
虚幻引擎中的子系统是生命周期受控的自动实例化类。
这些类提供了易用的扩展点，程序员可直接获得蓝图和Python公开，同时避免繁复的引擎类修改或覆盖。
</ChatMessage>

![](..%2Fassets%2Fsubs.png)

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
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

### 实践

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
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


<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
看来并没有什么特殊的，知识继承了UGameInstanceSubsystem，那么我们康康UGameInstanceSubsystem里面写了什么。
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

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
好像也没什么特别的，大概就是这些内容
</ChatMessage>

1. `UGameInstanceSubsystem` 类是一个抽象基类，继承自 `USubsystem`。这是一个用于定义游戏实例子系统的基础类。

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
既然是抽象基类，来康康他的接口。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">

这里除了几个构造函数也没看到虚函数啊，应该是写在基类中 `USubsystem`

</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
那就继续看这个UGameInstanceSubsystem写了哪些东西
</ChatMessage>


2. 构造函数 `UGameInstanceSubsystem::UGameInstanceSubsystem()` 初始化了子系统对象，调用基类 `USubsystem` 的构造函数。

3. `UGameInstance* UGameInstanceSubsystem::GetGameInstance() const` 方法返回与该子系统关联的游戏实例指针。它使用 `GetOuter()` 函数获取该子系统的外部对象，并将其转换为 `UGameInstance` 类型。

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">

这里貌似是一个常量指针函数GetGameInstance，可我不理解`return Cast<UGameInstance>(GetOuter());`做了啥？

</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
Cast是一个模板函数，很显然这里将GetOuter()返回值强转成UGameInstance类指针
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
GetOuter()到底是什么啊？
</ChatMessage>

![](..%2Fassets%2FOUTER.png)

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
看不懂！
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

还是老夫来介绍一下吧。咱不能总用抽象的思维去思考问题，关注本质也是很重要的思维。
`GetOuter()` 是 UObjectBase 类中的一个内联返回`UObject`指针的函数，用于获取当前对象的外部对象，即包含当前对象的对象。

</ChatMessage>

![](..%2Fassets%2Fuobjcet.png)

![返回的就是`UObject`](..%2Fassets%2Frtuobject.png)

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
这里的FORCEINLINE是什么？
</ChatMessage>


<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

FORCEINLINE是一个宏，也就是`__forceinline` 用于强制将函数进行内联展开。

</ChatMessage>

![](..%2Fassets%2Fforceinline.png)


<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

之前我们已经介绍过UE中几乎所有类都继承自 `UObject`，`UGameInstanceSubsystem` 类作为子系统也不例外。

</ChatMessage>

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
也就是说通过GetOuter()将`UObject`指针强制转成`UGameInstance`类指针。然后绑定关联UGameInstance到UGameInstanceSubsystem是吗。
</ChatMessage>

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


<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
是的，这样我们可以直接通过UGameInstanceSubsystem访问UGameInstance。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

先放一放细节，我们之前提到还没看到接口 `USubsystem类`

</ChatMessage>

::: code-tabs#language

@tab USubsystem.h

```cpp
// USubsystem 类是 UObject 的子类，用于定义子系统的基本结构。
UCLASS(Abstract)
class ENGINE_API USubsystem : public UObject
{
	GENERATED_BODY()

public:
	USubsystem();

	/** 重写此函数以控制是否应创建子系统。
	 * 例如，您可以仅在服务器上创建系统。
	 * 需要注意的是，如果使用此功能，每次获取子系统时都很重要进行空指针检查。
	 *
	 * 注意：在创建实例之前，此函数在 CDO 上调用！
	 *
	 */
	virtual bool ShouldCreateSubsystem(UObject* Outer) const { return true; }

	/** 为系统的实例初始化而实现此函数 */
	virtual void Initialize(FSubsystemCollectionBase& Collection) {}

	/** 为系统的实例去初始化而实现此函数 */
	virtual void Deinitialize() {}

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

TODO
