---
title: c++2.理解左右值和移动语义
order: 2
category:
  - c++
---
<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
如何理解C++ 中的左值（Lvalue）和右值（Rvalue）？
</chatmessage>

## 左值和右值

### 直觉判断
C++98已经出现，字面理解表达式等号左边的值为左值，右边的右值。

```cpp
int a = 1;//a是左值，1是右值
```
但是，如果按表达式等号左右标准的方式来判断会出现一些意外：

```cpp
int a = 1;//按照之前的判断标准a是左值，1是右值
int b = a;//按照之前的判断标准b是左值，a是右值
```
行1`a`是左值，在行2`a`又变成了右值。

### 标准判断

与表达式的值分类和赋值有关。

1. **左值 (Lvalue):**
    - **定义：** 左值是一个具有标识符的表达式，它表示一个对象或内存位置。左值可以出现在赋值语句的左边或右边。
    - **例子：** 变量、数组元素、结构体成员等都是左值。
    - **性质：** 左值具有持久性，它们在内存中有明确定义的位置。你可以取得左值的地址，对其进行引用，并且可以修改其值。

2. **右值 (Rvalue):**
    - **定义：** 右值是一个不具有标识符的表达式，它通常是临时的、即时计算的值。右值出现在赋值语句的右边。
    - **例子：** 字面常量、临时对象、表达式的计算结果等都是右值。
    - **性质：** 右值通常是短暂的，它们在计算后可能就会失去意义。你不能对右值取地址，也不能修改其值。

## 右值引用

在C++11及以后的标准中，有一个引入的重要概念叫做**右值引用**（Rvalue Reference），
通过 `&&` 表示。右值引用允许我们对右值进行引用，并通过移动语义实现高效的资源管理，例如在移动构造函数和移动赋值运算符中。

<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
换成人话来讲，右值引用就是延长临时对象的生命周期，从而减少对象复制，提高程序性能。
</chatmessage>

```cpp
#include <iostream>

Class C {
    public:
    C() {}
    C(const C& other) {}
    ~C(){}
     void show(){std::cout << "show" << std::endl;}
};
C make()
{
    C c1;
    return c1;
}

int main() {
    C c2 = make();//make()中默认构造，然后返回时出现一次复制构造，最后赋值给c2又发生复制构造。
    c.show();
}
```
<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
上面的代码中，如果没有进行编译器优化，会发生3次构造。make 中c1会被默认构造一次，return 
中c1复制构造产生临时对象，接着赋值给c2时又会使用复制构造。
</chatmessage>

<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft >
SO!我们可以使用右值引用来延长这个临时对象的生命周期，减少复制。
</chatmessage>

```cpp
#include <iostream>

Class C {
    public:
    C() {}
    C(const C& other) {}
    ~C(){}
    void show(){std::cout << "show" << std::endl;}
};
C make()
{
    C c1;
    return c1;
}

int main() {
C &&c2 = make();
c.show();
}
```

