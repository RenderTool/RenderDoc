---
title: FUN3.BeginPlay
order : 2
category:
  - u++
---
<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >

C++中的`BeginPlay`是不是就是蓝图中的`EventBeginPlay`

</ChatMessage>

![](..%2Fassets%2Fbeginplay.png)

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>

回答问题之前我们先看看C++的`BeginPlay`

</ChatMessage>

>新建一个测试actor

```cpp
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "MyTest.generated.h"

UCLASS()
class EXORCIST_API AMyTest : public AActor
{
	GENERATED_BODY()

public:
	// Sets default values for this actor's properties
	AMyTest();

protected:
	// Called when the game starts or when spawned
	virtual void BeginPlay() override;

public:
	// Called every frame
	virtual void Tick(float DeltaTime) override;
		
};
```
<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
我们已经看到了继承重写的BeginPlay函数，现在我们往定义中添加一些测试代码
</ChatMessage>

```cpp
void AMyTest::BeginPlay()
{
	Super::BeginPlay();
	GEngine->AddOnScreenDebugMessage(-1, 5.0f, FColor::Blue, TEXT("C++ BeginPlay"));
}
```
<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
接着我们在派生的蓝图EventBeginPlay中也写一份打印，你觉得打印顺序是什么？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
蓝图派生自C++的actor，那么应该先打印C++的内容然后打印BP的内容。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

确实，按照我们的惯性思维这里的`EventBeginPlay`和`C++BeginPlay`认为是一个东西,所以应该先打印父项部分再打印子项，可事实真的这样吗？

</ChatMessage>

![](..%2Fassets%2Fbpfirst.png)

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
为什么先打印的BP?
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
说明我们调用C++BeginPlay 之前 已经调用了BP部分的函数。我们可以去源码中康康猫腻在哪！
</ChatMessage>

![](..%2Fassets%2Factorbeginplay.png)

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >

可是继承的父类Actor中 `BeginPlay`只是一个虚函数，而且没有宏标记！他是怎么映射到蓝图中的?

</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

起初我也以为是父类标记了`BeginPlay`的`UPROPERTY`,子类可以省略不写。现在看来并不是这样。我们康康定义的源码写了什么!

</ChatMessage>

```cpp
void AActor::BeginPlay()
{
	TRACE_OBJECT_LIFETIME_BEGIN(this);

	ensureMsgf(ActorHasBegunPlay == EActorBeginPlayState::BeginningPlay, TEXT("BeginPlay was called on actor %s which was in state %d"), *GetPathName(), (int32)ActorHasBegunPlay);
	SetLifeSpan( InitialLifeSpan );
	RegisterAllActorTickFunctions(true, false); // Components are done below.

	TInlineComponentArray<UActorComponent*> Components;
	GetComponents(Components);

	for (UActorComponent* Component : Components)
	{
		// bHasBegunPlay will be true for the component if the component was renamed and moved to a new outer during initialization
		if (Component->IsRegistered() && !Component->HasBegunPlay())
		{
			Component->RegisterAllComponentTickFunctions(true);
			Component->BeginPlay();
			ensureMsgf(Component->HasBegunPlay(), TEXT("Failed to route BeginPlay (%s)"), *Component->GetFullName());
		}
		else
		{
			// When an Actor begins play we expect only the not bAutoRegister false components to not be registered
			//check(!Component->bAutoRegister);
		}
	}

	if (GetAutoDestroyWhenFinished())
	{
		if (UWorld* MyWorld = GetWorld())
		{
			if (UAutoDestroySubsystem* AutoDestroySys = MyWorld->GetSubsystem<UAutoDestroySubsystem>())
			{
				AutoDestroySys->RegisterActor(this);
			}			
		}
	}

	ReceiveBeginPlay();

	ActorHasBegunPlay = EActorBeginPlayState::HasBegunPlay;
}
```

<ChatMessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" >

我发现他结尾调用了`ReceiveBeginPlay`！这个函数的声明的`UPROPERTY`元数据属性中就有 `meta=(DisplayName = "BeginPlay")`!!!

</ChatMessage>

![](..%2Fassets%2Feventbegin%21.png)

:::note
`meta=(DisplayName = "BeginPlay")`
用于修改显示节点名。
:::

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
没错，这就解释了为什么继承的Actor执行后会先调用蓝图部分的函数再调用C++。
</ChatMessage>

>因为我们加了Super::BeginPlay();所以执行顺序如下：
1. 重写后的Actor`BeginPlay`
2. 执行`BeginPlay`中的`ReceiveBeginPlay()`;——》`BP BeginPlay`
3. 执行打印——》C++`BeginPlay`

