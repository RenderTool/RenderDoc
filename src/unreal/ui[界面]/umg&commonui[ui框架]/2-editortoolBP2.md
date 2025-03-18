---
title: Umg2.编辑器工具控件样式DetailsView
order: 2
category:
  - unreal
---

![本章概要](..%2F..%2Fassets%2Fdetails.png)

<chatmessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40" >
上一篇我们介绍了两种编辑器工具蓝图：<br>
1.编辑器工具蓝图：ActorActionUtility|AssetActionUtility<br>
2.编辑器蓝图控件
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
没错，这一篇咱们重点关注一下编辑器蓝图工具
</chatmessage>

### 编辑器工具控件

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
可是对比官方demo做的咱这个界面也太丑了！
</chatmessage>

![咱做的](..%2F..%2Fassets%2Fabutton.png)

![官方的](..%2F..%2Fassets%2FUMGGF.jpg)

<chatmessage avatar="../../../assets/emoji/new9.png" :avatarWidth="40" alignLeft >
安排
</chatmessage>

## DetailsView

<chatmessage avatar="../../../assets/emoji/new9.png" :avatarWidth="40" alignLeft >
先检查官方的MovieRender有没有派生C++类。
</chatmessage>

![](..%2F..%2Fassets%2Fpscpp.png)

<chatmessage avatar="../../../assets/emoji/new3.png" :avatarWidth="50" >
好耶，目前来说没毛病！是纯蓝图。
</chatmessage>

<chatmessage avatar="../../../assets/emoji/new7.png" :avatarWidth="40" alignLeft >
别高兴太早，组件确实是纯蓝图，里面的数据源是不是就不知道了！
</chatmessage>

<chatmessage avatar="../../../assets/emoji/new4.png" :avatarWidth="40" alignLeft >
而且第一印象并不乐观！并没有我们想象超复杂样式UMG
</chatmessage>

![](..%2F..%2Fassets%2Fumgmovie.png)

<chatmessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40" >
有没有可能是数据驱动呢？
</chatmessage>

<chatmessage avatar="../../../assets/emoji/new8.png" :avatarWidth="50" alignLeft >
数据驱动是必然了！
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (4).png" :avatarWidth="40" >
可是！这个蓝图怎么回事！一个预构造函数，也没看到他UI生成逻辑啊！
</chatmessage>

![](..%2F..%2Fassets%2Fpreconstruct.jpg)

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="50" alignLeft >
不过一个细节咱应该注意到了，层级组件中多了一个叫DetailsView的组件
</chatmessage>

![](..%2F..%2Fassets%2Fdetialview.png)

<chatmessage avatar="../../../assets/emoji/bqb (4).png" :avatarWidth="40" >
问题又来了！这东西的属性里除了一个<span style="color: #c0392b">Still Settings</span>也没别的东西啊！
</chatmessage>

![](..%2F..%2Fassets%2Fdtview.jpg)

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
别急，既然他写了一定有他的来源！
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (4).png" :avatarWidth="40" >
我全局搜了！没有！
</chatmessage>

![](..%2F..%2Fassets%2Fstill.jpg)

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
你注意到一个细节没有！这个是个标题我们试着从他的内容出发。
</chatmessage>

![](..%2F..%2Fassets%2Ftitle.png)

<chatmessage avatar="../../../assets/emoji/bqb (3).png" :avatarWidth="40" >
我看到他了！而且这个Still Settings是类别名！
</chatmessage>

![](..%2F..%2Fassets%2Fview222.png)

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
ok，咱们可以在我们自己的蓝图中做个简单测试。
</chatmessage>

![](..%2F..%2Fassets%2FDETAIUMG.png)

<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40" >
这里显示未定义对象！
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
别急，如果按照之前的表现，这里要<span style="color: #c0392b">显示的类型</span>应该对应我们的<span style="color: #c0392b">类目标题</span>
</chatmessage>

![](..%2F..%2Fassets%2Fbehavior.jpg)

<chatmessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40" >
还是显示未定义对象！
</chatmessage>

![](..%2F..%2Fassets%2Frunview.png)

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
还记之前的预构造蓝图吗？连上试试！
</chatmessage>

![](..%2F..%2Fassets%2Fbpview.jpg)

<chatmessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40" >
还是没反应！
</chatmessage>

![](..%2F..%2Fassets%2Ffont.png)

### 多语言注意事项

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
试试看用英文名
</chatmessage>

![](..%2F..%2Fassets%2Fout.jpg)

<chatmessage avatar="../../../assets/emoji/bqb (5).png" :avatarWidth="40" >

绝了！可是这个`显示的类型`和`显示的属性`有什么区别吗？

</chatmessage>

![](..%2F..%2Fassets%2Ftype.jpg)

<chatmessage avatar="../../../assets/emoji/new2.png" :avatarWidth="50" alignLeft >
试试看不就知道了！
</chatmessage>

