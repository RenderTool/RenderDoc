---
title: c++数组指针|指针数组
order : 4
category:
  - c++
---

<ChatMessage avatar="../../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
有了先前知识点的铺垫，现在正是理解数组指针|指针数组最佳时机
</ChatMessage>

## 概念

## 指针数组


<ChatMessage avatar="../../../../assets/emoji/hh.png" :avatarWidth="40" >
什么叫指针数组？
</ChatMessage>


<ChatMessage avatar="../../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
先别急着抠字眼，先看看这些：字符串数组、结构体数组,这些你能想到什么？
</ChatMessage>


<ChatMessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40" >
一堆字符串组成的数组和一堆结构体组成的数组呗
</ChatMessage>

![](..%2F..%2Fassets%2Fstringarray.png)

<ChatMessage avatar="../../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
那么他换个马甲你就不认识？指针数组，不就是一堆指针组成的<span style="color: #c0392b">数组</span>嘛？
</ChatMessage>

>UE中一堆`对象指针`组成的`数组`就是`指针数组`例如：TArray<ACameraActor*>Camera。（多直观易懂）

![](..%2F..%2Fassets%2Fptrarray.jpg)

>语法：`typename* ArrayName[arraySize]`;

```cpp
#include <iostream>
using namespace std;

int main() {
    // 假设有三个整数
    int a = 10, b = 20, c = 30;

    // 声明一个指针数组，其中每个元素都是指向整数的指针
    int* ptrArray[3];

    // 将指针指向对应的整数
    ptrArray[0] = &a;
    ptrArray[1] = &b;
    ptrArray[2] = &c;

    // 使用指针数组中的指针访问对应的整数值
    for (int i = 0; i < 3; ++i) {
        cout << "Value at index " << i << ": " << *ptrArray[i] << endl;
    }

    return 0;
}
```

在这个例子中，`ptrArray` 是一个包含三个元素的数组，每个元素都是一个指向整数的指针。通过将这些指针分别指向整数变量 `a`、`b` 和 `c`，我们形成了一个指针数组。在循环中，我们使用指针数组中的指针访问对应的整数值。

指针数组在某些情况下非常有用，例如在处理字符串数组、动态分配内存等情况下。

## i++与++i

<ChatMessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40" >
我不理解！为什么这里用++i而不是i++，有什么区别嘛？
</ChatMessage>

<ChatMessage avatar="../../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
在这里i没有对其他变量赋值，所以没有区别。but我有一篇专门写i++和++i的文章
</ChatMessage>


## 数组指针
<ChatMessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40" >
Baba帮我康康我写的这个p2是不是就是数组指针？
</ChatMessage>

```cpp
int array2[6] = {1, 2, 3, 4, 5, 6};
int *p2 = array2;
```
<ChatMessage avatar="../../../../assets/emoji//blzt.png" :avatarWidth="40"  alignLeft>
你说的这个不叫数组指针，是一个普通指针。
</ChatMessage>

<ChatMessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40" >
数组指针不是直接可以用 指针指向数组首地址进行访问么?
</ChatMessage>

<ChatMessage avatar="../../../../assets/emoji//bqb (2).png" :avatarWidth="40"  alignLeft>
是的，实践证明确实首地址和整个数组地址一致，但你这个确实只是一个指向的是数组首元素的普通指针，看下面的程序调试图：
</ChatMessage>

![普通指针，指向数组首元素](..%2F..%2Fassets%2Fintptrarrayfirest.png)

<ChatMessage avatar="../../../../assets/emoji//bqb (3).png" :avatarWidth="40"  alignLeft>
真正的数组指针长这样：
</ChatMessage>

![保存的是整个数组的地址](..%2F..%2Fassets%2Farrayptrall.png)

### 图中案例

>语法 typename( * p)[n];

```cpp
#include <iostream>
using namespace std;

int main() {
    
    int array[5]={1,2,3,4,5};
    
    int * P1 = array;//P指向array首元素，本质还是int指针。

    int * P2 = &array[0];//注意看地址和P1一致。
    
    int * P3 = &array[1];//注意看地址。
    
    int (* P4)[5] = &array;//P2指向array整个内存空间.注意看IDEP4地址。

    return 0;
}
```
![内存图](..%2F..%2Fassets%2Fggbl.png)

<GifWithButton src="../../../../assets/unrealgif/arrayptr.gif"/>


## 参考链接

[i++/++i](https://zhuanlan.zhihu.com/p/391942337)

[数组指针/指针数组](https://blog.csdn.net/chenmozhe22/article/details/106420311)

[C语言基础---14.指针数组 & 数组指针---图解篇](https://blog.csdn.net/chenmozhe22/article/details/106420311)