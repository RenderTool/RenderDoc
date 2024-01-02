---
title: GP1.GamePlay|导言
#icon: download
order : 2
category:
  - u++
---
>天地除开，诞生了第一缕`UObject`，各自进化成Actor+Component、Level、World、WorldContext、GameInstance等。  
有这么一天，UEngine大佬出现自称为帝，掌管所有UObject，还给各种UObject划分职责。有的管理游戏逻辑、有的管理游戏表现、有的管理游戏数据。
<!-- more -->

## 导读
<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
1、食用本文前你应该已经了解UE的一些基本操作,包括下载安装、打开工程、资源导入导出、关卡等概念。<br>
2、有一定的（C++）编程基础，但不是必须的。<br>
3、本章将试图初步了解UE GamePlay架构。<br>
4、最终尝试用CPP在我们的屏幕上打印一个HelloWorld。
</chatmessage>

## UE启动
>心血来潮！我要自己搞一个游戏！UE启动！

## 1. 新建一个CPP工程

![](..%2Fassets%2FhelloworldUE.jpg)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
什么我不会CPP!
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
如果你不会CPP建议你去下方查考链接观看CPP基础教程，或者等我的CPP入门介绍篇。
</chatmessage>

## 2.添加第一个C++类

>等待编译并启动项目，初次尝试UECPP先问候一句HelloWorld再说，点击工具-新建一个C++类。


![](..%2Fassets%2Fnewcppclass.png)

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
BABA用了Rider已经回不去了,如果你用VS这里是将是刷新VS项目。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
弹出的窗口让人一脸懵逼！
</chatmessage>

![](..%2Fassets%2Factorpublicobject.jpg)

<chatmessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
看不懂，根本看不懂。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
虽然看不懂这些东西是干啥的，但细心的你应该发现:<br>
所有节点的根目录都来自一个叫Object的东西，这里我们叫它UObject。<br>
即：所有XXObject都继承自UObject。
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/newcppclass.gif"/>

<chatmessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
你在说啥？啥是UObject？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
很好！看来下一步之前需要搞清楚几个基本概念
</chatmessage>

## UObject|UE对象

>什么是UObject?

<chatmessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
在 Unreal Engine 中 <br>
·UObject几乎是所有对象的基类，包括角色、物体、组件、纹理、材质等等。<br>
·UObject 提供了许多基本的功能和特性，例如内存管理、反射（Reflection）、属性系统、蓝图扩展等。<br>
</chatmessage>

![例如：Actor继承自UObject](..%2Fassets%2Factorpublicobject.jpg)

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
确实耶！对比蓝图版，C++类中多了许多编辑器类，代码在手为所欲为。
</chatmessage>

![左边C++右边蓝图](..%2Fassets%2Fslate.jpg)

<hr>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
如果把UObject理解成混沌之力，凝聚成一个一个对象。现在这些对象只是原始部落时代的人类，没有规则、秩序。
Epicbaba作为造物主，当然需要给自己的UE宇宙制定一些界面准则——GamePlay。
</chatmessage>

## UE-GamePlay架构
<chatmessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
现在请你暂停阅读，你会怎么制定这些准则，让你的游戏世界正常运作？
</chatmessage>

![](..%2Fassets%2FGameFramework.jpg)

摘自官方文档：
>此流程图演示了这些核心Gameplay类彼此之间的关系。
<br>一个游戏由一个GameMode和一个GameState构成。
<br>加入游戏的人类玩家与PlayerController关联。
<br>这些PlayerController允许玩家持有游戏中的Pawn，以便在关卡中有物理表示。
<br>PlayerController还为玩家提供了输入功能按钮、平视显示器（简称HUD）和用于处理摄像机视图的PlayerCameraManager。

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
官方你在说啥？我脑子不够用了！
</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
总结成一个基本公式：<br>
游戏规则 + 3C + 游戏界面 = 基础GamePlay。<br>
</chatmessage>

