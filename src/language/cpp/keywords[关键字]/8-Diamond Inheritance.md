---
title: c++8.virtual-菱形继承|多态
order : 8
category:
  - c++
---

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
Baba我遇到了奇怪问题！但我用下面的代码中`D`访问 `dataA`编译器会报错！
</ChatMessage>

## 菱形继承

```cpp
class A {
public:
    int dataA;
};

class B : public A {
public:
int dataB;
};

class C : public A {
public:
int dataC;
};

class D : public B, public C {
public:
int dataD;
};
```
![](..%2Fassets%2Flxjc.png)

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft >
看来你这是遇到菱形继承（钻石继承）问题了！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40" >
什么意思？什么是菱形继承？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft >
指一个派生类继承自两个直接或间接共同基类，形成了一个类似菱形的继承结构。<br>你的D继承了B和C，他们都间接或直接继承A。<br>
这时候你去访问`dataA`，编译器会产生二义性，因为有两条路径可以到达 `A` 类，一条是通过 `B`，一条是通过 `C`。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40" >
那该怎么解决呢？
</ChatMessage>

### 作用域运算符`::`

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft >

使用 **作用域运算符`::`** 可以解决菱形继承问题。

</ChatMessage>

![](..%2Fassets%2Fscopeslover.png)

```cpp
#include <iostream>

class A {
public:
    int dataA;
};

class B : public A {
public:
int dataB;
};

class C : public A {
public:
int dataC;
};

class D : public B, public C {
public:
int dataD;
};

int main() {
    D {}.B::dataA;//通过作用域运算符解析B作用域范围dataA
    D {}.C::dataA;//通过作用域运算符解析C作用域范围dataA
    return 0;
}
```

### 虚继承

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft >

使用 **虚继承（Virtual Inheritance）：** 可以解决菱形继承问题。

</ChatMessage>


```cpp
class A {
public:
    int dataA;
};

class B : virtual public A {
public:
    int dataB;
};

class C : virtual public A {
public:
    int dataC;
};

class D : public B, public C {
public:
    int dataD;
};
```
<ChatMessage avatar="../../../assets/emoji/new5.png" :avatarWidth="40" alignLeft >

使用虚继承应该根据具体情况来考虑，确保在解决继承二义性的同时不引入其他问题。
- 虚继承可能会引入一些额外的开销。
- 构造函数和析构函数的调用顺序可能会受到影响，需要特别小心。

</ChatMessage>

### 问题分析

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40" >
可是有个问题，方法1作用域运算符可以直接用为什么还用用方法2的虚继承呢？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft >
你试着打印先通过B和C访问修改dataA后再打印通过B访问dataA结果，告诉我发生了什么？
</ChatMessage>

```cpp
int main() {
    D d;
    d.B::dataA =10 ;
    d.C::dataA =20 ;
    std::cout<<d.B::dataA <<std::endl;
    return 0;
}
```

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40" >
咦？为什么dataA没有变成20！
</ChatMessage>

![](..%2Fassets%2Fscoped.b.jpg)

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft >
你再康康虚继承打印结果
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40" >
变了！好神奇这是为什么？
</ChatMessage>

![](..%2Fassets%2Fviruald.a.jpg)

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft >
可以借助编译器工具分析比对这两种写法区别。
</ChatMessage>

![](..%2F..%2F..%2Funreal%2Fassets%2Fvscmd.jpg)

1. 打开工具并且cd到你的代码目录

```bash
cd D:\UE5PJ2\CodeTest\ConsoleApplication1\ConsoleApplication1
```
![](..%2F..%2F..%2Funreal%2Fassets%2Fcdcode.png)

2. 使用dir检查目录文件

![](..%2F..%2F..%2Funreal%2Fassets%2Fcdcodedircheck.png)

3. 输入命令 即可列出对象模型。

```bash
cl /d1 reportSingleClassLayout类名 文件名.cpp
```
![作用域运算符访问](..%2Fassets%2FCLASSD.png)

![虚继承](..%2Fassets%2Fvbtable.png)

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40" >
普通继承函数好像每次都会独立继承dataA,而虚继为什么dataA不见了？出现了一个vbptr?
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft >
这些其实是多态继承中的一个虚表概念。
</ChatMessage>

