---
title: UE-Lyra中对CommonUI中Inputmode的封装。
dir : 3
order : 1
category:
  - unreal
---
## 导读

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
官方文档介绍CommonUI虽然提供了InputMode函数：UCommonActivatableWidget::GetDesiredInputConfig却没有给出对应的蓝图节点已经属性操作。
本章节从Lyra的InputConfig出发，观察理解LyraInputmode实现细节。
</ChatMessage>

## 前置条件

>安装插件CommonUI,推荐阅读我的初见[CommonUI](../commonui/CommonUI.md)

## 实践
>日常心血来潮，想给我的游戏菜单背景加一个角色查看功能，即：可以操作UI的同时控制游戏模型（比如旋转、缩放等）。

<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
这还不简单！构造函数里设置一下输入模式`游戏和UI`
</ChatMessage>

![](..%2F..%2Fassets%2Fuiinputmode.jpg)

>悲剧发生了！

<ChatMessage avatar="../../../assets/emoji/kclr.png" :avatarWidth="40">
运行后根本无法操作UI后面的场景！
</ChatMessage>


![设置输入模式为游戏和UI后依然无法操作视口](..%2F..%2Fassets%2Fgame%20view%20cannot%20move.gif)

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
如果没记错的话原系统中我们要修改输入模式确实是这几个节点。
</ChatMessage>

<iframe src="https://blueprintue.com/render/0j9cetp9/" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

<hr>

>可咱用的是CommonUI啊！

<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
最后发现设置里可以通过SupportsActivationFocus关闭来开启游戏和UI这种输入模式。完美！再次编译运行！
</ChatMessage>

![checkout.jpg](..%2F..%2Fassets%2Fcheckout.jpg)

<ChatMessage avatar="../../../assets/emoji/bqb (5).png" :avatarWidth="40">
But！当你来回切换几个UI界面后，你发现你的视口又不能动了！总不能所有界面都设置SupportsActivationFocus吧！而且这卡顿是怎么回事啊！
</ChatMessage>

![](..%2F..%2Fassets%2Fmenu.gif)

<ChatMessage avatar="../../../assets/emoji/kclr.png" :avatarWidth="40">
官方S一样的文档中也找不对应的节点只给了一个实现函数。
</ChatMessage>

![截自官方文档](..%2F..%2Fassets%2Finputconfig.jpg)

<hr>

## Lyra的实现

![](..%2F..%2Fassets%2Fgameandmenu.gif)

>后来我发现Lyra通过封装InputConfig和GameMouseCaptureMod两个核心模块完美解决了上面的问题。


![](..%2F..%2Fassets%2Flyrainputmode.jpg)

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft >
很好！是时候学习一下新科学知识了！
</ChatMessage>

###  1. 核心配置 InputConfig:
 ```cpp 
enum class EWidgetInputMode : uint8
{
	Default,
	GameAndMenu,
	Game,
	Menu
};
```
<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40" >
这个应该看得懂，默认的几种输入模式。
</ChatMessage>

* Default & Menu 鼠标只能操作UI

![](..%2F..%2Fassets%2Fmenu.gif)

* GameAndMenu ：鼠标能操作UI，也能移动游戏视口

![](..%2F..%2Fassets%2Fgameandmenu.gif)

* Game:鼠标无法操作UI，只能移动游戏视口。

![](..%2F..%2Fassets%2Fgame.gif)

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40"  alignLeft>
最终，BABA还是担心你看不懂，做了几个动画演示。
</ChatMessage>

<hr>

### 2.核心配置 Game Mouse Capture Mode ：

 ```cpp 
enum class EMouseCaptureMode : uint8
{
  /** 不捕获鼠标输入 */
  NoCapture,
  /** 当视口被点击时，永久捕获鼠标，并消耗引起捕获的初始鼠标按下事件，以防止被玩家输入处理 */
  CapturePermanently,
  /** 当视口被点击时，永久捕获鼠标，并允许玩家输入处理引起捕获的初始鼠标按下事件 */
  CapturePermanently_IncludingInitialMouseDown,
  /** 在鼠标按下期间捕获鼠标，鼠标抬起时释放 */
  CaptureDuringMouseDown,
  /** 仅在右鼠标按钮按下时捕获，而不捕获其他任何鼠标按钮 */
  CaptureDuringRightMouseDown,
};

```


<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
等等!Baba有个问题:Game模式下，一定不能控制UI吗？
</ChatMessage>


<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
可以测试一下！给按钮加一个打印节点。
</ChatMessage>

![](..%2F..%2Fassets%2Fprinthello.jpg)

