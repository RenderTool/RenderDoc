---
title: U++编码格式导致的中文乱码
order : 1
category:
  - u++
---


<ChatMessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
Baba!AddOnScreenDebugMessage突然打印不了中文了
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
修改源文件对应的编码
</ChatMessage>

### 解决思路

![](..%2Fassets%2FUTF-8.jpg)

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
你以为这样就结束了吗！
</ChatMessage>

### 扩展阅读

<ChatMessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
BABA带你重新回顾一下字符编码的知识
</ChatMessage>

| 术语      | 描述                                                                       |
|---------|--------------------------------------------------------------------------|
| 字符集     | 一组字符的集合，每个字符有唯一的数值（码点）和表示方式。常见有ASCII、ISO-8859、UTF-8等。                    |
| Unicode | 全球字符编码标准，为世界上各种语言和符号提供唯一的数字代码，每个字符有唯一的码点。                                |
| UTF-8   | 一种变长的字符编码方式，用于存储Unicode字符，兼容ASCII，使用1到4个字节表示不同范围的字符。                     |
| UTF-16  | Unicode字符编码的变体，使用16位编码单元表示字符，使用1或2个16位编码单元表示不同范围的字符。                     |
| 字符编码    | 规定字符如何映射到数字编码的规则，决定了字符在计算机内存和文本文件中的表示方式。常见有ASCII、ISO-8859、UTF-8、UTF-16等。 |
| 乱码      | 使用不同字符编码读取或显示文本时导致的问题，表现为预期的字符无法正确显示或被错误解释。                              |


<hr>

<ChatMessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
Ascll中为什么A是65？
</ChatMessage>


<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
因为在ASCLL码表中被排到了65
</ChatMessage>

![Ascll128](..%2Fassets%2FASCLL.png)

### 参考链接
[UE官方推荐文档](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)