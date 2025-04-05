---
title: ED02.内容浏览器右键显示自定义资产
order : 20
category:
  - u++
---
## 省流

>建议看完下面的教程再回头食用

![](..%2Fassets%2Ftemp004.svg)

## 介绍

### **什么是资产？**

>虚幻引擎项目中的所有内容片段都是 资产 。你可以将资产视为构建块，用于创建游戏和应用程序。


### **对比 `UObject`|`Asset `| `.uasset`**

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">

`UObject` 本质上是对象，`.uasset` 是不是只是一个包？

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

`UObject` 是 Unreal 的一切对象的基类，在其实例化后我们称为`xxx对象实例`。而` .uasset `本质上是一个存储对象数据的格式。

</chatmessage>

---

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">

可能我问的方法有误！我当然知道`.uasset`是一种存储格式，我指的是内容浏览器右键新建的资产是什么？

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

在 Unreal Engine 中，资产是具有持久属性的对象，例如我们熟悉的插件动画蓝图、Actor等。也就说你所谓的右键新建`xxx动画蓝图`。

</chatmessage>

1. **`UObject` 是运行时对象**，它们在内存中存在，并且支持实例化。
2. **`.uasset` 只是存储 `UObject` 的数据**，它本身不是对象，必须被加载。
3. **编辑器中的 `Asset`** 是 `.uasset` 的 UI 表现形式，方便用户管理资源。
4. **运行时必须手动加载 `.uasset` 并实例化 `UObject`** 才能使用。

> 本章不做详细展开里面的细节，后面有专门的篇章详细介绍如何将 `UObject` 存为 `.uasset`，以及一些注释事项。

<chatmessage avatar="../../assets/emoji/bqb (5).png" :avatarWidth="40">
可是！Datatable这种，为什么不需要在游戏里NewObject就能用呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

之所以不需要` NewObject<UDataTable>()`，是因为它的 `LoadObject()` 方式实际上是 将` .uasset` 里的数据反序列化成 `UDataTable` 实例，然后直接返回。

</chatmessage>

>📌 换句话说，`LoadObject<UDataTable>()` 本身就包含了 “实例化”  + “加载数据” 的过程，所以不需要手动 `NewObject`。

---

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我自己写的C++类几乎都是通过蓝图选择一个父类派生的！能不能直接注册到内容浏览器的右键菜单上呢？
</chatmessage>


![](..%2Fassets%2Fcaidan001.jpg)


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

你想直接在内容浏览器的右键菜单上创创建自己的类是吧，可以用`AssetDefinition`

</chatmessage>

![](..%2Fassets%2Fcaidan.jpg)

## **AssetDefinitionDefault**


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

`AssetDefinition` 取代了旧的 `FAssetTypeActions_Base`，用于管理自定义资源的外观和行为。

</chatmessage>

### **0. 模块配置**

![](..%2Fassets%2Fcaidan003.jpg)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
这里你的插件一定要配置成Editor
</chatmessage>

```cpp
"Modules": [
{
	"Name": "DataSystemEditor",
	"Type": "Editor",
	"LoadingPhase": "PostEngineInit"
}
```

### **1. 引入模块**

```cpp
 PrivateDependencyModuleNames.AddRange(
  new string[]
  {
    "AssetDefinition",
  }
 );
```

### **2. 新建工厂类` UXXXX : public UFactory`**


::: code-tabs#language

@tab UDataDefinitionFactory.h

```cpp
#pragma once

#include "CoreMinimal.h"
#include "Factories/Factory.h"
#include "DataDefinitionFactory.generated.h"

/**
 * 用于内容浏览器新建UDataDefinition资产
 */
UCLASS()
class DATASYSTEMEDITOR_API UDataDefinitionFactory : public UFactory
{
	GENERATED_BODY()
	
public:
	
	UDataDefinitionFactory();
	
	//~UFactory interface
	virtual UObject* FactoryCreateNew(UClass* InClass, UObject* InParent, FName InName, EObjectFlags Flags, UObject* Context, FFeedbackContext* Warn) override;
	virtual bool ShouldShowInNewMenu() const override;
	virtual FText GetDisplayName() const override;
	virtual FText GetToolTip() const override;
	virtual FString GetDefaultNewAssetName() const override;
	//~End of UFactory interface

};

```

