---
title: U++6.通信-CMD|委托|CastTODO
order : 6
category:
  - u++
---

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
Baba!UE软件内通信有哪些方法啊!
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
有很多,看你什么用途.
</ChatMessage>

## 蓝图&C++通信

## 命令台调用|CommandLineCall

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
比如关卡中的函数可以用ce命令直接通信.
</ChatMessage>

>**语法：CE+函数名+空格+参数**

<GifWithButton src="../../assets/unrealgif/levelfunction.gif"/>

<ChatMessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="40">
现在很少在关卡内写函数了吧,有没有直接调用actor内的函数方法?
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
也有,可用用ke命令来通信,但关卡中也得有这个对象.
</ChatMessage>

>**语法：KE+类名+函数名**


<GifWithButton src="../../assets/unrealgif/keclassfunction.gif"/>

<ChatMessage avatar="../../assets/emoji/bqb (5).png" :avatarWidth="40">
你说的这些方法只适合Debug,有没有高级点的方法!
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这些方法确实不算不上"通信",可所谓的通信不就是不就是双方确认身份,传递消息的过程嘛?就这一个过程给你什么启发?
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">

搜嘎!说到确认身份,我知道有个 ` get actor of class`  节点可以找到想要的actor对象.

</ChatMessage>

## 迭代查找|Iterative search

### 蓝图实践

1. 新建两个actor放入场景。

![](..%2Fassets%2F2actor.png)

2. actor1中新建test001函数,actor2中新建test002函数

![](..%2Fassets%2Ftestfunction.png)

3.actor1中使用`getactorofclass`节点获取到actor2，并调用test2函数

![](..%2Fassets%2Fdyonghans.png)

#### 完整动图

<GifWithButton src="../../assets/unrealgif/refencecom.gif"/>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
为什么要放在同一个关卡？不然会报错。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
你把他理解成在地球上找人,如果人不在地球上又怎么找得到呢?
</ChatMessage>

<hr>

### c++剖析

<ChatMessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
Baba还是带你康康  <span style="color: #c0392b;">getactorofclass</span>节点源码实现原理吧.
</ChatMessage>

#### 头文件.h
```cpp
/**
 * 在世界中查找指定类的第一个Actor。
 * 这是一项耗时的操作，谨慎使用，例如不要在每一帧都使用。
 * @param ActorClass 要查找的Actor的类。必须指定，否则结果将为空。
 * @return 指定类的Actor。
 */
UFUNCTION(BlueprintCallable, Category="Actor", meta=(WorldContext="WorldContextObject", DeterminesOutputType="ActorClass"))
static class AActor* GetActorOfClass(const UObject* WorldContextObject, TSubclassOf<AActor> ActorClass);
```


<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" alignLeft>

一个普通静态函数，返回类型是 `AActor*`，即指向 `AActor` 类的指针。<br>
在C++中，`static` 关键字用于指示该函数是属于类而不是类的实例，并且可以直接通过类名来调用，而不需要创建类的实例。

</ChatMessage>

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
Baba我不懂什么叫创建类的实例！
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
给你举个例子吧！
</ChatMessage>

```cpp
class MyClass {
public:
    int myVariable;

    void MyFunction() {
        // 函数实现
    }
};

// 创建一个MyClass类的实例
MyClass myObject;

//如果函数是static实现，则不需要创建实例就可以直接调用

class MyClass {
public:
    int myVariable;

    static void MyFunction() {
        // 静态函数实现
    }
};

// 直接调用静态函数
MyClass::MyFunction();
```
<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

这里static修饰的了函数,因此
`UGameplayStatics::GetActorOfClass` 可以直接调用，而不需要创建 `UGameplayStatics` 类的实例。

</ChatMessage>

#### 源文件.cpp

```cpp
AActor* UGameplayStatics::GetActorOfClass(const UObject* WorldContextObject, TSubclassOf<AActor> ActorClass)
{
    // 使用QUICK_SCOPE_CYCLE_COUNTER进行性能分析，标记函数调用的性能
    QUICK_SCOPE_CYCLE_COUNTER(UGameplayStatics_GetActorOfClass);

    // 如果未提供ActorClass，则不执行任何操作，直接返回nullptr
    if (ActorClass)
    {
        // 通过WorldContextObject获取当前世界的指针，如果失败则记录错误并返回nullptr
        if (UWorld* World = GEngine->GetWorldFromContextObject(WorldContextObject, EGetWorldErrorMode::LogAndReturnNull))
        {
            // 使用TActorIterator迭代World中的所有指定类型的Actor
            for (TActorIterator<AActor> It(World, ActorClass); It; ++It)
            {
                // 获取当前迭代到的Actor指针
                AActor* Actor = *It;
                // 返回找到的第一个符合条件的Actor
                return Actor;
            }
        }
    }

    // 如果未找到符合条件的Actor，返回nullptr
    return nullptr;
}

```
<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
现在可以回答之前的问题了<br>
原理已经很清楚了,世界中迭代查找指定类的第一个Actor。迭代器后续的文章中有详细介绍可以翻看。
</ChatMessage>

## 类型强转|Cast

#### 头文件.h
```cpp
template <typename To, typename From>
To* Cast(From* Src);
```

#### 源文件.h
```cpp
template <typename To, typename From>
FORCEINLINE To* Cast(From* Src)
{
	// 确保类型是完整的，避免尝试在不完整类型之间进行转换
	static_assert(sizeof(From) > 0 && sizeof(To) > 0, "Attempting to cast between incomplete types");

	if (Src)
	{
		// 检查是否是接口类型
		if constexpr (TIsIInterface<From>::Value)
		{
			// 如果是接口类型，获取对应的UObject
			if (UObject* Obj = Src->_getUObject())
			{
				// 如果目标类型也是接口
				if constexpr (TIsIInterface<To>::Value)
				{
					// 返回To类型对应的接口地址
					return (To*)Obj->GetInterfaceAddress(To::UClassType::StaticClass());
				}
				else
				{
					// 如果目标类型不是接口，检查是否是目标类型的实例
					if (Obj->IsA<To>())
					{
						return (To*)Obj;
					}
				}
			}
		}
		// 如果启用了Cast Flags，并且目标类型有特定的Cast标志
		else if constexpr (UE_USE_CAST_FLAGS && TCastFlags<To>::Value != CASTCLASS_None)
		{
			// 检查是否可以使用特定的Cast标志进行转换
			if (((const UObject*)Src)->GetClass()->HasAnyCastFlag(TCastFlags<To>::Value))
			{
				return (To*)Src;
			}
		}
		// 如果目标类型是接口类型
		else if constexpr (TIsIInterface<To>::Value)
		{
			// 返回To类型对应的接口地址
			return (To*)((UObject*)Src)->GetInterfaceAddress(To::UClassType::StaticClass());
		}
		else
		{
			// 如果目标类型不是接口，检查是否是目标类型的实例
			if (((const UObject*)Src)->IsA<To>())
			{
				return (To*)Src;
			}
		}
	}

	// 如果源指针为空或类型转换失败，返回空指针
	return nullptr;
}
```

## 委托|Delegate

## 接口|Interface



## 问题

### `getactorofclass`vs`Cast`

![](..%2Fassets%2Fcppcastvsgetacotrofclass.png)

## 参考链接
https://forums.unrealengine.com/t/get-actor-of-class-vs-cast-to-class/597433