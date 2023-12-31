---
title: shader1.从血条材质开始
order: 1
category:
  - unreal
---
## 导读

<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
我想实现一个比较通用的血条材质类似LOL/守望/永劫那种。
</ChatMessage>

![](..%2Fassets%2Fshader.jpg)

<ChatMessage avatar=" ../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
别急着动手，先思考一下我们要实现哪些功能以及机制设定。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
一个正常的血条修改看到需要有个加减值反馈，比如下面这样
</ChatMessage>

![](..%2Fassets%2Freducehp.jpg)

<hr>

<ChatMessage avatar=" ../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
这个是最简单基础的功能，但视觉上我们无法确定这个血量是从什么地方开始修改的。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
我可以给他加个过度状态。
</ChatMessage>

![](..%2Fassets%2Fcurrenthp.jpg)

<hr>

<ChatMessage avatar=" ../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
如果没有显示血量值阁下如何应对。
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/new11.png" :avatarWidth="55">
简单加个刻度就行了！比如一个格子10血。
</ChatMessage>

![](..%2Fassets%2Fhp3333.jpg)

<hr>

<ChatMessage avatar=" ../../assets/emoji/new2.png" :avatarWidth="40" alignLeft>
Good！如果我通过Buff或者一些游戏机制永久修改你的上下限，阁下如何应对？
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/new11.png" :avatarWidth="55">
这还不简单，直接加上或者减少血条上下限不就行了！
</ChatMessage>

![](..%2Fassets%2Fjizhixiugai%20.jpg)

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
小伙子想的挺美，你设计的UI可是固定尺寸的，总不能一修改就改UI尺寸吧！
</ChatMessage>

![](..%2Fassets%2Fdehp.jpg)

<ChatMessage avatar="../../../assets/emoji/kclr.png" :avatarWidth="40">
你这么说好像确实没法这么玩！
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
一般设定的一个格子多少血量可以认为是常量。意味着，我们需要动态修改我的显示格子数量来自适应我们的修改上下限。
</ChatMessage>

![](..%2Fassets%2Fdshp2.jpg)

<ChatMessage avatar="../../../assets/emoji/bqb01.png" :avatarWidth="40">
还有一种情况，如果是临时效果比如类似免死技能呢？
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
你说的是类似OW巴蒂那种免死机制是吧，你可以模仿他做一个额外的UI。
</ChatMessage>

![](..%2Fassets%2Fhpbadi.png)


<ChatMessage avatar="../../../assets/emoji/bqb01.png" :avatarWidth="40">
也就是说需要实现这样？
</ChatMessage>

![](..%2Fassets%2Fhpall.jpg)

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
你这个设计咋一看没毛病，但我先卖个关子，先给出我的设计构思。
</ChatMessage>

![](..%2Fassets%2Fblooad.jpg)

## 格子部分（方案1）

<ChatMessage avatar=" ../../assets/emoji/bqb01.png" :avatarWidth="40">
这里面我感觉最容易实现的是格子部分，用一张线条贴图进行平铺就行了！
</ChatMessage>

![](..%2Fassets%2Fhpshow.jpg)

<ChatMessage avatar=" ../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
这个想法乍一看没什么毛病。
</ChatMessage>

![](..%2Fassets%2Fhppart1.png)

<ChatMessage avatar=" ../../assets/emoji/bqb01.png" :avatarWidth="40">
等等！为什么你的材质节点和我的不一样？
</ChatMessage>

![](..%2Fassets%2Fstandmat.png)

<ChatMessage avatar=" ../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
这个简单，你把材质域改成用户界面就行了。
</ChatMessage>

![](..%2Fassets%2Fczy.png)

<ChatMessage avatar=" ../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
回到正题。你这种方案平铺次数增加以后线条会看不清。
</ChatMessage>

![](..%2Fassets%2Fhpvs.png)

<ChatMessage avatar=" ../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
设计的血条UI一般是固定尺寸的，不可能随着血量/护甲增加更改视觉尺寸。
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/new7.png" :avatarWidth="40">

也就是说问题变成怎么保证线条不变就行了，那么我想到一个`drawline`的节点可以画线。

</ChatMessage>

