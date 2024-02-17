---
title: c8.GAS|Gameplay Ability System 初识
order : 800
category:
  - u++
---
## GAS概述

Gameplay技能系统（Gameplay Ability System） 是构建Actor可以拥有和触发的技能和交互的一种框架。

## 基本流程

### 插件引入

![](..%2Fassets%2Fgas001.png)

### 模块引入

```cpp
PublicDependencyModuleNames.AddRange(new string[] { 
"GameplayTags",
"GameplayTasks",
"GameplayAbilities", 
```
### 环境搭建

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
也就是我们基本的GameMode、PlayerState、Control等
</chatmessage>

### AbilitySystemComponent(ASC)组件类

![](..%2Fassets%2Fgas002.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
按照官方的注释，我们可以得知GAS组件作为一个构通平台(接口)，将我们的GA、GE、AS成功串联
</chatmessage>

![](..%2Fassets%2Fgas003.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
啥意思？突然飙这么多专业术语我也是醉了！
</chatmessage>

### 知识储备

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
很好，看来我们想要先对今天的学习目标有个大概的认知，我们先来谈谈GAS到底是干什么的吧！
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
开头不是说了吗！是构建Actor可以拥有和触发的技能和交互的一种框架！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
就拿永劫无间得PVE来说，我们需要努力肝BOSS获取一些特殊属性、特殊技能的魂玉来提升自己。
</chatmessage>

![](..%2Fassets%2Fgas004.png)


## AS(AttributeSet)属性集

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
也就是说，我们一开始就得设计好一个游戏对局需要影响双方的哪些属性对吧？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
按照以往，我们往往需要一个结构体来定义这些属性的基础值，但GAS中我们可以用AttributeSet类定义代替他。
</chatmessage>

![](..%2Fassets%2Fgas005.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
他和我们以前定义的结构体有什么不同吗？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
功能上，AS将某个属性的值，比如体力进一步的细化了他的状态,并将这些状态封装到了FGameplayAttributeData结构体中
</chatmessage>

```cpp
USTRUCT(BlueprintType)
struct GAMEPLAYABILITIES_API FGameplayAttributeData
{
	GENERATED_BODY()
	FGameplayAttributeData()
		: BaseValue(0.f)
		, CurrentValue(0.f)
	{}

	FGameplayAttributeData(float DefaultValue)
		: BaseValue(DefaultValue)
		, CurrentValue(DefaultValue)
	{}

	virtual ~FGameplayAttributeData()
	{}

	/** Returns the current value, which includes temporary buffs */
	float GetCurrentValue() const;

	/** Modifies current value, normally only called by ability system or during initialization */
	virtual void SetCurrentValue(float NewValue);

	/** Returns the base value which only includes permanent changes */
	float GetBaseValue() const;

	/** Modifies the permanent base value, normally only called by ability system or during initialization */
	virtual void SetBaseValue(float NewValue);

protected:
	UPROPERTY(BlueprintReadOnly, Category = "Attribute")
	float BaseValue;

	UPROPERTY(BlueprintReadOnly, Category = "Attribute")
	float CurrentValue;
};

```
<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
这么说他不仅仅是一个简单的结构体，还拥有一些方法帮我们维护管理这些数据？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
是的，比如网络状态同步、属性本身状态广播等。
</chatmessage>

### BaseValue vs. CurrentValue

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
这里为什么会有BaseValue和CurrentValue两个值？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
你可以这么理解，BaseValue是长期属性，CurrentValue是短期属性。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
比如原来的走路速度是600u/s,通过GE给了一个暴走Buff持续15s速度提升到800u/s,这时候CurrentValue会被设置成800u/s,
但BaseValue还是600u/s,15s后Buff结束，CurrentValue变回原来的600u/s。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
那么这个长期属性和短期属性各自通过什么方法修改呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
后面我们讨论GameplayEffect的时候会有介绍，现在我们只需要知道有对应的模式去修改对应的属性即可。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
那就直接康康怎么用，比如我们需要给我们的游戏角色设定一些基本的生命属性.
</chatmessage>

::: code-tabs#language

@tab ExorcistAttributeSet.h

```cpp
#pragma once

#include "CoreMinimal.h"
#include "AttributeSet.h"
#include "AbilitySystemComponent.h"
#include "ExorcistAttributeSet.generated.h"

#define ATTRIBUTE_ACCESSORS(ClassName, PropertyName) \
GAMEPLAYATTRIBUTE_PROPERTY_GETTER(ClassName, PropertyName) \
GAMEPLAYATTRIBUTE_VALUE_GETTER(PropertyName) \
GAMEPLAYATTRIBUTE_VALUE_SETTER(PropertyName) \
GAMEPLAYATTRIBUTE_VALUE_INITTER(PropertyName)

UCLASS()
class EXORCIST_API UExorcistAttributeSet : public UAttributeSet
{
	GENERATED_BODY()

public:
	UExorcistAttributeSet();

	//2.重写复制函数
	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;

	//1.设置Health
	UPROPERTY(BlueprintReadOnly, Category = "Health", ReplicatedUsing = OnRep_Health)
	FGameplayAttributeData Health;

	ATTRIBUTE_ACCESSORS(UExorcistAttributeSet, Health);
	
	//3.客户端上接收属性更改
	UFUNCTION()
	void OnRep_Health(const FGameplayAttributeData& OldHealth);
};
```
@tab ExorcistAttributeSet.cpp
```cpp
#include "AbilitySystem/Attributes/ExorcistAttributeSet.h"
#include "Net/UnrealNetwork.h"

UExorcistAttributeSet::UExorcistAttributeSet()
{
	InitHealth(100.f);
}

void UExorcistAttributeSet::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const
{
	Super::GetLifetimeReplicatedProps(OutLifetimeProps);
	DOREPLIFETIME_CONDITION_NOTIFY(UExorcistAttributeSet, Health, COND_None, REPNOTIFY_Always);
}

void UExorcistAttributeSet::OnRep_Health(const FGameplayAttributeData& OldHealth)
{
	GAMEPLAYATTRIBUTE_REPNOTIFY(UExorcistAttributeSet, Health, OldHealth);
}
```
:::

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
卧槽卧槽！打住打住我已经开始迷茫了！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
说出你的疑惑。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
定义属性部分倒是好理解，无非就是用结构体代替原来的float，复制函数和以前一样。RPC那一套绑定通知函数和重写GetLifetimeReplicatedProps接口。
我的疑惑是开头你这一坨宏是闹哪样？
</chatmessage>

```cpp
#define ATTRIBUTE_ACCESSORS(ClassName, PropertyName) \
GAMEPLAYATTRIBUTE_PROPERTY_GETTER(ClassName, PropertyName) \
GAMEPLAYATTRIBUTE_VALUE_GETTER(PropertyName) \
GAMEPLAYATTRIBUTE_VALUE_SETTER(PropertyName) \
GAMEPLAYATTRIBUTE_VALUE_INITTER(PropertyName)
```
<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这坨宏其实copyfrom官方的插件。
</chatmessage>

![](..%2Fassets%2Fgas006.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
宏的目的是：只需通过ATTRIBUTE_ACCESSORS(ClassName, PropertyName)，即可生成与属性访问相关的代码，包括获取、设置和初始化属性的功能。
</chatmessage>

```cpp
#define GAMEPLAYATTRIBUTE_PROPERTY_GETTER(ClassName, PropertyName) \
	static FGameplayAttribute Get##PropertyName##Attribute() \
	{ \
		static FProperty* Prop = FindFieldChecked<FProperty>(ClassName::StaticClass(), GET_MEMBER_NAME_CHECKED(ClassName, PropertyName)); \
		return Prop; \
	}

#define GAMEPLAYATTRIBUTE_VALUE_GETTER(PropertyName) \
	FORCEINLINE float Get##PropertyName() const \
	{ \
		return PropertyName.GetCurrentValue(); \
	}

#define GAMEPLAYATTRIBUTE_VALUE_SETTER(PropertyName) \
	FORCEINLINE void Set##PropertyName(float NewVal) \
	{ \
		UAbilitySystemComponent* AbilityComp = GetOwningAbilitySystemComponent(); \
		if (ensure(AbilityComp)) \
		{ \
			AbilityComp->SetNumericAttributeBase(Get##PropertyName##Attribute(), NewVal); \
		}; \
	}

#define GAMEPLAYATTRIBUTE_VALUE_INITTER(PropertyName) \
	FORCEINLINE void Init##PropertyName(float NewVal) \
	{ \
		PropertyName.SetBaseValue(NewVal); \
		PropertyName.SetCurrentValue(NewVal); \
	}
```

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
我明白了，按照封装思想，我们总是喜欢用一些get、set、init等函数来获取、设置、初始化某个变量，一直重复写这些函数会显得很呆，比如之前我们的设置类中，获取
某个游戏的属性设置，就写了许多胶水代码。
</chatmessage>

```cpp	
//////////////////////////////////////////////////////////////////
// 玩家选择的英雄数据
public:
	
	UFUNCTION()
	const TMap<FName, int32>& GetHeroesSkinIDMap() const { return HeroesSkinIDMap; }	
	
	UFUNCTION()
	void SetHeroesSkinIDMap(TMap<FName, int32>& InPlayerSelectedHero) { HeroesSkinIDMap = InPlayerSelectedHero; }

private:
	/** 玩家最终确定选择的英雄映射表. */
	UPROPERTY(Config)
	TMap<FName, int32> HeroesSkinIDMap;
//////////////////////////////////////////////////////////////////
// end玩家选择的英雄数据
```
<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
ok，现在从本质上看，他还是属于一个数据类。现在我们不考虑MVC的设计思维，想想哪些Actor会用到他？
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
按照永劫的设计来说，用到的可能是某个魂玉、某个玩家、某个道具、某个NPC。
</chatmessage>

## GameplayEffect

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
按照惯性思维，道具这种死物只负责产生某种效果，玩家、NPC这种"活物"才会拥有某个AS属性。会通过某个行为彼此影响自身的AS属性，比如说装备某个魂玉
可以给整队购买打折，亦或者是使用血包给自己恢复多少血量。
</chatmessage>

1. **死物（Passive Entities）:**
    - **效果生成器（Effect Generator）:** 死物负责产生某种效果的实体，比如道具、装备、魂玉等。
    - **效果（Effect）:** 由效果生成器产生的具体效果，例如打折、恢复血量等。

2. **活物（Active Entities）:**
    - **属性承担者（Attribute Bearer）:** 活物是具有属性的实体，例如玩家和NPC。
    - **行为触发器（Action Trigger）:** 活物通过行为触发器来影响自身的属性，例如装备魂玉、使用血包等。

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
其实死物和活物来划分功能职责并不准确，但可以帮助我们学习理解后面的知识。在GAS中，有这么一个类，负责配置具体的一些效果，比如加多少血、比如扣多少血。
这个类叫GameplayEffect。GameplayEffect有三种持续类型: 即刻(Instant)持续(Duration)无限(Infinite)
</chatmessage>

![佬的图](..%2Fassets%2Fgas008.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
我大概理解你的意思了，按照GE的设计思路，只需要拥有GE的类，并且有效果生成的函数接口就能实现某种效果，比如5s内持续加血。可是有些效果是持续的、有些效果是瞬间的，
我们怎么去区分呢？
</chatmessage>

### Modifiers

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

问的好，还记得我们讨论增强输入系统时的Modifiers嘛？[传送门](4.2-EnhancedInput.md)

</chatmessage>

![](..%2Fassets%2Fgas009.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这种优秀的设计机制当然GAS中也拥有，我们的GE也有自己的Modifiers去配置不同状态效果。
</chatmessage>


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
UE中随便新建一个GE
</chatmessage>

![](..%2Fassets%2Fgas010.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
现在走还来得及吗？这东西是给人看的？
</chatmessage>

![](..%2Fassets%2Fgas011.png)


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

不要急，基于篇幅我把这些GE的各项详细给你提到专门的文章中。[传送门](8.1-GASGE.md)

</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
最终这些配置的效果怎么使用？又怎么触发呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

我们之前说过有死物和活物两个概念。先说`死物`部分。

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
严格意义上死物不会拥有某个技能，他只携带某种效果生成器和效果，我们可以通过GAS组件提供的函数库直接触发。
比如LOL/王者荣耀中购买装备以提升的属性加成。
比如一些药品，通过某个球体触发器触发，给OVER的Actor直接作用对应的GE。
</chatmessage>

![](..%2Fassets%2Fgas012.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
又或者是一些库存物件，玩家主动使用。这其实已经涉及到某个能力了——使用消耗品的能力。当然这取决于咱怎么定义能力。
比如：有一个技能变态到你在多久时间内不能打开背包，那么这个背包使用也算一个能力。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
无论怎么样，我们都得写一个拥有GAS组件、AS的角色类或者角色基类。当然你也可以按照NPC和玩家去进一步细分。
NPC直接挂载ASC组件，玩家的ASC写在PlayerState中，通过管理类或者子系统维护.
</chatmessage>

### 组件初始化

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
无论是NPC还是角色，都需要拥有ASC组件和AS属性，我们可以定义一个基类并写一些接口给不同的派生类使用。
</chatmessage>

::: code-tabs#language

@tab 角色基类.h

```cpp
public:
	virtual UYourAbilitySystemComponent* GetAbilitySystemComponent() const override;
	 UAttributeSet* GetAttributeSet() const{return AttributeSet;};
	 
protected:

	virtual void BeginPlay() override;
	
	UPROPERTY()
	TObjectPtr<UAbilitySystemComponent> AbilitySystemComponent;
	
	UPROPERTY()
	TObjectPtr<UAttributeSet> AttributeSet;
```
@tab 角色基类.cpp

```cpp
UAbilitySystemComponent* AExorcistCharacterBase::GetAbilitySystemComponent() const
{
	return AbilitySystemComponent;
}
```
:::

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
上面我们的角色基类中已经定义了ASC组件和AS指针，我们希望NPC类可以直接配置.
</chatmessage>

```cpp
ANPC::ANPC()
{
	AbilitySystemComponent = CreateDefaultSubobject<UYourAbilitySystemComponent>(TEXT("AbilitySystemComponent"));
	AbilitySystemComponent->SetIsReplicated(true);//复制能力
	AbilitySystemComponent->SetReplicationMode(EGameplayEffectReplicationMode::Minimal);//适用于多人联机的NPC
	
	AttributeSet = CreateDefaultSubobject<UYourAttributeSet>(TEXT("AttributeSet"));
}

void ANPC::BeginPlay()
{
	Super::BeginPlay();
	AbilitySystemComponent->InitAbilityActorInfo(this, this);
}
```
### 复制模式|同步模式

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
之前我们提到过ASC组件帮我们实现了基本的复制模式和复制预测，我看你NPC和玩家用了不同的复制模式，有什么区别嘛？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
区别：
</chatmessage>

| 复制模式    | 使用场景          | 描述                                                                        |
|---------|---------------|---------------------------------------------------------------------------|
| Full    | 单人游戏          | 每个 `GameplayEffect` 都会被复制到每个客户端。                                          |
| Mixed   | 多人游戏，玩家控制的角色  | `GameplayEffects` 仅被复制到拥有它的客户端。仅 `GameplayTags` 和 `GameplayCues` 被复制给所有人。 |
| Minimal | 多人游戏，AI 控制的角色 | `GameplayEffects` 不会被复制给任何人。仅 `GameplayTags` 和 `GameplayCues` 被复制给所有人。    |


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

接着配置我们的玩家类，我们希望一些数据层的逻辑交给更专业的类去管理，玩家的数据交给PlayerState类处理再合适不过了，即便是断线重连，也可以完美同步。
[参考](https://zhuanlan.zhihu.com/p/600034328)

</chatmessage>

```cpp
AYourPlayerState::AYourPlayerState()
{
	NetUpdateFrequency = 100.f;//网络更新速度

	AbilitySystemComponent = CreateDefaultSubobject<UYourAbilitySystemComponent>(TEXT("AbilitySystemComponent"));
	AbilitySystemComponent->SetIsReplicated(true);//复制能力
	AbilitySystemComponent->SetReplicationMode(EGameplayEffectReplicationMode::Mixed);//适用于多人联机的玩家
	AttributeSet = CreateDefaultSubobject<UYourAttributeSet>(TEXT("AttributeSet"));	
}
UAbilitySystemComponent* AYourPlayerState::GetAbilitySystemComponent() const
{
	return AbilitySystemComponent;
}
```
<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
接着，我们去Hero类获取对应的State即可
</chatmessage>

```cpp
	
virtual void PossessedBy(AController* NewController) override;
virtual void OnRep_PlayerState() override;

void AHeroCharacter::InitAbilityActorInfo()
{
	AYourPlayerState* YourPlayerState =GetPlayerState<AYourPlayerState>();
	check(YourPlayerState);
	YourPlayerState->GetAbilitySystemComponent()->InitAbilityActorInfo(YourPlayerState, this);
	AbilitySystemComponent = YourPlayerState->GetAbilitySystemComponent();
	AttributeSet = YourPlayerState->GetAttributeSet();
}
void AHeroCharacter::PossessedBy(AController* NewController)
{
	Super::PossessedBy(NewController);
	//Server
	InitAbilityActorInfo();
}

void AHeroCharacter::OnRep_PlayerState()
{
	Super::OnRep_PlayerState();
	//Client
	InitAbilityActorInfo();
}
```

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
至于使用GE的函数，选择就多了，可以用蓝图函数库，也可以自己子系统代理执行。
</chatmessage>

```cpp
//使用GE，传入拥有组件的Actor和目标Actor以及对应的GE。
UFUNCTION(BlueprintCallable, Category = "AbilitySubsystem")
void ApplyEffectToTarget(AActor* SourceActor,AActor* TargetActor,TSubclassOf<UGameplayEffect> GameplayEffect);

void UExorcistAbilitySubsystem::ApplyEffectToTarget(AActor* SourceActor ,AActor* TargetActor, TSubclassOf<UGameplayEffect> GameplayEffect)
{
	//检查传入的对象
	if(SourceActor == nullptr||TargetActor == nullptr||GameplayEffect == nullptr)
	{
		return;
	}
	//获取要使用的对象GAS组件
	UAbilitySystemComponent* TargetASC = UAbilitySystemBlueprintLibrary::GetAbilitySystemComponent(TargetActor);
	if(TargetASC == nullptr)
	{
		return;
	}
	FGameplayEffectContextHandle Context = TargetASC->MakeEffectContext();
	Context.AddSourceObject(SourceActor);
	FGameplayEffectSpecHandle SpecHandle = TargetASC->MakeOutgoingSpec(GameplayEffect, 1, Context);
	TargetASC->ApplyGameplayEffectSpecToTarget(*SpecHandle.Data.Get(), TargetASC);
}
```

![](..%2Fassets%2Fgas016.png)

![](..%2Fassets%2Fgas017.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
如果我们希望我们的物品类更加独立，可以按照之前的装备系统只传入tag,查表获取对应的GE。
</chatmessage>

### 监听Attribute变化

```cpp
AbilitySystemComponent->GetGameplayAttributeValueChangeDelegate(AttributeSetBase->GetHealthAttribute()).AddUObject(this, &AGDPlayerState::HealthChanged);
virtual void HealthChanged(const FOnAttributeChangeData& Data);
```

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
目前我们的AS变化是不会反馈到UI上面的，可以写个UI子系统\管理类，或者写个技能子系统专门转发这些AS属性变化的委托。
</chatmessage>


::: code-tabs#language

@tab 你的子系统.h

```cpp
#pragma once

#include "CoreMinimal.h"
#include "GameplayEffectTypes.h"
#include "Subsystems/GameInstanceSubsystem.h"
#include "ExorcistAbilitySubsystem.generated.h"

class UExorcistAttributeSet;
class UAbilitySystemComponent;

DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnHealthChangeDelegate,float,NewHealth);

UCLASS()
class EXORCIST_API UExorcistAbilitySubsystem : public UGameInstanceSubsystem
{
	GENERATED_BODY()
public:
	virtual bool ShouldCreateSubsystem(UObject* Outer) const override;
	virtual void Initialize(FSubsystemCollectionBase& Collection) override;
	virtual void Deinitialize() override;

	UPROPERTY(BlueprintAssignable, Category = "AbilitySubsystem|Health")
	FOnHealthChangeDelegate OnHealthChanged;

	//通过子系统转发AS属性更新
	UFUNCTION(BlueprintCallable, Category = "AbilitySubsystem")
	void BroadCastInitialValues();

	UPROPERTY(BlueprintReadOnly,Category = "AbilitySubsystem")
	TObjectPtr<UExorcistAttributeSet> ExorcistAttributeSet;
	
	UPROPERTY(BlueprintReadOnly,Category = "AbilitySubsystem")
    TObjectPtr<UAbilitySystemComponent> AbilitySystemComponent;

private:
	
	void OnHealthChange(const FOnAttributeChangeData& OnAttributeChangeData);
	
};
```
@tab 你的子系统.cpp

```cpp
#include "Subsystem/ExorcistAbilitySubsystem.h"
#include "AbilitySystem/Attributes/ExorcistAttributeSet.h"
#include "FrameWork/ExorcistPlayerState.h"


bool UExorcistAbilitySubsystem::ShouldCreateSubsystem(UObject* Outer) const
{
	return Super::ShouldCreateSubsystem(Outer);
}

void UExorcistAbilitySubsystem::Initialize(FSubsystemCollectionBase& Collection)
{
	Super::Initialize(Collection);

}

void UExorcistAbilitySubsystem::Deinitialize()
{
	Super::Deinitialize();
}

void UExorcistAbilitySubsystem::BroadCastInitialValues()
{
	// 获取本地玩家对应的 State
	ULocalPlayer* LocalPlayer = GetWorld()->GetFirstLocalPlayerFromController();
	if (!LocalPlayer)
	{
		return;
	}

	AExorcistPlayerState* PlayerState = Cast<AExorcistPlayerState>(LocalPlayer->PlayerController);
	if (!PlayerState)
	{
		return;
	}

	// 获取属性
	ExorcistAttributeSet = CastChecked<UExorcistAttributeSet>(PlayerState->GetAttributeSet());
	if (!ExorcistAttributeSet)
	{
		return;
	}

	// 广播初始值
	OnHealthChanged.Broadcast(ExorcistAttributeSet->GetHealth());

	AbilitySystemComponent = PlayerState->GetAbilitySystemComponent();
	if (AbilitySystemComponent)
	{
		// 绑定委托给我们的 OnHealthChange
		AbilitySystemComponent->GetGameplayAttributeValueChangeDelegate(ExorcistAttributeSet->GetHealthAttribute())
		.AddUObject(this, &UExorcistAbilitySubsystem::OnHealthChange);
	}
}
//一旦属性被修改会执行这个函数，然后我们用我们的委托转发他。
void UExorcistAbilitySubsystem::OnHealthChange(const FOnAttributeChangeData& OnAttributeChangeData)
{
	OnHealthChanged.Broadcast(OnAttributeChangeData.NewValue);
}
```
:::
<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
目前我们没写UI,可以在合适的地方使用我们的子系统打印这些数据。
</chatmessage>

![](..%2Fassets%2Fgas013.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
文档则写了一个异步的监听函数去监听某个值的变化。
</chatmessage>

![](..%2Fassets%2Fgas019.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
方法有很多，按需使用就行了。
</chatmessage>

### Debug

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
可以用Debug指令或者对应的GAS属性查看器
</chatmessage>

![](..%2Fassets%2Fgas015.png)

![](..%2Fassets%2Fgas014.png)

### GameAbility

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

再谈`活物`部分，玩过只狼的童鞋应该知道，习得某个技能能打出不同的效果。无论什么技能，打出的`GE效果`其实是通用的，只不过被一个叫做十字斩的`技能`触发(Apply)罢了。

</chatmessage>


![](..%2Fassets%2Fgas007.jpg)


<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
搜嘎!这么说我们要开始讨论技能部分了吧！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
别急，先来说说你理解的技能是什么？
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
之前我们已经讨论过了，比如王者荣耀LOL中的英雄技能点，又比如守望先锋中的源氏大招。
</chatmessage>


## 参考链接
[官网](https://docs.unrealengine.com/5.0/zh-CN/getting-started-with-the-gameplay-ability-system-in-unreal-engine/)

[GITHUB](https://github.com/BillEliot/GASDocumentation_Chinese)
