---
title: c++9.Set/Multiset容器
order : 9
category:
  - c++
---

### Set/Multiset

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
Set/Multiset关联式容器，底层是二叉树（红黑树），会自动排序。
</ChatMessage>

这两者的主要区别在于 `std::set` 中不允许重复的元素，而 `std::multiset` 允许重复的元素。

### `std::set` 定义和概念：

#### 定义：

```cpp
#include <set>

std::set<T> mySet;
```

- `T` 是集合中元素的类型。

#### 主要操作：

1. **insert()：** 插入元素到集合中。
   ```cpp
   mySet.insert(element);
   ```

2. **erase()：** 移除集合中的元素。
   ```cpp
   mySet.erase(element);
   ```

3. **find()：** 查找元素在集合中的位置。
   ```cpp
   auto it = mySet.find(element);
   if (it != mySet.end()) {
       // 元素找到
   }
   ```

4. **size()：** 返回集合中元素的个数。
   ```cpp
   std::size_t setSize = mySet.size();
   ```

5. **empty()：** 检查集合是否为空。
   ```cpp
   if (mySet.empty()) {
       // 集合为空
   }
   ```

6. **begin() 和 end()：** 返回指向集合开头和结尾的迭代器，可用于遍历集合。
   ```cpp
   auto it = mySet.begin();
   while (it != mySet.end()) {
       // 处理 *it
       ++it;
   }
   ```

### `std::multiset` 定义和概念：

#### 定义：

```cpp
#include <set>

std::multiset<T> myMultiset;
```

- `T` 是多重集合中元素的类型。

#### 主要操作：

`std::multiset` 提供的操作与 `std::set` 类似，但不同之处在于 `std::multiset` 允许元素的重复插入，且 `erase()` 可以一次性删除所有特定值的元素。

1. **insert()：** 插入元素到多重集合中。
   ```cpp
   myMultiset.insert(element);
   ```

2. **erase()：** 移除多重集合中的元素。
   ```cpp
   myMultiset.erase(element);
   ```

3. **equal_range()：** 返回指定值的元素范围。
   ```cpp
   auto range = myMultiset.equal_range(element);
   // range.first 是范围的起始迭代器
   // range.second 是范围的结束迭代器
   ```

4. **count()：** 返回指定值在多重集合中出现的次数。
   ```cpp
   std::size_t count = myMultiset.count(element);
   ```

5. **size()：** 返回多重集合中元素的个数。
   ```cpp
   std::size_t multisetSize = myMultiset.size();
   ```

6. **empty()：** 检查多重集合是否为空。
   ```cpp
   if (myMultiset.empty()) {
       // 多重集合为空
   }
   ```

7. **begin() 和 end()：** 返回指向多重集合开头和结尾的迭代器，可用于遍历多重集合。
   ```cpp
   auto it = myMultiset.begin();
   while (it != myMultiset.end()) {
       // 处理 *it
       ++it;
   }
   ```
   
### 二叉树|红黑树

>本章不做介绍，具体收录在数据结构算法中

![](..%2Fassets%2Fredblack.png)

### 自动排序

<ChatMessage avatar="../../../assets/emoji/new1.png" :avatarWidth="40">
我有个问题！你说会自动排序，那么我加入字符串阁下如何也应对?
</ChatMessage>

```cpp
#include <iostream>
#include <set>
#include <string>

using namespace std;

int main()
{
   set<string> myset;
   myset.insert("你");
   myset.insert("好");
   myset.insert("ya");
   for(set<string>::iterator it = myset.begin(); it != myset.end(); it++)
      {
      std::cout << *it;
      }
}
```
<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
对于英文字符串，比较运算符默认按照字典序进行排序（即按照 ASCII 码顺序）。<br>
对于中文及其他字符串，C++ 的比较运算符会根据字符串的字节顺序来进行比较。
</ChatMessage>
