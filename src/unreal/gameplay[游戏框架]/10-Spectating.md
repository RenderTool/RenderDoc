---
title: GP10.Spectating System|观战系统
order : 10
category:
  - u++
---

## Spectating System

观战系统直观的分为两类，一类是主动观战系统比如比赛、观战模式。一类则是被动的，比如死亡观战。

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
网络上好像很少有讲观战系统的！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
那么今天我们来简单品尝一下观战系统！别慌，EpicBaba该写的都写的差不多了！
</chatmessage>

### 1.观战类|SpectatorPawn

```cpp
UMySpectatorPawnr : public APawn
```

### 2.观战类接口

::: code-tabs#language

@tab MySpectatorPawn.h

```cpp
virtual void SetupPlayerInputComponent(UInputComponent* InInputComponent) override;

/** Move camera to next player */
void ViewNextPlayer();

/** Move camera to previous player */
void ViewPrevPlayer();
```
@tab MySpectatorPawn.cpp
```cpp
void AMySpectatorPawn::SetupPlayerInputComponent(UInputComponent* InInputComponent)
{
    Super::SetupPlayerInputComponent(InInputComponent);

    InInputComponent->BindAction("ViewNext", IE_Pressed, this, &ThisClass::ViewNextPlayer);
    InInputComponent->BindAction("ViewPrev", IE_Pressed, this, &ThisClass::ViewPrevPlayer);
}

void AMySpectatorPawn::ViewNextPlayer()
{
    if (APlayerController* PC = GetController<APlayerController>())
    {
        PC->ServerViewNextPlayer();
    }
}

void AMySpectatorPawn::ViewPrevPlayer()
{
    if (APlayerController* PC = GetController<APlayerController>())
    {
        PC->ServerViewPrevPlayer();
    }
}
```
:::

