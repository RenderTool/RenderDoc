---
title: c++2.stl模板概述
order : 2
category:
  - c++
---

### STL

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
C++ STL（标准模板库）是一套功能强大的 C++ 模板类，提供了通用的模板类和函数，这些模板类和函数可以实现多种流行和常用的算法和数据结构，如向量、链表、队列、栈。
</ChatMessage>

### 核心组件

| 类别                | 组件                     | 描述                      |
|-------------------|------------------------|-------------------------|
| 容器（Containers）    | vector                 | 动态数组，支持快速随机访问和尾部插入操作。   |
|                   | list                   | 双向链表，支持在任意位置插入和删除操作。    |
|                   | deque                  | 双端队列，支持在两端快速插入和删除操作。    |
|                   | queue                  | 队列，先进先出（FIFO）数据结构。      |
|                   | stack                  | 栈，后进先出（LIFO）数据结构。       |
|                   | set                    | 集合，元素唯一，有序。             |
|                   | map                    | 映射，键-值对的集合，键唯一，有序。      |
|                   | unordered_set          | 无序集合，元素唯一。              |
|                   | unordered_map          | 无序映射，键-值对的集合，键唯一。       |
|                   | stack                  | 栈，后进先出（LIFO）数据结构。       |
| 迭代器（Iterators）    | input_iterator         | 用于遍历序列的输入迭代器。           |
|                   | output_iterator        | 用于向序列写入的输出迭代器。          |
|                   | forward_iterator       | 单向遍历序列的迭代器，支持逐个增加。      |
|                   | bidirectional_iterator | 双向遍历序列的迭代器，支持逐个增加或逐个减少。 |
|                   | random_access_iterator | 随机访问序列的迭代器，支持直接跳跃访问。    |
| 算法（Algorithms）    | sort                   | 对序列进行排序。                |
|                   | find                   | 在序列中查找特定元素。             |
|                   | transform              | 对序列进行变换操作。              |
|                   | accumulate             | 计算序列元素的累积值。             |
|                   | for_each               | 对序列的每个元素执行指定操作。         |
| 适配器（Adapters）     | stack                  | 适配器，将栈的操作添加到其他容器上。      |
|                   | queue                  | 适配器，将队列的操作添加到其他容器上。     |
|                   | priority_queue         | 适配器，将优先队列的操作添加到其他容器上。   |
| 仿函数（Functors）     | less                   | 二元谓词，用于比较两个元素。          |
|                   | greater                | 二元谓词，用于比较两个元素。          |
|                   | plus                   | 二元函数对象，实现加法。            |
|                   | minus                  | 二元函数对象，实现减法。            |
|                   | negate                 | 一元函数对象，实现取反。            |
| 空间配置器（Allocators） | allocator              | 分配和释放内存的对象。             |
|                   | allocator_traits       | 提供对分配器属性和操作的访问。         |
