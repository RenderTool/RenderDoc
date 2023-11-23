---
title: c++
icon: c
dir:
  order: 1
category:
  - c++
tag:
  - 介绍
  - c++
---
![](assets%2FISO_C%2B%2B_Logo.svg =200x200)

## 须知

>万丈高楼平地起,这是U++的基石，这里许多演示都是基于UE蓝图/C++加深理解。

## c++

C++是一种被广泛使用的计算机程序设计语言。它是一种通用程序设计语言，支持多重编程范式，例如过程化程序设计、面向对象程序设计、泛型程序设计和函数式程序设计等。

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
比雅尼·斯特劳斯特鲁普博士在贝尔实验室工作期间在20世纪80年代发明并实现了C++。
</ChatMessage>

<!-- more -->


## 认识内存

![8颗粒内存](assets%2Fmenmory.jpg)

>防呆槽：防止内存条插反短路,以及区分型号  
SPD芯片：记录标准工作状态、速度、响应时间  
内存颗粒：数据存储在这里。

## c++注释

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
注释后编译器不会再执行，在UE中亦是如此。
</ChatMessage>

1. 单行注释用：

```cpp
//单行注释
```
2. 多行注释：

```cpp
/* 
*多行注释 
*多行注释 
*/
```

## c++保留关键字

![](assets%2Fcppgjz.jpg)

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
记不住，根本记不住。
</ChatMessage>

## c++变量

<ChatMessage avatar="../../assets/emoji/bqb02.png" :avatarWidth="45">
C++ 中的变量是程序可操作的存储区的名称。
</ChatMessage>

>**语法：数据类型 变量名 = 初始值。**

### 变量基本原则

1. 有意义
2. 首字母不能是数字
3. 大小写敏感
4. 不能用关键字
5. `__` `_`不会报错但不推荐

![](assets%2Fvar.png)

6. 名称长度不同平台现在不同

![感谢菜鸟教程的图片](assets%2Fcpp-variable-types-2020-12-14.png)

| 类型   | 示例                                                   | 作用域      | 生命周期                  |
|------|------------------------------------------------------|----------|-----------------------|
| 全局变量 | ` int globalVariable = 10;`                          | 整个程序     | 程序启动时分配内存，程序结束时销毁     |
| 局部变量 | `void exampleFunction() { int localVariable = 5; } ` | 定义它们的代码块 | 函数、代码块执行时分配内存，执行结束时销毁 |


<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
请注意！为变量分配地址和存储空间的称为定义，不分配地址的称为声明。<a href="/RenderDoc/language/cpp/BaseGuide_基础概念_/Variable%20Declaration_%20Definition.html">参考链接</a>
</ChatMessage>


### 引用变量

>语法：数据类型 & 变量名a = 变量名b

<ChatMessage avatar="../../assets/emoji/bqb (7).png" :avatarWidth="40">
引用变量就是给变量起一个别名。
</ChatMessage>

```cpp
#include <string>

string mainname = "关羽";
string othernmae = "关云长";
string& othername = mainname ;

/*关羽
  *^
  *|
  *+--- 关公
  *|
  *+--- 关云长
*/
```
<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
在C++中，“&” 符号的用法确实有点让人迷惑，具体取决于上下文。
</ChatMessage>


1. **取地址：**
   - 当 `&` 用于变量前时，它是取地址符，用于获取变量的地址。

   ```cpp
   int x = 10;
   int *ptrX = &x;  // & 用于取 x 的地址，ptrX 现在存储 x 的地址
   ```

2. **引用声明：**
   - 当 `&` 用于声明变量时，它表示引用类型。

   ```cpp
   int x = 10;
   int &refX = x;  // & 用于声明 refX 是 x 的引用
   ```
   
## c++ 指针
指针是一种特殊的变量，其存储的是内存地址，即另一个变量的地址。
可以将指针看作是存储内存地址的变量，通过指针可以访问或操作该地址上存储的数据。
>语法：type* var_name;


### 初始化

``` cpp
//初始化指针
int *p = NULL;
```

![](assets%2Fptr.png)

