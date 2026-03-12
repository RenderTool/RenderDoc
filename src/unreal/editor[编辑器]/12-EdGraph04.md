---
title: ED12.EdGraph|自定义Node/Pin外观
order : 29
category:
  - u++
---

## 需求

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">
默认的节点外观有点丑耶
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
自定义一个不就行了
</chatmessage>

<chatmessage avatar="../../assets/emoji/new5.png" :avatarWidth="38">
我不会
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
跟着老夫做一遍
</chatmessage>


## ` FGraphPanelNodeFactory`

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

用于把 `UEdGraphNode` 映射成 `Slate` 可视化节点（SGraphNode） 的工厂

</chatmessage>

```
UEdGraphNode   ——(NodeFactory)——>   SGraphNode
数据节点                UI节点
```

<chatmessage avatar="../../assets/emoji/new5.png" :avatarWidth="38">
也就是说：
</chatmessage>


* `UEdGraphNode` = 编辑器数据节点（逻辑层）
* `SGraphNode` = 视觉层 Slate Widget（长什么样）
* `FGraphPanelNodeFactory` = 决定这个节点显示成什么样

---

## 流程

### 自定义 `SGraphNode`

```cpp
class SComboGraphNode : public SGraphNode
{
public:
	SLATE_BEGIN_ARGS(SComboGraphNode) {}
	SLATE_END_ARGS()

	void Construct(const FArguments& InArgs, UComboGraphEdNode* InNode)
	{
		this->GraphNode = InNode;
		UpdateGraphNode();
	}

	virtual void UpdateGraphNode() override;
};
```

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
这样咱就可以
</chatmessage>


* 自定义标题
* 自定义背景颜色
* 自定义布局
* 添加图标
* 添加动画
* 添加额外信息
---

### 写之前介绍过的`NodeFactory`

```cpp
struct XXX_API FComboNodeFactory : public FGraphPanelNodeFactory
{
	virtual TSharedPtr<class SGraphNode> CreateNode(class UEdGraphNode* InNode) const override;
};
```

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
这个函数的作用是：
</chatmessage>


> 如果是你的战斗图节点 → 返回你的 UI 类
> 否则返回 nullptr（让其他 Factory 处理）

---

### 注册 Factory（非常关键）

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">
工厂有了，生产材料也有了，所以最终在哪里生产呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

一般在 **Editor Module StartupModule() 里**

</chatmessage>

```cpp
TSharedPtr<FComboGraphNodeFactory> ComboNodeFactory;

void FComboGraphEditorModule::StartupModule()
{
	ComboNodeFactory = MakeShareable(new FComboGraphNodeFactory());

	FEdGraphUtilities::RegisterVisualNodeFactory(ComboNodeFactory);
}
```

>注销：

```cpp
void FComboGraphEditorModule::ShutdownModule()
{
	if (ComboNodeFactory.IsValid())
	{
		FEdGraphUtilities::UnregisterVisualNodeFactory(ComboNodeFactory);
	}
}
```