![](..%2Fassets%2Fdrawline.png)

<ChatMessage avatar=" ../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
说说你的思路
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/new7.png" :avatarWidth="40">
既然用贴图重复后会出现贴图压缩问题，我用手动画线不就行了！
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
看来你并不理解贴图平铺的本质，这种画线方案依然会出现压缩问题。
</ChatMessage>

![](..%2Fassets%2Fhpfanan2.png)

<ChatMessage avatar=" ../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
而且这个节点的实现花里胡哨的。
</ChatMessage>

![](..%2Fassets%2Fdrawlinefunction.png)

<ChatMessage avatar=" ../../assets/emoji/new7.png" :avatarWidth="40">
那你有什么方案可以实现吗？
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
别急，先了解一些基本概念。
</ChatMessage>


### TEXCOORD

:::note
TEXCOORD（Texture Coordinates）节点通常用于处理纹理坐标。纹理坐标是指在纹理映射过程中，用于确定在纹理图像上的哪个位置获取颜色的坐标。
也称为UV坐标。
:::

<ChatMessage avatar=" ../../assets/emoji/new7.png" :avatarWidth="40">
打住打住，为什么突然介绍起这个节点？
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
别急，这个节点的目的是让你理解一下UE材质的坐标系。
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/new7.png" :avatarWidth="40">
为什么要理解UV坐标，这和我们画血条格子有什么关系？
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
既然咱们要在屏幕上绘制线条，必然要确定绘制在哪，以及怎么绘制。
</ChatMessage>

1. UE中贴图的左上角为原点（0.0,0.0）,右下角是（1.0，1.0）
2. 垂直方向是Y轴，水平方向是X轴。

![](..%2Fassets%2FTEXCOORD.png)

<ChatMessage avatar=" ../../assets/emoji/new7.png" :avatarWidth="40">
可是，为什么这个坐标系是0-1内呢？
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这种规范化的纹理坐标使得在不同大小的纹理上使用相同的坐标值成为可能，因为无论纹理的实际尺寸如何，纹理坐标都是相对于纹理的尺寸进行规范化的。
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (6).png" :avatarWidth="40">
搜得寺内！
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/new2.png" :avatarWidth="50" alignLeft>
别打岔，我们继续介绍。在屏幕上画图并不像我们平时用PS画图那样简单，我们需要通过坐标和颜色配合画图。
</ChatMessage>

### ColorMap

:::note
Colormap（色彩映射）是用于将数据值映射到颜色的方法。
:::

![](..%2Fassets%2Fcolor1.png)

>在UE中，颜色贴图通常采用RGBA的格式，即红色（R），绿色（G），蓝色（B）和Alpha通道（A）。每个通道的含义如下：

![](..%2Fassets%2Frgb.png)

1. **红色通道（R）：**
    - **含义：** 红色通道表示颜色的红色分量。
    - **用途：** 红色通道通常用于表示表面的反射率，金属度（Metallic）等属性。

2. **绿色通道（G）：**
    - **含义：** 绿色通道表示颜色的绿色分量。
    - **用途：** 绿色通道通常用于表示表面的粗糙度（Roughness）等属性。

3. **蓝色通道（B）：**
    - **含义：** 蓝色通道表示颜色的蓝色分量。
    - **用途：** 蓝色通道通常用于表示表面的法线贴图或其他法线信息。

4. **Alpha通道（A）：**
    - **含义：** Alpha通道表示颜色的透明度或不透明度。0表示完全透明，1表示完全不透明。
    - **用途：** Alpha通道通常用于在材质中控制透明度，例如实现半透明效果、蒙皮遮罩等。

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
如果在材质中没有显式地指定UV坐标（或者说你没有应用任何处理UV的节点），系统会默认使用整个UV范围。
</ChatMessage>

![](..%2Fassets%2Fcolormap.png)

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
如果在材质中没有显式地指定UV坐标（或者说你没有应用任何处理UV的节点），系统会默认使用整个UV范围。
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb01.png" :avatarWidth="40">
然后呢，现在知道坐标以及颜色表示方法了，我怎么指定坐标绘制颜色呢？
</ChatMessage>

### ComponentMask节点

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>

