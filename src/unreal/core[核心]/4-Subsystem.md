---
title: c4.Subsystem|子系统
order : 400
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
什么是子系统？
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
虚幻引擎中的子系统是生命周期受控的自动实例化类。
</chatmessage>

![](..%2Fassets%2Fsubs.png)

## **生命周期**

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
下面是引擎预定义的几个子系统
</chatmessage>

![](..%2Fassets%2F1472587-20210719153141813-975261415.png)

| 生命周期               | Subsystem 类              |
|--------------------|--------------------------|
| 引擎（Engine）         | `UEngineSubsystem`       |
| 编辑器（Editor）        | `UEditorSubsystem`       |
| 游戏实例（GameInstance） | `UGameInstanceSubsystem` |
| 世界（World）          | `UWorldSubsystem`        |
| 本地玩家（LocalPlayer）  | `ULocalPlayerSubsystem`  |


## **创建和使用**

### **1. 继承对应的子系统**

![](..%2Fassets%2Fsubsst.png)


### **2. 基本函数**

<chatmessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
没有什么特殊的，无法就是是否创建、构造、析构。
</chatmessage>


::: code-tabs#language

@tab ExorcistGameInstanceSubsystem.h

```cpp
#pragma once

#include "CoreMinimal.h"
#include "Subsystems/GameInstanceSubsystem.h"
#include "MyGameInstanceSubsystem.generated.h"

UCLASS()
class EXORCIST_API UMyGameInstanceSubsystem : public UGameInstanceSubsystem
{
	GENERATED_BODY()
public:
	//是否创建这个子系统
	virtual bool ShouldCreateSubsystem(UObject* Outer)  const override;
	//初始化
	virtual void Initialize(FSubsystemCollectionBase& Collection) override;
	//销毁
	virtual void Deinitialize() override;
};

```
@tab ExorcistGameInstanceSubsystem.cpp
```cpp

#include "UMyGameInstanceSubsystem.h"

bool UMyGameInstanceSubsystem::ShouldCreateSubsystem(UObject* Outer) const
{
	return Super::ShouldCreateSubsystem(Outer);
}

void UMyGameInstanceSubsystem::Initialize(FSubsystemCollectionBase& Collection)
{
	Super::Initialize(Collection);
}

void UMyGameInstanceSubsystem::Deinitialize()
{
	Super::Deinitialize();
}

```
:::

---

### **3.蓝图中使用**

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
然后呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
和你在正常的UObject中一样，添加成员变量、函数，利用宏反射标记暴露给蓝图就能使用了。
</chatmessage>


![](..%2Fassets%2Fsub.png)

---

### **4. C++中调用**

> MyEngineSubsystem

```cpp
UMyEngineSubsystem* MySubsystem = GEngine->GetEngineSubsystem<UMyEngineSubsystem>();
```

> MyEditorSubsystem

```cpp
UMyEditorSubsystem* MySubsystem = GEditor->GetEditorSubsystem<UMyEditorSubsystem>();
```

> <span style="color:red">MyGameInstanceSubsystem</span >

```cpp
UGameInstance* GameInstance = UGameplayStatics::GetGameInstance(...);
UMyGameInstanceSubsystem* MySubsystem = GameInstance->GetSubsystem<UMyGameInstanceSubsystem>();
```

> MyWorldSubsystem

```cpp
UWorld* World=MyActor->GetWorld();  //world用各种方式也都可以
UMyWorldSubsystem* MySubsystem=World->GetSubsystem<UMyWorldSubsystem>();
```

> MyLocalPlayerSubsystem

```cpp
ULocalPlayer* LocalPlayer = Cast<ULocalPlayer>(PlayerController->Player)
UMyLocalPlayerSubsystem * MySubsystem = LocalPlayer->GetSubsystem<UMyLocalPlayerSubsystem>();
```

---


## 再谈生命周期

### `GetOuter()`

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
GetGameInstance函数定义中的GetOuter()到底是什么啊？
</chatmessage>

```cpp
UGameInstance* UGameInstanceSubsystem::GetGameInstance() const
{
	return Cast<UGameInstance>(GetOuter());
}
```

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

UE中讲究落叶归根。对于 `UGameInstanceSubsystem`，它的 "根" `Outer` 就是它所附着的 UGameInstance 实例。

</chatmessage>

---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
不明觉厉。
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
既然咱们理解不了，咱们应该抛开现象看本质，康康这个到底是一个什么东西！
</chatmessage>

![](..%2Fassets%2Fuobjcet.png)

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

从源码上来看`GetOuter()` 是 UObjectBase 类中的一个内联返回`UObject`指针的函数，用于获取当前对象的外部对象，即包含当前对象的对象。

</chatmessage>

![返回的就是`UObject`](..%2Fassets%2Frtuobject.png)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
这里的FORCEINLINE是什么？
</chatmessage>

### `#defineFORCEINLINE__forceinline`

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

FORCEINLINE是一个宏，也就是`__forceinline` 用于强制将函数进行内联展开。

</chatmessage>

![](..%2Fassets%2Fforceinline.png)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">

可是为什么我能在 `UGameInstanceSubsystem` 调到`UObjectBase`的成员函数呢？

</chatmessage>


<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

这就和UE的继承结构有关了。这个类目开篇我们已经介绍过：<br>
UE中几乎所有类都继承自 `UObject`，`UGameInstanceSubsystem` 类作为子系统也不例外。

</chatmessage>

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

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
也就是说通过GetOuter()将`UObject`指针强制转成`UGameInstance`类指针。然后绑定关联UGameInstance到UGameInstanceSubsystem是吗。
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
是的，这样我们可以直接通过UGameInstanceSubsystem访问UGameInstance。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我有个疑问，既然他都是UObject指针，他们的生命周期是怎么判定的？
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

如果我们翻看其他类型的Subsystem,可以知道`GetOuter()`返回的指针各自转换成各自类型的指针，各自类型的指针意味着有各自的生命周期。

</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
自此，`UGameInstanceSubsystem`表象已经被我们摸透。
</chatmessage>

### CDO | Class Default Object

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我看到注释里有个CDO是什么意思啊。
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
Man,这其实是反射的内容知识。
</chatmessage>

>在 Unreal Engine 中，每个通过反射系统注册的 UClass 都会在引擎初始化时自动生成一个 Class Default Object（简称 CDO）。
本章不会展开说明，我们会在后续的反射章节中详细展开。

```cpp
UMyObject* CDO = GetDefault<UMyObject>();
```

::: note
不要试图在 CDO 构造阶段（UObject 构造函数里）做任何依赖运行时世界或子系统的操作，
这些操作应该放到更安全的生命周期阶段（如 BeginPlay() 或子系统的初始化回调）中。
:::