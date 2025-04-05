---
title: ED04.ToolMenus|在任意扩展点插入自定义按钮
order : 22
category:
  - u++
---

## 回顾

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
之前的章节我们对编辑器的一些图标有了初步的认识。同时将自己的类注册到了内容浏览器的右键中。
</chatmessage>

## 成果预览

![](..%2Fassets%2Fmenustyle002.jpg)

## **UToolMenus**

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

`ToolMenus` 是编辑器中用于创建菜单和工具栏的工具类。

</chatmessage>

### **扩展点**

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

`ToolMenus `可以在几乎所有的扩展点注册，包括主菜单、工具栏、右键菜单等。

</chatmessage>

![](..%2Fassets%2Ftoolmenus001.png)

---
### **Debug**

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
偷偷问一句！这些绿色的字是怎么搞出来的！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

>编辑器偏好设置-->开发者工具-->显示UI扩展点

</chatmessage>

![](..%2Fassets%2Ftoolmenus002.png)


## 实践

>建议先看看完下面的步骤，再回头来看看这个时序图。

![](..%2Fassets%2Ftemp003.svg)

###  **引入模块**

```csharp
PrivateDependencyModuleNames.AddRange(new string[]{"ToolMenus",});
```
---
### **注册命令|Command**

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
声明和定义一个编辑器命令（Command）。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
干啥用的？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
命令,顾名思义，统一管理编辑器命令以及支持快捷键绑定（可以指定 FInputChord）。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
打住打住！我不知道你在说什么!什么是FInputChord？
</chatmessage>

>FInputChord 是 UE5 中用于绑定快捷键的结构体，它定义了一组按键（FKey）和可选的修饰键（Ctrl、Shift、Alt、Cmd）。

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
别急，先跟着敲一遍再说。
</chatmessage>

---

```cpp
#pragma once

#include "Framework/Commands/Commands.h"
#include "DataSystemEditorStyle.h"

/**
 *  FDataSystemEditorCommands 继承自 TCommands，用于注册编辑器中的命令
 *  主要作用：
 *  - 统一管理工具栏、菜单的命令
 *  - 允许绑定快捷键
 *  - 使命令可复用，支持 Undo/Redo
 */
class FDataSystemEditorCommands : public TCommands<FDataSystemEditorCommands>
{
public:

	/**
	 * 构造函数
	 * @param ContextName 命令上下文名称（唯一标识）
	 * @param ContextDesc 本地化名称（UI 上显示）
	 * @param Parent 用于分组的命令名称（一般用 NAME_None）
	 * @param StyleSetName 样式名称（用于获取图标）
	 */
	FDataSystemEditorCommands()
		: TCommands<FDataSystemEditorCommands>(
			TEXT("DataSystemEditor"),  // 命令的唯一 ID
			NSLOCTEXT("Contexts", "DataSystemEditor", "Data System Plugin"), // UI 显示名称
			NAME_None,  // 没有父命令组
			FDataSystemEditorStyle::GetStyleSetName() // 样式（图标）
		)
	{
	}

	/** 继承的 TCommands<> 方法：注册所有命令 */
	virtual void RegisterCommands() override;

public:
	/** 代表插件操作的命令（用于工具栏按钮、菜单项） */
	TSharedPtr<FUICommandInfo> PluginAction;
};
```

```cpp
#include "DataSystemEditorCommands.h"

#define LOCTEXT_NAMESPACE "FDataSystemEditorCommands"

void FDataSystemEditorCommands::RegisterCommands()
{
	// 定义 PluginAction 命令（工具栏按钮、菜单项使用）
	UI_COMMAND(
		PluginAction, // 变量
		"Open Data System Editor", // 按钮名称
		"Opens the Data System Editor window.", // 提示文本（鼠标悬停时显示）
		EUserInterfaceActionType::Button, // 按钮类型（普通按钮）
		FInputChord() // 快捷键（为空表示没有默认快捷键）
	);
}

#undef LOCTEXT_NAMESPACE

```
---

### **注册命令|MapAction**

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
定义完后回到模块中使用我们的命令
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
这里的MapAction啥意思？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
一句话解释：把一个“按钮命令” 和 “你想做的事” 绑在一起的过程。
</chatmessage>

