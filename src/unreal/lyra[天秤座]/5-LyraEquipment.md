---
title: LY5.Lyra-装备系统
order : 5
category:
  - unreal
---

### 概念

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
在深入装备系统前，我们需要先理解一下装备系统、道具系统（背包）的区别
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
我认为装备系统维护玩家正在使用的装备，而道具系统更像仓库存放各类物品。
</chatmessage>


## 各模块职责分析

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
不废话先看有哪些类
</chatmessage>

![](..%2Fassets%2Fequip_001.png)

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
我已经开始头晕了！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
别慌，咱们先把这些类画一下
</chatmessage>

## 类图

### ULyraEquipmentDefinition(装备定义模块)

![](..%2Fassets%2FULyraEquipmentDefinition.svg)

• **核心类**：
• `ULyraEquipmentDefinition`
• `FLyraEquipmentActorToSpawn`

• **职责**：
• 定义装备的静态属性（如生成的Actor类型、附加点信息）
• 配置装备授予的能力集（AbilitySets）

### ULyraEquipmentInstance(装备实例)

![](..%2Fassets%2FLyraEquipmentInstance.svg)

• **核心类**：
• `ULyraEquipmentInstance`

• **职责**：
• 管理装备实例的生命周期（OnEquipped/OnUnequipped）
• 处理Actor的生成与销毁（Spawn/DestroyEquipmentActors）
• 网络同步装备状态（Replicated属性）


###  ULyraEquipmentManagerComponent(装备管理模块)

![](..%2Fassets%2FULyraEquipmentManagerComponent.svg)


• **核心类**：
• `ULyraEquipmentManagerComponent`
• `FLyraEquipmentList`

• **职责**：
• 管理Pawn的装备列表
• 处理装备的添加/移除网络同步
• 与AbilitySystem组件交互授予/移除能力

### 快捷栏系统

![](..%2Fassets%2FULyraQuickBarComponent.svg)

• **核心类**：
• `ULyraQuickBarComponent`

• **职责**：
• 管理玩家物品快捷栏
• 处理装备切换逻辑
• 同步槽位状态

### LyraPickupDefinition（拾取物）

![](..%2Fassets%2FLyraPickupDefinition.svg)

• **核心类**：
• `ULyraPickupDefinition`
• `ULyraWeaponPickupDefinition`

• **职责**：
• 定义拾取物的视觉表现（模型/特效/音效）
• 配置拾取物关联的物品定义

### 能力系统集成

![](..%2Fassets%2FULyraGameplayAbility_FromEquipment.svg)

• **核心类**：
• `ULyraGameplayAbility_FromEquipment`

• **职责**：
• 建立装备与GameplayAbility的关联
• 提供装备上下文给能力系统

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
虽然你写了一大堆，我还是一脸懵逼！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
那是因为你没有完整的体验一遍使用流程
</chatmessage>

## 时序图


### 玩家通过快捷栏装备一件物品

![](..%2Fassets%2FPlayerEquip.svg)

### 切换快捷栏槽位

![](..%2Fassets%2FPlayerEquip01.svg)

### 卸下装备

![](..%2Fassets%2FPlayerEquip02.svg)