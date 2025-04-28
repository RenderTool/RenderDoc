---
title: EXP12.Super::XXXX() 中 return 不会中断子类函数执行的问题
order : 11
category:
  - u++
---

## 问题描述

<chatmessage avatar="../../assets/emoji/new7.png" :avatarWidth="40">

`Super::XXXX()` 中` return` 不会中断子类函数执行的问题

</chatmessage>

### 问题复现

<chatmessage avatar="../../assets/emoji/new7.png" :avatarWidth="40">
这是基类
</chatmessage>


```cpp
void UExorcistViewModelBase::Initialize()
{
	Super::Initialize();
	if (bInitialized) return;
	bInitialized = true;
	check(DataCollection);
}
```

<chatmessage avatar="../../assets/emoji/new7.png" :avatarWidth="40">
这是派生类
</chatmessage>

```cpp
void UVM_LobbyHero::Initialize()
{
	Super::Initialize();
	UKismetSystemLibrary::PrintString(this,CurrentInfo.SelectedCategory.ToString(), true, true, FColor::Blue);
}
```
<chatmessage avatar="../../assets/emoji/new7.png" :avatarWidth="40">

结果是派生类多次调用`Initialize()`会一直打印

</chatmessage>


### 问题提出


<chatmessage avatar="../../assets/emoji/new7.png" :avatarWidth="40">

父类里 `if (bInitialized) return`; 后已经 `return` 了，为什么子类自己的后续代码仍然会继续执行？

</chatmessage>


###  问题解答

### 1. `return` 只作用于**当前函数**

- 在 C++ 中，`return;` 语句只会让**当前执行的函数**立即结束。
- 也就是说，`UExorcistViewModelBase::Initialize()` 在遇到 `return` 后会停止执行**父类自己的剩余代码**，并**返回到子类**继续执行子类的 `Initialize()` 后续内容。
- **不会**因为父类 `return;`，而中断子类 `Initialize()` 的流程。

### 2. 函数调用有**调用栈**

- 调用栈里是按层级顺序压入的。
- 子类 `Initialize()` 调用 `Super::Initialize()` → 进入父类 → 父类执行结束 → 返回子类继续执行。


>示意流程：

```
子类 Initialize()
└── 调用 → 父类 Initialize()
    └── (父类遇到 return 提前结束)
└── 返回 → 继续子类 Initialize() 后续代码
```

###  解决方案

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
子类需要自己判断并中断执行
</chatmessage>


```cpp
void UVM_LobbyHero::Initialize()
{
    Super::Initialize();
    
    // 子类也要加这一行！
    if (bInitialized)
        return;  
}
```