>**注意：** 此MapAction并不是必须的，例如有的下拉菜单，没有按钮命令。

```cpp
PluginCommands = MakeShareable(new FUICommandList);
	
PluginCommands->MapAction(
		FDataSystemEditorCommands::Get().PluginAction,
		FExecuteAction::CreateRaw(this, &FDataSystemEditorModule::PluginButtonClicked),
		FCanExecuteAction());
```

---

### **菜单|绑定回调**

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
接着咱们开始注册菜单，注册菜单之前先注册菜单的回调委托。
</chatmessage>

```cpp
UToolMenus::RegisterStartupCallback(FSimpleMulticastDelegate::FDelegate::CreateRaw(this, &FDataSystemEditorModule::RegisterMenus));
```
---

### **菜单|注册菜单**

```cpp
UToolMenu* ToolbarMenu = UToolMenus::Get()->RegisterMenu("LevelEditor.LevelEditorToolBar.SettingsToolbar", NAME_None, EMultiBoxType::SlimHorizontalToolBar);
```

---

### **菜单|按键布局**

```cpp
UENUM(BlueprintType)
enum class EMultiBoxType : uint8
{
    MenuBar,                       // 水平菜单栏（如主菜单）
    ToolBar,                       // 标准工具栏
    VerticalToolBar,              // 垂直工具栏
    SlimHorizontalToolBar,        // 扁平水平工具栏（图标 + 文本水平对齐）
    UniformToolBar,               // 均匀布局的工具栏（目前仅支持水平）
    Menu,                         // 下拉菜单或右键菜单
    ButtonRow,                    // 多行按钮排列（最多N个按钮一行）
    SlimHorizontalUniformToolBar // 扁平均匀工具栏
};
```
---

### **菜单|显示结构**

* Section 和 Entry

| **概念**            | **作用**                      |
|-------------------|-----------------------------|
| **`Section`（区块）** | 用于组织菜单选项的 **分组**，类似于 `菜单分类` |
| **`Entry`（选项）**   | 具体的 **菜单项**，用户可以点击的按钮       |

---

>Section：用于组织菜单选项的 **分组**

```cpp
FToolMenuSection& Section = ToolbarMenu->FindOrAddSection("DataSystem");
```

>Entry：具体的 **菜单项**

```cpp
// 添加一个工具栏按钮，该按钮绑定 UI_COMMAND 定义的 PluginAction 命令
FToolMenuEntry& Entry = Section.AddEntry(
    FToolMenuEntry::InitToolBarButton(FDataSystemEditorCommands::Get().PluginAction)
);

// 设置按钮的命令列表（用于支持快捷键、状态等）
Entry.SetCommandList(PluginCommands);
```
---

### **菜单|按钮方式**


| 函数名                            | 用途            | 使用场景         |
|--------------------------------|---------------|--------------|
| `InitMenuEntry`                | 普通菜单项         | 右键菜单、主菜单     |
| `InitMenuEntryWithCommandList` | 菜单项 + 自定义命令列表 | 多命令源场景       |
| `InitToolBarButton`            | 工具栏按钮         | 顶部工具栏、自定义工具条 |
| `InitSubMenu`                  | 子菜单项          | 多级菜单         |
| `InitDynamicEntry`             | 动态生成的菜单项      | 项目很多、运行时生成内容 |
| `InitComboButton`              | 复合按钮          | 例如下拉菜单       |

---

### **菜单|系统样式**

> SlimHorizontalToolBar的样式用`AssetEditorToolbar`

```cpp twoslash {6}
UToolMenu* ToolbarMenu = UToolMenus::Get()->RegisterMenu(
			"LevelEditor.LevelEditorToolBar.SettingsToolbar",
			NAME_None,
			EMultiBoxType::SlimHorizontalToolBar
);
ToolbarMenu->StyleName = "AssetEditorToolbar";
```

> Entry的样式用`CalloutToolbar`

```cpp twoslash {4}
FToolMenuEntry& Entry = Section.AddEntry(
    FToolMenuEntry::InitToolBarButton(FDataSystemEditorCommands::Get().PluginAction)
    
Entry.StyleNameOverride = "CalloutToolbar";
```

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
这些系统样式参考有吗？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
用这个Fab里的插件看吧
</chatmessage>

