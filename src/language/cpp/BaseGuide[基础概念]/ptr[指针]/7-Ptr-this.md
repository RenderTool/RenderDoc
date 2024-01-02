---
title: c++this指针
order : 7
category:
  - c++
---

<chatmessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40">
this指针是什么？
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/new1.png" :avatarWidth="50" alignLeft>
this 指针是一个指向当前对象的指针，它是作为类的非静态成员函数的隐含参数而存在的。
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40">
this指针可以理解成第一人称我嘛？
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/new1.png" :avatarWidth="50" alignLeft>
可以将 this 视为当前对象的“自引用指针”。
通过 this 指针，你可以在成员函数中访问对象的成员变量和其他成员函数，即使它们和局部变量或参数有相同的名称。
</chatmessage>

1. **区分同名变量：** 如果成员函数中存在与成员变量同名的局部变量或参数，那么在没有 `this` 指针的情况下，无法直接访问成员变量。`this` 指针允许明确指定使用对象的成员。

```cpp
// 使用this指针
class MyClassWithThis {
private:
    int value;

public:
    void setValue(int value) {
        // 使用this指针区分成员变量和局部变量
        this->value = value;
    }
};
```

2. **函数内访问成员：** 没有 `this` 指针，成员函数无法直接访问对象的成员变量和成员函数，
除非它们与局部变量或参数同名。
   
```cpp
// 使用this指针
class MyClassWithThis {
private:
    int value;

public:
    void setValue(int value) {
        // 使用this指针访问成员变量
        this->value = value;
    }

    int getValue() {
        // 使用this指针访问成员函数
        return this->value;
};
```

3. **在函数内传递当前对象：** 在某些情况下，需要将当前对象作为参数传递给其他函数。
`this` 指针允许在成员函数内部方便地传递当前对象的引用。

```cpp
// 使用this指针
class MyClassWithThis {
private:
    int value;

public:
    void setValue(int value) {
        // 使用this指针访问成员变量
        this->value = value;
    }

    int getValue() {
        // 使用this指针访问成员函数
        return this->value;
};
```

总的来说，`this` 指针提供了一种在成员函数内部引用当前对象的方式，使得在面向对象的编程中更加灵活和清晰。
它有助于避免命名冲突，让代码更加可读、易于理解，并提供了对当前对象的直接访问。


<chatmessage avatar="../../../../assets/emoji/new2.png" :avatarWidth="60">
另外，什么是非静态成员函数？
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/new4.png" :avatarWidth="50" alignLeft>
非静态成员函数也就是没有用static修饰的成员函数。
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40">
也就是说static修饰的成员函数就叫静态成员函数，你的意思是必须写在某个对象的类内？外部的某个函数就不能用static修饰嘛？
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/new4.png" :avatarWidth="50" alignLeft>
那是当然。
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/new11.png" :avatarWidth="80">
可是我这么写编译器并没有报错！
</chatmessage>

```cpp
#include <iostream>

static void test()
{
    std::cout<<"test"<<std::endl;
}
int main() {

    test();
    return 0;
}

```

<chatmessage avatar="../../../../assets/emoji/bqb (2).png" :avatarWidth="50" alignLeft>
那是因为你写的 test函数声明和定义已经调用都在同个文件中。
现在你将这个test函数写在其他头文件中，然后在main中引入调用告诉我看到了什么？
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/new7.png" :avatarWidth="40">
依然编译成功！
</chatmessage>

::: code-tabs#language

@tab main.cpp
```cpp
#include "test.h"

int main() {
    test();
    return 0;
}
```
@tab test.h
```cpp
#pragma once
#include <iostream>
static void test()
{
    std::cout<<"test"<<std::endl;
}
```
:::

<chatmessage avatar="../../../../assets/emoji/bqb (2).png" :avatarWidth="50" alignLeft>
good！你现在将函数的定义从头文件分离，写到一个新的cpp中。
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/hh.png" :avatarWidth="40">

写代码阶段没有报错提示，编译执行时提示我  `test.h(3, 13): [C2129] 静态函数“void test(void)”已声明但未定义` ！

</chatmessage>

![](..%2F..%2Fassets%2Fstatic.png)

::: code-tabs#language

@tab main.cpp
```cpp
#include "test.h"

int main() {
    test();
    return 0;
}

```
@tab test.h
```cpp
#pragma once
#include <iostream>
static void test();
```

@tab test.cpp
```cpp
#include "test.h"

void test()
{
    std::cout<<"test"<<std::endl; 
}
```
:::