1. **虚继承（Virtual Inheritance）：** 虚继承是一种通过在继承关系中使用 `virtual` 关键字来解决菱形继承（Diamond Inheritance）问题的技术。它确保在继承链中只有一个共享的基类子对象，从而避免了二义性。在虚继承中，最终派生类只保留一个基类子对象的实例。

2. **虚基类（Virtual Base Class）：** 虚基类是在菱形继承中被声明为虚继承的基类。在上面的例子中，`A` 就是一个虚基类。虚基类用于确保只有一个实例被保留在继承体系中，从而解决了二义性问题。

3. **虚表（Virtual Table，或称为vtable）：** 虚表是用于实现动态多态性的一种机制。对于包含虚函数的类，编译器会在该类的对象中插入一个指向虚表的指针。虚表是一个表格，其中包含了该类所有虚函数的地址。当通过基类指针或引用调用虚函数时，实际执行的是虚表中相应函数的地址。

4. **虚指针（Virtual Pointer，或称为vptr）：** 虚指针是一个指向虚表的指针。对于包含虚函数的类，每个对象都有一个虚指针，指向该对象对应的虚表。通过虚指针，程序能够在运行时确定调用的是哪个版本的虚函数。

```bash
class D size(24):
        +---
 0      | +--- (base class B)
 0      | | {vbptr}
 4      | | dataB
        | +---
 8      | +--- (base class C)
 8      | | {vbptr}
12      | | dataC
        | +---
16      | dataD
        +---
        +--- (virtual base A)
20      | dataA
        +---

D::$vbtable@B@:
 0      | 0
 1      | 20 (Dd(B+0)A)

D::$vbtable@C@:
 0      | 0
 1      | 12 (Dd(C+0)A)
vbi:       class  offset o.vbptr  o.vbte fVtorDisp
               A      20       0       4 0
```

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40" >
我开始晕了！完全看不懂！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft >
首先你应该搞懂一个概念，指针是一个存储地址的变量。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
这个我明白！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft >
OK,那么这里的vbptr就是一个虚表指针，指向虚表
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
这个我也明白了！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft >
上图中，是类D的内存分布，他的基类是B和C，他的虚基类是A。每个基类都有一个虚表指针 vbptr，指向相应的虚表。
</ChatMessage>

![](..%2Fassets%2Ftujie.png)

![](..%2Fassets%2Fvirualdtable.png)

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft >
虚指针都在修改指向的dataA的值，意味着无论通过B还是C去修改都已经操作修改了dataA,这和普通的继承多次复制出现了本质区别。
</ChatMessage>

## 多态-虚函数


<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft >
oK！现在我们已经通过虚继承解决了菱形多继承问题，现在我们我们来思考另外一个问题前，我们先移除菱形结构中的D类，然后在所有父子类中都添加一个同名函数。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
别了吧！我懒得思考。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft >
问题很简单，A和B都有一个speak函数，B继承自A。此时调用全局的speak写的参数列表中是A的对象引用，但我实际参数传入B对象，你觉得最终会打印什么？
</ChatMessage>


```cpp
#include <iostream>

class A {
public:
    void speak() {
       std::cout << "Hello, A!" << std::endl;
   }
};

class B : public A {
public:
     void speak()  {
        std::cout << "Hello, B!" << std::endl;
    }
};
void speak(A *a) {
    a->speak();
}

int main() {
    B b;
    speak(&b);
    return 0;
}
```
<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
这还用想，肯定是打印B的 "Hello, B!"咯。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/new2.png" :avatarWidth="55" alignLeft >
回答错误，请认真思考！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
为什么打印的是A的"Hello, A!"
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft >
由于 speak 函数的参数类型是 A*，这是一个指向 A 类对象的指针，
所以编译器在编译时会选择调用 A 类中的 speak 函数。属于早绑定的情况。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
您能不能别总是很突兀的冒出新的专业术语？什么叫早绑定？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/new1.png" :avatarWidth="40" alignLeft >
看来咱们需要补一下编译方面的知识，编译流程包括了源代码到可执行文件的多个阶段，其中和绑定有关的是编译期和链接期。
</ChatMessage>

### 编译期：

1. **词法分析和语法分析：** 源代码首先被分析成令牌（Token）和语法结构。

