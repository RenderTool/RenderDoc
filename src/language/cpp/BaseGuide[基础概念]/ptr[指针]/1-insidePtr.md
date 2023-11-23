---
title: c++指针是什么？
order : 2
category:
  - c++
---
## inside指针

<ChatMessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40">
一直在说指针，可我怎么就怎么迷糊呢？能不能帮我理解理解？
</ChatMessage>

<ChatMessage avatar="../../../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
牢记这几个概念：
</ChatMessage>

## 概念

语法：type* var_name;

![](..%2F..%2Fassets%2Fptr.png)

1. **指针是个存储地址的变量：**

指针是一种特殊类型的变量，它存储的是内存地址，这个地址指向存储器中的某个数据。

2. **指针有两大能力：**
    - **指针有修改指向（某个变量）的值的能力：** 
通过指针，你可以访问和修改所指向内存地址上的数据。例如，如果有一个指向整数的指针，你可以通过解引用操作符 `*` 来获取或修改该整数的值。

   ```cpp
   int num = 42;
   int* ptr = &num;
   *ptr = 100;  // 修改了ptr指向的地址上的值，即修改了num的值
   ```

    - **指针是个变量有修改本身指向地址的能力：** 
你可以改变指针本身存储的地址，使其指向不同的内存位置。这是通过给指针赋予一个新的地址来实现的。

   ```cpp
   int num1 = 42;
   int num2 = 100;
   int* ptr = &num1;  // ptr指向num1的地址
   ptr = &num2;       // 修改了ptr本身存储的地址，使其指向num2的地址
   ```


### 案例

```cpp
#include <iostream>
using namespace std;
int main() {
    int a = 10;  // 1.定义一个整数变量 a
    int* p = &a;  // 2.定义一个指针变量 p，并将 a 的地址赋给它

    cout<<p<<endl;// 3.现在，p 是一个指针变量，存储了 a 的地址
    
    cout<<*p<<endl;// 4.*p 可以用来操作 a 的值，即解引用操作
    
    *p = 20;  // 5.修改 a 的值为 20,注意看IDE展示的a值变化

    return 0;//6.结束
}
```
>运行后

![](..%2F..%2Fassets%2Finsideptr.png)

### 解析

<GifWithButton src="../../../../assets/unrealgif/ptr.gif"/>

<ChatMessage avatar="../../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
   可以看到IDE可视化非常直观的将一个地址给到了指针p变量。
</ChatMessage>

1. **指针的声明和定义：**（和之前文章<span style="color: #c0392b">变量声明和定义</span>通）当你声明一个指针时，你正在告诉编译器：“我有一个指针，它将存储某个特定类型的地址。”在 `int* p;` 这个声明中，`p` 被定义为一个能够存储 `int` 类型地址的指针。

2. **取地址操作 (`&a`)：** 在 `p = &a;` 中，`&a` 表示取得变量 `a` 的地址。这是一个右值操作（后续<span style="color: #c0392b">理解左右值</span>通），返回的是 `a` 的地址，而不是 `a` 的值。

3. **指针赋值 (`p = &a;`)：** 将 `&a` 赋给 `p`，实际上是将 `a` 的地址存储在 `p` 中。这时，`p` 成为了指向 `a` 的指针。

4. **解引用操作符 (`*p`)：** 当你使用 `*p` 时，你告诉编译器：“给我指针 `p` 所指向的地址上的值。”这是一个左值操作，返回的是 `a` 的值，而不是 `a` 的地址。

5. **赋值操作 (`*p = 10;`)：** 现在，由于 `p` 存储了 `a` 的地址，`*p` 就相当于在操作 `a`。因此，`*p = 10;` 相当于 `10` 赋给了 `a`。

