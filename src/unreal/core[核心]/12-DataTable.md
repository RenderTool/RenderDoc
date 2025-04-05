---
title: c12.Datatable|数据表格
order: 1200
category:
  - u++
---

## Datatable

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
Datatable是什么?
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
DataTable和DataAsset是两种用于管理和存储数据的重要资源
</chatmessage>

### 与DataAsset区别？

| 特征       | DataTable              | DataAsset                |
|----------|------------------------|--------------------------|
| **用途**   | 存储和管理结构化数据，如游戏配置、物品属性等 | 存储和管理游戏资产数据，如模型、纹理等      |
| **主要内容** | 表格形式数据，每行为一条记录         | 可以包含各种类型的资源数据，如静态资产或动态资产 |
| **文件类型** | `.csv`、`.xlsx` 等表格文件   | `.uasset` 文件格式           |

## 基本使用

---

## **1. 创建数据结构**

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

在 `DataTable` 中，每一行数据对应一个结构体，使用 `FStruct` 来定义数据格式。

</chatmessage>

```cpp
/** 道具基础信息 */
USTRUCT(BlueprintType)
struct FInventoryBase : public FTableRowBase
{
	GENERATED_BODY()

	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = "BaseInfo")
	FGameplayTag EquipmentTag;

	// 库存项名称
	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = "BaseInfo")
	FText ItemName;

	// 库存项描述
	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = "BaseInfo")
	FText Description;

	// 物品类型（武器、消耗品、装备等）
	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = "BaseInfo")
	EItemType ItemType;

	// 库存项图标
	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = "BaseInfo")
	TSoftObjectPtr<UTexture2D> Icon;

	// 库存项缩略图
	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = "BaseInfo")
	TSoftObjectPtr<UTexture2D> Thumbnail;

	FInventoryBase()
		  : EquipmentTag(FGameplayTag())
		  , ItemName(FText())
		  , Description(FText())
		  , ItemType(EItemType::Weapon)
		  , Icon(nullptr)
		  , Thumbnail(nullptr)
	{
	}
};
```

---

## **2. 创建 DataTable 资产**
1. 在 UE5 编辑器中，打开 **内容浏览器**。
2. 右键 → `Miscellaneous（杂项）` → `DataTable`。

   ![](..%2Fassets%2Fdatatable001.png)

3. 在弹出的 `结构体选择` 窗口中，选择 **刚刚创建的 FInventoryBase** 结构体。

![](..%2Fassets%2Fdatatable002.jpg)

---

## **3. 编辑 DataTable 数据**
1. 双击打开 `DataTable` 资源。
2. 点击 `+ 添加` 按钮，添加新的数据行。

![](..%2Fassets%2Fdatatable003.jpg)

---

## **4. 运行时读取 DataTable**

### **Blueprint 读取**

![](..%2Fassets%2Fdatatable004.jpg)

![](..%2Fassets%2Fdatatable005.jpg)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
除了行，还可以工具列名做一些类似筛选的操作
</chatmessage>

![](..%2Fassets%2Fdatatable006.jpg)

### **C++ 读取**

### 获取行结构体

```cpp
    const T* RowData = DataTable->FindRow<T>(RowName, TEXT("GetRows"));
    
    //例如我们刚刚的结构体
    FInventoryBase* ItemRow = ItemDataTable->FindRow<FInventoryBase>(FName("行名"), “标识字符串”);
```

---

## **5. 动态修改 DataTable（运行时）数据**
虽然 `DataTable` 主要用于存储静态数据，但在运行时也可以修改：
```cpp
if (ItemRow)
{
    ItemRow->ItemValue += 100;  // 修改数值
}
```


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

⚠️ 注意：**DataTable 并不会自动保存修改，运行时修改的数据不会持久化到 `.uasset` 文件中**。

</chatmessage>

---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >

编辑器模式下是可以修改的，例如在`UEditorUtilityWidget`中使用

</chatmessage>

![](..%2Fassets%2Fdatatable007.jpg)

### 表格蓝图函数库


```cpp
   Source/Runtime/Engine/Classes/Kismet/DataTableFunctionLibrary.h
```

### 获取多行

```cpp
    #if WITH_EDITOR
        TArray<FName> EditorGetDatatableRowNames() const;
    #endif
    
    /** 存储 DataTable 的引用 */
    UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = "DataTable")
    TObjectPtr<const UDataTable> DataTable;

    
    /** 存储多个 RowNames */
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "DataTable", meta = (GetOptions = "EditorGetDatatableRowNames"))
    TSet<FName> RowNames;
    
    /** 通过 RowNames 批量获取表格行数据 */
    template <typename T>
    TArray<T> GetRows() const
    {
        TArray<T> Result;

        if (!DataTable)
        {
            UE_LOG(LogTemp, Warning, TEXT("DataTableMultiRowHandle: DataTable is not set!"));
            return Result;
        }

        // 遍历所有 RowName，查找对应的行
        for (const FName& RowName : RowNames)
        {
            const T* RowData = DataTable->FindRow<T>(RowName, TEXT("GetRows"));
            if (RowData)
            {
                Result.Add(*RowData);
            }
            else
            {
                UE_LOG(LogTemp, Warning, TEXT("DataTableMultiRowHandle: Row %s not found in DataTable"), *RowName.ToString());
            }
        }

        return Result;
    }
```


## 进阶

### `UScriptStruct`

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >

`UScriptStruct` 是啥啊？U开头不上结构体吧！

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

少年，你是不是非常困惑？结构体一般是F开头，现在又冒充来一个U开头的`UScriptStruct`

</chatmessage>

### `UScriptStruct` 和 `FTableRowBase` 的关系

>UScriptStruct 是 Unreal Engine 5（UE5） 用于 反射和序列化 C++ 结构体（struct） 的核心系统。它使得 struct 具备 蓝图可用性、网络复制、GC（垃圾回收）支持 等功能。
在 UE5 中，普通的 struct 是 标准 C++ 结构体，但如果需要让引擎识别它（如在蓝图或 DataTable 中使用），就必须使用 USTRUCT(BlueprintType) 进行标记，而 USTRUCT 背后的实现正是 UScriptStruct。

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
！卧槽
</chatmessage>

![](..%2Fassets%2Fdatatable008.png)

### 源码解析

![](..%2Fassets%2Fdatatable009.jpg)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

FindRow的本质是`return reinterpret_cast<T*>(RowData);` （安全性解析关键字）即返回Datatable中维护的`TMap<FName, uint8*>		RowMap;`对应的Value

</chatmessage>

### uint8*

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
可是为啥uint8* 可以转成结构体啊！
</chatmessage>


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

`uint8*` 是一个指向无符号 8 位整数（即字节）的指针，本质是 原始内存块的起始地址。

</chatmessage>

>UDataTable 的 RowMap 存储行数据时，以 uint8* 表示每行数据的起始地址。
这是因为它需要以与类型无关的原始内存形式 存储结构体数据，便于动态管理不同结构体类型的行数据。


### 为什么能用 reinterpret_cast<T*> 转换？

>Unreal 的 USTRUCT 结构体默认是 Plain Old Data (POD) 类型，没有虚函数表（vtable）或复杂继承关系。
其内存布局是连续的，字段顺序和偏移量在编译时确定。
