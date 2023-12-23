---
title: c++7.queue容器
order : 7
category:
  - c++
---

### queue

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
队列是一种先进先出（First In, First Out，FIFO）的数据结构，即最先进队列的元素将最先被取出。
</ChatMessage>

![](..%2Fassets%2Fqueue.png)

>`std::queue` 是 C++ 标准模板库中的容器适配器（container adapter），它基于某个底层容器（默认是 `std::deque`，
但也可以是 `std::list` 或 `std::vector`）提供了队列（queue）的功能。

### 定义：

```cpp
#include <queue>

std::queue<T, Container> myQueue;
```

- `T` 是队列中元素的类型。
- `Container` 是底层容器的类型，默认为 `std::deque<T>`。

### 主要操作：

1. **push()：** 将元素推入队列尾部。

```cpp
   myQueue.push(element);
```

2. **pop()：** 弹出队列头部的元素。

```cpp
   myQueue.pop();
```

3. **front()：** 返回队列头部的元素（不会删除该元素）。

 ```cpp
   T frontElement = myQueue.front();
 ```

4. **back()：** 返回队列尾部的元素（不会删除该元素）。
   ```cpp
   T backElement = myQueue.back();
   ```

5. **empty()：** 检查队列是否为空。

```cpp
   if (myQueue.empty()) {
       // 队列为空
   }
```

6. **size()：** 返回队列中元素的个数。
   ```cpp
   std::size_t queueSize = myQueue.size();
   ```

### 概念：

- **底层容器（Underlying Container）：** `std::queue` 使用某个底层容器来存储元素。默认情况下，底层容器是 `std::deque`，但你可以通过模板参数指定其他容器类型，如 `std::list` 或 `std::vector`。

- **队头（Front）和队尾（Back）：** 队列中的元素是按照先进先出的顺序排列的，最先进队列的元素是队头，最后进队列的元素是队尾。

- **适配器（Adapter）：** `std::queue` 被称为容器适配器，因为它提供了一组特定的接口，是对底层容器的封装，使其具有队列的行为。

- **不提供迭代器：** 栈不提供对其元素的迭代器访问，因为只允许在栈顶进行插入和删除操作。

```cpp
#include <iostream>
#include <queue>

int main() {
    std::queue<int> myQueue;

    myQueue.push(10);
    myQueue.push(20);
    myQueue.push(30);

    while (!myQueue.empty()) {
        std::cout << myQueue.front() << " "; // 输出队头元素
        myQueue.pop(); // 弹出队头元素
    }

    return 0;
}
```