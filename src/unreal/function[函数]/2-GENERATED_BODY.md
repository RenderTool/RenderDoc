---
title: F2.GENERATED_BODY()
order: 2
category:
  - u++
tag:
  - Specifiers
---

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
GENERATED_BODY()有什么作用?
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

GENERATED_BODY() 是 Unreal Engine（UE） 的宏，用于自动生成反射（Reflection）系统所需的代码，使 UCLASS、USTRUCT、UENUM 这些 UE 类型支持 蓝图、GC（垃圾回收）、属性系统等。

</chatmessage>

### 具体作用

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
当你在 UCLASS、USTRUCT 或 UENUM 里写 GENERATED_BODY()，编译时 Unreal Header Tool（UHT）会自动生成一些必须的代码，使类/结构体/枚举支持：
</chatmessage>


1. 反射（Reflection） → 让 UE 知道它的存在，并支持蓝图、GC（垃圾回收）、网络复制等功能

2. 类声明宏 （Class Declaration Macro） → 在 C++ 中声明类

```cpp
DECLARE_CLASS(UDataViewModelBase, UObject, COMPILED_IN_FLAGS(CLASS_Abstract), CASTCLASS_None, TEXT("/Script/DataSystem"), NO_API)
```

3. 属性序列化（Serialization） → 保存和加载数据

```cpp
DECLARE_SERIALIZER(UDataViewModelBase)
```

4. VTable（虚函数表）支持

```cpp
DECLARE_VTABLE_PTR_HELPER_CTOR(NO_API, UDataViewModelBase);
DEFINE_VTABLE_PTR_HELPER_CTOR_CALLER(UDataViewModelBase);
DEFINE_ABSTRACT_DEFAULT_CONSTRUCTOR_CALL(UDataViewModelBase)
```

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
真的吗！ 我不信(Dog)
</chatmessage>

### 眼见为实

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

每个类UHT都会自动生成`#include "xxx.generated.h"`,咱们可以加入一探究竟。

</chatmessage>

![](..%2Fassets%2FGENERATEDBODY.png)
