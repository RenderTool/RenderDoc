---
title: LY1.Lyra初见
order : 1
category:
  - unreal
---

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40">
刚刚打开lyra，默认的视口就是这张地图。
</chatmessage>

![](..%2Fassets%2Fimage1.png)


<chatmessage avatar="../../assets/emoji/new4.png" :avatarWidth="40">
它的实际路径在Content/System/DefaultEditorMap/L_DefaultEditorOverview.umap
</chatmessage>

![](..%2Fassets%2Fimage2.png)

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40">
很快我们就发现问题了！他没设置游戏模式！
</chatmessage>

![](..%2Fassets%2Fimage3.png)

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
这个问题好解决，应该是项目设置中默认设置了
</chatmessage>

![](..%2Fassets%2Fimage4.png)

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
接着我试着运行他，发现场景中多了7个悬浮的板。
</chatmessage>

![](..%2Fassets%2Fimage5.png)

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
关闭后这些板就不见了，只剩下一个叫B_ExperienceList3DActor和4个C++写的PlayerStart
</chatmessage>

![](..%2Fassets%2Fimage6.png)

<chatmessage avatar="../../assets/emoji/new4.png" :avatarWidth="40">
那么我们可以初步猜测这几块版是从这个Actor生成的。
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
打开后已经开始麻了，区区几个板就大动BP！
</chatmessage>

![](..%2Fassets%2Fimage7.png)

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40">
这些节点我都认识！包括这个咱很熟悉的spawn节点，但我就是不能理解他在干啥！看来lyra之旅到此就可以结束啦！
</chatmessage>

![](..%2Fassets%2Fimage8.png)

<chatmessage avatar="../../assets/emoji/new4.png" :avatarWidth="40">
当然不是，别忘记咱还有调试工具帮助我们看看这个过程实现了什么。
</chatmessage>

![](..%2Fassets%2Fimage9.png)

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40">
具体步骤我们来看看做了什么！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
一开始似乎是一个数组还被清理了（也就是初始化了一个空数组）
</chatmessage>

![](..%2Fassets%2Fimage10.png)

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
百度一下这个数组名，大概意思是一个用户体验列表。
</chatmessage>

![](..%2Fassets%2Fimage11.png)

<chatmessage avatar="../../assets/emoji/new4.png" :avatarWidth="40">
接着这个数组被附加到了另一个数组中，此时数组中依然没有值。
</chatmessage>

![](..%2Fassets%2Fimage12.png)

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40">
另外一个数组是Additional ExperiencesToShow（只用了一次）
</chatmessage>

![](..%2Fassets%2Fimage13.png)

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40">
继续执行，获取主资产ID列表，这步依然没有数据。
</chatmessage>

![](..%2Fassets%2Fimage14.png)

<chatmessage avatar="../../assets/emoji/new4.png" :avatarWidth="40">
等执行到异步加载数据列表后出现了让我们兴奋的数据。
</chatmessage>

![](..%2Fassets%2Fimage15.png)

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40">
嗯！异步加载资产是个蓝图工具，看来还在可控范围。
</chatmessage>

![](..%2Fassets%2Fimage16.png)

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
什么？你不明白什么是异步资源加载？
</chatmessage>

![](..%2Fassets%2Fimage17.png)

<chatmessage avatar="../../assets/emoji/new3.png" :avatarWidth="40">
我相信你和我一样第一次看到展开这个数据是蒙蔽状态。（这些都是啥啊）
</chatmessage>

![](..%2Fassets%2Fimage18.png)

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
于是手贱搜了一下LyraUserFacingExperienceDefinition
</chatmessage>

![](..%2Fassets%2Fimage19.png)

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
很好这是个C++类，看来事情已经开始失控了！打开看看里面写了啥。
</chatmessage>

![](..%2Fassets%2Fimage20.png)

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
（拍拍头）我傻了他就是数据资产啊！再回头看这可不就是这些玩意吗！
</chatmessage>

![](..%2Fassets%2Fimage21.png)

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
随便打开一个康康,事情开始变得有趣了！
</chatmessage>

![](..%2Fassets%2Fimage22.png)

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40">
可是里面写了啥？于是我再次运行，在界面中发现了猫腻。
</chatmessage>

![](..%2Fassets%2Fimage23.png)

<chatmessage avatar="../../assets/emoji/new4.png" :avatarWidth="40">
随便改了几条数据，这可不就是生成的板上的信息吗！
</chatmessage>

![](..%2Fassets%2Fimage24.png)

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40">
整理了一下LyraUserFacingExperienceDefinition（用户体验列表定义）对应的属性。
</chatmessage>


| 属性                   | 类型                           | 说明                        |
|----------------------|------------------------------|---------------------------|
| MapID                | FPrimaryAssetId              | 具体要加载的地图                  |
| ExperienceID         | FPrimaryAssetId              | 要加载的游戏体验                  |
| ExtraArgs            | TMap\<FString, FString\>     | 传递给游戏的额外参数                |
| TileTitle            | FText                        | UI 中的主标题                  |
| TileSubTitle         | FText                        | UI 中的副标题                  |
| TileDescription      | FText                        | UI 中的完整描述                 |
| TileIcon             | TObjectPtr\<UTexture2D\>     | UI 中使用的图标                 |
| LoadingScreenWidget  | TSoftClassPtr\<UUserWidget\> | 加载屏幕小部件，用于加载到或退出体验时显示     |
| bIsDefaultExperience | bool                         | 是否是默认体验，用于快速启动和在 UI 中优先显示 |
| bShowInFrontEnd      | bool                         | 是否在前端的体验列表中显示             |
| bRecordReplay        | bool                         | 是否记录游戏的回放                 |
| MaxPlayerCount       | int32                        | 该会话的最大玩家数                 |


这里的可能最难理解的就是这个ExperienceID官方是这样介绍的。

![](..%2Fassets%2Fimage25.png)

<chatmessage avatar="../../assets/emoji/new4.png" :avatarWidth="40">
很好!目前这个阶段我不care什么叫Experience。先继续查看一下接下来干了什么！
</chatmessage>

![](..%2Fassets%2Fimage26.png)

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
前文我们已经确定他加载的资产正是那7个派生的LyraUserFacingExperienceDefinition资产数据，现在我们逐一循环转换成LyraUserFacingExperienceDefinition类，注意这里的几个我们前面表中提过的bool变量，正是决定后续展示的依据。
</chatmessage>

![](..%2Fassets%2Fimage27.png)

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
会根据这些bool变量调整展示顺序。
</chatmessage>

![](..%2Fassets%2Fimage28.png)

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
循环7次后，确定了展示的优先级，下面是循环前后后的对比。
</chatmessage>

![前](..%2Fassets%2Fimage29.png)

![后](..%2Fassets%2Fimage30.png)

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40">
然后根据这个新的数组循环生成对应的模型到地图中。
</chatmessage>

![](..%2Fassets%2Fimage31.png)

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
至此初见篇就结束了！
</chatmessage>

