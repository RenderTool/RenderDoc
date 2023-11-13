---
title: Github--切换多个账号
order : 2
category:
  - Github
tag:
  - 踩坑记录
---

## 问题详情

有时候要对多个 github 账号进行切换。

## 解决思路
### 前置准备

| 账户名        | 邮箱                       |
|------------|--------------------------|
| username-1 | your_email_a@example.com |
| username-n | your_email_n@example.com |


<div id="section1">
</div>

### 1. 生成其中一个账户密钥
>* GitBash或者IDE中输入
 ```bash 
   git config --global user.name 账户名
 ```
>* 无错误后继续输入
 ```bash 
  git config --global user.name 你的邮箱
 ```
>别傻到直接拷贝，替换中文内容成你对应的账户名、邮箱

### 2. 创建 ssh key

>* 打开CMD输入以下内容
 ```bash 
   "ssh-keygen -t rsa -C "你的邮箱"
   ```
>默认在你的`C：\Users\root/.ssh/`生成id_rsa和id_rsa.pub两个文件，用记事本打开id_rsa.pub

![SSH-KEY.png](assets%2FSSHKEY.png)

### 3. 拷贝上传至服务器(名字随意即可)

![uploadSSH-KEY2Github.png](assets%2Fsshkeynew.png)

### 4. 其他账号重复[1-3](#section1)在 `~/.ssh/` 目录下创建 config 文件

   ```bash
   vim ～/.ssh/config
   ```

### 5. 修改config 内容(config文件的规则很简单——在每个Host寻找对应的秘钥。)

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

### 6. 测试

   ``` bash
   ssh -T aa.github.com
   ```
>   如果出现

`Permission denied (publickey).`

>   说明没有对应的秘钥

>  如果出现

`Hi git_xxx! You've successfully authenticated, but GitHub does not provide shell access.`

> 表示配置成功

### 7. 切换账户
>   假定我们A账户切换到N账号

```bash
 git config --global user.name n账户名
git config --global user.email n账户的邮箱
```

### 8. clone or add
>   clone

   ```bash
   # 原项目地址为
   git clone 你的远程仓库的ssh地址
   # 修改为 
   git clone 你的新远程仓库的ssh地址
   ```
>   add

   ```bash
  git remote add origin 你的远程仓库的ssh地址
   ```
>如果出现错误

 ` fatal: remote origin already exists`

>则按以下顺序输入
  ```bash
  git remote rm origin
  ```
  ```bash
 git remote add origin  你的远程仓库的ssh地址
  ```
> <span style="color:red">什么？你不知道ssh地址怎么来？</span>

![sshurl.png](assets%2Fsshurl.png)

> <span style="color:red">什么？你不知道add和clone是啥？</span>
>我真的快疯掉了.....
 * git remote add 用于在已有的本地仓库中添加一个远程仓库的引用。
 * git clone 用于将远程仓库的内容完整地复制到本地，同时会自动创建一个默认的远程引用。
### 9. push 项目
>设置好远端后，直接push即可

```bash
 git push -u origin master
```

## 参考资料
如果你阅读本文有点吃力，或者对其中的git操作不太清楚，我强烈建议你看看我写的git基本操作篇。🤦‍♂️
[git基本操作](../git/README.md)