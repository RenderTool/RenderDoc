---
title: c++3.函数花括号初始化
order : 3
category:
  - c++
---
<ChatMessage avatar="../../../assets/emoji/bqb (5).png" :avatarWidth="40">
Baba!我阅读UEHttp插件时有段代码我不太理解!
</ChatMessage>

```cpp
void UHttpBlueprintFunctionLibrary::MakeRequestHeader(const TMap<FString, FString>& Headers, FHttpHeader& OutHeader)
{
	OutHeader = FHttpHeader{}.SetHeaders(Headers);
}
```
<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
FHttpHeader是个结构体,为什么这里没初始化就可以直接调用成员函数SetHeaders(Headers)?
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
看来你学的C++教程有点老啊,这里用了{}匿名初始化了FHttpHeader,如果我写成这样你是不是能看懂?
</ChatMessage>

```cpp
OutHeader = FHttpHeader{};
OutHeader.SetHeaders(Headers);
```

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
然后再进一步翻译一下:
</ChatMessage>

```cpp{1}
FHttpHeader TempHeader;  // 使用默认构造函数创建 FHttpHeader 对象
TempHeader.SetHeaders(Headers);  // 使用 SetHeaders 方法设置对象的属性
OutHeader = TempHeader;  // 将 TempHeader 赋值给 OutHeader
```

## 花括号{}初始化（brace initialization） 


<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
C++11及以后的标准中被引入，允许使用花括号 {} 直接初始化对象并调用其成员函数。花括号{}语法在不同语境下有不同的用法:
</ChatMessage>

1. **列表初始化**

   ```cpp
   // 列表初始化
   int x = {5};            // x被初始化为5
   std::vector<int> v = {1, 2, 3};  // 用三个元素初始化一个数组
   int arr[] = {1, 2, 3};  // 用三个元素初始化一个数组

   // 传统初始化
   int y(5);              // y被初始化为5
   std::vector<int> w(3, 1);  // 用三个元素初始化一个数组，每个元素的值为1
   int brr[3] = {1, 2, 3}; // 用三个元素初始化一个数组
   
    // UE中列表初始化
    FVector Position = {1.0f, 2.0f, 3.0f}; // 初始化一个3D向量
    FQuat Rotation = {0.0f, 0.0f, 0.0f, 1.0f}; // 初始化一个四元数
    FColor Color = {255, 0, 0, 255}; // 初始化一个颜色
   
   ```

2. **值初始化**

   ```cpp
   // 值初始化
   int x{};       // x被初始化为0
   double d{};    // x被初始化为0

   // 传统初始化
   int y = 0;     // y被初始化为0
   double z = 0;  // z被初始化为0.0
   
   // UE中的值初始化
    int32 IntegerValue{};  // 初始化为0
    float FloatValue{};    // 初始化为0.0
   
   ```

3. **空初始化**

   ```cpp
   // 空初始化
   std::string s{};      // 初始化一个空字符串
   std::vector<int> v{}; // 初始化一个空容器
   char arr[10]{};        // 初始化一个空数组

   // 传统初始化
   std::string t;       // 初始化一个空字符串
   std::vector<int> u;  // 初始化一个空容器
   char brr[10];        // 初始化一个未定义的数组
   
    // UE中的空初始化
    FString EmptyString{};      // 初始化一个空字符串
    TArray<int32> EmptyArray{}; // 初始化一个空数组
   
   ```

4. **指针的空初始化**

   ```cpp
   // 空初始化
   int* ptr{};         // 将指针初始化为nullptr
   std::shared_ptr<int> sp{};  // 将共享指针初始化为nullptr

   // 传统初始化
   int* qtr = nullptr;         // 将指针初始化为nullptr
   std::shared_ptr<int> sqtr;  // 将共享指针初始化为空指针

   // UE中的指针的空初始化
    UObject* MyObjectPtr{};         // 将UE对象指针初始化为nullptr
    TSharedPtr<UObject> SharedPtr{};  // 将UE共享指针初始化为nullptr

   ```
   
* **简洁性：** 使用花括号初始化可以在一行代码中完成对象的创建和初始化操作，使代码更加简洁。
* **避免窄化转换：** 花括号初始化限制了窄化转换，提高了代码的类型安全性。
* **可读性：** 这种写法直观地表达了对象的创建和初始化顺序，提高了代码的可读性。

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
要注意确保目标类型支持这种初始化形式，而且没有引起二义性或其他问题。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (5).png" :avatarWidth="40">
什么叫避免窄化转换?
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (5).png" :avatarWidth="40">
什么叫二义性?字我都认识,就是不明白意思.
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
窄化转换（narrowing conversion）是指在将一种数据类型转换为另一种数据类型时，可能会导致数据的精度丢失或不安全的情况。
</ChatMessage>

## 窄化转换


```cpp
int integerNumber = 42;
double doubleNumber = 3.14;

// 将 doubleNumber 转换为 int，存在可能的精度丢失
integerNumber = doubleNumber;  // 编译器可能会产生警告或错误
```

在这个例子中，将 `doubleNumber`（双精度浮点数）赋值给 `integerNumber`（整数）。这是一种窄化转换，因为浮点数的范围可能比整数大，将其赋值给整数可能导致精度丢失。

在花括号初始化的语法中，窄化转换是禁止的。例如：

```cpp
int integerNumber = 42;
double doubleNumber = 3.14;

// 花括号初始化，避免窄化转换
integerNumber = {doubleNumber};  // 编译器将禁止这种窄化转换
```
<hr>

<ChatMessage avatar="../../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
至于二义性,你小子基础不牢靠啊!早在函数重载的时候就提到过了.
</ChatMessage>

## 二义性

二义性（ambiguity）指的是某个语句或表达式有多个解释或解决方案，但编译器无法确定应该选择哪一个的情况。这可能会导致编译错误。

```cpp
#include <iostream>

void printValue(float x) {
    std::cout << "Printing float: " << x << std::endl;
}

void printValue(double y) {
    std::cout << "Printing double: " << y << std::endl;
}

int main() {
    printValue(42);// 编译器不清楚要调用哪个版本，因为传入了一个int，但我们函数版本中他不清楚要转换成哪种。
    return 0;
}

```
