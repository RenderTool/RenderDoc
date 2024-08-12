---
title: HF|热更新01
order: 1
category:
  - unreal
---

## 问题描述

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
爹地！我想实现UE5的热更新！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
别急！先扫盲！
</chatmessage>

## 知识拓展

### 什么是热更新？

>热更新（Hotfix or Hot Update）是一种在软件运行过程中无需停止或重启应用程序的情况下，直接对程序进行更新的方法。

### UEPC端打包目录结构？

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
在CMD中查看一个普通的UE工程打包出来的目录结构。
</chatmessage>

![](..%2Fassets%2Fhotfix009.png)

以下是添加了目录注释的版本，解释每个文件夹的用途和内容：

```
D:.
|   HOTFIX.exe                                 // 应用名
|   Manifest_NonUFSFiles_Win64.txt             // 非UFS文件（Unreal File System）的清单，用于描述哪些文件不打包在UFS中
|   Manifest_UFSFiles_Win64.txt                // UFS文件清单，列出游戏打包时包含的所有UFS文件
|
+---Engine                                      // 引擎文件夹，包含与引擎相关的文件和库
|   +---Binaries                                // 可执行文件和二进制文件的存储目录
|       \---ThirdParty                          // 第三方库目录，包含引擎使用的外部依赖项（如DLL文件）
|
\---HOTFIX                                      // 热更新目录，用于存放热更新相关的文件
    +---Binaries                                // 热更新程序的二进制文件目录
    |   \---Win64                               // 针对64位Windows平台的可执行文件和依赖文件
    |
    \---Content                                 // 热更新内容目录，存放与热更新相关的游戏内容
        \---Paks                                // 打包文件目录，包含已打包的游戏内容（如贴图、模型等）
```

<hr>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
也就是说所有资源会被打到PAK中对吗？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
是的，现在我们简单了解一下可以被热加载的内容：
</chatmessage>

### 热加载支持情况

| 类型               | 具体内容                                                    | 是否能热加载 |
|------------------|---------------------------------------------------------|--------|
| **资源文件（Assets）** | **Textures（纹理）**: 可以通过热更新替换纹理，更新后的材质可以立即应用到游戏中。         | 是      |
|                  | **Models（模型）**: 更新模型文件，如静态网格和骨骼网格，通常也支持热加载。             | 是      |
|                  | **Sounds（声音）**: 音效文件可以通过热加载进行更新，比如背景音乐或音效文件。            | 是      |
|                  | **Animations（动画）**: 动画资源可以通过热更新来修复或更改动画效果。              | 是      |
|                  | **UMG Widgets（UI 元件）**: 通过 Unreal 的 UMG UI 系统创建的 UI 组件。 | 是      |
|                  | **Localization（本地化资源）**: 包括文本、对话、界面等本地化资源。              | 是      |
|                  | **Shaders（着色器）**: 自定义的 HLSL 着色器等。                       | 是      |
| **脚本文件**         | **Blueprints（蓝图）**: 蓝图脚本。                               | 是      |
|                  | **插件脚本**: 如果你使用的是像 Lua、Python 等脚本语言插件编写的逻辑代码。           | 是      |
| **C++ 代码**       | 原生的 C++ 代码在打包后是编译成二进制的，无法通过热加载进行更新。                     | 否      |

<hr>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
也就是说涉及源码层面修改的内容只能重新打包？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
目前来看是这样的。
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
如果我们没有涉及源码更新，是不是只需要替换PAK就行了！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
是的，咱们可以简单实现一下这个功能
</chatmessage>

## 方案1

![](..%2Fassets%2Fhotfix002.jpg)

### 1. **用小皮启动 Apache 服务器**: [https://old.xp.cn/](https://old.xp.cn/)

>Apache（Apache HTTP Server）是一款开源的、功能强大的 web 服务器软件。

![](..%2Fassets%2Fhotfix001.png)

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
我大概明白了！相当于某个网站的一个资源文件,然后通过HTTP下载是吧！
</chatmessage>

### 2. **UE中安装下载插件[插件地址](https://github.com/gtreshchev/RuntimeFilesDownloader/wiki)**:


![](..%2Fassets%2Fhotfix003.jpg)

### 3. **部署到阿里或者腾讯云**


