---
title: UECPP-基础概念
#icon: download
order : 1
---

## 实现目标

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
了解基本UE基础概念，并尝试第一个使用CPP写的蓝图节点在屏幕上输出HelloWorld!
</ChatMessage>

## 开始实践
## 1. 新建一个CPP工程
<ChatMessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40">
什么你不会CPP!巧了我也不会！
</ChatMessage>

![](..%2Fassets%2FhelloworldUE.jpg)
>如果你不会CPP建议你去下方查考链接观看CPP基础教程，或者等我的CPP入门介绍篇。

## 2. 等待编译并启动项目，点击工具-新建C++类

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
BABA用了Rider已经回不去了,如果你用VS这里是将是刷新VS项目。
</ChatMessage>

![newcppclass.png](..%2Fassets%2Fnewcppclass.png)

>然后你可以看到：

<ChatMessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
看不懂，根本看不懂。
</ChatMessage>

![](..%2Fassets%2Factorpublicobject.jpg)

<ChatMessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="40">
很好！下一步之前需要搞清楚几个基本概念
</ChatMessage>

<hr>

##  UPK|UE包文件组成

<ChatMessage avatar="../../assets/emoji/bqb (7).png" :avatarWidth="40">
Unreal Package 文件，它是Unreal Engine（虚幻引擎）中用于存储游戏资源和数据的一种文件格式。
</ChatMessage>

![](..%2Fassets%2FUEpakage.jpg)

>从Unreal Engine 4（UE4）开始，UPK 文件被替代为更先进的Unreal Asset文件格式（.uasset）和Unreal Asset Registry（.uassetregistry）等。
UPK 文件仍然存在于早期版本的Unreal Engine中。

## UObject|UE对象

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
UObject 是 Unreal Engine 中所有对象的基类。
</ChatMessage>

* 在 Unreal Engine 中，几乎所有的对象都继承自 UObject，包括角色、物体、组件、纹理、材质等等。
* UObject 提供了许多基本的功能和特性，例如内存管理、反射（Reflection）、属性系统、蓝图扩展等。

<ChatMessage avatar="../../assets/emoji/bqb01.png" :avatarWidth="40">
例如：actor继承自UObject
</ChatMessage>

![](..%2Fassets%2Factorpublicobject.jpg)

<ChatMessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
对比蓝图版，C++类中多了许多类，这也是C++比蓝图自由度更高的原因。
</ChatMessage>

![](..%2Fassets%2Fslate.jpg)

## UE-GamePlay框架

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
字面翻译来说是玩法，也就是所谓的规则（GameMode），更深入点
<span style="color: red"><a href="#_1gameplay框架-gamemode">游戏规则 ①-②</a>
+<a href="#_3-camera-游戏相机">3C③-⑤</a>
+<a href="#_6-gameui-游戏ui">界面⑥</a>
= GamePlay</span>
</ChatMessage>


![](..%2Fassets%2FGameFramework.jpg)

摘自官方文档：
>此流程图演示了这些核心Gameplay类彼此之间的关系。
<br>一个游戏由一个GameMode和一个GameState构成。
<br>加入游戏的人类玩家与PlayerController关联。
<br>这些PlayerController允许玩家持有游戏中的Pawn，以便在关卡中有物理表示。
<br>PlayerController还为玩家提供了输入功能按钮、平视显示器（简称HUD）和用于处理摄像机视图的PlayerCameraManager。

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
3C也就是所谓的<span style="color: orangered">Character（角色）、Control（控制）和Camera（摄像机）</span>
</ChatMessage>

### ①GamePlay框架/GameMode

- AGameModeBase (public AInfo)
    - AInfo (public AActor)
        - AActor (public UObject)

<ChatMessage avatar="../../assets/emoji/bqb02.png" :avatarWidth="40">
GameMode（游戏模式）是一个非常重要的类，它决定了游戏的规则、逻辑和行为。
</ChatMessage>

![](..%2Fassets%2FGameMode.jpg)

>生成的类打开后

