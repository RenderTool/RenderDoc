---
title: c++new和delete
category:
   - C++关键字
tags:
   - new
   - delete
---
<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
`new`和`delete`是两个C++关键字用于动态分配和释放内存。
</ChatMessage>

## 隐藏式new和delete

 早在一开始接触C++变量的时候就已经知道变量定义是在内存中开辟空间。
这里的内存中其实就是我们之前提过的4大区中的栈（stack）。而stack是系统自动管理的，所以不需要new和delete。

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40">
什么你还不清楚内存四区?巧了我也不会！你可以康康我之前的文章。
</ChatMessage>


1. **基本数据类型：** 对于基本数据类型（例如 `int`, `float`, `char`），它们的定义通常不涉及显式的 `new` 操作符。这些变量通常是在栈上分配的，而不是在堆上。例如：

    ```cpp
    int x = 42;  // 在栈上分配内存，不需要显式的 new
    ```

2. **自定义类型（类对象）：** 对于自定义类型，如果该类型的对象通过 `new` 关键字进行动态分配，则需要显式使用 `new`。例如：

    ```cpp
    class MyClass {
    public:
        MyClass() {
            // 构造函数
        }

        ~MyClass() {
            // 析构函数
        }
    };

    int main() {
        // 显式使用 new 进行动态分配
        MyClass* obj = new MyClass;

        // ...

        // 显式使用 delete 进行释放
        delete obj;

        return 0;
    }
    ```