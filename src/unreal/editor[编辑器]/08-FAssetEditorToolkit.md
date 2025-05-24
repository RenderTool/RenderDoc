---
title: ED08.FAssetEditorToolkit|自定义资源编辑器
order : 25
category:
  - u++
---

## FAssetEditorToolkit

>一个封装了“UE 编辑器中资产编辑器所需基础功能（如菜单、工具栏、面板注册、布局、命令系统）的一套可扩展基类框架”。


<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

前面铺垫了这么久的`FAssetEditorToolkit`到底是个啥？我该怎么用呢？

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

当然是为了实现一些更加高级的功能，例如 蓝图图表、材质图表等，这种往往通过节点式的连线更加直观

</chatmessage>


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

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

我看了!好像是用`FSimpleAssetEditor` 创建了对应的资源编辑器！这个`FSimpleAssetEditor`是个啥？

</chatmessage>


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

`FSimpleAssetEditor`是官方帮我封装的最简单的一个资源编辑器，继承自 `FAssetEditorToolkit`

</chatmessage>

---


### 1. `FAssetEditorToolkit`（基础类）

* 提供**资源编辑器的核心结构**：ToolKit、Tab管理、菜单扩展、工具栏扩展等
* 支持基本的 Tab 注册、布局初始化、Undo/Redo 等编辑器通用逻辑
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

* 支持**模式切换（Mode switching）**
* 比如“图表模式”、“调试模式”、“详情模式”
* 支持左侧的\*\*“模式切换 Tab 面板”\*\*
* 内置 `FApplicationMode` 机制，可动态定义工作流

---

###  3. `FSimpleAssetEditorToolkit`（轻量级编辑器）

```cpp
class FSimpleAssetEditorToolkit : public FAssetEditorToolkit
```

* **不使用复杂的 ApplicationMode 和 Tab 分布结构**
* 用于结构简单的编辑器，如只包含一个 Details 面板或 Preview 视图
* 通常通过创建一个简单布局，快速搭建 UI

---

## 基础的编辑器面板

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


## 使用方法

### 1. 引入模块

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

```cpp
    //返回该编辑器工具包的唯一名称（内部识别名）。
	virtual FName GetToolkitFName() const override = 0;				// Must implement in derived class!
	
	//返回该工具包的显示名称（用于标签栏 / 窗口标题等 UI 中）。
	virtual FText GetBaseToolkitName() const override = 0;			// Must implement in derived class!
	
	//返回当该编辑器以 World-Centric 模式（嵌入主编辑器窗口中）打开时，Tab 标签的前缀。
	virtual FString GetWorldCentricTabPrefix() const override = 0;	// Must implement in derived class!
```

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
如果你不实现，系统无法正确识别你的编辑器是谁、如何命名窗口、如何区分多个实例。
</chatmessage>

---

> World-Centric 模式

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

这里的 `World-Centric `模式是什么？

</chatmessage>

| 模式                | 外观描述                     |
|-------------------|--------------------------|
| **World-Centric** | 编辑器嵌入在主编辑器窗口，作为一个 Tab 显示 |
| **Standalone**    | 编辑器作为一个新的独立窗口单独弹出        |


---

```cpp
#pragma once

#include "CoreMinimal.h"
#include "ISuperComboGraphBlueprintEditor.h"

class USuperComboGraph;

/**
 * SuperComboGraphAssetsEditor(自定义资产编辑器)
 */
class  FSuperComboGraphAssetsEditor : public ISuperComboGraphBlueprintEditor,
{
public :
	
	FSuperComboGraphAssetsEditor();
	
	virtual void RegisterTabSpawners(const TSharedRef<class FTabManager>& TabManager) override;
	virtual void UnregisterTabSpawners(const TSharedRef<class FTabManager>& TabManager) override;

	/** 初始化SuperComboGraphAssetsEditor */
	void InitSuperComboGraphAssetsEditor(const EToolkitMode::Type Mode, const TSharedPtr<class IToolkitHost>& InitToolkitHost,
	                        USuperComboGraph* ObjectToEdit);

	/** IToolkit interface */
	virtual FName GetToolkitFName() const override;
	virtual FText GetBaseToolkitName() const override;
	virtual FText GetToolkitName() const override;
	virtual FText GetToolkitToolTipText() const override;
	virtual FString GetWorldCentricTabPrefix() const override;
	virtual FLinearColor GetWorldCentricTabColorScale() const override;
	virtual bool IsPrimaryEditor() const override { return true; }
	virtual bool IsSimpleAssetEditor() const override { return true; }
	virtual FName GetEditingAssetTypeName() const override;

};
```


| 接口 / 基类                           | 作用                                                                                   |
|-----------------------------------|--------------------------------------------------------------------------------------|
| `ISuperComboGraphBlueprintEditor` | 自定义的**编辑器接口**，你定义的业务抽象接口，可能继承自 `FAssetEditorToolkit` 或 `FWorkflowCentricApplication` |
| `FGCObject`                       | 用于**GC（垃圾回收）引用保护**，确保编辑器持有的 UObject（如 Graph、Asset）不被误删                               |
| `FNotifyHook`                     | 接收 Details 面板中的变量编辑变更通知，用于响应属性修改                                                     |
| `FEditorUndoClient`               | 实现 Undo / Redo 逻辑，自动与 UE 编辑器 Undo 系统联动                                               |

| 功能                | 说明                                                                             |
|-------------------|--------------------------------------------------------------------------------|
| **初始化编辑器**        | `InitAssetEditor()` 设置 App 名、布局、菜单、工具栏等                                        |
| **菜单栏与工具栏的生成与扩展** | `GenerateToolbar()`, `FillDefaultFileMenuCommands()`, `AddToolbarExtender()` 等 |
| **Tab 注册与管理**     | `RegisterTabSpawners()`, `RestoreFromLayout()`，支持多 Tab 布局                      |
| **状态栏支持**         | `RegisterDrawer()` 注册底部的 drawer 面板                                             |
| **界面自定义**         | 提供 Overlay 添加/移除、Toolbar widget 添加等函数                                          |
| **拖拽事件处理**        | `OnViewportDrop()` 系列可覆盖函数                                                     |
| **编辑器上下文与元信息管理**  | 如标题 `GetToolkitName()`、Tooltip、编辑对象 `GetObjectsCurrentlyBeingEdited()`         |
| **工具集成支持**        | 支持 Hosting 其他 Toolkit，如 Ed Mode Toolkit（`OnToolkitHostingStarted()`）           |
| **EditorMode 支持** | 提供 `FEditorModeTools& GetEditorModeManager()`                                  |