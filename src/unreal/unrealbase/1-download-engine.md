---
title: 前言
#icon: download
order : 1
---

## 前言

工欲善其事必先利其器。

## 软件下载

1. [中文官网]("https://www.unrealengine.com/zh-CN/)

![Download-Step1.png](assets%2Fdownload-step1.png)

2. 点击左上角下载按钮下载EpicGamesLauncher
> 关于[EpicGamesLauncher]("https://store.epicgames.com/zh-CN/")并不是引擎本体，类似Steam游戏平台的启动器。

![Download-Step2.jpg](assets%2Fdownload-step2.jpg)


## IDE的选择
如果你熟悉C++并尝试接触UEC++，你会发现阻碍你前进的主要并非C++语言本身，而是需要熟悉UE自身的框架以及非人类阅读的官方API.
UE默认使用[Microsoft Visual Studio](https://visualstudio.microsoft.com/zh-hans/downloads/)，但它对UE的代码提示并不十分友好。

>即使使用了一些辅助插件（小番茄），仍然难以满足需求。

你也可以选择被许多开发者称为"宇宙最强IDE"的VSCode。

诚然，在编写前端应用和Python项目时，VSCode确实是一个非常优秀的选择。但在这里我强烈推荐你使用[Rider](https://www.jetbrains.com/zh-cn/rider/)。

>同时，结合CodeGeeX、GitHub Copilot、Codeium Chat等AI代码补全插件。

以删除一个类为例，使用VS只会将其在项目中暂时移除，下次打开依然存在。

通常需要以下步骤才能彻底移除一个类：

``` text
1. 关闭UE编辑器
2. 在VS中移除这两个文件
3. 在工程目录下删除这两个文件
4. 删除Binaries文件夹
5. 在VS中生成解决方案
6. 重新打开UE编辑器
```

>书写md时候甚至有UI辅助，这点在VsCode中也没有。

![mdUI辅助](assets%2Fmdtip.png)

>添加文件时,会尽可能的显示当前项目框架的格式。

![前端框架时](assets%2Fcodetemple.png)

## 参考资料
[csdn]("https://blog.csdn.net/Cappuccino_jay/article/details/129683370")

[UE官网]("https://www.unrealengine.com/zh-CN/download")

[UE官方文档]("https://docs.unrealengine.com/5.2/zh-CN/")