---
title: c++7. 基于范围的 for 循环
order : 7
category:
  - c++
---

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">

基于范围的 `for` 循环（range-based for loop）是C++11引入的一种循环方式，旨在简化遍历容器（如数组、`std::vector`等）
或任何实现了 `begin()` 和 `end()` 方法的对象的代码。

</chatmessage>

### 基于范围的 `for` 循环语法

基于范围的 `for` 循环的基本语法如下：

```cpp
for (declaration : range) {
    // 循环体
}
```

- `declaration`：用于声明循环变量，它表示集合中的一个元素。
- `range`：表示要遍历的集合或范围。

### 示例

#### 遍历数组

```cpp
#include <iostream>

int main() {
    int arr[] = {1, 2, 3, 4, 5};

    // 基于范围的 for 循环
    for (int elem : arr) {
        std::cout << elem << " ";
    }

    std::cout << std::endl;
    return 0;
}
```

#### 遍历 `std::vector`

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> vec = {1, 2, 3, 4, 5};

    // 基于范围的 for 循环
    for (int elem : vec) {
        std::cout << elem << " ";
    }

    std::cout << std::endl;
    return 0;
}
```

### 与传统 `for` 循环的区别

#### 传统 `for` 循环

传统的 `for` 循环通常需要明确索引或迭代器，并显式控制循环的开始和结束。这使得代码更冗长和复杂。

##### 示例：传统 `for` 循环遍历数组

```cpp
#include <iostream>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);

    // 传统 for 循环
    for (int i = 0; i < size; ++i) {
        std::cout << arr[i] << " ";
    }

    std::cout << std::endl;
    return 0;
}
```

##### 示例：传统 `for` 循环遍历 `std::vector`

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> vec = {1, 2, 3, 4, 5};

    // 传统 for 循环
    for (std::vector<int>::iterator it = vec.begin(); it != vec.end(); ++it) {
        std::cout << *it << " ";
    }

    std::cout << std::endl;
    return 0;
}
```

#### 基于范围的 `for` 循环的优势

1. **简洁性**：代码更短更易读，不需要显式管理索引或迭代器。
2. **安全性**：减少了出错的可能性，如越界访问等问题。
3. **自动推导类型**：可以使用 `auto` 关键字，让编译器自动推导循环变量的类型。

##### 使用 `auto` 的示例

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> vec = {1, 2, 3, 4, 5};

    // 基于范围的 for 循环，使用 auto
    for (auto elem : vec) {
        std::cout << elem << " ";
    }

    std::cout << std::endl;
    return 0;
}
```

### 值捕获和引用捕获

在基于范围的 `for` 循环中，可以选择值捕获或引用捕获。

- **值捕获**：默认情况下，循环变量是值捕获，表示每次迭代都会创建集合元素的副本。

  ```cpp
  for (int elem : vec) {
      // elem 是 vec 中元素的副本
  }
  ```

- **引用捕获**：通过使用引用类型，可以直接操作集合中的元素。

  ```cpp
  for (int& elem : vec) {
      // elem 是 vec 中元素的引用
  }
  ```

  引用捕获适用于需要修改集合元素的情况。

  ```cpp
  for (int& elem : vec) {
      elem *= 2; // 将 vec 中的每个元素都乘以 2
  }
  ```

