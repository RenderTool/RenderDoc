---
title: M.MultiWorld|游戏中打开仓库
order : 200
category:
  - u++
---

## 导言

>当你试图在游戏中切换英雄或打开背包时，你面临的第一个问题就是怎么打开这些带有独立光照、背景的场景，并且不影响原本的世界。

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
BABA!我心血来潮想做个类似黑猴的个人仓库
</chatmessage>

![](..%2Fassets%2Faheroselect_002.jpg)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
费了一番功夫实现后才意识到我的个人仓库界面是带有独立灯光、背景的场景（Level）,问题来了！怎么在游戏中打开使用？
</chatmessage>

![](..%2Fassets%2Faheroselect_001.png)


## 问题

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这个问题的难点可以拆分总结成以下几点：
</chatmessage>

1. 场景切换问题。
2. UI切换问题。
3. 控制器切换问题


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
让我们看看一些优秀的游戏设计思路吧
</chatmessage>

1. 守望先锋

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
细心的你应该发现当你试图在守望中切换英雄时，他会将角色居中并将镜头固定到场景的某处。甚至某些地图的进攻方可以看到防守方的赛前占位，
</chatmessage>

![](..%2Fassets%2Faheroselect_003.jpg)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我想起来了，之前监测站用猩猩站在角落会挡住选择的英雄。
</chatmessage>


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
要自己注意原始Pawn的生命周期，比如死亡重生时重新赋值等，可惜光照、背景切换颇费功夫。
比如需要将当前场景所有物体隐藏
</chatmessage>

:::note
这里只是简单的演示，远没有我们想要的效果。
:::

<gifwithbutton src="../../assets/unrealgif/hpup43.gif"/>

![](..%2Fassets%2Faheroselect_004.png)


2. 永劫无间

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
永劫的角色界面则是独立的背景、光照的场景。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
如果要改变光照、背景我能想到的方案是用关卡实例来实现。
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup44.gif"/>

1. 主关卡不再存东西，而是动态子关卡代替
2. 子关卡则包括角色选择关卡、游戏地图关卡、背包关卡等

![](..%2Fassets%2Faheroselect_005.png)

## 重识UWorld

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这里特别强调一下UE中非常反直觉的设定，Level不代表World,Level只是World中维护的一个指针,Level中则维护一堆Actor.
这也是我们经常看到OpenLevel而不是OpenWorld的原因。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
这就涉及到我的盲区了！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
很简单，打开官方文档即源码，翻译一下注释就知道了。
</chatmessage>

![](..%2Fassets%2Faheroselect_009.png)

>官方定义

![](..%2Fassets%2Faheroselect_010.png)

>编辑器之所以可以切换显示图层，也是因为代码中Layers部分是只编译在编辑器中的`WITH_EDITORONLY_DATA`

![](..%2Fassets%2Faheroselect_007.png)

>当然官方也用了专门的子系统维护关卡的图层。

