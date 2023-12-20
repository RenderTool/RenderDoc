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

<ChatMessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>

先看一个比较重要的一个类 `USubtitleDisplay : public UWidget`

</ChatMessage>

![](..%2Fassets%2Flyrasub3.png)

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
表现为游戏内为 UMG 组件，用于显示游戏字幕。
</ChatMessage>

![](..%2Fassets%2Flyrasub4.png)

<ChatMessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">

需要配置相关 Options 资产类 `[USubtitleDisplayOptions : public UDataAsset]`

</ChatMessage>

![](..%2Fassets%2Flyrasub5.png)

<ChatMessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
游戏内路径: Content/UI/Foundation/Subtitles/W_SubtitleDisplayHost.uasset 
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/new4.png" :avatarWidth="40" alignLeft>
配置内容其实也就是字体和显示的一些属性，和 GameSetting 里是对应的。
</ChatMessage>


![](..%2Fassets%2Flyrasub6.png)

![](..%2Fassets%2Flyrasub7.png)

<ChatMessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
当然使用它也非常简单，随便找一个音频文件，添加测试字幕
</ChatMessage>

![](..%2Fassets%2Flyrasub8.png)

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
下面是效果。
</ChatMessage>

![](..%2Fassets%2Flyrasub9.png)

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
至于使用，只需要像一个普通UMG组件一样附加到显示的UMG上即可。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
那么为什么这个组件加到UMG上就能用呢？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
猫腻其实就出现在这——SubtitleDisplaySubsystem
</ChatMessage>

![](..%2Fassets%2Fsubsub.png)

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
Lyra大量使用了Subsystem这里的SubtitleDisplaySubsystem继承自UGameInstanceSubsystem
</ChatMessage>

![](..%2Fassets%2Fusesubtitle.png)