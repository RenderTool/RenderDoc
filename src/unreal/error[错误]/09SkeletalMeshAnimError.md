---
title: Error9.骨骼网格体动画天坑！
order : 9
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
起因是这样得，我在做角色皮肤切换效果
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
然后呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
按正常人的思维来说，只要设置新的骨骼网格体+播放指定动画就行了！
</chatmessage>

![](..%2Fassets%2Fnew%20animation02.jpg)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
一开始我只使用了前面的设置蒙皮资产和更新切换不同的角色，实现的非常完美！
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpimpove09.gif"/>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
然后我把后面的节点也用上了
</chatmessage>

```cpp
void UExorcistFunctionLibrary::SetSkeletalMeshAndAnimation(USkeletalMesh* NewMesh, UAnimationAsset* NewAnimation,
                                                           float PlayRate, bool bLooping,
                                                           USkeletalMeshComponent* TargetMeshComponent)
{
	if (TargetMeshComponent)
	{
		// 设置骨骼网格
		TargetMeshComponent->SetSkeletalMesh(NewMesh);

		// 播放动画
		if (NewAnimation)
		{
			TargetMeshComponent->PlayAnimation(NewAnimation, bLooping);
			TargetMeshComponent->SetPlayRate(PlayRate);
		}
	}
}
```
<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
悲剧发生了！切换动画后角色的材质ID出现了错位。
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpimpove10.gif"/>


<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
我翻开了源码发现了这里两段函数！
</chatmessage>

![](..%2Fassets%2Fnew%20animation04.png)

```cpp
void USkeletalMeshComponent::PlayAnimation(class UAnimationAsset* NewAnimToPlay, bool bLooping)
{
	SetAnimationMode(EAnimationMode::AnimationSingleNode);
	SetAnimation(NewAnimToPlay);
	Play(bLooping);
}

void USkeletalMeshComponent::SetAnimation(UAnimationAsset* NewAnimToPlay)
{
	UAnimSingleNodeInstance* SingleNodeInstance = GetSingleNodeInstance();
	if (SingleNodeInstance)
	{
		SingleNodeInstance->SetAnimationAsset(NewAnimToPlay, false);
		SingleNodeInstance->SetPlaying(false);
	}
	else if( AnimScriptInstance != nullptr )
	{
		UE_LOG(LogAnimation, Warning, TEXT("Currently in Animation Blueprint mode. Please change AnimationMode to Use Animation Asset"));
	}
}
```

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

UE5.2版本中PlayAnimation 和SetAnimation 都能更新动画，但都不能解决材质Bug!

</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpimpove11.gif"/>


<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
目前有两个解决方案：
</chatmessage>

### 一. 动态创建组件

![](..%2Fassets%2Fnew%20animation03.png)


#### 1.使用 `NewObject` 和 `RegisterComponent`：

```cpp
// 创建 Actor Component
USkeletalMeshComponent* SkeletalMeshComponent = NewObject<USkeletalMeshComponent>(this, USkeletalMeshComponent::StaticClass(), TEXT("SkeletalMeshComponent"));

// 注册组件
SkeletalMeshComponent->RegisterComponent();
```

#### 2. 使用 `AddInstanceComponent`：

```cpp
USkeletalMeshComponent* SkeletalMeshComponent = AddInstanceComponent(USkeletalMeshComponent::StaticClass(), TEXT("SkeletalMeshComponent"));
SkeletalMeshComponent->SetRelativeTransform(InStruct.SkeletalTransform);
```

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

- `AddInstanceComponent` 是 `UActorComponent` 的一个成员函数，用于在运行时添加一个新的组件实例到 AActor 上。
- 这个方法内部实际上也是使用了 `NewObject` 和 `RegisterComponent`，但是提供了更简化的接口，特别是在 AActor 子类中更方便。

</chatmessage>


### 二. 缓存材质，传递材质

![](..%2Fassets%2Fnode.png)

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
注意不要偷懒直接用SetMaterials,GetMaterials 返回的是 Skeletal Mesh 中的材质数组的一个拷贝，而不是对原始数组的引用。
</chatmessage>

```cpp
// 其中SkeletalMesh为传入的新的骨骼网格物体，请自己判断原始模型上有没有材质
TArray<FSkeletalMaterial> CurrentMats = SkeletalMesh->GetMaterials();
SkeletalMeshComponent->SetSkeletalMesh(SkeletalMesh);
SkeletalMeshComponent->SetMaterials(CurrentMats);
```

>正确的应该是：

```cpp
TArray<FSkeletalMaterial> CurrentMats = SkeletalMesh->GetMaterials();
if (CurrentMats.Num() > 0)
{
    for(int32 i=0;i<CurrentMats.Num();++i)
    {
    SkeletalMeshComponent->SetMaterial(i,CurrentMats[i].MaterialInterface);
    }
}
```