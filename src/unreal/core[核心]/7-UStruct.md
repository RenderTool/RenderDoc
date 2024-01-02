---
title: core7.UStruct|结构体
order : 7
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
UEC++中怎么写Struct
</chatmessage>

<chatmessage avatar="../../assets/emoji/new9.png" :avatarWidth="40" alignLeft>
安排!
</chatmessage>

1. Rider添加一个类

![](..%2Fassets%2Fclassadd.png)


2. 添加如下函数

```cpp
#pragma once

#include "CoreMinimal.h"
#include "MyStruct.generated.h"

USTRUCT(BlueprintType)
struct  FMyStruct 
{
	GENERATED_BODY()
public:
	
};
```

3. 当然也可以继承FTableRowBase使其可以变成datatable

```cpp
#pragma once

#include "CoreMinimal.h"
#include"Engine/Datatable.h"
#include "MyStruct.generated.h"

USTRUCT(BlueprintType)
struct  FMyStruct : public FTableRowBase
{
	GENERATED_BODY()
public:
	
};
```

![](..%2Fassets%2Fgftip.png)