2. **语义分析：** 编译器检查代码的语义是否正确，包括类型检查等。

3. **生成中间代码：** 编译器生成中间代码，这是一种与硬件无关的表示。

4. **优化：** 编译器进行各种优化，包括但不限于死代码消除、循环展开、内联等。

5. **代码生成：** 编译器将中间代码转换成目标机器的汇编代码。

### 链接期：

1. **目标文件生成：** 汇编代码被汇编器转换成目标文件。

2. **符号解析：** 链接器解析符号，将函数和变量的引用与其定义关联起来。

3. **地址绑定：** 将符号引用绑定到实际的内存地址。这是绑定的一个阶段。

### 关于绑定：

- **早绑定（静态绑定）：** 在编译期或链接期就已经确定了调用的函数或变量的地址。这是在程序执行之前就完成的绑定。C++ 默认采用早绑定。

- **晚绑定（动态绑定）：** 在运行时确定调用的函数或变量的地址。这通常涉及虚函数和虚表的机制。在 C++ 中，使用 `virtual` 关键字声明的虚函数就是为了实现晚绑定。晚绑定是通过虚表和虚指针的机制来实现的。

<ChatMessage avatar="../../../assets/emoji/new1.png" :avatarWidth="40" alignLeft >

代码中，`speak` 函数的参数类型是 `A*`，即一个指向 `A` 类对象的指针。
当你将 `B` 类的对象传递给 `speak` 函数时，尽管你传递的是 `B` 类对象的地址，
但是编译器在编译期就已经知道这是一个 `A` 类对象的指针，所以它会选择调用 `A` 类中的 `speak` 函数。
这就是早绑定的过程，因为在编译期就已经确定了调用的函数。

</ChatMessage>


<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
那么是不是改成晚绑定就行了？怎么做呢？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/new2.png" :avatarWidth="55" alignLeft >

不是已经说了吗！要实现晚绑定，需要在基类的虚函数声明中使用 `virtual` 关键字，并在派生类中使用 `override` 关键字，
这样在运行时将根据对象的实际类型来调用相应的虚函数，实现了动态多态性。

</ChatMessage>

```cpp
#include <iostream>

class A {
public:
    virtual void speak() {
       std::cout << "Hello, A!" << std::endl;
   }
};

class B : public A {
public:
    void speak() override {
        std::cout << "Hello, B!" << std::endl;
    }
};

void speak(A *a) {
    a->speak();
}

int main() {
    B b;
    speak(&b);  // 输出 "Hello, B!"
    return 0;
}
```

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" >
不严谨！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb01.png" :avatarWidth="40" alignLeft>
为什么不严谨？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" >
你没判断空指针的情况。
</ChatMessage>

```cpp
#include <iostream>

class A {
public:
    virtual void speak() {
       std::cout << "Hello, A!" << std::endl;
   }
};

class B : public A {
public:
    void speak() override {
        std::cout << "Hello, B!" << std::endl;
    }
};

void speak(A *a) {
    if(a!= nullptr)
    {
        a->speak();    
    }
}

int main() {
    B b;
    speak(&b);  // 输出 "Hello, B!"
    return 0;
}
```
<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft >
有进步！那么你觉得现在class B的sizeof是多少？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
B是一个类，函数和类分开存储，也就是说这是一个空类只占1个字节。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
你打印康康！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
为什么32下运行是4?
</ChatMessage>

![](..%2Fassets%2Fhellob4bit.png)

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
还记得之前咱们虚继承中说的虚指针的概念嘛？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
我明白了！意味着这里用了 virtual函数，也拥有了一个虚指针？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
用开发者编译工具康康不就行知道了!
</ChatMessage>

![虚函数继承重写](..%2Fassets%2Fover.png)


![没有虚函数](..%2Fassets%2FWITHOUTOUVER.png)

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
现在这个虚指针好像不再指向vbtable，而是vftable莫非是虚函数表？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft >
是的。不过要注意的是，一旦父类使用了虚函数，你继承后无论重写不重写都会有虚指针。
</ChatMessage>

![](..%2Fassets%2Fjcwithoutoverride.png)

## 多态-纯虚函数

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft >
父类中，虚函数很多时候往往只需要一个声明，而不需要定义，这时候可以改成纯虚函数的写法来优化。
但要注意，这时候这个类就变成了抽象类，无法实例化。这也是UE中接口重要的实现方法。
</ChatMessage>

