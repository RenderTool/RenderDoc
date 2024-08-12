---
title: EXP8.SpaceAdditive
order : 08
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
Baba!我想让我的角色跑起来时身体有明显的运动倾斜。
</chatmessage>

![](..%2Fassets%2FHighresScreenshot00000.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
安排！
</chatmessage>

## 准备

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
准备3个Pose，左中右。
</chatmessage>


![](..%2Fassets%2Fpose001.png)


### 1D混合空间

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
将上面的3个Pose放入。
</chatmessage>


![](..%2Fassets%2Fpose002.png)


<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
妙啊！通过-1到1的值映射左中右3个Pose的动作幅度。
</chatmessage>

### 应用网格体空间叠加型姿势（Apply Mesh Space Additive）


![](..%2Fassets%2Fpose003.png)


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
在不破坏原有动作的前提下，Space Additive能通过条件自动叠加混合出我们需要的姿势。
</chatmessage>


![](..%2Fassets%2Fpose005.png)

![Get Lean Amount](..%2Fassets%2Fpose004.png)


![Calculate Relative Acceleration Amount](..%2Fassets%2Fpose006.jpg)