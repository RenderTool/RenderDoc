---
title: F1.模块（项目）名_API
order: 1
category:
  - u++
tag:
  - Specifiers
---

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="45">
Baba我真的快疯掉了！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
怎么了？
</chatmessage>

<chatmessage avatar="../../assets/emoji/kclr.png" :avatarWidth="38">
在虚幻引擎中添加一个类，自动生成的代码中经常可以看到形如"模块（项目）名_API"的字样,具体是拿来干什么的？
</chatmessage>

![](..%2Fassets%2Fapi.png)

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="45" alignLeft>
宏函数（Macro）知道吧，一种预处理器指令，用于在编译之前进行文本替换，UE中这种大写的一般就是宏函数。
</chatmessage>

<chatmessage avatar="../../assets/emoji/new8.png" :avatarWidth="60">
为什么要写这么多宏函数呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/new3.png" :avatarWidth="45" alignLeft>
为了简化编码、提高性能、实现特定功能等。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
那我们能讲讲一些常用的宏以及用途吗？
</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="45" alignLeft>
一口吃不成胖子，先来了解一下你提到的这个宏:<span style="color: #c0392b">模块（项目）名_API </span>
</chatmessage>

## 模块（项目）名_API 

<chatmessage avatar="../../assets/emoji/new4.png" :avatarWidth="50" alignLeft>

`模块（项目）名_API` 通常用于标记导出和导入规范，特别是在涉及到使用动态链接库（DLL）的情况下。<br>
确保在使用该库的项目中，类和函数的声明和定义能够正确地导入和导出(控制代码对外的可见性)

</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
我不理解！能举个例子吗？
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="45" alignLeft>
那就拿我们截图的蓝图函数库类为例吧
</chatmessage>

<chatmessage avatar="../../assets/emoji/new7.png" :avatarWidth="45" alignLeft>
新建一个蓝图函数库
</chatmessage>

```cpp
#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "TEST.generated.h"

UCLASS()
class MYGame_API UTEST : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()
	
public:
	
	UFUNCTION(BlueprintCallable, Category ="TEST")
	static void TestFun();
	
};
```
<chatmessage avatar="../../assets/emoji/new4.png" :avatarWidth="50" alignLeft>
去掉EXORCIST_API
</chatmessage>

```cpp
#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "TEST.generated.h"

UCLASS()
class UTEST : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()
	
public:
	
	UFUNCTION(BlueprintCallable, Category ="TEST")
	static void TestFun();
	
};
```
<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
编译后都没问题啊！
</chatmessage>

![](..%2Fassets%2FUHTBUILD.png)

<chatmessage avatar="../../assets/emoji/new5.png" :avatarWidth="45" alignLeft>

别急，重点康康蓝图里去掉`MYGame_API`还能不能用。

</chatmessage>

![](..%2Fassets%2Ftetsfun.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="45">
Good!目前来说他不会影响反射到蓝图节点中。
</chatmessage>

<chatmessage avatar="../../assets/emoji/new2.png" :avatarWidth="55" alignLeft>

继续测试，我们再新建一个其他类，并将没有`MYGame_API`的`Test.h`引入

</chatmessage>

```cpp
#include "TEST.h"

UFUNCTION(BlueprintCallable, Category = "TestOtherFun")
static void TestOtherFun();

void UExorcistFunctionLibrary::TestOtherFun()
{
	UTEST::TestFun();
}
```
<chatmessage avatar="../../assets/emoji/new9.png" :avatarWidth="45">
编译依然ok
</chatmessage>

![](..%2Fassets%2Fokbuild.png)

<chatmessage avatar="../../assets/emoji/new3.png" :avatarWidth="55">
项目中也一样正常使用
</chatmessage>


![](..%2Fassets%2Ftestotherfun.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
这么说这东西可有可无？
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="45" alignLeft>
这得从他的作用说起了:
</chatmessage>
如果某个类没有使用 `xxx_api` 这样的宏，有几种可能的原因：

1. **不需要导入和导出：** 对于一些类，特别是那些不涉及跨库边界的纯内部实现，可能没有必要使用这样的宏。如果一个类只在单一的项目中使用，而不需要在其他项目或库中导入，那么就不需要使用导入和导出规范。

2. **使用模板类或内联函数：** 对于模板类或内联函数，它们的定义通常放在头文件中，这样编译器可以在每个使用它们的地方生成对应的代码，而不需要导入和导出。

3. **宏定义中已经包含：** 在一些情况下，类的导出规范可能已经在其他宏定义中包含，因此没有必要重复定义。

4. **库或项目设计决策：** 有时，项目或库的设计决策可能决定不使用导入和导出规范。这可能是因为项目的组织结构，构建过程，或者对于代码的特定要求。

<chatmessage avatar="../../assets/emoji/new5.png" :avatarWidth="40">
按这个说法，需要导入和导出时也就是编写的引入自定义插件时才可能出现链接库错误？
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="45" alignLeft>
实践一下就知道了！
</chatmessage>

1. 新建一个插件,并在我们项目对应的`build.cs`加入插件模块
```cpp
PrivateDependencyModuleNames.AddRange(
new string[]
    {
    "插件模块名"
   }
);
```
2. 此时插件中没写`插件名_API`，编译后发生链接错误。

![](..%2Fassets%2Fbuidfailvoidut.png)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
看来确实是这么一回事。
</chatmessage>

## 参考链接
[csdn](https://blog.csdn.net/xcinkey/article/details/129152652)
[UE4 "private: static class UClass...](https://zhuanlan.zhihu.com/p/367223779)