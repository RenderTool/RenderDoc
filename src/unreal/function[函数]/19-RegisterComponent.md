---
title: F19.RegisterComponent|组件
order : 19
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
RegisterComponent的几种方法
</chatmessage>

### 1.使用CDO：

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
只可在构造函数中创建。
</chatmessage>

```cpp
	SpringArm = CreateDefaultSubobject<USpringArmComponent>(TEXT("SpringArm"));
	SpringArm->SetupAttachment(RootComponent);
```
<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
有时候需要动态创建组件，比如一些组件中挂载其他组件，使用CDO可能会失效。
</chatmessage>

![](..%2Fassets%2Fnew%20animation03.png)


### 2.使用 `NewObject` 和 `RegisterComponent`：

```cpp
// 创建 Actor Component
USkeletalMeshComponent* SkeletalMeshComponent = NewObject<USkeletalMeshComponent>(this, USkeletalMeshComponent::StaticClass(), TEXT("SkeletalMeshComponent"));

// 注册组件
SkeletalMeshComponent->RegisterComponent();
```

### 3. 使用 `AddInstanceComponent`：

```cpp
USkeletalMeshComponent* SkeletalMeshComponent = AddInstanceComponent(USkeletalMeshComponent::StaticClass(), TEXT("SkeletalMeshComponent"));
SkeletalMeshComponent->SetRelativeTransform(InStruct.SkeletalTransform);
```

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

- `AddInstanceComponent` 是 `UActorComponent` 的一个成员函数，用于在运行时添加一个新的组件实例到 AActor 上。
- 这个方法内部实际上也是使用了 `NewObject` 和 `RegisterComponent`，但是提供了更简化的接口，特别是在 AActor 子类中更方便。

</chatmessage>