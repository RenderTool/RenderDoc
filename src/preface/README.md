---
title: 写在前面
icon: lightbulb
order : 1
sidebar : false
---
## 我是
<ChatMessage avatar="../assets/emoji/blzt.png" :avatarWidth="40">
我是一个普通人，如果你希望通过看我的文章变成高手，不好意思我办不到。
</ChatMessage>

我接触的第一款游戏引擎不是UE，也不是起源、CE、U3D而是一款非常古董的3D游戏引擎.

<ChatMessage avatar="../assets/emoji/hx.png" :avatarWidth="40">
太古老了我真的想不起名字了，只记得电驴上下载的本体，想起来再来补名字吧。
</ChatMessage>


直到上高中才接触的UE引擎，当时还是UE3(UDK)时代黄金，国内贴吧也是开荒阶。
天真的以为会点Kismet(蓝图前身)就能开发游戏，以至于想退学搞游戏。（在这里非常感谢我的父母的极力反对）

>UE3时代萌生了许多优秀游戏例如战争机器、蝙蝠侠等，具体就问度娘吧。

不巧的是，毕业后我并没有找到一份合适的UE工作岗位，妥协后找了一份3D建模渲染的工作。（是的，我被那清一色U3D开发劝退了）

## 缘起
一开始，我的日常是建模、渲染维护APP的3D板块。每次渲染阶段都会有一小段的电脑无法操作时间。这时候喜欢抽出时间来给自己`补课`.
我不知道哪天开始，我看到了一个网页版光线追踪的Demo(准确来说是路径追踪)[地址](https://erichlof.github.io/THREE.js-PathTracing-Renderer/)
正好当时我的项目中有改进移动版渲染画质的需求，于是潘多拉魔盒被打开了。  

## 初窥 
下载完DEMO后我发现，阻碍我第一步前进的便是前端编程语言JavaScript以及他用到的[threejs](https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene)(基于webgl)

<ChatMessage avatar="../assets/emoji/hx.png" :avatarWidth="40">
对于我来说简直堪比看天书。于是，我就找了几百集的js课程以及threejs课程进行简单入坑。
</ChatMessage>

目的很纯粹，看懂他写的东西，能扩展。学了一段时间后，发现我还是太年轻了，他的整个框架几乎都是使用原始js+threejs。

<ChatMessage avatar="../assets/emoji/ybk.png" :avatarWidth="40">
回头来看这确实是DEMO，因为真的一点不考虑模块和通用结构。
</ChatMessage>

## 深坑
当我已经能大概看懂他框架部分后，发现另外一个严重的问题：他的render core部分不是用js写的，而是基于opengl es3写的shader。

<ChatMessage avatar="../assets/emoji/kclr.png" :avatarWidth="40">
简直太可爱了（脏话），难不成还要学习opengl?
</ChatMessage>
可是国内外的opengl教程都太少了，唯一能看到也只有官方的文档而已。可是，我想说可是，threejs基于webgl把能写的都写了,而他核心的渲染部分其实压根和opengl没关系。

>后来我才搞懂语言和算法不是一个东西。

OpenGL（Open Graphics Library）是一个用于渲染2D和3D图形的跨平台图形API。OpenGL Shading Language（GLSL）是OpenGL的一个组成部分，
它是一种类似C语言的编程语言，用于编写图形着色器程序，控制图形渲染的各个阶段，but和光线追踪算法一毛钱关系没有。
>这下好了，彻底坑了，学完js的我试图生啃C语言（就是不学的意思啦）。

## 摸索
当时没有game101这种大佬级别的课程，于是我用了最笨的方法——骚扰作者。

<ChatMessage avatar="../assets/emoji/ybk.png" :avatarWidth="40">
老外人还怪热情的，知道我是个初学者，耐心的推荐了一些书籍给我，其中就有经典的 <a href="https://zhuanlan.zhihu.com/p/128582904">《一周光线追踪》</a>
<a href="https://www.pbrt.org/">《pbrt》</a>
这是老外的<a href="https://erichlof.github.io/THREE.js-PathTracing-Renderer/"> github </a>
</ChatMessage>

## 僵局
就这样，持续几个月后。我总算认识他写的东西了。
<ChatMessage avatar="../assets/emoji/kclr.png" :avatarWidth="40">
只是认识了，里面的原理我是真看不懂，简直折磨。什么BVH、PBRShader、Raytracing、Pathtracing以及一大堆公式的代码化。
</ChatMessage>
我已经意识到，如果没有扎实的数学、编程基础根本搞不定这个。于是我放弃所谓的简单魔改的想法，定下心来了解基础的光线追踪原理，至于CPP我依然没兴趣去学。

## 突变
风云突变，UE5横空出世，lumen、nanite大量新特性的出现，直接改变了UE4时代ligtmass烘培ligtmap的历史。
>Lumen 是一套全动态全局光照和反射系统，专为次世代主机而设计。Lumen作为默认的全局光照系统，
可以使用多种光线追踪方法，解决大规模全局光照和反射。

这时候的我依然痴迷我都支线任务：js+Pathtracing，以至于荒废了学习UE的大好时光。  
当我再次下载UE的时候以及是UE5.0Beta了，里面大量的新特性让我措手不及...

<ChatMessage avatar="../assets/emoji/blzt.png" :avatarWidth="40">
这时候的我对gameplay框架、GAS、网络模块等压根没有概念。
</ChatMessage>


## 主线
一天，我梦中惊醒。我在干什么？我读书时的梦想到现在可一点都没实现。我到现在只是个简单会连连看（蓝图）的杂毛。

<ChatMessage avatar="../assets/emoji/hx.png" :avatarWidth="40">
对不起，没有诋毁蓝图大佬的意思。
</ChatMessage>
于是鬼使神差，我起床打得开了电脑。下了个说是推荐新人用的DEMO-lyra。
可当我打开他工程中的的UMG时我傻了，几乎都是空的，甚至连GameMode都是空的。每个文件点开都会唤起我的VS2019。

> 这下好了，没得玩了。CPP真的看不懂一点。回头看才知道，这确实推荐给编程人员入门DEMO。

看来学习CPP迫在眉睫。

## 支线

说到支线，AI画图刚出来的时确实浅学了一下，还自己训练了几个lora、也面向gpt3.5开发了python小应用，摸索过基于WPF+OBS的直播推流。
后来，日常工作也不再是简单的渲染、建模，更多时候是调研一些新的模块任务，包括一些PBR材质扫描流程、拍照建模流程等、无缝贴图算法等。

## 天真

入坑CPP才发现，自己真的年轻。这种掉头发级语言怎么会比python、js容易呢。可是UE除了蓝图、LUA、cpp、python也没得选啊。

## 转折
>人们总是希望像电影主角那样，迎来某个剧情转折。

<ChatMessage avatar="../assets/emoji/kclr.png" :avatarWidth="40">
对不起，现实是残酷的，穷人只能坚信学习可能改变命运。
</ChatMessage>

## 前进
活着，不放弃思考。