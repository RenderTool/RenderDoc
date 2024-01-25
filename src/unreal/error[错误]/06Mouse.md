---
title: Error6.增强输入优先级
order : 6
category:
  - u++
---


<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
今天遇到一个神奇的BUG，编辑器中我的鼠标左键有效，但独立线程运行左键无效了
</chatmessage>

### 解决思路
<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
先来了解一个Debug指令！后面要考！
</chatmessage>

![](..%2Fassets%2Fenhancedpb001.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
一开始我以为是不能同个按键绑定到同个动作上。
</chatmessage>

![](..%2Fassets%2Fenhancedpb002.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
后面我发现编辑器中debug的按键和独立线程运行的不一样
</chatmessage>

>编辑器中

![](..%2Fassets%2Fenhancedpb003.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
原因是我在资产中额外注册了一些按键，按键中开火按键也是左键，又因为没设置优先级，所以都被加载了
</chatmessage>

>独立运行

![](..%2Fassets%2Fenhancedpb004.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
设置一下优先级就解决了！数字越高表示优先级越高，并且要养成析构就置空的习惯。
</chatmessage>


![](..%2Fassets%2Fenhancedpb005.png)