<ChatMessage avatar="../../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
然后我们将鼠标永久捕获改成按下期间捕获。
</ChatMessage>

![](..%2F..%2Fassets%2Fmousebuhuo.gif)


<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
为什么Game模式下也能控制UI?
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (5).png" :avatarWidth="40" alignLeft>
从视觉上分析，鼠标按下期间捕获的过程相当于Menu和Game模式的切换，一结合也就变成了GameAndMenu的效果。
</ChatMessage>


<hr>

### 3. 其他配置 Consume Pointer Input:

>很多人应该和我一样，一开始压根不明白这个节点的意思。

当一个UI元素接收到鼠标点击或触摸输入时，通常会有一个属性或方法可以设置为"Consume pointer input"。
这意味着该UI元素会消耗掉这个输入事件，阻止它继续传递到下层的UI元素或游戏场景中。

<hr>

### 4.其他配置 Action Domain Override:

数据资产配置类，在游戏开发中，特定的场景或状态可能会覆盖默认的动作控制<br>

例如：我想配置一个全局的输、鼠标交互模式。

 ![](..%2F..%2Fassets%2FUCommonInputActionDomain.jpg)

* Display in ActionBar :简单来说就是对应的按键UI显示在指定的动作栏中。类似下面的效果：

 ![](..%2F..%2Fassets%2Faction%20bar.jpg)

## 源码剖析

`ActivatableWidget.h`

```cpp 
// Copyright Epic Games, Inc. All Rights Reserved.

#pragma once

#include "CommonActivatableWidget.h"//引入CommonActivatableWidget

#include "ExorcistActivatableWidget.generated.h"//UHT生成

//InputConfig结构体
struct FUIInputConfig;

UENUM(BlueprintType)
enum class EExorcistWidgetInputMode : uint8
{
	Default,     // 默认模式
	GameAndMenu, // 游戏和菜单模式
	Game,        // 游戏模式
	Menu         // 菜单模式
};

// An activatable widget that automatically drives the desired input config when activated
// 一个可激活的小部件，在激活时会自动驱动所需的输入配置
UCLASS(Abstract, Blueprintable)
class UExorcistActivatableWidget : public UCommonActivatableWidget//继承自UCommonActivatableWidget
{
	GENERATED_BODY()

public:
	UExorcistActivatableWidget(const FObjectInitializer& ObjectInitializer);//构造函数，
	
public:
	
	//~UCommonActivatableWidget interface
	//~UCommonActivatableWidget 接口
	virtual TOptional<FUIInputConfig> GetDesiredInputConfig() const override;// 获取所需的输入配置
	//~End of UCommonActivatableWidget interface
	//~End of UCommonActivatableWidget 接口

#if WITH_EDITOR
	virtual void ValidateCompiledWidgetTree(const UWidgetTree& BlueprintWidgetTree, class IWidgetCompilerLog& CompileLog) const override;
#endif
	
protected:
	/** 激活此 UI 时要使用的所需输入模式，例如您是否希望按键仍然传递到游戏/玩家控制器？ */
	/** The desired input mode to use while this UI is activated, for example do you want key presses to still reach the game/player controller? */
	UPROPERTY(EditDefaultsOnly, Category = Input)
	EExorcistWidgetInputMode InputConfig = EExorcistWidgetInputMode::Default;
	
	/** 游戏接收输入时所需的鼠标行为。 */
	/** The desired mouse behavior when the game gets input. */
	UPROPERTY(EditDefaultsOnly, Category = Input)
	EMouseCaptureMode GameMouseCaptureMode = EMouseCaptureMode::CapturePermanently;
};

```
ActivatableWidget.cpp