![](..%2Fassets%2Fgamemodeinclue.jpg)

| 类别                    | 类名                     | 用途                                                                                                 |
|-----------------------|------------------------|----------------------------------------------------------------------------------------------------|
| APawn class           | 游戏中的角色               | 代表游戏中的玩家、AI 或者其他角色。控制移动、动画、状态、碰撞等。                                            |
| AHUD class            | Heads-Up Display (HUD) | 用于在屏幕上显示游戏信息，如分数、生命值、小地图等。通常负责在画面上绘制 UI 元素。                         |
| APlayerController class | 玩家控制器               | 处理玩家输入，控制与玩家的交互，例如移动、攻击、交互等。可以操控一个或多个角色。                         |
| AGameState class      | 游戏状态                 | 负责跟踪整个游戏的全局状态，例如游戏时间、分数、胜利条件等。用于同步状态给所有客户端。                   |
| APlayerState class    | 玩家状态                 | 保存与玩家相关的状态，如分数、生命值、角色类型等。通常由服务器和客户端各自维护一份。                     |
| ASpectatorPawn class   | 观察者角色               | 允许玩家以观察者身份观察游戏，通常用于回放、录像功能或者观察比赛。不与玩家角色相关联，可以自由观察游戏世界。 |

[cpp中绑定GameMode](/src/unreal/unrealcpp/3-UE_CPP_GameMode.md)

<hr>

### ② GameState|游戏状态

- AGameStateBase (public AInfo)
    - AInfo (public AActor)
        - AActor (public UObject)

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
Game State 就是指游戏状态。它管理了所有已连接的客户端，并且实时追踪游戏层面的属性并把它们分发给远程客户端。
</ChatMessage>

<hr>

### ③ Camera|游戏相机

<ChatMessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40">
3C之一Camera
</ChatMessage>

<hr>

### ④ Character|游戏角色

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40">
3C之一Character
</ChatMessage>

<hr>

### ⑤ Controller|控制器

<ChatMessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40">
3C之一Controller
</ChatMessage>

<hr>

### ⑥ GameUI|游戏UI

<ChatMessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
比如血条、切枪图标等。
</ChatMessage>

<hr>

### Component|组件

<ChatMessage avatar="../../assets/emoji/bqb01.png" :avatarWidth="40">
组件 是一种特殊类型的 对象，Actor 可以将组件作为子对象附加到自身。组件适用于共享相同的行为，例如显示视觉表现、播放声音
</ChatMessage>

![](..%2Fassets%2FUEComponent.png)

| 组件类型                      | 功能和用途                                |
|---------------------------|-----------------------------------------|
| UStaticMeshComponent       | 渲染静态网格模型，如墙、地板等                     |
| USkeletalMeshComponent     | 渲染有骨骼的网格模型，适用于角色和生物                 |
| UCameraComponent           | 创建摄像机视图，用于玩家或观察                        |
| ULightComponentBase       | 创建不同类型的光源，如点光源、聚光灯等                 |
| UParticleSystemComponent   | 播放粒子系统，创建特效如火焰、爆炸等                   |
| UAudioComponent            | 播放声音，附加到物体上产生音效                        |
| UCollisionComponent        | 处理碰撞和触发事件，可以是基本碰撞体或区域              |
| UInputComponent            | 处理玩家输入，如按键和鼠标事件                         |
| USceneComponent            | 在场景中构建组件层次结构，可作为父组件                   |
| UWidgetComponent           | 将2D UI嵌入3D世界，显示UMG部件                      |

<ChatMessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
记不住根本记不住！这里BABA推荐你<a href="./2-UE_Blueprint2CPP.html">几种查看蓝图节点对应C++类的几种方法！</a>
</ChatMessage>

## Subsystem|子系统

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
子系统是一组在整个引擎中提供特定功能的类和接口，它们可以独立于Gameplay框架存在并提供额外的功能和服务。后续会有实践篇，更加深入体验一下。
</ChatMessage>

