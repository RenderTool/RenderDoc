---
title: Slate1.编辑器工具蓝图|控件
order: 1
category:
  - unreal
---

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
Baba一个一个设置模型的Lod太麻烦了！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
你可以编写一个自动处理的脚本啊。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/kclr.png" :avatarWidth="40">
还能用脚本？难不成是万恶的python？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
可以用python,但我们今天先用自家的编辑器工具控件来实现。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (5).png" :avatarWidth="40">
好家伙！我还没听说过。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
找块空地，右键——编辑器工具，可以看到有两种。一个是控件、一个则是蓝图。
</ChatMessage>

![](..%2F..%2Fassets%2Fbputility.png)

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
先说说这个编辑器工具蓝图吧！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
点开后你会发现一个和创建蓝图类类似的窗口。
</ChatMessage>

![](..%2F..%2Fassets%2FChooseParentClassEUBP.jpg)

>[摘自官方文档](https://docs.unrealengine.com/5.1/zh-CN/scripted-actions-in-unreal-engine/)

1. 决定是在 内容浏览器 中选择的资产上，还是在 关卡视口 或 世界大纲视图 中选择的Actor上执行脚本化操作。
* 若要在资产上执行脚本化操作，选择 AssetActionUtility 作为父类，然后按 选择（Select）。
* 若要在Actor上执行脚本化操作，选择 ActorActionUtility 作为父类，然后按 选择（Select）。

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
其中AssetActionUtility就是显示的第三个按钮，但ActorActionUtility 就不一样了。
</ChatMessage>

![AssetActionUtility](..%2F..%2Fassets%2Fasset.png)

### AssetActionUtility

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
打开后可以发现和普通蓝图类没什么区别。（要不然怎么会叫编辑器蓝图类呢）随便创建一个测试函数。
</ChatMessage>

![](..%2F..%2Fassets%2FASSETACTIONTEST.png)

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
然后怎么用呢？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
AssetActionUtility顾名思义就是资产上操作，随便选一个资产就可以用。
</ChatMessage>

![](..%2F..%2Fassets%2Fmainassetactionbv.png)

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
也就是说可以把批量设置LOD的方法写在这里！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
没错，不过学东西不能一知半解，咱们看看另外一种ActorActionUtility。
</ChatMessage>

### ActorActionUtility

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
同样的创建一个函数，只不过这一次只能在actor身上右键显示。
</ChatMessage>

![](..%2F..%2Fassets%2Factoractiontest.jpg)

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
你说的LOD批量设置可以写在AssetActionUtility类里。
</ChatMessage>

<iframe src="https://blueprintue.com/render/f_aztmw4/" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

![](..%2F..%2Fassets%2Flodautoset.png)

![](..%2F..%2Fassets%2Flodwindow.png)


<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
还有一个编辑器工具控件没说啊！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
贪多嚼不烂，总得一样一样吸收消化。
</ChatMessage>

![](..%2F..%2Fassets%2Feditortool.jpg)

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
还是空白处右键，这次我们看看编辑器工具控件长什么样。
</ChatMessage>

![](..%2F..%2Fassets%2Fneweditorutility.png)

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40">
???这不就是UMG界面吗？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
没错，确实是UMG，只不过这里的UMG是给编辑器用的，他的本质基于Slate框架。
</ChatMessage>

![](..%2F..%2Fassets%2Fslate001.png)

<ChatMessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40">
那你抽空给讲讲Slate呗！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
后续文章会有，Slate可讲的太多了，需要几个章节介绍。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
可是用了蓝图控件只能说是一个中间方案，用C++应该会更好吧！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
C++确实自由度更高，但他编译时间实在让人无法忍受，款且官方有很多Demo工具也就是用这个组件做的例如：MovieRender工具。
</ChatMessage>

![](..%2F..%2Fassets%2FUMGGF.jpg)

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
回头看我们的，例如我们要实现用一个按钮语言切换功能。
</ChatMessage>

![](..%2F..%2Fassets%2Fabutton.png)

![](..%2F..%2Fassets%2Fbuttontoch.png)

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
运行过一次后，就可以在这工具——编辑器工具控件中找到。
</ChatMessage>

![](..%2F..%2Fassets%2Fedito20231123190842.png)

<GifWithButton src="../../../assets/unrealgif/changelanguage.gif"/>