---
title: c++10.Pair容器
order : 10
category:
  - c++
---

### Pair

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

`std::pair` 是 C++ 标准库中的一个模板类，用于存储两个元素的有序对。每个有序对都包含两个公共成员：`first` 和 `second`，分别用于表示有序对的第一个和第二个元素。

</ChatMessage>

### 定义：

```cpp
#include <utility>

std::pair<T1, T2> myPair;
```

- `T1` 和 `T2` 是有序对中元素的类型。

### 主要操作：

1. **构造函数：** `std::pair` 提供多个构造函数，可以使用不同的方式创建有序对。

    ```cpp
    std::pair<int, double> myPair1(1, 3.14);
    std::pair<char, std::string> myPair2('A', "Hello");
    ```

2. **成员访问：** 通过 `first` 和 `second` 成员访问有序对中的元素。

    ```cpp
    int firstElement = myPair1.first;
    double secondElement = myPair1.second;
    ```

3. **比较运算符：** `std::pair` 提供了比较运算符，允许对有序对进行比较。

    ```cpp
    std::pair<int, double> pair1(1, 3.14);
    std::pair<int, double> pair2(2, 3.14);

    if (pair1 < pair2) {
        // pair1 小于 pair2
    }
    ```

### 示例：

```cpp
#include <iostream>
#include <utility>

int main() {
    // 创建有序对
    std::pair<int, double> myPair(1, 3.14);

    // 访问成员
    int firstElement = myPair.first;
    double secondElement = myPair.second;

    // 输出成员
    std::cout << "First: " << firstElement << ", Second: " << secondElement << std::endl;

    return 0;
}
```