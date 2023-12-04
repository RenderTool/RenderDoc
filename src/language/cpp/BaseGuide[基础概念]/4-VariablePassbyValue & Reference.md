---
title: c++4.参数传递
order : 4
category:
  - c++
---

<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
值传递（Pass by Value）和引用传递（Pass by Reference）以及指针传递（Pass by Pointer）
</ChatMessage>

### 值传递

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
<GifWithButton src="../../../assets/unrealgif/vyy.gif"/>


### 引用传递

1. **传递方式：** 通过将实际参数的地址传递给形式参数，函数得到的是实际数据的引用。

2. **对实参的影响：** 在函数内对形式参数的修改会影响实际参数的值。

3. **内存开销：** 不会产生额外的内存开销，因为没有进行值的复制。

4. **使用时机：** 适用于需要修改实际参数的值或希望避免复制大型对象的情况。

```cpp
#include <iostream>
using namespace std;

//引用传递
void increment(int& x) {
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

<GifWithButton src="../../../assets/unrealgif/vyy2.gif"/>

### Const引用传递

1. **传递方式：** 通过将实际参数的引用传递给形式参数，函数得到的是实际数据的引用。使用`const`关键字表示在函数内不能修改实际参数的值。

2. **对实参的影响：** 在函数内不允许对形式参数的值进行修改，以保持实际参数的不变性。

3. **内存开销：** 传递的是引用而不是值的副本，因此相比于值传递，内存开销较小。但在函数内部无法修改实际参数的值。

4. **使用时机：** 适用于需要访问实际参数的值但不需要修改的情况，同时希望减小内存开销。

  ```cpp
  #include <iostream>
  using namespace std;

  // const引用传递
  int increment(const int& x) {
      cout << x << endl;
      return x + 1;  // 返回x递增后的值
  }

  int main() {
      int num = 5;
      num = increment(num); // 将新值赋给num
      cout << num << endl; // 打印递增后的值
      return 0;
  }
  ```

<GifWithButton src="../../../assets/unrealgif/vyy3.gif"/>

在上述示例中，const引用传递避免了对实际参数的复制，同时限制了函数内部对实际参数的修改。

### 指针传递

1. **传递方式：** 通过将实际参数的地址传递给形式参数，函数得到的是实际数据的地址，可以通过该地址直接访问和修改实际参数的值。

2. **对实参的影响：** 在函数内对形式参数所指向的地址的内容进行修改会影响实际参数的值。

3. **内存开销：** 传递的是地址而不是值的副本，因此通常比值传递更节省内存，尤其对于大型对象或数据结构。

4. **使用时机：** 适用于需要在函数内修改实际参数的值，或者当希望减小内存开销的情况。

```cpp
#include <iostream>
using namespace std;

//指针传递
void incrementByPointer(int* x) {
  if (x != nullptr)
  {
      cout << *x << endl;  // 输出实际参数的值
      (*x)++;  // 通过指针修改实际参数的值
  }
}

int main() {
    int num = 5;
    incrementByPointer(&num);  // 传递实际参数的地址
    cout << num << endl;  // 输出修改后的实际参数的值，结果为6
    return 0;
}
```

## 深浅拷贝

<ChatMessage avatar="../../../assets/emoji/bqb (4).png" :avatarWidth="40">
按你这么说也就是说值传递是深拷贝？引用传递是浅拷贝喽？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
不完全正确！，我们还是得根据实际情况判断是什么拷贝。
</ChatMessage>

1. **值传递（Pass by Value）：**
  - 在值传递中，函数参数是原始值的拷贝，即创建了一个局部变量并将原始值的内容复制到局部变量中。
  - 这确实涉及到拷贝原始值，但这并不一定是深拷贝。对于基本数据类型（如整数、浮点数），这是深拷贝，因为整个值被复制。
  - 对于复杂对象（如数组、结构体、类），可能是浅拷贝，因为只是复制对象的内容，而不是对象本身的复制。

2. **引用传递（Pass by Reference）：**
  - 在引用传递中，函数参数是原始值的引用，即创建了一个别名或引用，直接指向原始值的内存地址。
  - 引用传递通常被认为是一种浅拷贝，因为它不涉及对值的复制，而是共享同一块内存。修改引用传递的参数会影响原始值。



<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
我不理解！我只是经常听他们提到<span style="color: #c0392b;font-size: 1.2rem">深浅拷贝</span>。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
后续文章再做讨论吧。
</ChatMessage>

## 正片

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
贴心Baba在UE中用蓝图节点模拟了一下值传递和值引用
</ChatMessage>

### 1.创建

>对应的蓝图节点


![](..%2Fassets%2Freferenceorvalue.png)

![默认值传递](..%2Fassets%2Fvalueblueprint.png)

![值引用](..%2Fassets%2Freferenceblueprint.png)

### 2.运行

<ChatMessage avatar="../../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
如果用+=则需要重新对原始数据赋值操作，而++对变量进行自增的操作。至于用++i还是i++在这里没什么区别，我们后续文章也会讨论。
</ChatMessage>

![默认参数是1](..%2Fassets%2Frunreference.gif)

![](..%2Fassets%2Freferenceerrorcpp.png)

### 3.Debug

![值传递](..%2Fassets%2Frunvaluegif.gif)

![值引用](..%2Fassets%2Frunreferencegif.gif)
