---
title: Swap|交换函数
order: 1
category:
- algorithm
---

### 交换函数


`swap` 是一个用于交换两个变量值的常见算法。在 C++ 中，可以通过以下两种方式实现 `swap` 函数：

1. **传统的交换方式：**

   ```cpp
   #include <iostream>

   template <typename T>
   void swap(T& a, T& b) {
       T temp = a;
       a = b;
       b = temp;
   }

   int main() {
       int x = 5, y = 10;
       std::cout << "Before swap: x = " << x << ", y = " << y << std::endl;

       swap(x, y);

       std::cout << "After swap: x = " << x << ", y = " << y << std::endl;

       return 0;
   }
   ```
<GifWithButton src="../assets/algorithmgif/swap.gif"/>

2. **使用 C++ 标准库中的 `std::swap`：**

   ```cpp
   #include <iostream>
   #include <algorithm>

   int main() {
       int x = 5, y = 10;
       std::cout << "Before swap: x = " << x << ", y = " << y << std::endl;

       std::swap(x, y);

       std::cout << "After swap: x = " << x << ", y = " << y << std::endl;

       return 0;
   }
   ```

`std::swap` 是 C++ 标准库提供的一个通用的交换函数，可以用于交换几乎所有的 C++ 类型。

