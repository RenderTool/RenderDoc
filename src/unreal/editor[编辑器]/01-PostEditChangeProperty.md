---
title: ED01.PostEditChangeProperty
order : 1
category:
  - u++
---


## 导|案例1- 收集Datatable表格中的名称

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
Dady!我能不能根据某个变量真假来执行某些操作？例如：下面的bAutoMatching为真时，自动收集表格中的名称
</chatmessage>

```cpp
UPROPERTY(BlueprintReadWrite, EditAnywhere)
bool bAutoMatching = false;

UPROPERTY(EditAnywhere, BlueprintReadWrite)
TArray<FName> CollectedNames;

UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = "DataTable")
TObjectPtr<const UDataTable> DataTable;

```

### InlineEditConditionToggle

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
如果是单纯的显示CollectedNames这个字段，可以用之前提到过的`InlineEditConditionToggle`。
</chatmessage>

```cpp
UPROPERTY(EditAnywhere, BlueprintReadWrite, meta=(InlineEditConditionToggle))
bool bAutoMatching = false;

UPROPERTY(EditAnywhere, BlueprintReadWrite,meta=(EditCondition="bAsPackageName"))
TArray<FName> CollectedNames;
```

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
额！我说的是收集表格名称
</chatmessage>


### PostEditChangeProperty


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
得用编辑器钩子PostEditChangeProperty 
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup51.gif"/>

```cpp

#if WITH_EDITOR
void YourClass::PostEditChangeProperty(FPropertyChangedEvent& PropertyChangedEvent)
{
    Super::PostEditChangeProperty(PropertyChangedEvent);

    FName PropertyName = PropertyChangedEvent.GetPropertyName();
    
	// 处理 AutoMatching 逻辑
	if (PropertyName == GET_MEMBER_NAME_CHECKED(UMultiDataTableRows, bAutoMatching) ||
		PropertyName == GET_MEMBER_NAME_CHECKED(UMultiDataTableRows, MatchingField))
	{
		if (bAutoMatching)
		{
			RowNames.Empty();

			const TArray<FName>& CollectedNames = GetRowNames();
			if (CollectedNames.IsEmpty()) return;
			
			if (MatchingField.IsEmpty())
			{
				RowNames.Append(CollectedNames);
			}
			else
			{
				for (const FName& Name : CollectedNames)
				{
					if (Name.ToString().StartsWith(MatchingField))
					{
						RowNames.Add(Name);
					}
				}
			}
		}
	}
}
#endif

```
<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
也就是说在bAutoMatching这个变量发送变化时会触发下面的事件是吧！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
是的，这也可以将一些原本手动的逻辑变成自动逻辑。
</chatmessage>


## 案例2- 预览包名

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
你甚至可以写一个动态的Log系统
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup50.gif"/>

```cpp
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "PackageName")
    bool bAsPackageName = false;
  
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "PackageName",meta=(EditCondition="bAsPackageName"))
    FString PackageNamePrefix;

    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "PackageName",meta=(EditCondition="bAsPackageName"))
    FString PackageNameSuffix;

    UPROPERTY(BlueprintReadOnly,VisibleAnywhere,Category = "PackageName",meta=(EditCondition="bAsPackageName"))
    FString PackageNamePreview;
    
void UMultiDataTableRows::PostEditChangeProperty(FPropertyChangedEvent& PropertyChangedEvent)
{
	Super::PostEditChangeProperty(PropertyChangedEvent);
	
	const FName PropertyName = PropertyChangedEvent.GetPropertyName();

	if (PropertyName == GET_MEMBER_NAME_CHECKED(UMultiDataTableRows, bAsPackageName) ||
		PropertyName == GET_MEMBER_NAME_CHECKED(UMultiDataTableRows, PackageNamePrefix) ||
		PropertyName == GET_MEMBER_NAME_CHECKED(UMultiDataTableRows, PackageNameSuffix))
	{
		if (bAsPackageName && DataTable)
		{
			TArray<FName> RowNamesList = DataTable->GetRowNames();
			if (!RowNamesList.IsEmpty())
			{
				PackageNamePreview = PackageNamePrefix + "_" + RowNamesList[0].ToString() + "_" + PackageNameSuffix;
			}
		}
	}
}
```
