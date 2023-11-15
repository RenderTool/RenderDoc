---
title: c++函数声明和定义
category:
  - c++
---
<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
函数声明和定义
</ChatMessage>

## 概念

>在C++中，函数声明是为了告诉编译器函数的存在、名称和参数列表，而函数定义则提供了函数的具体实现。


**函数声明（Function Declaration）:**

```cpp
// 函数声明，告诉编译器这个函数存在，但并没有提供具体实现
int add(int a, int b);
```

在这个例子中，`add` 函数被声明，但没有提供具体的实现。这样的声明通常放在头文件中，以便在其他文件中使用该函数。

**函数定义（Function Definition）:**

```cpp
// 函数定义，提供了函数的具体实现
int add(int a, int b) {
    return a + b;
}
```

## 实践

### 头文件和源文件分离

```cpp
// 头文件中的函数声明
// myfunctions.h
#ifndef MYFUNCTIONS_H
#define MYFUNCTIONS_H

int add(int a, int b);

#endif  // MYFUNCTIONS_H
```

```cpp
// 源文件中的函数定义
// myfunctions.cpp
#include "myfunctions.h"

int add(int a, int b) {
    return a + b;
}
```
### 合并

```cpp
// 主程序文件中的使用函数
// main.cpp
#include "myfunctions.h"
#include <iostream>

int main() {
    // 使用声明的函数
    int result = add(3, 4);

    // 输出结果
    std::cout << "Result: " << result << std::endl;

    return 0;
}
```

## 总结

带有{ }的就是定义，不带的就是声明。

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
这也是IDE中为什么点击函数声明时会弹窗前往定义。
</ChatMessage>

![](..%2Fassets%2Ftodefefine.png)