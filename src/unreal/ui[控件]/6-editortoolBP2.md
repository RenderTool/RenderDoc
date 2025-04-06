---
title: Umg.编辑器工具控件|DetailsView
order: 6
category:
  - unreal
---

## 编辑器工具控件

### EditorUtilityWidget


![](..%2Fassets%2Fedtool001.jpg)

<chatmessage avatar="../../../assets/emoji/new9.png" :avatarWidth="40" alignLeft >
EditorUtilityWidget本质上来说也是UUserWidget
</chatmessage>

<chatmessage avatar="../../../assets/emoji/new3.png" :avatarWidth="50" >
他和配套的UMG有啥区别？
</chatmessage>

<chatmessage avatar="../../../assets/emoji/new9.png" :avatarWidth="40" alignLeft >
需要写一些涉及编辑器层面批操作时用到UI控件，例如官方的SequencerStill
</chatmessage>

![](..%2Fassets%2FUMGGF.jpg)


<chatmessage avatar="../../../assets/emoji/new3.png" :avatarWidth="50" >
这个我看过！非常奇怪的是里面并没有我们想象超复杂样式UMG。
</chatmessage>

![](..%2Fassets%2Fumgmovie.png)


<chatmessage avatar="../../../assets/emoji/bqb (4).png" :avatarWidth="40" >
只有一个预构造函数，然后就没有然后了！
</chatmessage>

![](..%2Fassets%2Fpreconstruct.jpg)

### DetailsView

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="50" alignLeft >
仔细观察其实你可以发现端倪，层级组件中多了一个叫DetailsView的组件
</chatmessage>

![](..%2Fassets%2Fdetialview.png)

<chatmessage avatar="../../../assets/emoji/bqb (4).png" :avatarWidth="40" >
问题又来了！这东西的属性里除了一个<span style="color: #c0392b">Still Settings</span>也没别的东西啊！
</chatmessage>

![](..%2Fassets%2Fdtview.jpg)

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
别急，既然他写了一定有他的来源！
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (4).png" :avatarWidth="40" >
我全局搜了！没有！
</chatmessage>

![](..%2Fassets%2Fstill.jpg)

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
你注意到一个细节没有！这个是个标题我们试着从他的内容出发。
</chatmessage>

![](..%2Fassets%2Ftitle.png)

<chatmessage avatar="../../../assets/emoji/bqb (3).png" :avatarWidth="40" >
我看到他了！而且这个Still Settings是类别名！
</chatmessage>

![](..%2Fassets%2Fview222.png)

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
ok，咱们可以在我们自己的蓝图中做个简单测试。
</chatmessage>

![](..%2Fassets%2FDETAIUMG.png)

<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40" >
这里显示未定义对象！
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
别急，如果按照之前的表现，这里要<span style="color: #c0392b">显示的类型</span>应该对应我们的<span style="color: #c0392b">类目标题</span>
</chatmessage>

![](..%2Fassets%2Fbehavior.jpg)

<chatmessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40" >
还是显示未定义对象！
</chatmessage>

![](..%2Fassets%2Frunview.png)

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
还记之前的预构造蓝图吗？连上试试！
</chatmessage>

![](..%2Fassets%2Fbpview.jpg)

<chatmessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40" >
还是没反应！
</chatmessage>

![](..%2Fassets%2Ffont.png)

### 多语言注意事项

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
试试看用英文名
</chatmessage>

![](..%2Fassets%2Fout.jpg)

<chatmessage avatar="../../../assets/emoji/bqb (5).png" :avatarWidth="40" >

绝了！可是这个`显示的类型`和`显示的属性`有什么区别吗？

</chatmessage>

![](..%2Fassets%2Ftype.jpg)

<chatmessage avatar="../../../assets/emoji/new2.png" :avatarWidth="50" alignLeft >
试试看不就知道了！
</chatmessage>

![](..%2Fassets%2Fdetai223.jpg)

<chatmessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" >

### 属性控制

绝了！也就是说：<br>
`显示的类型`控制整组显示。<br>
`显示的属性`控制单个显示。

</chatmessage>

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
可是这个不支持中文太遗憾了！
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
不是绝对的，你可以新建一个中文变量名的变量试试看
</chatmessage>

![](..%2Fassets%2Fdetails.png)

<chatmessage avatar="../../../assets/emoji/new3.png" :avatarWidth="50" >
6！难不成是因为原始变量是英文，本地化成中文，这个组件只认原始数据,后面我们用中文变量命名就能正常显示。
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
应该就是这样
</chatmessage>

<chatmessage avatar="../../../assets/emoji/new3.png" :avatarWidth="50" >
这么说来和之前的ActorActionUtility|AssetActionUtility弹出来的结果很相似啊！
</chatmessage>

![](..%2Fassets%2Flodwindow.png)

<chatmessage avatar="../../../assets/emoji/new5.png" :avatarWidth="50" alignLeft >
确实像，不过这个自由度更高！
</chatmessage>

<chatmessage avatar="../../../assets/emoji/new1.png" :avatarWidth="45" >
现在界面有了，可是咱们用呢？
</chatmessage>

### 委托触发修改

<chatmessage avatar="../../../assets/emoji/new8.png" :avatarWidth="50" alignLeft >

要么用`按钮`主动触发呗,要么用它`属性改变时`的委托呗

</chatmessage>

![](..%2Fassets%2Ffunctionchage.png)

<gifwithbutton src="../../../assets/unrealgif/gifprint.gif"/>

