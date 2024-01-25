---
title: Error7.TSubsystemClass must be derived from TBaseType
order : 7
category:
  - u++
---


<chatmessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
Baba!为什么我获取子系统编译报错了！
</chatmessage>

![](..%2Fassets%2Fsuberror.png)

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
看看代码
</chatmessage>

```cpp
	InventorySubsystem = UGameplayStatics::GetGameInstance(this)->GetSubsystem<UExorcistInventorySubsystem>();
	check(InventorySubsystem);
	
	ExtensionSubsystem = UGameplayStatics::GetGameInstance(this)->GetSubsystem<UUIExtensionSubsystem>();
	check(ExtensionSubsystem);
```

### 解决思路

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
不好意思！ExtensionSubsystem并不是gamesubsystem![回顾子系统](../core[核心]/4.1-SubsystemUse.md)
</chatmessage>

![](..%2Fassets%2Fworldsubsystem.png)

```cpp
	ExtensionSubsystem = GetWorld()->GetSubsystem<UUIExtensionSubsystem>();
```
