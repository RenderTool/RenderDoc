---
title: c++4.deque容器
order : 4
category:
  - c++
---

### deque

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
前面我们提到了vector是单端数组，遵循左闭右开，那么有没有两边都能插入元素的数组？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/new9.png" :avatarWidth="40" alignLeft>
还真有，deque就是一个。
</ChatMessage>

![](..%2Fassets%2Fdequevector.png)

### `std::deque` 定义：

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>

`std::deque`（双端队列Double Ended Queue）是 C++ 标准库中的容器，它允许在两端高效地进行插入和删除操作。

</ChatMessage>

::: code-tabs#language

@tab 实例化

```cpp
#include <deque>

std::deque<int> myDeque; // 创建一个存储 int 类型的双端队列
```

@tab 标准库中的定义

```cpp
template < class T, class Alloc = allocator<T> > class deque;
```

:::

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
我不理解，vector是连续内存空间，导致不能头部插入新元素，那么deque却可以，他是如何实现的呢？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
因为他用到了中控器（controller）来管理块状结构。这个中控器负责维护对块的引用以及块之间的连接关系。每个块内部的元素是连续存储的，但不同块之间的元素不一定是连续的。
</ChatMessage>


![](..%2Fassets%2Fdequesx.png)

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
问题来了，那么我怎么遍历呢？你都不是连续空间了！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/new2.png" :avatarWidth="50" alignLeft>

看来你还是停留在普通数组的for遍历实现阶段上，咱们已经说了几乎每个容器都有自己的迭代器，`std::deque` 也提供了迭代器（iterator）来进行遍历，迭代器会隐藏底层的实现细节，使得用户无需关心具体的内存结构。

</ChatMessage>

```cpp
#include <iostream>
#include <deque>

int main() {
    std::deque<int> myDeque = {1, 2, 3, 4, 5};

    // 使用迭代器遍历
    for (std::deque<int>::iterator it = myDeque.begin(); it != myDeque.end(); ++it) {
        std::cout << *it << " ";
    }

    std::cout << std::endl;

    return 0;
}
```
<ChatMessage avatar="../../../assets/emoji/new2.png" :avatarWidth="50" alignLeft>

顺带提的是，`deque`由于用到了中控器，意味着他的执行访问效率是没有`vector`高的。

</ChatMessage>

### deque VS ector

1. **动态内存管理**：
   - **`std::vector`**：`std::vector` 是一个动态数组，元素存储在连续的内存块中，只能在数组的末尾进行快速的插入和删除。当容量不足时，可能需要重新分配内存。
   - **`std::deque`**：`std::deque` 也是动态数组，但它允许在两端进行快速的插入和删除操作。`std::deque` 使用块状分配内存，每个块中包含多个元素，这有助于减少重新分配内存的次数。

2. **内存结构**：
   - **`std::vector`**：元素在内存中是连续存储的，因此访问元素的速度较快。
   - **`std::deque`**：元素可能存储在多个块中，因此内存不一定是连续的。但由于块的数量相对较小，访问元素的速度仍然可以维持在一个合理的范围内。

3. **效率**：
   - **`std::vector`**：在末尾进行操作的效率非常高，但在头部进行插入和删除时可能比较慢，因为需要移动大量元素。
   - **`std::deque`**：在两端进行操作的效率都比较高，因为它使用了块状分配，减少了元素的移动。

4. **迭代器的失效问题**：
   - **`std::vector`**：由于元素的连续存储，插入或删除元素可能导致迭代器失效。
   - **`std::deque`**：在两端进行插入或删除不会导致迭代器失效，因为块之间的元素位置关系不会改变。

### 中控区

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
我还是不理解中控区是什么？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/new2.png" :avatarWidth="50" alignLeft>

中控区（Controller）是 `std::deque` 内部用于管理块状结构的一个组件。它本质上是一个数据结构，用于维护对块的引用以及块之间的连接关系。

</ChatMessage>

1. **指向前端块的指针（Front Block Pointer）：** 指向双端队列的前端块。
2. **指向后端块的指针（Back Block Pointer）：** 指向双端队列的后端块。
3. **块的数量信息：** 记录了整个 `std::deque` 中有多少块。
