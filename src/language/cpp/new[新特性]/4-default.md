---
title: c++4.显示默认/删除
order : 4
category:
  - c++
---

<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft >
在 C++ 中，显式默认（explicit default）和显式删除（explicit delete）用于控制类的构造函数、拷贝构造函数、赋值运算符等成员函数的行为。
</chatmessage>

在 C++ 中，显式默认（explicit default）和显式删除（explicit delete）用于控制类的构造函数、拷贝构造函数、赋值运算符等成员函数的行为。下面是这两种用法的示例：

### 显式默认

`explicit default` 用于告诉编译器自动生成某些成员函数的默认实现。


```cpp
#include <iostream>

class MyClass {
public:
    // 显式默认构造函数
    MyClass() = default;

    // 显式默认拷贝构造函数
    MyClass(const MyClass&) = default;

    // 显式默认拷贝赋值运算符
    MyClass& operator=(const MyClass&) = default;

    // 显式默认析构函数
    ~MyClass() = default;

    void print() const {
        std::cout << "MyClass object\n";
    }
};

int main() {
    MyClass obj1;      // 使用显式默认构造函数
    MyClass obj2 = obj1; // 使用显式默认拷贝构造函数
    obj1 = obj2;      // 使用显式默认拷贝赋值运算符
    obj1.print();

    return 0;
}
```

示例中，`MyClass` 的构造函数、拷贝构造函数、拷贝赋值运算符和析构函数都被显式地指定为默认实现。这告诉编译器生成这些成员函数的默认版本。

### 显式删除

`explicit delete` 用于显式禁止某些成员函数的生成，使得这些函数不可用。

```cpp
#include <iostream>

class MyClass {
public:
    // 显式删除拷贝构造函数
    MyClass(const MyClass&) = delete;

    // 显式删除拷贝赋值运算符
    MyClass& operator=(const MyClass&) = delete;

    // 默认构造函数
    MyClass() = default;

    // 默认析构函数
    ~MyClass() = default;

    void print() const {
        std::cout << "MyClass object\n";
    }
};

int main() {
    MyClass obj1; // 使用默认构造函数

    // MyClass obj2 = obj1; // 错误: 拷贝构造函数被删除

    // MyClass obj3;
    // obj3 = obj1; // 错误: 拷贝赋值运算符被删除

    obj1.print();

    return 0;
}
```

示例中，`MyClass` 显式删除了拷贝构造函数和拷贝赋值运算符。这意味着对象不能被拷贝，尝试这样做将导致编译错误。