@tab UAssetDefinition_DataDefinition.cpp
```cpp

//  copyright by sigaohe

#include "AssetTypes/DataDefinitionFactory.h"

#include "DataDefinition.h"

#define LOCTEXT_NAMESPACE "UDataDefinitionFactory"

UDataDefinitionFactory::UDataDefinitionFactory()
{
	bCreateNew = true;
	bEditAfterNew = true;
	SupportedClass = UDataDefinition::StaticClass();
}

UObject* UDataDefinitionFactory::FactoryCreateNew(UClass* InClass, UObject* InParent, FName InName, EObjectFlags Flags,
                                                  UObject* Context, FFeedbackContext* Warn)
{
	check(InClass->IsChildOf(UDataDefinition::StaticClass()));
	return NewObject<UDataDefinition>(InParent, InClass, InName, Flags | RF_Transactional, Context);;
}

bool UDataDefinitionFactory::ShouldShowInNewMenu() const
{
	return true;
}

FText UDataDefinitionFactory::GetDisplayName() const
{
	return LOCTEXT("DataDefinition_DisplayName", "Data Definition");
}

FText UDataDefinitionFactory::GetToolTip() const
{
	return LOCTEXT("DataDefinition_Tooltip", "Data Definition.");
}

FString UDataDefinitionFactory::GetDefaultNewAssetName() const
{
	return FString(TEXT("NewDataDefinition"));
}

#undef LOCTEXT_NAMESPACE

```
:::

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">

这里有个巨坑！自定义组千万别重写 `virtual uint32 GetMenuCategories() const override;`

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

是的，如果这里重写了分类，那么`UAssetDefinitionDefault`中定义的会被这个覆盖。

</chatmessage>

> 编辑器默认分类

```cpp
EAssetCategoryPaths::Type
```

