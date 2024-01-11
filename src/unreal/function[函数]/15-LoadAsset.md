---
title: F15.AssetLoad的几种方法
order : 15
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
资源加载的几种写法
</chatmessage>

## 前置

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

食用本文建议先了解`类和对象`的介绍！[直通车](10-PTRINUE.md)

</chatmessage>

## 异步

![](..%2Fassets%2Fload001.png)

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
这里主要记录一下UAssetManager的异步加载，异步加载一定要检查指针！对于高频加载操作千万别自己释放句柄！因为异步玩玩不是实时的，容易出现线程安全问题！
</chatmessage>

```cpp
//定义句柄
TSharedPtr<FStreamableHandle> Handle;

TSoftObjectPtr<UInventorySubConfig> SubConfig;//如果是软引用，需要先ToSoftObjectPath()，使用需要先ToSoftObjectPath重载版本

const UInventoryTotalConfig* SubConfig;//如果是对象指针，可以直接放进去,会有对应的重载版本

//委托
FStreamableDelegate SubConfigLoadDelegate = FStreamableDelegate::CreateUObject(this, &你的类::回调函数, Index);

//异步加载
Handle = UAssetManager::Get().GetStreamableManager().RequestAsyncLoad(SubConfig, SubConfigLoadDelegate);

Handle.isValid();//是否有效
Handle->HasLoadCompleted();//进度 
Handle.GetLoadedAsset();//获取资源
Handle.ReleaseHandle();//释放句柄

```

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
对应的蓝图节点
</chatmessage>

![](..%2Fassets%2Floadassets.png)

### 问题
<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
为什么资产加载后不需要实例化？
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" alignLeft >

Handle->GetLoadedAsset() 返回加载完成的资产，已经是实例化的对象，它返回都是 `uobject`。

</chatmessage>

![](..%2Fassets%2Fuobject.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
可是有时候我们会在这种资产中配置对象，这个对象为什么也被实例化了？
</chatmessage>

![](..%2Fassets%2Fslih.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" alignLeft >
你这个添加行为其实就是UE编辑器的实例化行为。比方说我们构造函数的ID是0，然后去蓝图中重写。
</chatmessage>

![](..%2Fassets%2Fpt.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" alignLeft >
如果说加载资产后才实例这个对象应该打印0，但实际是根据你蓝图中配置的5,这也验证了你加载资产是你蓝图派生的资产。
</chatmessage>

![](..%2Fassets%2Fprint5.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
难怪有时候我直接派生UObject的构造函数中打印会报错，因为引擎启动就加载所有UObject类，GEngine可能没实例化就调用导致指针悬挂问题。
</chatmessage>

## 同步

![](..%2Fassets%2Fload002.png)


## 参考文档

[https://www.cnblogs.com/shiroe/p/14710066.html](https://www.cnblogs.com/shiroe/p/14710066.html)

[官方文档](https://docs.unrealengine.com/5.3/zh-CN/asynchronous-asset-loading-in-unreal-engine/)


[官方直播](https://www.bilibili.com/video/BV1Mr4y1A7nZ/?t=1h03m33s&vd_source=fc61eb54bf3245afbff2be6b8c1ebfc2)

[https://qiita.com/Zi_su/items/81dc5b5e29a96ad2cecc](https://qiita.com/Zi_su/items/81dc5b5e29a96ad2cecc)

[https://jdelezenne.github.io/Codex/UE4/Assets%20Streaming.html](https://jdelezenne.github.io/Codex/UE4/Assets%20Streaming.html)