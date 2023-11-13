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

1. **类型安全：**
   使用 `const` 常量提供了类型安全性，因为它们与变量一样有明确的数据类型。宏定义是简单的文本替换，没有类型检查，这可能导致不正确的类型使用。

2. **作用域限制：**
   `const` 常量具有作用域，而宏定义没有。宏定义是在预处理阶段进行文本替换，不受作用域的限制。`const` 常量可以更好地控制其可见性，仅在定义它的作用域内有效。

3. **调试友好：**
   使用 `const` 常量时，调试器能够提供更有意义的符号信息，因为它们是真正的标识符。宏定义只是简单的文本替换，可能导致调试信息不够清晰。

4. **避免副作用：**
   宏定义是在预处理阶段进行文本替换的，这可能导致一些副作用。`const` 常量是在编译期间创建的，没有类似宏定义的潜在问题。

5. **语法安全性：**
   `const` 常量通常与类型安全的语法一起使用，这有助于减少程序中的错误。宏定义是纯文本替换，容易引入错误，因为它没有语法结构。

6. **可读性：**
   `const` 常量有助于提高代码的可读性，因为它们是真正的变量，而不是简单的文本替换。在代码中使用有意义的常量名称可以使代码更易于理解。

### 实例 
<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40">
举个例子一周7天，写成代码为
</ChatMessage>

`# define day 7`

>此时打印他的sizeof(day) = 4

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
很好这没问题，如果我不小心多打了个点
</ChatMessage>

`# define day 7.`

>此时打印他的sizeof(day) = 8

<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
细节决定成败，如果你觉得这种错误无关紧要，你可以跳过。
</ChatMessage>


