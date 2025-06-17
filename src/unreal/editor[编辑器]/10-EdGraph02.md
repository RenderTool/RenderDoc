---
title: ED10.EdGraph|K2Node节点
order : 27
category:
  - u++
---

## UEdGraphNode

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">
图表有了，现在要加入一个节点了，这个节点是如何实现的？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

莫慌，待老夫慢慢道来。回顾一下Node的构成

</chatmessage>

![](..%2Fassets%2FPIN002.png)

### UEdGraphNode|基础接口

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

每个节点，需要录入一些`基础信息`。

</chatmessage>

```cpp
UCLASS( )
class XXX_API UXXXNode : public UEdGraphNode
{
	GENERATED_BODY()
public:
	/*初始化时用到引脚*/
	virtual void AllocateDefaultPins() override;
	/*节点工具提示*/
	virtual FText GetTooltipText() const override;
	/*节点标题*/
	virtual FText GetNodeTitle(ENodeTitleType::Type TitleType) const override;
	/*颜色和图标*/
	virtual FLinearColor GetNodeTitleColor() const override;
	virtual FSlateIcon GetIconAndTint(FLinearColor& OutColor) const override;
};
```

### UEdGraphNode|CreatePin

>输入引脚

```cpp
CreatePin(EGPD_Input, UEdGraphSchema_K2::PC_Exec, UEdGraphSchema_K2::PN_Execute);
```

>输出引脚

```cpp
UEdGraphPin* NewFloat = CreatePin(EGPD_Input, UEdGraphSchema_K2::PC_Float,UEdGraphSchema_K2::PN_Then);
```

>这里有个小坑，按上面那种写法，引脚是黄的无法提升成变量，并且PinName直接用字符串会乱码。

![](..%2Fassets%2FPIN001.png)

```cpp
UEdGraphPin* NewFloat = CreatePin(EGPD_Input, UEdGraphSchema_K2::PC_Real,UEdGraphSchema_K2::PC_Float, UEdGraphSchema_K2::PN_Then);
```


### UEdGraphNode|AllocateDefaultPins

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
告诉编辑器，这个节点默认有哪些节点的引脚.
</chatmessage>

```cpp
void UXXX::AllocateDefaultPins()
{
    CreatePin(EGPD_Input, UEdGraphSchema_K2::PC_Exec, UEdGraphSchema_K2::PN_Execute);
    CreatePin(EGPD_Output, UEdGraphSchema_K2::PC_Exec, UEdGraphSchema_K2::PN_Then);
    Super::AllocateDefaultPins();
}

```

### UEdGraphNode|GetMenuActions

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
注册节点到右键菜单,这个几乎是固定写法可以直接Copy
</chatmessage>

![](..%2Fassets%2FPIN003.png)

```cpp
void UXXX::GetMenuActions(FBlueprintActionDatabaseRegistrar& ActionRegistrar) const
{
	Super::GetMenuActions(ActionRegistrar);
	const UClass* ActionKey = GetClass();
	if (ActionRegistrar.IsOpenForRegistration(ActionKey))
	{
		// 注册默认工厂
		UBlueprintNodeSpawner* NodeSpawner = UBlueprintNodeSpawner::Create(GetClass());
		check(NodeSpawner != nullptr);
		ActionRegistrar.AddBlueprintAction(ActionKey, NodeSpawner);
	}
}
```

### UEdGraphNode|ReallocatePinsDuringReconstruction

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">
这个到底是什么？
</chatmessage>

![](..%2Fassets%2FPIN004.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

节点重建时，UE 会销毁旧 `Pin`，重新生成新的 `Pin`。但UE把旧的存储在`OldPins`中，让你自己决定怎么处理旧的。

</chatmessage>



```cpp
void UK2Node_SuperComboGraphCharge::ReallocatePinsDuringReconstruction(TArray<UEdGraphPin*>& OldPins)
{
	Super::ReallocatePinsDuringReconstruction(OldPins);
	
	// 输出引脚
	OutputPins.Empty();
	
	// 重新创建 Exec 输入引脚
	CreatePin(EGPD_Input, UEdGraphSchema_K2::PC_Exec, UEdGraphSchema_K2::PN_Execute);

	for (const UEdGraphPin* OldPin : OldPins)
	{
		if (OldPin->Direction == EGPD_Output && UEdGraphSchema_K2::IsExecPin(*OldPin))
		{
			CreatePin(EGPD_Output, UEdGraphSchema_K2::PC_Exec,OldPin->PinName);
			OutputPins.Add(OldPin->PinName);
		}
	}
}
```

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
当然非常关键的一点四记得把默认的引脚也加回去，不然就会变成这样了。
</chatmessage>

![](..%2Fassets%2FPIN005.png)