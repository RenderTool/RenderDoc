---
title: ED03.自定义图标
order : 21
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">

Dady!上一节留的坑，我们做的`AssetDefinition` 该怎么自定义图标呢？

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
咱们先来了解一下编辑器内有几种图标
</chatmessage>

---
##  **软件（software）平台图标**

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
无需多言，指打包好桌面显示的图标。
</chatmessage>

![](..%2Fassets%2Fsmallpic4.jpg)

---
##  **插件（Plugin）图标**

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
不会吧不会吧！还有人不知道怎么换插件图标？
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
我！我！那我问你！那我我问你！
</chatmessage>

![](..%2Fassets%2Fpluginicon002.jpg)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

直接用一张128x128的png替换掉其中的默认图片即可

</chatmessage>

![](..%2Fassets%2FIcon128.jpg)

```cpp
XXX\Plugins\XXX\Resources\Icon128.png
```
---

### 图标 和 缩略图

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
在下一步前，咱们必须简要的区分一下图标和缩略图
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">

图标是`IconBrush` 而 缩略图是 `ThumbnailBrush`

</chatmessage>

---

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
内容浏览器里展示的都叫缩略图
</chatmessage>

![](..%2Fassets%2Fsmallpic14.jpg)

## **扩展点图标**

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
当然这些地方的都是图标
</chatmessage>

- **场景中的 Actor 右键菜单**
- **内容浏览器（Content Browser）空白处右键菜单**
- **内容浏览器（Content Browser）中的资产（Asset）右键菜单**
- **工具栏按钮**

![](..%2Fassets%2Fsmallpic5.png)

---

##  **资产类型（Asset Type）图标**

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

在内容浏览器`（Content Browser）`右键列表中用的都是`IconBrush`

</chatmessage>

![](..%2Fassets%2Fcin001.jpg)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
上一章中，貌似咱们并没有改成功资产类的图标呀！🐶
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

是的，因为咱的`UDataDefinition : public UPrimaryDataAsset`本质是数据资产，系统会默认给定一套图标。

</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
那该怎么自定义啊！
</chatmessage>

## **自定义 `FSlateStyleSet` 来注册自定义图标**

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

核心步骤是通过 `Slate样式表` 实现

</chatmessage>

---

### 1. **引入模块**

```csharp
// Build.cs
PrivateDependencyModuleNames.AddRange(new string[]
{
    "SlateCore",
    "Projects" 
});
```

---

### 2.1 **创建 `FSlateStyleSet` 并加载自定义图标**

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">

记得在插件对应的`Resources`中放入图标，并且颜色推荐是白色的，底图是透明的。

</chatmessage>

![](..%2Fassets%2Fsmallpi2.jpg)

---

### 2.2 单例写法（不推荐但可以了解）

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

以下是参考`ComboGraph`的单例写法

</chatmessage>

```cpp
#pragma once

#include "CoreMinimal.h"
#include "Interfaces/IPluginManager.h"
#include "Styling/SlateStyle.h"
#include "Styling/SlateStyleRegistry.h"

#define IMAGE_BRUSH(RelativePath, ...) FSlateImageBrush(RootToContentDir(RelativePath, TEXT(".png") ), __VA_ARGS__)

class FDataSystemEditorStyle : public FSlateStyleSet
{
public:
	FDataSystemEditorStyle() : FSlateStyleSet("DataSystemEditorStyle")
	{
		const FVector2D Icon16x16(16.f, 16.f);
		const FVector2D Icon20x20(20.f, 20.f);
		const FVector2D Icon40x40(40.f, 40.f);
		const FVector2D Icon64x64(64.f, 64.f);
		const FVector2D Icon128x128(128.f, 128.f);

		SetContentRoot(IPluginManager::Get().FindPlugin("DataSystem")->GetBaseDir() / TEXT("Resources"));

		Set("ClassIcon.DataDefinition", new IMAGE_BRUSH("Icons/AssetIcons/DataSystem_x16", Icon16x16));
		Set("ClassThumbnail.DataDefinition", new IMAGE_BRUSH("Icons/AssetIcons/DataSystem_x64", Icon64x64));


		FSlateStyleRegistry::RegisterSlateStyle(*this);
	}

	static FDataSystemEditorStyle& Get()
	{
		static FDataSystemEditorStyle Inst;
		return Inst;
	}

	~FDataSystemEditorStyle()
	{
		FSlateStyleRegistry::UnRegisterSlateStyle(*this);
	}
};

#undef IMAGE_BRUSH

```

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
Baba怕你不知道，这里重点说一下我们的关注点
</chatmessage>

