---
title: ED07.DetailView|细节面板初稿
order : 24
category:
  - u++
---


## **DetailView**

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

`DetailView` 是细节面板的可视化模块

</chatmessage>

![](..%2Fassets%2Fdt004.jpg)

## 使用方法

### 1. 获取 PropertyEditor 模块的实例

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
由PropertyEditor模块管理
</chatmessage>

```cpp
FPropertyEditorModule& PropertyEditorModule = FModuleManager::GetModuleChecked<FPropertyEditorModule>(
    "PropertyEditor"
);

```
### 2.注册自定义类的细节视图布局（customized details view layout）

```cpp
PropertyEditorModule.RegisterCustomClassLayout(
    UDataMatching::StaticClass()->GetFName(), // 获取 UDataMatching 类的名称
    FOnGetDetailCustomizationInstance::CreateStatic(&FDataMatchingDetailsView::MakeInstance) // 注册自定义的细节视图
);

```

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

这里的是`FDataMatchingDetailsView`是什么? 

</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft >

是自定义继承自`IDetailsView`的细节视图，后面会详细说明。

</chatmessage>

### 3. 创建一个 FDetailsViewArgs 对象来配置细节视图（Detail View）参数

```cpp
FDetailsViewArgs DetailsViewArgs;
DetailsViewArgs.bAllowSearch = false;  // 禁止搜索框功能，即不允许在属性面板中进行搜索
DetailsViewArgs.bShowObjectLabel = false; // 禁用对象标签的显示，通常是对象类型名称
DetailsViewArgs.bUpdatesFromSelection = false; // 禁止从选择中更新属性视图，避免用户选择不同对象时自动更新面板
DetailsViewArgs.NameAreaSettings = FDetailsViewArgs::HideNameArea; // 隐藏属性名区域，可能不希望显示属性名称
DetailsViewArgs.bForceHiddenPropertyVisibility = true; // 强制显示所有属性，即使这些属性被标记为隐藏

```
### 4. 创建细节面板实例

```cpp
TSharedPtr<class IDetailsView> DetailsView;
```

```cpp

// 使用上面配置的参数创建 Details View（详细视图），并返回其指针
DetailsView = PropertyEditorModule.CreateDetailView(DetailsViewArgs);

```

### 5. 在细节面板中要显示属性的对象

```cpp
DetailsView->SetObject(DataMatching);
```

### 6.释放资源

```cpp

FPropertyEditorModule& PropertyEditorModule = FModuleManager::LoadModuleChecked<FPropertyEditorModule>(
"PropertyEditor");
PropertyEditorModule.UnregisterCustomClassLayout(UDataMatching::StaticClass()->GetFName());

```

### 7. 自定义显示|隐藏属性

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">
给我气到吐血的功能，编辑器里封装的特别好用，这里还要自定义一层！
</chatmessage>


<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft >

编辑器内的`DetailsView` 本质是UWidget,然后对`IDetailsView`的一个封装。

</chatmessage>


![](..%2Fassets%2Fdt001.jpg)


<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft >
我们只能模仿他封装按组过滤还是按具体属性过滤。
</chatmessage>

![](..%2Fassets%2Fdt002.jpg)

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft >
其中的过滤关键函数。
</chatmessage>

![](..%2Fassets%2Fdt003.png)

```cpp
static TArray<FName> CategoriesToShow;
static TArray<FName> PropertiesToShow;
TArray<FName> FDataMatchingDetailsView::CategoriesToShow;
TArray<FName> FDataMatchingDetailsView::PropertiesToShow;
```

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft >

而我们自定义的`IDetailCustomization`本质还是利用单例思想。

</chatmessage>


```cpp
#pragma once

#include "CoreMinimal.h"
#include "IDetailCustomization.h"

class IDetailLayoutBuilder;
class IPropertyHandle;

/** DataSystem Editor public interface */
class FDataMatchingDetailsView : public IDetailCustomization
{

public:
	/** Makes a new instance of this detail layout class for a specific detail view requesting it */
	static TSharedRef<IDetailCustomization> MakeInstance();
		
	static TArray<FName> CategoriesToShow;
	
	static TArray<FName> PropertiesToShow;
	
private:
	/** IDetailCustomization interface */
	virtual void CustomizeDetails(IDetailLayoutBuilder& DetailLayout) override;

};
```