![](..%2Fassets%2Faheroselect_008.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
UE官方特有的废弃特色，一言不合就废弃，从不考虑用户感受，就和增强输入系统一样，config说废就废，也不给一点迁移建议。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
等会，你前面说World维护Level,Level中只有Actor?
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
遇事不决，源码走起。
</chatmessage>

![](..%2Fassets%2Faheroselect_011.png)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
可是这些子关卡并不是Actor啊
</chatmessage>

![](..%2Fassets%2Faheroselect_006.png)

## ULevel & ULevelStreamingDynamic && ULevelStream

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这就要看看他是如何处理加载这些关卡实例了。
</chatmessage>

![](..%2Fassets%2Faheroselect_012.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
一但我们调用LoadLevelInstanceBySoftObjectPtr，最终走向是在UWrold中调用AddStreamingLevel，下面是一个简单的流程。
</chatmessage>

1. LoadLevelInstanceBySoftObjectPtr，通过世界上下文，拿到具体的世界。早在GamePlay开篇我们就对WorldContextObject
做了简单的介绍，它是由Engine维护的一个方法，用于获取世界指针，再深入就有点不礼貌了。

2. LoadLevelInstance_Internal ，则是LoadLevelInstanceBySoftObjectPtr中调用的私有工具函数，主要是用于包体PackagePath检查、实例化ULevelStreamingDynamic

3. 最终通过World->AddStreamingLevel(StreamingLevel);


>下面是老生常谈的通过上下文拿到UWorld的方法

```cpp
UWorld* World = GEngine->GetWorldFromContextObject(WorldContextObject, EGetWorldErrorMode::LogAndReturnNull);

UWorld* UEngine::GetWorldFromContextObject(const UObject* Object, EGetWorldErrorMode ErrorMode) const
{
	if (Object == nullptr)
	{
		switch (ErrorMode)
		{
		case EGetWorldErrorMode::Assert:
			check(Object);
			break;
		case EGetWorldErrorMode::LogAndReturnNull:
			FFrame::KismetExecutionMessage(TEXT("A null object was passed as a world context object to UEngine::GetWorldFromContextObject()."), ELogVerbosity::Warning);
			//UE_LOG(LogEngine, Warning, TEXT("UEngine::GetWorldFromContextObject() passed a nullptr"));
			break;
		case EGetWorldErrorMode::ReturnNull:
			break;
		}
		return nullptr;
	}

	bool bSupported = true;
	UWorld* World = (ErrorMode == EGetWorldErrorMode::Assert) ? Object->GetWorldChecked(/*out*/ bSupported) : Object->GetWorld();
	if (bSupported && (World == nullptr) && (ErrorMode == EGetWorldErrorMode::LogAndReturnNull))
	{
		FFrame::KismetExecutionMessage(*FString::Printf(TEXT("No world was found for object (%s) passed in to UEngine::GetWorldFromContextObject()."), *GetPathNameSafe(Object)), ELogVerbosity::Warning);
	}
	return (bSupported ? World : GWorld);
}
```

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
所以讲了这么多ULevel和ULevelStreamingDynamic又是什么关系呢？你不是所有Actor都放在ULevel里吗？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
ULevelStreamingDynamic既然是从pakage里实例出来的，当然已经包括了ULevel指针
</chatmessage>

![](..%2Fassets%2Faheroselect_013.png)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
搜得寺内！我说咱们没法从LevelStreamingDynamic里拿到所有Actor,原来还有这么一层关系啊。
</chatmessage>

```cpp

void UExorcistFunctionLibrary::SetHiddenFromStreamLevel(bool bHidden, ULevelStreaming* LevelStreaming)
{

	if (!LevelStreaming) return;
	
	//从LevelStreaming中拿到ULevel
	ULevel* LoadedLevel = LevelStreaming->GetLoadedLevel();
	if (!LoadedLevel) return;

    // ULevel拿到所有的Actor
	for(auto Actor : LoadedLevel->Actors)
	{
		Actor->SetActorHiddenInGame(bHidden);
	}
}
```

>所以要从世界拿到所有的Actor的流程是UWorld->ULevelStream->ULevel->Actor,而ULevelStreamingDynamic : public ULevelStreaming，本质还是ULevelStreaming


## UI|Viewport

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
?非常奇怪的问题，为什么没有UI？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
UI并不是UWorld维护的，而是UGameViewportClient维护的SOverlay
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
坏了！涉及到更大的盲区了！
</chatmessage>

![](..%2Fassets%2Faheroselect_014.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
硬啃当然不知所以然，我们可以从UI的创建流程反推一下。
</chatmessage>

![](..%2Fassets%2Faheroselect_015.png)

```cpp
void UUserWidget::AddToViewport(int32 ZOrder)
{
	if (UGameViewportSubsystem* Subsystem = UGameViewportSubsystem::Get(GetWorld()))
	{
		FGameViewportWidgetSlot ViewportSlot;
		if (bIsManagedByGameViewportSubsystem)
		{
			ViewportSlot = Subsystem->GetWidgetSlot(this);
		}
		ViewportSlot.ZOrder = ZOrder;
		Subsystem->AddWidget(this, ViewportSlot);
	}
}
```

>日常子系统维护，UGameViewportSubsystem : public UEngineSubsystem

![aheroselect_016.png](..%2Fassets%2Faheroselect_016.png)

### TakeWidget 

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这里比较关键的就是UWidget 和 SWidget互转函数了，这也是我们以后将UWidget 转成 SWidget一些参考。
</chatmessage>

