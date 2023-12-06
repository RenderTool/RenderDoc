---
title: GP3.单例[Singleton]
order : 3
category:
  - u++
---

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
什么是单例?
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
确保一个类只有一个实例，并为其提供一个全局访问入口。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
创建一个类后，怎么保证他有且只能有一个？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
你先回答我，定义一个类后你是通过什么办法来新建实例的？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
new一个对象呗。
</ChatMessage>

```cpp
#include <iostream>
class MyClass {  
}
int main() {
    MyClass* a = new MyClass();
}
```
<ChatMessage avatar="../../assets/emoji/bqb (5).png" :avatarWidth="40">
搜嘎！可是，该怎么限制用户的new操作呢？我总不能和用户说你不能new一个新实例吧！
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
你可以先康康一个普通类初始化后默认会有哪些操作？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" >
这还不简单，一个类默认拥有bigfour,即四个初始化操作。
</ChatMessage>

1. **默认构造函数 (Default Constructor):** 如果你没有为类定义任何构造函数，编译器将生成一个无参的默认构造函数。它用于创建对象时的初始化，例如 `MyClass obj;`。

2. **析构函数 (Destructor):** 如果你没有显式定义析构函数，编译器将生成一个默认的析构函数。它用于在对象生命周期结束时进行清理工作，例如释放动态分配的资源。析构函数的名称是类名前加上波浪号 `~`，如 `~MyClass()`。

3. **拷贝构造函数 (Copy Constructor):** 如果你没有定义自己的拷贝构造函数，编译器将生成一个默认的拷贝构造函数。它用于通过复制另一个对象来初始化一个新对象，例如 `MyClass obj1; MyClass obj2 = obj1;`。

4. **拷贝赋值运算符 (Copy Assignment Operator):** 如果你没有定义自己的拷贝赋值运算符，编译器将生成一个默认的拷贝赋值运算符。它用于将一个对象的值复制给另一个对象，例如 `MyClass obj1, obj2; obj2 = obj1;`。

```cpp
class MyClass
{
public:
    MyClass() {}
    ~MyClass() {}
};
```
<ChatMessage avatar="../../assets/emoji/new2.png" :avatarWidth="50" alignLeft>
如果我们把构造函数私有化你觉得会发生什么？
</ChatMessage>

>类默认是私有的。

```cpp
#include <iostream>

class MyClass
{
    MyClass() {}
public:
    ~MyClass() {}
};

int main() {
    
    MyClass* a = new MyClass();

    return 0;
}
```
<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
还能发生什么，编译器报错呗。
</ChatMessage>

![](..%2Fassets%2Fsington.jpg)

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
构造函数私有化了，限制了用户new的行为，但同时我们也无法创建第一个对象了。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
没错，我们已经成功限制了用户的new行为，问题也变成了怎么生成第一个实例！
现在你思考一下什么情况下不需要新建实例就能访问某个对象成员？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/new3.png" :avatarWidth="55" >
static关键字修饰的成员函数！可是这跟怎么生成第一个实例有什么关系？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/new2.png" :avatarWidth="55" alignLeft>
你傻呀！现在new这条路已经不能走了，咱必须想办法开导它自己创建自己啊！
</ChatMessage>

```cpp
#include <iostream>

class Singleton {

    // 将构造函数私有化
    Singleton() {}

public:
// 静态成员函数，用于获取类的唯一实例
static Singleton& getInstance() {
static Singleton instance;
return instance ;
}
void testfunction() {
std::cout<<"testfunction"<<std::endl;
}
};

int main() {

    // 获取单例实例
    Singleton& singletonInstance = Singleton::getInstance();
    singletonInstance.testfunction();
    return 0;
}
```
<ChatMessage avatar="../../assets/emoji/new3.png" :avatarWidth="55" >
妙啊！也就是说利用static函数和他沟通，让他自己创造自己！
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
孺子可教！改成指针传递也是可以的
</ChatMessage>

```cpp
#include <iostream>

class Singleton {

    // 将构造函数私有化
    Singleton() {}

public:
    static Singleton* getInstance() {
        static Singleton instance;
        return &instance;
    }
    void testfunction() {
        std::cout<<"testfunction"<<std::endl;
    }
};

int main() {   
    // 获取单例实例
    Singleton* singletonInstance = Singleton::getInstance();
    singletonInstance->testfunction();
    return 0;
}
```

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
那么！UE中支持原生C++单例实现吗？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
支持！但官方不推荐使用！官方推荐我们使用subsystem
</ChatMessage>


![](..%2Fassets%2Fsingletonc%2B%2B.png)

<ChatMessage avatar="../../assets/emoji/new7.png" :avatarWidth="40">
可我今天就想用！你该不会是不会吧！
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
Baba今天就让你开开眼！
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/new3.png" :avatarWidth="55">
那么怎么开始呢？
</ChatMessage>


### EngineSingleton

::: code-tabs#language