![](..%2F..%2Fassets%2Fdetai223.jpg)

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

![](..%2F..%2Fassets%2Fdetails.png)

<chatmessage avatar="../../../assets/emoji/new3.png" :avatarWidth="50" >
6！难不成是因为原始变量是英文，本地化成中文，这个组件只认原始数据,后面我们用中文变量命名就能正常显示。
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="50" alignLeft >
应该就是这样
</chatmessage>

<chatmessage avatar="../../../assets/emoji/new3.png" :avatarWidth="50" >
这么说来和之前的ActorActionUtility|AssetActionUtility弹出来的结果很相似啊！
</chatmessage>

![](..%2F..%2Fassets%2Flodwindow.png)

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

![](..%2F..%2Fassets%2Ffunctionchage.png)

<gifwithbutton src="../../../assets/unrealgif/gifprint.gif"/>

<chatmessage avatar="../../../assets/emoji/new8.png" :avatarWidth="50" >
委托?咱们花了大篇幅将的那个委托？
</chatmessage>

![](..%2F..%2Fassets%2Fwt.png)

<chatmessage avatar="../../../assets/emoji/new1.png" :avatarWidth="45" alignLeft >
是的，说到委托，我开始对这个组件的代码感兴趣了！
</chatmessage>

### 代码分析

![](..%2F..%2Fassets%2Ffunctionname.png)

```cpp
-UDetailsView : public UPropertyViewBase, public FNotifyHook
  -UPropertyViewBase : public UWidget	
```

```cpp
    //①一个参数的动态多播委托
    /** Sets a delegate called when the property value changes */
    DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnPropertyValueChanged, FName, PropertyName);

    //②这个就是蓝图事件函数节点
    /** Sets a delegate called when the property value changes */
    UPROPERTY(BlueprintAssignable, Category = "View|Event")
    FOnPropertyValueChanged OnPropertyChanged;

    //③ 代理函数声明
	void OnPropertyChangedBroadcast(FName PropertyName);
	
	//④代理函数定义
	void UPropertyViewBase::OnPropertyChangedBroadcast(FName PropertyName)
    { 
        OnPropertyChanged.Broadcast(PropertyName);
    }
	
	//⑤使用者调用
	void UDetailsView::NotifyPostChange(const FPropertyChangedEvent& PropertyChangedEvent, FProperty* PropertyThatChanged)
    {
        FNotifyHook::NotifyPostChange(PropertyChangedEvent, PropertyThatChanged);
    
        // 获取发生变化的属性的名称
        FName PropertyName = PropertyThatChanged ? PropertyThatChanged->GetFName() : NAME_None;
    
        // 触发委托广播，通知已注册的监听者属性已经发生了变化
        OnPropertyChangedBroadcast(PropertyName);
    }

```

1. **`DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam` 宏：**
    - 这是一个宏，用于声明带有一个参数的动态多播委托。`FOnPropertyValueChanged` 是委托的类型名称，表示当某个属性值发生变化时触发的事件。在这里，`FName` 是参数类型，表示属性的名称。

    ```cpp
    DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnPropertyValueChanged, FName, PropertyName);
    ```

2. **`UPROPERTY(BlueprintAssignable)` 宏：**
    - 这是UE宏，用于声明一个在蓝图中可绑定的委托实例。`OnPropertyChanged` 是类的成员变量，它是 `FOnPropertyValueChanged` 委托的实例。

    ```cpp
    UPROPERTY(BlueprintAssignable, Category = "View|Event")
    FOnPropertyValueChanged OnPropertyChanged;
    ```

3. **委托函数 `OnPropertyChangedBroadcast`：**
    - 这是一个成员函数，用于在属性值发生变化时触发委托的广播。该函数接受一个类型为 `FName` 的参数 `PropertyName`，表示发生变化的属性的名称。

    ```cpp
    void OnPropertyChangedBroadcast(FName PropertyName);
    ```

4. **函数实现 `UPropertyViewBase::OnPropertyChangedBroadcast`：**
    - 这是 `OnPropertyChangedBroadcast` 函数的具体实现。在这里，通过 `OnPropertyChanged.Broadcast(PropertyName);` 触发委托的广播，通知已注册的监听者（可能是蓝图中的事件节点或其他代码）属性值已经发生了变化。

    ```cpp
    void UPropertyViewBase::OnPropertyChangedBroadcast(FName PropertyName)
    {
        OnPropertyChanged.Broadcast(PropertyName);
    }
    ```

5. **`UDetailsView::NotifyPostChange` 的使用者：**
    - `NotifyPostChange` 是一个虚函数，并在 `UDetailsView` 中被重写。以下是声明：

    ```cpp
    virtual void NotifyPostChange(const FPropertyChangedEvent& PropertyChangedEvent, FProperty* PropertyThatChanged) override;
    ```
