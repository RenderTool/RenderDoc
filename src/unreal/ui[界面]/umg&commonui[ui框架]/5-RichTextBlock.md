---
title: Umg5.RichTextBlock
order: 5
ategory:
  - unreal
---
## 导读
<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
多格式文本块|RichTextBlock
</chatmessage>

## 问题

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
我在做游戏聊天系统时发现了一个问题！
</chatmessage>

![](..%2F..%2Fassets%2Ffug.png)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
聊天内容换行没有顶到前面是吧，给我康康你的实现组件。
</chatmessage>

![](..%2F..%2Fassets%2Ffug2.png)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
你都用了多格式文本块为什么还要多此一举用图片组件和单独的文本块？
</chatmessage>

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
额，文本中添加不了图片吧,而且我希望用户名可以点击后弹出窗口,选择私聊、屏蔽之类的操作。
</chatmessage>

## 多格式文本块|RichTextBlock

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

看来是时候学习一下新的科学知识了！老规矩先上[官网](https://dev.epicgames.com/documentation/zh-cn/unreal-engine/umg-rich-text-blocks-in-unreal-engine?application_version=5.4)

</chatmessage>

> UMG RichTextBlock 提供了一种更为灵活的文本块。它支持标记样式更改、内联图像、超链接等功能。

1. **创建富文本样式表**：

![](..%2F..%2Fassets%2FUSJ.png)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
新建对应的DataTable,并写入规则。
</chatmessage>

![](..%2F..%2Fassets%2FUSJ2.png)


2. **定义文本样式**：

![USJ3.png](..%2F..%2Fassets%2FUSJ3.png)

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
然后我们怎么使用他呢？
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
HTML了解过吧！其实就是类似HTML标记语言
</chatmessage>

```plaintext
<TextStyleRowName>text</>
```

![](..%2F..%2Fassets%2FUSJ4.png)

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
666! 那么图片呢？图片怎么加？
</chatmessage>

3. **新建一个装饰器**：

![](..%2F..%2Fassets%2FUSJ5.png)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
父类改成图片格式
</chatmessage>

![](..%2F..%2Fassets%2FUSJ6.png)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
添加对应的DataTable数据
</chatmessage>

![](..%2F..%2Fassets%2FUSJ7.png)

![](..%2F..%2Fassets%2FUSJ8.png)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
对应的格式
</chatmessage>

```plaintext
<img id="ImageRowName"/>
```

![](..%2F..%2Fassets%2FUSJ9.png)