![](..%2Fassets%2Fmenustyle001.jpg)

[官方Fab](https://www.fab.com/listings/04eb0964-3152-412f-85be-fdbfbda56425)

---

### **回到案例**

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
OK！有了这些基础知识我们可以来简单的实现一下我们的案例了！
</chatmessage>

![](..%2Fassets%2Fmenustyle002.jpg)


```cpp twoslash {7} title="RegisterMenus"
void FDataSystemEditorModule::RegisterMenus()
{
	RegisterComboMenus();
	
	FToolMenuOwnerScoped OwnerScoped(this);
	{
		UToolMenu* ToolbarMenu = UToolMenus::Get()->RegisterMenu(
			"LevelEditor.LevelEditorToolBar.SettingsToolbar",
			NAME_None,
			EMultiBoxType::SlimHorizontalToolBar
		);
		ToolbarMenu->StyleName = "AssetEditorToolbar";
		FToolMenuSection& Section = ToolbarMenu->FindOrAddSection("DataSystem");

		FToolMenuEntry& Entry = Section.AddEntry(
			FToolMenuEntry::InitComboButton(
				"DataSystemComboButton",
				FUIAction(),
				FOnGetContent::CreateStatic(&FDataSystemEditorModule::GenerateToolbarSettingsMenu, PluginCommands.ToSharedRef()),
				LOCTEXT("ComboButtonLabel", "Data System"),
				LOCTEXT("ComboButtonToolTip", "Data System Settings & Tooling"),
				FSlateIcon(FDataSystemEditorStyle::GetStyleSetName(), "DataSystemEditor.OpenPluginWindow"),
				false 
			)
		);
		Entry.StyleNameOverride = "CalloutToolbar";
		Section.AddEntry(Entry);
	}
}
void FDataSystemEditorModule::RegisterComboMenus() const
{
	UToolMenu* Menu = UToolMenus::Get()->RegisterMenu("LevelEditor.LevelEditorToolBar.DataSystemEditor.ComboMenu");

	struct Local
	{
		static void OpenSettings(const FName ContainerName, const FName CategoryName, const FName SectionName)
		{
			FModuleManager::LoadModuleChecked<ISettingsModule>("Settings").ShowViewer(ContainerName, CategoryName, SectionName);
		}

		static void OpenDataDefinitionManager()
		{
			// TODO: 打开我们的DataDefinitionManager
		}

		static void OpenDocumentation()
		{
			const FString URL = TEXT("https://rendertool.github.io/RenderDoc/unreal/");
			FPlatformProcess::LaunchURL(*URL, nullptr, nullptr);
		}
	};
	{
		FToolMenuSection& Section = Menu->AddSection("ProjectSection", LOCTEXT("ProjectHeading", "Project"));
		Section.AddMenuEntry(
			"DataDefinitionManager",
			LOCTEXT("DataDefinitionManager", "Data Definition Manager"),
			LOCTEXT("DataDefinitionManagerTooltip", "The Data Definition Manager is used to convert a Datatable into a DataAsset."),
			FSlateIcon(FDataSystemEditorStyle::GetStyleSetName(), "ClassIcon.DataDefinition"),
			FUIAction(FExecuteAction::CreateStatic(&Local::OpenDataDefinitionManager))
		);
	}
	{
		FToolMenuSection& Section = Menu->AddSection("Documentation", LOCTEXT("DocumentationHeading", "Documentation"));
		Section.AddMenuEntry(
			"DataSystemDocumentation",
			LOCTEXT("DataSystemDocumentation", "DataSystem Documentation"),
			LOCTEXT("DataSystemDocumentationToolTip", "DataSystem documentation"),
			FSlateIcon(FAppStyle::GetAppStyleSetName(), "LevelEditor.BrowseDocumentation"),
			FUIAction(FExecuteAction::CreateStatic(&Local::OpenDocumentation))
		);
	}
}

```


## 总结

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
细心的你应该已经发现了吧，其实就是改了扩展点的名称。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
可是，这些扩展点我去哪里得到啊？即便编辑器里是打开了UI扩展点，好像有没有一个样啊！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
这个确实比较棘手。
</chatmessage>

![](..%2Fassets%2Ftemp005.jpg)