``` cpp
#include <iostream>
using namespace std;

int main() {
    // 定义整数变量 b 并赋值为 10
    int b = 10;

    // 定义整型指针 p 并将其指向 b 的地址
    int* p = &b;

    // 打印 b 的地址
    cout << "b 的地址: " << &b << endl;

    // 打印指针 p 存储的地址，即 b 的地址
    cout << "指针 p 存储的地址: " << p << endl;

    // 打印指针 p 指向的值，即 b 的值
    cout << "指针 p 指向的值: " << *p << endl;

    // 打印指针 p 本身的地址
    cout << "指针 p 本身的地址: " << &p << endl;

    return 0;
}

```

### 野指针
>访问非法空间。

### 数组指针

![](assets%2FR.jpg)

## c++常量

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
常量是固定值，在程序执行期间不会改变。这些固定的值，又叫做字面量
</ChatMessage>

>常量的几种形式

### 1. #define[宏常量]预处理[#c++预处理器]

>**语法:#define MACRO_NAME replacement-text**

```cpp
#include <iostream>
using namespace std;
 
#define PI 3.14159
 
int main ()
{
 
    cout << "Value of PI :" << PI << endl; 
 
    return 0;
} 
```
### 2. const[修饰的变量]

>**语法: const 数据类型 变量名 = 值(必须有初始值)**

![](assets%2Fconst.png)

![](assets%2Fdefineconst.png)

### 3. constexpr

在C++中，`constexpr`用于在编译时计算表达式的值。以下是使用`constexpr`的几种常见情况：

1. **声明常量：**
   ```cpp
   constexpr int myConst = 42;
   ```

2. **定义`constexpr`函数：**
   ```cpp
   constexpr double square(double x) {
       return x * x;
   }
   ```

3. **使用`constexpr`函数：**
   ```cpp
   constexpr double result = square(3.14);
   ```

4. **在数组的大小声明中使用`constexpr`：**
   ```cpp
   int arr[square(3)]; // 使用constexpr函数在数组大小声明中
   ```

5. **在模板中使用`constexpr`：**
   ```cpp
   template <int N>
   void myFunction() {
       // 使用N，这是在编译时已知的常量
   }

   int main() {
       myFunction<square(4)>();
       return 0;
   }
   ```

6. **C++11中`constexpr`函数的限制：**
   在C++11中，`constexpr`函数有一些限制，例如只能包含一行的返回语句。在C++14及更高版本中，这些限制得到了放宽，允许更复杂的函数体。

7. **C++17中的`constexpr if`：**
   C++17引入了`constexpr if`，它使得在`constexpr`上下文中可以使用更灵活的条件语句。

示例：
```cpp
template <typename T>
constexpr T max(T a, T b) {
    return a > b ? a : b;
}

int main() {
    constexpr int result = max(3, 5);
    return 0;
}
```

## c++数据类型

以下是标准C++和（Unreal Engine）UC++中一些常见数据类型的对比表格：

| 数据类型   | 标准C++                         | UE C++                           |
|--------|-------------------------------|----------------------------------|
| 整数     | int, long, short, char, etc.  | int32, int16, int8, uint32, etc. |
| 浮点数    | float, double                 | float, double                    |
| 字符串    | std::string                   | FString                          |
| 字符     | char                          | TCHAR                            |
| 布尔     | bool                          | bool                             |
| 数组     | std::vector, std::array, etc. | TArray                           |
| 结构体    | struct                        | USTRUCT                          |
| 类      | class                         | UCLASS                           |
| 指针     | *                             | *                                |
| 引用     | &                             | &                                |
| 枚举     | enum                          | UENUM                            |
| 构造函数   | ClassName()                   | ClassName()                      |
| 析构函数   | ~ClassName()                  | ~ClassName()                     |
| 命名空间   | namespace                     | NAMESPACE                        |
| 模板     | `template <typename T> `      | TEMPLATETYPE                     |
| 指定类型别名 | using                         | using                            |


### 数据类型—基本类型

![官方图解内存占用图](assets%2Fisocpp%20type.png)

![对照UE引擎](assets%2Fdatatyoe.png)

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
记不住！打死记不住！使用sizeof可以确定该类型占用内存大小。
</ChatMessage>

>**语法:sizeof(变量名)**

