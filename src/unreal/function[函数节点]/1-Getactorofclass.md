---
title: FUN1.GetActorOfClass
order : 1
category:
  - u++
---


## GetActorOfClass

### 节点介绍

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="50" alignLeft>
GetActorOfClass是一个UGameplayStatics类中的静态函数，在世界中找到指定类的第一个Actor
</chatmessage>

![](..%2Fassets%2Fgetactorofclass.jpg)

### 节点案例

<gifwithbutton src="../../assets/unrealgif/refencecom.gif"/>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
为什么不放在一个关卡会报错。
</chatmessage>


### c++剖析

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
Baba先带你康康  <span style="color: #c0392b;">getactorofclass</span>节点源码实现原理吧.
</chatmessage>

#### GameplayStatics.h

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

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>

一个普通静态函数，返回类型是 `AActor*`，即指向 `AActor` 类的指针。<br>
在C++中，`static` 关键字用于指示该函数是属于类而不是类的实例，并且可以直接通过类名来调用，而不需要创建类的实例。

</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
Baba我不懂什么叫创建类的实例！
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
给你举个例子吧！
</chatmessage>

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
<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

这里static修饰的了函数,因此
`UGameplayStatics::GetActorOfClass` 可以直接调用，而不需要创建 `UGameplayStatics` 类的实例。

</chatmessage>

#### GameplayStatics.cpp

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
<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
由此可见，getactorofclass的本质就是利用迭代器在世界中迭代查找指定类的第一个Actor。
关于迭代器，请参考我的Template[模板]
</chatmessage>

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40">
搜嘎！难怪都要放入关卡中。
</chatmessage>

## GetAllActorOfClass

![](..%2Fassets%2Fgetallactorsofclass.png)

### 节点介绍

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="50" alignLeft>
GetAllActorOfClass顾名思义找到在世界中找到指定类的所有Actor
</chatmessage>

#### GameplayStatics.h

```cpp
/**
 * 在世界中查找指定类的所有角色。
 * 这是一个较慢的操作，请谨慎使用，例如不要在每一帧都使用。
 * @param ActorClass 要查找的Actor类。必须指定，否则结果数组将为空。
 * @param OutActors 输出包含指定类的Actor数组。
 */
UFUNCTION(BlueprintCallable, Category="Actor", meta=(WorldContext="WorldContextObject", DeterminesOutputType="ActorClass", DynamicOutputParam="OutActors"))
static void GetAllActorsOfClass(const UObject* WorldContextObject, TSubclassOf<AActor> ActorClass, TArray<AActor*>& OutActors);
```
#### GameplayStatics.cpp

```cpp
void UGameplayStatics::GetAllActorsOfClass(const UObject* WorldContextObject, TSubclassOf<AActor> ActorClass, TArray<AActor*>& OutActors)
{
    // 使用QUICK_SCOPE_CYCLE_COUNTER进行性能分析，标记函数调用的性能
    QUICK_SCOPE_CYCLE_COUNTER(UGameplayStatics_GetAllActorsOfClass);
    // 清空输出数组
    OutActors.Reset();

    // 如果未提供类，则不执行任何操作，而是返回空数组
    if (ActorClass)
    {
        // 从上下文对象获取世界，如果失败则记录错误并返回空
        if (UWorld* World = GEngine->GetWorldFromContextObject(WorldContextObject, EGetWorldErrorMode::LogAndReturnNull))
        {
            // 遍历世界中指定类的所有Actor
            for (TActorIterator<AActor> It(World, ActorClass); It; ++It)
            {
                AActor* Actor = *It;
                OutActors.Add(Actor);
            }
        }
    }
}

```
### 问题

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="50">
为什么一开始就清空了数组,我也没见到节点有传入数组啊？<br>
</chatmessage>

<chatmessage avatar="../../assets/emoji/new4.png" :avatarWidth="50" alignLeft>
你注意UFUNCTION宏meta（元数据）的描述了吗？
</chatmessage>

`DeterminesOutputType` 和 `DynamicOutputParam` 是 UFUNCTION 宏的元数据，用于在蓝图中更好地处理输出参数的类型。