```cpp
Set("ClassIcon.XXX类", new IMAGE_BRUSH("Icons/AssetIcons/DataSystem_x16", Icon16x16));
```

> 其中XXX类就是你自己写的类去掉U

![](..%2Fassets%2Fsmallpi5.png)

---

### 2.3 注册使用

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
菜准备好了，自然需要有人来烧。这个烧菜的人就是我们的插件模块本身。
</chatmessage>

```cpp
//利用共享指针管理
private:
    TSharedPtr<FDataSystemEditorStyle> StyleInstance;
    
#include "DataSystemEditor.h"

#include "DataSystemEditorStyle.h"

#define LOCTEXT_NAMESPACE "FDataSystemEditorModule"

void FDataSystemEditorModule::StartupModule()
{
	// 共享指针方式管理 Style 实例
	StyleInstance = MakeShared<FDataSystemEditorStyle>();
}

void FDataSystemEditorModule::ShutdownModule()
{
	// 释放 Style 实例
	StyleInstance.Reset();
}
#undef LOCTEXT_NAMESPACE
    
IMPLEMENT_MODULE(FDataSystemEditorModule, DataSystemEditor)
```

---

### **3. 官方模板** （推荐做法）

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
官方也给了一些模板，这一点非常棒，目前的趋势就是越来越傻瓜化智能化。
</chatmessage>

---


### 3.1 创建模板

![](..%2Fassets%2Ftemp001.jpg)

---

### 3.2 模板构成

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
模板包括了模块本身、命令、样式
</chatmessage>

![](..%2Fassets%2Ftemp002.jpg)

---

### 3.3 实际例子

```cpp
#pragma once

#include "Styling/SlateStyle.h"

class FDataSystemEditorStyle
{

public:
	static void Initialize();
	
	static void Shutdown();
	
	static void ReloadTextures();
	
	static const ISlateStyle& Get();
	
	static FName GetStyleSetName();

private:
	static TSharedRef<class FSlateStyleSet> Create();

private:
	static TSharedPtr<class FSlateStyleSet> StyleInstance;
};

```

```cpp
#include "DataSystemEditorStyle.h"
#include "Framework/Application/SlateApplication.h"
#include "Styling/SlateStyleRegistry.h"
#include "Interfaces/IPluginManager.h"


#define RootToContentDir Style->RootToContentDir
#define IMAGE_BRUSH(RelativePath, ...) FSlateImageBrush(RootToContentDir(RelativePath, TEXT(".png") ), __VA_ARGS__)

TSharedPtr<FSlateStyleSet> FDataSystemEditorStyle::StyleInstance = nullptr;

//初始化模块
void FDataSystemEditorStyle::Initialize()
{
	if (!StyleInstance.IsValid())
	{
		StyleInstance = Create();
		FSlateStyleRegistry::RegisterSlateStyle(*StyleInstance);
	}
}

//析构模块
void FDataSystemEditorStyle::Shutdown()
{
	FSlateStyleRegistry::UnRegisterSlateStyle(*StyleInstance);
	ensure(StyleInstance.IsUnique());
	StyleInstance.Reset();
}

void FDataSystemEditorStyle::ReloadTextures()
{
	if (FSlateApplication::IsInitialized())
	{
		FSlateApplication::Get().GetRenderer()->ReloadTextureResources();
	}
}

//获取样式名称
FName FDataSystemEditorStyle::GetStyleSetName()
{
	static FName StyleSetName(TEXT("DataSystemEditorStyle"));
	return StyleSetName;
}

//图标尺寸定义
const FVector2D Icon16x16(16.0f, 16.0f);
const FVector2D Icon20x20(20.0f, 20.0f);
const FVector2D Icon40x40(40.0f, 40.0f);
const FVector2D Icon64x64(64.f, 64.f);
const FVector2D Icon96x96(96.f, 96.f);

//注册图标

TSharedRef< FSlateStyleSet > FDataSystemEditorStyle::Create()
{
	TSharedRef< FSlateStyleSet > Style = MakeShareable(new FSlateStyleSet("DataSystemEditorStyle"));
	Style->SetContentRoot(IPluginManager::Get().FindPlugin("DataSystem")->GetBaseDir() / TEXT("Resources"));
	Style-> Set("ClassIcon.DataMatching", new IMAGE_BRUSH("Icons/AssetIcons/DataSystem_x16", Icon20x20));
	Style-> Set("ClassThumbnail.DataMatching", new IMAGE_BRUSH("Icons/AssetIcons/DataSystem_x64", Icon64x64));
	Style->Set("DataSystemEditor.OpenPluginWindow", new IMAGE_BRUSH(TEXT("Icon128"), Icon96x96));
	return Style;
}

//Get方法
const ISlateStyle& FDataSystemEditorStyle::Get()
{
	return *StyleInstance;
}

#undef IMAGE_BRUSH

```

