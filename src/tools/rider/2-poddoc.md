---
title: Rider-2.Word转MD
order : 2
category:
  - rider
---

## word转md

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
Word怎么转成MD?
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
安排
</chatmessage>

## 1.下载pandoc.exe

[https://github.com/jgm/pandoc/tree/3.1.9](https://github.com/jgm/pandoc/tree/3.1.9)

## 2.安装

![](assets/image2.png)

## 3. Powershell或者CMD

<chatmessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
使用时，在要转的文档目录空白处shift+右键打开Powershell
</chatmessage>

![](assets%2Fimage1.png)
 
<chatmessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
输入命令后回车
</chatmessage>

```
pandoc input.docx -o output.md
```


>请替换`input.docx`为你的Word文档文件名，`output.md`为你想要生成的Markdown文件名。

![](assets/image10.png)

<gifwithbutton src="../../assets/unrealgif/hpimpove6.gif"/>

## 4.批量导出图片

![](assets/image7.png)

## 5.命名修改

<chatmessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
WPS或者其他工具批量重命名
</chatmessage>

![](assets/image6.png)


![](assets/image8.png)

<chatmessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
最后打开MD替换名称前缀就OK了
</chatmessage>

![](assets/image9.png)
