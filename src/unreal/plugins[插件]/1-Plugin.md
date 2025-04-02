---
title: P0.插件开发
order: 1
category:
  - unreal
---
## 闲聊

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
Baba!我记不住这么多委托函数的写法怎么办？
</chatmessage>

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
为什么不用蓝图直接开发呢!
</chatmessage>

<chatmessage avatar="../../assets/emoji/new11.png" :avatarWidth="50">
总要提升挑战一下自己吧！有没有办法呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/new2.png" :avatarWidth="50" alignLeft>
也许你可以写一个可视化界面辅助我们写这个宏函数。比如这种：
</chatmessage>

![](..%2Fassets%2Fdesign.png)

<chatmessage avatar="../../assets/emoji/new3.png" :avatarWidth="55">
对哦！可是我们该选择什么框架来做呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
方法有很多啊：<br>
1.WPF/QT写一个独立程序<br>
2.JS写成Web端<br>
3.UE用蓝图编辑器控件<br>
4.UE中用基于Slate的编辑器插件
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
WPF/QT太重了！很多UE代码库没法直接用啊。JS呢虽然也不能直接链接UE，但随时随地可用!是个备选方案!
至于蓝图编辑器控件这个总觉得像在写UMG还是高级点的Slate来做吧！
</chatmessage>

<chatmessage avatar="../../assets/emoji/new9.png" :avatarWidth="40" alignLeft>
安排！
</chatmessage>

## 新建插件开始

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
点击插件，Baba用的是UE5.2
</chatmessage>

![](..%2Fassets%2Feditorplugin.png)

<chatmessage avatar="../../assets/emoji/new5.png" :avatarWidth="40" alignLeft>
新建编辑器插件
</chatmessage>


