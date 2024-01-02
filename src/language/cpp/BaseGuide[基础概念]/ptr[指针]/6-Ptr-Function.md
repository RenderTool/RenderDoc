---
title: c++函数指针
order : 6
category:
  - c++
---

<chatmessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40">
函数指针是什么？
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/new1.png" :avatarWidth="50" alignLeft>
函数指针是指向函数的指针变量。允许你使用指针来存储和调用函数的地址。
函数指针通常用于在运行时动态地选择要调用的函数，或者将函数作为参数传递给其他函数。
</chatmessage>

![C Primer Plus（第6版）中文版](..%2F..%2Fassets%2Ffunctionptr.png)

### 函数指针的语法

1. **声明函数指针：**
   ```cpp
   returnType (*pointerName)(parameterType1, parameterType2, ...);
   ```

   这里：
    - `returnType` 是函数返回类型。
    - `pointerName` 是函数指针的名称。
    - `parameterType1, parameterType2, ...` 是函数参数类型。

2. **初始化函数指针：**
   ```cpp
   pointerName = &functionName;
   // 或者简写为
   pointerName = functionName;
   ```

   `functionName` 是一个已经声明的函数，其返回类型和参数类型要与函数指针声明中的类型匹配。

3. **使用函数指针调用函数：**
   ```cpp
   returnType result = pointerName(argument1, argument2, ...);
   //或者
   returnType result =(*pointerName)(argument1, argument2, ...);
   ```

   这里的 `argument1, argument2, ...` 是传递给函数的实际参数。

4. **函数地址：**
   函数指针地址很简单，就是函数名`**去掉()**`

   ```cpp
   //获取函数地址
   int add(int a, int b);
   std::cout << "Address of add: " << add << std::endl;
   //Address of add: 00007FF65AC81474
   ```
5. **函数指针地址：**


### 函数指针例子

```cpp
#include <iostream>

// 函数原型
int add(int a, int b) {
    return a + b;
}

int main() {
    // 声明一个函数指针，指向接受两个int参数并返回int的函数
    int (*operation)(int, int);

    // 初始化函数指针，使其指向add函数
    operation = &add;

    // 使用函数指针调用add函数
    int result = operation(5, 3);
    std::cout << "Result of add: " << result << std::endl;

    return 0;
}
```