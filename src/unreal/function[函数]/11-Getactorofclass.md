---
title: F11.GetActorOfClass
order : 11
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
DeterminesOutputType和DynamicOutputParam作用是啥？
</chatmessage>

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="50" alignLeft>

具体跳转到 [UPROPERTY宏标记](../function_函数_/5-UPROPERTY.html#DeterminesOutputType) 里面有具体的介绍

</chatmessage>

## 其他问题

### `getactorofclass`vs`Cast`

![](..%2Fassets%2Fcppcastvsgetacotrofclass.png)

## 参考链接
[https://forums.unrealengine.com/t/get-actor-of-class-vs-cast-to-class/597433](https://forums.unrealengine.com/t/get-actor-of-class-vs-cast-to-class/597433)

[DynamicOutputType & DynamicOutputParam](https://forums.unrealengine.com/t/dynamicoutputtype-dynamicoutputparam/336920)