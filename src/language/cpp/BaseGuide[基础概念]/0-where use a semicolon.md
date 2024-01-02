---
title: c++0.什么地方用";"
order : 1
category:
  - c++
---
<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
Baba！什么地方用";"
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
在C++中，分号（;）是语句结束的标志。在几乎所有的C++语句中，都需要使用分号来表示语句的结束。以下是一些常见的情况：
</chatmessage>


1. **表达式结束：** 在赋值、函数调用、算术运算等表达式结束时，需要使用分号。例如：
   ```cpp
   int a = 5; // 赋值语句
   cout << "Hello, World!" << endl; // 函数调用语句
   x = y + z; // 算术表达式
   ```

2. **控制结构：** 在条件语句（if、else等）、循环语句（for、while等）以及其他控制结构的主体部分结束时，需要使用分号。例如：
   ```cpp
   if (x > 0) {
       // 代码块
       cout << "x是正数" << endl;
   } else {
       // 代码块
       cout << "x不是正数" << endl;
   }

   for (int i = 0; i < 5; ++i) {
       // 循环体
       cout << i << " ";
   }
   ```

3. **类定义：** 在类的定义中，每个成员函数的实现都需要用分号结束。例如：
   ```cpp
   class MyClass {
   public:
       void myFunction() {
           // 函数体
           cout << "Hello from MyClass!" << endl;
       }

       int myVariable;
   }; // 注意类定义结束时有分号
   ```
4. **结构体：** 在类的定义中，每个成员函数的实现都需要用分号结束。例如：
   ```cpp
   struct MyClass {
      int myVariable{};
       void myFunction() {
           // 函数体
           cout << "Hello from MyClass!" << endl;
       }
   }; // 注意结构体定义结束时有分号
   ```
### 扩展链接
[C++标点](https://zh.cppreference.com/w/cpp/language/punctuators)