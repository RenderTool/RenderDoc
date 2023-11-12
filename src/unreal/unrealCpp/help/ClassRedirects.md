---
title: UECPP-蓝图类重定向-ClassRedirects
order : 4
---

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40">
项目迁移后发现有一些原本C++派生蓝图找不到父类。
</ChatMessage>

## 实践

打开UE4编辑器。

在主工具栏中，点击"Edit"（编辑）菜单。

选择"Project Settings"（项目设置）。

在项目设置窗口中，选择"Engine"（引擎）-> "Redirects"（重定向）。

在"Class Redirects"部分，添加任何新的类重定向。

在左侧的"Old Class"（旧类）列中，输入你想要重定向的旧类名。

在右侧的"New Class"（新类）列中，输入你想要替代的新类名。

确保保存你的项目设置。

## 参考链接

https://blog.csdn.net/tianxiaojie_blog/article/details/129405380