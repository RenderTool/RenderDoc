---
title: F9.Iterator|迭代器
order : 9
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
迭代器通常是用于循环访问集合（例如数组、映射、集合等）中的元素的工具。UE提供了多种类型的迭代器，其中一些常见的包括：
</chatmessage>

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
6**TFieldIterator ：**

> 遍历 类 的所有属性，查找结构体/结构体数组的属性

```cpp
	for (TFieldIterator<FProperty> PropIt(DataFragmentClass); PropIt; ++PropIt)
	{
		FProperty* FragProperty = *PropIt;
		if (!FragProperty)
			continue;

		// **匹配数组类型**
		if (FArrayProperty* ArrayProperty = CastField<FArrayProperty>(FragProperty))
		{
			FStructProperty* ElementProperty = CastField<FStructProperty>(ArrayProperty->Inner);
			if (!ElementProperty) continue;
			if (ElementProperty->Struct == RowStruct) // 确保数组元素类型匹配
			{
				void* ArrayAddr = ArrayProperty->ContainerPtrToValuePtr<void>(Fragment);
				FScriptArrayHelper ArrayHelper(ArrayProperty, ArrayAddr);

				// 遍历 RowNames，把所有匹配的行加入数组
				for (const FName& RowName : RowNames)
				{
					const uint8* RowData = DataTable->FindRowUnchecked(RowName);
					if (RowData)
					{
						int32 NewIndex = ArrayHelper.AddValue();
						void* NewElement = ArrayHelper.GetRawPtr(NewIndex);
						RowStruct->CopyScriptStruct(NewElement, RowData);
						UE_LOG(LogTemp, Log, TEXT("Added Row %s to array"), *RowName.ToString());
					}
				}
			}
		}
		// **匹配单个结构体**
		else if (FStructProperty* StructProperty = CastField<FStructProperty>(FragProperty))
		{
			if (StructProperty->Struct == RowStruct)
			{
				void* StructDest = StructProperty->ContainerPtrToValuePtr<void>(Fragment);
				if (RowNames.Num() > 0)
				{
					const FName& FirstRowName = *RowNames.CreateConstIterator();
					const uint8* RowData = DataTable->FindRowUnchecked(FirstRowName);
					if (RowData)
					{
						RowStruct->CopyScriptStruct(StructDest, RowData);
						UE_LOG(LogTemp, Log, TEXT("Filled DataFragment with single Row: %s"), *FirstRowName.ToString());
					}
				}
			}
		}
	}
```

