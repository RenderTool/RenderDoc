---
title: c++inline[内联函数]
category:
   - C++关键字
tags:
   - inline
---
<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
内联函数（inline functions）是在C++中用于提高程序性能的一种手段。
</ChatMessage>

## 概念

>使用 inline 关键字，编译器会尝试在调用处直接展开函数的代码，而不是生成函数调用的指令。<br>
这可以减少函数调用的开销，特别适用于简单的、频繁调用的小函数。

## 实践

```cpp
#include <iostream>

// 定义内联函数
inline int add(int a, int b) {
    return a + b;
}

int main() {
    int x = 5;
    int y = 10;

    // 调用内联函数
    int result = add(x, y);

    std::cout << "Result: " << result << std::endl;

    return 0;
}
```