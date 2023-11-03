---
title: Github--切换多个账号
order : 2
tag:
  - 踩坑记录
---

## 使用场景

在很多情况下，常常要对多个 github 账号进行切换。比如，自己的、公司的、小号。

## 切换步骤

1. 创建 ssh key

2. 将 public key 上传至服务器(名字随意即可)

   ![github add ssh key](./assets/github-add-ssh-key.png)

3. 在 `~/.ssh/` 目录下创建 config 文件

   ```bash
   vim ～/.ssh/config
   ```

4. config 内容

   ``` bash
   # 正常使用的 rsa
   Host github.com
   HostName github.com
   IdentityFile ~/.ssh/id_rsa
    
   # new 新账号
   Host new
   HostName github.com
   IdentityFile ~/.ssh/id_rsa_new
   ```

5. clone 项目

   ```bash
   # 原项目地址为
   git clone git@github.com:xxxxxx/xxx.git
   # 修改为 
   git clone git@new:xxxxxx/xxx.git
   ```

6. push 项目

   因为在一开始 clone 的时候已经配置好了，所以 push 时就无需配置了。不过我们还需要 `git config` 修改一下本地的 `user.name` 和 `user.email` 来保证是同一个人修改了, 否则会应用全局的 `config` 设置
