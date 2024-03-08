---
title: NT-2.网络同步-01|Actor复制
order: 20
category:
  - unreal
---
## 问题

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
角色类中添加了如下函数：按数字1可以Spawn生成Actor
</chatmessage>

![](..%2Fassets%2FspwanActor.png)

<chatmessage avatar=" ../../assets/emoji/new7.png" :avatarWidth="40">
进行简单网络同步测试。同时客户端和服务端后，客户端按1生成Actor，服务端并没有同步
</chatmessage>

![](..%2Fassets%2Fclientreplicate.png)

<chatmessage avatar=" ../../assets/emoji/new7.png" :avatarWidth="40">
但是，在服务端按1时，客户端却同步了！
</chatmessage>

![](..%2Fassets%2Fserverreplicate.png)

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
我明明已经启用了网络复制！为什么客户端中按1，服务端没有同步生成？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
咱先搞懂几个概念
</chatmessage>

## Replication|复制

>复制是服务器将信息/数据传递给客户端的行为。

![中文](..%2Fassets%2Freplicate.png)

![英文](..%2Fassets%2Fvariables-.png)

>对应的CPP

```cpp
AMyCharacter::ATestCharacter(const FObjectInitializer& ObjectInitializer)
    : Super(ObjectInitializer)
{
    bReplicates = true;
}
```

![](..%2Fassets%2Factorfz001.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
在UE中继承自Actor的派生都有Replication(包括组件)
</chatmessage>

![](..%2Fassets%2Freplicate001.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
先不讨论SpawnActor的情况，在场景中置入测试Actor，并关闭复制。
</chatmessage>

![](..%2Fassets%2Freplicate002.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
关闭复制。
</chatmessage>

![](..%2Fassets%2Freplicate004.png)

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
运行后，两端都能正常显示，这个复制可有可无？
</chatmessage>

![](..%2Fassets%2Freplicate003.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
并不是，虽然两端都看到了这个Actor,他们彼此独立。
</chatmessage>


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

若将`客户端上的网络加载`关闭，原形毕露。

</chatmessage>

![](..%2Fassets%2Freplicate005.png)


![](..%2Fassets%2Freplicate006.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
此时虽不可见，生成处依然会有球体的碰撞。
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup10.gif"/>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
啊？我怎么越听越迷糊了？为什么关闭了网络加载依然会有碰撞？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
别急，咱再补几个概念。
</chatmessage>

## 网络权威

### Authority|Remote

:::note
罗马音读音为 /əˈθɔːrəti/（英式发音）或 /əˈθɒrəti/（美式发音）。
:::

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
客户端确实生成了Actor，但我们认为所有客户端不可信，即服务器拥有绝对权限(Authority)。
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


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
翻看翻看源码，一探究竟。
</chatmessage>

![](..%2Fassets%2Fnetwork001.png)

### ENetRole|Remote

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
可以看到实际它调用了GetLocalRole()
</chatmessage>

```cpp
GetLocalRole() == ROLE_Authority
```

![](..%2Fassets%2Fnetwork002.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

参考[文档](https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Networking/Actors/Roles/)

</chatmessage>

::: code-tabs#language

@tab 原文

```cpp
/** The network role of an actor on a local/remote network context */
UENUM()
enum ENetRole : int
{
	/** No role at all. */
	ROLE_None,
	/** Locally simulated proxy of this actor. */
	ROLE_SimulatedProxy,
	/** Locally autonomous proxy of this actor. */
	ROLE_AutonomousProxy,
	/** Authoritative control over the actor. */
	ROLE_Authority,
	ROLE_MAX,
};
```
@tab 翻译
```cpp
/** 在本地/远程网络环境中，演员的网络角色 */
UENUM()
enum ENetRole : int
{
	/** 没有角色。 */
	ROLE_None,
	/** 该演员的本地模拟代理。 */
	ROLE_SimulatedProxy,
	/** 该演员的本地自治代理。 */
	ROLE_AutonomousProxy,
	/** 对该演员的权威控制。 */
	ROLE_Authority,
	ROLE_MAX,
};
```
:::

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
蓝图中节点如下：
</chatmessage>


![](..%2Fassets%2Fcsnode.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
可以看到客户端的角色只有Remote权限没有Authority。
</chatmessage>

>Character继承Pawn，Pawn继承Actor，本质还是Actor所以可以调到。

<gifwithbutton src="../../assets/unrealgif/hpimpove5.gif"/>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
便于测试，咱把代码写在Actor的tick中，然后Debug每个场景中的的网络权限。
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup11.gif"/>


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
客户端并没有网络权限，只是个无情的模拟机器。
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
既然用不用Replication都能正确显示，那么这个Replication到底有什么用？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
场景默认生成的Actor确实看不出太多区别，但你提到的SpawnActor就看出大区别了。
</chatmessage>

![](..%2Fassets%2Freplicate008.png)

![](..%2Fassets%2Freplicate009.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

将复制关闭后，在服务端，也只能在本地生成，无法同步。即便是开启`客户端上的网络加载`依然如此。

</chatmessage>

![](..%2Fassets%2Freplicate010.png)

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">

可以理解成一开始这个Level中压根就没有这个对象是吧，也就不存在`客户端上的网络加载`行为了。

</chatmessage>

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
你说客户端没有什么权限,客户端总得发送我的按键消息吧！
</chatmessage>

 <chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
是的，客户端总得通过一个方法去告诉服务器自己的行为，我们把这个过程称为RPC.
 </chatmessage>

>"RPC" 是 "Remote Procedure Call"（远程过程调用）的缩写。它是一种通信协议和编程模型，
用于在不同的计算机或进程之间调用远程服务或函数，就像调用本地函数一样。


<chatmessage avatar=" ../../assets/emoji/bqb (6).png" :avatarWidth="40">
SO!UE中该怎么让客户端生成的Actor能同步到服务器呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
理解还是有误！客户端并没有直接权限生成Actor（客户端不可靠）。
</chatmessage>

>注意这里的服务器描述可能不准确，LS确实是生成球体，而DS模式可能只是生成球体的代理。

![](..%2Fassets%2Fsimple.svg)


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
现在康康你原本的思路。
</chatmessage>

![](..%2Fassets%2Ferrorpc.svg)

## 解决|RPC调用

### BP

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
UE的BP中，可以在自定义事件中标记RPC状态，默认是不复制的。
</chatmessage>

![](..%2Fassets%2Freplicate007.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
确保Actor本身可以复制，定义一个在服务器上执行的事件。
</chatmessage>

![](..%2Fassets%2Freplicate011.png)

<chatmessage avatar=" ../../assets/emoji/bqb (6).png" :avatarWidth="40">
搜嘎！客户端申请服务器生成这个Actor，然后自动同步给其他客户端。
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup12.gif"/>

### C++

```cpp
   // .h
   UFUNCTION(Server, Reliable)
   void ServerSetHealth();

   // .cpp
   void AMyActor::ServerSetHealth_Implementation()
   {
     //spawn的代码
   }
```

<chatmessage avatar=" ../../assets/emoji/bqb (6).png" :avatarWidth="40">
一些变量比如速度如何同步呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
请看下一章。
</chatmessage>
   
## 扩展阅读

![光环网络同步](..%2Fassets%2Fgh.jpg)


[《守望先锋》中的网络脚本武器和能力](https://www.gdcvault.com/play/1024041/Networking-Scripted-Weapons-and-Abilities)

[大佬博客](https://cedric-neukirchen.net/docs/multiplayer-compendium/additional-resources)

[官方论坛](https://forums.unrealengine.com/t/who-has-authority-server-or-client-and-when/247708/7)