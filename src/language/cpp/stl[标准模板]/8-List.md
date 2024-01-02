---
title: c++8.List容器
order : 8
category:
  - c++
---

### List

![](..%2Fassets%2FList.png)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

`std::list` 是 C++ 标准模板库中的双向链表容器。它提供了一个能够高效进行插入和删除操作的数据结构，支持在序列的两端和任何位置进行快速插入和删除元素。

</chatmessage>

![](..%2Fassets%2Fstllist.png)

### 定义：

```cpp
#include <list>

std::list<T> myList;
```

- `T` 是列表中元素的类型。

### 主要操作：

1. **push_back()：** 在列表尾部插入元素。
   ```cpp
   myList.push_back(element);
   ```

2. **push_front()：** 在列表头部插入元素。
   ```cpp
   myList.push_front(element);
   ```

3. **pop_back()：** 移除列表尾部的元素。
   ```cpp
   myList.pop_back();
   ```

4. **pop_front()：** 移除列表头部的元素。
   ```cpp
   myList.pop_front();
   ```

5. **insert()：** 在指定位置插入元素。
   ```cpp
   myList.insert(iterator, element);
   ```

6. **erase()：** 移除指定位置的元素。
   ```cpp
   myList.erase(iterator);
   ```

7. **size()：** 返回列表中元素的个数。
   ```cpp
   std::size_t listSize = myList.size();
   ```

8. **empty()：** 检查列表是否为空。
   ```cpp
   if (myList.empty()) {
       // 列表为空
   }
   ```

9. **begin() 和 end()：** 返回指向列表开头和结尾的迭代器，可用于遍历列表。
   ```cpp
   auto it = myList.begin();
   while (it != myList.end()) {
       // 处理 *it
       ++it;
   }
   ```

### 概念：

- **双向链表：** `std::list` 使用双向链表来存储元素，每个元素都包含指向前一个和后一个元素的指针，这使得在任意位置进行插入和删除操作都非常高效。

- **迭代器：** `std::list` 提供了双向迭代器，支持正向和反向遍历。

- **动态大小：** `std::list` 的大小可以动态调整，可以根据需要进行插入和删除操作，而不会涉及到重新分配内存。


```cpp
#include <iostream>
#include <list>

int main() {
    std::list<int> myList;

    myList.push_back(10);
    myList.push_front(5);
    myList.push_back(20);

    myList.insert(std::next(myList.begin()), 15); // 在第二个元素后插入15

    for (const auto& element : myList) {
        std::cout << element << " ";
    }

    return 0;
}
```

## In UE

>在Unreal Engine 中，本身并没有提供一个名为` std::list`的标准C++库的list容器，
但可以使用 TDoubleLinkedList 类来实现双向链表的功能。

```cpp
    // 使用 TDoubleLinkedList 模拟双向链表
    TDoubleLinkedList<int32> MyList;

    // 在链表尾部插入元素
    MyList.AddTail(10);
    MyList.AddTail(20);
    
    // 在链表头部插入元素
    MyList.AddHead(5);

    // 在链表的特定位置插入元素
    TDoubleLinkedList<int32>::TDoubleLinkedListNode* NodeToInsertAfter = MyList.GetHeadNode();
    MyList.InsertAfter(NodeToInsertAfter, 15);

    // 遍历链表
    for (const int32& Element : MyList)
    {
        // 处理 Element
    }
```