记得我们提到过的`TexCoord`节点吗？他代表着UV纹理坐标，我们可以通过`ComponentMask`节点提取坐标。

</ChatMessage>

![](..%2Fassets%2FUVTEXCOORD.png)

![](..%2Fassets%2Fcommask.jpg)

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>

通过独立的R和G各自对应X和Y方向的颜色信息，从而揭开`TexCoord`的庐山真面目

</ChatMessage>

![两个衰减贴图对应到R和G合成](..%2Fassets%2FTEXCOORDCOMB.jpg)



### IF节点

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>

接着，我们可以利用`IF`节点来格式化我们的纹理贴图

</ChatMessage>

![](..%2Fassets%2Fx%3D0.25.png)

```cpp
if (tex.x >= 0.25)
{
    return float3(1.0, 0.0, 0.0);//红色
}
return float3(1.0,1.0, 1.0);//白色
```

1. 0-0.25的部分都是红色
2. 0.25-1.0的部分都是白色

### Frac节点

![](..%2Fassets%2Ffracnode.png)

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>

然后，我们可以利用`Frac`节点来平铺我们的贴图。

</ChatMessage>

![](..%2Fassets%2Frepeat.png)

<ChatMessage avatar=" ../../assets/emoji/bqb (6).png" :avatarWidth="40">
搜嘎！也就是说我们只需要控制红色部分占比就能实现画线效果！
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (5).png" :avatarWidth="40">
可是似乎Frac平铺后仍然无法解决线条占比问题啊！
</ChatMessage>

### tiling平铺

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
平铺（tiling）行为时，使用Frac节点来处理纹理坐标，每一个循环单元坐标依然是左上角(0.,0.)右下角(1.0,1.0)。
但显示时依然会被映射到原来的0-1范围中。
</ChatMessage>

![](..%2Fassets%2Fzb.png)

::: note
循环单元，这里不是上下左右循环拼接的循环，而是指原本贴图平铺=1时的部分为循环单元。
:::

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
这里的B可以理解成单个循环的百分比，比如0.5对应的是50%，但重复2次后视觉上已经不再是50%了而是25%。
所以需要单个循环需要补偿25%
</ChatMessage>

![](..%2Fassets%2Fpct.png)

1. 最终显示=（颜色1占比+颜色2占比）x 平铺次数 <br>其中颜色1占比+颜色2占比 =1

2. 比如（0.5+0.5）x平铺2次，此时每个独立颜色1占总图1/4

<ChatMessage avatar=" ../../assets/emoji/bqb (6).png" :avatarWidth="40">
问题来了！这里我们无法获取物理尺寸啊！组件不同显示的占比相同也没用啊！
</ChatMessage>

![](..%2Fassets%2Fhpzbi.png)

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
设计UI时候有一个设计尺寸，虽然不同分辨率下显示的物理尺寸不同，但他的显示比例是固定的。比如我们的设计尺寸是300，
然后设定的间隔是3像素，意味着对应的占比为3/300= 1/100,即百分之1。
</ChatMessage>

![](..%2Fassets%2Fhppct2.jpg)

![](..%2Fassets%2FOWHP1.png)

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
如果第一次就设定理想占比为0.01，意味着N次平铺重映射后，单个间隔占比都会0.01/N,因此我们需要补偿回0.01。
即单个循环内0.01xN.
</ChatMessage>

![](..%2Fassets%2Ffinmask.png)


<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
这种补偿机制也有缺点，理想间隔x平铺次数 会出现大于1的情况。因此我们需要钳制这个范围。
</ChatMessage>

![](..%2Fassets%2Fclamprange.png)

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
同时还应该考虑设定血量等于一个格子血量的情况，比如设定100，一个格子血量也是100，此时就不应该绘制间隔。
这么一来节点就有点复杂了，我们可以用Custom节点，通过HLSL实现。
</ChatMessage>

### Custom节点

![](..%2Fassets%2Fcustom.png)

