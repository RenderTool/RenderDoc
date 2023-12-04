---
title: LY3.Lyra-字幕插件
order : 3
category:
  - unreal
---

### 介绍

### 依赖插件：GameSubtitles

![](..%2Fassets%2Flyrasub1.png)

![](..%2Fassets%2Flyrasub2.png)

<ChatMessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40">

先看一个比较重要的一个类 `USubtitleDisplay : public UWidget`

</ChatMessage>

![](..%2Fassets%2Flyrasub3.png)

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
表现为游戏内为 UMG 组件，用于显示游戏字幕。
</ChatMessage>

![](..%2Fassets%2Flyrasub4.png)

<ChatMessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">

需要配置相关 Options 资产类 `[USubtitleDisplayOptions : public UDataAsset]`

</ChatMessage>

![](..%2Fassets%2Flyrasub5.png)

<ChatMessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40">
游戏内路径: Content/UI/Foundation/Subtitles/W_SubtitleDisplayHost.uasset
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/new4.png" :avatarWidth="40">
配置内容其实也就是字体和显示的一些属性，和 GameSetting 里是对应的。
</ChatMessage>


![](..%2Fassets%2Flyrasub6.png)

![](..%2Fassets%2Flyrasub7.png)

<ChatMessage avatar="../../assets/emoji/new1.png" :avatarWidth="40">
当然使用它也非常简单，随便找一个音频文件，添加测试字幕
</ChatMessage>

![](..%2Fassets%2Flyrasub8.png)

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
下面是效果。
</ChatMessage>

![](..%2Fassets%2Flyrasub9.png)
