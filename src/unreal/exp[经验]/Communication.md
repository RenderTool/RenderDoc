---
title: U++UE内部通信指南
order : 1
category:
  - u++
---

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
UE软件内通信几种方法
</ChatMessage>

## 命令台调用|CommandLineCall

>**语法：CE+函数名+空格+参数**

![看图没啥好多说的](..%2Fassets%2Flevelfunction.gif)

>**语法：KE+类名+函数名**

![看图没啥好多说的](..%2Fassets%2Fkeclassfunction.gif)

## 迭代查找|Iterative search

<ChatMessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="40">
也有人有人管他叫直接通信，但他本质就是迭代查找
</ChatMessage>

### 蓝图

1. 新建两个actor放入场景。

![](..%2Fassets%2F2actor.png)

2. actor1中新建test001函数,actor2中新建test002函数

![](..%2Fassets%2Ftestfunction.png)

3.actor1中使用`getactorofclass`节点获取到actor2，并调用test2函数

![](..%2Fassets%2Fdyonghans.png)


![具体操作动图](..%2Fassets%2Frefencecom.gif)

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
细心的你应该已经发现了！关卡中必须都存在要通信的对象，不然会报错。
</ChatMessage>

### c++

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
你以为这就结束了？好戏才刚刚开始！几个问题:<br>
1. 为什么要放在同一个关卡？<br>
2. 原理是什么？<br>
</ChatMessage>

<hr>

<ChatMessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
先来康康  <span style="color: #c0392b;">getactorofclass</span>节点实现
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

所以`UGameplayStatics::GetActorOfClass` 可以直接调用，而不需要创建 `UGameplayStatics` 类的实例。

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

## 委托|Delegate

## 接口|Interface

## 类型强转|Cast

## 参考链接
https://forums.unrealengine.com/t/get-actor-of-class-vs-cast-to-class/597433