![](..%2Fassets%2Fhotfix004.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
云服务器可以理解成一台远程的电脑,只不过他的IP被暴露到公网中，可以通过端口映射变成HTTP链接
</chatmessage>

![](..%2Fassets%2Fhotfix005.png)

### 4. **UE中下载测试**

![](..%2Fassets%2Fhotfix010.png)

![](..%2Fassets%2Fhotfix006.png)

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
弱弱的问一句！IP地址怎么查看！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
我靠！IP都不知道？直接CMD 输入ipconfig
</chatmessage>

![](..%2Fassets%2Fhotfix007.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
现在烘培后打包运行测试
</chatmessage>

![](..%2Fassets%2Fhotfix008.png)

<gifwithbutton src="../../assets/unrealgif/hpup40.gif"/>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
nice！不过,我发现一个问题！你运行时覆盖同文件引擎会怎么样？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
很显然，程序占用状态下是只读的。同文件不会覆盖！
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
如果我将源文件拷贝一份，启动后还是原始版本啊！
</chatmessage>

![](..%2Fassets%2Fhotfix012.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
UE有个pak打包时序，会将最新加入的pak作为增量补丁。当然在这之前你的项目需要设置块打包，并且关闭IO保存。
</chatmessage>

![](..%2Fassets%2Fhotfix011.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
并且可以通过命名规则确定加载优先级。
</chatmessage>

>命名规则 后缀“_n_P.pak” ，其中n越大优先级越高。

![](..%2Fassets%2Fhotfix015.png)

![](..%2Fassets%2Fhotfix013.png)

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
搜嘎！如果我大量复制会不会有性能问题？
</chatmessage>


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
目前来看并没有太大的影响。但是咱们还是得想办法解决这种增量补丁导致的硬盘膨胀
</chatmessage>

![](..%2Fassets%2Fhotfix014.png)

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
而且，我发现运行后pakchunk0-Windows.pak可以被删除，补丁却被占用了。
</chatmessage>

>注意，咱们现在是完整打包替换，每个补丁就是一个完整的版本。

<gifwithbutton src="../../assets/unrealgif/hpup41.gif"/>


<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
我有个大胆的想法！可不可以解决补丁膨胀问题！
</chatmessage>


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
你想启动前删除旧的补丁是吧，可惜重启会报错！
</chatmessage>

![](..%2Fassets%2Fhotfix016.png)

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
怎么解决呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
解决办法就是把不打包成文件块，打包成一体.
</chatmessage>

![](..%2Fassets%2Fhotfix017.png)

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
靠！又绕回来了！那怎么确定目前的哪些内容要删除呢？总不能基于修改时间吧！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
是的，所以必须要有一个说明书，告诉软件删除哪些东西。可以是个文本，也可以是个信号，我们这里用更加通用的json。
</chatmessage>

>JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，易于阅读和编写，也易于解析和生成.

## 方案2

### **JSON+HTTP**

![](..%2Fassets%2Fhotfix018.jpg)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这里咱们需要使用两个json：
</chatmessage>

### 1. 本地JSON存储版本号

```json
{
  "LocalVersion": {
    "versionNumber": "1.0.0"
  }
}
```
### 2. 远程JSON存储更新List

```json
{
  "ServerVersionPath": [
    {
      "versionNumber": "1.0.0",
      "downloadUrl": "https://example.com/patches/patch-1.1.0.zip"
    },
    {
      "versionNumber": "1.0.1",
      "downloadUrl": "https://example.com/patches/patch-1.1.0.zip"
    },
    {
      "versionNumber": "1.0.2",
      "downloadUrl": "https://example.com/patches/patch-1.1.0.zip"
    }
  ]
}

```

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
也就是说我可以拿本地JSON和远程JSON对比分析出要下载的补丁是吧?
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
是的，这样即便是有版本代差也可以正确下载到文件。
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
如果我人为破坏版本号呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
可以加上一条完整版地址，找不到版本号就认为本地文件被破坏，去下载最新的完整版本。
</chatmessage>

```json
{
  "LatestFullVersionUrl": "https://example.com/fullversion/full-1.0.3.zip",
  "ServerVersionPath": [
    {
      "versionNumber": "1.0.0",
      "downloadUrl": "https://example.com/patches/patch-1.1.0.zip"
    },
    {
      "versionNumber": "1.0.1",
      "downloadUrl": "https://example.com/patches/patch-1.1.0.zip"
    },
    {
      "versionNumber": "1.0.2",
      "downloadUrl": "https://example.com/patches/patch-1.1.0.zip"
    }
  ]
}
```

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
问题来了！这个json怎么转成UE认识的格式呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
还记得咱们在<a href="../core_核心_/10.1-JsonTOString.html">JsonTOString </a>中提到官方插件吧。
</chatmessage>

![](..%2Fassets%2Fhotfix019.png)

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
这个插件好像有点问题吧！
</chatmessage>

![](..%2Fassets%2Fhotfix020.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
你要从右边开始连，因为他没识别到你的数据结构。
</chatmessage>

![](..%2Fassets%2Fhotfix021.png)

### 简单实现步骤

### 1. 获取本地版本号

![](..%2Fassets%2Fhotfix026.png)

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
这里的目录好像不会被打包进去吧！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
所以咱们需要在打包设置中添加这个非资源目录如下图：
</chatmessage>

![](..%2Fassets%2Fhotfix024.png)


<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
我发现有两个获取游戏路径的节点！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
一个是相对路径，一个是绝对路径。原则上我们应该用相对路径，也就是下面这种。
</chatmessage>

![](..%2Fassets%2Fhotfix025.png)


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
至于名称咱可以学一下别的游戏，比如下面的：
</chatmessage>

![](..%2Fassets%2Fhotfix023.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
现在咱们已经能获取到本地的版本号了如下图：
</chatmessage>

![](..%2Fassets%2Fhotfix022.png)

### 2. 修改本地版本号

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
当然对应的修改版号功能也得写一个，并且将路径提取到全局变量。
</chatmessage>

![](..%2Fassets%2Fhotfix027.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
测试一下！
</chatmessage>

![](..%2Fassets%2Fhotfix028.png)


### 3.获取更新列表


![](..%2Fassets%2Fhotfix029.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
简单测试一下
</chatmessage>

![](..%2Fassets%2Fhotfix030.png)

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
有个问题！如果本地在下载完补丁后恶意破坏，目前这个方法好像有bug!
</chatmessage>

### 4.校验本地文件

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
是的，目前只是理想状态下的完美更新。因为我们缺少一个非常重要的步骤！——校验！
</chatmessage>

>欲知后事如何，且看下回分解。