```cpp
#include "DataMacting/DataMatchingDetailsView.h"

#include "DetailLayoutBuilder.h"
#include "ObjectEditorUtils.h"

#define LOCTEXT_NAMESPACE "DataMatchingDetailsView"

TArray<FName> FDataMatchingDetailsView::CategoriesToShow;
TArray<FName> FDataMatchingDetailsView::PropertiesToShow;

TSharedRef<IDetailCustomization> FDataMatchingDetailsView::MakeInstance()
{
	return MakeShareable(new FDataMatchingDetailsView);
}

void FDataMatchingDetailsView::CustomizeDetails(IDetailLayoutBuilder& DetailBuilder)
{
	TArray<TWeakObjectPtr<UObject>> Objects;
	DetailBuilder.GetObjectsBeingCustomized(Objects);

	// 获取当前对象的类
	UClass* TargetClass = nullptr;
	if (Objects.Num() > 0 && Objects[0].IsValid())
	{
		TargetClass = Objects[0]->GetClass();
	}

	if (!TargetClass) return;

	for (TFieldIterator<FProperty> PropIt(TargetClass); PropIt; ++PropIt)
	{
		FProperty* Property = *PropIt;
		if (!Property) continue;

		const FName PropertyName = Property->GetFName();

		// 检查是否显示该属性
		bool bShouldShow = PropertiesToShow.Contains(PropertyName);

		//  或者检查它所属的分类是否在允许列表
		if (!bShouldShow)
		{
			const FString CategoryFullString = FObjectEditorUtils::GetCategoryFName(Property).ToString();
			FString TopLevelCategory = CategoryFullString;
			if (CategoryFullString.Contains(TEXT("|")))
			{
				CategoryFullString.Split(TEXT("|"), &TopLevelCategory, nullptr);
			}

			bShouldShow = CategoriesToShow.ContainsByPredicate([&](const FName& CategoryName)
			{
				const FString ElementStr = CategoryName.ToString();
				return ElementStr == CategoryFullString || ElementStr == TopLevelCategory;
			});
		}

		// 隐藏
		if (!bShouldShow)
		{
			DetailBuilder.HideProperty(PropertyName);
		}
	}
}

#undef LOCTEXT_NAMESPACE

```

### 7. 自定义显示|使用

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft >

然后在外部修改后调用`DetailsView->ForceRefresh();` 即可

</chatmessage>

```cpp
void FDataSystemAssetEditorToolkit::ShowDetails(const TArray<FName>& WantToShow)
{
	if (!DataMatchingPtr.IsValid() || !DetailsView.IsValid()) return;
	CategoriesToShow.Empty();
	CategoriesToShow = WantToShow;
	// 设置当前要显示的分类（全局共享）
	FDataMatchingDetailsView::CategoriesToShow = WantToShow;

	DetailsView->ForceRefresh();
}
```

### 8.野路子

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft >
明明官方封装了一个方法，我们却自己造轮子？咱们其实可以用个野路子，直接CreateWidget然后转成Slate
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">
性能会不会有问题？
</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft >
损失肯定是有的，不过对于编辑器来说其实无所谓。而且能用4句话解决问题为什么不用呢？
</chatmessage>

```cpp
	//野路子
	UDetailsView* DetailsViewWidget = NewObject<UDetailsView>();
	// 设置对象
	DetailsViewWidget->SetObject(DataMatchingPtr.Get());
	DetailsViewWidget->CategoriesToShow.Append({"Log", "Step1"});
	// 获取Slate
	TSharedRef<SWidget> SDetailViewWidget  = DetailsViewWidget->TakeWidget();
	//快乐起来
```

![](..%2Fassets%2Fdt005.jpg)