```cpp
// 版权所有 Epic Games, Inc. 保留所有权利。

#include "UI/ExorcistActivatableWidget.h" // 引入ExorcistActivatableWidget头文件

#include "Editor/WidgetCompilerLog.h" // 引入WidgetCompilerLog头文件

#include UE_INLINE_GENERATED_CPP_BY_NAME(ExorcistActivatableWidget) // 使用宏生成内联的C++代码

#define LOCTEXT_NAMESPACE "Exorcist" // 定义命名空间 "Exorcist"

UExorcistActivatableWidget::UExorcistActivatableWidget(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer)
{
}

TOptional<FUIInputConfig> UExorcistActivatableWidget::GetDesiredInputConfig() const
{
	switch (InputConfig) // 根据InputConfig的值进行不同的处理
	{
	case EExorcistWidgetInputMode::GameAndMenu: // 如果InputConfig是GameAndMenu模式
		return FUIInputConfig(ECommonInputMode::All, GameMouseCaptureMode); // 返回一个包含All输入模式和GameMouseCaptureMode的FUIInputConfig
	case EExorcistWidgetInputMode::Game: // 如果InputConfig是Game模式
		return FUIInputConfig(ECommonInputMode::Game, GameMouseCaptureMode); // 返回一个包含Game输入模式和GameMouseCaptureMode的FUIInputConfig
	case EExorcistWidgetInputMode::Menu: // 如果InputConfig是Menu模式
		return FUIInputConfig(ECommonInputMode::Menu, EMouseCaptureMode::NoCapture); // 返回一个包含Menu输入模式和NoCapture的FUIInputConfig
	case EExorcistWidgetInputMode::Default: // 默认情况
	default:
		return TOptional<FUIInputConfig>(); // 返回一个空的TOptional<FUIInputConfig>
	}
}

#if WITH_EDITOR

void UExorcistActivatableWidget::ValidateCompiledWidgetTree(const UWidgetTree& BlueprintWidgetTree, class IWidgetCompilerLog& CompileLog) const
{
	Super::ValidateCompiledWidgetTree(BlueprintWidgetTree, CompileLog); // 调用父类的ValidateCompiledWidgetTree函数

	if (!GetClass()->IsFunctionImplementedInScript(GET_FUNCTION_NAME_CHECKED(UExorcistActivatableWidget, BP_GetDesiredFocusTarget)))
	{
		if (GetParentNativeClass(GetClass()) == UExorcistActivatableWidget::StaticClass())
		{
			CompileLog.Warning(LOCTEXT("ValidateGetDesiredFocusTarget_Warning", "GetDesiredFocusTarget wasn't implemented, you're going to have trouble using gamepads on this screen."));
		}
		else
		{
			//TODO - Note for now, because we can't guarantee it isn't implemented in a native subclass of this one.
			CompileLog.Note(LOCTEXT("ValidateGetDesiredFocusTarget_Note", "GetDesiredFocusTarget wasn't implemented, you're going to have trouble using gamepads on this screen.  If it was implemented in the native base class you can ignore this message."));
		}
	}
}

#endif

#undef LOCTEXT_NAMESPACE // 取消命名空间 "Exorcist"

```

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40">
打住打住！你管这叫源码剖析？
</ChatMessage>

## 回顾

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
很好!我们从头分析！我们先来重新复习一下CommonUI有哪些现成的Widget类
</ChatMessage>

![](..%2F..%2Fassets%2Fcommonuiroot.jpg)

## 扩展

怎么通过蓝图节点进行输入模式的切换设置呢。

简单！将 `EditDefaultsOnly` 修改为 `EditAnywhere`，这样就可以在蓝图中任何地方编辑该属性了。就ok了！

```cpp
// ExorcistActivatableWidget.h
protected:
	/** 激活此 UI 时要使用的所需输入模式，例如您是否希望按键仍然传递到游戏/玩家控制器？ */
	UPROPERTY(EditAnywhere, Category = Input)
	EExorcistWidgetInputMode InputConfig = EExorcistWidgetInputMode::Default; // 输入模式
```

### 流程

首先，我们在头文件中添加新的声明：

```cpp
// ExorcistActivatableWidget.h

#pragma once

#include "CoreMinimal.h"
#include "UI/ExorcistActivatableWidget.h"
#include "ExorcistBlueprintFunctionLibrary.generated.h"

/**
 * 
 */
UCLASS()
class YOURPROJECT_API UExorcistBlueprintFunctionLibrary : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()

public:
	UFUNCTION(BlueprintCallable, Category = "Exorcist")
	static void SetExorcistInputMode(UExorcistActivatableWidget* ActivatableWidget, EExorcistWidgetInputMode InputMode);
};
```

现在，你可以在蓝图中调用 `SetInputMode` 来设置输入模式了。

同样的：将 `EMouseCaptureMode` 的设置也封装成一个函数，以便在其他地方调用。

首先，在 `UExorcistActivatableWidget` 类中添加一个新的函数用于设置鼠标捕获模式：

```cpp
// ExorcistActivatableWidget.h

public:
	// 设置鼠标捕获模式
	UFUNCTION(BlueprintCallable, Category = "Exorcist")
	void SetMouseCaptureMode(EMouseCaptureMode NewCaptureMode);
```

在源文件中实现这个函数：

```cpp
// ExorcistActivatableWidget.cpp

void UExorcistActivatableWidget::SetMouseCaptureMode(EMouseCaptureMode NewCaptureMode)
{
	GameMouseCaptureMode = NewCaptureMode;
}
```