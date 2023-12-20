---
title: Github-4.ssh key引发的push failed
order : 4
category:
  - Github
tag:
  - 踩坑记录
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

## 问题复现

1. cmd输入    

```cmd
   ssh-keygen -t rsa -C "xxxxxxxx@qq.com"
```
![](assets%2Fsshfail.png)

2. 显示的目录会对应生成一个文件

![](assets%2Fgenreatessh.png)

3.然后将 `id_rsa.pub` 文件内容复制到github上。

![sshkeyupdata.png](assets%2Fsshkeyupdata.png)