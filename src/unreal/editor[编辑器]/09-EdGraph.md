---
title: ED09.EdGraph|序
order : 26
category:
  - u++
---

## 导言

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">
Dada！资产编辑器的框架是有了，但好像少点东西，默认的那个图表去哪里了?
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

因为咱们用的是`FWorkflowCentricApplication`不是内建蓝图编辑器子类（ FBlueprintEditor)

</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">
好吧，那咱们怎么把这玩意加回来？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
莫慌，待老夫慢慢道来。
</chatmessage>

## UEdGraph 系统结构

![](..%2Fassets%2FPIN002.png)

### UEdGraph

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

图表的`容器`，包含了所有节点`UEdGraphNode`

</chatmessage>

### UEdGraphNode

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

图表中的每个节点（Node）都是 `UEdGraphNode` 或其子类。

</chatmessage>

### UEdGraphPin

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

每个 Node 上的`引脚`

</chatmessage>

### UEdGraphSchema

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

可以理解成一个管家 ，负责管理图的规则（哪些可以连、不能连，右键菜单、拖拽连线）

</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

为什么没有一个专门的`连线对象`类

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

每一根线其实是两个` UEdGraphPin` 互相关联

</chatmessage>

```cpp
PinA->LinkedTo.Add(PinB);
PinB->LinkedTo.Add(PinA);
```

## 实践

### 1.派生三剑客

![](..%2Fassets%2Fgraph001.jpg)

```cpp
UCLASS()
class XXX_EDITOR_API USuperComboGraphEdGraph : public UEdGraph
{
	GENERATED_BODY()
};
```

### 2.派生UEdGraphNode

![](..%2Fassets%2Fgraph002.png)

```cpp
UCLASS()
class XXX_EDITOR_API USuperComboGraphEdGraphNode : public UEdGraphNode
{
	GENERATED_BODY()
};
```

---

### 3.派生UEdGraphSchema

```cpp
UCLASS()
class XXX_EDITOR_API USuperComboGraphEdSchema : public UEdGraphSchema
{
	GENERATED_BODY()
};
```

---

### 4. 要显示图表的类中缓存图表指针

```cpp
UCLASS()
class UXXX : public UObject
{
	GENERATED_BODY()
public:
#if WITH_EDITORONLY_DATA
	// 图表资源保存点
	UPROPERTY()
	TObjectPtr<UEdGraph> EditorGraph;
#endif	
};
```

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

看的我一脸懵逼！为什么要写一个`UEdGraph`指针

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

为了让你的图表作为资产的一部分被序列化保存下来，否则编辑器里画的所有连线和节点会在关闭编辑器后全部丢失。

</chatmessage>

### 5. 类内写上`CreateGraph`函数

```cpp
void UXXX::CreateGraph()
{
	if (EditorGraph == nullptr)
	{
		EditorGraph = USoundCue::GetSoundCueAudioEditor()->CreateNewSoundCueGraph(this);
		EditorGraph->bAllowDeletion = false;
		
		const UEdGraphSchema* Schema = EditorGraph->GetSchema();
		Schema->CreateDefaultNodesForGraph(*EditorGraph);
	}
}
```

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

这一步也可以放在`AssetEditor`类中。

</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

但我看很多官方模板类似`SoundCue`都是直接写在类内的

</chatmessage>

![](..%2Fassets%2Fgraph003.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

两种写法各有千秋，不过写在类内记得加`#if WITH_EDITOR` ,我个人习惯上还是放在`AssetEditor`类中，毕竟`Editor`模块更解耦。

</chatmessage>

### 6.创建 GraphEditor 控件（UI）

::: code-tabs#language

@tab .h

```cpp
/** 你要显示图表的指针 */
TObjectPtr<USuperComboGraph> SuperComboGraphObj;

/**图表指针*/
TSharedPtr<SGraphEditor> GraphEditorWidget;

```

@tab .cpp

```cpp
void FSuperComboGraphAssetsEditor::CreateGraphEditorWidget()
{
	if (!SuperComboGraphObj) return;

	if (!SuperComboGraphObj->EditorGraph)
	{
		SuperComboGraphObj->EditorGraph = FBlueprintEditorUtils::CreateNewGraph(
			SuperComboGraphObj,
			NAME_None,
			USuperComboGraphEdGraph::StaticClass(),
			USuperComboGraphEdSchema::StaticClass()
		);
		SuperComboGraphObj->EditorGraph->bAllowRenaming = false;
		SuperComboGraphObj->EditorGraph->bAllowDeletion = false;

		const UEdGraphSchema* GraphSchema = SuperComboGraphObj->EditorGraph->GetSchema();
		GraphSchema->CreateDefaultNodesForGraph(*SuperComboGraphObj->EditorGraph);
	}

	// 创建 GraphEditor 控件
	FGraphAppearanceInfo AppearanceInfo;
	AppearanceInfo.CornerText = LOCTEXT("SuperComboGraphCornerText", "Super Combo Graph");

	FGraphEditorCommands::Register();

	GraphEditorWidget = SNew(SGraphEditor)
		.AdditionalCommands(nullptr)
		.GraphToEdit(SuperComboGraphObj->EditorGraph)
		.Appearance(AppearanceInfo)
		.AutoExpandActionMenu(true)
		.ShowGraphStateOverlay(false);
	
}
```
:::

### 7.挂载 `SDockTab` 到 `Layout`

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

无论是类内还是类外写初始化函数，都需要在`AssetEditor`类中挂载到`Layout`中才会显示。

</chatmessage>


>具体注册方法我们上一篇已经讲了，这里只做简单描述

```cpp
//1.注册ID
static const FName CombGraphTabId;

//2.生成对应的标签页
TSharedRef<SDockTab> SpawnTab_SuperComboGraph(const FSpawnTabArgs& Args) const;

TSharedRef<SDockTab> FSuperComboGraphAssetsEditor::SpawnTab_SuperComboGraph(const FSpawnTabArgs& Args) const
{
	check( Args.GetTabId() == CombGraphTabId );

	return SNew(SDockTab)
		.Label(LOCTEXT("SuperComboGraphTitle", "Super Combo Graph"))
		[
			GraphEditorWidget.ToSharedRef()
		];
}

//3.通过ID组除生成的标签页
void FSuperComboGraphAssetsEditor::RegisterTabSpawners(const TSharedRef<FTabManager>& Manager)
{
	/*注册工作区的菜单分类*/
	WorkspaceMenuCategory = Manager->AddLocalWorkspaceMenuCategory(LOCTEXT("WorkspaceMenu_SuperComboGraph", "Super ComboGraph "));
	const auto WorkspaceMenuCategoryRef = WorkspaceMenuCategory.ToSharedRef();

	/*注册自定义的标签页（Tab）*/
	FAssetEditorToolkit:: RegisterTabSpawners(Manager);
	
	/*Graph / 画布*/
	Manager->RegisterTabSpawner( CombGraphTabId, FOnSpawnTab::CreateSP(this, &FSuperComboGraphAssetsEditor::SpawnTab_SuperComboGraph) )
			.SetDisplayName( LOCTEXT("CombGraphTab", "CombGraphTab") )
			.SetGroup(WorkspaceMenuCategoryRef)
			.SetIcon(FSlateIcon(FSuperCombGraphEditorStyle::GetStyleSetName(), "SiGaoHe.Main"));
}

//4.添加到标签页
InitAssetEditor(Mode,InitToolkitHost,TEXT("SuperComboGraphEditor"),CreateEditorLayout(),true,true,ObjectToEdit,false);
```