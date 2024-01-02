---
title: c++10.Functor
order : 10
category:
  - c++
---

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
函数对象（Function Object），也称为仿函数（Functor），是C++中的一种特殊对象，它可以像函数一样被调用。
函数对象实际上是一个类的实例，该类重载了函数调用运算符 `operator()`。通过重载 `operator()`，
对象可以被当做函数来使用，提供了一种比普通函数更灵活的方式来实现函数行为。
</chatmessage>
      
```cpp
#include <iostream>

// 函数对象类
class MultiplyBy {
public:
    MultiplyBy(int factor) : factor(factor) {}

    // 重载 () 运算符
    int operator()(int x) const {
        return x * factor;
    }

private:
    int factor;
};

int main() {
    MultiplyBy multiplyBy2(2);

    // 使用函数对象
    int result = multiplyBy2(5);  // 相当于调用 multiplyBy2.operator()(5);

    std::cout << "Result: " << result << std::endl;

    return 0;
}
```