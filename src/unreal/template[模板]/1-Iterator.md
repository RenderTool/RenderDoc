---
title: TP1.迭代器[Iterator]
order : 1
category:
  - u++
---

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
迭代器通常是用于循环访问集合（例如数组、映射、集合等）中的元素的工具。UE提供了多种类型的迭代器，其中一些常见的包括：
</ChatMessage>

1. **TArray 迭代器：**
    - `TArray` 是UE中用于动态数组的模板类。它提供了多种迭代器，如 `TArray<T>::Iterator`，`TArray<T>::ConstIterator` 等。使用迭代器可以循环遍历数组中的元素。

   ```cpp
   TArray<int32> MyArray;
   for (auto It = MyArray.CreateIterator(); It; ++It)
   {
       int32& Element = *It;
       // 对 Element 进行操作
   }
   ```

2. **TMap 迭代器：**
    - `TMap` 是UE用于映射的模板类。它提供了多种迭代器，如 `TMap<KeyType, ValueType>::TIterator`，`TMap<KeyType, ValueType>::TConstIterator` 等。

   ```cpp
   TMap<FString, int32> MyMap;
   for (auto It = MyMap.CreateIterator(); It; ++It)
   {
       const FString& Key = It.Key();
       int32& Value = It.Value();
       // 对 Key 和 Value 进行操作
   }
   
   //传统写法
   TMap<FString, int32> MyMap;
   for TMap<FString, int32>::Iterator It(MyMap); It; ++It)
   {
       const FString& Key = It.Key();
       int32& Value = It.Value();
   }
   ```

3. **TSet 迭代器：**
    - `TSet` 是UE中用于集合的模板类。它提供了多种迭代器，如 `TSet<T>::TIterator`，`TSet<T>::TConstIterator` 等。

   ```cpp
   TSet<int32> MySet;
   for (auto It = MySet.CreateIterator(); It; ++It)
   {
       int32& Element = *It;
       // 对 Element 进行操作
   }
   ```

4. **TActorIterator：**
    - `TActorIterator` 是用于迭代关卡中的Actor的迭代器。

>写法：

```cpp
for (TObjectIterator<AActor> It; It; ++It)
{
    AActor* Actor = *It;
    
    // 在这里对 Actor 进行操作
}

```

>例子：

```cpp{13}
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
5. **TObjectIterator ：**
    - `TObjectIterator ` 不采用 UWorld 上下文。这意味着它将遍历内存中的几乎每个 UObject。

>写法

```cpp
for (TObjectIterator<UObject> It; It; ++It)
{
UObject* Object = *It;

    // 在这里对 Object 进行操作
    // 例如，检查对象类型，执行操作等
}
```