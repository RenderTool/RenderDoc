---
title: c++结构体指针|类指针
order : 5
category:
  - c++
---

<ChatMessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40">
说完了数组指针和指针数组随便讲讲结构体指针和类指针吧
</ChatMessage>

<ChatMessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40" alignLeft>
在讲结构体指针前先来复习一下结构体咱们定义吧
</ChatMessage>

>语法：struct 结构体名称 { 成员列表 };

![](..%2F..%2Fassets%2Fstruct.png)

## 结构体指针
<ChatMessage avatar="../../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
顾名思义，是一个结构体类型的<span style="color: #c0392b">指针</span>指向某个结构体。
</ChatMessage>

>语法： struct 结构体名称 * 指针变量名 = & 结构体对象;

![](..%2F..%2Fassets%2Fcprimer.png)

### 结构体指针定义方法

<hr>

#### **1. struct 结构体名称 * 指针变量名 = & 结构体对象;**

```cpp
#include <iostream>

struct Dog {
    int age{};
    std::string name{};
    
    void bark() {
        std::cout << "汪汪汪" << std::endl;
    }
};
int main()
{
    //new 堆上执行
    struct Dog *pDog = new Dog;
    pDog->bark();
    
    //栈上执行，程序控制生命周期
    Dog dog2;
    struct Dog* pDog2 = &dog2;//
    pDog2->bark();

    delete pDog;//释放内存
    pDog = nullptr;//指针置空
    
}
```

1. 堆上分配内存：
   ```cpp
   struct Dog *pDog = new Dog;
   ```
   这行代码在堆上动态分配了一个 `Dog` 对象，并将其地址赋给了 `pDog` 指针。在这种情况下，需要记得使用 `delete` 来释放这块内存。

2. 栈上分配内存：
   ```cpp
   Dog dog2;
   struct Dog* pDog2 = &dog2;
   ```
   创建了一个 `Dog` 对象 `dog2`，并用 `&dog2` 将其地址赋给了 `pDog2` 指针。在这种情况下，对象的生命周期受限于其所在的作用域，不需要手动释放内存。

3. 释放内存：
   ```cpp
   delete pDog;
   ```
   
<GifWithButton src="../../../../assets/unrealgif/structptr.gif"/>

<ChatMessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40">
如果不delete会怎么样？
</ChatMessage>

<ChatMessage avatar="../../../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
如果动态分配内存后，没有正确释放该内存，意味着这部分内存无法再被程序访问。<br>
但系统仍然认为这部分内存被程序占用，从而造成内存资源的浪费。也就是我们常常说的内存泄漏。
</ChatMessage>

<hr>

#### **2. 在定义结构体时直接定义成指针**

```cpp
#include <iostream>

struct Dog
{
    int age{};
    std::string name{};

    void bark()
    {
        std::cout << "汪汪汪" << std::endl;
    }
} * pDog;

int main()
{
    pDog->bark();
    
    return 0;
}

```

### 结构体数组

```cpp
#include <iostream>
#include <vector>  // 使用 std::vector 代替数组

struct Dog {
    int age{};
    std::string name{};
    
    void bark() {
        std::cout << "汪汪汪" << std::endl;
    }
};

int main() {
    // 使用 std::vector 代替数组
    std::vector<Dog> dogs = {
        {3, "大黄"},
        {2, "大白"}
    };

    // 修改第二只狗的年龄
    dogs[1].age = 4;

    // 使用 new 创建堆上的对象，而不是栈上的数组
    Dog* pDog = new Dog;
    pDog->age = 3;
    pDog->name = "大黄";
    pDog->bark();

    // 使用 std::vector 管理动态分配的对象
    std::vector<Dog*> dogPointers;
    dogPointers.push_back(new Dog{5, "小黑"});
    dogPointers.push_back(new Dog{2, "小白"});

    // 遍历 vector，并释放动态分配的对象
    for (Dog* p : dogPointers) {
        p->bark();
        delete p;
    }
    dogPointers.clear();

    return 0;
}

```
### 结构体嵌套

```cpp
#include <iostream>

struct Cat
{
    std::string name{};
    int age{};

    void catbark() const
    {
        std::cout << "m~m~m" << std::endl;
    }
};

struct Dog
{
    std::string name{};
    int age{};

    void dogbark() const
    {
        std::cout << "w~w~w" << std::endl;
    }

    struct Cat myCat;
};

void printstruct(const Dog* d, const Cat* c)
{
    std::cout << "我的小狗名叫:" << d->name <<"今年"<<d->age<<"岁,快跟大家打招呼!"<<std::endl;
    std::cout << d->name <<"：";
    d->dogbark();
    
    std::cout << "小狗" << d->name << "的朋友叫：" << c->name <<"今年"<<c->age<<"岁,快跟大家打招呼!"<<std::endl;
    std::cout << c->name <<"：";
    c->catbark();
}

int main()
{
    Dog myDog;
    struct Dog* PDog = &myDog;
    struct Cat* PCat = &PDog->myCat;
    
    PDog->name = "小白";
    PDog->age = 3;
    
    PCat->name = "小咪";
    PCat->age = 2;

    printstruct(PDog, PCat);
}
```


## 类指针

<ChatMessage avatar="../../../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
类指针和结构体指针在概念上非常相似，因为类（class）和结构体（struct）在 C++ 中都是用户自定义的数据类型。
只不过需要注意的是类默认是私有的,需要用pulic关键字修饰
</ChatMessage>

![类默认私有](..%2F..%2Fassets%2Fclassptr.png)

>语法 ：class 类名称 * 指针变量名 = new 类对象;

```cpp
#include <iostream>

// 类定义
class MyClass {
public:
    int x;

    MyClass(int val) : x(val) {}
    void display() { std::cout << "Value: " << x << std::endl; }
};

// 结构体定义
struct MyStruct {
    int y;

    MyStruct(int val) : y(val) {}
    void display() { std::cout << "Value: " << y << std::endl; }
};

int main() {
    // 类指针
    MyClass* ptrClass = new MyClass(10);
    ptrClass->display();
    delete ptrClass;

    // 结构体指针
    MyStruct* ptrStruct = new MyStruct(20);
    ptrStruct->display();
    delete ptrStruct;

    return 0;
}

```
### 声明前置

<ChatMessage avatar="../../../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
当然结构体/类指针声明前置都是可以的
</ChatMessage>

```cpp
#include <iostream>

class Dog*Pdog;//声明前置
class Dog
{
public:
    int age{};
    std::string name{};

    void bark()
    {
        std::cout << "汪汪汪" << std::endl;
    }
};

int main()
{
    Pdog->bark();
    return true;
}

```
