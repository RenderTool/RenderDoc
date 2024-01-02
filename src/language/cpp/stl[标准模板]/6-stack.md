---
title: c++6.stack容器
order : 6
category:
  - c++
---

### stack

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
栈是一种后进先出（Last In, First Out，LIFO）的数据结构，只允许在栈顶进行插入和删除操作。
</chatmessage>

>`std::stack` 是 C++ 标准模板库中的容器适配器（container adapter），它基于某个底层容器（默认是 `std::deque`，
但也可以是 `std::vector` 或 `std::list`）提供了栈（stack）的功能。

![](..%2Fassets%2Fstack.png)

### 定义：

```cpp
#include <stack>

std::stack<T, Container> myStack;
```

- `T` 是栈中元素的类型。
- `Container` 是底层容器的类型，默认为 `std::deque<T>`。

### 主要操作：

1. **push()：** 将元素推入栈顶。
   ```cpp
   myStack.push(element);
   ```

2. **pop()：** 弹出栈顶的元素。
   ```cpp
   myStack.pop();
   ```

3. **top()：** 返回栈顶的元素（不会删除该元素）。
   ```cpp
   T topElement = myStack.top();
   ```

4. **empty()：** 检查栈是否为空。
   ```cpp
   if (myStack.empty()) {
       // 栈为空
   }
   ```

5. **size()：** 返回栈中元素的个数。
   ```cpp
   std::size_t stackSize = myStack.size();
   ```

### 概念：
`std::stack` 具有以下特性：

1. **后进先出（LIFO）：** 栈是一种后进先出的数据结构，最后入栈的元素将最先被弹出。

2. **封装底层容器：** `std::stack` 将底层容器（默认是 `std::deque`）的功能进行封装，提供栈的操作接口。

3. **常用操作：** `std::stack` 提供了常见的栈操作，包括推入元素（`push`）、弹出元素（`pop`）、获取栈顶元素（`top`）、检查栈是否为空（`empty`）以及获取栈中元素的个数（`size`）。

4. **底层容器可替换：** 使用模板参数，可以在创建 `std::stack` 时指定不同的底层容器，例如 `std::vector` 或 `std::list`。

5. **不提供迭代器：** 栈不提供对其元素的迭代器访问，因为只允许在栈顶进行插入和删除操作。

```cpp
#include <iostream>
#include <stack>

int main() {
    std::stack<int> myStack;

    myStack.push(10);
    myStack.push(20);
    myStack.push(30);

    std::cout << "Top element: " << myStack.top() << std::endl;

    while (!myStack.empty()) {
        std::cout << myStack.top() << " "; // 输出栈顶元素
        myStack.pop(); // 弹出栈顶元素
    }

    std::cout << std::endl;

    return 0;
}
```
### In UE

>在Unreal Engine 中，本身并没有提供一个名为`std::stack`的标准C++库的stack容器，
但可以使用TArray或者TQueue等UE提供的数据结构来实现类似栈的操作。

![](..%2Fassets%2Ftarray.png)

```cpp
// 使用TArray模拟栈
UPROPERTY(EditAnywhere, Category="分组|子标签")
TArray<int32> MyStack;
    
UFUNCTION(BlueprintCallable, Category="MyArray")  
void Push(int32 Value);
	
void AMyTest::Push(int32 Value)
{
if(this->MyStack.Num() > 0)
	this->MyStack.Pop(Value);
}
else
{
   this->MyStack.Add(Value);
}
  
```