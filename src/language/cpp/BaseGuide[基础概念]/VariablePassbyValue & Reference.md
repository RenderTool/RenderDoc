---
title: c++-参数-值传递和引用
category:
  - c++
---

<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
值传递（Pass by Value）和引用传递（Pass by Reference）
</ChatMessage>

## 概念

>不想看代码可以看正片内容 [正片](#正片)

值传递（Pass by Value）和引用传递（Pass by Reference）是两种不同的参数传递方式。

### 值传递：

1. **传递方式：** 通过将实际参数的值复制给形式参数，函数得到的是实际数据的副本。

2. **对实参的影响：** 在函数内对形式参数的修改不会影响实际参数的值。

3. **内存开销：** 由于复制了实际参数的值，可能会产生额外的内存开销，尤其是对于大型对象或数据结构。

4. **使用时机：** 适用于简单的数据类型或对象，或者当函数不需要修改实际参数的值时。

```cpp
#include <iostream>
using namespace std;

//值传递
void increment(int x) {
	cout << x << endl;
    x++;
}

int main() {
    int num = 5;
    increment(num);//结果打印5
    increment(num);//结果打印5
    increment(num);//结果打印5
    return 0;
}
```

### 引用传递：

1. **传递方式：** 通过将实际参数的地址传递给形式参数，函数得到的是实际数据的引用。

2. **对实参的影响：** 在函数内对形式参数的修改会影响实际参数的值。

3. **内存开销：** 不会产生额外的内存开销，因为没有进行值的复制。

4. **使用时机：** 适用于需要修改实际参数的值或希望避免复制大型对象的情况。

```cpp
#include <iostream>
using namespace std;

//值传递
void increment(int x) {
	cout << x << endl;
    x++;
}

int main() {
    int num = 5;
    increment(num);//结果打印5
    increment(num);//结果打印6
    increment(num);//结果打印7
    cout << num << endl;//打印8因为实际参数被改变了
    return 0;
}
```

### const引用传递：

>细心的你可能已经注意到了，引用性能虽好，但他会改变实参。<br>
那有没办法，既能有引用传递又不会更改实参呢？

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
使用const + 值引用
</ChatMessage>

```cpp
#include <iostream>
using namespace std;

//值传递
void increment(const int& x) {
cout << x << endl;
//x++;//error: increment of read-only reference ‘x’
}

int main() {
int num = 5;
increment(num);//结果打印5
increment(num);//结果打印6
increment(num);//结果打印7
cout << num << endl;//打印8因为实际参数被改变了
return 0;
}
```

我们已经接受过关键字`const` 是只读的，所以这里++会报错。

## 总结
考虑性能使用引用（const reference）减小内存开销。

## 正片

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40">
如果只是这样也太没劲了，为此Baba在UE中用蓝图节点模拟了一下值传递和值引用
</ChatMessage>

### 1.创建

>对应的蓝图节点

![](..%2Fassets%2Freferenceorvalue.png)

![默认值传递](..%2Fassets%2Fvalueblueprint.png)

![值引用](..%2Fassets%2Freferenceblueprint.png)

### 2.运行

![默认参数是1](..%2Fassets%2Frunreference.gif)

### 3.注意

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40">
注意如果你这里用+1是没有用的，要用自增。
</ChatMessage>

![](..%2Fassets%2Freferenceerrorcpp.png)

### 4.debug

![值传递](..%2Fassets%2Frunvaluegif.gif)

![值引用](..%2Fassets%2Frunreferencegif.gif)
