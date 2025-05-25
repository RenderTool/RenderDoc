---
title: ED08.FAssetEditorToolkit|自定义资源编辑器
order : 25
category:
  - u++
---

## 省流

![](..%2Fassets%2Fasseteditor.svg)

## FAssetEditorToolkit

>一个封装了“UE 编辑器中资产编辑器所需基础功能（如菜单、工具栏、面板注册、布局、命令系统）的一套可扩展基类框架”。


<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

前面铺垫了这么久的`FAssetEditorToolkit`到底是个啥？我该怎么用呢？

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

当然是为了实现一些更加高级的功能，例如 蓝图图表、材质图表等，这种往往通过节点式的连线更加直观

</chatmessage>

![](..%2Fassets%2Fba6.jpg)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">
那我该怎么开始使用他呢?
</chatmessage>


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

还记得咱们之前定义的自定义资产的`AssetDefinitionDefault` 吗？里面有一个`OpenAssets` 函数

</chatmessage>

```cpp
	virtual EAssetCommandResult OpenAssets(const FAssetOpenArgs& OpenArgs) const override;
```

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">
这个我记得，这个和我们的资源编辑器有什么关系呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
有的！兄弟有的！你可以看看他默认的实现
</chatmessage>

```cpp

EAssetCommandResult UAssetDefinitionDefault::OpenAssets(const FAssetOpenArgs& OpenArgs) const
{
	if (GetAssetOpenSupport(FAssetOpenSupportArgs(OpenArgs.OpenMethod)).IsSupported)
	{
		FSimpleAssetEditor::CreateEditor(EToolkitMode::Standalone, OpenArgs.ToolkitHost, OpenArgs.LoadObjects<UObject>());
		return EAssetCommandResult::Handled;
	}

	return EAssetCommandResult::Unhandled;
}

```

---


### FAssetEditorToolkit | 派生类

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

我看了!好像是用`FSimpleAssetEditor` 创建了对应的资源编辑器！这个`FSimpleAssetEditor`是个啥？

</chatmessage>


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

`FSimpleAssetEditor`是官方帮我们封装的最简单的一个资源编辑器。下面看看有哪些官方大大给我们封装的模块：

</chatmessage>


### 1. `FAssetEditorToolkit`（基础类）

* 是所有资源编辑器的基础类，但本身不带复杂业务逻辑

```cpp
class FAssetEditorToolkit : public FBaseToolkit, public IAssetEditor
```

---

### 2. `FWorkflowCentricApplication`（工作流驱动型编辑器）

> 面向复杂的、多面板、多模式切换的编辑器（如蓝图编辑器）

```cpp
class FWorkflowCentricApplication : public FAssetEditorToolkit
```

* 内置 `FApplicationMode` 机制，可动态定义工作流

---

###  3. `FSimpleAssetEditorToolkit`（轻量级编辑器）

```cpp
class FSimpleAssetEditorToolkit : public FAssetEditorToolkit
```

* 无复杂的 ApplicationMode 和 Tab 分布结构
* 用于结构简单的编辑器，如只包含一个 Details 面板或 Preview 视图
* 通常通过创建一个简单布局，快速搭建 UI

---

### FAssetEditorToolkit | 编辑器面板

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">
基础的编辑器面板一般包括哪些?
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
为了方便你理解，BABA给你画个图。
</chatmessage>

![](..%2Fassets%2Fbar.png)

| 区域    | 名称         | 构建方式                            |
|-------|------------|---------------------------------|
| 顶部菜单栏 | Menu Bar   | `FMenuBarBuilder`               |
| 工具栏   | Tool Bar   | `FToolBarBuilder`               |
| 主要区域  | 中心面板       | `FTabManager` + `DockTab`       |
| 底部栏   | Status Bar | `SStatusBar` + `FStatusBarItem` |


## 开干

### 1. build.cs引入模块

```cpp
 PublicDependencyModuleNames.AddRange( new string[] {"UnrealEd",});
```

### 2. 创建 FAssetEditorToolkit

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

`FAssetEditorToolkit`本身是一个抽象类,并不会包含业务逻辑，习惯上我们可以再抽象一层用来实现业务接口。

</chatmessage>


```cpp

//抽象
class  ISuperComboGraphBlueprintEditor :
public FWorkflowCentricApplication{};

//具体派生实现类
class  FSuperComboGraphAssetsEditor : 
public ISuperComboGraphBlueprintEditor, public FGCObject,
public FNotifyHook, public FEditorUndoClient{ };
```

