---
title: 初见CommonUI
order: 1
category:
  - 教程知识
---

### 插件概述

common UI 的设计目的是解决重叠UI的交互问题，并在不同平台上提供统一的用户界面，以确保游戏在各种环境下都能够提供良好的用户体验。

### 插件特色

1. 重叠UI的交互限制：通过使用common UI，可以确保在上层菜单存在时，阻止玩家与背景UI进行互动。这是通过在上层菜单上设置遮罩或拦截事件的方式实现的，从而保证了游戏界面的交互性和用户体验。
2. 多平台适用性：common UI 被设计为适用于不同平台和控制器，包括PC和主机。它能够响应不同的输入方式，例如在PC上通过光标点击，而在主机上通过控制方向和按钮点击。通过将这些输入事件抽象化，common UI 可以使游戏在不同平台上都能够提供一致的用户交互体验。

### 插件使用

![](assets%2Fcommonui.jpg)

### 源码目录

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
UE_5.x\Engine\Plugins\Experimental\CommonUI\Source\CommonUI\
</ChatMessage>

## TODO