### 3.4 注册使用

```cpp
void FDataSystemEditorModule::StartupModule()
{
	FDataSystemEditorStyle::Initialize();
	FDataSystemEditorStyle::ReloadTextures();

	PluginCommands = MakeShareable(new FUICommandList);

	UToolMenus::RegisterStartupCallback(
		FSimpleMulticastDelegate::FDelegate::CreateRaw(this, &FDataSystemEditorModule::RegisterMenus));
}

void FDataSystemEditorModule::ShutdownModule()
{
	UToolMenus::UnRegisterStartupCallback(this);

	UToolMenus::UnregisterOwner(this);

	FDataSystemEditorStyle::Shutdown();
}
```

---

### 4. 处理细节

---

### 4.1 图集尺寸

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

以下是参考`GASCompanion`的尺寸

</chatmessage>

```cpp
const FVector2D Icon16x16(16.0f, 16.0f);
const FVector2D Icon20x20(20.0f, 20.0f);
const FVector2D Icon40x40(40.0f, 40.0f);
const FVector2D Icon180x100(180.0f, 100.0f);
const FVector2D Icon256x256(256.0f, 256.0f);
```

---

### 4.1 图集格式

```cpp
#define TTF_FONT( RelativePath, ... ) FSlateFontInfo( Style->RootToContentDir( RelativePath, TEXT(".ttf") ), __VA_ARGS__ )
#define OTF_FONT( RelativePath, ... ) FSlateFontInfo( Style->RootToContentDir( RelativePath, TEXT(".otf") ), __VA_ARGS__ )
#define JPG_IMAGE_BRUSH( RelativePath, ... ) FSlateImageBrush(Style->RootToContentDir( RelativePath, TEXT(".jpg")), __VA_ARGS__ )

//....

#undef TTF_FONT
#undef OTF_FONT
#undef JPG_IMAGE_BRUSH
```

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
可以用系统的一些方法，比如：加载SVG。
</chatmessage>


```cpp
#include "Styling/SlateStyleMacros.h"
Style->Set("Test.PluginAction", new IMAGE_BRUSH_SVG(TEXT("PlaceholderButtonIcon"), Icon20x20));
```

---

### 4.2 优先级

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">

有趣的是，我加了这个模块后重写UAssetDefinitionDefault中的`GetThumbnailBrush` 还是会生效！

</chatmessage>

![](..%2Fassets%2Fsmallpic3.jpg)

```cpp
//UAssetDefinition_DataDefinition : public UAssetDefinitionDefault
virtual const FSlateBrush* GetThumbnailBrush(const FAssetData& InAssetData, const FName InClassName) const override final
{
    return FAppStyle::Get().GetBrush("ContentBrowser.AssetTreeFolderOpen");  
}
```

---

##  **工具栏图标（Toolbar Icons）**

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
集成常用工具按钮，例如：
</chatmessage>

![](..%2Fassets%2FToolbaricon.png)

---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">

可是！我该怎么在这个`ToolBar`上或者右键菜单上注册我自己的按钮呢？

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
欲知后事如何，且听下回分解。
</chatmessage>