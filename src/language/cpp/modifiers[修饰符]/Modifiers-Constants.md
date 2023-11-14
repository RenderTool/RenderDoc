---
title: c++const
order: 1
category:
   - c++
---
<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
为什么C++ 中推荐使用 const 常量？
</ChatMessage>


## `const` 修饰符用于声明常量（只读）。

1. **常量成员函数：** 当函数不修改对象的成员变量时，可以将函数声明为常量成员函数。这告诉编译器在函数体内部不允许修改对象的成员变量。这是为了确保调用常量对象上的这个函数时，不会修改对象的状态。

    ```cpp
    class MyClass {
    public:
        int getValue() const {
            return value;
        }

    private:
        int value;
    };
    ```

2. **参数为常量引用：** 当函数不需要修改传递给它的参数时，可以将参数声明为常量引用。这有助于提高性能，避免复制大型对象，并表达了函数不会修改传递给它的对象。

    ```cpp
    void printValue(const int& x) {
        std::cout << x << std::endl;
    }
    ```

3. **返回常量引用：** 当函数返回一个引用时，将其声明为常量引用有助于确保调用者无法修改函数返回的对象。

    ```cpp
    const int& getMax(const int& a, const int& b) {
        return (a > b) ? a : b;
    }
    ```

## `const` 常量来代替 #define 宏定义

> 使用 `const` 常量提供了类型安全性，因为它们与变量一样有明确的数据类型。宏定义是简单的文本替换，没有类型检查，这可能导致不正确的类型使用。

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40">
举个例子一周7天，写成代码为
</ChatMessage>

`# define day 7`

>此时打印他的sizeof(day) = 4

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
很好这没问题，如果我不小心多打了个点
</ChatMessage>

`# define day 7.`

>此时打印他的sizeof(day) = 8,也就是说我们无法保证数据安全。

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40">
不行啊，你这没难度！上点难度！
</ChatMessage>

## `const` 修饰指针

### 底层 const（Low-level const）：

#### 常量指针

底层 const 是指 const 修饰的是指针指向的值（指针所指向的内容），而不是指针本身。
这意味着指针可以指向不同的对象，但不能通过该指针修改所指向的对象的值。

```cpp
const int* ptr;      // 底层 const，ptr 指向的值是不可修改的
int const* ptr;      // 与上一行等价，指针指向的值是不可修改的
```

### 顶层 const（Top-level const）：顶层 const 是指 const 修饰的是变量本身，表示该变量本身是不可修改的。
这意味着变量的值不能被修改，但是如果该变量是指针，可以通过该指针修改所指向的对象的值。

#### 指针常量

```cpp
int* const ptr;      // 顶层 const，ptr 本身是不可修改的，但所指向的值可以修改
const int value;     // 顶层 const，value 本身是不可修改的
```

![](..%2Fassets%2Fptrconst.jpg)


