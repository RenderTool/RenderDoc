---
title: LY4.Lyra-相机系统
order : 4
category:
  - unreal
---

### 介绍
<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
细心的你应该注意到Lyra的不同模式中都有一个关于相机的描述文件
</chatmessage>

![](..%2Fassets%2FLyraCamera_001.png)

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
没错！可我始终搞不明白为什么这个描述文件能够修改我们角色的相机。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
莫要着急，看看他的代码实现
</chatmessage>

![](..%2Fassets%2FLyraCamera_002.png)

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
继承自UOject的一个抽象类（UCameraSystemModeBase）
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
没错，基于这个类派生出各种不同的相机模式。既然是个类，我们更关心的是他的生命周期、初始化和销毁。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
我看了一下源码，他好像是由UCameraSystemModeStack的类来负责切换配置的。
</chatmessage>

![](..%2Fassets%2FLyraCamera_003.png)

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
ULyraCameraModeStack从取名上看就像一个专门负责维护相机模式的类，切换、混合等。但这个类并不是子系统、游戏实例这种单例，也就是说我们
还需要找到实例他的类。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
可是没有单例，什么时机初始化这个类才最合适呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
如果没有单例，初始化最佳阶段当然是我们角色能控制相机的时候。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
也就是说我们可以在我们的角色类中初始化。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
Lyra则更巧妙的将生命周期和相机组件本身绑定，即ULyraCameraComponent
</chatmessage>

![](..%2Fassets%2FLyraCamera_004.png)

![](..%2Fassets%2FLyraCamera_005.png)

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
也就是说相机组件初始化时，就会生成一个对应的Stack类来管理维护相机模式，然后通过派生的不同相机模式，在合适的时机切换即可！
</chatmessage>