---
title: GP9.GF|GameplayFeature
order : 9
category:
  - u++
---

## GameplayFeature

游戏功能（Game Features） 和 模块化Gameplay（Modular Gameplay） 插件可以帮助开发人员为项目创建独立功能。

### 概念

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
啥意思？我可以理解成模块化开发？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
是这么个意思，借用大佬的图形象的解释一下。
</ChatMessage>

![](..%2Fassets%2Fgamefeture.jpg)

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
所以本质是插件+资产化？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
可以这么理解。Game Features后面我们简称GF，既然是插件，就得康康怎么用再来决定要不要用到开发流程上。
</ChatMessage>

## 实践

### 1.插件

![](..%2Fassets%2Fgf.png)

### 2.错误提示

![](..%2Fassets%2Ferrorgf.png)

### 3. 根据游戏模式设置特性

![](..%2Fassets%2Fgfpl2.png)

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
解释一下这里的当前状态的作用
</ChatMessage>

- 已安装:

![](..%2Fassets%2Finstallgf.png)

- 已注册:

![](..%2Fassets%2Fzc.png)

- 已加载:

![](..%2Fassets%2Floadgf.png)

- 激活:

![](..%2Fassets%2Factivegf.png)

### 4.目录结构

![](..%2Fassets%2Fgamefplugin.png)

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
可以看到和普通插件一样，拥有一个独立的Content,其他的资源该怎么加就怎么加。
</ChatMessage>

### 5.默认动作

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
下面一行就是要添加的动作，官方给了几个默认的行为
</ChatMessage>

![](..%2Fassets%2Factiongf.png)

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
以添加组件为例
</ChatMessage>

![](..%2Fassets%2Fzujian.png)

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
然后在对应的BP中添加对应的激活和关闭节点即可（依然是一个子系统）
</ChatMessage>

![](..%2Fassets%2Fbpgf.png)

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
当然官方的Lyra案例中写了个更多例子
</ChatMessage>

![](..%2Fassets%2Factionsou.jpg)

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
想要自定义也很简单，只需要继承UGameFeatureAction即可。
</ChatMessage>

![](..%2Fassets%2Fpublicaction.png)

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
当然，只有CPP中可以看到
</ChatMessage>

![](..%2Fassets%2Fcppgf.png)

### 6.gamefeature

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
接着是一些要扫描的资产，比如地图
</ChatMessage>

![](..%2Fassets%2Fmapgf.png)

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
值得注意的是，一但GF化后的地方就无法使用软引用的方法打开地图了。例如：我在UMG中创建打开一个地图。
</ChatMessage>

![](..%2Fassets%2Fwidgetmapuse.png)

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
会提示资产非法。
</ChatMessage>

![](..%2Fassets%2Fzcff.png)

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
你可以做一个对应的Action来添加地图，也可以模仿Lyra通过注册资产来加载。
</ChatMessage>

```cpp
FString UCommonSession_HostSessionRequest::GetMapName() const
{
	FAssetData MapAssetData;
	if (UAssetManager::Get().GetPrimaryAssetData(MapID, /*out*/ MapAssetData))
	{
		return MapAssetData.PackageName.ToString();
	}
	else
	{
		return FString();
	}
}
```
<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
直接用BP也可以
</ChatMessage>

![](..%2Fassets%2Fgetpr.png)

### 7.巨坑

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
一模一样的两个工程，有时候莫名其妙项目就看不到插件内容。一度以为自己写了什么BUG。
</ChatMessage>

![](..%2Fassets%2Fwithoutplugin.png)

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
后来发现即便是显示了设置插件内容如果看不到插件目录也要重新点开一遍！
</ChatMessage>

![](..%2Fassets%2Fkdiefc.png)

<ChatMessage avatar="../../assets/emoji/bqb (6).png" :avatarWidth="40" >
卧槽！
</ChatMessage>

![](..%2Fassets%2Fperfect.png)

## 参考链接
[官网](https://docs.unrealengine.com/5.0/zh-CN/game-features-and-modular-gameplay-in-unreal-engine/)
