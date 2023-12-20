---
title: c++6.friend
order : 6
category:
  - c++
---
<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
之前咱介绍了class中的三个访问控制修饰符`public`、`protected` 和 `private`
其中`private`控制的成员属性和函数是不是只能通过本身访问。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
并不绝对，你可以用友元函数开放权限。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb01.png" :avatarWidth="40" >
就像开放权限给我的好朋友查看的意思？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
没错，可以这样理解。友元函数的存在就像是你的类把某个函数声明为“好朋友”，允许它访问类的私有成员。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/new3.png" :avatarWidth="50" >
那具体该怎么用呢？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
友元函数的声明通常放在类的定义中，并使用 friend 关键字。有几个特性：
</ChatMessage>

1. **访问私有成员：** 如果有一些与类密切相关的非成员函数需要访问类的私有成员，
但这些函数不适合成为类的成员函数，可以将它们声明为友元函数，以便访问类的私有部分。

    ```cpp
    class MyClass {
    private:
        int privateData;

    public:
        MyClass() : privateData(0) {}

        // 友元函数的声明
        friend void displayPrivateData(const MyClass& obj);
    };

    // 友元函数的定义
    void displayPrivateData(const MyClass& obj) {
        std::cout << "Private Data: " << obj.privateData << std::endl;
    }
    ```

2. **提高效率：** 有时，为了提高效率，需要使用非成员函数来执行某些操作，而这些操作需要访问类的私有成员。通过将这些函数声明为友元，可以避免将所有操作都包装成成员函数。

3. **重载运算符：** 重载某些运算符时，可能需要直接访问类的私有成员。友元函数允许非成员函数重载类的运算符并访问类的私有部分。

    ```cpp
    class Complex {
    private:
        double real;
        double imag;

    public:
        Complex(double r, double i) : real(r), imag(i) {}

        // 友元函数的声明
        friend Complex operator+(const Complex& a, const Complex& b);
    };

    // 友元函数的定义
    Complex operator+(const Complex& a, const Complex& b) {
        return Complex(a.real + b.real, a.imag + b.imag);
    }
    ```
<ChatMessage avatar="../../../assets/emoji/new11.png" :avatarWidth="55" >
可是如果滥用，岂不是这个`private`就形同虚设，也就破坏了类的封装性。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
是的，过度使用友元函数还可能可能导致代码难以维护和理解。<br>
一般来说，尽量在类内部提供成员函数来实现需要访问私有成员的操作，而只在确实需要时才使用友元函数。
</ChatMessage>

