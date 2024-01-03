---
title: F10.SPTR|智能指针TODO
order: 10
category:
  - u++
tag:
  - Specifiers
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
C++的指针就已经谈虎色变了，UE中的所谓的智能指针会不会更难？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
首先，我们应该先理解为什么要用到智能指针。在这之前你先告诉我我们是怎么利用指针动态分配内存的？
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
这个倒不难，C++中用new来申请堆上的内存空间，用delete释放对应的内存。
</chatmessage>

```cpp
#include <iostream>
class MyClass {
public:
    MyClass() {
        std::cout << "MyClass()" << std::endl;
    }
    ~MyClass() {
        std::cout << "~MyClass()" << std::endl;
    }
};
int main() {
    MyClass* a = new MyClass();
    delete a;
}
```
<chatmessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
Good!但这只是一个非常简单的甚至算不上项目的Demo，如果到具体的项目中，这个MyClass指针往往不会使用后里面释放。
这时候引入了一个叫做智能指针的内存管理工具，解决了以下几个与手动内存管理相关的问题：
</chatmessage>

1. **自动释放内存：**
   - 通过使用智能指针，可以自动在对象不再需要时释放相关的内存。这有助于防止内存泄漏，即程序运行时没有释放不再使用的内存。

2. **防止重复释放：**
   - 智能指针通过引用计数或拥有者模式等机制，可以防止多次释放同一块内存。这减少了因释放已经释放的内存而导致的运行时错误。

3. **简化代码：**
   - 使用智能指针可以简化代码，避免手动管理内存的复杂性。开发者无需显式调用 `new` 和 `delete`，减少了出错的机会，提高了代码的可读性和可维护性。

4. **异常安全性：**
   - 智能指针在异常发生时能够正确释放相关资源，确保程序在异常情况下也能保持正确的状态，避免资源泄漏。

5. **更安全的多线程编程：**
   - 使用智能指针可以避免多线程环境下的资源竞争和访问冲突，从而提高代码的线程安全性。例如，`std::shared_ptr` 通过引用计数来管理资源，能够在多线程环境中正确地共享资源。

6. **循环引用的处理：**
   - 在使用 `std::shared_ptr` 时，当存在循环引用（两个对象相互引用）时，智能指针可以通过引用计数解决循环引用导致的内存泄漏问题。

<chatmessage avatar="../../assets/emoji/bqb (7).png" :avatarWidth="40">
好家伙！一口气出现几个我只看过没理解透彻的词汇出来！怎么就实现自动释放内存了？又怎么。。。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
别急！我们慢慢深入。首先你先告诉我，如果你来设计一个所谓的智能指针，你会怎么保证他自动分配？防止重复释放？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (7).png" :avatarWidth="40">

无非就是自己写一个模板类，然后重写`BigFour`

</chatmessage>

:::note
`BigFour`C++专栏中已经介绍过了
![](..%2Fassets%2Fbigfour.png)
:::

```cpp
#include <iostream>

template <typename T>
class MySmartPointer {
private:
    T* ptr;

public:
    // 构造函数
    MySmartPointer(T* p = nullptr) : ptr(p) {}

    // 拷贝构造函数
    MySmartPointer(const MySmartPointer& other) {
        ptr = other.ptr ? new T(*(other.ptr)) : nullptr;
    }

    // 移动构造函数
    MySmartPointer(MySmartPointer&& other) noexcept {
        ptr = other.ptr;
        other.ptr = nullptr;
    }

    // 析构函数
    ~MySmartPointer() {
        delete ptr;
    }

    // 重载赋值运算符
    MySmartPointer& operator=(const MySmartPointer& other) {
        if (this != &other) {
            delete ptr;
            ptr = other.ptr ? new T(*(other.ptr)) : nullptr;
        }
        return *this;
    }

    // 获取原始指针
    T* get() const {
        return ptr;
    }

    // 重载箭头运算符
    T* operator->() const {
        return ptr;
    }

    // 重载解引用运算符
    T& operator*() const {
        return *ptr;
    }
};

int main() {
    // 使用 MySmartPointer
    MySmartPointer<int> myPtr(new int(42));
    std::cout << "Value: " << *myPtr << std::endl;

    // 在作用域结束时，MySmartPointer 的析构函数会自动释放资源

    return 0;
}
```
<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
没错，一个简单指针模板类就这么实现了！但还谈不上`智能`。
</chatmessage>

1. **TSharedPtr：** 代表共享所有权的智能指针。多个 `TSharedPtr` 实例可以共享相同的对象，当最后一个引用超出范围时，对象会被销毁。

   ```cpp
   TSharedPtr<MyClass> SharedObject = MakeShared<MyClass>();
   ```

2. **TWeakPtr：** 代表弱引用智能指针，通常与 `TSharedPtr` 一起使用，用于避免循环引用。

   ```cpp
   TSharedPtr<MyClass> SharedObject = MakeShared<MyClass>();
   TWeakPtr<MyClass> WeakObject = SharedObject;
   ```

3. **TUniquePtr：** 代表独占所有权的智能指针。每个 `TUniquePtr` 实例拥有对对象的唯一所有权，用于确保资源的独占性。

   ```cpp
   TUniquePtr<MyClass> UniqueObject = MakeUnique<MyClass>();
   ```

4. **UPROPERTY 和 UPROPERTY_POINTER：** 在UE4的中，`UPROPERTY` 用于声明成员变量，并可以与 `TWeakObjectPtr` 一起使用，以创建弱引用指针。

   ```cpp
   UPROPERTY()
   TWeakObjectPtr<AActor> WeakActor;
   ```

5. **FObjectPtr：** 代表一个智能指针，可以包含 `UObject` 类型的对象。用于管理UE的对象生命周期。

   ```cpp
   FObjectPtr<UClass> MyObject = NewObject<UClass>();
   ```



