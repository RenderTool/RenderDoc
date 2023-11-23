---
title: Sort|快速排序 (Quick Sort)
order: 3
category:
- algorithm
---

## 快速排序 (Quick Sort)

#### 2.1 快速排序的定义

快速排序（英语：Quicksort），又称分区交换排序（英语：partition-exchange sort），简称「快排」，是一种被广泛运用的排序算法。

#### 2.2 快速排序的实现过程

1. 选定中心Pivot，便于理解我们选最左边

2. 小于中心Pivot的放左边

3. 大于中心Pivot的放右边

4. 左右两边各自重复前三步。

![](assets%2Fquicksort.png)

快速排序的平均时间复杂度为 O(n log n)，其中 n 是数组的长度。在最坏情况下，快速排序的时间复杂度为 O(n^2)，但这种情况相对较少发生。

#### 2.3 快速排序的实现1

```cpp
#include <iostream>
#include <vector>

using namespace std;

// 交换数组中两个元素的位置
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

// 选择一个基准元素，将小于基准的放在左边，大于基准的放在右边
int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];  // 选择最后一个元素作为基准
    int i = low - 1;  // 小于等于基准的区域的边界

    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }

    swap(arr[i + 1], arr[high]);
    return i + 1;
}

// 递归调用快速排序
void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);

        // 对基准左右两边的子数组分别进行快速排序
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

void printArray(vector<int>& arr, int size) {
    for (int i = 0; i <size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}
int main() {
    
    vector<int> arr = {12, 7, 11, 8, 5, 2, 6, 9};
    int n = arr.size();
    
    printArray(arr, n);

    quickSort(arr, 0, n - 1);
    
    printArray(arr, n);
    
    return 0;
}

```
#### 2.4 快速排序的实现2

```cpp
struct Range {
  int start, end;

  Range(int s = 0, int e = 0) { start = s, end = e; }
};

template <typename T>
void quick_sort(T arr[], const int len) {
  if (len <= 0) return;
  Range r[len];
  int p = 0;
  r[p++] = Range(0, len - 1);
  while (p) {
    Range range = r[--p];
    if (range.start >= range.end) continue;
    T mid = arr[range.end];
    int left = range.start, right = range.end - 1;
    while (left < right) {
      while (arr[left] < mid && left < right) left++;
      while (arr[right] >= mid && left < right) right--;
      std::swap(arr[left], arr[right]);
    }
    if (arr[left] >= arr[range.end])
      std::swap(arr[left], arr[range.end]);
    else
      left++;
    r[p++] = Range(range.start, left - 1);
    r[p++] = Range(left + 1, range.end);
  }
}
```
#### 2.5 快速排序的实现3-三路排序
```cpp
// 模板的 T 参数表示元素的类型，此类型需要定义小于（<）运算
template <typename T>
// arr 为需要被排序的数组，len 为数组长度
void quick_sort(T arr[], const int len) {
  if (len <= 1) return;
  // 随机选择基准（pivot）
  const T pivot = arr[rand() % len];
  // i：当前操作的元素下标
  // arr[0, j)：存储小于 pivot 的元素
  // arr[k, len)：存储大于 pivot 的元素
  int i = 0, j = 0, k = len;
  // 完成一趟三路快排，将序列分为：
  // 小于 pivot 的元素 | 等于 pivot 的元素 | 大于 pivot 的元素
  while (i < k) {
    if (arr[i] < pivot)
      swap(arr[i++], arr[j++]);
    else if (pivot < arr[i])
      swap(arr[i], arr[--k]);
    else
      i++;
  }
  // 递归完成对于两个子序列的快速排序
  quick_sort(arr, j);
  quick_sort(arr + k, len - k);
}
```
#### 2.6 快速排序的实现4-线性找第 k 大的数

