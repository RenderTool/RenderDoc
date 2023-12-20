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


1. **静态空间 vs. 动态扩展**：
   - **数组**：在定义时，数组的大小就已经固定，它占据静态的空间，无法在运行时改变大小。数组的大小是在编译时确定的。
   - **`std::vector`**：`std::vector` 是一个动态数组的实现，它可以在运行时动态扩展。这意味着 `std::vector` 的大小可以根据需要动态增加或减少，而不需要手动管理内存。

2. **动态扩展的实现**：
   - 当 `std::vector` 的容量不足以容纳新元素时，它会请求更大的内存块。这通常涉及到分配一块新的内存空间，将原有元素拷贝到新的内存中，然后释放原有的内存。这个过程确保了内存的连续性，有助于提高访问效率。
   - 遵循左闭右开原则

![](..%2Fassets%2Fvectorsample.png)

3. **优势和灵活性**：
   - `std::vector` 提供了动态内存管理，这使得它在处理不确定数量的元素时更为灵活。它自动处理内存的分配和释放，减轻了程序员的负担。
   - 普通数组在编译时就需要知道其大小，这可能导致一些不便，尤其是在需要动态调整大小的情况下。



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
调用对应的成员方法即可。
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
他的本质是一个模板类，不能用传统的for循环依靠指针遍历数组，但底层已经封装了遍历的方法，我们管他叫迭代器。
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

#### 1. 为什么要用迭代器遍历

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
我看见你用*it输出到屏幕，莫非这个迭代器（iterator）是一个指针？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>

在这里你可以把他当作指针用，但`迭代器`其实是一种用于访问、操作容器（如数组、列表、集合等）元素的抽象接口。

</ChatMessage>

<hr>

#### 2.动态开辟空间问题优化-预留空间

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
我听他们说每次vector新加元素都会动态开辟一个新的空间，怎么验证呢？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
很简单，可以用一个指针来验证。
</ChatMessage>

```cpp
#include <iostream>
#include <vector>
int main() {
    int num = 0 ;
    int *p = nullptr;
    std::vector<int> v;
    for(int i = 0; i < 100000; ++i){
        v.push_back(i);
        if(p!=&v[0]){
            p = &v[0];
            num++;
            std::cout<<"num="<<num<<std::endl;
        }
    }
}
```

<ChatMessage avatar="../../../assets/emoji/new3.png" :avatarWidth="50">
妙啊！意味着如果首地址更换了指针就会被重新赋值，num也会递增就得到了重新分配地址的次数了！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
一般来说他默认分配的内存已经够用了，上面执行了100000次也就分配了几次。但对于更大的数据来说，能不能再优化减少动态分配的次数呢？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
你想到的问题官方也想到了。为此增加了一个叫预留空间函数——reserve(int size)。
</ChatMessage>

<hr>

### 3. front和begin区别

<ChatMessage avatar="../../../assets/emoji/new3.png" :avatarWidth="50">
front和begin区别有啥区别啊？
</ChatMessage>


1. **`begin()` 函数：**
   - **返回类型：** `begin()` 函数返回一个迭代器，指向双端队列的第一个元素（前端块的第一个元素）。
   - **用途：** 主要用于遍历 `std::vector` 中的元素，它标识了双端队列的起始位置。

    ```cpp
    std::vector<int> myVector = {1, 2, 3, 4, 5};
    std::vector<int>::iterator it = myVector.begin();
    ```

2. **`front()` 函数：**
   - **返回类型：** `front()` 函数返回一个引用，指向双端队列的第一个元素（前端块的第一个元素）。
   - **用途：** 主要用于访问或修改 `std::vector` 的第一个元素的值。

    ```cpp
    std::vector<int> myVector = {1, 2, 3, 4, 5};
    int firstElement = myVector.front();
    ```

**总结：**
- `begin()` 返回一个迭代器，主要用于遍历容器元素。
- `front()` 返回第一个元素的引用，主要用于访问或修改第一个元素的值。

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
请注意，使用 `front()` 之前需要确保 `std::vector` 不为空，因为对于空的 `std::vector` 调用 `front()` 是未定义行为,最好使用 empty() 函数进行检查。
</ChatMessage>



### 参考链接
[国内网站](https://www.w3schools.cn/cpp_standard_library/array.html)
[vector](https://en.cppreference.com/w/cpp/container/vector)
