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
悲剧发生了！切换动画后角色的材质ID出现了错位，甚至蒙皮动画都出现了问题！
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpimpove10.gif"/>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
各自百度后，发现好像只能通过生成新的组件和移除组件来实现！
</chatmessage>

![](..%2Fassets%2Fnew%20animation03.png)

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
很显然，这不是一个好办法，重新生成组件和销毁组件的性能开销太大
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
最终我翻开了源码发现了这里两段函数！
</chatmessage>

![](..%2Fassets%2Fnew%20animation04.png)

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

是的，我们应该搞清楚一个动画正确的播放流程正确的调用顺序应该是 SetAnimationMode -> SetAnimation -> Play

</chatmessage>

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

PlayAnimation 可以理解成同个角色的播放不同动画，SetAnimation则是切换到不同角色后播放新的动画。
作为验证，你可以用之前的代码设置同个角色，播放不同的动画。

</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpimpove11.gif"/>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
卧槽！那么后面的同角色动画和不同角色动画切换岂不是要两个接口了？
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
可以做成两个接口，也可以用枚举切换，这个都是根据实际开发自适应决定的。
</chatmessage>