![](..%2Fassets%2Fplugincreate.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
注意名称不要和现有插件重名。
</chatmessage>

>等待IED编译后点击窗口-就能看到你创建的插件了

![](..%2Fassets%2Feditorpluginbuild.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
此时回到编辑器就能看到我们的插件了
</chatmessage>

![](..%2Fassets%2Fplugin.png)

### UI扩展点

<chatmessage avatar="../../assets/emoji/bqb01.png" :avatarWidth="40" >
你的编辑器怎么有这些绿色的字啊？有什么用呢？
</chatmessage>

![](..%2Fassets%2Fkzd.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这个呢叫UI扩展点，你可以在编辑器偏好设置中找到。见名知意就是方便咱确认UI插件启动按钮该放哪里用的。
</chatmessage>

![](..%2Fassets%2Fuikuozhang.png)

## 插件基本结构

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
下一步之前我们复习一下基本的插件目录结构
</chatmessage>

```md
YourPluginName/
|-- Config/--配置文件
|   |-- DefaultGame.ini
|-- Content/--目录文件
|   |-- YourPluginName/
|       |-- Materials/
|       |-- Textures/
|-- Resources/--图标
|-- Source/--源文件
|   |-- YourPluginName/
|       |-- YourPluginName.Build.cs
|       |-- Private/
|           |-- YourPluginName.cpp
|       |-- Public/
|           |-- YourPluginName.h
|-- YourPluginName.uplugin
```
## .Buid.cs

```cpp
// Copyright Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;

public class ExorcistTool : ModuleRules
{
	public ExorcistTool(ReadOnlyTargetRules Target) : base(Target)
	{
		PCHUsage = ModuleRules.PCHUsageMode.UseExplicitOrSharedPCHs;
		
		PublicIncludePaths.AddRange(
			new string[] {
				// ... add public include paths required here ...
			}
			);
				
		
		PrivateIncludePaths.AddRange(
			new string[] {
				// ... add other private include paths required here ...
			}
			);
			
		
		PublicDependencyModuleNames.AddRange(
			new string[]
			{
				"Core",
				// ... add other public dependencies that you statically link with here ...
			}
			);
			
		
		PrivateDependencyModuleNames.AddRange(
			new string[]
			{
				"Projects",
				"InputCore",
				"EditorFramework",
				"UnrealEd",
				"ToolMenus",
				"CoreUObject",
				"Engine",
				"Slate",
				"SlateCore",
				// ... add private dependencies that you statically link with here ...	
			}
			);
		
		
		DynamicallyLoadedModuleNames.AddRange(
			new string[]
			{
				// ... add any modules that your module loads dynamically here ...
			}
			);
	}
}

```
<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
没啥可说的，就是一些必备基础模块。
</chatmessage>

## .uplugin解析

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
基操先看.uplugin
</chatmessage>

::: code-tabs#language

@tab ExorcistTool.uplugin
```cpp
{
	"FileVersion": 3,
	"Version": 1,
	"VersionName": "1.0",
	"FriendlyName": "ExorcistTool",
	"Description": "a tool for code help",
	"Category": "Other",
	"CreatedBy": "sigaohe",
	"CreatedByURL": "",
	"DocsURL": "",
	"MarketplaceURL": "",
	"SupportURL": "",
	"CanContainContent": false,
	"IsBetaVersion": false,
	"IsExperimentalVersion": false,
	"Installed": false,
	"Modules": [
		{
			"Name": "ExorcistTool",
			"Type": "Editor",
			"LoadingPhase": "Default"
		}
	]
}
```
@tab 中文描述
```cpp
{
	"FileVersion": 3,                        // 插件描述文件版本号
	"Version": 1,                            // 插件版本号
	"VersionName": "1.0",                    // 插件版本名称
	"FriendlyName": "ExorcistTool",          // 插件友好名称
	"Description": "用于代码辅助的工具",       // 插件描述
	"Category": "其他",                       // 插件分类
	"CreatedBy": "sigaohe",                  // 插件作者
	"CreatedByURL": "",                      // 作者相关链接
	"DocsURL": "",                           // 文档链接
	"MarketplaceURL": "",                    // 在市场上的链接
	"SupportURL": "",                        // 支持链接
	"CanContainContent": false,              // 插件是否可以包含内容
	"IsBetaVersion": false,                  // 是否为测试版本
	"IsExperimentalVersion": false,          // 是否为实验版本
	"Installed": false,                      // 插件是否已安装
	"Modules": [                             // 插件模块信息
		{
			"Name": "ExorcistTool",           // 模块名称
			"Type": "Editor",                 // 模块类型
			"LoadingPhase": "Default"         // 模块加载阶段
		}
	]
}

```
:::


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
除了Modules所有都是单一键值对，重点关注一下这个Modules。
</chatmessage>

1. Modules是个数组，也就是说插件中可以有多个模块。
2. `Name`:没啥好说的模块名
3. `Type`:模块类型，翻看[源码](https://docs.unrealengine.com/5.2/en-US/API/Runtime/Projects/EHostType__Type/)可以确定是个枚举值。

::: code-tabs#language

@tab EHostType::Type
```cpp
namespace EHostType
{
    enum Type
    {
        Runtime,
        RuntimeNoCommandlet,
        RuntimeAndProgram,
        CookedOnly,
        UncookedOnly,
        Developer,
        DeveloperTool,
        Editor,
        EditorNoCommandlet,
        EditorAndProgram,
        Program,
        ServerOnly,
        ClientOnly,
        ClientOnlyNoCommandlet,
        Max,
    }
}
```
@tab 中文描述
```cpp
namespace EHostType
{
    enum Type
    {
        Runtime,                    // 在任何情况下都加载
        RuntimeNoCommandlet,        // 在 Runtime 模式下加载，但不包含命令
        RuntimeAndProgram,          // 在所有支持的程序和目标上加载
        CookedOnly,                 // 仅在已经打包好的游戏中加载
        UncookedOnly,               // 仅在未打包的游戏中加载
        Developer,                  // 只在开发模式和编辑模式下加载，打包后不加载
        DeveloperTool,              // 仅在启用 bBuildDeveloperTools 的目标上加载
        Editor,                     // 仅在编辑器启动时加载
        EditorNoCommandlet,         // 在编辑器模式下加载，不包含命令
        EditorAndProgram,           // 仅在编辑器和程序目标上加载
        Program,                    // 仅在程序目标上加载
        ServerOnly,                 // 仅在非独立客户端目标上加载
        ClientOnly,                 // 仅在非独立服务器目标上加载
        ClientOnlyNoCommandlet,     // 在编辑器和客户端中加载，但在命令中不加载
        Max,                        // 不清楚
    };
}
```
:::

4.`LoadingPhase`:模块加载阶段 依然是个枚举[源码API](https://docs.unrealengine.com/5.2/en-US/API/Runtime/Projects/ELoadingPhase__Type/)

::: code-tabs#language

@tab ELoadingPhase::Type
```cpp
namespace ELoadingPhase
{
    enum Type
    {
        EarliestPossible,
        PostConfigInit,
        PostSplashScreen,
        PreEarlyLoadingScreen,
        PreLoadingScreen,
        PreDefault,
        Default,
        PostDefault,
        PostEngineInit,
        None,
        Max,
    }
}
```
@tab 中文描述

```cpp
namespace ELoadingPhase
{
    enum Type
    {
        EarliestPossible,           // 尽早加载 - 即 uplugin 文件可以从 pak 文件中加载（以及在 PlatformFile 设置完成后立即加载，以防 pak 文件不被使用）。用于需要读取文件（压缩格式等）的插件。
        PostConfigInit,             // 在引擎完全初始化之前加载，配置系统初始化后立即加载。
        PostSplashScreen,           // 系统启动画面后第一个渲染的画面
        PreEarlyLoadingScreen,      // 在 coreUObject 之前加载，用于设置手动加载屏幕，用于我们的块补丁系统。
        PreLoadingScreen,           // 在引擎完全初始化之前加载，对需要在加载屏幕触发之前连接到加载屏幕的模块。
        PreDefault,                 // 就在默认阶段之前
        Default,                    // 在启动期间的默认加载点（在引擎初始化期间，在游戏模块加载后。）
        PostDefault,                // 就在默认阶段之后
        PostEngineInit,             // 引擎初始化后
        None,                       // 不自动加载此模块
        Max,                        // 注意：如果添加新值，请确保更新下面的 ToString() 方法！
    }
}
```
:::


### 插件目录案例

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
编辑器运行和Runtime内容分开。主要是为了防止用户错误的打包仅编辑器的内容。
</chatmessage>


```cpp
	"Modules": [
		{
			"Name": "DataSystem",
			"Type": "Runtime",
			"LoadingPhase": "Default"
		},
		{
			"Name": "DataSystemEditor",
			"Type": "Editor",
			"LoadingPhase": "PostEngineInit"
		}
	]
```


### 插件热编译

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
插件和源码一样，也可以热编译
</chatmessage>

![](..%2Fassets%2Fplugin001.jpg)

## 插件初探

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
现在来看看这个全新的插件目录结构
</chatmessage>

![](..%2Fassets%2Ftoolplugin.png)


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
系统为我们生成了三个头/源文件
</chatmessage>


::: code-tabs#language

@tab ExorcistTool.h

```cpp
#pragma once

#include "CoreMinimal.h"
#include "Modules/ModuleManager.h"

class FToolBarBuilder;
class FMenuBuilder;

class FExorcistToolModule : public IModuleInterface
{
public:

    /** IModuleInterface 实现 */
    virtual void StartupModule() override;               // 模块启动时的回调
    virtual void ShutdownModule() override;              // 模块关闭时的回调
    
    /** 该函数将绑定到 Command（默认情况下将打开插件窗口） */
    void PluginButtonClicked();
    
private:

    void RegisterMenus();                                // 注册菜单回调

    TSharedRef<class SDockTab> OnSpawnPluginTab(const class FSpawnTabArgs& SpawnTabArgs);  // 生成插件标签页回调

private:
    TSharedPtr<class FUICommandList> PluginCommands;     // 插件命令列表
};
```

@tab ExorcistToolCommands.h

```cpp
#pragma once

#include "CoreMinimal.h"
#include "Framework/Commands/Commands.h"
#include "ExorcistToolStyle.h"

class FExorcistToolCommands : public TCommands<FExorcistToolCommands>
{
public:

    FExorcistToolCommands()
        : TCommands<FExorcistToolCommands>(TEXT("ExorcistTool"), NSLOCTEXT("Contexts", "ExorcistTool", "ExorcistTool Plugin"), NAME_None, FExorcistToolStyle::GetStyleSetName())
    {
    }

    // TCommands<> 接口
    virtual void RegisterCommands() override;

public:
    TSharedPtr< FUICommandInfo > OpenPluginWindow;  // 打开插件窗口命令信息
};
```
@tab ExorcistToolStyle.h

```cpp
#pragma once

#include "CoreMinimal.h"
#include "Styling/SlateStyle.h"

/** 插件样式管理类 */
class FExorcistToolStyle
{
public:

    static void Initialize();  // 初始化
    static void Shutdown();    // 关闭
    static void ReloadTextures();  // 重新加载 Slate 渲染器使用的纹理

    /** @return ExorcistTool插件的Slate样式集 */
    static const ISlateStyle& Get();

    static FName GetStyleSetName();  // 获取样式集名称

private:

    static TSharedRef< class FSlateStyleSet > Create();

private:

    static TSharedPtr< class FSlateStyleSet > StyleInstance;
};
```
:::

1. **ExorcistTool**：
    - 作为插件的主要模块接口，实现了模块的启动和关闭功能。
    - 在这个文件中，通常定义了模块的生命周期函数以及模块的重要成员，比如用于创建菜单、工具栏等。

2. **ExorcistToolCommands**：

- 定义了插件的命令集合，这些命令可以被UE编辑器或者蓝图调用。
- 这里的 `OpenPluginWindow` 是一个打开插件窗口的命令。

3. **ExorcistToolStyle**：

- 是插件的样式管理类，用于管理插件的Slate样式。Slate是UE的UI框架，
- 该文件定义了样式的初始化、关闭以及重新加载等功能。

## **ExorcistTool解析**

<chatmessage avatar="../../assets/emoji/bqb (5).png" :avatarWidth="40" >
为什么没有构造函数？
</chatmessage>

```cpp
class FExorcistToolModule : public IModuleInterface
```

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
在C++中，类不是必须要有构造函数的，尤其是对于实现接口的类。接口是一种抽象规范，而不是具体的实例。这里`IModuleInterface` 是一个标记接口，用于标识该类为模块接口，
而不需要实例化。因此，它并不需要一个显式的构造函数。
</chatmessage>

<hr>

```cpp
/** IModuleInterface implementation */
	virtual void StartupModule() override;
	virtual void ShutdownModule() override;
```

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
模块的启动时函数和关闭时函数。
</chatmessage>

<hr>

```cpp
/** This function will be bound to Command (by default it will bring up plugin window) */
	void PluginButtonClicked();
```
<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
很显然，按钮触发时的回调函数。
</chatmessage>

<hr>

```cpp
void RegisterMenus();
```
<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
注册菜单回调，具体点就是告诉编辑器这个按钮要显示在哪个位置，可以用之前的 UI扩展点定位参考。
</chatmessage>

```cpp
TSharedRef<class SDockTab> OnSpawnPluginTab(const class FSpawnTabArgs& SpawnTabArgs);
```

>`OnSpawnPluginTab`是一个函数，返回类型是 `TSharedRef<class SDockTab>`，接受一个 `const FSpawnTabArgs&` 类型的参数 `SpawnTabArgs`。

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
具体地说，这个函数声明是用于生成插件的SDockTab对象，用于创建插件模块的Dockable Tab。
</chatmessage>



## 参考文档
[UE扩展开发，插件的基础结构解析](https://zhuanlan.zhihu.com/p/621429942)