```cpp
#include <iostream>

class A {
public:
    virtual void speak()=0;//此时A类已经变成抽象类
};

class B : public A {
public:
    void speak() override {
        std::cout << "Hello, B!" << std::endl;
    }//必须重写，否则也是抽象类
};

void speak(A *a) {
    if(a!= nullptr)
    {
        a->speak();    
    }
}

int main() {
    A a;//报错，因为现在a是抽象类。 
    B b;
    speak(&b);  // 输出 "Hello, B!"
    return 0;
}
```
![](..%2Fassets%2Fmutb.png)

## 多态总结

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40"  >
如果说virtual关键字在虚继承解决了菱形继承问题，那么virtual关键字在多态的时候解决了更多的问题！
</ChatMessage>
多态性解决了在继承层次结构中的两个主要问题：

1. **灵活性和可扩展性：** 多态性使得代码更加灵活和可扩展。通过使用基类指针或引用调用派生类对象的虚函数，可以在运行时动态选择执行不同的函数实现。这样，在不修改已有代码的情况下，可以轻松地添加新的派生类，使得系统更具扩展性。

    ```cpp
    class Shape {
    public:
        virtual void draw() {
            // 基类的虚函数实现
        }
    };

    class Circle : public Shape {
    public:
        void draw() override {
            // 派生类的虚函数实现
        }
    };

    class Square : public Shape {
    public:
        void draw() override {
            // 另一个派生类的虚函数实现
        }
    };
    ```

2. **隐藏细节：** 多态性隐藏了对象的具体类型，使得程序员可以使用基类的接口来操作对象，而无需关心对象的实际类型。这种抽象和封装的特性使得代码更易于维护和理解。

    ```cpp
    void drawShape(Shape* shape) {
        shape->draw();  // 调用虚函数，根据实际对象类型执行不同的绘制操作
    }

    int main() {
        Circle circle;
        Square square;

        drawShape(&circle);  // 调用 Circle 的 draw 函数
        drawShape(&square);  // 调用 Square 的 draw 函数

        return 0;
    }
    ```
### 多态分为两类

* 静态多态：函数重载和运算符重载属于静态多态，复用函数名
* 动态多态：派生类和虚函数实现运行时多态

### 静态多态和动态多态区别：

* 静态多态的函数地址早绑定-编译阶段确定函数地址
* 动态多态的函数地址晚绑定-运行阶段确定函数地址

## 多态-虚析构|纯虚析构

### 虚析构函数：

1. **定义：** 虚析构函数是在基类中声明为虚函数的析构函数。通过在基类中使用 `virtual` 关键字声明析构函数，可以实现在派生类对象销毁时调用正确的析构函数，确保释放派生类对象所占用的资源。

    ```cpp
    class Base {
    public:
        virtual ~Base() {
            // 基类的析构函数
        }
    };
    ```

2. **多态性：** 虚析构函数使得在通过基类指针或引用删除派生类对象时，会调用正确的派生类析构函数。这是通过运行时动态绑定实现的，确保正确释放对象的资源。

    ```cpp
    Base* obj = new Derived();
    delete obj;  // 调用 Derived 类的析构函数
    ```

### 纯虚析构函数：

1. **定义：** 纯虚析构函数是一个纯虚函数，且它是类的析构函数。通过在基类中声明纯虚析构函数，可以使基类成为抽象类，无法实例化对象。派生类必须实现该纯虚析构函数。

    ```cpp
    class AbstractBase {
    public:
        virtual ~AbstractBase() = 0;
    };

    AbstractBase::~AbstractBase() {
        // 纯虚析构函数的定义
    }
    ```

2. **抽象类：** 含有纯虚析构函数的类成为抽象类，它不能被实例化。任何继承自抽象类的派生类都必须实现该纯虚析构函数，否则它们也会变成抽象类。

    ```cpp
    class Derived : public AbstractBase {
    public:
        ~Derived() override {
            // 派生类的析构函数实现
        }
    };
    ```

使用虚析构函数和纯虚析构函数的目的是确保在继承层次结构中正确释放资源，并在派生类中提供必要的析构函数实现。这样可以防止资源泄漏和确保正确的对象销毁。
