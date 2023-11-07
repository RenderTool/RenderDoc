---
title: UECPP-绑定GameMode
order : 3
---

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
使用C++来绑定GameMode的方法
</ChatMessage>

## 1. 新建GameMode类

   ![](..%2Fassets%2FGameMode.jpg)

   ![](..%2Fassets%2Fgamemodeinclue.jpg)

| 类别                    | 类名                     | 用途                                                                                                 |
|-----------------------|------------------------|----------------------------------------------------------------------------------------------------|
| APawn class           | 游戏中的角色               | 代表游戏中的玩家、AI 或者其他角色。控制移动、动画、状态、碰撞等。                                            |
| AHUD class            | Heads-Up Display (HUD) | 用于在屏幕上显示游戏信息，如分数、生命值、小地图等。通常负责在画面上绘制 UI 元素。                         |
| APlayerController class | 玩家控制器               | 处理玩家输入，控制与玩家的交互，例如移动、攻击、交互等。可以操控一个或多个角色。                         |
| AGameState class      | 游戏状态                 | 负责跟踪整个游戏的全局状态，例如游戏时间、分数、胜利条件等。用于同步状态给所有客户端。                   |
| APlayerState class    | 玩家状态                 | 保存与玩家相关的状态，如分数、生命值、角色类型等。通常由服务器和客户端各自维护一份。                     |
| ASpectatorPawn class   | 观察者角色               | 允许玩家以观察者身份观察游戏，通常用于回放、录像功能或者观察比赛。不与玩家角色相关联，可以自由观察游戏世界。 |

## 2. 写入对应的类

```cpp
#include "GameMode/MenuPlayerController.h"//引入对应头文件
AMainMenuGameMode::AMainMenuGameMode()
{
    // 设置默认的PlayerController类
    PlayerControllerClass = AMenuPlayerController::StaticClass();    
}
```
<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
这里的PlayerControllerClass是GameMode父类中定义的subclass(子类)
</ChatMessage>

>以下截取自：GameModeBase.h,其他类类似写法。

```cpp
	/** The class of PlayerController to spawn for players logging in. */
	UPROPERTY(EditAnywhere, NoClear, BlueprintReadOnly, Category=Classes)
	TSubclassOf<APlayerController> PlayerControllerClass;
```

![](..%2Fassets%2Fgamemodesuper.jpg)

## 3. 编译使用OR派生蓝图
<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
可以在c++类目录中看到这个GameMode类，也可以再次基于这个GameMode派生蓝图类。
</ChatMessage>

![gamemodecpp2bp.png](..%2Fassets%2Fgamemodecpp2bp.png)