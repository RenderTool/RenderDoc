---
title: c++7.const|static|#defined
order: 7
category:
   - c++
---
### 前置知识

| 区域                               | 描述                                                           |
|----------------------------------|--------------------------------------------------------------|
| 代码区 (Code)                       | 存放函数体的二进制代码，只读，由操作系统管理。                                      |
| 全局/静态存储区 (Global/Static Storage) | 存放全局变量、静态变量和常量，在程序启动时分配，程序结束时释放。                             |
| 栈区 (Stack)                       | 存放函数的局部变量、函数参数值等，由编译器自动分配释放，与函数调用相关。                         |
| 堆区 (Heap)                        | 程序员可以通过 new 和 delete（或 malloc 和 free）用于动态内存管理，需要手动管理内存的生命周期。 |


## `const` |`static`|`#defined`

<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">

在 C++ 中，`const`、`static` 和 `#define` 可以被视为修饰符或者说是关键字，因为它们都用于修改标识符（变量、函数、宏等）的属性或行为。

</chatmessage>

![[csdn](https://blog.csdn.net/m0_59738220/article/details/123466360?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-123466360-blog-80678967.235%5Ev38%5Epc_relevant_anti_t3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-123466360-blog-80678967.235%5Ev38%5Epc_relevant_anti_t3&utm_relevant_index=2)](..%2Fassets%2Fconststatic.png)

1. **`const` 修饰符：** 
   - `const` 用于定义常量，表示标识符的值在程序执行期间不能被修改。
   - `const` 修饰的变量在内存中的存储位置取决于它的声明位置和作用域。
     - 如果是在全局范围声明，它将存储在全局数据区。
     - 如果是在局部范围声明（函数内部），它通常存储在栈上。

   ```cpp
   // 在全局范围声明的 const
   const int globalConstVar = 42;  // 存储在全局数据区

   void myFunction() {
       // 在局部范围声明的 const
       const int localConstVar = 10;  // 通常存储在栈上
   }
   ```

2. **`static` 修饰符：**
   - `static` 用于定义静态变量、静态成员变量、静态成员函数，以及在文件作用域内的全局变量。它限定了标识符的生命周期、作用域和链接属性。
     - `static` 修饰的全局变量存储在全局数据区。
     - `static` 修饰的局部变量（函数内的静态变量）在程序启动时分配内存，通常也存储在全局数据区。
     - `static` 修饰的静态成员变量和静态成员函数属于类的范畴，存储在全局数据区。

   ```cpp
   // static 修饰的全局变量
   static int globalStaticVar;  // 存储在全局数据区

   void myFunction() {
       // static 修饰的局部变量
       static int localStaticVar;  // 在程序启动时分配内存，存储在全局数据区
   }

   class MyClass {
   public:
       // static 修饰的静态成员变量
       static int myStaticMember;  // 存储在全局数据区

       // static 修饰的静态成员函数
       static void myStaticFunction() {
           // 实现
       }
   };
   ```

3. **`#define` 预处理指令：**
   - `#define` 不是在编译时进行类型检查的修饰符，而是一个预处理指令，用于定义宏。
   - `#define` 定义的宏在预处理阶段进行文本替换，不直接占用存储空间，因此没有在全局区、堆、栈或代码区分配内存。它仅仅是在编译前进行简单的文本替换。

   ```cpp
   #define MAX_SIZE 100
   ```

<hr>

<chatmessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
问题来了,static const 变量 阁下如何应对?
</chatmessage>

<chatmessage avatar="../../../assets/emoji/kclr.png" :avatarWidth="40" >

难得让我装个B!`static const` 变量在内存中的存储位置通常是在全局数据区。这是因为：

</chatmessage>


1. **`static`：** 使用 `static` 关键字使得变量具有静态生命周期，即在程序运行期间始终存在，而不是在函数调用结束后被销毁。

2. **`const`：** 使用 `const` 关键字表示该变量是常量，其值不能被修改。常量通常被分配在全局数据区，以便在程序的整个生命周期内保持不变。

因此，`static const` 变量的内存分配通常在全局数据区。这种变量在程序启动时被初始化，而且在整个程序运行期间都不会被修改，所以它的值是常量且具有静态生命周期。

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这也是C++的三种存储特性：(栈存储)自动存储、(堆new|delete malloc|free)动态存储、(static)静态存储。
</chatmessage>

>摘自 C++ Primer Plus 第6版 p247
自动变量通常存储在栈中。
这意味着执行代码块时，其中的变量将依次加入到栈中，而在离开代码块时，将按相反的顺序释放这些变量，这被称为后进先出（LIFO）。
因此，在程序执行过程中，栈将不断地增大和缩小。
