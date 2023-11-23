---
title: U++9.UE迭代器TODO
order : 9
category:
  - u++
---

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
迭代器通常是用于循环访问集合（例如数组、映射、集合等）中的元素的工具。UE4提供了多种类型的迭代器，其中一些常见的包括：
</ChatMessage>

1. **TArray 迭代器：**
    - `TArray` 是UE4中用于动态数组的模板类。它提供了多种迭代器，如 `TArray<T>::Iterator`，`TArray<T>::ConstIterator` 等。使用迭代器可以循环遍历数组中的元素。

   ```cpp
   TArray<int32> MyArray;
   for (auto It = MyArray.CreateIterator(); It; ++It)
   {
       int32& Element = *It;
       // 对 Element 进行操作
   }
   ```

2. **TMap 迭代器：**
    - `TMap` 是UE4中用于映射的模板类。它提供了多种迭代器，如 `TMap<KeyType, ValueType>::TIterator`，`TMap<KeyType, ValueType>::TConstIterator` 等。

   ```cpp
   TMap<FString, int32> MyMap;
   for (auto It = MyMap.CreateIterator(); It; ++It)
   {
       const FString& Key = It.Key();
       int32& Value = It.Value();
       // 对 Key 和 Value 进行操作
   }
   ```

3. **TSet 迭代器：**
    - `TSet` 是UE4中用于集合的模板类。它提供了多种迭代器，如 `TSet<T>::TIterator`，`TSet<T>::TConstIterator` 等。

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

   ```cpp
   for (TActorIterator<AMyActor> It(GetWorld()); It; ++It)
   {
       AMyActor* Actor = *It;
       // 对 Actor 进行操作
   }
   ```