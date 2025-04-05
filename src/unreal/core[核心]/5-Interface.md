---
title: c5.Interface|接口
order : 500
category:
  - u++
---


<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
什么是接口？
</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>

**接口（Interface** 是一种纯抽象的类型，只包含方法签名（即纯虚函数或抽象方法），不包含任何具体实现。

</chatmessage>


## 接口组成

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>

UE的接口由两部分组成：

</chatmessage>

1. **UINTERFACE**：使用 `UINTERFACE` 宏声明的空 `UClass`，仅用于让反射系统识别接口，不包含具体逻辑。

2. **IInterface**：以 `I` 开头的纯 C++ 类，包含所有纯虚函数声明，是真正需要被实现的接口。


## 接口声明

### 接口声明|BlueprintNativeEvent

![](..%2Fassets%2FBLUEPRINTNATIVEENVENT.png)

```cpp
#pragma once

#include "CoreMinimal.h"
#include "UObject/Interface.h"
#include "MyInterface.generated.h"

UINTERFACE(MinimalAPI)
class UMyInterface : public UInterface//继承自UInterface
{
	GENERATED_BODY()
};

class MYPROJECT_API IMyInterface//使用时继承这个即可。
{
	GENERATED_BODY()
public:

	UFUNCTION(BlueprintCallable, BlueprintNativeEvent, Category = "CameraInterface")
	void  IChangeCamera (int32 CameraID,float CameraSwitchTime) ;

};
```

---

### 接口声明|传统纯虚函数

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
依然可以使用传统虚函数方法定义接口。
</chatmessage>

```cpp
#pragma once

#include "CoreMinimal.h"
#include "UObject/Interface.h"
#include "MyInterface.generated.h"

UINTERFACE(MinimalAPI)
class UMyInterface : public UInterface
{
	GENERATED_BODY()
};

class MYPROJECT_API IMyInterface
{
	GENERATED_BODY()
public:
	void  IChangeCamera (int32 CameraID,float CameraSwitchTime) = 0;//纯虚函数
};
```

## 接口实现

### ①.纯虚函数

::: code-tabs#language

@tab MyClass.h
```cpp
#pragma once
#include "CoreMinimal.h"
#include "MyInterface.h"
#include "MyClass.generated.h"

// 声明类并实现接口
UCLASS()
class MYPROJECT_API UMyClass : public UObject, public IMyInterface
{
    GENERATED_BODY()

public:
    //重写虚函数。
    virtual void IChangeCamera override;
};
```
@tab MyClass.cpp
```cpp
#include "MyClass.h"

void UMyClass::MyMethod_Implementation()
{
    // 实现接口方法的具体逻辑
}

```
:::

### ②. BlueprintNativeEvent

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>

无需加` virtual` 关键字

</chatmessage>


::: code-tabs#language

@tab MyClass.h

```cpp twoslash {13} 
#pragma once
#include "CoreMinimal.h"
#include "MyInterface.h"
#include "MyClass.generated.h"

// 声明类并实现接口
UCLASS()
class MYPROJECT_API UMyClass : public UObject, public IMyInterface
{
    GENERATED_BODY()

public:
   void IChangeCamera_Implementation() override;
};
```

@tab MyClass.cpp
```cpp
#include "MyClass.h"

void UMyClass::MyMethod_Implementation()
{
    // 实现接口方法的具体逻辑
}

```
:::

## 接口调用

---

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
怎么调用呢？
</chatmessage>


<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
接口的本质其实是多态，通过继承来实现的。意味着还是需要获取到对应的实现类才能调用。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
那和我直接获取这个类调用有什么区别啊？
</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
你可以理解成接口是一些公共功能的扩展或者抽象，这意味着我不必获取具体的实现就能统一用接口调用。
但如果你连对象都找不到的话，显然没法通信是吧。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
好家伙有点霸总的味道：“我不关心你是谁，只要你会干这个活。”
</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
贴心的Baba给你画了一个图加深理解。
</chatmessage>

![](..%2Fassets%2Finterfacebp007.svg)

### ①.纯虚函数

```cpp
IMenuInterface* Interface = Cast<IMenuInterface>(FocusActor);
if (Interface)
{
    Interface->ISetLockVisibility(FocusActor,IsFocus);
}
```
---

### ②. BlueprintNativeEvent

```cpp
IMenuInterface* Interface = Cast<IMenuInterface>(FocusActor);
if (Interface)
{
    Interface->Execute_ISetLockVisibility(FocusActor,IsFocus);
}
```

```cpp
if (Actor->Implements<UHighlightInterface>())
{
    IHighlightInterface::Execute_UnHighlightActor(Actor);
}
```

## 蓝图接口

### 蓝图接口|声明定义

![](..%2Fassets%2Finterfacebp001.png)

![](..%2Fassets%2Finterfacebp002.jpg)

### 蓝图接口|实现

![](..%2Fassets%2Finterfacebp003.png)

![](..%2Fassets%2Finterfacebp004.png)

### 蓝图接口|调用

>类内直接调用

![](..%2Fassets%2Finterfacebp005.jpg)

>类外需找到对象

![](..%2Fassets%2Finterfacebp006.png)

## 参考链接

[官方文档](https://docs.unrealengine.com/4.26/zh-CN/ProgrammingAndScripting/GameplayArchitecture/Interfaces/)