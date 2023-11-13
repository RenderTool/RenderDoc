---
title: c++
icon: c
dir:
  order: 1
category:
  - 基础知识
tag:
  - 介绍
  - c++
---
![](assets%2FISO_C%2B%2B_Logo.svg =200x200)

## 须知

>万丈高楼平地起,这是U++的基石,本站只是简单介绍一下c++基础，具体入门还是看大佬教程吧，重点还是关注我自己的项目问题。

## c++

C++是一种被广泛使用的计算机程序设计语言。它是一种通用程序设计语言，支持多重编程范式，例如过程化程序设计、面向对象程序设计、泛型程序设计和函数式程序设计等。

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
比雅尼·斯特劳斯特鲁普博士在贝尔实验室工作期间在20世纪80年代发明并实现了C++。
</ChatMessage>

<!-- more -->

## c++注释

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
注释后编译器不会再执行。
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

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
C++ 中的变量是程序可操作的存储区的名称。
</ChatMessage>

>**语法：数据类型 变量名 = 初始值。**

![感谢菜鸟教程的图片](assets%2Fcpp-variable-types-2020-12-14.png)

| 类型   | 示例                                                           | 作用域      | 生命周期                  |
|------|--------------------------------------------------------------|----------|-----------------------|
| 全局变量 | ```cpp int globalVariable = 10; ```                          | 整个程序     | 程序启动时分配内存，程序结束时销毁     |
| 局部变量 | ```cpp void exampleFunction() { int localVariable = 5; } ``` | 定义它们的代码块 | 函数、代码块执行时分配内存，执行结束时销毁 |

## c++常量

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
常量是固定值，在程序执行期间不会改变。这些固定的值，又叫做字面量
</ChatMessage>

>常量的两种形式

### 1. #define[宏常量] #define

>**语法:#define MACRO_NAME 值**

```cpp
#define day 7
```
### 2. const[修饰的变量] #define

>**语法: const 数据类型 变量名 = 值**

![](assets%2Fconst.png)

![](assets%2Fdefineconst.png)

## c++左右值

[左右值](https://nettee.github.io/posts/2018/Understanding-lvalues-and-rvalues-in-C-and-C/)

## c++数据类型

![](assets%2Fdatatyoe.png)

| 类别        | 类型                  | 描述                                           |
|-----------|---------------------|----------------------------------------------|
| **整数类型**  | int                 | 用于表示整数，通常占用4个字节。                             |
|           | short               | 用于表示短整数，通常占用2个字节。                            |
|           | long                | 用于表示长整数，通常占用4个字节。                            |
|           | long long           | 用于表示更长的整数，通常占用8个字节。                          |
| **浮点类型**  | float               | 用于表示单精度浮点数，通常占用4个字节。![](assets%2Ffloat.png)  |
|           | double              | 用于表示双精度浮点数，通常占用8个字节。![](assets%2Fdouble.png) |
|           | long double         | 用于表示更高精度的浮点数，字节数实现相关。                        |
| **字符类型**  | char                | 用于表示字符，通常占用1个字节。                             |
|           | wchar_t             | 用于表示宽字符，通常占用2或4个字节。                          |
|           | char16_t            | 用于表示16位Unicode字符，占用2个字节。                     |
|           | char32_t            | 用于表示32位Unicode字符，占用4个字节。                     |
| **布尔类型**  | bool                | 用于表示布尔值，只能取true或false。                       |
| **枚举类型**  | enum                | 用于定义一组命名的整数常量。                               |
| **指针类型**  | type*               | 用于表示指向类型为type的对象的指针。                         |
| **数组类型**  | type[] 或 type[size] | 用于表示具有相同类型的元素组成的数组。                          |
| **结构体类型** | struct              | 用于定义包含多个不同类型成员的结构。                           |
| **类类型**   | class               | 用于定义具有属性和方法的自定义类型。                           |
| **共用体类型** | union               | 用于定义一种特殊的数据类型，可以在相同的内存位置存储不同的数据类型。           |


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
## c++运算符

| 运算符类型       | 描述                                             | 示例                   |
|-------------------|--------------------------------------------------|------------------------|
| 算术运算符        | 执行基本的数学运算                               | `+, -, *, /, %`       |
| 关系运算符        | 比较两个值之间的关系                             | `==, !=, <, >, <=, >=` |
| 逻辑运算符        | 执行逻辑操作                                     | `&&, ||, !`           |
| 位运算符          | 对二进制位进行操作                               | `&, |, ^, ~, <<, >>`   |
| 赋值运算符        | 将值赋给变量                                     | `=, +=, -=, *=, /=, %=`|
| 自增自减运算符    | 增加或减少变量的值 ![](assets%2F%2B%2B--.png)                           | `++, --`              |
| 条件运算符        | 三元运算符，根据条件返回值 ![](assets%2Fselect.jpg)                    | `condition ? expr1 : expr2` |
| 逗号运算符        | 用于在一个语句中执行多个表达式，返回最后一个表达式的值 | `expr1, expr2, expr3`  |
| 成员访问运算符    | 访问类或结构体的成员                             | `., ->`               |
| 类型转换运算符    | 将一个类型转换为另一个类型                       | `static_cast, dynamic_cast, const_cast, reinterpret_cast` |
| sizeof运算符      | 返回数据类型的大小（以字节为单位）               | `sizeof(type)`        |
| 地址运算符        | 返回变量的地址                                   | `&`                   |
| 指针运算符        | 用于声明指针及操作指针                           | `*, ->`               |
| new和delete运算符  | 用于动态分配和释放内存                           | `new, delete`         |

<ChatMessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
记不住，根本记不住。
</ChatMessage>

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



## c++函数

![](assets%2Ffunction.png)

>语法： 

``` cpp
返回类型 函数名(参数1，参数2，参数...)
{
   // 函数体语句
    retrun 表达式 
}
```
<hr>

### 调用

>语法：函数名(参数1，参数2，参数...)

<hr>

### 参数

| 术语        | 描述                                          | 示例                   |
|-----------|-----------------------------------------------|------------------------|
| 形参（形式参数）  | 函数定义中的参数，是用来接收传递给函数的值的变量  | `void printNumber(int x)`，其中 `x` 是形参 |
| 实参（实际参数）  | 函数调用中的参数，是实际传递给函数的值          | `printNumber(42)`，其中 `42` 是实参  |
| 可变参数 (模板) | 函数定义中使用的特殊参数，允许函数接受不定数量的实参 | `void printValues(T value, Args... args)`，其中 `Args...` 表示可变参数模板 |


#### 可变参数

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
c++ 使用三点 ... 表示可变参数。
</ChatMessage>

<hr>

#### 值传递

>函数调用时，实参传递给形参。  
传递时：形参改变不会影响实参。


## c++字符串

![](assets%2Fstring.jpg)

### 双引号

```cpp
string str = "Hello"
```

## c++数组

所有的数组都是由连续的内存位置组成。最低的地址对应第一个元素，最高的地址对应最后一个元素。

> **语法: type arrayName [ arraySize ];**

![](assets%2Farray.png)

``` c++
-- 创建一个数组
int myArray[5] = {10, 20, 30, 40, 50}
```

## 参考链接
- [wiki](https://zh.wikipedia.org/wiki/c++)
- [菜鸟教程]("https://www.runoob.com/c++/c++-functions.html")
