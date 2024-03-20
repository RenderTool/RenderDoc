---
title: M.背包系统01|永劫无间细节反推
order : 1
category:
  - u++
---

## 导言
<chatmessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="40">
恭喜你，发现了本站秘宝。此乃鄙人入魔篇。
</chatmessage>

<hr>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我想实现一个类似永劫那样的背包系统！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
安排！
</chatmessage>

>《永劫无间》是一款以斗罗大陆为背景的动作角色扮演游戏，拥有多种武器、技能、时装和战斗模式，让玩家体验不同的英雄故事和风格。

![](..%2Fassets%2Finv004.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
永劫无间基于U3D引擎，并不妨碍我们思考问题，咱们先进入游戏体验一波。
</chatmessage>

## 初体验
>进入下个环节前，需了解一个概念：  
1.玩家(Player)指的是用户，视野（Camera|View）指的是用户操作的相机视角，后面说玩家二者默认一起考虑。  
2.而角色（Pawn|Character）指的是玩家操作的角色,或者模型本身。


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
按Tab打开背包可以看到以下界面：
</chatmessage>

![](..%2Fassets%2Finv005.png)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
两边有暗角，应该是防止一些过亮环境看不清背包内容。并且我发现平时这个附近是看不到的。
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup24.gif"/>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
上图可知，打开背包前只会显示具体的物品信息UI，打开背包后会被加载到附近列表中。
</chatmessage>

### 机制猜测

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我觉得物体显示的图层和背包的图层应该是根据索引切换置顶的。
</chatmessage>

![](..%2Fassets%2Finv006.jpg)

>真实情况咱们不得而知，也没必要得知。方法也有很多，咱们只是抛砖引玉，先让自己进入状态。


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
UE中对应的组件——WidgetSwitcher。
</chatmessage>

### WidgetSwitcher

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">

[Widget Switcher是一种UI控件，它允许在多个子控件之间进行切换显示。它类似于选项卡控件，但不限于显示选项卡式的UI。](https://docs.unrealengine.com/5.0/en-US/API/Runtime/UMG/Components/UWidgetSwitcher/)

</chatmessage>

>基本使用流程,后续不会使用此方法。

1. 创建一个UWidgetSwitcher

![](..%2Fassets%2Finv007.png)

2. 加入一些要切换显示的数据比如图片

![](..%2Fassets%2Finv008.png)

3. 用节点切换到对应的图层Index

![](..%2Fassets%2Finv009.png)


## 道具信息

### 道具UI

<gifwithbutton src="../../assets/unrealgif/hpup21.gif"/>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
上图中可以得知，玩家无论面向物体还是背向物体，进入某个范围都能显示对应的物品UI。
</chatmessage>

![](..%2Fassets%2Finv014.png)


<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
也可能是角色朝向方向发射射线和物体相交检测。无论如何都要先获取物体的指针。货郎的购买也是这样，固定位置显示一个购买按钮。
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup23.gif"/>


### 机制思考

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
至少现在咱能确认一个信息，即UI始终固定在屏幕某个位置，避免绑定在物体上过度绘制。
</chatmessage>


![](..%2Fassets%2Finv003.png)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
经验和直觉告诉我们还得配合委托，广播刷新显示对应数据。
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup21.gif"/>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
说干就干，在UE中准备对应的UI
</chatmessage>

![](..%2Fassets%2Finv032.png)

## 附近列表

### 显示数量

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
数量大概12个
</chatmessage>

![](..%2Fassets%2Finv015.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
安排，并且把暗角也安排上，注意这里咱用的是ListView
</chatmessage>

![](..%2Fassets%2Finv034.jpg)


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
对应的附近列表子项ItemUI，咱就不先考虑耐久了。
</chatmessage>

![](..%2Fassets%2Finv033.jpg)


### 显示细节

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
鼠标Hover图标会出现更详细的道具详细。
</chatmessage>

![](..%2Fassets%2Finv016.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这个咱们也先不考虑。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我观察到道具和武器好像显示不太一样！武器中多了一个替换！
</chatmessage>

![](..%2Fassets%2Finv030.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这个简单，根据当前类型显示|隐藏这个选项就行了。
</chatmessage>

>至于为什么有这个替换，这里卖个关子，可以先阅读下去。

### 添加移除

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
随着角色推进，物体被依次推入列表。反只则反
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup25.gif"/>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

至此，脑海中这个`附近列表`的入栈有了个基本构想

</chatmessage>

### 构想①

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
道具上绑定碰撞体，碰撞开始推入背包栈，碰撞结束弹出背包栈。
</chatmessage>


![](..%2Fassets%2Finv001.png)

### 构想②
<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
角色身上绑定碰撞体
</chatmessage>

![](..%2Fassets%2Finv002.png)

### 碰撞范围

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
考虑性能问题，构想①的思路好像比较靠谱。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
可以先用构想①尝试一波，不过很快你会发现问题的。
</chatmessage>

![](..%2Fassets%2Finv018.png)


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
注意一个细节——测试中准星并没有对准物体。
</chatmessage>

![](..%2Fassets%2Finv017.png)

### 小实验1

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
纸上得来终觉浅，咱还是开始动手做个实验Demo吧。
</chatmessage>

> 实验版本，为了快速实现最小Demo,后续咱们再回头来考虑优化问题。

1. 一个背包组件/子系统 + 一个背包交互的接口 +物体本身

![](..%2Fassets%2Finv021.png)

> 测试阶段用的是组件，但我推荐你用子系统，因为还要考虑大厅显示UI数据问题。

2. 背包内需要一个临时数组,保存附近列表的物体

![](..%2Fassets%2Finv022.png)

```cpp
	UPROPERTY(BlueprintReadWrite, EditAnywhere, meta=(DisplayName="Items"))
	TArray<TObjectPtr<AActor>> CurrentItems;
```

3. 配套的UI

①. 道具显示页面

![](..%2Fassets%2Finv032.png)

```cpp
USTRUCT(BlueprintType)
struct  FBaseStruct 
{
	GENERATED_BODY()
public:
	
	UPROPERTY(BlueprintReadWrite, EditAnywhere, meta=(DisplayName="Name"))
	FText Name;

	UPROPERTY(BlueprintReadWrite, EditAnywhere, meta=(DisplayName="Description"))
	FText Description;
	
	UPROPERTY(BlueprintReadWrite, EditAnywhere, meta=(DisplayName="Icon", MakeStructureDefaultValue="None"))
	TObjectPtr<UTexture2D> Icon;
};

USTRUCT(BlueprintType)
struct FPickUpInfoStruct
{
	GENERATED_BODY()
	
	//基本信息|名称_描述_Icon
	UPROPERTY(BlueprintReadWrite, EditAnywhere, meta=(DisplayName="PickUpItemUIInfo"))
	FBaseStruct ItemInfo;

	//品质
	UPROPERTY(BlueprintReadWrite, EditAnywhere, meta=(DisplayName="PickUpItemQuantity"))
	int32 Quantity;

	//按键信息
	UPROPERTY(BlueprintReadWrite, EditAnywhere, meta=(DisplayName="PickUpKey"))
	TMap<FName,FName> Keys;
	
};

```

②. 背包骨架

![](..%2Fassets%2Finv012.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
咱暂时不考虑魂玉，可以把这栏修改成武器背包，然后把原本武器背包替换成材料背包。
</chatmessage>

![](..%2Fassets%2Finv013.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

如果你会GAS，也可以加上配套的GE，关于GAS[传送门](../core[核心]/8-GAS.md)

</chatmessage>

```cpp
	UPROPERTY(BlueprintReadWrite, EditAnywhere, meta=(DisplayName="GameplayEffect"))
	TArray<TSubclassOf<UGameplayEffect>> Effect;
```
3. 一个ItemBaseActor


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
不管三七二十一，先加个碰撞体
</chatmessage>

![](..%2Fassets%2Finv019.png)

>对应蓝图

![](..%2Fassets%2Finv020.png)


<gifwithbutton src="../../assets/unrealgif/hpup27.gif"/>


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

咱们平时看到的附近列表，都会临时缓存在背包的附近列表数组中。List的子项都是一个物体本身的指针。

</chatmessage>

![](..%2Fassets%2Finv024.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

通过碰撞体和接口加入物体或者移除物体，这没毛病。但永劫里还有一个变数——`物品信息UI`

</chatmessage>

![](..%2Fassets%2Finv025.png)


### 堆叠问题

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
如果道具摆放的非常分散，这个思路不会出错。
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup28.gif"/>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
一旦大量道具堆叠，就会出大毛病！
</chatmessage>

![](..%2Fassets%2Finv026.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
一旦大量道具堆叠，则只会显示最后加入的物体详细。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
那么永劫中是怎么解决这个问题的？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
附近物体列表有物体的情况下（注意看这里的道具顺序），关闭背包后连续按E会依次从第一个切换到最后一个。
</chatmessage>

![](..%2Fassets%2Finv028.png)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
可是按E不是拾取嘛？为什么会切换？
</chatmessage>

### 拾取细节

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这里有个前置条件——背包中道具已满，并且无法替换更高品质的道具。
</chatmessage>

![](..%2Fassets%2Finv029.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这也是他的武器为什么要设计一个单独替换按键的原因。
</chatmessage>

![](..%2Fassets%2Finv030.png)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
那我想捡东西岂不是每次都要点满才行？这也太不方便了！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
永劫的设计师当然考虑到了这个问题，当你的准星朝向不同的物体，会立即显示对应的物体。
</chatmessage>

![](..%2Fassets%2Finv031.jpg)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
你这准星也没完全对齐啊？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
因为检测的并不是道具本身的碰撞，而是道具外的碰撞体。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我不理解，你已经在碰撞体内部了，发射射线不对准道具怎么检测?
</chatmessage>

![](..%2Fassets%2Finv035.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这个倒好解决，可以用两碰撞体，一个负责检测Pawn,一个负责接收射线。
</chatmessage>


![](..%2Fassets%2Finv036.jpg)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
但是，我要说但是。随之而来的BUG就出现了，先画个图。
</chatmessage>

![](..%2Fassets%2Finv037.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
你只碰到了第一个Actor,附近列表中也只显示一个，但你的射线却能碰到更远的物体，导致显示BUG
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
如果我手动把这个物体加到数组中呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
手动加入意味着你不去触发道具的EndOver函数会永远留在附近列表中。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
也就是说，射线距离应该和道具检测距离匹配是吗？这么看来只能用构思②的思路了！
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup30.gif"/>


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
从上可知，构思①和构思②都存在这个问题，只能想办法过滤掉不在背包的内容，即对射线命中的物体进行一次是否在列表中查询操作。
</chatmessage>


>背包组件对应蓝图,后面要进行C++重构，而且其实有更好的办法。

![](..%2Fassets%2Finv038.png)

![](..%2Fassets%2Finv039.png)

## 背包部分

>永劫里面，道具还分可暂存道具比如钩锁、武备、药品、护甲粉和直接使用道具，比如果实这种。为此我们需要设计一个合理的使用
机制，这也是我们接下来讨论背包部分的重点。

### 使用时机

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
物品被分成了道具背包、魂玉背包、武器背包。其实吧，加个配置字段就行了，生成的物体可以直接用还是缓存到附近列表（后续称做临时背包）、背包中。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

但你发现没，这些直接使用的道具往往不是我们口中的掉落`道具`，他们更像是功能性道具，比如果实、萤火虫。

</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
也就是说他们可能被另外一个Actor携带和配置，永劫里小怪（AI Pawn）死后也会有掉落道具的行为。
</chatmessage>


### 小实验2

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
我们整理一下物体从看到到使用的简单过程吧。
</chatmessage>

![](..%2Fassets%2Finv040.jpg)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
简单分析一下：
</chatmessage>

1. 信息交互的媒介为碰撞体、组件、角色Pawn
2. 信息内容是配置好的道具内容，本质上其实是数据的增删改查。
 
<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
回头看一下我们的小实验1内容，我们仅仅考虑了交互媒介。却没考虑信息内容的存取。
</chatmessage>

![](..%2Fassets%2Finv021.png)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
你的组件不就在负责数据存取嘛？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
那么请问，这个数据是哪里来的？
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
道具啊！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
道具上的数据是哪里来的？
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
场景生成的呗
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
场景凭空生成嘛？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
。。。。。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
当然不是凭空生成，而是放在数据库中根据规则生成。在网络篇已经充分讨论了客户端不可信。
即所有关键操作必须由服务器完成。但我们得放权给某些类去执行这些操作。
</chatmessage>

### 背包边界

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
另外，我注意到一个细节，打开货郎和打开背包似乎是同个页面的不同接口调用
</chatmessage>

![](..%2Fassets%2Finv010.png)


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

如果说`附近列表`属于背包的一部分，那么可以认为打开货郎这个操作就是打开背包，并且Push进货郎的UI。

</chatmessage>

## 货郎

### 移动模式

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
无论是打开背包还是打开货郎，角色除了不能动视角以外仍然可以移动。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

这个我们在Lyra-[Inputmode的封装](../lyra[天秤座]/2-ImproveCommonUI.md)
已经讨论过了，游戏的3种状态。

</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
离开货郎后背包就会关闭，重新进入后只会显示购买UI.
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup26.gif"/>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
这个也很好理解，碰撞体的EndOver事件触发后，广播了一条关闭背包的委托。重新进入触发StartOver，则广播一条打开背包的委托，并且加载
货郎UI。
</chatmessage>


