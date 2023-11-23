---
title: c++3.new|delete|malloc|free
order: 3
category:
   - c++
---
<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
`new`和`delete``malloc`和`free`区别
</ChatMessage>

### `new` 和 `delete`（C++ 中使用）

1. **`new`：**
    - `new` 是 C++ 中的关键字，用于在堆上动态分配内存，并返回分配的内存的地址。`new` 还会调用对象的构造函数，用于在分配的内存中创建对象。

      ```cpp
      int* myInt = new int;  // 动态分配一个 int
      MyClass* myObject = new MyClass();  // 动态分配一个 MyClass 对象
      ```

2. **`delete`：**
    - `delete` 用于释放使用 `new` 分配的内存，同时调用对象的析构函数以进行清理。如果忘记使用 `delete`，可能导致内存泄漏。

      ```cpp
      delete myInt;      // 释放动态分配的 int
      delete myObject;   // 释放动态分配的 MyClass 对象
      ```

### `malloc` 和 `free`（C 中使用）

1. **`malloc`：**
    - `malloc` 是 C 语言中的函数，用于在堆上分配一块指定大小的内存。它返回一个 `void*` 指针，需要进行类型转换。`malloc` 不会调用对象的构造函数。

      ```c
      int* myInt = (int*)malloc(sizeof(int));  // 动态分配一个 int
      ```

2. **`free`：**
    - `free` 用于释放使用 `malloc` 分配的内存。与 `delete` 不同，`free` 不会调用对象的析构函数。如果忘记使用 `free`，可能导致内存泄漏。

      ```c
      free(myInt);  // 释放动态分配的 int
      ```

### 区别和注意事项：

- **语法：** `new` 和 `delete` 是 C++ 中的关键字，而 `malloc` 和 `free` 是 C 语言中的函数。
- **类型安全：** `new` 和 `delete` 是类型安全的，它们会自动处理对象的构造和析构。`malloc` 和 `free` 不是类型安全的，需要手动进行类型转换，而且不会调用对象的构造和析构。
- **操作对象：** `new` 和 `delete` 通常用于动态分配和释放对象，而 `malloc` 和 `free` 可以用于分配和释放任意大小的内存块。
- **内存泄漏：** 在使用 `malloc` 和 `free` 时，需要手动管理内存，容易导致忘记释放，从而产生内存泄漏。使用 `new` 和 `delete` 可以更容易地避免这类问题。

在 C++ 中，通常建议使用 `new` 和 `delete` 进行动态内存管理，因为它们更符合 C++ 对象模型，并提供了更多的类型安全和便利性。

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40">
Baba什么是栈!什么是堆！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
看来你还不清楚一些概念。
</ChatMessage>

| 区域                               | 描述                                                           |
|----------------------------------|--------------------------------------------------------------|
| 代码区 (Code)                       | 存放函数体的二进制代码，只读，由操作系统管理。                                      |
| 全局/静态存储区 (Global/Static Storage) | 存放全局变量、静态变量和常量，在程序启动时分配，程序结束时释放。                             |
| 栈区 (Stack)                       | 存放函数的局部变量、函数参数值等，由编译器自动分配释放，与函数调用相关。                         |
| 堆区 (Heap)                        | 程序员可以通过 new 和 delete（或 malloc 和 free）用于动态内存管理，需要手动管理内存的生命周期。 |




