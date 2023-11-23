---
title: c++常量指针|指针常量
order : 3
category:
  - c++
---

<ChatMessage avatar="../../../../assets/emoji/hh.png" :avatarWidth="40">
Baba!你不是说指针是一个存储地址的变量吗？加了const还能算变量吗？
</ChatMessage>

<ChatMessage avatar="../../../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
还记得指针的两大能力吗？
</ChatMessage>

<ChatMessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40" >
等我翻翻笔记：
</ChatMessage>

![](..%2F..%2Fassets%2Fptrabs.jpg)

<ChatMessage avatar="../../../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>

当你用 const 修饰指针，这时候限制了`指针修改指向（某个变量）的值`的能力，但不妨碍你换个地址给这个指针变量啊。

</ChatMessage>


![](..%2F..%2Fassets%2Fptrconst.jpg)

## `const` 修饰指针

#### 底层 const（Low-level const）:常量指针

1. `const int* p`: 这表示 `p` 是一个指向常量整数的指针。这意味着通过指针 `p` 可以访问整数，但不能通过 `p` 修改所指向的整数的值。

```cpp
#include <iostream>
using namespace std;

int main()
{
    int x = 5;
    int y = 6;
    const int* p;//注意这里只是为了方便演示，建议给一个初始值，避免指针错误。
    p = &x;

    // 有效，可以通过指针读取 x 的值
    int value = *p;

    //有效，修改指针指向的值的行为被const限定,不代表变量本身被限定
    x = 7;

    cout << *p << endl; //注意看p地址上的值变化。

    // 有效，修改指针指向的行为没有被限定。
    p = &y;

    // 无效，不能通过指针修改 x 的值
    // *p = 10;  // 这将导致编译错误
}
```
<GifWithButton src="../../../../assets/unrealgif/constaptr.gif"/>

<ChatMessage avatar="../../../../assets/emoji/blzt.png" :avatarWidth="40" >

搜嘎！那么反过来const相当于限制了`指针指向某个地址的能力`,但不妨碍我们修改指向（某个变量）的值。

</ChatMessage>

#### 顶层 const（Top-level const）:指针常量

2. `int* const p`: 这表示 `p` 是一个常量指针，即指针本身是常量，不能被重新赋值指向其他地方。但是，通过这个指针可以修改所指向的整数的值。

   ```cpp
   int x = 5;
   int* const p = &x;

   // 有效，可以通过指针修改 x 的值
   *p = 10;

   // 无效，不能修改指针 p 的值
   p = nullptr;  // 这将导致编译错误
   ```

<ChatMessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40" alignLeft>
很好！Baba再给你几种无脑记忆方法。
</ChatMessage>

#### 1. 指针 = 地址，都在修饰指针，谁在前谁只读

* 常量指针:常量在前 = 指向的值只读。

* 指针常量：指针在前 = 指向的地址只读。

#### 2. 根据英文直译中文

常量（const）指针（`int* p`)  
指针（`int*`）常量（const p）

### 举一反三
#### const即修饰指针又修饰指向的值。
```cpp
const int* const p;
```
一定牢记！只是指针的能力限定（只读）不是指向的`变量`被锁定，这里和引用一定要区分开。