```cpp
#include <iostream>
using namespace std;
int main()
{
	int a = 1;
    cout << sizeof(a)<< endl;
    return 0;
}
```

### 数据类型-字符串
>**语法： string 变量名 = "字符串";**

![](assets%2Fstring.jpg)

## c++数组

> **语法: type arrayName [ arraySize ];**

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
所有的数组都是由连续的内存位置组成。最低的地址对应第一个元素，最高的地址对应最后一个元素。<br>
注意这里的数组长度 = 索引+1,因为索引从0开始。
</ChatMessage>

![](assets%2Farray.png)

``` cpp
-- 创建一个数组
int myArray[5] = {10, 20, 30, 40, 50}
```


### 数据类型—枚举

>**语法：enum 枚举名{值1,值2,值3};**

#### 旧式枚举（Old-style Enumerations）：
```cpp
enum Color {
    Red, 
    Blue, 
    Green
};
Color myColor = Red;
```
<ChatMessage avatar="../../assets/emoji/bqb (5).png" :avatarWidth="40">
C++11 引入了枚举类，也称为范围枚举。枚举类的语法更严格，它引入了作用域。这也是UE中主流枚举
</ChatMessage>

#### 枚举类（Scoped Enumerations / Enum Classes）：

>**语法：enum class 枚举名{值1,值2,值3};**

```cpp
UENUM(BlueprintType)
enum class EWidgetInputMode : uint8
{
	Default,
	GameAndMenu,
	Game,
	Menu
};
EWidgetInputMode myMode = EWidgetInputMode::Game;
```
### 数据类型—结构体

>**语法：struct 结构体名{成员1;成员2;成员3;};**

```cpp
struct Point {
    int x;
    int y;
}
```
<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
细心的你可能已经注意到了struct和class很像，只不过struct成员都是public,class可以prvate成员。
</ChatMessage>

>UE中结构体

```cpp
USTRUCT(BlueprintType)
struct FPerson
{
    GENERATED_USTRUCT_BODY()

    UPROPERTY()
        int32 P_ID;//整型

    UPROPERTY()
        FName P_Name;//字符串注重表现只读

    UPROPERTY()
        FString P_Direction;//字符串

    UPROPERTY()
        AActor* SelfPointer;//actor

    void SetP_Name(FName In_Name) { P_Name = In_Name; }//内联函数

    AActor* GetSelfPointer() { return SelfPointer; }

    FPerson()
    {
        P_ID = 0;
        P_Name = TEXT("snowing");
        P_Direction = TEXT("this is a dog");
        SelfPointer = nullptr;
    }

};

```


## c++运算符

| 运算符类型         | 描述                                     | 示例                                                        |
|---------------|----------------------------------------|-----------------------------------------------------------|
| 算术运算符         | 执行基本的数学运算                              | `+, -, *, /, %`                                           |
| 关系运算符         | 比较两个值之间的关系                             | `==, !=, <, >, <=, >=`                                    |
| 逻辑运算符         | 执行逻辑操作                                 | `&&,                                                      ||, !`           |
| 位运算符          | 对二进制位进行操作                              | `&,                                                       |, ^, ~, <<, >>`   |
| 赋值运算符         | 将值赋给变量                                 | `=, +=, -=, *=, /=, %=`                                   |
| 自增自减运算符       | 增加或减少变量的值 ![](assets%2F%2B%2B--.png)   | `++, --`                                                  |
| 条件运算符         | 三元运算符，根据条件返回值 ![](assets%2Fselect.jpg) | `condition ? expr1 : expr2`                               |
| 逗号运算符         | 用于在一个语句中执行多个表达式，返回最后一个表达式的值            | `expr1, expr2, expr3`                                     |
| 成员访问运算符       | 访问类或结构体的成员                             | `., ->`                                                   |
| 类型转换运算符       | 将一个类型转换为另一个类型                          | `static_cast, dynamic_cast, const_cast, reinterpret_cast` |
| sizeof运算符     | 返回数据类型的大小（以字节为单位）                      | `sizeof(type)`                                            |
| 地址运算符         | 返回变量的地址                                | `&`                                                       |
| 指针运算符         | 用于声明指针及操作指针                            | `*, ->`                                                   |
| new和delete运算符 | 用于动态分配和释放内存                            | `new, delete`                                             |

<ChatMessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
记不住，根本记不住。
</ChatMessage>

### static_cast

static_cast 是 C++ 中的一个类型转换运算符，用于执行编译时的类型转换。它允许你在已知类型之间进行显式的类型转换，以便在某些情况下，将一个类型转换为另一个类型。
>语法 ：

```cpp
static_cast<目标类型>(表达式)
```
例子：

```cpp
// int to double
int intValue = 5;
double doubleValue = static_cast<double>(intValue);

//类继承关系转换
class Base {};
class Derived : public Base {};

Base* basePtr = new Derived;
Derived* derivedPtr = static_cast<Derived*>(basePtr);

//枚举类型之间的转换：
enum class MyEnum { Value1, Value2 };
int enumValue = static_cast<int>(MyEnum::Value1);

//指针之间的转换
int* intPtr = &intValue;
void* voidPtr = static_cast<void*>(intPtr);

```


## c++循环语句

### 1. for

![](assets%2Ffor.png)

::: code-tabs#shell
@tab:active  cpp

```cpp
for(int a = 0 ;a<10;a++){
//对应到c++这里的int a = 0 就是exp1,a<10就是exp2 ,a++就是exp3
}
```
@tab lua

```lua
--c++ 编程语言中数值 for 循环语法格式:
--其中exp3对标 步长默认是1，默认可以不写
for var=exp1,exp2,exp3 do  
    <执行体>  
end  
```
:::

### 2. while

![](assets%2Fwhile.png)

::: code-tabs#shell

@tab:active  cpp

```cpp
while (i < 10) {
    std::cout<<i<<std::endl;
    i = i + 1
}
```
@tab lua

```lua

i = 1
while (i < 10) do
    print(i)
    i = i + 1 
end
```

:::

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
满足条件后循环
</ChatMessage>

### 3. do while

::: code-tabs#shell

@tab:active  cpp

```cpp
i = 1
do{
    std::cout<<i<<std::endl;
     i = i + 1
}while (i > 10);
```
@tab lua

```lua
i = 1
repeat
    print(i)
    i = i + 1
until (i > 10)
```
:::

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
先循环再判断条件。
</ChatMessage>

## c++条件语句
### 1.if

![](assets%2Fif.jpg)

::: code-tabs#shell

@tab:active  cpp

```cpp
if (true) {
    std::cout<<"0 为 true"<<std::endl;
}
```
@tab lua

```lua 
--[ 0 为 true ]
if(0)
then
    do
    print("0 为 true")
    end
    --这里的do end可以省略。
end
```
:::


### 双引号

```cpp
string str = "Hello"
```


## c++预处理器

1. `#define`宏

2. `#ifndef #define NULL 0 #endif`
>UE中很常见的编辑器使用
````cpp
#if WITH_EDITOR
    ActorName = this->GetName();
#endif
}
````
<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
这里要特别注意，头文件中如果是变量则要用#if WITH_EDITOR_DATA
</ChatMessage>

3. `# 和 ## 运算符`

`#` 和 `##` 是预处理运算符，它们用于宏定义和宏展开。下面是它们的简单示例：

### `#` 预处理运算符

`#` 运算符用于将宏参数转换为字符串字面量。这在创建带有参数的消息或调试信息时很有用。

```c
#include <stdio.h>

#define STRINGIFY(x) #x

int main() {
    int num = 42;
    printf("The value of num is: %s\n", STRINGIFY(num));
    return 0;
}
```

在这个例子中，`STRINGIFY` 宏将其参数转换为字符串字面量，使得 `STRINGIFY(num)` 在编译时展开为 `"num"`。

### `##` 预处理运算符

`##` 运算符用于连接两个标识符，创建新的标识符。这在宏定义中可以用于将参数连接到其他标识符上。

```cpp
#include <stdio.h>

#define CONCAT(x, y) x##y

int main() {
    int xy = 42;
    printf("The value of xy is: %d\n", CONCAT(x, y));
    return 0;
}
```

在这个例子中，`CONCAT` 宏使用 `##` 将 `x` 和 `y` 连接成一个新的标识符 `xy`，使得 `CONCAT(x, y)` 在编译时展开为 `xy`。

