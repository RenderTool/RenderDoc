---
title: c++9.Big Four
order : 9
category:
  - c++
---

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
当你定义一个类时，如果没有显式提供一些特殊成员函数（特别是构造函数、析构函数、拷贝构造函数和拷贝赋值运算符），
编译器会为该类生成一些默认的特殊成员函数。这些函数通常被称为 "Big Four"，
</chatmessage>

1. **默认构造函数 (Default Constructor):** 如果你没有为类定义任何构造函数，编译器将生成一个无参的默认构造函数。它用于创建对象时的初始化，例如 `MyClass obj;`。

2. **析构函数 (Destructor):** 如果你没有显式定义析构函数，编译器将生成一个默认的析构函数。它用于在对象生命周期结束时进行清理工作，例如释放动态分配的资源。析构函数的名称是类名前加上波浪号 `~`，如 `~MyClass()`。

3. **拷贝构造函数 (Copy Constructor):** 如果你没有定义自己的拷贝构造函数，编译器将生成一个默认的拷贝构造函数。它用于通过复制另一个对象来初始化一个新对象，例如 `MyClass obj1; MyClass obj2 = obj1;`。

4. **拷贝赋值运算符 (Copy Assignment Operator):** 如果你没有定义自己的拷贝赋值运算符，编译器将生成一个默认的拷贝赋值运算符。它用于将一个对象的值复制给另一个对象，例如 `MyClass obj1, obj2; obj2 = obj1;`。

```cpp
#include <iostream>
#include <cstring>

class Person {
private:
    char* name;

public:
    // 默认构造函数
    Person() : name(nullptr) {
        std::cout << "Default Constructor" << std::endl;
    }

    // 析构函数
    ~Person() {
        std::cout << "Destructor" << std::endl;
        delete[] name;
    }

    // 拷贝构造函数
    Person(const Person& other) {
        std::cout << "Copy Constructor" << std::endl;
        // 执行深拷贝
        if (other.name != nullptr) {
            name = new char[strlen(other.name) + 1];
            strcpy(name, other.name);
        } else {
            name = nullptr;
        }
    }

    // 拷贝赋值运算符
    Person& operator=(const Person& other) {
        std::cout << "Copy Assignment Operator" << std::endl;
        if (this != &other) {
            // 执行深拷贝
            delete[] name;
            if (other.name != nullptr) {
                name = new char[strlen(other.name) + 1];
                strcpy(name, other.name);
            } else {
                name = nullptr;
            }
        }
        return *this;
    }

    // 其他成员函数和操作

    // 输出姓名
    void display() const {
        std::cout << "Name: " << (name ? name : "N/A") << std::endl;
    }

    // 设置姓名
    void setName(const char* newName) {
        delete[] name;
        name = new char[strlen(newName) + 1];
        strcpy(name, newName);
    }
};

int main() {
    // 使用默认构造函数
    Person person1;
    person1.setName("Alice");

    // 使用拷贝构造函数
    Person person2 = person1;

    // 使用拷贝赋值运算符
    Person person3;
    person3 = person1;

    // 输出对象信息
    std::cout << "Person 1: ";
    person1.display();
    std::cout << "Person 2: ";
    person2.display();
    std::cout << "Person 3: ";
```