```cpp
// 1. 总血量Maximums = 一个格子血量PerSplitHP * 格子数量CellCount
float CellCount = Maximums / PerSplitHP;

// 2. 如果格子数量CellCount = 1 返回 0。
if (CellCount == 1)
{
    return 1;
}

// 3. 绘制格子
float2 tex = frac(float2(UV.x * CellCount, 0));

// 4. 计算间隔宽度

float Compensate = CellCount * SpacingValue;//补偿

float Spacing = clamp(Compensate, 0.001, 0.99);//钳制在0.01-0.99内


// 5. 检查是否在间隔范围内
if (tex.x >= Spacing)
{
    return 1;
}

return 0;
```

![](..%2Fassets%2Fjdian111.png)

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
自此我们已经实现了血量增加动态绘制格子的效果。
</ChatMessage>

<GifWithButton src="../../assets/unrealgif/hpbar.gif"/>

<ChatMessage avatar=" ../../assets/emoji/bqb (6).png" :avatarWidth="40">
那么血条的几个状态的绘制该这么做呢？
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
你觉得可以怎么做?
</ChatMessage>

### remap节点

<ChatMessage avatar=" ../../assets/emoji/bqb (4).png" :avatarWidth="40">
根据之前的知识，我认为用if配合remap就能解决
</ChatMessage>

![](..%2Fassets%2Fremap.png)

:::note

![](..%2Fassets%2Fremapnode.png)

将一个范围的值映射到另一个范围，比如0-100映射到0-1，同时起着钳制作用。

:::

<ChatMessage avatar=" ../../assets/emoji/bqb (4).png" :avatarWidth="40">
而且可以利用正负实现加减血的效果，同时不会溢出！简直完美！
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
先别急着高兴，你这个血条有个大问题，你现在试着修改你的最大血量你看看发生了什么！
</ChatMessage>

<GifWithButton src="../../assets/unrealgif/hpimpove.gif"/>

<ChatMessage avatar=" ../../assets/emoji/bqb (4).png" :avatarWidth="40">
修改血量上限时原本的血量也被增加了！
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
是的，而且目前来说我们并没有讨论CurrentValue，而是血量显示的正常状态NormalValue。
</ChatMessage>

![](..%2Fassets%2Fblooad2.jpg)

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
修改一下思路后的效果：
</ChatMessage>

<GifWithButton src="../../assets/unrealgif/hpimpove2.gif"/>

![](..%2Fassets%2Fbp233.png)


<ChatMessage avatar=" ../../assets/emoji/new3.png" :avatarWidth="50">
妙啊！当前英雄总血量 = InitValue + limitValue被完美的映射到0-1中！
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
是的，这样的好处是limitValue修改也不会影响当前血量值。
</ChatMessage>


### 临界值问题

<ChatMessage avatar=" ../../assets/emoji/bqb (4).png" :avatarWidth="40">
我看你的A=B连到了红色，有什么讲究吗？
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
表面上看是一个临界值，还是有点学问的，首先，NormalValue代表真实血量值，A=B意味着真实血量=设定血量，所以应该连到红色。
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
目前我们已经实现了下图的①
</ChatMessage>

![](..%2Fassets%2Fhpzt2.jpg)

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
你觉得Current状态怎么加入?
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (4).png" :avatarWidth="40">
我觉得挺容易的，下面这样就能实现。
</ChatMessage>

![](..%2Fassets%2Fhptest.png)


<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
你这么连NormalValue状态修改会连带CurrentValue修改。
</ChatMessage>

<GifWithButton src="../../assets/unrealgif/hpimpove3.gif"/>

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
我们需要明确Current状态的由来，即时间对血条状态的影响。
</ChatMessage>

![](..%2Fassets%2Fhptime.jpg)

<ChatMessage avatar=" ../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
按照我们的设计思路顺序是应该是先影响NormalValue，然后N秒内播放CurrentValue动画。
</ChatMessage>

## 格子部分（方案2）

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
而且似乎你对IF节点有高度依赖！打开一下思路，想想有没有办法不通过IF实现。
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (4).png" :avatarWidth="40">
还真没什么思路！
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
还记得之前的TexCoord节点吗，我们知道它是由两个方向的衰减贴图合成的，那你知道这个衰减贴图是线性的还是非线性的？
</ChatMessage>

![两个衰减贴图对应到R和G合成](..%2Fassets%2FTEXCOORDCOMB.jpg)

### LineGradient节点

