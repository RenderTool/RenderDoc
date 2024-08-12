---
title: Error12. C盘膨胀
order : 12
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
我用Rider开了几个UE项目后C盘直接炸了！！！
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
官方缓存在C盘，而且还不支持设置路径。咱可以用mklink命令来解决。
</chatmessage>

### 1.移动文件

> 把C盘中C:\Users\admin\AppData\Local\JetBrains文件移动到你想要的地方


<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
一定要先拷贝过去，再删除，不要剪切不要剪切！
</chatmessage>

![](..%2Fassets%2Fmovefile.png)

### 2. 用管理员模式打开CMD,输入MKLINK命令

```bash
mklink /j C:\Users\admin\AppData\Local\JetBrains E:\softCache\JetBrains
```

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
现在你能在C盘的位置看到一个类似快捷方式的文件夹，实际空间占用在E盘。
</chatmessage>

![](..%2Fassets%2Fmovefile2.png)

### 3. 注意事项

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
如果安装了新的JetBrains,IDE可能会自己删掉这个链接修复回C盘，这时候需要重新操作一下。
</chatmessage>