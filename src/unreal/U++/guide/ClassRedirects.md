---
title: U++项目迁移蓝图父类重定向
order : 1
---

![](assets%2Ferrortip.png)

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40">
项目迁移后发现有一些原本C++派生蓝图找不到父类。
</ChatMessage>

## 问题复现


<ChatMessage avatar="../../../assets/emoji/kclr.png" :avatarWidth="40">
迁移过来的项目C++派生的蓝图依然是之前项目的。
</ChatMessage>

![](assets%2Fretarget.jpg)

## 解决思路

### 1. DefaultEngine/Game.ini添加对应类的重定向

``` ini
[CoreRedirects]
+ClassRedirects=(OldName="/Script/Lyra.GameUIPolicy(旧项目名.类)",NewName="/Script/NEW.GameUIPolicy(新项目名.类)")
```

### 2. ~~直接打开资源文件手动修改~~ [不推荐]

![](assets%2FnativeParent.jpg)

<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
确认会出问题
</ChatMessage>

![](assets%2Ftargeterror.jpg)

## 参考链接

https://blog.csdn.net/tianxiaojie_blog/article/details/129405380