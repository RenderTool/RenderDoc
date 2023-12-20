---
title: Macro5.UPARAM
order: 5
category:
  - u++
tag:
  - Specifiers
---

<ChatMessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="45">
Baba我遇到困难了！
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
怎么了？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="45">
这里的UPARAM是啥啊？
</ChatMessage>

```cpp
	UFUNCTION(BlueprintCallable, BlueprintCosmetic, Category = "Global UI Extensions")
	static UCommonActivatableWidget* PushContentToLayer_ForPlayer(const ULocalPlayer* LocalPlayer, UPARAM(meta = (Categories = "UI.Layer")) FGameplayTag LayerName, UPARAM(meta = (AllowAbstract = false)) TSubclassOf<UCommonActivatableWidget> WidgetClass);
```
## UPARAM
<ChatMessage avatar="../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
UPARAM 是用于更改函数参数行为的宏。
</ChatMessage>


::: note
### `UPARAM(DisplayName="abc")`
:::

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
允许重命名函数中的参数。
</ChatMessage>

```cpp
UFUNCTION(BlueprintCallable)
void TestFun(
  UPARAM(DisplayName = "Test (floatname)") float Test,
```


::: note
### `UPARAM(ref)`
:::

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
修改输入输出
</ChatMessage>

 <ChatMessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
默认情况下，一个使用引用传递参数的 BlueprintCallable 函数会将该参数作为输出引脚（返回值）而不是输入引脚暴露。可以通过使用 UPARAM(ref) 宏来改变这种行为。
</ChatMessage>

```cpp
UFUNCTION(BlueprintCallable)
void FillDogInfo(FDogInfo& OutResult);

UFUNCTION(BlueprintCallable)
void UseAndFillDogInfo(
    UPARAM(ref) FDogInfo& SearchParams);

UFUNCTION(BlueprintCallable)
void UseDogInfo(const FDogInfo& SearchParams);
```

![](..%2Fassets%2Fuparam-ref.jpg)

::: note
###  `UPARAM(meta=(Categories)`
:::

<ChatMessage avatar="../../assets/emoji/new5.png" :avatarWidth="40" alignLeft>
限制 Gameplay 标签
</ChatMessage>

>如果没有现在分组，Gametag会显示所有标签。

![](..%2Fassets%2Fwithoutparam.png)

>加上UPARAM则可以直接限制到分类。

![](..%2Fassets%2Fhasuparam.png)

```cpp
	UFUNCTION(BlueprintCallable, BlueprintCosmetic, Category = "Global UI Extensions")
	static UCommonActivatableWidget* PushContentToLayer_ForPlayer(const ULocalPlayer* LocalPlayer, UPARAM(meta = (Categories = "UI.Layer")) FGameplayTag LayerName, UPARAM(meta = (AllowAbstract = false)) TSubclassOf<UCommonActivatableWidget> WidgetClass);
```



::: note
###  `UPARAM(meta=(AllowAbstract=true))`
:::

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
允许抽象选择类
</ChatMessage>

```cpp
UFUNCTION(BlueprintCallable, Category = "Composure", meta = (DeterminesOutputType = "OutputType"))
UCompositingElementOutput* FindOutputPass(UPARAM(meta = (AllowAbstract = "false"))TSubclassOf<UCompositingElementOutput> OutputType);
```

### 参考

[https://unrealcommunity.wiki/uparam-9azlt341](https://unrealcommunity.wiki/uparam-9azlt341)

[https://benui.ca/unreal/uparam/](https://benui.ca/unreal/uparam/)
