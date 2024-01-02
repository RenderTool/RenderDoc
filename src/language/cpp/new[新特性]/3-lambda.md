---
title: c++3.lambda表达式
order : 3
category:
  - c++
---

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
Baba!lambda表达式是什么？
</chatmessage>

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" alignLeft >
你可能注意到这里由lambda+表达式构成虽然这像一句废话。
提到表达式你的第一反应是什么？
</chatmessage>

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
数学，各种公式、函数:f(x) = x2;
</chatmessage>

<chatmessage avatar="../../../assets/emoji/new2.png" :avatarWidth="40" alignLeft >
没错，在数学中，函数通常被表示为一个映射关系，将输入映射到输出。这种函数往往非常纯粹、简单。
也就是我们常说的函数式编程思想。
</chatmessage>


## 函数式编程

>函数式编程（Functional Programming）是一种编程范式，它将计算视为数学函数的求值，并避免了可变状态和可变数据。
函数式编程强调函数的纯粹性、不可变性和无副作用，这些特性使得程序更容易推理、测试和并行化。

![](..%2Fassets%2Fv2-a1c0823ffa71cf6a5adba2ba913c0e1a_1440w.jpg)

<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft >
在面向对象思想中强调“必须通过对象的形式来做事情”，而函数式编程强调的是通过函数的组合和变换来实现程序逻辑，而不是通过改变状态的方式。
</chatmessage>

## lambda表达式

### 定义
<chatmessage avatar="../../../assets/emoji/new5.png" :avatarWidth="40" alignLeft >
Lambda表达式是一种轻量级的匿名函数，它可以直接在代码中定义，不需要事先命名，非常适合在函数式编程中使用。
</chatmessage>

### 语法

```cpp
[capture](parameters) -> return_type {
    // 函数体
}
```

* []：这是捕获列表，指定 lambda 表达式中使用的外部变量。
* ()：这是参数列表，类似于普通函数的参数列表。
* ->：这是一个箭头符号，用于指定返回类型。如果没有指定，编译器会自动推断返回类型。
* {}：这是函数体，包含了实际的代码。

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40"  >
那么说Lambda表达式可以被理解为编程中的一种类似于数学中函数的表达方式?
</chatmessage>

<chatmessage avatar="../../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
Lambda表达式可以看作是一个匿名函数，它描述了一段代码块，可以接受一些输入参数并返回结果。
这类似于数学中的函数，其中输入参数对应于函数的自变量，而返回值对应于函数的因变量。
</chatmessage>

>例如，在数学中，我们可能有一个函数：

\[ f(x) = x^2 \]

在编程中，可以使用Lambda表达式来表示类似的逻辑：

```cpp
 auto square = [](int x) 
 {
   return x * x;
 };
```

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40"  >
为什么你这里没有->?
</chatmessage>

<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft >
根据lambda规则如果没有指定，编译器会自动推断返回类型就不需要加->。
</chatmessage>

>如果Lambda表达式的函数体更复杂，无法通过单一的return语句确定返回类型，或者你想要显式指定返回类型，那么你可以使用`->`符号来指定返回类型，例如：

```cpp
auto complexLambda = [](int x) -> double {
    // 复杂的函数体
    return static_cast<double>(x * x);
};
```

在这个例子中，`-> double` 显式指定了Lambda表达式的返回类型为 `double`。


### 特点

1. **匿名性：** Lambda表达式是匿名的，不需要显式地定义函数的名称。
2. **紧凑性：** Lambda表达式通常非常简洁，可以在一行内完成函数的定义。
3. **传递行为：** Lambda表达式可以作为参数传递给其他函数，从而实现更灵活的编程模式。

### 其他例子

```cpp
// Lambda 表达式示例
auto sum = [](int a, int b) -> int {
    return a + b;
};

// 使用 Lambda 表达式
int result = sum(5, 3); // result = 8
```
<chatmessage avatar="../../../assets/emoji/new3.png" :avatarWidth="40"  >
以前总不理解，你说了函数式编程后我把它理解成一个数学公式就简单多了！
</chatmessage>