<ChatMessage avatar=" ../../assets/emoji/bqb (4).png" :avatarWidth="40">
线性的！规范的LineGradient节点就是这么来的！
</ChatMessage>

![](..%2Fassets%2Flinear.png)

<ChatMessage avatar=" ../../assets/emoji/bqb (4).png" :avatarWidth="40">
可是我有个疑惑，线性的为什么看着颜色并不是从黑到白均匀过度？
</ChatMessage>

![](..%2Fassets%2Flinspace.png)

<ChatMessage avatar=" ../../assets/emoji/bqb (4).png" :avatarWidth="40">
难道不应该像上面这个条一样？
</ChatMessage>

![](..%2Fassets%2Flinespacevssrgb.png)

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
这个问题你还是看看大佬的视频吧！
</ChatMessage>

<iframe src="//player.bilibili.com/player.html?aid=38607808&bvid=BV15t411Y7cf&cid=67867798&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500"> </iframe>

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
这里我们先看结论，下图可以看到0.25的位置对应的正好是颜色的rgb(0.25,0.25,0.25)
</ChatMessage>

![](..%2Fassets%2Flinshow.png)

<ChatMessage avatar=" ../../assets/emoji/bqb01.png" :avatarWidth="40">
这和我们制作血条有什么关系吗？
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
讲解方法前我们先巩固一下我们的学习知识，我们的颜色从黑到白是从0-1过度的，0是黑色，1是白色。
</ChatMessage>

<ChatMessage avatar=" ../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
接着我们认识一个新节点叫做Ceil，后面要考！
</ChatMessage>

### Ceil节点

![](..%2Fassets%2FCeil.png)

::: note
"ceil" 是 "ceiling"（天花板）的缩写，通常指向向上取整的操作。
:::

<ChatMessage avatar=" ../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
我们来做一个简单的数学问题！
</ChatMessage>

![](..%2Fassets%2Fbloodnew.jpg)

<ChatMessage avatar=" ../../assets/emoji/bqb (6).png" :avatarWidth="40">
卧槽！
</ChatMessage>

![](..%2Fassets%2Fblooadnewue5.png)

<ChatMessage avatar=" ../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
你没有看错，格子问题本质是动态计算间隔，现在间隔的绘制方法有了新的方案。
</ChatMessage>

![](..%2Fassets%2Fspacenew.png)

```cpp
// 1. 总血量Maximums = 一个格子血量PerSplitHP * 格子数量CellCount
float CellCount = Maximums / PerSplitHP;

// 2. 如果格子数量CellCount = 1 返回 0。
if (CellCount == 1)
{
    return 1;
}

// 3.frac贴图平铺CellCount次

float2 tex = frac(float2(UV.x*CellCount,0.0));

//4.计算补偿
float Compensate = CellCount * SpacingValue; // 补偿

//5.依然需要钳制
float Spacing = clamp(Compensate, 0.001, 0.99); // 钳制在0.001-0.99内

//6.计算 tex.x 的偏移
tex.x +=(-Spacing+1);

// 7. 对 tex.x 进行 ceil 处理
tex.x = 1-(ceil(1 - tex.x)); 

//tex.x = 1-(Sharpness*(1 - tex.x)); //虚化节点官方推荐512

return tex;
```

## 状态部分

<ChatMessage avatar=" ../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
接着，咱们尝试用新方法描述一下血条状态。
</ChatMessage>

![](..%2Fassets%2Fhpbarnor.png)


![](..%2Fassets%2FCURRENT.png)

<ChatMessage avatar=" ../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
配合Lerp还能做出更加炫酷的效果
</ChatMessage>

### Lerp节点

![](..%2Fassets%2Flerp.png)

:::note
Lerp 的作用是在两个值之间按照线性关系产生一个中间值。
:::

![](..%2Fassets%2Flerphp.png)

<GifWithButton src="../../assets/unrealgif/hpimpove4.gif"/>

## 参考

[1.微软官网](https://learn.microsoft.com/zh-cn/windows/win32/direct3dhlsl/dx-graphics-hlsl-pguide)

[2.【UE4】HLSL语言基础](https://zhuanlan.zhihu.com/p/139665164)