>下面会详细介绍每一项

<span style="color: red"><a href="#_1GamePlay->GameMode">游戏规则： ①-②</a><br>
<a href="#_3-camera-游戏相机">3C是指： <span style="color: orangered">Character（角色）、Control（控制）和Camera（摄像机）</span> ③-⑤</a>[扩展阅读](https://zhuanlan.zhihu.com/p/357621053)<br>
<a href="#_6-gameui-游戏ui">游戏界面⑥</a></span>
### ①GamePlay->GameMode

- AGameModeBase (public AInfo)
    - AInfo (public AActor)
        - AActor (public UObject)

<chatmessage avatar="../../assets/emoji/bqb02.png" :avatarWidth="40" alignLeft>
GameMode（游戏模式）是一个非常重要的类，它决定了游戏的规则、逻辑和行为。
</chatmessage>

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


<hr>

### ② GameState|游戏状态

- AGameStateBase (public AInfo)
    - AInfo (public AActor)
        - AActor (public UObject)

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
Game State 就是指游戏状态。它管理了所有已连接的客户端，并且实时追踪游戏层面的属性并把它们分发给远程客户端。
</chatmessage>

<hr>

### ③ Camera|游戏相机

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
3C之一Camera
</chatmessage>

<hr>

### ④ Character|游戏角色

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
3C之一Character
</chatmessage>

<hr>

### ⑤ Controller|控制器

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
3C之一Controller
</chatmessage>

<hr>

### ⑥ GameUI|游戏UI

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
比如血条、切枪图标等。
</chatmessage>

<hr>

### Component|组件

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
组件 是一种特殊类型的 对象，Actor 可以将组件作为子对象附加到自身。组件适用于共享相同的行为，例如显示视觉表现、播放声音
</chatmessage>

![](..%2Fassets%2FUEComponent.png)

| 组件类型                     | 功能和用途                 |
|--------------------------|-----------------------|
| UStaticMeshComponent     | 渲染静态网格模型，如墙、地板等       |
| USkeletalMeshComponent   | 渲染有骨骼的网格模型，适用于角色和生物   |
| UCameraComponent         | 创建摄像机视图，用于玩家或观察       |
| ULightComponentBase      | 创建不同类型的光源，如点光源、聚光灯等   |
| UParticleSystemComponent | 播放粒子系统，创建特效如火焰、爆炸等    |
| UAudioComponent          | 播放声音，附加到物体上产生音效       |
| UCollisionComponent      | 处理碰撞和触发事件，可以是基本碰撞体或区域 |
| UInputComponent          | 处理玩家输入，如按键和鼠标事件       |
| USceneComponent          | 在场景中构建组件层次结构，可作为父组件   |
| UWidgetComponent         | 将2D UI嵌入3D世界，显示UMG部件  |

<chatmessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
记不住根本记不住！这里BABA推荐我看<a href="./exp_经验_/1-Blueprint2CPP.html">蓝图节点对应CPP的探索与解析</a>
</chatmessage>

<hr>


### UWorld|游戏世界

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" >
现在框架有了好比游戏内剧本、演员、相机等道具都齐活了！可拍摄地呢?导演呢？谁是BOSS?
</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
拍摄地当然是要放在世界里啊，当然这个“世界”指的是我们的UWorld。
</chatmessage>

![关卡](..%2Fassets%2Flevel.jpg)

### ULevel|游戏关卡

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40" >
可一个世界不一定只有一个国家，像我们真实世界就有好多国家.
</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
是的，你口中的好多国家其实就是Ulevel.实际上是受硬件限制，不得不将这个大世界分成若干块，然后按需加载。<br>
 <span style="color: #c0392b">N*ULeveL => UWorld </span>
</chatmessage>

![若干小关卡组成大世界](..%2Fassets%2Fuworld.jpg)


### WorldContext|世界上下文
<chatmessage avatar="../../assets/emoji/bqb01.png" :avatarWidth="40">
问题又来了！我们玩的很多游戏好像不止一张地图哦！也就是不止一个World!如果玩家去另外一个世界丢失记忆（游戏数据）可不是一件好事。
</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
EPICbaba给我们的UE奈何桥留了个后门-WorldContext，通过WorldContext可以连接各个界面而保持记忆。
</chatmessage>

<hr>

## 掌权者

### GameInstance|游戏实例

<chatmessage avatar="../../assets/emoji/bqb01.png" :avatarWidth="40">
似乎我们已经从人界跳脱，来到了其他界面。前文我们讨论了后门-WorldContext的事情，看毕竟这只是一个后门，到底谁能开启掌管这个后门呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
GameInstance就是这么一个掌权者，管理这些“后门”。
</chatmessage>

![](..%2Fassets%2Fgameinstancecpp.jpg)

## 大帝

### UEngine|虚幻游戏引擎

天地除开，诞生了第一缕`UObject`，各自进化成Actor+Component、Level、World、WorldContext、GameInstance等。  
有这么一天，UEngine大佬出现自称为帝，掌管所有UObject，还给各种UObject划分职责。有的管理游戏逻辑、有的管理游戏表现、有的管理游戏数据。

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
没错，这就是经典的MVC->数据（Model）、表现（View）、逻辑（Controller）
</chatmessage>

**Object->Actor+Component->Level->World->WorldContext->GameInstance->Engine**

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
最终一个由大帝——UEngine掌管的宇宙诞生了。
</chatmessage>


## 真神
<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
说到底还是程序员在管理这些东西，可是“它们”内部之前的矛盾一不小心就会激化。比如：垃圾怎么倒啊！某管理员权限越级啊！
这时候我们需要介入调和、整顿。
</chatmessage>

### UE-Refection|UE反射

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40" alignLeft>
C++中并没有类似JAVA的反射机制，但EpicBABA的UE引擎已经帮我们实现了。
</chatmessage>

>篇幅限制，这里不做反射的深入，具体可以看后续的反射机制篇。

可以先参考[官方文档](https://docs.unrealengine.com/5.3/zh-CN/reflection-system-in-unreal-engine/)

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
简单来说虚幻引擎反射系统 使用宏为提供引擎和编辑器各种功，封装你的类。在使用 虚幻引擎（UE） 时，可以使用标准的C++类、函数和变量。
</chatmessage>

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" >
Baba我不知道什么叫宏耶！
</chatmessage>


`宏（英语：Macro），是一种批量处理的称谓。 计算机科学里的宏是一种抽象（Abstraction），它根据一系列预定义的规则替换一定的文本模式。
解释器或编译器在遇到宏时会自动进行这一模式替换。——wiki` 具体的宏标记请[阅读我的](./doc_文档_/macro.html)

### UHT|Unreal Header Tool（虚幻头文件工具）

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
UHT是一个用于生成C++类和相关代码的预处理器工具，它将特定的宏和标记解析成C++代码，以便在编译时构建项目。大致流程如下：
</chatmessage>

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


<hr>
<chatmessage avatar="../../assets/emoji/bqb (7).png" :avatarWidth="40" >
解决完这些矛盾、纠纷后怎么保存我们建立的”宇宙“呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
不得不引入一个叫做资源打包的概念。
</chatmessage>

### UPK|UE包文件组成

<chatmessage avatar="../../assets/emoji/bqb (7).png" :avatarWidth="40" alignLeft>
Unreal Package 文件，它是Unreal Engine（虚幻引擎）中用于存储游戏资源和数据的一种文件格式。
</chatmessage>

![](..%2Fassets%2FUEpakage.jpg)

>从Unreal Engine 4（UE4）开始，UPK 文件被替代为更先进的Unreal Asset文件格式（.uasset）和Unreal Asset Registry（.uassetregistry）等。
UPK 文件仍然存在于早期版本的Unreal Engine中。<br>
更准确点描述：一个Package是一个文件（.uasset或者.umap），它包含一些可以UE4进行操作和访问的二进制数据文件。

## 进化

各司其职原本是件好事，随着时间的增加，我们发现这个管理模式会出现很多问题。大帝UEngine忙着管理大局，所有琐碎任务都堆积给我们的Gameinstance这位掌权者身上，导致我们的项目非常难以维护。
<br>如果我们自己重新定义一个管理者Object Manager，又必须非常小心管理这一切。  
好钢用在刀刃——显然开发者应该把精力更多的放在游戏性本身。
>于是UEngine“东、西厂”出现了！——Subsystem。

### Subsystem|子系统

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40" alignLeft>
子系统是一组在整个引擎中提供特定功能的类和接口，它们可以独立于Gameplay存在并提供额外的功能和服务。后续会有实践篇，更加深入体验一下。
</chatmessage>

| 子系统     | 继承自的类                    |
|---------|--------------------------|
| 引擎子系统   | UEngineSubsystem 类       |
| 编辑器子系统  | UEditorSubsystem 类       |
| 游戏实例子系统 | UGameInstanceSubsystem 类 |
| 本地玩家子系统 | ULocalPlayerSubsystem 类  |

>当引擎子系统的模块加载时，子系统将在模块的 Startup() 函数返回后执行 Initialize()，子系统将在模块的 Shutdown() 函数返回后执行 Deinitialize()。

![目录：Engine\\Source\\Runtime\\Engine\\Public\\Subsystems\\](..%2Fassets%2Fsubsystems.jpg)


## 3. 选择蓝图函数库类

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
是不是已经快要忘记咱们的主线任务啦！
</chatmessage>

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
<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
之前我们已经介绍过UHT,通过观察，UHT确实将一些宏标记”翻译“成具体代码提交给了编译器。
</chatmessage>

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

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
再次安利一波AI补全插件，只需记住类的开头基本都能补出来！
</chatmessage>

## 6. 编译，在关卡蓝图检验。

![](..%2Fassets%2Ftesthelloworld.png)

<chatmessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
我们之前命名为TESTFUNC，分组在TEST已经成功映射到蓝图中了！
</chatmessage>

![](..%2Fassets%2Ftestfunlist.jpg)

>因为我们的函数中没有加入参数，所以对应生成的蓝图节点也没有输入输出节点。

## 7.运行查看成果！

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
点击播放后，窗口中也成功打印红色的hello world!
</chatmessage>

![](..%2Fassets%2Fsuccesshelloworld.png)

## 参考链接

|   大佬                   |
|---------------------------|
|    **[ 知乎大钊](https://www.zhihu.com/people/fjz13)**|

| 课程名                              | 类型    | 链接                                                                                     |
|-----------------------------------|-------|----------------------------------------------------------------------------------------|
| 2023最新版C++                    | C++基础 | [链接](https://www.bilibili.com/video/BV1eL41187JS/?spm_id_from=333.999.0.0&vd_source=fc61eb54bf3245afbff2be6b8c1ebfc2)                     |
| 【Cherno C++】                 | C++基础 | [链接](https://www.bilibili.com/video/BV1fP4y1w7iE/?spm_id_from=333.999.0.0)                        |
| 为游戏编程学习C++           | C++基础 | [链接](https://www.bilibili.com/video/BV1Dd4y1R7VS/?spm_id_from=333.999.0.0)                        |
|      黑马程序员匠心之作|C++教程          | [链接](https://www.bilibili.com/video/BV1et411b73Z?t=94.0&p=95 )                                                                                                    |
| 字节跳动最新打造的C++教程 | C++基础 | [链接](https://www.bilibili.com/video/BV1ps4y1k7d7/?spm_id_from=333.999.0.0)                        |
| Udemy宝藏数据结构与算法课   | C++算法 | [链接](https://www.bilibili.com/video/BV1Ba411Y71K/?spm_id_from=333.337.top_right_bar_window_custom_collection.content.click) |