需要注意的是，这些运算符在使用时需要小心，因为滥用可能导致代码可读性下降。

4.预定义宏

### `__LINE__, __FILE__, __DATE__, 和 __TIME__`

```cpp
#include <iostream>

int main() {
    // 获取当前行号
    std::cout << "Current line number is: " << __LINE__ << std::endl;

    // 获取当前文件名
    std::cout << "Current file is: " << __FILE__ << std::endl;

    // 获取编译日期
    std::cout << "Compilation date is: " << __DATE__ << std::endl;

    // 获取编译时间
    std::cout << "Compilation time is: " << __TIME__ << std::endl;

    return 0;
}

```

## c++函数

![](assets%2Ffunction.png)

### 函数签名

>语法：

``` cpp
返回类型 函数名(参数1，参数2，参数...)
{
   // 函数体语句
    retrun 表达式 
}
```
<hr>

### 函数调用

>语法：函数名(参数1，参数2，参数...)

<hr>

### 参数和可变参数

| 术语        | 描述                         | 示例                                                              |
|-----------|----------------------------|-----------------------------------------------------------------|
| 形参（形式参数）  | 函数定义中的参数，是用来接收传递给函数的值的变量   | `void printNumber(int x)`，其中 `x` 是形参                            |
| 实参（实际参数）  | 函数调用中的参数，是实际传递给函数的值        | `printNumber(42)`，其中 `42` 是实参                                   |
| 可变参数 (模板) | 函数定义中使用的特殊参数，允许函数接受不定数量的实参 | `void printValues(T value, Args... args)`，其中 `Args...` 表示可变参数模板 |

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
c++ 使用三点 ... 表示可变参数。
</ChatMessage>

### 值传递和引用传递

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
函数调用时均不会改变参数，调用完成后引用传递可能改变参数。
</ChatMessage>

<hr>

### 默认实参
默认实参（Default Arguments）是 C++ 函数的一种特性。  
声明时特定函数指定某些值，但想要注意一旦出现默认参数，后面都需要有参数。  
调用时可以省略这些参数。  
```cpp
int a( int x, int y = 0, int z = 0 ,int w;//错误一但之前用了默认实参后面都得有。)
{
return 0;
}
```

## c++类
>语法：class 类名{ public: 成员变量; private: 成员变量; protected: 成员变量; };

![](assets%2Fclassdefine.png)

```cpp
class Point {
public:
    int x;
    int y;
    //函数
    void print() {
        cout << x << "," << y << endl;
    }
};

//访问成员变量
Point p;
p.x = 1;

//访问成员函数
p.print();

```

![](assets%2Fvisit.png)

### 访问控制和继承
>派生类可以访问基类中所有的非私有成员。因此基类成员如果不想被派生类的成员函数访问，则应在基类中声明为 private。

| 访问     | 同一个类 | 派生类 | 外部的类 |
| -------- | ------- | ------ | -------- |
| Public   | Yes     | Yes    | Yes      |
| Protected| Yes     | Yes    | No       |
| Private  | Yes     | No     | No       |


### 静态成员(Static Member Function)和普通成员函数(Non-Static Member Function)

| 特性        | 静态成员函数                         | 非静态成员函数              |
|-----------|--------------------------------|----------------------|
| 归属        | 整个类                            | 类的每个实例               |
| 对象实例      | 不需要实例，直接属于类                    | 需要类的实例，每个对象都可以调用     |
| "this" 指针 | 不可用，因为没有特定的对象实例                | 可用，指向调用该函数的对象        |
| 调用方式      | 类名::函数名() 调用                   | 对象实例.函数名() 调用        |
| 操作类的状态    | 可以操作类的静态成员，但不能访问非静态成员          | 可以操作和访问类的非静态成员       |
| 内存分配      | 不需要对象实例，因此不需要分配对象的内存空间         | 需要对象实例，因此需要分配对象的内存空间 |
| 使用场景      | 适用于执行与整个类相关的操作，如工具函数(UE蓝图函数库类) | 适用于处理特定对象的特定行为       |


### 构造（Constructor）和析构（Destructor）

1. 类的构造函数是类的一种特殊的成员函数，它会在每次创建类的新对象时执行。

