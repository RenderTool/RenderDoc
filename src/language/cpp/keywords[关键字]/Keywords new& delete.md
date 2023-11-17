---
title: c++new和delete
category:
   - c++
tags:
   - new
   - delete
   - 内存四区
   - 关键字
---
<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
`new`和`delete`是两个C++关键字用于动态分配和释放内存。
</ChatMessage>

## 手动new和delete

<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
使用`new`操作符来创建对象会在堆（heap）上分配内存.<br>不使用`new`，直接声明对象会在栈（stack）上分配内存。
</ChatMessage>


 堆（Heap）操作： 使用new关键字来动态分配内存，创建对象，并返回指向该对象的指针。在堆上分配的内存需要手动释放，以避免内存泄漏。当您使用new创建对象时，对象的生命周期可以长于当前作用域。

```cpp
int* ptr = new int;  // 在堆上分配一个整数的内存空间
delete ptr;         // 释放内存，避免内存泄漏
```

## 隐藏式new和delete

栈（Stack）操作： 在栈上分配内存的对象会在其所在作用域结束时自动被销毁。栈上的内存管理由编译器自动处理，因此不需要显式释放内存。

```cpp
int num = 10;  // 在堆上分配一个整数的内存空间
```

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40">
Baba什么是栈!什么是堆！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
看来你还不清楚一些概念。
</ChatMessage>

| 存储区域                             | 描述                   |
|----------------------------------|----------------------|
| 栈 (Stack)                        | 用于存储局部变量和函数调用的内存区域   |
| 堆 (Heap)                         | 用于动态分配内存的区域          |
| 全局/静态存储区 (Global/Static Storage) | 用于存储全局变量和静态变量的内存区域   |
| 常量存储区 (Constant Storage)         | 用于存储常量数据的内存区域，如字符串常量 |


#### 全局存储区（也称为全局区或数据区）

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
主要用于存储全局变量和静态变量。这个区域可以进一步细分为以下几个部分：
</ChatMessage>

1. **全局初始化数据段（Initialized Data Segment）：** 包含已经初始化的全局变量和静态变量。这些变量在程序运行之前已经被赋予了初始值。

2. **全局未初始化数据段（Uninitialized Data Segment）：** 包含未经初始化的全局变量和静态变量。这些变量在程序运行之前没有被赋予初始值，它们会被系统初始化为默认的零值。

3. **常量数据段（Constant Data Segment）：** 存储常量数据，如字符串常量。这些数据是只读的，程序在运行时不能修改这个区域的内容。

4. **代码段（Code Segment）：** 存储程序的执行代码。这个部分是只读的，包含程序的机器指令。



