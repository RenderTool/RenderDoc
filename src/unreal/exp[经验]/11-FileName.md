---
title: EXP11.Path|该死的文件名！
order : 11
category:
  - u++
---

### 导言

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
文件名非法！文件名非法我要疯了！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
莫慌！在这之前咱先回顾一下两种路径的写法
</chatmessage>

### 路径写法

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
一个是相对路径，一个是绝对路径。
</chatmessage>

![](..%2Fassets%2Fhotfix025.png)

## 文件和路径

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
官方封装了一些非常方便的静态函数,咱们挑几个常用的记录一下：
</chatmessage>

```text
Engine\Source\Runtime\Core\Public\Misc\Paths.h
```

### `FPaths::ValidatePath()`

> 检查路径有效性

### `FPaths::MakeValidFileName()`

> 自动转换成合法的文件名。
