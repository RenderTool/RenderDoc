---
title: c++2.inline[内联]
order: 2
category:
  - c++
---

<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
内联函数（inline functions）是在C++中用于提高程序性能的一种手段。
</chatmessage>

### 内联函数

<chatmessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40">
使用 inline 关键字，编译器会尝试在调用处直接展开函数的代码，而不是生成函数调用的指令。<br>
这可以减少函数调用的开销，特别适用于简单的、频繁调用的小函数。
</chatmessage>

```cpp
#include <iostream>

// 定义内联函数
inline int add(int a, int b) 
{
    return a + b;
}

int main() 
{
    int x = 5;
    int y = 10;

    // 调用内联函数
    int result = add(x, y);

    std::cout << "Result: " << result << std::endl;

    return 0;
}

```

### 内联命名空间

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

1. 编译器会将使用 `inline` 关键字修饰命名空间内的函数、类导出到所在的<span style="color: #c0392b">上一层</span>父空间中。<br>
2. 镶嵌几个`inline`就移动几层。

</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40">
inline将ChildNamespace2内函数 移到 ChildNamespace
</chatmessage>

```cpp
#include <iostream>

namespace ParentNamespace
{
	 namespace ChildNamespace
    {
		inline namespace ChildNamespace2
   		{
			class TestClass
			{
			public:
				void TestFunction()
				{
					std::cout << "world" << std::endl;
				}
			};
        }
    }	
}

int main()
{
    // 正确传统作用域解析
    ParentNamespace::ChildNamespace::ChildNamespace2::TestClass{}.TestFunction();

    // 正确 inline将ChildNamespace2内函数 移到 ChildNamespace
	ParentNamespace::ChildNamespace::TestClass{}.TestFunction();

    // 错误 inline 只移动一层，即儿子变爸爸，不变爷爷。
	ParentNamespace::TestClass{}.TestFunction();

    return 0;
}

```
<chatmessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40">
镶嵌几个inline就移动几层，注意看第五行的变化
</chatmessage>


```cpp{5}
#include <iostream>

namespace ParentNamespace
{
	 inline namespace ChildNamespace
    {
		inline namespace ChildNamespace2
   		{
			class TestClass
			{
			public:
				void TestFunction()
				{
					std::cout << "world" << std::endl;
				}
			};
        }
    }	
}

int main()
{
    // 正确传统作用域解析
    ParentNamespace::ChildNamespace::ChildNamespace2::TestClass{}.TestFunction();

    // 正确 inline将ChildNamespace2内函数 移到 ChildNamespace
	ParentNamespace::ChildNamespace::TestClass{}.TestFunction();

    // 正确 两层inline，函数被提了两次。
	ParentNamespace::TestClass{}.TestFunction();

    return 0;
}

```

<chatmessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40">
但需要注意避免滥，像下面这种情况，外层存在同名类就会导致编译器报错（二义性）。
</chatmessage>

```cpp
#include <iostream>

namespace ParentNamespace
{
    inline namespace ChildNamespace
    {
        class TestClass
        {
        public:
            void TestFunction()
            {
                std::cout << "hello" << std::endl;
            }
        };

        inline namespace ChildNamespace2
        {
            class TestClass // 使用不同的类名
            {
            public:
                void TestFunction()
                {
                    std::cout << "world" << std::endl;
                }
            };
        }
    }
}

int main()
{

    ParentNamespace::TestClass{}.TestFunction();//错误inline后出现同名class导致二义性

    return 0;
}

```