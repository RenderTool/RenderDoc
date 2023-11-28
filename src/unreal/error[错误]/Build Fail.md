---
shortTitle: Error1.无法解析外部符号...
title: 无法解析外部符号，无法解析外部命令 和命令“xxx”已退出。
order: 1
category:
   - u++
---

<ChatMessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
写完代码，感觉自我良好，IDE也没报错，编译！——>报错！
</ChatMessage>

![](..%2Fassets%2Fbuilderror.jpg)

## 解决思路

1. **检查代码中的拼写和语法错误**：
    - 确保代码中没有拼写错误或语法错误，可能导致编译器无法识别符号。

2. **检查头文件和库的包含路径**：
    - 确保你在项目中正确包含了所需的头文件和库文件。

3. **确保依赖项正确链接**：
    - 确保项目正确链接了所需的库文件，一般情况下都是对应的`xxx.build.cs`没有引入模块依赖。

 ![](..%2Fassets%2Fbuild.jpg)

4. **重新生成项目文件**：
    - 在 UE 中，尝试删除 `Intermediate` 和 `Saved` 文件夹，然后重新生成项目文件。这将清除中间文件并尝试重新构建项目。