### 3. 基础接口


<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

`FAssetEditorToolkit`官方注释上说是抽象类，那必然有一些纯虚函数接口，哪些是必须实现的？为什么必须实现呢？

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
如果你不实现，系统无法正确识别你的编辑器是谁、如何命名窗口。
</chatmessage>

```cpp

    //唯一名称（内部识别名）。
	virtual FName GetToolkitFName() const override
	{
	    return FName("名字");
	      
	};	// Must implement in derived class!			
	
	//显示名称（用于标签栏 / 窗口标题等 UI 中）。
	virtual FText GetBaseToolkitName() const override
	{
	    return FName("标题名称");
	      
	};	// Must implement in derived class!		
	
	// World-Centric 模式（嵌入主编辑器窗口中）打开时，Tab 标签的前缀。
	virtual FString GetWorldCentricTabPrefix() const override 
	{
	    return LOCTEXT("WorldCentricTabPrefix", "Super ComboGraph ").ToString();
	};	// Must implement in derived class!
	
```

---

> World-Centric 模式

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

这里的 `World-Centric `模式是什么？

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
看下面的表格
</chatmessage>

| 模式                | 外观描述                     |
|-------------------|--------------------------|
| **World-Centric** | 编辑器嵌入在主编辑器窗口，作为一个 Tab 显示 |
| **Standalone**    | 编辑器作为一个新的独立窗口单独弹出        |


---

<chatmessage avatar="../../assets/emoji/bqb02.png" :avatarWidth="40" alignLeft >

接着咱们可以以 `Properties Tab`（属性面板）见之前的 [DetailView](../editor_编辑器_/07-DetailView.md)为例

</chatmessage>

### 4. 定义|TabId

::: code-tabs#language

@tab .h

```cpp
static const FName PropertiesTabId;
```

@tab .cpp

```cpp
const FName FSuperComboGraphAssetsEditor::PropertiesTabId(TEXT("属性_Properties"));
```
:::

---

### 5. 创建|CreateXXXWidget

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
正式注册前，咱们应该将我们的属性页面先创建出来
</chatmessage>

::: code-tabs#language

@tab .h

```cpp
void CreateInternalWidgets();
```

@tab .cpp

```cpp
void FSuperComboGraphAssetsEditor::CreateInternalWidgets()
{
	FDetailsViewArgs Args;
	Args.bHideSelectionTip = true;
	Args.NotifyHook = this;

	FPropertyEditorModule& PropertyModule = FModuleManager::LoadModuleChecked<FPropertyEditorModule>("PropertyEditor");
	SuperComboGraphProperties = PropertyModule.CreateDetailView(Args);
	SuperComboGraphProperties->SetObject(SuperComboGraph);
}
```
:::

---

### 6. 注册| RegisterTabSpawners

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

然后去`TabManger`中注册咱的属性面板

</chatmessage>

<chatmessage avatar="../../assets/emoji/new7.png" :avatarWidth="38">
前面的直通车我懒得看，也没兴趣看，大胆的问一句属性面板是啥?
</chatmessage>

<chatmessage avatar="../../assets/emoji/new2.png" :avatarWidth="55" alignLeft >

属性面板是利用反射机制；将你类中的成员变量例如`hello baba`反射到一个`SCompoundWidget`中绘制显示的模块。这里需要挂载到对应的`SDockTab`中显示。

</chatmessage>

::: code-tabs#language

@tab .h

```cpp
virtual void RegisterTabSpawners(const TSharedRef<class FTabManager>& TabManager) override;
virtual void UnregisterTabSpawners(const TSharedRef<class FTabManager>& TabManager) override;
```

@tab .cpp

```cpp
void FSuperComboGraphAssetsEditor::RegisterTabSpawners(const TSharedRef<FTabManager>& Manager)
{
	/*注册工作区的菜单分类*/
	WorkspaceMenuCategory = Manager->AddLocalWorkspaceMenuCategory(LOCTEXT("WorkspaceMenu_SuperComboGraph", "Super ComboGraph "));
	const auto WorkspaceMenuCategoryRef = WorkspaceMenuCategory.ToSharedRef();

	/*注册自定义的标签页（Tab）*/
	FAssetEditorToolkit:: RegisterTabSpawners(Manager);
	
	/*Details / 属性面板*/
	Manager->RegisterTabSpawner( PropertiesTabId, FOnSpawnTab::CreateSP(this, &FSuperComboGraphAssetsEditor::SpawnTab_Properties) )
			.SetDisplayName( LOCTEXT("DetailsTab", "Details") )
			.SetGroup(WorkspaceMenuCategoryRef)
			.SetIcon(FSlateIcon(FAppStyle::GetAppStyleSetName(), "LevelEditor.Tabs.Details"));

}
void FSuperComboGraphAssetsEditor::UnregisterTabSpawners(const TSharedRef<FTabManager>& Manager)
{
	Manager->UnregisterTabSpawner( PropertiesTabId);
}
```
:::

