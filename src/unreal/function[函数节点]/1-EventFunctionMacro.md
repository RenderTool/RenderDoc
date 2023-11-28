---
title: FUN1.函数|事件|宏函数
order : 1
category:
  - u++
---

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
蓝图脚本中，函数，事件，宏的区别
</ChatMessage>

## 执行引脚

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
事件只有一个输入引脚，函数有两个引脚|纯函数没有引脚，宏可以有多个
</ChatMessage>

![](..%2Fassets%2Ffunction1.png)

![](..%2Fassets%2Ffem.png)

## delay节点

![[图片作者](https://space.bilibili.com/304436074)](..%2Fassets%2Ffunctionmarcoeventmap.jpg)

## 总结

| 特性   | 事件   | 宏      | 函数   |
|------|------|--------|------|
| 执行时机 | 立即执行 | 等待执行结束 | 手动调用 |
| 输入引脚 | 一个   | 可以有多个  | 两个   |
| 输出引脚 | 一个   | 一个     | 一个   |
| 延迟执行 | 否    | 是      | 否    |
| 调用方式 | 事件触发 | 明确调用   | 手动调用 |

## 参考视频

<iframe src="//player.bilibili.com/player.html?aid=641399138&bvid=BV1iY4y1b7ia&cid=717977549&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width
="100%" height=500px> </iframe>