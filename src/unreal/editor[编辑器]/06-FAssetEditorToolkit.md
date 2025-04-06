---
title: ED06.Config|属性持久化
order : 24
category:
  - u++
---

## 温故

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
前面我们花了大量篇章介绍了：
</chatmessage>

### 1️⃣ 用 `AssetDefinitionDefault`注册我们的资产。
### 2️⃣ 用 `ToolMenus`扩展编辑器的菜单和工具栏。
### 3️⃣ 用 `FSlateStyleSet`自定义了一些图标。


## 属性持久化

<chatmessage avatar="../../assets/emoji/bqb (5).png" :avatarWidth="38">

先不说之前的了！我用了`EditorUtilityWidget`后，我每次打开都要重新配置内容啊！

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

`EditorUtilityWidget`本质上是一个编辑器维护的`UUserWidget`,你可以理解成编辑器模式下打开了一个UI界面。

</chatmessage>

![](..%2Fassets%2FUMGGF.jpg)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

可当我用一些类似`State Tree`等编辑他的细节面板，下次打开并不会重置数据呀！不是所有属性都能写死在默认值里的呀！

</chatmessage>

## Config

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
怎么不可以，其实你可以直接用Config配置一些属性持久化的
</chatmessage>

![](..%2Fassets%2Fconfig001.jpg)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

使用时需要在UClass以及对应的UProperty中标记`Config`

</chatmessage>

### Config|类内方法

### ① 声明类时加上 config=XXX

```cpp
UCLASS(Config=Game)
class UMyGameSettings : public UObject
{
	GENERATED_BODY()

public:
	UPROPERTY(Config, EditAnywhere, Category="Game")
	int32 DifficultyLevel;

	void ChangeSetting(int32 NewValue)
	{
		DifficultyLevel = NewValue;
		SaveConfig(); // 自动写入到 Game.ini
	}
};

```

### ② 默认保存位置

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
这里的Config 保存名是可以自定义的，他默认也提供了4个常见的保存名（保存文件位置）
</chatmessage>

```cpp
DefaultEditor.ini
DefaultEngine.ini
DefaultGame.ini
DefaultInput.ini
```

### ③自定义位置

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
当然这里写上自定义的名字也可以，只不过它会被保存到其他目录里。
</chatmessage>

![](..%2Fassets%2FConfigSaveDir.png)

___

### Config|类内限制

<chatmessage avatar="../../assets/emoji/kclr.png" :avatarWidth="38">
好麻烦啊！不支持一些复杂的数据结构啊，比如对象、TMap。无法创建多个实例配置，只支持“类默认对象”（CDO）配置
</chatmessage>


![](..%2Fassets%2Fconfig002.png)


<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="38">

而且还用手动调用 `SaveConfig` 也太麻烦了！即便我可以用`PostEditChangeProperty`自动保存，他的限制实在太多了！

</chatmessage>

---

### Config|类外方法

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

你可以改用 `UDeveloperSettings` [UDeveloperSettings直通车](../core_核心_/11-DevelopSettings.md)

</chatmessage>

## DataAsset

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">
这个方法看起来不错！但总感觉怪怪的，我就不能像DataAsset那样编辑中修改后自动存为默认值啊。比如这样：
</chatmessage>

```cpp
UCLASS(BlueprintType)
class UMyGameConfig : public UObject
{
    GENERATED_BODY()

public:
    UPROPERTY(EditAnywhere, Category = "Game Settings")
    float MaxHealth = 100.f;

};
```

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

然后，编辑器里创建对应的BP改属性，下次打开编辑器，
这些数据就还在。 **不需要写什么保存逻辑！** 

</chatmessage>

- `MaxHealth = 200`

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft >
没错啊！没毛病老铁！
</chatmessage>


<chatmessage avatar="../../assets/emoji/new7.png" :avatarWidth="38">

关键是这样写没法用<span style ="color:red"> **按钮**  </span> 这种 <span style ="color:red"> **视觉组件** </span>去执行函数了！而且为什么他会被持久化？

</chatmessage>

---

### Editor in Default

<chatmessage avatar="../../assets/emoji/new2.png" :avatarWidth="50" alignLeft >

因为编辑的是类的默认对象（Class Default Object，简称 CDO）或某个 `UObject` 的资产默认状态，
是基于构造时的值，不是运行时的动态实例。

</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="38">

那咋整我总不能 所有逻辑都用`bool` + [PostEditChangeProperty](../editor_编辑器_/01-PostEditChangeProperty.md)
吧！

</chatmessage>


## Editor Toolkit |引

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

SO!看起来我们急需要一种方法，他能像`UDataAsset`那样持久化属性，也能像`UserWidget`那样加入自定义的按钮、图片等等。

</chatmessage>
