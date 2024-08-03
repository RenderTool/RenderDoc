---
title: c++4.1 final
order: 4
category:
   - c++
---

<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">

在C++中，`final`关键字用于防止类或虚函数在派生类中被进一步继承或重写。

</chatmessage>

#### 1. 阻止类的继承

```cpp
class Base final {
    // 类内容
};

// 尝试继承Base会导致编译错误
class Derived : public Base {
    // 错误: Base类被标记为final，不能被继承
};
```

#### 2. 阻止虚函数的重写

```cpp
class Base {
public:
    virtual void foo() final {
        // 函数实现
    }
};

class Derived : public Base {
public:
    void foo() override {
        // 错误: foo函数在Base类中被标记为final，不能被重写
    }
};
```

### 优点

1. **确保类行为的稳定性**：
   - 使用`final`可以防止派生类改变基类的行为，从而确保基类的行为在整个继承链中保持一致。

2. **优化性能**：
   - 编译器可以对`final`类或`final`虚函数进行更好的优化，因为它知道这些类或函数不会在派生类中被修改。

3. **设计意图明确**：
   - 使用`final`可以明确表达设计意图，即某些类不应该被继承或某些函数不应该被重写。