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

![](assets%2FGit-logo.svg =200x)

[Git]("https://git-scm.com/")是世界上先进的开源「分布式的版本控制系统」，而SVN是「集中式的版本控制系统」，SVN对于版本的管理集中于中央服务器中，而Git对于版本的管理可以在本地。

## 安装
工欲善其事必先利其器。[下载地址](https://git-scm.com/downloads)

![](assets%2Fgitdownload.jpg)

>windows中安装好以后，空白处右键会多Git GUI Here以及Git Bash Here。

![](assets%2Fgit%20gui.jpg =300x)

## 基本概念

### 1. GIT
> 一个开源的分布式版本控制系统
### 2.[Github](../github/README.md)
> 一个托管和协作管理 Git 仓库的"同性交友"平台

### 3. GIT基本概念
<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
在Git中几个基本概念
</ChatMessage>

1. **工作区（Workspace）：** 你在本地计算机上用来编辑、修改和保存文件的目录，包含了项目的实际文件。

2. **暂存区（Staging Area）：** 一个中间区域，可以暂时存放你要提交的修改，允许你一次性提交多个修改。使用 `git add` 命令将工作区中的修改添加到暂存区。
> 在早期的Git文档和一些教程中，"暂存区" 有时会被称为 "索引"，而 "索引" 也经常被用来指代暂存区。这两者的含义完全相同，只是术语不同而已。
3. **本地仓库（Local Repository）：** 包含了完整的版本历史、分支信息等的目录，通常是指项目根目录下的 `.git` 目录。它是Git用来记录和管理项目变更历史的核心。

4. **远程仓库（Remote Repository）：** 存储在服务器上的代码仓库，可以供团队成员共享和协作。可以通过 `git push` 和 `git pull` 与远程仓库进行交互。

5. **提交（Commit）：** 将工作区或者暂存区的修改记录到本地仓库中，形成一个版本快照，可以随时回溯到这个版本。

## 实践

### 1. 配置
<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
 对所有本地仓库的用户信息进行配置
</ChatMessage>

``` sh
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```
### 2.初始化

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
配置完信息后，就可以「创建目录并初始化自己的本地仓库」
</ChatMessage>

``` sh
$ mkdir testfolder             # 创建一个名为 testfolder 的文件夹
$ cd testfolder                # 进入到 testfolder 文件夹
$ pwd                          # 输出当前工作目录的路径，此时应该是 /e/testfolder

$ git init                     # 初始化本地仓库，创建了一个新的 Git 仓库
#$ git clean                   # 是一个用于清理工作区的命令，谨慎使用以避免意外删除重要文件。
```
输出：
`Initialized empty Git repository in /e/testfolder/.git/`

### 3.创建仓库

* 添加 - **`git add`**
<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
在接下来的操作中，你可以做一些修改，并通过以下命令将它们提交到版本库中
</ChatMessage>

``` sh
$ git add <文件名>              # 将文件添加到暂存区
$ git commit -m "提交信息"      # 提交暂存区中的修改，并附上提交信息
```

>操作结束后可以用git status查看文件

![](assets%2Fgitstatus.jpg)  

<hr>

* 远程 - 连接 -  **`git remote`**
<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
  如果有远程仓库，可以使用这个命令和远程仓库连接起来。
</ChatMessage>

``` sh
$ git remote add origin [远程仓库的URL]
```

<hr>

* 远程- 克隆 - **`git clone`** 
<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
不需要 git init(初始化) 和 mkdir（创建文件夹）操作，最多就是cd（切换）到想放的目录。
</ChatMessage>

``` sh
$ git clone <远程仓库的URL>
```
![](assets%2Fgitclone.jpg)

<hr>

* 远程推送 -**`git push`**
<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
将本地仓库的内容推送到远程仓库中
</ChatMessage>

``` sh
$ git push origin main

#如果是第一次
$ git push -u origin <本地分支名>
```
<hr>

### 4.同步操作


| 命令               | 作用                                       | 示例                                |
|------------------|------------------------------------------|---------------------------------|
| git merge        | 将一个分支的代码合并到当前分支中           | `git merge <分支名>`                |
| git fetch        | 从远程仓库获取最新的代码和分支信息，但不合并 | `git fetch <远程仓库>`              |
| git pull         | 获取远程仓库的最新代码并将其合并到当前分支  | `git pull <远程仓库> <分支名>`       |

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
<span style="color: #c0392b">git pul</span>相当于先执行<span style="color: #c0392b">git fetch</span>，再紧接着执行 <span style="color: #c0392b">git merge</span>将远程仓库的代码合并到本地分支中。
</ChatMessage>

<hr>

>可以保持本地仓库与远程仓库的同步，同时确保清理掉已经不存在的远程分支。

```sh
git fetch --prune
```

>还可利用 [xargs](/os/linux/xargs) 配合 `grep` 清理指定条件分支：

```sh
git branch | grep 'fix/*' | xargs git branch -D
```
<hr>

### 5.分支操作

| 命令                           | 功能                                               |
|-------------------------------|--------------------------------------------------|
| `git branch [branch-name]`     | 创建一个新分支                                      |
| `git switch -c [branch-name]`  | 切换到指定分支并更新工作目录(working directory)   |
| `git merge [branch]`          | 将指定分支的历史合并到当前分支                     |
| `git branch -d [branch-name]`  | 删除指定的分支                                     |

<ChatMessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
记不住根本记不住。
</ChatMessage>

### 6.其他
* 日志 - **`git log`**
```bash
# 所有分支指定用户指定时间范围提交信息

git log --all --author="你的名称" --after="2022-07-16" --before="2022-07-23" --no-merges --pretty=format:"%an(%ae) %as: %s"
```

## 查看帮助

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
## IDE

人生苦短我选IDE,可视化一切，包括Commit模板、分支合并、同步。

![idelog.jpg](assets%2Fidelog.jpg)

## 参考资料

>更多细节操作可以参考我的其他记录。

+ [Github](https://help.github.com/en)
+ [Git-scm](https://git-scm.com/book/zh/v2)
+ [命令备忘单](https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/)
+ [ Git 快速入门版本](https://www.runoob.com/manual/git-guide/)