![](..%2Fassets%2FEAssetCategoryPaths.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
Epic DADA推荐不要过度扩展，尽量保持简洁。
</chatmessage>

### **3. 创建`UAssetDefinitionDefault`子类**


::: code-tabs#language

@tab UAssetDefinition_DataDefinition.h

```cpp
UCLASS()
class DATASYSTEMEDITOR_API UAssetDefinition_DataDefinition : public UAssetDefinitionDefault
{
	GENERATED_BODY()

public:
	//传入自定义分组
	UAssetDefinition_DataDefinition();
	
	//~UAssetDefinition interface
	virtual FText GetAssetDisplayName() const override final;
	virtual TSoftClassPtr<UObject> GetAssetClass() const override final;
	virtual FLinearColor GetAssetColor() const override final;
	virtual FText GetAssetDescription(const FAssetData& AssetData) const override final;
	virtual TConstArrayView<FAssetCategoryPath> GetAssetCategories() const override final;
	
};

```
@tab UAssetDefinition_DataDefinition.cpp
```cpp

#define LOCTEXT_NAMESPACE "UAssetDefinition_DataDefinition"

UAssetDefinition_DataDefinition::UAssetDefinition_DataDefinition()
{
}

FText UAssetDefinition_DataDefinition::GetAssetDisplayName() const
{
    // 设置内容浏览器中资源的名字
	return LOCTEXT("AssetTypeActions_DataDefinition", "Data Definition");
}

TSoftClassPtr<UObject> UAssetDefinition_DataDefinition::GetAssetClass() const
{
    // 设置内容浏览器中资源的类
	return UDataDefinition::StaticClass();
}

FLinearColor UAssetDefinition_DataDefinition::GetAssetColor() const
{
    // 设置内容浏览器中资源的颜色
	return FLinearColor(FColor(201, 29, 85));
}

FText UAssetDefinition_DataDefinition::GetAssetDescription(const FAssetData& AssetData) const
{
	return LOCTEXT("AssetTypeActions_DataDefinitionDesc", "Data Definition.");
}

TConstArrayView<FAssetCategoryPath> UAssetDefinition_DataDefinition::GetAssetCategories() const
{
	static const FAssetCategoryPath Categories[] = {FText::FromString("DataSystem")};
	return Categories;
}

#undef LOCTEXT_NAMESPACE

```
:::


### **4. 组别**

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft >

之前 `FAssetTypeActions_Base` 需用`AssetTools`注册新的组,在`UAssetDefinitionDefault` 中只需重写`GetAssetCategories` 虚函数即可。

</chatmessage>


```cpp
TConstArrayView<FAssetCategoryPath> UAssetDefinition_DataDefinition::GetAssetCategories() const
{
	static const FAssetCategoryPath Categories[] = {FText::FromString("DataSystem")};
	return Categories;
}
```

![](..%2Fassets%2Fcaidan.jpg)

>之前的方法

```cpp
IAssetTools& AssetTools = 
FModuleManager::LoadModuleChecked<FAssetToolsModule>("AssetTools").Get();

YourCustomCategory = 
AssetTools.RegisterAdvancedAssetCategory(FName(TEXT("YourAssets")),
 FText::FromString(TEXT("Your Custom Assets")));
```

### **5.图标|缩略图**



<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft >

注意这里的`GetThumbnailBrush`和`GetIconBrush`的区别

</chatmessage>

>没改前

![](..%2Fassets%2Ficons001.png)

>修改后

![](..%2Fassets%2Fsmallpic.jpg)


<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我懂了！浏览器看到的是缩略图，而右键菜单显示的是类的图标。
</chatmessage>


```cpp
//缩略图
virtual const FSlateBrush* GetThumbnailBrush(const FAssetData& InAssetData, const FName InClassName) const override final
{
    return FAppStyle::Get().GetBrush("ContentBrowser.AssetTreeFolderOpen");  
};
//图标 注意这里只是随便写的，实际并不会起作用。因为我们继承的是主资产类，要覆盖需要自定义一个FSlateStyleSet
virtual const FSlateBrush* GetIconBrush(const FAssetData& InAssetData, const FName InClassName) const override final
{
    return FAppStyle::Get().GetBrush("ContentBrowser.AssetTreeFolderOpen");  
}
```

> 我们给的测试类是`UDataDefinition : public UPrimaryDataAsset`,本质是资产类，如果不自定义图标是无法覆盖的。
下一章中会有更详细的介绍,这里咱们先不管这问题。

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
话说你这个图标路径怎么确定的？
</chatmessage>

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft >
无需我多言了吧！
</chatmessage>


![](..%2Fassets%2Fsmallpic2.png)


### **6.自动注册**

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
我有个问题！这个类不需要在模块里注册吗？
</chatmessage>

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft >
是的，这是自动注册的。
</chatmessage>

## 源码

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft >
官方大大贴心的给我们写了一大段迁移注释，这里翻译一下。
</chatmessage>

## UAssetDefinition

---

>Asset Definitions (UAssetDefinitionDefault) are a replacement to the Asset Actions (FAssetTypeActions_Base) system. The reasons for the replacement are multitude, but the highlights are,  

**Asset Definitions（如 UAssetDefinitionDefault）是用来取代旧版 Asset Actions（如 FAssetTypeActions_Base）的新系统。替换的原因有很多，主要有以下几点：**

---

>Asset Definitions no longer do things like provide a GetActions function, the replacement for this is you using the new UToolMenu extension system to register actions for the assets, an example is in this document. A lot of the APIs have been tweaked and cleaned up to make them easier to upgrade in the future, a lot of the original API for Asset Actions were added one at a time, and several of them could be combined in simpler ways. Another benefit is soon we might be able to make the AssetTools module no longer a circular dependency.  

**Asset Definitions 不再提供类似 GetActions 的函数，替代方案是使用新的 UToolMenu 扩展系统来注册资产相关的操作（本文档中有示例）。许多 API 经过调整和清理，使得未来升级更容易——旧版 Asset Actions 的 API 是零散添加的，而新版可以通过更简单的方式整合。另一个好处是，未来可能解决 AssetTools 模块的循环依赖问题。**

---

>All of this is in service to what was previously impossible. To be able to right click on assets in the Content Browser and NOT have the asset and every asset it knew about load on right click, this previous impossible to escape byproduct slowed down working in the editor constantly because things that didn’t require opening the asset became necessary, and some assets could load *A LOT* of other content.  

**这些改进都是为了解决旧系统无法避免的问题：在内容浏览器中右键点击资产时，旧系统会强制加载该资产及其关联的所有资源，导致编辑器卡顿。例如，某些资产（如复杂蓝图）会连带加载大量内容，而新版实现了“按需加载”。**

---

>Unfortunately I can’t prevent people from backsliding, at least for now. Even after fixing the APIs to not require loading, people need to be cleverer (Use Asset Tag Data) in how they provide right click options for assets. But to help, you can run the editor with -WarnIfAssetsLoaded on the command line. I’ve added a new utility class to the engine called, FWarnIfAssetsLoadedInScope, it causes notifications with callstacks to be popped up telling you what code is actually responsible for any asset loads within earmarked scopes that should NOT be loading assets.  

**遗憾的是，目前还无法完全阻止开发者沿用旧习惯。即使 API 已经优化，开发者仍需更聪明地设计右键菜单选项（例如使用 Asset Tag Data）。为了辅助调试，你可以在命令行启动编辑器时加上 `-WarnIfAssetsLoaded` 参数。引擎新增的 `FWarnIfAssetsLoadedInScope` 工具类会在指定作用域内检测意外加载的资产，并通过弹窗显示调用堆栈。**

---

>Backwards Compatibility: The new system is fully* backwards compatible. Asset Definitions are registered with the old Asset Tools (IAssetTools::RegisterAssetTypeActions) this is done through the FAssetDefinitionProxy. Similarly, Asset Actions (FAssetTypeActions_Base) are registered with the Asset Definition Registry with an Asset Definition Proxy (UAssetDefinition_AssetTypeActionsProxy).  

**向后兼容性：新系统完全*向后兼容。Asset Definitions 通过 FAssetDefinitionProxy 注册到旧版 Asset Tools（如 IAssetTools::RegisterAssetTypeActions）。反之，旧版 Asset Actions 也会通过 UAssetDefinition_AssetTypeActionsProxy 代理注册到新版 Asset Definition Registry。**

---

>When converting Asset Actions to AssetDefinitions and you’re trying to understand how to map a specific function to the new system it can be helpful to look at the equivalent function in FAssetDefinitionProxy.  

**迁移 Asset Actions 到 AssetDefinitions 时，若需了解某个旧函数如何对应到新系统，可参考 FAssetDefinitionProxy 中的等效实现。**

---

>IMPORTANT - You are no longer allowed to register multiple Asset Definitions for the same Asset Class. There were a very small number of people doing this to do some tricky things with filters which are no longer required. The new system will yell at you if you do this.  

**重要提示：禁止为同一个资产类注册多个 Asset Definitions！过去极少数开发者用此技巧实现过滤，现已不再需要。新系统会直接报错阻止此行为。**

---

>Registration: Registering your Asset Definition is no longer required like it was for Asset Actions. The UObjects are automatically registered with the new Asset Definition Registry (UAssetDefinitionRegistry).  

**注册：无需像旧版 Asset Actions 那样手动注册 Asset Definition。UObject 会自动注册到 Asset Definition Registry（UAssetDefinitionRegistry）。**

---

>You no longer need to register Categories for your Asset Definition, like you had to do with Asset Actions. Your Assets categories are just an array of FAssetCategoryPath. They have accelerator constructors to just take an FText for the main category, and the sub category (if there is one) which replaces the whole “GetSubMenus” function from Asset Actions. The new version can go further, with multiple sub menus and categories, but the UI isn’t set up for it yet.  

**分类注册：无需像 Asset Actions 那样手动注册分类。资产分类现在通过 FAssetCategoryPath 数组直接定义，支持主分类和子分类（替代旧版的 GetSubMenus）。新系统理论上支持多级子菜单，但 UI 尚未适配。**

---

>GetActions: The function GetActions no longer exists, the replacement is to somewhere put a self registering callback to register the UToolMenu extension, but you can just put it at the bottom of your .cpp for your AssetDefinition, that is where the others are. The template goes something like this...  

**GetActions 的替代方案：不再使用 GetActions 函数，改为通过自注册回调扩展 UToolMenu。代码示例模板如下（通常放在 .cpp 文件底部）：**

---

>It’s very important that you do not load the asset in your CanExecuteAction callback or in this self callback, you should save that until you finally get Executed. If you’re looking for examples, there are tons you'll find by searching for “namespace MenuExtension_”.  

**关键原则：禁止在 CanExecuteAction 回调或自注册回调中加载资产！实际加载操作应延迟到 Execute 阶段。代码示例可搜索“namespace MenuExtension_”。**

--- 

>GetFilterName & BuildBackendFilter: These functions have been replaced by BuildFilters. The new function is great, you can provide an array of filters that are available with this asset. So for example, Blueprints provide a filter for Blueprint Class, but they also provide the filters for Blueprint Interface, Blueprint Macro Library and Blueprint Function library, which are all UBlueprint assets, but differ based on Asset Tag data.  

**GetFilterName 和 BuildBackendFilter 的替代方案：由 BuildFilters 函数统一处理过滤逻辑。新版支持为同一资产类定义多个过滤器（例如蓝图资产可根据标签数据区分 Class、Interface 等类型）。**

--- 

## 拓展阅读

- [【UE5】使用Slate进行UI开发与编辑器拓展（七）： 自定义资产](https://zhuanlan.zhihu.com/p/607449232)
- [Customize your Unreal Class Icons](https://www.quodsoler.com/blog/customize-your-unreal-class-icons)