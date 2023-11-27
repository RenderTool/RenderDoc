---
title: c++枚举指针?
order : 5
category:
  - c++
---

<ChatMessage avatar="../../../../assets/emoji/hx.png" :avatarWidth="40">
有没有枚举指针?
</ChatMessage>

<ChatMessage avatar="../../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
枚举（Enum）本身并没有指针，因为枚举是一种由命名整数值组成的类型，而不是一种可寻址的数据类型。枚举常用于表示一组有限的离散值。
</ChatMessage>

<ChatMessage avatar="../../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
然而，你可以使用指向枚举变量的指针。这样的指针可以用来存储和访问枚举值的地址，但需要注意的是，枚举类型的底层类型是整数，因此使用指针主要是为了方便处理或传递枚举值的地址。
</ChatMessage>


```cpp
#include <iostream>

enum Color {
    RED,
    GREEN,
    BLUE
};

int main() {
    Color myColor = GREEN;

    // 使用指向枚举变量的指针
    Color* pColor = &myColor;

    // 输出枚举值
    std::cout << "Current color: " << *pColor << std::endl;

    return 0;
}
```

在这个例子中，`pColor` 是一个指向 `Color` 枚举变量的指针，它可以存储枚举值的地址。需要注意的是，输出指针的值（`*pColor`）会得到底层整数值（例如，0、1、2），而不是枚举名称。

<ChatMessage avatar="../../../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
实际编程中，很多情况下直接使用枚举变量而不是指针更为常见。
</ChatMessage>
