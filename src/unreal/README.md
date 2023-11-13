---
title: unreal
icon: u
dir:
  order: 2
category:
  - 文档
  - unreal
tag:
  - unreal
---


![](./assets/Unreal_Engine_dark.svg#dark =200x)

![](./assets/Unreal_Engine_light.svg#light =200x)

## UnrealEngine

虚幻引擎（英语：Unreal Engine）是一款由Epic Games开发的游戏引擎。
<ChatMessage avatar="../assets/emoji/blzt.png" :avatarWidth="40">
这也是本站的主要精力输出点。
</ChatMessage>

## 前言

工欲善其事必先利其器。

## 软件下载

1. [中文官网]("https://www.unrealengine.com/zh-CN/)

![Download-Step1.png](assets%2Fdownload-step1.png)

2. 点击左上角下载按钮下载EpicGamesLauncher

<ChatMessage avatar="../assets/emoji/hx.png" :avatarWidth="40">
这里的<a href="https://store.epicgames.com/zh-CN/">EpicGamesLauncher</a>并不是引擎本体，类似Steam游戏平台的启动器。
</ChatMessage>


![Download-Step2.jpg](assets%2Fdownload-step2.jpg)


## IDE的选择
如果你熟悉C++并尝试接触UEC++，你会发现阻碍你前进的主要并非C++语言本身，而是需要熟悉UE自身的框架以及非人类阅读的官方API.
UE默认使用[Microsoft Visual Studio](https://visualstudio.microsoft.com/zh-hans/downloads/)，但它对UE的代码提示并不十分友好。

<ChatMessage avatar="../assets/emoji/bqb (4).png" :avatarWidth="40">
即使使用了一些辅助插件（小番茄），仍然难以满足需求。
</ChatMessage>

<hr>

你也可以选择被许多开发者称为"宇宙最强IDE"的VSCode。

诚然，在编写前端应用和Python项目时，VSCode确实是一个非常优秀的选择。但在这里我强烈推荐你使用[Rider](https://www.jetbrains.com/zh-cn/rider/)。

<ChatMessage avatar="../assets/emoji/bqb (1).png" :avatarWidth="40">
同时，结合CodeGeeX、GitHub Copilot、Codeium Chat等AI代码补全插件。
</ChatMessage>

## 试试Rider吧

![](assets%2Frider-ide_cB2pr.png)

[破J补丁](https://3.jetbra.in/)

以删除一个类为例，使用VS只会将其在项目中暂时移除，下次打开依然存在。

>通常需要以下步骤才能彻底移除一个类：

``` text
1. 关闭UE编辑器
2. 在VS中移除这两个文件
3. 在工程目录下删除这两个文件
4. 删除Binaries文件夹
5. 在VS中生成解决方案
6. 重新打开UE编辑器
```

<ChatMessage avatar="../assets/emoji/bqb (3).png" :avatarWidth="40">
不好意思，Rider可以按delete和刷新项目按钮为所欲为。
</ChatMessage>

![](assets%2FA-REFRESH.png)

<hr>

<ChatMessage avatar="../assets/emoji/bqb (2).png" :avatarWidth="40">
书写md时候甚至有UI辅助。
</ChatMessage>

![](assets%2Fmdtip.png)

<hr>

<ChatMessage avatar="../assets/emoji/bqb (6).png" :avatarWidth="40">
添加文件时,会IDE会根据当前项目框架智能显示支持的格式。
</ChatMessage>

![前端框架时](assets%2Fcodetemple.png)

![UECPP项目](assets%2FUEPROG.jpg)

## 参考资料
[csdn]("https://blog.csdn.net/Cappuccino_jay/article/details/129683370")

[UE官网]("https://www.unrealengine.com/zh-CN/download")

[UE官方文档]("https://docs.unrealengine.com/5.2/zh-CN/")