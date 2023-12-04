---
title: c++7.sizeof和内存对齐
order : 7
category:
  - c++
---
<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
在内存中几乎所有数据类型都有自己占用的大小，那么继承某个类以后，继承的类会占用多大的内存？比如：
</ChatMessage>

```cpp
class Base {
public:
    int publicVar;
    char charVar;
    double doubleVar;
};

class Derived : public Base {
public:
    int derivedVar;
};
```

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
在使用用sizeof查看前你觉得这个Derived会占用多大呢？
</ChatMessage>

```cpp
#include <iostream>

int main() {
    std::cout << "int: " << sizeof(int) << " bytes" << std::endl;
    std::cout << "char: " << sizeof(char) << " bytes" << std::endl;
    std::cout << "double: " << sizeof(double) << " bytes" << std::endl;
    std::cout << "Size of Base: " << sizeof(Base{}) << " bytes" << std::endl;
    std::cout << "Size of Derived: " << sizeof(Derived) << " bytes" << std::endl;

    system("pause");
    return 0;
}
```

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
我觉得吧先保证是可以按下面方法计算：
</ChatMessage>

假设 `int` 占用4字节，`char` 占用1字节，`double` 占用8字节。在一般情况下，对于上述的 `Base` 和 `Derived` 类：

- `Base` 类的大小：`4 + 1 + 8 = 13` 字节。
- `Derived` 类的大小：`13 + 4 = 17` 字节。

<ChatMessage avatar="../../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
现在你在用sizeof康康。
</ChatMessage>

![](..%2Fassets%2Fsizeofalign.png)

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
为什么？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
你可以用VS自带的开发人员命令行工具
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

![](..%2F..%2F..%2Funreal%2Fassets%2Fnckj.jpg)

<ChatMessage avatar="../../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
很好，现在你将代码中char charVar;和 double doubleVar;顺序对调。
</ChatMessage>

```cpp
class Base {
public:
    int publicVar;
    double doubleVar;
    char charVar;
};
```
![](..%2F..%2F..%2Funreal%2Fassets%2Fsizeof24.png)

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
好家伙！为什么又变了！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
这涉及了内存对齐的概念，根据C++标准，允许编译器在满足对齐和填充要求的前提下对成员变量进行重新排列，以提高内存布局的效率。
让我们仔细比较两种情况的布局：
</ChatMessage>


### 第一种情况：

```cpp
class Base {
public:
    int publicVar;   // 4 bytes
    char charVar;    // 1 byte + 3 bytes padding
    double doubleVar; // 8 bytes
};
```

总大小：4  + 1 + 3 (padding) + 8 = 16 bytes

### 第二种情况：

```cpp
class Base {
public:
    int publicVar;   // 4 bytes + 4 bytes padding
    double doubleVar; // 8 bytes
    char charVar;    // 1 byte + 7 bytes padding
};
```

总大小：4 + 4 (padding) + 8 + 1 + 7 (padding) = 24 bytes

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
好家伙！这也验证了编译器的执行顺序确实是自上而下。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
是的，这也是推荐将较小的数据类型或者占用内存较小的成员变量放在前面声明。
</ChatMessage>
