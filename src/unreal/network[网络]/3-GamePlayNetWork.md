---
title: NT-3.GamePlayNetWorkTODO
order: 30
category:
  - unreal
---
## 导读
<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
Baba，我遇到问题了！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
说！
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
我在我的角色类中添加了如下函数：
</chatmessage>

>按数字1可以Spawn生成Actor

![](..%2Fassets%2FspwanActor.png)

<chatmessage avatar=" ../../assets/emoji/new7.png" :avatarWidth="40">
接着，我进行了简单网络同步测试。同时运行了客户端和服务端后，发现在客户端按1生成Actor，服务端并没有同步生成！
</chatmessage>

![](..%2Fassets%2Fclientreplicate.png)

<chatmessage avatar=" ../../assets/emoji/new7.png" :avatarWidth="40">
然而，神奇的是在服务端按1时，客户端却同步了！
</chatmessage>

![](..%2Fassets%2Fserverreplicate.png)

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
我明明已经启用了网络复制！为什么客户端中按1，服务端没有同步生成？
</chatmessage>

## Replication|复制

>复制是服务器将信息/数据传递给客户端的行为。

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
案例中你应该只是启用了Actor的网络复制属性如下图：
</chatmessage>

![中文](..%2Fassets%2Freplicate.png)

![英文](..%2Fassets%2Fvariables-.png)

>对应的CPP

```cpp
AMyCharacter::ATestCharacter(const FObjectInitializer& ObjectInitializer)
    : Super(ObjectInitializer)
{
    bReplicates = true;
    bReplicateMovement = true;
}
```

>如果服务器生成了将“bReplicates”设置为 TRUE 的 Actor，则将在所有客户端上生成和复制。<br>
如果一个客户端生成了这个 Actor，那么 Actor 将只存在于这个客户端上。

![](..%2Fassets%2Factorfz001.png)

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
你想啊，如果客户端可以随便生成数据那岂不是外挂满天飞了？
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/bqb (6).png" :avatarWidth="40">
对哦！这么说来客户端确实不应该生成Actor!
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
我们先来补充几个知识点！
</chatmessage>

## 网络权威

### Authority|Remote

:::note
罗马音读音为 /əˈθɔːrəti/（英式发音）或 /əˈθɒrəti/（美式发音）。
:::

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
客户端确实生成了Actor，但最终解释权在服务端，即服务器拥有绝对权限(Authority)
</chatmessage>

