---
title: GP3.单例|Singleton
order : 3
category:
  - u++
---

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
什么是单例?
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
不同的框架实现方法不同，在C++中单例一般是指确保一个类只有一个实例，并为其提供一个全局访问入口。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
可是，怎么确保一个类只能有一个实例呢？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
你先回答我，定义一个类后你是通过什么办法来新建实例的？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
用new关键字，堆上新建一个对象。
</ChatMessage>

```cpp
#include <iostream>
class MyClass {  
}
int main() {
    MyClass* a = new MyClass();
    //Do Someting
    delete a;
}
```
<ChatMessage avatar="../../assets/emoji/bqb (5).png" :avatarWidth="40">
可是，该怎么限制用户的new操作呢？我总不能和用户说你不能new一个新实例吧！
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
我们都知道构造函数默认写在public中，如果我强制将他移动到private会发生什么？
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

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
但换个角度思考，我们已经成功限制了用户的new行为，问题也变成了怎么生成第一个实例！
现在你思考一下什么情况下不需要新建实例就能访问某个对象成员？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/new3.png" :avatarWidth="55" >
我记得static关键字修饰的成员函数！不需要实例化对象。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/new2.png" :avatarWidth="55" alignLeft>
是的，现在new这条路已经不能走了，咱可以用static将他的提到静态区。
</ChatMessage>

```cpp
#include <iostream>

class Singleton 
{

    // 将构造函数私有化
    Singleton() {}

public:
// 静态成员函数，用于获取类的唯一实例
static Singleton& getInstance() 
{
static Singleton instance;
return instance ;
}
void testfunction() 
{
std::cout<<"testfunction"<<std::endl;
}
};

int main() 
{
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

class Singleton 
{
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


### 经典模式

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
没错，他的生命周期和引擎是一样的，意味着在编辑器模式中的GEngine没有销毁这个变量就一直存在。因此你可以看到另外一种写法：
</ChatMessage>

### EngineSingleton

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
	if (GEngine)
	{
		UGameSingleton* Instance = Cast<UGameSingleton>(GEngine->GameSingleton);
		if(Instance)
		{
		    return Instance;
		}

	}
	return nullptr;
}
```
:::

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
两者生命周期都等同于GEngine，所以编辑器中停止游戏并不会释放内存。
</ChatMessage>


<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
后面这种写法需要在设置中`项目设置`指定一下单例类。
</ChatMessage>

![](..%2Fassets%2Fsetsingclass.png)

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
如果不设置呢？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
没有设置引擎会崩溃，因为他依赖GEngine的GameSingleton指针。
</ChatMessage>

```cpp
UGameSingleton* Instance = Cast<UGameSingleton>(GEngine->GameSingleton);//没有设置强转失败
```
![](..%2Fassets%2Fnullptr.jpg)

### CDOSingleton

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
当然，还可以利用CDO来创建。
</ChatMessage>

![](..%2Fassets%2Fcdosingleton.png)

::: code-tabs#language

@tab MySingleton.h

```cpp
#pragma once

#include "CoreMinimal.h"
#include "UObject/NoExportTypes.h"
#include "MySingleton.generated.h"

/**
 * 
 */
UCLASS(BlueprintType,Blueprintable)
class UMySingleton : public UObject
{
	GENERATED_BODY()
public:
   UMySingleton(const FObjectInitializer& ObjectInitializer);
   
   UFUNCTION(BlueprintPure, Category=MySingleton)
   static UMySingleton* GetInstance();
   
   UFUNCTION(BlueprintCallable, Category=MySingleton)
   void SetTestStr(FString InStr);
   
   UFUNCTION(BlueprintCallable, Category=MySingleton)
   FString GetTestStr();
private:
    FString TestStr;
};
```
@tab MySingleton.cpp
```cpp
#include "Singleton.h"

UMySingleton::UMySingleton(const FObjectInitializer& ObjectInitializer)
	:Super(ObjectInitializer)
{
}

UMySingleton* UMySingleton::GetInstance()
{
    // 大多数情况下CDO不应该被修改（使用GetDefault），这里使用GetMutableDefault返回的是可修改版本。
   return GetMutableDefault<UMySingleton>();
}

void UMySingleton::SetTestStr(FString InStr)
{
    TestStr = InStr;
}

FString UMySingleton::GetTestStr()
{
    return TestStr;
}
```
:::

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


<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
 蓝图函数库是单例吗？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
蓝图函数库（Blueprint Function Library）并不是严格意义上的单例。蓝图函数库是一种特殊类型的类，通常用于存储一组静态函数，这些函数可供蓝图（Blueprint）图表中的蓝图调用。
</ChatMessage>



[UE官方论坛](https://forums.unrealengine.com/t/singleton-pattern-in-c/430452)

[Cherno C++](https://www.bilibili.com/video/BV1bR4y177Hp/?spm_id_from=333.999.0.0)