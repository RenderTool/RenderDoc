---
title: EXP6.更智能的敌人01—从走路开始
order : 6
category:
  - u++
---

### 导言

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我怎么让我的机器人AI动起来呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

我觉得咱们先别关心AI动不动的问题，先让咱的角色"走"起来是再说

</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
可是UE自带的模板不是已经有走路跳跃奔跑等动画了吗？
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/move01.gif"/>


<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
你管这个叫走路？这个叫漂移
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
被你这么一说，还真感觉在漂移!这是为什么呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
漂移感来源一般有下面几个点
</chatmessage>

1. **播放速度不匹配**：
    - 如果动画的播放速度与角色实际移动的速度不匹配，就会导致漂移的感觉。

2. **过渡不平滑**：
    - 如果从一个动画状态切换到另一个状态的过渡不平滑，也可能导致漂移感。

3. **动画根骨骼不准确**：
    - 动画的根骨骼（Root Bone）在移动时应该与实际角色的位置保持一致。如果根骨骼不准确，可能导致漂移感。

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
什么意思？为什么播放速度会不匹配？
</chatmessage>

### 移动组件

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
这就要从移动组件说起了。
</chatmessage>

[官方文档](https://docs.unrealengine.com/5.0/zh-CN/understanding-networked-movement-in-the-character-movement-component-for-unreal-engine/)

![](..%2Fassets%2Fmovement001.png)

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
理论上来说，移动组件的移动速度和我们的播放的动画速度是一致的话，是不会产生滑步的。（这里不考虑网络影响）
</chatmessage>

### Debug指令

```cpp
p.VisualizeMovement 1
```
[官方文档](https://docs.unrealengine.com/5.2/zh-CN/animation-shortcuts-and-tips-unreal-engine/)