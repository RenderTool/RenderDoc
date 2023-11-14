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

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40">
什么是栈!什么是堆！看来你还不清楚一些概念。
</ChatMessage>
