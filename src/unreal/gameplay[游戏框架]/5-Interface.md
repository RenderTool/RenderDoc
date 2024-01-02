---
title: GP5.Interface|接口
order : 5
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
UEC++中怎么写接口？
</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
你指的是接口类吧！
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
是的，我知道多态虚函数本身也是接口，我想知道UE中有没有什么特殊的地方。
</chatmessage>

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
    
<chatmessage avatar="../../assets/emoji/new9.png" :avatarWidth="40" alignLeft>
安排!
</chatmessage>

### 简单实践

1. 继承`UInterface`

::: note
声明接口类与声明普通的虚幻类相似，但仍有几个区别。<br>
1.接口类使用UINTERFACE宏而不是UCLASS宏.<br>
2.继承自"UInterface"而不是"UObject"。<br>
3.依然可以使用传统虚函数方法定义接口。
:::

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

2. 调用方继承刚刚定义的接口类后用虚函数重写即可。

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
    virtual void IChangeCamera_Implementation() override;//重写虚函数。
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

<chatmessage avatar="../../assets/emoji/new2.png" :avatarWidth="50" >
传统的接口概念差不多，但多了一个BlueprintNativeEvent宏标记！和BlueprintImplementableEvent什么区别？
</chatmessage>

<chatmessage avatar="../../assets/emoji/new9.png" :avatarWidth="40" alignLeft>
看文档：
</chatmessage>

![](..%2Fassets%2FBLUEPRINTNATIVEENVENT.png)

### 参考链接

[官方文档](https://docs.unrealengine.com/4.26/zh-CN/ProgrammingAndScripting/GameplayArchitecture/Interfaces/)