---
title: c++1.template
order : 1
category:
  - c++
---

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
每一次增加一个数据类型，就得重写写一次函数，使得代码非常冗余，有没有办法改进？
</ChatMessage>

```cpp
//这是普通函数写法
int add(int a , int b){
 return a > b ? a : b;
}
//函数重载
double add(double a , double b){
 return a > b ? a : b;
}
```

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
你可以使用函数模板。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40">
怎么用呢？
</ChatMessage>

## 函数模板

>语法：`template<typename T>`

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
当然一些调用规则需要牢记
</ChatMessage>

## 调用规则

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
你觉得下面的函数会调用那个版本？
</ChatMessage>


```cpp
#include <iostream>
//普通函数
int max(int a, int b)
{
std::cout << "调用普通函数" << std::endl;
return a > b ? a : b;
}

template<typename T>
T max(T a, T b) 
{
std::cout << "调用模板" << std::endl;
    return a > b ? a : b;
}

int main()
{
    int a = 10;
    int b = 20;
    std::cout << max(a, b) << std::endl;
}
```
<ChatMessage avatar="../../../assets/emoji/bqb (4).png" :avatarWidth="40">
我觉得应该会调用模板吧。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
然而事实上是优先调用普通函数，有多个函数或模板可以匹配调用时，编译器会选择最特定的版本。
</ChatMessage>

![](..%2Fassets%2Fptfunction.png)

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
那么我怎么强制他使用我的模板版本重载呢？
</ChatMessage>

### 2. 空模板参数列表强制使用模板|显式指定模板参数

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>

很简单，调用时加一对`<>`即可。

</ChatMessage>

```cpp
  std::cout << max<>(a, b) << std::endl;
```
![](..%2Fassets%2Ftemplatefunc.png)

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
当然，这不是绝对的，如果有一个更好的匹配时，也会优先使用模板函数
</ChatMessage>

### 3.有更好的匹配时，优先使用模板|如：使用不同数据类型

```cpp
int main() {
    int a = 10;
    double b = 20.5;
    std::cout << max(a, b) << std::endl;  // 使用不同类型的参数，可能更容易匹配模板函数
}
```

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
但需注意窄化转换。
</ChatMessage>

### 4.强制类型转换

```cpp
int main() {
    int a = 10;
    int b = 20;
    std::cout << max(static_cast<double>(a), static_cast<double>(b)) << std::endl;  // 使用强制类型转换，优先选择模板函数
}
```
### 5. 模板特化

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
模板并不是万能的，就拿这个例子来说，我们传入数组你看会发生什么？
</ChatMessage>

```cpp
int main() {
    int a[] = { 1, 2, 3 };
    int b[] = { 1, 2, 3 };
    std::cout << max(a, b) << std::endl;  // 使用不同类型的参数，可能更容易匹配模板函数
}
```
<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
打印了一串地址耶！
</ChatMessage>

![](..%2Fassets%2Farray.jpg)

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
没错，这时候咱们就需要特殊的处理一下这个版本，让他可以传入数组。
</ChatMessage>

```cpp
#include <iostream>

// 普通函数
int max(int a, int b)
{
    std::cout << "调用普通函数" << std::endl;
    return a > b ? a : b;
}

// 模板函数
template<typename T>
T max(T a, T b) 
{
    std::cout << "调用模板" << std::endl;
    return a > b ? a : b;
}

// 模板特化用于比较数组大小
template<typename T, size_t N>
T max(T (&a)[N], T (&b)[N])
{
    std::cout << "调用特化数组" << std::endl;
    T max_val = a[0];
    for (size_t i = 1; i < N; ++i) {
        if (a[i] > max_val) {
            max_val = a[i];
        }
    }
    return max_val;
}

int main() {
    int a[] = { 1, 2, 3 };
    int b[] = { 4, 2, 1 };
    std::cout << max(a, b) << std::endl;  // 调用特化数组，比较数组大小
    return 0;
}
```
### 6. 类模板和函数模板区别

>语法：`template<typename T> class`


| 特征                | 函数模板                                             | 类模板                                       |
|-------------------|--------------------------------------------------|-------------------------------------------|
| **用途**            | 创建泛型函数，处理多种数据类型                                  | 创建泛型类，处理多种数据类型                            |
| **定义方式**          | 使用 `template` 关键字定义，通常在函数声明或定义前加上模板声明            | 使用 `template` 关键字定义，通常在类声明或定义前加上模板声明      |
| **实例化**           | 在使用函数时，根据传递的实际参数类型生成对应的函数实例。可以显式指定模板参数，也可以根据参数推断 | 在使用类时，通常需要显式指定模板参数，因为编译器不能总是从上下文中推断出所需的类型 |
| **成员函数和成员变量的模板化** | 可以模板化整个函数，也可以只模板化函数的部分                           | 可以模板化整个类，包括成员函数和成员变量                      |

### 类模板成员函数创建时机

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
类模板（Class Template）和普通类（Non-Template Class）之间的主要区别在于成员函数的实例化时机。
</ChatMessage>

* **普通类：**
    - 成员函数的定义和实现通常在类的声明中完成。
    - 当实例化一个普通类的对象时，编译器会在链接时生成相应的函数代码，并将其与类的实例链接在一起。
    - 所有对象共享相同的函数实现。

   ```cpp
   // 普通类
   class MyClass {
   public:
       void myFunction() {
           // 函数实现
       }
   };
   ```

* **类模板：**
    - 成员函数的定义和实现通常也在类模板的声明中完成。
    - 然而，由于类模板是泛型的，函数代码的实例化是在使用时进行的，即在实例化模板的特定类型时生成。
    - 每个模板实例都有其独立的函数实现，针对特定的模板参数。

   ```cpp
   // 类模板
   template <typename T>
   class MyTemplateClass {
   public:
       void myFunction() {
           // 函数实现
       }
   };
   ```

   ```cpp
   // 实例化模板，生成特定类型的函数实现
   MyTemplateClass<int> obj1;
   MyTemplateClass<double> obj2;
   ```