```cpp
class MyClass {
public:
    MyClass() {
        // 构造函数的代码，初始化对象
    }
};
```
2. 析构函数是类的一种特殊的成员函数，它会在每次删除所创建的对象时执行。
```cpp
class MyClass {
public:
    ~MyClass() {
        // 析构函数，删除对象
    }
};
```
### 重载（Overloading）和重写（Overriding）

1. 函数重载（Overloading）
   是指在同一个作用域内，可以定义多个同名但参数列表不同的函数。  
   重载的函数可以有不同的参数类型、参数个数或参数顺序，编译器根据调用时提供的参数来确定调用哪个函数重载。

```cpp
class MyClass{
public:
MyClass(int a);
MyClass(float a);
MyClass(const float a);//顶层const 无法重载
MyClass(const float* a);//底层const可以重载
};
```
#### 函数匹配

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
编译器自动选择版本的过程叫函数匹配，是自动完成的，但需要注意二义问题。
</ChatMessage>


2. 函数重写（Overriding）
   是面向对象编程中的概念，它发生在继承关系中。子类可以在继承自父类的函数基础上重新定义相同名称和参数列表的函数，这就是函数重写。
   重写的函数在子类中实现了与父类同名的函数，但可能有不同的实现逻辑。

```cpp
#include <iostream>

// 基类
class Animal {
public:
    // 虚函数，可以被子类重写
    virtual void eat() const {
        std::cout << "Animal eat" << std::endl;
    }
     virtual void sleep() const {
        std::cout << "Animal sleep" << std::endl;
    }
};

// 派生类
class Dog : public Animal {
public:
    // 重写基类中的虚函数
    void eat() const override {
        std::cout << "Dog eat" << std::endl;
    }
    void bark() {
        std::cout << "Dog bark" << std::endl;
    }
};

// 另一个派生类
class Cat : public Animal {
public:
    // 重写基类中的虚函数
    void sleep() const override {
        std::cout << "Cat sleep" << std::endl;
    }
};

int main() {
    // 创建基类指针
    Animal* animalPtr;

    // 创建派生类对象
    Dog myDog;
    Cat myCat;

    // 指向派生类对象的指针
    animalPtr = &myDog;
    // 调用虚函数，将调用 Dog 类的版本
    animalPtr->eat();
    animalPtr->bark();

    // 指向另一个派生类对象的指针
    animalPtr = &myCat;
    // 调用虚函数，将调用 Cat 类的版本
    animalPtr->sleep();

    return 0;
}

```
### 多级继承和多重继承
>很简单，多级继承好比一个类的有无穷无尽的孙子。而多重继承好比你继承的爸妈各自的基因。

#### 多级继承
```cpp
// 基类（父类）
class MyClass {
  public:
    void myFunction() {
      cout << "Some content in parent class." ;
    }
};

// 派生类（子类）
class MyChild: public MyClass {
};

// 派生类（孙类）
class MyGrandChild: public MyChild {
};

int main() {
  MyGrandChild myObj;
  myObj.myFunction();
  return 0;
}
```
#### 多重继承
```cpp
// 基类
class MyClass {
  public:
    void myFunction() {
      cout << "Some content in parent class." ;
    }
};

// 另一个基类
class MyOtherClass {
  public:
    void myOtherFunction() {
      cout << "Some content in another class." ;
    }
};

// 派生类
class MyChildClass: public MyClass, public MyOtherClass {
};

int main() {
  MyChildClass myObj;
  myObj.myFunction();
  myObj.myOtherFunction();
  return 0;
}
```

### 模板函数
先来看一个函数重载案例：

```cpp
//这是普通函数写法
int add(int a , int b){
return a + b;
}
//函数重载
double add(double a , double b){
return a + b;
}
```

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
每一次增加一个数据类型，就得重写写一次函数，使得代码非常冗余，模板函数应需而生。
</ChatMessage>

>语法：`template<typename T>`

1. 先写一遍普通函数
```cpp
void point(int x = 1 ,int y = 1)
{
return x + y ;
}
```
2. 模板化就是把这些数据类型替换成一个通用符号

