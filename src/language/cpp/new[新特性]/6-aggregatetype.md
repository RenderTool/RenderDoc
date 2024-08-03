---
title: c++6.聚合类型（aggregate type）
order : 6
category:
  - c++
---

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
什么是聚合类型？
</chatmessage>

<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft >
通常指具有简单数据结构且不包含复杂成员函数的类型。
聚合类型的特点使得它们易于初始化，并且在许多情况下可以直接使用大括号进行列表初始化。
</chatmessage>

### 聚合类型的定义

根据C++标准，一个类型如果满足以下所有条件，则称为聚合类型：

![](..%2Fassets%2Fcpp001.png)

### 示例

#### 简单结构体作为聚合类型

```cpp
struct MyStruct {
    int x;
    double y;
};

int main() {
    MyStruct s = {1, 2.0}; // 列表初始化
    return 0;
}
```

在这个示例中，`MyStruct` 是一个聚合类型，因为它满足所有的条件：没有构造函数、所有成员都是公共的、没有虚函数、没有基类。

#### 非聚合类型示例

```cpp
struct NonAggregate {
private:
    int x; // 私有成员

public:
    NonAggregate() : x(0) {} // 用户提供的构造函数
    virtual void foo() {} // 虚函数
};

struct Derived : NonAggregate { // 继承
    double y;
};
```

在这个示例中，`NonAggregate` 和 `Derived` 都不是聚合类型，因为它们不满足聚合类型的条件。

### 聚合类型的优点

1. **易于初始化**：
   - 聚合类型可以使用列表初始化（brace-enclosed initializer lists），使得对象的初始化更加简洁和直观。

   ```cpp
   struct Point {
       int x;
       int y;
   };

   Point p = {1, 2}; // 列表初始化
   ```

2. **高效**：
   - 由于聚合类型通常只包含数据成员，不包含复杂的构造函数、析构函数或虚函数，它们的创建和销毁成本较低。

3. **直观的数据结构**：
   - 聚合类型非常适合用来表示简单的数据结构，如配置参数、坐标点、复数等。

### 使用聚合类型的注意事项

尽管聚合类型简单高效，但也有一些使用注意事项：

1. **访问控制**：
   - 由于聚合类型的所有非静态数据成员必须是公共的，不能直接控制数据成员的访问权限，这在某些情况下可能会带来问题。

2. **扩展性**：
   - 聚合类型不支持继承和多态，因此在需要扩展功能时可能不适合。

3. **初始化顺序**：
   - 列表初始化的顺序必须与类型声明中数据成员的顺序一致，否则会导致编译错误或未定义行为。
