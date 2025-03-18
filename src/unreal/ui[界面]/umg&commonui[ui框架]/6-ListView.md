---
title: Umg6.ListView
order: 6
category:
  - unreal
---
## 导读
<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
少年，你是否在为显示大量数据在列表上而苦苦烦闹？知道有ListView这个东西却不知道怎么用？
</chatmessage>

![](..%2F..%2Fassets%2Flistview.svg)

### ListView & TileView

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
本质上来说TileView是ListView的一个扩展
</chatmessage>

![](..%2F..%2Fassets%2Flistview001.png)

```cpp
UTileView : public UListView
```

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
创建C++类的列表中也能看到
</chatmessage>

![](..%2F..%2Fassets%2Flistview002.png)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
意味着我们可以利用多态来无痛切换ListView和TileView
</chatmessage>

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
不明觉厉！
</chatmessage>

### 基本流程

1. 新建一个UMG，作为ListView载体

![](..%2F..%2Fassets%2Flistview003.png)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
ListView我们可以理解成一个负责展示数据的容器。
</chatmessage>

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
额！为什么不能像滚动框一样加入内容？
</chatmessage>

![](..%2F..%2Fassets%2Flistview006.png)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
这就要说说他和滚动框的区别了
</chatmessage>

![](..%2F..%2Fassets%2Flistview014.jpg)

| **功能对比**         | **ListView（TileView）** 🏆                          | **ScrollBox** 📜                         |
|--------------------|---------------------------------------------------|-----------------------------------------|
| **数据管理**        | 绑定 `TArray<UObject*>`，**自动复用 UI 项**              | 直接添加 `UWidget`，手动管理 UI           |
| **性能优化**        | **仅渲染可见项**，适合大数据量，优化性能                  | **所有项一次性创建**，数据多时可能卡顿    |
| **适用数据**        | 结构化数据列表（如 `TArray<UObject*>`）                | 少量 UI 动态元素，如富文本、单项内容      |
| **交互支持**        | 内置 `OnItemClicked`、`Selection` 等事件                  | 需手动绑定 `Button`、`Scroll` 事件       |
| **子项布局**        | `ListView`（纵向），`TileView`（网格）                  | 手动布局子项（如 `VerticalBox`、`HorizontalBox`） |
| **刷新方式**        | `RequestRefresh()`、`RefreshItem()`                      | 直接移除/添加 `Widget`                   |
| **适用场景**        | 长列表、多数据项，如角色选择、商店物品、技能列表等       | 小范围的动态 UI 元素，如聊天记录、日志   |
| **UI 管理**         | 高效管理大量动态数据，自动更新和回收 UI 项               | 手动管理每个 `Widget`，适合静态或少量数据|
| **内存占用**        | 优化内存，避免重复创建项，节省资源                        | 可能占用更多内存，所有项都要存在 UI 树中 |

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
ScrollBox这有多少数据就新建多少UI条目，而ListView存储着你的数据，但UI条目只会显示看得到的对吧？
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
是的，ListView只会渲染可见的子项UMG
</chatmessage>

2. 配置子项使用的条目控件类

![](..%2F..%2Fassets%2Flistview004.png)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
条目也是一个UMG，只不过里面带有一些接口。
</chatmessage>

![](..%2F..%2Fassets%2Flistview005.png)

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
然后呢?我打开游戏后没有反应啊！
</chatmessage>

![](..%2F..%2Fassets%2Flistview007.jpg)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
那是你没有添加条目进去！
</chatmessage>

3. 创建条目UMG

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
我加了啊！我创建了对应的UMG，添加进去后没有反应啊！
</chatmessage>

![](..%2F..%2Fassets%2Flistview008.jpg)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
NONONO!这里需要创建UObject,而不是子项UMG
</chatmessage>

![](..%2F..%2Fassets%2Flistview009.png)

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
一脸懵逼
</chatmessage>

4. 创建数据类UObject

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
ListView使用了类似MVC的思想，将数据、视图、控制器分离，意味着我们需要手动创建一个数据类来作为数据载体。
</chatmessage>

>方便测试里面加了名称和图标两个变量

![](..%2F..%2Fassets%2Flistview010.jpg)

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
难不成要新建UObject 然后添加到子项中？
</chatmessage>

![](..%2F..%2Fassets%2Flistview011.jpg)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
是的，这样屏幕上就可以显示出对应的子项了！不过在这之前你需要在子项UMG的接口中将数据源Cast成你的数据类，以便解析数据。
</chatmessage>

![](..%2F..%2Fassets%2Flistview012.jpg)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
给按钮点击回调上，为了更加直观我们用了一个自增整数作为索引
</chatmessage>

![](..%2F..%2Fassets%2Flistview013.jpg)


### 验证只绘制可见子项

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
如何验证他只是绘制可见项呢？
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
很简单，给他加一个Check组件，请记住我们现在最多显示4个条目，意味着第五个要拉滚动框才能看到。
</chatmessage>

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
！我勾选第一个的Check,后面的也被勾选了！
</chatmessage>

<gifwithbutton src="../../../assets/unrealgif/hpup46.gif"/>

### 如何修改数据？

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
那岂不是这个勾选框没用了！
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
年轻人！你似乎没有Get到这个点，为了让你更好的理解这一点，我用一个图来解释这一个过程。
</chatmessage>

### 时序图

![](..%2F..%2Fassets%2Flistview.svg)

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
我懂了！好比告诉ListView组件我要用这个UMG类的模板生成子项，生成后将对应的数据用接口传递过去！
</chatmessage>

![](..%2F..%2Fassets%2Flistview015.png)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
是的正因为这种机制，你的CheckBox其实被认定为View层面的东西，他并不涉及数据的修改，所以视觉上拉下滚动框会出现错误的勾选选项。
</chatmessage>

![](..%2F..%2Fassets%2Flistview016.svg)

### 刷新方法 RegenerateAllEntries

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
所以正确的方法是存储check状态，后续生成时重新赋值checkbox，同时checkbox勾选时设置对应的变量。
</chatmessage>

![](..%2F..%2Fassets%2Flistview017.png)

![](..%2F..%2Fassets%2Flistview018.png)

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
本质其实就是UI和我们的数据做了一次手动绑定对吧！虽然重复的问题解决了，如果我想勾选当前项其他的勾选框复位怎么做呢？
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
从操作上来说，你应该获取当前的勾选的选项，并且将其他选项中的 勾选框复原。
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
意味着我们不应该在UI中修改我们的数据，并将CheckBox的命中关闭
</chatmessage>

![](..%2F..%2Fassets%2Flistview019.png)

![](..%2F..%2Fassets%2Flistview020.png)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
在ListView层去监听选项变化。
</chatmessage>

![](..%2F..%2Fassets%2Flistview021.png)

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
额，这么做好像要遍历所有的数据，我觉得可以缓存一个临时变量存储上一次选中的数据和当前选项作比较。
</chatmessage>


![](..%2F..%2Fassets%2Flistview022.png)


<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
其实还有一种方法，官方已经给了你接口，这种也属于纯UI表现，非常适合做UI的选定样式，但数据上没有缓存UI状态。
</chatmessage>

![](..%2F..%2Fassets%2Flistview023.jpg)

<gifwithbutton src="../../../assets/unrealgif/hpup47.gif"/>

###  RegenerateAllEntries && RequestRefresh 区别？

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
RegenerateAllEntries顾名思义，属性当前视图显示的所有UI，而RequestRefresh则反直觉，
是刷新未显示的部分数据，不会直接刷新当前显示的数据。
</chatmessage>