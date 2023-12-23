---
title: GP5.Interface|接口
order : 5
category:
  - u++
---

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
UEC++中怎么写接口？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
你指的是接口类吧！
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
是的，我知道多态虚函数本身也是接口，我想知道UE中有没有什么特殊的地方。
</ChatMessage>

```cpp
    class IMyInterface
    {
        virtual void MyMethod() = 0;
    };

    // 实现接口的类
    class MyClass : public IMyInterface
    {
        virtual void MyMethod() override
        {
            // 实现接口方法的具体逻辑
        }
    };
```
    
<ChatMessage avatar="../../assets/emoji/new9.png" :avatarWidth="40" alignLeft>
安排!
</ChatMessage>

### 简单实践

1. 继承`UInterface`定义

::: note
声明接口类与声明普通的虚幻类相似，但仍有两个主要区别。首先，接口类使用UINTERFACE宏而不是UCLASS宏，且直接从"UInterface"而不是"UObject"继承。
:::

```cpp
// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "UObject/Interface.h"
#include "GameInterface.generated.h"

UINTERFACE(MinimalAPI)
class UGameInterface : public UInterface
{
	GENERATED_BODY()
};

class MYPROJECT_API IGameInstanceInterface
{
	GENERATED_BODY()
public:
	//传入相机id、目标相机id
	UFUNCTION(BlueprintCallable, BlueprintNativeEvent, Category = "CameraInterface")
	void  IChangeCamera (int32 CameraID,float CameraSwitchTime) ;

};
```

2. 调用方继承刚刚定义的接口类后用虚函数重写即可。

::: code-tabs#language

@tab MyClass.h
```cpp
#pragma once
#include "CoreMinimal.h"
#include "GameInterface.h"
#include "MyClass.generated.h"

// 声明类并实现接口
UCLASS()
class MYPROJECT_API UMyClass : public UObject, public IGameInterface
{
    GENERATED_BODY()

public:
    virtual void IChangeCamera_Implementation() override;
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

### BlueprintNativeEvent & BlueprintImplementableEvent

<ChatMessage avatar="../../assets/emoji/new2.png" :avatarWidth="50" >
我发现了猫腻！他和传统的接口概念差不多，但多了一个BlueprintNativeEvent宏标记！他和BlueprintImplementableEvent什么区别？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/new9.png" :avatarWidth="40" alignLeft>
看看官方解释：
</ChatMessage>

![](..%2Fassets%2FBLUEPRINTNATIVEENVENT.png)

### 参考链接

[官方文档](https://docs.unrealengine.com/4.26/zh-CN/ProgrammingAndScripting/GameplayArchitecture/Interfaces/)