| 子系统          | 继承自的类                  |
|---------------|---------------------------|
| 引擎子系统       | UEngineSubsystem 类        |
| 编辑器子系统     | UEditorSubsystem 类        |
| 游戏实例子系统   | UGameInstanceSubsystem 类  |
| 本地玩家子系统   | ULocalPlayerSubsystem 类   |

>当引擎子系统的模块加载时，子系统将在模块的 Startup() 函数返回后执行 Initialize()，子系统将在模块的 Shutdown() 函数返回后执行 Deinitialize()。

![](..%2Fassets%2Fsubsystems.jpg)

>目录：Engine\Source\Runtime\Engine\Public\Subsystems\

[**延展阅读|单例（Singleton）**](4-UE_CPP_Singleton.md)

>在UE中，子系统（Subsystem）通常是以单例（Singleton）的形式存在的。
<br>这意味着在游戏或编辑器的运行过程中，每个子系统只会有一个实例存在，而不会创建多个相同类型的实例。


## UE-Refection|UE反射

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
C++中并没有类似JAVA的反射机制，但EpicBABA的UE引擎已经帮我们实现了。
</ChatMessage>

>篇幅限制，这里不做反射的深入，具体可以看后续的反射机制篇。

可以先参考[官方文档](https://docs.unrealengine.com/5.3/zh-CN/reflection-system-in-unreal-engine/)

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
简单来说虚幻引擎反射系统 使用宏为提供引擎和编辑器各种功，封装你的类。在使用 虚幻引擎（UE） 时，可以使用标准的C++类、函数和变量。
</ChatMessage>

>不会吧不会吧！还有人不知道宏是什么？自行百度吧！


## UHT|Unreal Header Tool（虚幻头文件工具）

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40">
UHT是一个用于生成C++类和相关代码的预处理器工具，它将特定的宏和标记解析成C++代码，以便在编译时构建项目。大致流程如下：
</ChatMessage>

``` markdown
1. 源代码
    - 用户编写包含特定宏和标记的UE4 C++ 代码。

2. UHT扫描
    - UHT在构建项目时扫描头文件，寻找特定的宏和标记。

3. 生成反射信息
    - UHT使用找到的宏和标记生成反射信息，包括类的成员变量和成员函数。

4. 生成代码框架
    - 除了反射信息，UHT也可以根据宏和标记生成一些代码框架，以辅助实现类的功能。

5. 传递给编译器
    - 生成的反射信息和代码框架将传递给C++编译器，它们会被合并到最终的编译过程中。

6. 构建项目
    - 编译器将所有的源代码和生成的代码一起编译成可执行文件。

7. 运行游戏
    - 最终生成的可执行文件可以在UE4引擎中运行，实现用户在代码中定义的功能。
```

* 通常会在一个类的头文件中包含一个以 .generated.h 结尾的文件， 例如 MyClass.generated.h。
* 这个文件包含了由UHT生成的代码，通常用于实现反射信息、蓝图节点以及其他与类相关的元数据。
* 默认情况下，UE会使用Microsoft Visual C++(MSVC)作为主要的编译工具,这里我们用Rider连接MSVC（IDE自动完成）。

![](..%2Fassets%2Fcarbagecollection.png)

图片截取自[图片截取自ARRG从入门到进阶P36](https://www.bilibili.com/video/BV1EM411U7PX?p=36&vd_source=fc61eb54bf3245afbff2be6b8c1ebfc2)


### UE-Specifiers|UE类说明符

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
是 Unreal Engine 中用于声明和定义类、变量、函数等的一组宏标记（macros）。
</ChatMessage>

>具体可以参考[官方文档](https://docs.unrealengine.com/5.3/zh-CN/gameplay-classes-in-unreal-engine/)或者我写的unreal-Specifiers

## 3. 选择蓝图函数库类

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
是不是已经快要忘记咱们的主线任务啦！
</ChatMessage>

![](..%2Fassets%2Flibexpcpp.jpg)

>因为我们只是想打印一条简单的HelloWorld,又不想挂载在Actor上，最终决定先写在蓝图函数库中。

## 4. 分析系统生成的cpp文件。

```cpp
// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "TEST.generated.h"

/**
 * 
 */
UCLASS()
class EXORCIST_API UTEST : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()
	
};

```
>打开TEST.generated.h

```cpp
// 版权归 Epic Games, Inc. 所有。保留所有权利。
/*===========================================================================
	从UnrealHeaderTool导出的生成代码。
	请勿手动修改！请编辑相应的.h文件！
===========================================================================*/

// IWYU pragma: private, include "TEST.h"
#include "UObject/ObjectMacros.h"
#include "UObject/ScriptMacros.h"

PRAGMA_DISABLE_DEPRECATION_WARNINGS
#ifdef EXORCIST_TEST_generated_h
#error "TEST.generated.h 已经被包含，TEST.h 中缺少 '#pragma once'"
#endif
#define EXORCIST_TEST_generated_h

//后续省略.....

```
<ChatMessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
之前我们已经介绍过UHT,通过观察，UHT确实将一些宏标记”翻译“成具体代码提交给了编译器。
</ChatMessage>

## 5. 新建一个HelloWorld函数

>TEST.h
```cpp
// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "TEST.generated.h"

UCLASS()
class EXORCIST_API UTEST : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()
	
	//测试函数打印HelloWorld
	
	//使用UFUNCTION红标记，BlueprintCallable让UE反射系统能够反射成蓝图调用。
	UFUNCTION(BlueprintCallable, Category = "TEST")
	
	static void TESTFUNC();
	
};

```
>具体的宏标记请[阅读我的](#ue-specifiers-ue类说明符)

## 6. 对应的函数实现输出HelloWorld

>可以借助IDE生成对应函数定义。

![](..%2Fassets%2FIDEgenerate%20def.jpg)

>TEST.cpp

```cpp
#include "TEST.h"

void UTEST::TESTFUNC()
{
	GEngine->AddOnScreenDebugMessage(-1, 5.f, FColor::Red, TEXT("Hello World!"));
}
```
![ideaicode2.jpg](..%2Fassets%2Fideaicode2.jpg)

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
再次安利一波AI补全插件，只需记住类的开头基本都能补出来！
</ChatMessage>

## 6. 编译，在关卡蓝图检验。

![](..%2Fassets%2Ftesthelloworld.png)

<ChatMessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
我们之前命名为TESTFUNC，分组在TEST已经成功映射到蓝图中了！
</ChatMessage>

![](..%2Fassets%2Ftestfunlist.jpg)

>因为我们的函数中没有加入参数，所以对应生成的蓝图节点也没有输入输出节点。

## 7.运行查看成果！

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
点击播放后，窗口中也成功打印红色的hello world!
</ChatMessage>

![](..%2Fassets%2Fsuccesshelloworld.png)

## 参考链接
| 课程名                              | 类型      | 链接                                                                                     |
|-----------------------------------|-----------|----------------------------------------------------------------------------------------|
| 2023最新版C++                    | C++基础  | [链接](https://www.bilibili.com/video/BV1eL41187JS/?spm_id_from=333.999.0.0&vd_source=fc61eb54bf3245afbff2be6b8c1ebfc2)                     |
| 【Cherno C++】                 | C++基础  | [链接](https://www.bilibili.com/video/BV1fP4y1w7iE/?spm_id_from=333.999.0.0)                        |
| 为游戏编程学习C++           | C++基础  | [链接](https://www.bilibili.com/video/BV1Dd4y1R7VS/?spm_id_from=333.999.0.0)                        |
| 字节跳动最新打造的C++教程 | C++基础  | [链接](https://www.bilibili.com/video/BV1ps4y1k7d7/?spm_id_from=333.999.0.0)                        |
| Udemy宝藏数据结构与算法课   | C++算法  | [链接](https://www.bilibili.com/video/BV1Ba411Y71K/?spm_id_from=333.337.top_right_bar_window_custom_collection.content.click) |