<chatmessage avatar="../../../../assets/emoji/new4.png" :avatarWidth="50" alignLeft>
在 C++ 中，函数默认情况下是全局的（具有外部链接），但使用 static 关键字可以将函数的链接属性更改为内部链接，
使其在同一文件中的其他文件看不到。现在尝试将你的static test的函数写到某个类中.
</chatmessage>

::: code-tabs#language

@tab main.cpp
```cpp
#include "test.h"

int main() {
    myclass::test();
    return 0;
}
```
@tab test.h
```cpp
#pragma once
#include <iostream>

class myclass
{
public:
    static void test(); 
};
```

@tab test.cpp
```cpp
#include "test.h"

void myclass::test()
{
    std::cout<<"test" << std::endl;
}
```
:::

<chatmessage avatar="../../../../assets/emoji/new7.png" :avatarWidth="40">
好神奇！竟然可以用了！而且我不需要创建这个对象实例！
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
static修饰一个成员函数或者成员变量后，会将其存储在全局数据区，这也是我们可以直接用作用域访问符::直接访问而不创建实例的原因。
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/new7.png" :avatarWidth="40">
可是！我现在依然可以用普通的创建类的实例来调用他耶？
</chatmessage>

::: code-tabs#language

@tab main.cpp
```cpp
#include "test.h"

int main() {
    myclass a;
    a.test();
    return 0;
}
```
@tab test.h
```cpp
#pragma once
#include <iostream>

class myclass
{
public:
    static void test(); 
};
```

@tab test.cpp
```cpp
#include "test.h"

void myclass::test()
{
    std::cout<<"test" << std::endl;
}
```
:::

<chatmessage avatar="../../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
那是当然，现在你在你的类中尝试使用this指针，康康会出什么问题。
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/bqb (5).png" :avatarWidth="40">

 编译器提示：`'this' 只能在非 static 成员函数或非 static 数据成员初始值设定项内使用`

</chatmessage>

![](..%2F..%2Fassets%2Fstaticerror.png)

::: code-tabs#language

@tab main.cpp
```cpp
#include "test.h"

int main() {
    myclass a;
    a.test();
    return 0;
}
```
@tab test.h
```cpp
#pragma once
#include <iostream>

class myclass
{
private:
    int value;

public:
    static void test(int value);
};
```

@tab test.cpp
```cpp
#include "test.h"

void myclass::test(int value)
{
    this->value = value;//错误'this' 只能在非 static 成员函数或非 static 数据成员初始值设定项内使用
}
```

:::
<chatmessage avatar="../../../../assets/emoji/new2.png" :avatarWidth="60">
除了这个static,有时候成员函数是个常函数用了const限定，好像也无法用this访问成员变量！
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
没错，但你用const限定成员函数时，确实无法通过this访问成员变量。而且限定符 'const' 仅允许用于非 static 成员函数。
</chatmessage>

![](..%2F..%2Fassets%2Fstatic%20const.png)

<chatmessage avatar="../../../../assets/emoji/new2.png" :avatarWidth="60">
那么非静态成员常函数我该怎么访问成员变量呢？有没有办法？
</chatmessage>

<chatmessage avatar="../../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
有两种方法：
</chatmessage>

1. **mutable 成员变量：** 将需要在常成员函数中修改的成员变量声明为 `mutable`。
   `mutable` 关键字告诉编译器，即使在常成员函数中，这些成员变量仍然可以被修改。

    ```cpp
    class MyClass {
    private:
        mutable int value;  // mutable 成员变量

    public:
        MyClass() : value(0) {}

        void setValue(int newValue) const {
            // 在常成员函数中修改 mutable 成员变量是允许的
            value = newValue;
        }

        int getValue() const {
            // 在常成员函数中访问 mutable 成员变量
            return value;
        }
    };
    ```

2. **通过 const_cast 去除 const 限定：** 尽管不推荐，但你可以使用 `const_cast` 来去除 `this` 指针的常量属性，
   以便在常成员函数中修改成员变量。这种做法需要谨慎使用，因为它绕过了 `const` 的本意，可能导致未定义的行为。

    ```cpp
    class MyClass {
    private:
        int value;

    public:
        MyClass() : value(0) {}

        void setValue(int newValue) const {
            // 使用 const_cast 去除 const 限定
            const_cast<MyClass*>(this)->value = newValue;
        }

        int getValue() const {
            // 在常成员函数中访问成员变量
            return value;
        }
    };
    ```