```cpp
// 模板的 T 参数表示元素的类型，此类型需要定义小于（<）运算
template <typename T>
// arr 为查找范围数组，rk 为需要查找的排名（从 0 开始），len 为数组长度
T find_kth_element(T arr[], int rk, const int len) {
  if (len <= 1) return arr[0];
  // 随机选择基准（pivot）
  const T pivot = arr[rand() % len];
  // i：当前操作的元素
  // j：第一个等于 pivot 的元素
  // k：第一个大于 pivot 的元素
  int i = 0, j = 0, k = len;
  // 完成一趟三路快排，将序列分为：
  // 小于 pivot 的元素 ｜ 等于 pivot 的元素 ｜ 大于 pivot 的元素
  while (i < k) {
    if (arr[i] < pivot)
      swap(arr[i++], arr[j++]);
    else if (pivot < arr[i])
      swap(arr[i], arr[--k]);
    else
      i++;
  }
  // 根据要找的排名与两条分界线的位置，去不同的区间递归查找第 k 大的数
  // 如果小于 pivot 的元素个数比k多，则第 k 大的元素一定是一个小于 pivot 的元素
  if (rk < j) return find_kth_element(arr, rk, j);
  // 否则，如果小于 pivot 和等于 pivot 的元素加起来也没有 k 多，
  // 则第 k 大的元素一定是一个大于 pivot 的元素
  else if (rk >= k)
    return find_kth_element(arr + k, rk - k, len - k);
  // 否则，pivot 就是第 k 大的元素
  return pivot;
}
```

### 3. 插入排序 (Insertion Sort)

#### 3.1 直接插入排序 (Insertion Sort)

直接插入排序的思想是将一个元素插入到已经排好序的子序列中，逐步构建有序序列。

```cpp
template <typename T>
void insertionSort(T arr[], int n) {
    for (int i = 1; i < n; i++) {
        T key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
```

### 4. 希尔排序 (Shell Sort)

希尔排序是插入排序的一种改进版本，它通过定义一个间隔序列来对原始数组进行多次插入排序。

```cpp
template <typename T>
void shellSort(T arr[], int n) {
    for (int gap = n/2; gap > 0; gap /= 2) {
        for (int i = gap; i < n; i++) {
            T temp = arr[i];
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
}
```

### 5. 堆排序 (Heap Sort)

堆排序是通过将待排序序列构建成一个堆，然后逐步取出堆顶元素，实现排序。

```cpp
template <typename T>
void heapify(T arr[], int n, int i) {
    int largest = i;
    int left = 2*i + 1;
    int right = 2*i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

template <typename T>
void heapSort(T arr[], int n) {
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (int i = n - 1; i >= 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}
```

### 6. 归并排序 (Merge Sort)

归并排序是通过将数组分成两半，对每一半进行递归排序，然后将两个有序的半部分合并起来。

```cpp
template <typename T>
void merge(T arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    T L[n1], R[n2];

    for (int i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }

    for (int j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 + j];
    }

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

template <typename T>
void mergeSort(T arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }
}
```

### 7. 基数排序

#### 7.1 LSD 基数排序 (Least Significant Digit Radix Sort)

LSD 基数排序是一种通过比较每个元素的每一位来对数字进行排序的算法。

```cpp
template <typename T>
void lsdRadixSort(T arr[], int n) {
    // Find the maximum number to know the number of digits
    T maxElement = getMax(arr, n);

    // Do counting sort for every digit
    for (int exp = 1; maxElement/exp > 0; exp *= 10) {
        countingSort(arr, n, exp);
    }
}

template <typename T>
void countingSort(T arr[], int n, int exp) {
    const int RANGE = 10;
    T output[n];
    int count[RANGE] = {0};

    // Store count of occurrences in count[]
    for (int i = 0; i < n; i++) {
        count[(arr[i]/exp) % RANGE]++;
    }

    // Change count[i] so that count[i] contains actual
    // position of this digit in output[]
    for (int i = 1; i < RANGE; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for

 (int i = n - 1; i >= 0; i--) {
        output[count[(arr[i]/exp) % RANGE] - 1] = arr[i];
        count[(arr[i]/exp) % RANGE]--;
    }

    // Copy the output array to arr[] so that arr[] contains
    // sorted numbers according to current digit
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
```


