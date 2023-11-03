---
title: Git
icon: code-compare
category:
  - 开发工具
  - Git
tag:
  - 介绍
  - Git
---

## 版本控制工具 Git

![git-logo](assets%2Flogo%402x.png =200x)

>Git是一个开源的分布式版本控制系统。它被设计用来以高速和高效的方式处理从小型到大型项目。它的开发是为了协调开发人员之间的工作。版本控制使我们能够在同一工作区跟踪并与我们的团队成员一起工作。

## 基础概念

### 1. 工作区（workspace）

>当前文件夹中可见的文件结构。在初始化或执行 `git clean` 命令后，工作区和暂存区相同。随着修改，未经过 `git add` 的文件会使工作区与暂存区不一致。

```bash
$ git status
# 当前分支为 master
# 没有需要提交的更改，工作目录干净
```

### 2. 暂存区（index）

>临时存放文件的区域，会随着 `git commit` 一起提交到本地仓库。

### 3. 本地仓库（local repository）

>本地存储库，可以完全离线操作，包括 log、history、commit、diff 等。

### 4. 远程仓库（remote repository）

>中心仓库，可以分享给其他人。


### 查看帮助

>所有命令行最重要的当然是查看帮助文档：

```bash
git help
```

结果：

```vim
用法：git [--version] [--help] [-C <路径>] [-c <名称>=<取值>]
           [--exec-path[=<路径>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<路径>] [--work-tree=<路径>] [--namespace=<名称>]
           <命令> [<参数>]

这些是各种场合常见的 Git 命令：

开始一个工作区（参见：git help tutorial）
   clone      克隆仓库到一个新目录
   init       创建一个空的 Git 仓库或重新初始化一个已存在的仓库

在当前变更上工作（参见：git help everyday）
   add        添加文件内容至索引
   mv         移动或重命名一个文件、目录或符号链接
   reset      重置当前 HEAD 到指定状态
   rm         从工作区和索引中删除文件

检查历史和状态（参见：git help revisions）
   bisect     通过二分查找定位引入 bug 的提交
   grep       输出和模式匹配的行
   log        显示提交日志
   show       显示各种类型的对象
   status     显示工作区状态

扩展、标记和调校您的历史记录
   branch     列出、创建或删除分支
   checkout   切换分支或恢复工作区文件
   commit     记录变更到仓库
   diff       显示提交之间、提交和工作区之间等的差异
   merge      合并两个或更多开发历史
   rebase     在另一个分支上重新应用提交
   tag        创建、列出、删除或校验一个 GPG 签名的标签对象

协同（参见：git help workflows）
   fetch      从另外一个仓库下载对象和引用
   pull       获取并整合另外的仓库或一个本地分支
   push       更新远程引用和相关的对象

命令 'git help -a' 和 'git help -g' 显示可用的子命令和一些概念帮助。
查看 'git help <命令>' 或 'git help <概念>' 以获取给定子命令或概念的
帮助。
```

## 简单使用

```bash
# 检查文件是否有更新
git status

# 将新增的文件进行跟踪
git add .

# 提交本次修改内容（请尽量详细），方便日后修改 bug 时快速定位
# 此处 commit 仅为示例，请修改为你项目的提交信息
git commit  -m"docs(git): 新增 git 简单使用"

# 提交到仓库
git push
```

### 统计信息

```bash
# 所有分支指定用户指定时间范围提交信息
# 更多的 formats 可见 https://git-scm.com/docs/pretty-formats
git log --all --author="你的名称" --after="2022-07-16" --before="2022-07-23" --no-merges --pretty=format:"%an(%ae) %as: %s"
```

### 清理分支

>一个多人长期合作的项目会有很多的远程分支,想要有个功能去清理他们

```sh
git fetch --prune
```

>还可利用 [xargs](/os/linux/xargs) 配合 `grep` 清理指定条件分支：

```sh
git branch | grep 'fix/*' | xargs git branch -D
```

## 参考资料

+ [Github](https://help.github.com/en)
+ [Git-scm](https://git-scm.com/book/zh/v2)
+ [命令备忘单](https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/)