@tab GameSingleton.h
```cpp
#pragma once

#include "CoreMinimal.h"
#include "UObject/NoExportTypes.h"
#include "UObject/ObjectMacros.h"
#include "GameSingleton.generated.h"

UCLASS(Blueprintable,BlueprintType)
class GAMECPP_API UGameSingleton : public UObject
{
	GENERATED_BODY()
	UFUNCTION(BlueprintCallable)
	static UGameSingleton* GetInstance();
};

```
@tab GameSingleton.cpp
```cpp
#include "GameSingleton.h"

UGameSingleton* UGameSingleton::GetInstance()
{
    if (GEngine)
    {
        UGameSingleton* Instance = Cast<UGameSingleton>(GEngine->GameSingleton);
        return Instance;
    }
    return nullptr;
}
```
:::

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
可是你这也没有私有化构造啊！
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
没错，严格意义上这个类并不是单例，他只是强制将引擎GameSingleton转换成当前类。因此还需要在引擎设置中设置一下。
</ChatMessage>

![](..%2Fassets%2Fsetsingclass.png)

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
如果不设置呢？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
不好意思没有设置引擎会崩溃，大概是强制转换出现了问题。
</ChatMessage>

```cpp
UGameSingleton* Instance = Cast<UGameSingleton>(GEngine->GameSingleton);//没有设置强转失败
```
![](..%2Fassets%2Fnullptr.jpg)

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
设置好然后呢？怎么验证他是单例呢？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
这个好办，加入一些测试变量
</ChatMessage>

::: code-tabs#language

@tab GameSingleton.h

```cpp{18}
#pragma once

#include "CoreMinimal.h"
#include "UObject/NoExportTypes.h"
#include "UObject/ObjectMacros.h"
#include "GameSingleton.generated.h"

UCLASS(Blueprintable,BlueprintType)
class EXORCIST_API UGameSingleton : public UObject
{
	GENERATED_BODY()
	
	UFUNCTION(BlueprintCallable)
	static UGameSingleton* GetInstance();
	
public:
	UPROPERTY(BlueprintReadWrite)
	int32 InstanceCount = 30;//初值30
};
```
@tab GameSingleton.cpp
```cpp
#include "GameSingleton.h"

UGameSingleton* UGameSingleton::GetInstance()
{
	if (GEngine)
	{
		UGameSingleton* Instance = Cast<UGameSingleton>(GEngine->GameSingleton);
		GEngine->AddOnScreenDebugMessage(1, 1.0f, FColor::White, FString::SanitizeFloat(Instance->InstanceCount), true, FVector2D(1, 1));
		return Instance;
	}
	return nullptr;
}
```
:::

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
蓝图中通过实例指针修改成员变量，然后跳转关卡或者重新打开打印一下康康不就知道了！`
</ChatMessage>

![](..%2Fassets%2Fsetsing.png)


<GifWithButton src="../../assets/unrealgif/ramdonsington.gif"/>

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我发现他重写打开关卡后他设置的值依然是上一次！只有在引擎彻底重启后数值才恢复成30。
</ChatMessage>


<GifWithButton src="../../assets/unrealgif/sington.gif"/>

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
没错，他的生命周期和引擎是一样的，意味着在编辑器模式中的GEngine没有销毁这个变量就一直存在。
</ChatMessage>

### GameInstance

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
好像和游戏实例差不多耶！
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
确实，他的表现确实很像我们的游戏实例，全局只有一个实例。但游戏实例的生命周期却没有EngineSingleton长。
关卡结束运行就会释放内存空间。
</ChatMessage>

<GifWithButton src="../../assets/unrealgif/gameinstancegif.gif"/>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
使用了open+level重新打开了这个关卡。
</ChatMessage>

![](..%2Fassets%2Fgameinstanceprint.png)

### 其他写法

```cpp
UCLASS()
class HELLO_API UMyScoreManager : public UObject
{
    GENERATED_BODY()
public:
// 一些公用的函数或者Property
    UPROPERTY(EditAnywhere, BlueprintReadWrite)
        float Score;

    UFUNCTION(BlueprintPure,DisplayName="MyScoreManager")
    static UMyScoreManager* Instance()
    {
        static UMyScoreManager* instance=nullptr;
        if (instance==nullptr)
        {
            instance=NewObject<UMyScoreManager>();
            instance->AddToRoot();
        }
        return instance;
        //return GetMutableDefault<UMyScoreManager>();
    }
    UFUNCTION(BlueprintCallable)
        void AddScore(float delta);
};
```

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
 蓝图函数库是单例吗？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
蓝图函数库（Blueprint Function Library）并不是严格意义上的单例。蓝图函数库是一种特殊类型的类，通常用于存储一组静态函数，这些函数可供蓝图（Blueprint）图表中的蓝图调用。
</ChatMessage>



[UE官方论坛](https://forums.unrealengine.com/t/singleton-pattern-in-c/430452)

[Cherno C++](https://www.bilibili.com/video/BV1bR4y177Hp/?spm_id_from=333.999.0.0)