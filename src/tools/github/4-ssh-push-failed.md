---
title: Github- ssh key引发的push failed
order : 4
tag:
  - 踩坑记录
  - Rider
---

## 问题详情
本着能用一个IDE来完成各自的想法，尝试用*Rider*开发前端，结果一开始Push就出问题了。
>1. 远程空仓库已经建立

![无法推送](assets%2Fpushtest.png)
>2. 无法推送项目

git@github.com: Permission denied (publickey). fatal: Could not read from remote...

![错误提示](./assets/ssh.png)

## 参考资料

1. [CSDN](https://blog.csdn.net/W_317/article/details/106518894)
