---
title: c++2.变量声明和定义
order : 2
category:
  - c++
---

<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
变量声明和定义
</chatmessage>

## 概念

>在C++中，变量声明和定义：

**变量声明（Variable Declaration）：** 变量声明是指通知编译器变量的存在，但不进行实际的分配。例如：

```cpp
extern int x;  //这是一个变量声明：（通过使用extern关键字，可以声明变量名而不定义它）
  ```
>需要注意的是extern 不能在main函数中，且需要在外部赋值才能在main函数中修改。

**变量定义（Variable Definition）：** 变量定义是指在程序中为变量分配实际的内存空间，同时也可以对其进行初始化。变量定义包含了变量的声明。例如：

```cpp
int x = 42;  // 这是一个变量定义
int y{};//变量定义，{}默认是0
int c = {42};//也是一个变量定义
```

在上述代码中：
1. `int x` 是变量声明和定义的组合，它告诉编译器分配一个整数类型的内存空间给变量 `x`，并将其初始化为 42。
2.  `int y` 使用了{}初始化了 `y`，默认不赋值是0，是现代C++的写法，[后续章节](./3-function%20brace%20initialization.html)中就有描述。
3.  `int c` 也使了{}初始化，并且赋值42。

<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
需要注意的是，变量声明和定义可以分开进行，但通常在实际编程中，它们往往是同时进行的。
</chatmessage>

## 总结
为变量分配地址和存储空间的称为定义，不分配地址的称为声明。


