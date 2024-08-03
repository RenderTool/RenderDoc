---
title: c++5.联合类型局限
order : 5
category:
  - c++
---

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
什么是联合类型？
</chatmessage>

<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft >
联合类型（union）是C++中的一种数据结构，它允许在同一存储空间内存储不同类型的数据，
但只能在一个时间点存储其中的一种类型。联合类型提供了一种节省内存的方式，但也有其局限性和使用注意事项。
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
和结构体很像啊！不过联合体更像是共享单车！
</chatmessage>


### 联合类型的定义与使用

```cpp
#include <iostream>

union MyUnion {
    int intValue;
    float floatValue;
    char charValue;
};

int main() {
    MyUnion u;
    u.intValue = 42;
    std::cout << "intValue: " << u.intValue << std::endl;

    u.floatValue = 3.14;
    std::cout << "floatValue: " << u.floatValue << std::endl;

    u.charValue = 'a';
    std::cout << "charValue: " << u.charValue << std::endl;

    // 注意：因为联合只能同时存储一种类型的值，所以只会打印最后一次赋值的内容
    std::cout << "intValue: " << u.intValue << std::endl; // 不再有效
    std::cout << "floatValue: " << u.floatValue << std::endl; // 不再有效

    return 0;
}
```

### 联合类型的局限性

1. **同一时间只能存储一种类型的数据**：
    - 由于联合类型共享相同的存储空间，因此在给联合类型的某个成员赋值后，之前存储在该联合中的其他成员的数据将被覆盖。

2. **类型安全问题**：
    - 联合类型没有内置的机制来跟踪当前存储的数据类型，这可能会导致访问错误类型的数据，从而引发未定义行为。

3. **复杂数据类型的限制**：
    - 联合类型的成员不能是包含非平凡析构函数、非平凡拷贝构造函数或非平凡拷贝赋值运算符的复杂数据类型，例如C++标准库中的某些容器类。
    - C++11之前，联合类型的成员不能是具有构造函数、析构函数或拷贝赋值运算符的类类型。C++11引入了受限联合类型（restricted unions），允许成员具有非平凡的默认构造函数，但依然不支持非平凡的析构函数或拷贝赋值运算符。

4. **对齐和填充问题**：
    - 由于不同数据类型的对齐要求，联合类型可能会导致内存填充，从而无法充分节省内存。

### 现代C++中的改进

在C++11及之后的标准中（C++ 17），引入了一些特性来增强联合类型的功能：

1. **匿名联合类型**：
    - 匿名联合类型可以直接在类中定义，不需要显式命名，从而更简洁。

   ```cpp
   struct MyStruct {
       union {
           int intValue;
           float floatValue;
           char charValue;
       };
   };
   ```

2. **类型安全联合类型**：
    - 使用 `std::variant` 替代传统的联合类型来获得类型安全的多态存储。

   ```cpp
   #include <variant>
   #include <iostream>

   int main() {
       std::variant<int, float, char> v;
       v = 42;
       std::cout << "int value: " << std::get<int>(v) << std::endl;

       v = 3.14f;
       std::cout << "float value: " << std::get<float>(v) << std::endl;

       v = 'a';
       std::cout << "char value: " << std::get<char>(v) << std::endl;

       return 0;
   }
   ```

`std::variant` 提供了类型安全的接口和更多的功能，比如类型访问和异常处理，从而避免了传统联合类型的许多局限性。


## 平凡类型和非平凡类型

平凡类型（trivial type）和非平凡类型（non-trivial type）。这些概念主要涉及对象的创建、销毁、复制和赋值的复杂性。

### 平凡类型（Trivial Type）

平凡类型是指那些具有简单特性并且可以直接通过二进制复制进行创建、销毁、复制和赋值的类型。具体来说，一个类型如果满足以下条件，则称为平凡类型：

1. **平凡默认构造函数**：
   - 默认构造函数不执行任何操作，并且可以通过简单的内存分配完成对象的初始化。

2. **平凡拷贝构造函数**：
   - 拷贝构造函数只执行简单的内存复制，不涉及任何复杂操作。

3. **平凡拷贝赋值运算符**：
   - 拷贝赋值运算符只执行简单的内存复制，不涉及任何复杂操作。

4. **平凡析构函数**：
   - 析构函数