![](..%2Fassets%2Fauthority.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

在UE，可以通过调用 `HasAuthority()` 来检查当前代码是否在具有 "Authority" 的实体上执行。例如：

</chatmessage>

```cpp
if (HasAuthority())
{
    // 在具有Authority的实体上执行的代码
}
```

![BP宏](..%2Fassets%2Fhasauthority.png)


![展开](..%2Fassets%2Fhasauthoritynode.png)


![](..%2Fassets%2Fcsnode.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
可以看到客户端只有Remote权限没有Authority。
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpimpove5.gif"/>

## 网络模型

 <chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
在多人在线游戏中，客户端通常是模仿服务器行为的，因为服务器负责游戏世界的状态和逻辑。这种架构被称为客户端-服务器模型。
 </chatmessage>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
突然官腔！
</chatmessage>

![](..%2Fassets%2Fonlinemode.png)

### 基本网络模式

| 网络模式                     | 说明                                                                                                 |
|--------------------------|----------------------------------------------------------------------------------------------------|
| 独立 (Standalone)          | 游戏作为服务器运行，不接受远程客户端连接。参与游戏的玩家必须为本地玩家。此模式用于单人游戏和本地多人游戏。其将运行本地玩家适用的服务器逻辑和客户端逻辑。                       |
| 客户端 (Client)             | 游戏作为网络多人游戏会话中与服务器连接的客户端运行。其不会运行服务器逻辑。                                                              |
| 聆听服务器 (Listen Server)    | 游戏作为主持网络多人游戏会话的服务器运行。其接受远程客户端中的连接，且直接在服务器上拥有本地玩家。此模式通常用于临时合作和竞技多人游戏。                               |
| 专属服务器 (Dedicated Server) | 游戏作为主持网络多人游戏会话的服务器运行。其接受远程客户端中的连接，但无本地玩家，因此为了高效运行，其将废弃图形、音效、输入和其他面向玩家的功能。此模式常用于需要更固定、安全和大型多人功能的游戏。 |


### DS和LS区别
>（Dedicated Server）和监听服务器（Listen Server）

| 方面                 | 独立服务器（Dedicated Server）                | 监听服务器（Listen Server）            |
|--------------------|----------------------------------------|---------------------------------|
| 主机                 | 独立服务器，不需要玩家主机                          | 服务器和客户端合并在一起                    |
| 与玩家的依赖             | 独立于玩家；不受玩家加入或退出的影响                     | 需要托管玩家在线                        |
| 操作系统               | 可编译为Windows和Linux                      | 客户端的操作系统                        |
| 可视化表示              | 没有可视部分，没有UI，PlayerController或Character | 需要UI，PlayerController和Character |
| 连接性                | 可在具有固定IP地址的云服务器上运行                     | 玩家连接到客户端的IP地址                   |
| IP地址问题             | 玩家连接到固定IP，没有动态IP问题                     | 由于客户端的IP更改，玩家可能面临动态IP问题         |
| OnlineSubsystem的使用 | 可以使用OnlineSubsystem解决IP问题              | 也可以使用OnlineSubsystem解决动态IP问题    |

### GamePlay网络职责

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
GamePlay框架中各自对应的网络职责划分（大佬的图）
</chatmessage>

![](..%2Fassets%2FFramework_Network.svg)

### DS(Dedicated Server)服务器网络模型

 <chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
专用服务器的下的网络模型
 </chatmessage>

![](..%2Fassets%2FFramework_Network_Two-.svg)

### RPC|Remote Procedure Calls

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
你说客户端没有什么权限。可是！客户端总得发送我的按键消息吧！
</chatmessage>

 <chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
是的，客户端总得通过一个方法去告诉服务器自己的行为，我们把这个过程称为RPC.
 </chatmessage>

"RPC" 是 "Remote Procedure Call"（远程过程调用）的缩写。它是一种通信协议和编程模型，用于在不同的计算机或进程之间调用远程服务或函数，就像调用本地函数一样。

在软件开发中，特别是在分布式系统中，RPC允许一个程序调用另一个地址空间（通常在远程机器上）的过程或服务，而开发人员不必担心底层网络通信的细节。

基本思想是，通过RPC，你可以调用远程机器上的函数，就好像调用本地函数一样，而不必手动处理底层网络通信和数据传输。这样的抽象使得分布式系统的开发更加方便。

在RPC中，通常有两个角色：

1. **客户端(Client):** 发起RPC调用的一方。
2. **服务器(Server):** 响应RPC调用的一方。


<chatmessage avatar=" ../../assets/emoji/bqb (6).png" :avatarWidth="40">
6!所以我该怎么改才能让客户端生成的Actor能同步到服务器呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

理解还是有误！客户端没有权限生成Actor让**服务器**去同步（客户端不可靠）,我给你画个简单的流程请求图吧！

</chatmessage>

>注意这里的服务器描述可能不准确，LS确实是生成球体，而DS模式可能只是生成球体的代理。

![](..%2Fassets%2Fsimple.svg)



<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
现在康康你原本的思路。
</chatmessage>

![](..%2Fassets%2Ferrorpc.svg)

## 实践

1. **定义复制属性：** 在您的Actor类中，您需要定义哪些属性需要在网络中进行复制。这通常通过使用`Replicated`标记来完成。例如：

   ```cpp
   UPROPERTY(Replicated)
   float Health;
   ```

   这将使`Health`属性被复制到所有连接的客户端。

2. **重写复制函数：** 在您的Actor类中，您需要重写`GetLifetimeReplicatedProps`函数，以告诉引擎哪些属性应该在复制中被考虑。例如：

   ```cpp
   void AYourActor::GetLifetimeReplicatedProps(TArray< FLifetimeProperty > & OutLifetimeProps) const
   {
       Super::GetLifetimeReplicatedProps(OutLifetimeProps);

       // DOREPLIFETIME for each replicated variable
       DOREPLIFETIME(AYourActor, Health);
   }
   ```

3. **在服务器上更改属性：** 当服务器上的属性更改时，使用`ServerReplicateFunction`之类的自定义RPC（远程过程调用）函数来通知客户端。例如：

   ```cpp
   // .h
   UFUNCTION(Server, Reliable)
   void ServerSetHealth(float NewHealth);

   // .cpp
   void AYourActor::ServerSetHealth_Implementation(float NewHealth)
   {
       Health = NewHealth;
   }
   ```

4. **在客户端上接收属性更改：** 客户端会自动接收服务器上的属性更改。确保您在客户端上有相应的操作来处理这些变化。

   ```cpp
   // 处理属性更改的函数
   void AYourActor::OnRep_Health()
   {
       // 在这里处理 Health 属性的变化
   }
   ```

5. **在服务器上生成对象：** 如果您希望在服务器上生成新的Actor（例如，一个新的游戏对象），确保使用Server RPC在服务器上生成，而不是直接在客户端上生成。

   ```cpp
   // 在服务器上生成新的Actor
   void AYourGameMode::SpawnNewActor()
   {
       if (HasAuthority())
       {
           AYourActor* NewActor = GetWorld()->SpawnActor<AYourActor>(...);
           // 在此添加其他处理逻辑
       }
   }
   ```
   
## 扩展阅读

![光环网络同步](..%2Fassets%2Fgh.jpg)


[《守望先锋》中的网络脚本武器和能力](https://www.gdcvault.com/play/1024041/Networking-Scripted-Weapons-and-Abilities)

[大佬博客](https://cedric-neukirchen.net/docs/multiplayer-compendium/additional-resources)