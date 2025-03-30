---
title: c12.数据表格|Datatable
order: 1200
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
开个坑先记录一些Datatable的代码判断
</chatmessage>

### 获取行结构体

```cpp
    const T* RowData = DataTable->FindRow<T>(RowName, TEXT("GetRows"));
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