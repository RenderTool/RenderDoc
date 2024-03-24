---
title: F21.Spawn actor|带参生成
order : 21
category:
  - u++
---

### 导言

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
Spawn actor|带参生成怎么做？
</chatmessage>

```cpp
AEquipmentBase* NewActor = GetWorld()->SpawnActor<AEquipmentBase>(AEquipmentBase::StaticClass());
if (NewActor)
{
    NewActor->ItemTag = PickUpStruct.ItemTag;
    NewActor->Quantity = PickUpStruct.Quantity;
}

```

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
这样好像不太行
</chatmessage>


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
可以使用SpawnActorDeferred 生成 Actor，他不会立即初始化，而是设置 Actor 的属性后手动调用 FinishSpawning初始化。
</chatmessage>


```cpp
 // 使用 SpawnActorDeferred 生成 Actor
    AMyActor* NewActor = GetWorld()->SpawnActorDeferred<AMyActor>(AMyActor::StaticClass(), FTransform::Identity);

    if (NewActor)
    {
        // 设置 Actor 的属性
        NewActor->ItemTag = ItemTag;
        NewActor->Quantity = Quantity;

        // 完成 Actor 的生成
        NewActor->FinishSpawning(FTransform(SpawnLocation));
    }
```