1. **`DeterminesOutputType`：**
    - 当指定了 `DeterminesOutputType` 元数据时，它表示函数的输出参数类型是由函数的实现决定的，而不是由函数声明时指定的。这对于一些动态生成输出类型的函数非常有用。

2. **`DynamicOutputParam`：**
    - 当指定了 `DynamicOutputParam` 元数据时，它表示函数的输出参数是动态生成的，而不是静态指定的。在函数签名中，你可以看到这个参数被标记为 `&OutActors`，这就是动态输出参数的示例。

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="50">
那么这个节点会强制变成输出节点吗？比如我加了const修饰。
</chatmessage>

<chatmessage avatar="../../assets/emoji/new7.png" :avatarWidth="50" alignLeft>
测试一下不就行了！
</chatmessage>

```cpp
   //没用const限定
	UFUNCTION(BlueprintCallable, Category="Actor",  meta=( DynamicOutputParam="OutActors"))
    static void TestFun(TArray<AActor*>& OutActors);
    
void UTEST::TestFun(TArray<AActor*>& OutActors)
{
//测试使用，实际开发别用哦
	AActor* Actor2 = nullptr;
    OutActors.Add(Actor2);
	OutActors.Add(Actor2);
	int Num = OutActors.Num();
	GEngine->AddOnScreenDebugMessage(1, 5.0f, FColor::White, FString::FromInt(Num), true, FVector2D(1, 1));
}
	
	//const限定
	UFUNCTION(BlueprintCallable, Category="Actor" ,meta=(DynamicOutputParam="OutActors"))
	static void TestFun2(const TArray<AActor*>& OutActors);  
	void UTEST::TestFun2( const TArray<AActor*>& OutActors)
{
	int Num = OutActors.Num();
	GEngine->AddOnScreenDebugMessage(1, 5.0f, FColor::White, FString::FromInt(Num), true, FVector2D(1, 1));
}
```

![](..%2Fassets%2Fconstwithoutconst.png)

<chatmessage avatar="../../assets/emoji/new8.png" :avatarWidth="50">
测试结果看来const修饰后会将数组变成输入节点。
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
没错，而且我们测试代码中给2个空指针到这个指针数组中，测试结果也是打印2.
</chatmessage>

![](..%2Fassets%2Fwss.png)

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
const修饰后数组变成只读，需要我们自己传入数据。
</chatmessage>

![](..%2Fassets%2Fxd.png)

<chatmessage avatar="../../assets/emoji/new8.png" :avatarWidth="50">
const强制变成只读这没毛病，但动态生成我还是抱有怀疑态度，如果我们去掉DynamicOutputParam呢？还会打印2吗？
</chatmessage>

```cpp
//没有meta
UFUNCTION(BlueprintCallable, Category="Actor")
static void TestFun3(TArray<AActor*>& OutActors);

void UTEST::TestFun3(TArray<AActor*>& OutActors)
{
//测试使用，实际开发别用哦
	AActor* Actor2 = nullptr;
	OutActors.Add(Actor2);
	OutActors.Add(Actor2);
	int Num = OutActors.Num();
	GEngine->AddOnScreenDebugMessage(1, 5.0f, FColor::White, FString::FromInt(Num), true, FVector2D(1, 1));
}
```

![](..%2Fassets%2Fyjsc.png)

<chatmessage avatar="../../assets/emoji/new3.png" :avatarWidth="50" alignLeft>
居然还是可以！看来系统自动帮我们初始化了一个指针数组。
</chatmessage>


结论：

1. const 限定优先级更高。
2. DynamicOutputParam 确实帮我们动态生成了一个对象，但即使不加也会主动尝试生成。


## 其他问题

### `getactorofclass`vs`Cast`

![](..%2Fassets%2Fcppcastvsgetacotrofclass.png)

## 参考链接
[https://forums.unrealengine.com/t/get-actor-of-class-vs-cast-to-class/597433](https://forums.unrealengine.com/t/get-actor-of-class-vs-cast-to-class/597433)

[DynamicOutputType & DynamicOutputParam](https://forums.unrealengine.com/t/dynamicoutputtype-dynamicoutputparam/336920)