---

### 7. 构建| SpawnTab_XXX

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">
为什么要传入回调函数？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
它本质上是一个委托
</chatmessage>

![](..%2Fassets%2Fba5.png)

---

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

`TabManger`内部以`FTabSpawner`(Map)维护我们的`SDockTab`

</chatmessage>

![](..%2Fassets%2Fba3.png)


![](..%2Fassets%2Fba4.png)


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

SO ! `RegisterTabSpawner` 中需要传入具体实现咱的`SDockTab`回调

</chatmessage>

::: code-tabs#language

@tab .h

```cpp
/** Properties tab 属性标签 */
TSharedPtr<class IDetailsView> SuperComboGraphProperties;
```

@tab .cpp

```cpp
TSharedRef<SDockTab> FSuperComboGraphAssetsEditor::SpawnTab_Properties(const FSpawnTabArgs& Args) const
{
	check(Args.GetTabId() == PropertiesTabId);
	
	return SNew(SDockTab).Label(LOCTEXT("SuperComboGraphDetailsTitle", "Details"))
	[
		SuperComboGraphProperties.ToSharedRef()
	];
}
```
:::

---


### 8.插入|Layout布局

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
完事了插入到咱们的Tab中。
</chatmessage>

::: code-tabs#language

@tab .h

```cpp
/** 创建布局 */
TSharedRef<FTabManager::FLayout> CreateEditorLayout();
```

@tab .cpp

```cpp
TSharedRef<FTabManager::FLayout> FSuperComboGraphAssetsEditor::CreateEditorLayout()
{
	return FTabManager::NewLayout("Standalone_SuperComboGraphEditor_Layout_v5")
		->AddArea
		(
			FTabManager::NewPrimaryArea()
			->SetOrientation(Orient_Vertical)
			->Split(
				FTabManager::NewSplitter()
				->SetOrientation(Orient_Horizontal)
				->Split(
					FTabManager::NewStack()
					->SetSizeCoefficient(0.6)
					->SetHideTabWell(true)
					->AddTab(PropertiesTabId, ETabState::OpenedTab)
				)
			)
		);
}
```
:::

---

### 9. 初始化

```cpp
FAssetEditorToolkit::InitAssetEditor(
	Mode,
	InitToolkitHost,
	TEXT("SuperComboGraphEditor"),
	StandaloneDefaultLayout,
	false,
	true,
	ObjectToEdit,
	false
);
```
<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

为什么不直接重写`InitAssetEditor` ?

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
因为这玩意压根不是虚函数。只能直接调用
</chatmessage>

![](..%2Fassets%2Fba2.png)

## 完整案例

::: code-tabs#language

@tab .h

```cpp

//抽象
ISuperComboGraphBlueprintEditor : public FWorkflowCentricApplication

class  FSuperComboGraphAssetsEditor : public ISuperComboGraphBlueprintEditor
{
public :

	FSuperComboGraphAssetsEditor(){};
	virtual ~FSuperComboGraphAssetsEditor() override;
	
	/** 初始化SuperComboGraphAssetsEditor */
	void InitAssetsEditor(const EToolkitMode::Type Mode, const TSharedPtr<class IToolkitHost>& InitToolkitHost,UObject* ObjectToEdit);
	
	/** IToolkit interface */
	virtual FName GetToolkitFName() const override;
	virtual FText GetBaseToolkitName() const override;
	virtual FString GetWorldCentricTabPrefix() const override;

	virtual void RegisterTabSpawners(const TSharedRef<class FTabManager>& TabManager) override;
	virtual void UnregisterTabSpawners(const TSharedRef<class FTabManager>& TabManager) override;
private:
	/** 创建控件 */	
	void CreateInternalWidgets();
	/** 创建标签页 */
	TSharedRef<SDockTab> SpawnTab_Properties(const FSpawnTabArgs& Args) const;
	/** 创建布局 */
	TSharedRef<FTabManager::FLayout> CreateEditorLayout();
private:
	/** Properties tab 属性标签 */
	TSharedPtr<class IDetailsView> SuperComboGraphProperties;
	/**	The tab ids for all the tabs used */
	static const FName PropertiesTabId;
};
```

