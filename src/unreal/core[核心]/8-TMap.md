---
title: core8.TMap|映射表
order: 8
category:
  - u++
---

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
TMap是UE提供的高性能的关联容器，用于存储键值对的模板容器，其中键和值可以是任何类型。类似于C++标准库中的 std::map 或 std::unordered_map。
</ChatMessage>

### 定义

```cpp
template <typename KeyType, typename ValueType, typename KeyFuncs = DefaultKeyFuncs<KeyType>, typename Allocator = FDefaultAllocator>
class TMap
{
    // ...
};
```

- `KeyType`: 键的数据类型。
- `ValueType`: 值的数据类型。
- `KeyFuncs`: 用于处理键的函数对象，默认为 `DefaultKeyFuncs`，提供默认的键比较和哈希函数。
- `Allocator`: 内存分配器，默认为 `FDefaultAllocator`，负责分配和释放内存。

### 成员函数和操作

`TMap` 提供了一系列成员函数和操作，用于插入、访问、删除和搜索键值对。一些常见的操作包括：

- `Add`: 向映射中添加键值对。
- `Remove`: 从映射中删除指定键的键值对。
- `Find`: 查找映射中是否包含指定键。
- `Num`: 获取映射中键值对的数量。
- `Empty`: 检查映射是否为空。
- `Empty`: 清空映射，删除所有键值对。
- `Key`, `Value`: 通过迭代器访问键或值。

### 示例

```cpp
// 创建一个TMap实例
TMap<int32, FString> MyMap;

// 添加键值对
MyMap.Add(1, TEXT("One"));
MyMap.Add(2, TEXT("Two"));
MyMap.Add(3, TEXT("Three"));

// 获取键值对的数量
int32 NumKeyValuePairs = MyMap.Num();

// 检查是否包含指定键
if (MyMap.Contains(2))
{
    // 根据键获取值
    FString Value = MyMap[2];

    // 通过迭代器遍历键值对
    for (const TPair<int32, FString>& Pair : MyMap)
    {
        int32 Key = Pair.Key;
        FString Value = Pair.Value;

        // 处理键值对...
    }
}
```

>在C++中，范围（range-based）for循环的特性是在遍历时自动解包容器中的元素，而不需要显式使用迭代器。

```cpp

const TMap<TSubclassOf<UUserWidget>, FGameplayTag>& WidgetMap

for (const auto& WidgetEntry : WidgetMap)//这里推导出来的是TTuple
	{
		TSubclassOf<UUserWidget> WidgetClass = WidgetEntry.Key;
		FGameplayTag ContextTag = WidgetEntry.Value;

		if (WidgetClass)
		{
			ExtensionSubsystem->RegisterExtensionAsWidgetForContext(ContextTag, LocalPlayer, WidgetClass, -1);
		}
}
```

>迭代器访问

```cpp
for (auto It = WidgetMap.CreateIterator(); It; ++It)
{
    TSubclassOf<UUserWidget> WidgetClass = It.Key();
    FGameplayTag ContextTag = It.Value();

    if (WidgetClass)
    {
        ExtensionSubsystem->RegisterExtensionAsWidgetForContext(ContextTag, LocalPlayer, WidgetClass, -1);
    }
}
```

### 注意事项

- `TMap` 的键和值可以是任何可以比较和哈希的类型，但通常建议使用基本数据类型或支持比较和哈希的自定义类型。
- `TMap`，不需要手动释放内存，它会在合适的时机自动完成。
- 在性能要求较高的情况下，可以根据具体需求选择合适的 `KeyFuncs` 和 `Allocator`。
- 考虑映射的生命周期和内存管理，以避免内存泄漏或非法访问。
