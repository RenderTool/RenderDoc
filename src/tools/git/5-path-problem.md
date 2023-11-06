---
title: Git- 路径引发的思考
order : 6
tag:
  - 踩坑记录
---

## 问题详情

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
本地配置图片可以显示，实际部署显示图片404
</ChatMessage>

![](assets%2F404.png)

![](assets%2Fpathproblem.png)

## 解决思路

>1. 本地开发环境和部署服务器环境之间的路径解析方式不同所致。

``` html {1,1}
<ChatMessage avatar="/assets/emoji/blzt.png" :avatarWidth="40">
处于项目的根目录，所以相对路径 blzt.png 可以直接找到图片。
</ChatMessage>
```

![](assets%2Frooturl.png)

``` html {1,1}
<ChatMessage avatar="./assets/emoji/blzt.png" :avatarWidth="40">
实际部署路径在
</ChatMessage>
```
>2. 而在部署到服务器时，路径解析可能会以服务器的根目录为基准。

![zshj.png](assets%2Fzshj.png)

>3. 修改后依然404？

![](assets%2Fstel-404.png)

要注意引用图片的资源路径位置变化，原本在同级路径引用，现在上一级路径引用。

``` html {1,1}
<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
实际部署路径在
</ChatMessage>
```

``` text 
./assets/emoji/blzt.png

../../assets/emoji/blzt.png
```

## 扩展阅读

| 类型        | 示例（Unix/Linux）                | 示例（Windows）                      | 解释                                                                 |
|------------|---------------------------------|--------------------------------------|----------------------------------------------------------------------|
| 绝对路径    | /home/user/documents/file.txt    | C:\Users\User\Documents\File.txt    | 从根目录开始指定文件或目录的完整路径。                                     |
| 相对路径    | ../documents/file.txt            | ./images/picture.jpg                 | 相对于当前工作目录，提供了从当前位置到目标文件或目录的路径。           |
