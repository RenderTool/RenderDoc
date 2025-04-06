---
title: Umg.编辑器工具蓝图|控件
order: 5
category:
  - unreal
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
Baba一个一个设置模型的Lod太麻烦了！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
你可以编写一个自动处理的脚本啊。
</chatmessage>

<chatmessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
还能用脚本？难不成是万恶的python？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
可以用python,但我们今天先用自家的编辑器工具控件来实现。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (5).png" :avatarWidth="40">
好家伙！我还没听说过。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
找块空地，右键——编辑器工具，可以看到有两种。一个是控件、一个则是蓝图。
</chatmessage>

![](..%2Fassets%2Fbputility.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
先说说这个编辑器工具蓝图吧！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
点开后你会发现一个和创建蓝图类类似的窗口。
</chatmessage>

![](..%2Fassets%2FChooseParentClassEUBP.jpg)

>[摘自官方文档](https://docs.unrealengine.com/5.1/zh-CN/scripted-actions-in-unreal-engine/)

1. 决定是在 内容浏览器 中选择的资产上，还是在 关卡视口 或 世界大纲视图 中选择的Actor上执行脚本化操作。
* 若要在资产上执行脚本化操作，选择 AssetActionUtility 作为父类，然后按 选择（Select）。
* 若要在Actor上执行脚本化操作，选择 ActorActionUtility 作为父类，然后按 选择（Select）。

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
其中AssetActionUtility就是显示的第三个按钮，但ActorActionUtility 就不一样了。
</chatmessage>

![AssetActionUtility](..%2Fassets%2Fasset.png)

### AssetActionUtility

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
打开后可以发现和普通蓝图类没什么区别。（要不然怎么会叫编辑器蓝图类呢）随便创建一个测试函数。
</chatmessage>

![](..%2Fassets%2FASSETACTIONTEST.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
然后怎么用呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
AssetActionUtility顾名思义就是资产上操作，随便选一个资产就可以用。
</chatmessage>

![](..%2Fassets%2Fmainassetactionbv.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
也就是说可以把批量设置LOD的方法写在这里！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
没错，不过学东西不能一知半解，咱们看看另外一种ActorActionUtility。
</chatmessage>

### ActorActionUtility

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
同样的创建一个函数，只不过这一次只能在actor身上右键显示。
</chatmessage>

![](..%2Fassets%2Factoractiontest.jpg)

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
你说的LOD批量设置可以写在AssetActionUtility类里。
</chatmessage>

<iframe src="https://blueprintue.com/render/f_aztmw4/" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

![](..%2Fassets%2Flodautoset.png)

![](..%2Fassets%2Flodwindow.png)


<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
还有一个编辑器工具控件没说啊！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
贪多嚼不烂，总得一样一样吸收消化。
</chatmessage>

![](..%2Fassets%2Feditortool.jpg)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
还是空白处右键，这次我们看看编辑器工具控件长什么样。
</chatmessage>

![](..%2Fassets%2Fneweditorutility.png)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
???这不就是UMG界面吗？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
没错，确实是UMG，只不过这里的UMG编辑器中运行。
</chatmessage>

![](..%2Fassets%2Fslate001.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
可是用了蓝图控件只能说是一个中间方案，用C++应该会更好吧！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
C++确实自由度更高，但他编译时间实在让人无法忍受，款且官方有些工具例如：MovieRender也是基于这个组件。
</chatmessage>

![](..%2Fassets%2FUMGGF.jpg)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
回头看我们的，比方说，我们要实现用一个按钮语言切换功能。
</chatmessage>

![](..%2Fassets%2Fabutton.png)

![](..%2Fassets%2Fbuttontoch.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
运行过一次后，就可以在工具——编辑器工具控件中找到他。
</chatmessage>

![](..%2Fassets%2Fedito20231123190842.png)

<gifwithbutton src="../../assets/unrealgif/changelanguage.gif"/>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
你以为这就结束啦？下一篇文章我们将展开介绍怎么在编辑器工具控件生成一些基本样式。
</chatmessage>
