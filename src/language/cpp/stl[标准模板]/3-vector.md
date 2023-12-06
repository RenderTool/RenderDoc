---
title: c++3.vector容器
order : 3
category:
  - c++
---

### vector

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
Baba能不能带我手把手体验vector容器一下怎么用?
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/new9.png" :avatarWidth="40" alignLeft>
安排！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
vector 是 C++ 标准模板库（STL）中的一个是可以改变大小的序列容器，序列容器严格按线性顺序存储元素。本质上是一个类模板，还记得类模板的特性吗？在使用类模板时，需要对其进行实例化。
</ChatMessage>

### 实例化vector

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
既然vector本质是一个类模板，那么我们用它的时候也需要实例化对象。
</ChatMessage>

::: code-tabs#language

@tab 实例化

```cpp
std::vector<int> v;
```

@tab 标准库中的定义

```cpp
template < class T, class Alloc = allocator<T> > class vector;
```

:::

### 基本方法

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
ok，现在我们怎么进行增删改查呢？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
既然他是模板类，必定有对应的成员方法
</ChatMessage>

>这是vector[成员函数参考](https://en.cppreference.com/w/cpp/container/vector)

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v;

    // 添加元素
    v.push_back(10);  // 将 10 添加到 v 中
    v.push_back(20);

    // 打印元素
    std::cout << "打印元素: ";
    for (const auto& element : v) {
        std::cout << element << " ";
    }
    std::cout << "\n";

    // 修改元素
    v[1] = 25;  // 将索引为 1 的元素修改为 25

    // 删除元素
    v.pop_back();  // 删除最后一个元素

    // 插入元素
    v.insert(v.begin() + 1, 15);  // 在索引为 1 的位置插入元素 15

    // 输出修改后的向量元素
    std::cout << "修改后: ";
    for (const auto& element : v) {
        std::cout << element << " ";
    }
    std::cout << "\n";

    // 查找元素
    int target = 15;
    auto it = std::find(v.begin(), v.end(), target);
    if (it != v.end()) {
        std::cout << "元素 " << target << "找到的索引 " << std::distance(v.begin(), it) << "\n";
    } else {
        std::cout << "元素 " << target << " 没有找到元素\n";
    }

    return 0;
}
```


### 迭代器

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
现在我想取出所有元素，我还能用遍历吗？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
他的本质是一个模板类，不能用传统的for循环依靠指针遍历数组，但底层已经封装了遍历的方法。
</ChatMessage>


```cpp
#include <iostream>
#include <vector>

int main() {
    // 创建一个包含整数的 vector
    std::vector<int> myVector = {1, 2, 3, 4, 5};

    // ①使用迭代器遍历 vector 并输出元素
    for (std::vector<int>::iterator it = myVector.begin(); it != myVector.end(); ++it)
     {
        *it *= 2;  //也可以修改
        std::cout << *it << " ";
    }
    std::cout << "\n";

    // ②使用范围-based for 循环（C++11及以后版本）
    for (const auto& element : myVector) 
    {
        std::cout << element << " ";
    }
    std::cout << "\n";


    return 0;
}
```
### 问题
<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
我看见你用*it输出到屏幕，莫非这个迭代器（iterator）是一个指针？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
你可以把他当作指针用，但建议你把他理解成一种抽象概念。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">

`vector<int>::iterator it`也就是说iterator 是vector中的一个成员函数？

</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
不不不，你去翻看源码就知道了，这个iterator上一个嵌套类一定不要搞混。
</ChatMessage>
