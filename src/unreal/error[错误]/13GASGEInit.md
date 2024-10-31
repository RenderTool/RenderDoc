---
title: Error13. GAS|属性顺序导致的GE错乱
order : 13
category:
  - u++
---

## 省流

>先设置Max的属性，再设置正常的属性。

![](..%2Fassets%2FGASGE004.png)

## 问题描述

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
BABA!!!我的GE怎么初始化都有问题啊！
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
别急别急给我说说怎么个事。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
如图，我在做GE初始化时我的血条变成正常的一半了！
</chatmessage>

![](..%2Fassets%2FGASGE001.png)

## 问题排除

### 检查AttributeSet

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
是不是GE没正确同步呢？GE管理的AS属性和正常的变量一样需要开启网络同步,你是不是没有给自己的As属性标记变量复制啊
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
我的AS是这样的
</chatmessage>

```cpp

#define ATTRIBUTE_ACCESSORS(ClassName, PropertyName) \
GAMEPLAYATTRIBUTE_PROPERTY_GETTER(ClassName, PropertyName) \
GAMEPLAYATTRIBUTE_VALUE_GETTER(PropertyName) \
GAMEPLAYATTRIBUTE_VALUE_SETTER(PropertyName) \
GAMEPLAYATTRIBUTE_VALUE_INITTER(PropertyName)

	class EXORCIST_API UExorcistAttributeSet : public UAttributeSet
{
	GENERATED_BODY()

public:
	UExorcistAttributeSet();

	//重写复制函数
	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;

	//属性修改前调用的函数，用于钳制输出或者一些规则设定，但他不会真正的修改某个Attributes属性
	virtual void PreAttributeChange(const FGameplayAttribute& Attribute, float& NewValue) override;
	
	//设置Health
	UPROPERTY(BlueprintReadOnly, Category = "Health", ReplicatedUsing = OnRep_Health)
	FGameplayAttributeData Health;

	ATTRIBUTE_ACCESSORS(UExorcistAttributeSet, Health);
	
	//设置最大Health
	UPROPERTY(BlueprintReadOnly, Category = "Health", ReplicatedUsing = OnRep_MaxHealth)
	FGameplayAttributeData MaxHealth;

	ATTRIBUTE_ACCESSORS(UExorcistAttributeSet, MaxHealth);
}
UExorcistAttributeSet::UExorcistAttributeSet()
{
	InitHealth(100.f);
	InitMaxHealth(100.f);
}

void UExorcistAttributeSet::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const
{
	Super::GetLifetimeReplicatedProps(OutLifetimeProps);
	DOREPLIFETIME_CONDITION_NOTIFY(UExorcistAttributeSet, Health, COND_None, REPNOTIFY_Always);
	DOREPLIFETIME_CONDITION_NOTIFY(UExorcistAttributeSet, MaxHealth, COND_None, REPNOTIFY_Always);
}
void UExorcistAttributeSet::OnRep_Health(const FGameplayAttributeData& OldHealth)
{
	GAMEPLAYATTRIBUTE_REPNOTIFY(UExorcistAttributeSet, Health, OldHealth);
}

void UExorcistAttributeSet::OnRep_MaxHealth(const FGameplayAttributeData& OldHealth)
{
	GAMEPLAYATTRIBUTE_REPNOTIFY(UExorcistAttributeSet, MaxHealth, OldHealth);
}
```

### 检查GameplayEffect

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
看起来没啥毛病，可以排除AS本身的问题。理论上AS是Replicated,已经复合网络同步两大条件的变量同步，所以初始化时我们只需要在服务器上执行即可
</chatmessage>


```cpp
void AExorcistCharacterHero::PossessedBy(AController * NewController)
{
	Super::PossessedBy(NewController);
	InitGE();
}

void AExorcistCharacterHero::OnRep_PlayerState()
{
	Super::OnRep_PlayerState();
}

```

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
是啊!我就是这么写的啊，PossessedBy服务器上执行,初始化GE没毛病啊！并且我还特意在BeginPlay里延迟了5S再加一次GE，却能正常显示！
</chatmessage>

![](..%2Fassets%2FGASGE002.png)


<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
是的为了排除问题我还特意做了一个Actor,用于给定GE
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup42.gif"/>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
等等！也就是说你初始化过一次，然后再次初始化才能正常是吧！打开你的GE给我看看吧。
</chatmessage>

![](..%2Fassets%2FGASGE003.png)

### 解决思路

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
现在我要你先设置Max的属性，再设置正常的属性。
</chatmessage>

![](..%2Fassets%2FGASGE004.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
卧槽！绝了！
</chatmessage>

![GASGE005.png](..%2Fassets%2FGASGE005.png)