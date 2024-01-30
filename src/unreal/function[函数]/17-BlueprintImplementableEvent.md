---
title: F17.BlueprintImplementableEventC++定义蓝图实现
order : 17
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
Baba!C++中的函数怎么声明让蓝图做具体实现?
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" alignLeft >
BlueprintImplementableEvent
</chatmessage>

```cpp
UCLASS()
class YOURPROJECT_API UYourClass : public UObject
{
    GENERATED_BODY()

public:
    // 使用 UFUNCTION(BlueprintImplementableEvent) 声明蓝图实现的函数
    UFUNCTION(BlueprintImplementableEvent, Category = "YourCategory")
    void YourBlueprintFunction();
};

// 在你的类的cpp文件中可以提供一个默认实现
void UYourClass::YourBlueprintFunction()
{
    UE_LOG(LogTemp, Warning, TEXT("Default implementation in C++"));
}

```