@tab .cpp
```cpp
const FName FSuperComboGraphAssetsEditor::PropertiesTabId( TEXT( "SuperComboGraphAssetsEditor_Properties" ) );

FName FSuperComboGraphAssetsEditor::GetToolkitFName() const
{
	/*返回这个 Toolkit 的内部标识名，用于唯一标识当前编辑器的类型。*/
	return FName("SuperComboGraphAssetsEditor");
}
FText FSuperComboGraphAssetsEditor::GetBaseToolkitName() const
{
	/*显示在窗口左上角标签中。。*/
	return LOCTEXT("AppLabel", "Super ComboGraph Editor");
}

FString FSuperComboGraphAssetsEditor::GetWorldCentricTabPrefix() const
{
	/*在世界中心模式中，窗口的前缀名（嵌在主编辑器中的情况下）。*/
	return LOCTEXT("WorldCentricTabPrefix", "Super ComboGraph ").ToString();
}

void FSuperComboGraphAssetsEditor::CreateInternalWidgets()
{
	FDetailsViewArgs Args;
	Args.bHideSelectionTip = true;
	Args.NotifyHook = this;

	FPropertyEditorModule& PropertyModule = FModuleManager::LoadModuleChecked<FPropertyEditorModule>("PropertyEditor");
	SuperComboGraphProperties = PropertyModule.CreateDetailView(Args);
	SuperComboGraphProperties->SetObject( SuperComboGraph );
}

TSharedRef<SDockTab> FSuperComboGraphAssetsEditor::SpawnTab_Properties(const FSpawnTabArgs& Args) const
{
	check( Args.GetTabId() == PropertiesTabId );

	return SNew(SDockTab)
		.Label(LOCTEXT("SuperComboGraphDetailsTitle", "Details"))
		[
			SuperComboGraphProperties.ToSharedRef()
		];
}

void FSuperComboGraphAssetsEditor::RegisterTabSpawners(const TSharedRef<FTabManager>& Manager)
{
	/*注册工作区的菜单分类*/
	WorkspaceMenuCategory = Manager->AddLocalWorkspaceMenuCategory(LOCTEXT("WorkspaceMenu_SuperComboGraph", "Super ComboGraph "));
	const auto WorkspaceMenuCategoryRef = WorkspaceMenuCategory.ToSharedRef();

	/*注册自定义的标签页（Tab）*/
	FAssetEditorToolkit:: RegisterTabSpawners(Manager);

	/*Details / 属性面板*/
	Manager->RegisterTabSpawner( PropertiesTabId, FOnSpawnTab::CreateSP(this, &FSuperComboGraphAssetsEditor::SpawnTab_Properties) )
			.SetDisplayName( LOCTEXT("DetailsTab", "Details") )
			.SetGroup(WorkspaceMenuCategoryRef)
			.SetIcon(FSlateIcon(FAppStyle::GetAppStyleSetName(), "LevelEditor.Tabs.Details"));

}
void FSuperComboGraphAssetsEditor::UnregisterTabSpawners(const TSharedRef<FTabManager>& Manager)
{
	Manager->UnregisterTabSpawner( PropertiesTabId);
}
void FSuperComboGraphAssetsEditor::InitAssetsEditor(const EToolkitMode::Type Mode,const TSharedPtr<IToolkitHost>& InitToolkitHost, USuperComboGraph* ObjectToEdit)
{
	/*创建细节面板*/
	CreateInternalWidgets();
	
	/*初始化*/
	InitAssetEditor(Mode,
		InitToolkitHost,
		TEXT("SuperComboGraphEditor"),
		CreateEditorLayout(),
		false,
		true,
		ObjectToEdit,
		false);
}
TSharedRef<FTabManager::FLayout> FSuperComboGraphAssetsEditor::CreateEditorLayout()
{
	return FTabManager::NewLayout("Standalone_SuperComboGraphEditor_Layout_v5")
		->AddArea
		(
			FTabManager::NewPrimaryArea()
			->SetOrientation(Orient_Vertical)
			->Split(
				FTabManager::NewSplitter()
				->SetOrientation(Orient_Horizontal)
				->Split(
					FTabManager::NewStack()
					->SetSizeCoefficient(0.6)
					->SetHideTabWell(true)
					->AddTab(PropertiesTabId, ETabState::OpenedTab)
				)
			)
		);
}
#undef LOCTEXT_NAMESPACE
```
:::


