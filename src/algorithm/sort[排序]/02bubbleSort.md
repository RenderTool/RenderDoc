---
title: Sort|冒泡排序 (Bubble Sort)
order: 2
category:
- algorithm
---

## 冒泡排序 (Bubble Sort)

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40">
冒泡排序的基本思想是通过重复遍历要排序的列表， 比较每对相邻的元素，并且如果它们的顺序错误就交换它们。
遍历列表的工作是重复地的，直到无需交换为止，这意味着列表已经排序完成。
</ChatMessage>

### 实现步骤

1. 第一次，左边开始两两对比,如果左边的值大于右边的值,就交换它们，对比结束时末尾是最大数字
2. 第二次，剔除末尾，重复步骤1。
3. 依此类推，进行第三次、第四次，直到整个数组有序。

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
冒泡排序的时间复杂度是O(n^2)，其中n是数组的长度，意味着要一共循环n^2次。
</ChatMessage>

<GifWithButton src="../../assets/algorithmgif/bubblesort.gif"/>

![](..%2Fassets%2Fbubble.jpg)

### 代码实现

```cpp
#include <iostream>

//引入之前的模板
template <typename T>
void swap(T& a, T& b)
{
    T temp = a;
    a = b;
    b = temp;
}

//冒泡排序
template <typename T>
void bubbleSort(T* array, int length)
{
    for (int i = 0; i < length; ++i)
    {
        bool tag = false;
        for (int j = 0; j < length - i - 1; ++j)
        {
            if (array[j] > array[j + 1])
            {
                swap(array[j], array[j + 1]);
                tag = true;
            }
        }
        if (!tag)
        {
            break;
        }
    }
}

//打印数组
template <typename T>
void showArray(T* array, int length)
{
    for (int i = 0; i < length; ++i)
    {
        std::cout << array[i] << " ";
    }
    cout << endl;
}

//主函数
int main()
{
    int arr[] = {64, 32, 16, 8, 4, 2, 1};
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    showArray(arr, n);
    return 0;
}
```

