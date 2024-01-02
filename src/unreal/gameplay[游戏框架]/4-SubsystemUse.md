---
title: GP4.1.Subsystem|实践
order : 5
category:
  - u++
---

## Subsystem|实践

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
Subsystem|实践
</chatmessage>

### 1. 继承对应的子系统

```md
- 引擎		-> 继承 UEngineSubsystem
- 编辑器		-> 继承 UEditorSubsystem
- 游戏实例	-> 继承 UGameInstanceSubsystem
- 世界		-> 继承 UWorldSubsystem
- 本地玩家	-> 继承 ULocalPlayerSubsystem
```
![](..%2Fassets%2Fsubsst.png)

### 2.添加函数

::: code-tabs#language

@tab ExorcistGameInstanceSubsystem.h

```cpp
#pragma once

#include "CoreMinimal.h"
#include "Subsystems/GameInstanceSubsystem.h"
#include "MyGameInstanceSubsystem.generated.h"

UCLASS()
class EXORCIST_API UMyGameInstanceSubsystem : public UGameInstanceSubsystem
{
	GENERATED_BODY()
public:
	//是否创建这个子系统
	virtual bool ShouldCreateSubsystem(UObject* Outer)  const override;
	//初始化
	virtual void Initialize(FSubsystemCollectionBase& Collection) override;
	//销毁
	virtual void Deinitialize() override;
public:
	UPROPERTY(BlueprintReadWrite)
	int32 HP;
};

```
@tab ExorcistGameInstanceSubsystem.cpp
```cpp

#include "UMyGameInstanceSubsystem.h"

bool UMyGameInstanceSubsystem::ShouldCreateSubsystem(UObject* Outer) const
{
	return Super::ShouldCreateSubsystem(Outer);
}

void UMyGameInstanceSubsystem::Initialize(FSubsystemCollectionBase& Collection)
{
	Super::Initialize(Collection);
}

void UMyGameInstanceSubsystem::Deinitialize()
{
	Super::Deinitialize();
}

```
:::

### 3. 其他类中使用

```cpp
//UMyEngineSubsystem获取
UMyEngineSubsystem* MySubsystem = GEngine->GetEngineSubsystem<UMyEngineSubsystem>();

//UMyEditorSubsystem的获取
UMyEditorSubsystem* MySubsystem = GEditor->GetEditorSubsystem<UMyEditorSubsystem>();

//UMyGameInstanceSubsystem的获取
UGameInstance* GameInstance = UGameplayStatics::GetGameInstance(...);
UMyGameInstanceSubsystem* MySubsystem = GameInstance->GetSubsystem<UMyGameInstanceSubsystem>();

//UMyWorldSubsystem的获取
UWorld* World=MyActor->GetWorld();  //world用各种方式也都可以
UMyWorldSubsystem* MySubsystem=World->GetSubsystem<UMyWorldSubsystem>();

//UMyLocalPlayerSubsystem的获取
ULocalPlayer* LocalPlayer = Cast<ULocalPlayer>(PlayerController->Player)
UMyLocalPlayerSubsystem * MySubsystem = LocalPlayer->GetSubsystem<UMyLocalPlayerSubsystem>();
```
### 4.蓝图中使用

![](..%2Fassets%2Fsub.png)