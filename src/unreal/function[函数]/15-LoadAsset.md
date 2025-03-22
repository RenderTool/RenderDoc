---
title: F15.AssetLoad的几种方法
order : 15
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
资源加载的几种写法
</chatmessage>

## 前置

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

食用本文建议先了解`类和对象`的介绍！[直通车](10-PTRINUE.md)

</chatmessage>

## 异步

![](..%2Fassets%2Fload001.png)

```cpp
//全局Handle
private:
	TSharedPtr<FStreamableHandle> Handle;
void UDataDefinitionManager::AsyncCollectionDefinitions()
{
	TArray<FPrimaryAssetId> AssetIds;
	const TArray<FName> LoadBundles;
	
	UKismetSystemLibrary::GetPrimaryAssetIdList(FPrimaryAssetType(CollectionDefinitionTypeName), AssetIds);

	if (AssetIds.IsEmpty())
	{
		UE_LOG(LogTemp, Warning, TEXT("No assets found for type %s"), *CollectionDefinitionTypeName.ToString());
		return;
	}
	
	UnloadAssets();
	
	UAssetManager& Manager = UAssetManager::Get();
	
	const FStreamableDelegate& NewDelegate = FStreamableDelegate::CreateUObject(this, &UDataDefinitionManager::CollectionCompleted);
	
	Handle = Manager.LoadPrimaryAssets(AssetIds,LoadBundles,NewDelegate);
	
}

void UDataDefinitionManager::CollectionCompleted()
{
	TArray<UObject*> Loaded;

	const UAssetManager& Manager = UAssetManager::Get();
	//也可以直接
	Manager.GetPrimaryAssetObjectList(FPrimaryAssetType(CollectionDefinitionTypeName),Loaded);

	if(!Handle.IsValid()) return;
	Handle->GetLoadedAssets(Loaded);
	
	if(Loaded.IsEmpty()) return;
	
	CachedFragments.Empty();
	for (UObject* LoadedObject : Loaded)
	{
		if (auto DataDefinition = Cast<UDataDefinition>(LoadedObject))
		{
			CachedFragments.Add(DataDefinition->Name,DataDefinition);
		}
	}
	OnDefinitionsLoaded.Broadcast();
}

```

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
对应的蓝图节点
</chatmessage>

![](..%2Fassets%2Floadassets.png)

### 问题
<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
为什么资产加载后不需要实例化？
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" alignLeft >

Handle->GetLoadedAsset() 返回加载完成的资产，已经是实例化的对象，它返回都是 `uobject`。

</chatmessage>

![](..%2Fassets%2Fuobject.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
可是有时候我们会在这种资产中配置对象，这个对象为什么也被实例化了？
</chatmessage>

![](..%2Fassets%2Fslih.png)


>2025/0322 补充

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" alignLeft >
定义的类中需要满足以下条件：
</chatmessage>

1. 使用的类型反射宏UPROPERTY(Instanced) ,必须标记为`Instanced`
2. 对应的对象反射宏UCLASS(DefaultToInstanced, EditInlineNew, Abstract),必须标记为`EditInlineNew`
3. 注意类中的SoftPtr需要手动异步加载

![](..%2Fassets%2FAyscLoad.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
6666
</chatmessage>

## 同步

![](..%2Fassets%2Fload002.png)


## 参考文档

[https://www.cnblogs.com/shiroe/p/14710066.html](https://www.cnblogs.com/shiroe/p/14710066.html)

[官方文档](https://docs.unrealengine.com/5.3/zh-CN/asynchronous-asset-loading-in-unreal-engine/)


[官方直播](https://www.bilibili.com/video/BV1Mr4y1A7nZ/?t=1h03m33s&vd_source=fc61eb54bf3245afbff2be6b8c1ebfc2)

[https://qiita.com/Zi_su/items/81dc5b5e29a96ad2cecc](https://qiita.com/Zi_su/items/81dc5b5e29a96ad2cecc)

[https://jdelezenne.github.io/Codex/UE4/Assets%20Streaming.html](https://jdelezenne.github.io/Codex/UE4/Assets%20Streaming.html)