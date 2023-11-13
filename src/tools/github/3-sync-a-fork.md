---
title: Github- 同步一个 fork
order : 3
category:
  - Github
tag:
  - 踩坑记录
---
## 问题详情
如何同步一个fork?

## 解决思路

### 1. 配置 upstream

```bash
# 查看远程仓库
git remote -v
# 以 `ant-design-vue` 示例
git remote add upstream https://github.com/vueComponent/ant-design-vue.git
git remote -v # 验证
```

### 2. 同步 upstream

```bash
git fetch upstream # fetch
git merge upstream/master # merge
```

### 3.  推送

```bash
git push
```

