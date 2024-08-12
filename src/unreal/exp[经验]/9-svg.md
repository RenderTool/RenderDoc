---
title: EXP9.svg图片缩放
order : 09
category:
  - u++
---


<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
Baba!为什么我在网站上已经选定了尺寸下载的SVG尺寸有时候是对的，有时候确实错的！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
SVG是矢量图，但设计绘制的时候也有一个尺寸
</chatmessage>

>SVG（Scalable Vector Graphics）是一种基于XML的矢量图形格式，用于在网页和应用程序中显示二维图形。由于SVG是矢量图形，它们可以在任何分辨率下无损放大或缩小，非常适合需要清晰图形展示的场景，如图标、插图、图表等。

![](..%2Fassets%2Fsvgsize001.png)


### 1.下载任意一个svg

![](..%2Fassets%2Fsvgsize003.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

可以将里面的用这个网站进行缩放[直通车](https://nixaix.com/static/svg-path-editor/index.html)

</chatmessage>

### 2.调整尺寸

![](..%2Fassets%2Fsvgsize002.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
在WPF开发中特别明显
</chatmessage>

![](..%2Fassets%2Fsvgsize005.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
所以需要手动调整一下尺寸
</chatmessage>

![](..%2Fassets%2Fsvgsize004.png)

### 3.WPF 中

```cpp
<Canvas Width="24" Height="24" x:Name="Canvas">
<Path Fill="{TemplateBinding Foreground}" Data="m 14.88 19.9 h -5.76 c -1 0 -1.92 -0.52 -2.44 -1.4 l -2.88 -4.96 c -0.48 -0.88 -0.48 -1.92 0 -2.8 l 2.88 -4.96 c 0.52 -0.88 1.44 -1.4 2.44 -1.4 h 5.76 c 0.44 0 0.8 0.36 0.8 0.8 s -0.36 0.8 -0.8 0.8 h -5.76 c -0.44 0 -0.84 0.24 -1.04 0.6 l -2.88 4.96 c -0.2 0.36 -0.2 0.84 0 1.2 l 2.88 5 c 0.2 0.36 0.6 0.6 1.04 0.6 h 5.76 c 0.44 0 0.84 -0.24 1.04 -0.6 l 2.88 -5 c 0.2 -0.36 0.2 -0.84 0 -1.2 l -2.2 -3.8 c -0.24 -0.36 -0.12 -0.88 0.24 -1.12 c 0.36 -0.24 0.88 -0.12 1.12 0.24 l 0.04 0.04 l 2.2 3.8 c 0.52 0.88 0.52 1.92 0 2.8 l -2.88 4.96 c -0.52 0.92 -1.44 1.44 -2.44 1.44 z m -2.88 -4.96 c -1.56 0 -2.8 -1.24 -2.8 -2.8 s 1.24 -2.8 2.8 -2.8 s 2.8 1.24 2.8 2.8 s -1.24 2.8 -2.8 2.8 z m 0 -4.84 c -1.12 0 -2 0.88 -2 2 s 0.88 2 2 2 s 2 -0.88 2 -2 s -0.88 -2 -2 -2"></Path>
</Canvas>
```