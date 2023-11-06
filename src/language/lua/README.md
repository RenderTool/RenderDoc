---
title: lua
icon: l
dir:
  order: 1
category:
  - 教程知识
  - lua
tag:
  - 介绍
  - lua
---

![](assets%2FLua-Logo.svg.png =200x200)

## lua

Lua 是一种轻量小巧的脚本语言，用标准C语言编写并以源代码形式开放，其设计目的是为了嵌入应用程序中，从而为应用程序提供灵活的扩展和定制功能。

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
跟BABA一起念 Lua/'lua/（噜啊）
</ChatMessage>

<!-- more -->

## 脚本式编程

我们可以将 Lua 程序代码保存到一个以 lua 结尾的文件，并执行如：`test.lua`，该模式称为脚本式编程。

```lua
print("Hello World！")
```

## lua注释

单行注释用：
`--`
多行注释：
`--[[
多行注释
多行注释
--]]`

## lua保留关键字
| 关键词   | 描述               |     | 关键词   | 描述               |
|----------|---------------------|-----|----------|---------------------|
| and      | 逻辑与             |     | break    | 退出循环           |
| do       | 开始一个块         |     | else     | 备用条件           |
| elseif   | 备用条件           |     | end      | 结束块             |
| false    | 布尔假值           |     | for      | 循环遍历范围       |
| function | 定义函数           |     | if       | 条件语句           |
| in       | 在范围内           |     | local    | 定义本地变量       |
| nil      | 表示不存在         |     | not      | 逻辑非             |
| or       | 逻辑或             |     | repeat   | 循环直到           |
| return   | 从函数返回         |     | then     | 条件为真时的块     |
| true     | 布尔真值           |     | until    | 循环结束条件       |
| while    | While 循环         |     | goto     | 跳转到标签         |

## lua变量

| 类型         | 示例          | 描述                                      |
|------------|--------------|------------------------------------------|
| 全局变量   | 默认情况下总是全局变量 | 可以在任何地方被访问和修改。想删除一个全局变量，只需要将变量赋值为nil。 |
| 局部变量   | local b = 5  | 仅在声明它的作用域内可见和访问。           |


## 参考链接
- [wiki](https://zh.wikipedia.org/wiki/Lua)

