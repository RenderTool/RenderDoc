---
title: c++11.Map/MutiMap容器
order : 11
category:
  - c++
---

### Map|MutiMap

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

`std::map` 是 C++ 标准库中的关联容器，它提供了`key`键-`value`值对的存储和检索功能。每个键-值对在 `std::map` 中被称为一个元素。关联容器的一个重要特性是，它们按照键的顺序进行有序存储。

`MutiMap`可以有重复的`key`值

</chatmessage>


### 定义：

```cpp
#include <map>

std::map<KeyType, ValueType> myMap;
```

- `KeyType` 是键的类型，`ValueType` 是值的类型。

### 主要操作：

1. **插入元素：** 使用 `insert` 函数或数组下标运算符 `[]` 插入元素。

    ```cpp
    myMap.insert(std::make_pair(key, value));
    // 或者
    myMap[key] = value;
    ```

2. **访问元素：** 使用键访问元素。

    ```cpp
    ValueType value = myMap[key];
    ```

3. **删除元素：** 使用 `erase` 函数删除指定键的元素。

    ```cpp
    myMap.erase(key);
    ```

4. **查找元素：** 使用 `find` 函数查找指定键的元素。

    ```cpp
    auto it = myMap.find(key);
    if (it != myMap.end()) {
        // 元素找到
    }
    ```

5. **迭代：** 使用迭代器对 `std::map` 中的元素进行遍历。

    ```cpp
    for (auto it = myMap.begin(); it != myMap.end(); ++it) {
        KeyType key = it->first;
        ValueType value = it->second;
        // 处理键值对
    }
    ```

### 与 `std::pair` 的联系：

`std::pair` 通常用于表示键-值对，并且在 `std::map` 中的元素实际上就是 `std::pair` 类型的对象。每个元素都是一个由键和值组成的有序对。


<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

例如，使用 `std::pair` 来插入元素到 `std::map`：

</chatmessage>

```cpp
#include <iostream>
#include <map>

int main() {
    std::map<int, std::string> myMap;

    // 使用 std::pair 插入元素
    myMap.insert(std::make_pair(1, "One"));
    myMap.insert(std::pair<int, std::string>(2, "Two"));

    // 访问元素
    std::cout << "Value corresponding to key 1: " << myMap[1] << std::endl;

    return 0;
}
```