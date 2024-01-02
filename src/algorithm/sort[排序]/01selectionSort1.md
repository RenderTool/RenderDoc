---
title: Sort|选择排序(Selection Sort)
order: 1
category:
- algorithm
---

## 选择排序 (Selection Sort)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40">
简单选择排序是通过不断选择剩余元素中的最小值，并将其放在已排序部分的末尾。
</chatmessage>

<gifwithbutton src="../../assets/algorithmgif/selctionsort.gif"/>

### 实现步骤

1. 首先在`未排序`序列中找到最小（大）元素，存放到排序序列的起始位置.
2. 再从剩余`未排序`元素中继续寻找最小（大）元素，然后放到`已排序`序列的末尾。
3. 以此类推，直到所有元素均排序完毕。

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
时间复杂度是O(n^2)，其中n是数组的长度，优势在于交换次数相对较少，且不受输入数据分布的影响(相对稳定)。
</chatmessage>


### 代码实现

```cpp
template <typename T>
void selectionSort(T arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int minIndex = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr[minIndex], arr[i]);
    }
}
```

