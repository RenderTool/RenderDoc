---
title: F23.Blueprintable|TimeHandle定时任务
order : 23
category:
  - u++
---

### 导言

> 在UE5中，往往有一些定时的需求，比如一段时间内开启护盾(当然这里咱们不考虑使用GAS的GE等效果来实现)，这时候往往需要自己设定一个定时器，
给定一个时间用来开启关闭特效。


<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="35">
SO,U++中咱们该怎么开启定时器呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
废话不多说，直接上代码
</chatmessage>

### 实现

```cpp
UPROPERTY(VisibleAnywhere, BlueprintReadWrite, Category="DoodleJump")
bool bHasShield = false;

UFUNCTION()
void RemoveShield();	
	
void ADoodleJumpCharacter::GenerateShield_Implementation(float Time)
{
	
	// 如果之前没有护盾才播放护盾开启特效
	if (!bHasShield)
	{
		ShowShieldEffect(true);
	}

	bHasShield = true;

	// 重置计时器（重新计时 / 延长）
	GetWorldTimerManager().ClearTimer(ShieldTimerHandle);

	GetWorldTimerManager().SetTimer(
		ShieldTimerHandle,
		this,
		&ADoodleJumpCharacter::RemoveShield,
		Time,
		false
	);

	UE_LOG(LogTemp, Log, TEXT("Shield %s for %.2f seconds"),
		bHasShield ? TEXT("extended") : TEXT("activated"),
		Time);
}
void ADoodleJumpCharacter::RemoveShield()
{
	bHasShield = false;

	ShowShieldEffect(false);

	UE_LOG(LogTemp, Log, TEXT("Shield Expired"));
}

```


### 关键点：

1. **ClearTimer**
   保证如果护盾还没结束就再次调用函数，定时器会被清掉重新开始。

2. **SetTimer**
   重新启动一个新的计时器。

3. **bHasShield**
   在调用函数时直接设为 `true`，到时间后 `RemoveShield()` 把它设回 `false`。
