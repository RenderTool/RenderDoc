---
title: FUN2.GetActorOfClass
order : 2
category:
  - u++
---


## getactorofclass

### 节点介绍

<ChatMessage avatar="../../assets/emoji/new1.png" :avatarWidth="50" alignLeft>
是一个在世界中查找指定类第一个Actor的节点
</ChatMessage>

![getactorofclass](..%2Fassets%2Fgetactorofclassnode.png)

### 节点实践

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
新建两个要`通信`的actor放入场景。
</ChatMessage>

![](..%2Fassets%2F2actor.png)

<ChatMessage avatar="../../assets/emoji/new9.png" :avatarWidth="40" alignLeft>
actor1中新建test001函数<br>
actor2中新建test002函数
</ChatMessage>

![](..%2Fassets%2Ftestfunction.png)

<ChatMessage avatar="../../assets/emoji/new4.png" :avatarWidth="40" alignLeft>

actor1中使用`getactorofclass`节点获取到actor2，并调用actor2中的test2函数

</ChatMessage>


![](..%2Fassets%2Fdyonghans.png)

#### 完整动图

<GifWithButton src="../../assets/unrealgif/refencecom.gif"/>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
为什么不放在一个关卡会报错。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
你把他理解成在地球上找人,如果人不在地球上又怎么找得到呢?
</ChatMessage>

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


<ChatMessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>

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
由此可见，getactorofclass的本质就是利用迭代器在世界中迭代查找指定类的第一个Actor。
关于迭代器，请参考我的Template[模板]
</ChatMessage>

## 问题

### `getactorofclass`vs`Cast`

![](..%2Fassets%2Fcppcastvsgetacotrofclass.png)

## 参考链接
[https://forums.unrealengine.com/t/get-actor-of-class-vs-cast-to-class/597433](https://forums.unrealengine.com/t/get-actor-of-class-vs-cast-to-class/597433)