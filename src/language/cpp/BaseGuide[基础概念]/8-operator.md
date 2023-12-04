---
title: c++8.运算符重载
order : 8
category:
  - c++
---

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
上一篇咱们讨论完了++，这一篇顺带复习一下运算符重载吧。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
ok，咱们先来了解一下有哪些运算符。
</ChatMessage>

### 运算符

1. **算术运算符：**
    - `+`（加法）
    - `-`（减法）
    - `*`（乘法）
    - `/`（除法）
    - `%`（取模）

2. **关系运算符：**
    - `==`（等于）
    - `!=`（不等于）
    - `<`（小于）
    - `>`（大于）
    - `<=`（小于等于）
    - `>=`（大于等于）

3. **逻辑运算符：**
    - `&&`（逻辑与）
    - `||`（逻辑或）
    - `!`（逻辑非）

4. **位运算符：**
    - `&`（按位与）
    - `|`（按位或）
    - `^`（按位异或）
    - `~`（按位取反）
    - `<<`（左移）
    - `>>`（右移）

5. **赋值运算符：**
    - `=`（赋值）
    - `+=`（加法赋值）
    - `-=`（减法赋值）
    - `*=`（乘法赋值）
    - `/=`（除法赋值）
    - `%=`（取模赋值）
    - `&=`（按位与赋值）
    - `|=`（按位或赋值）
    - `^=`（按位异或赋值）
    - `<<=`（左移赋值）
    - `>>=`（右移赋值）

6. **递增和递减运算符：**
    - `++`（递增）
    - `--`（递减）

7. **成员访问运算符：**
    - `->`（成员访问）
    - `->*`（成员指针访问）

8. **函数调用运算符：**
    - `()`（函数调用）

9. **下标运算符：**
    - `[]`（下标访问）

10. **其他运算符：**
- `,`（逗号运算符）
- `&`（取地址运算符）
- `*`（指针解引用运算符）
- `sizeof`（sizeof 运算符）
- `typeid`（typeid 运算符）
- `new`（动态内存分配运算符）
- `delete`（动态内存释放运算符）

### 运算符重载

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
在 C++ 中，运算符重载可以通过成员函数或全局函数来完成。以下是一些运算符的重载方式：
</ChatMessage>


## 1. **成员函数的运算符重载：**

### **二元算术运算符：**
```cpp
MyClass MyClass::operator+(const MyClass& other) const 
{
         // 实现加法运算
         // 返回结果
}
```

### **关系运算符：**
```cpp
bool MyClass::operator==(const MyClass& other) const 
{
         // 实现相等性比较
         // 返回比较结果
}
```

### **递增和递减运算符：**
```cpp
//前置
MyClass& MyClass::operator++() 
{
 ++i;
 return *this;
}
//后置
MyClass& MyClass::operator++(int) //占位运算
{
 int i = *this ;
 i++;
 return *this;
}
```

### **赋值运算符：**
```cpp
MyClass& MyClass::operator=(const MyClass& other) 
{
         // 实现赋值操作
         // 返回修改后的对象
}
```

### **函数调用运算符：**
```cpp
ReturnType MyClass::operator()(/* 参数列表 */)
{
         // 实现函数调用
         // 返回结果
}
```

### **下标运算符：**
```cpp
ElementType& MyClass::operator[](size_t index) 
{
         // 实现下标访问
         // 返回对应元素的引用
}
```

## 2. **全局函数的运算符重载：**

### **二元算术运算符：**

```cpp
MyClass operator+(const MyClass& a, const MyClass& b) 
{
         // 实现加法运算
         // 返回结果
}
```

### **关系运算符：**
```cpp
bool operator==(const MyClass& a, const MyClass& b) 
{
         // 实现相等性比较
         // 返回比较结果
}
```

### **递增和递减运算符：**
```cpp
MyClass& operator++(MyClass& obj) 
{
         // 实现前置递增
         // 返回修改后的对象
}
```

### **赋值运算符：**
```cpp
MyClass& operator=(MyClass& a, const MyClass& b) 
{
         // 实现赋值操作
         // 返回修改后的对象
}
```

### **函数调用运算符：**

>也称为仿函数

```cpp
ReturnType operator()(MyClass& obj, /* 参数列表 */)
{
         // 实现函数调用
         // 返回结果
}
```

### **下标运算符：**
```cpp
ElementType& operator[](MyClass& obj, size_t index) 
{
         // 实现下标访问
         // 返回对应元素的引用
}
```
### 左移|右移运算符

```cpp
#include <iostream>

class MyClass {
private:
    int value;

public:
    MyClass() : value(0) {}

    // 重载左移运算符，用于输出对象
    friend std::ostream& operator<<(std::ostream& os, const MyClass& obj) {
        os << "Value: " << obj.value;
        return os;
    }

    // 重载右移运算符，用于输入对象
    friend std::istream& operator>>(std::istream& is, MyClass& obj) {
        is >> obj.value;
        return is;
    }
};

int main() {
    MyClass obj;

    // 从标准输入流输入对象的值
    std::cout << "Enter a value: ";
    std::cin >> obj;

    // 将对象的值输出到标准输出流
    std::cout << "Object details: " << obj << std::endl;

    return 0;
}
```