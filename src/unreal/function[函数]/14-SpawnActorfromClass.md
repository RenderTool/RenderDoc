---
title: F14.SpawnActorFromClass
order : 14
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >

`SpawnActorFromClass`顾名思义，从类构建生成对象

</chatmessage>

![](..%2Fassets%2Fspawnact.png)

### 简单实例

>角色按1生成一个球

![](../assets/spwanActor.png)

<iframe src="https://blueprintue.com/render/tabw8zu8/" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

### cpp

```cpp
	//获取玩家ActorforwardVector
	FVector forwardVector = GetActorForwardVector();
	//获取玩家ActorLocation
	FVector location = GetActorLocation();

	//ForwardVector*200+Location
	FVector const spawnLocation = forwardVector * 200 + location;

	UWorld* const World = GetWorld();
	//断言
	check(World);
	
	 World->SpawnActor<AActor>(CurrentTarget,spawnLocation,FRotator::ZeroRotator);
```

## 2024/0803 [摘自大佬博客](https://blog.csdn.net/qq_29523119/article/details/86368182)

### SpawnActor流程

![](..%2Fassets%2Fspawn.png)

### SpawnActorDeferred 流程

![](..%2Fassets%2FSpawnActorDeferred.png)

```cpp
	// 延迟生成
	AInventoryItemActor* SpawnedItem =  GetWorld()->SpawnActorDeferred<AInventoryItemActor>(AInventoryItemActor::StaticClass(),SpawnTransform);
	if (SpawnedItem)
	{
		// 将设置好的数据指针赋值给生成的Actor
		SpawnedItem->SetPickUpData(InventoryPickUpData);
		// 完成生成
		SpawnedItem->FinishSpawning(SpawnTransform);
	}
```