```cpp
//告诉编译器我要写模板了
template<typename T>
T point(T x = 1 ,T y = 1)
{
return x + y ;
}
//调用
point<int>();//指定数据类型
point();//直接调用。
```
3. 既然有了模板，那么我希望他有特殊版本怎么办？这就是模板特化

```cpp
#include <iostream>

// 通用模板类
template <typename T>
class Box {
public:
    Box(const T& value) : data(value) {}

    void display() {
        std::cout << "Generic Box: " << data << std::endl;
    }

private:
    T data;
};

// 模板特化：针对字符串类型的定制实现
template <>
class Box<std::string> {
public:
    Box(const std::string& value) : data(value) {}

    void display() {
        std::cout << "Specialized Box for Strings: " << data << std::endl;
    }

private:
    std::string data;
};

int main() {
    // 使用通用模板类
    Box<int> intBox(42);
    intBox.display();

    // 使用模板特化类
    Box<std::string> stringBox("Hello, Template Specialization!");
    stringBox.display();

    return 0;
}

```

## c++多态
C++多态(polymorphism)是通过虚函数来实现的，虚函数允许子类重新定义成员函数，而子类重新定义父类的做法称为覆盖(override)，或者称为重写。

![](assets%2Fc16d7b91-9e62-4008-a36c-3d69b17ada95.png)

### 虚函数|virtual function
>语法父类：

```cpp
class 父类
{ 
   virtual 类型 函数名 (参数表); 
};
class 子类 public 父类
{ 
   virtual 类型 函数名(参数表) override; 
};
```

虚函数（Virtual Function）是一种特殊类型的函数，用于实现多态性（Polymorphism），我们之前的案例中就用了。
虚函数允许派生类（子类）重写基类（父类）中定义的函数，并在运行时根据对象的实际类型调用正确的函数实现。

### 纯虚函数|pure virtual function
>语法：

```cpp
class 类名
{ 
   virtual 类型 函数名(参数表) = 0 ; 
};
```
在基类中定义虚函数，以便在派生类中重新定义该函数更好地适用于对象，但不希望基类中对虚函数给出有意义的实现，这个时候就会用到纯虚函数。

```cpp
class Shape {
   protected:
      int width, height;
   public:
      Shape( int a=0, int b=0)
      {
         width = a;
         height = b;
      }
      // pure virtual function
      virtual int area() = 0;
};
```


### 封装 

必须将类变量/属性声明为 private （不能从类外部访问）。
如果希望其他人读取或修改私有成员的值，可以提供公共get和set方

```cpp
#include <iostream>
using namespace std;

class Employee {
  private:
    // 私有属性
    int salary;

  public:
    // Setter
    void setSalary(int s) {
      salary = s;
    }
    // Getter
    int getSalary() {
      return salary;
    }
};

int main() {
  Employee myObj;
  myObj.setSalary(50000);
  cout << myObj.getSalary();
  return 0;
}
```
### c++异常处理

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
C++中的异常处理包括三个关键字： try, throw and catch:
</ChatMessage>

```cpp
try {
   // 要尝试的代码块
  throw exception; // 出现问题时抛出异常
}
catch () {
   // 处理错误的代码块
}
```

### c++命名空间
>语法：

```cpp
namespace 命名空间名 {
   // 命名空间中的变量/函数
}
```
>调用语法：

```cpp
命名空间名::code;
```

#### using 指令

>使用 using namespace 指令，这样在使用命名空间时就可以不用在前面加上命名空间的名称。
这个指令会告诉编译器，后续的代码将使用指定的命名空间中的名称。

#### 命名空间可以镶嵌

```cpp
#include <iostream>
using namespace std;
 
// 第一个命名空间

namespace first_space{
   void func(){
      cout << "Inside first_space" << endl;
   }
}
// 第二个命名空间

namespace second_space{
   void func(){
      cout << "Inside second_space" << endl;
   }
}
int main ()
{
 
   // 调用第一个命名空间中的函数

   first_space::func();
   
   // 调用第二个命名空间中的函数

   second_space::func(); 
 
   return 0;
} 
```

## 参考链接
- [wiki](https://zh.wikipedia.org/wiki/c++)
- [菜鸟教程]("https://www.runoob.com/c++/c++-functions.html")
