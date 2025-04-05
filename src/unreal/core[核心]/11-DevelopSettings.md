---
title: c11.DevelopSettings|编辑器配置属性
order :  1100
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
我经常能看到一些插件在编辑器中能设置一些属性，该怎么做？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

在这之前我们先来理解一下UE的启动流程，以及插件的启动流程[传送门](../ui_界面_/slate_ui框架_/1-editortoolPlugin.html)

</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
游戏启动时，显示四个不同的引擎预加载屏幕，每个引擎启动阶段一个屏幕。
</chatmessage>

![](..%2Fassets%2Fpreload-screen-diagram.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
而设置可以分两种方案
</chatmessage>

## 方案1 ISettingsModule

1. 模块激活/销毁时

```cpp

void FCommonGameModule::StartupModule()
{
	RegisterSettings();
}
void FCommonGameModule::ShutdownModule()
{
	if (UObjectInitialized())
	{
		UnregisterSettings();
	}
}
```
2. 利用 FModuleManager拿到设置，并动态注册

```cpp
void FCommonGameModule::RegisterSettings()
{
	if (ISettingsModule* SettingsModule = FModuleManager::GetModulePtr<ISettingsModule>("Settings"))
	{
		ISettingsSectionPtr UIManagerSettingsSection = SettingsModule->RegisterSettings("Project", "Game", "UI Polic",
			LOCTEXT("UINavigationSettingsName", "UI Policy"),
			LOCTEXT("UINavigationSettingsDescription", "Configure the UI policy."),
			GetMutableDefault<UGameUIManagerSubsystem>()
		);

		if (UIManagerSettingsSection.IsValid())
		{
			UIManagerSettingsSection->OnModified().BindRaw(this, &FCommonGameModule::HandleSettingsSaved);
		}
		
	}
}
void FCommonGameModule::UnregisterSettings()
{
	if (ISettingsModule* SettingsModule = FModuleManager::GetModulePtr<ISettingsModule>("Settings"))
	{
		SettingsModule->UnregisterSettings("Project", "Game", "UIPolicy");
	}
}

bool FCommonGameModule::HandleSettingsSaved()
{
	GetMutableDefault<UGameUIManagerSubsystem>()->SaveConfig();
	return true;
}
```

## 方案2 继承 UDeveloperSettings或UDeveloperSettingsBackedByCVars

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
UDeveloperSettingsBackedByCVars 是继承UDeveloperSettings的类，自动发现的 settings 对象的基类，其中部分或全部设置存储在控制台变量中，而不是 config 变量中。
</chatmessage>

```cpp
UCLASS(config=Game, defaultconfig, meta=(DisplayName="Common Loading Screen"))
class UCommonLoadingScreenSettings : public UDeveloperSettingsBackedByCVars
{
	GENERATED_BODY()

public:
	UCommonLoadingScreenSettings();

public:

	UPROPERTY(config, EditAnywhere, Category=Display, meta=(MetaClass="/Script/UMG.UserWidget"))
	FSoftClassPath StartUpLoadingScreenWidget;
}
```
<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
使用起来非常简单，只需要记得加个config宏标记即可
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
可以通过GetDefault拿到类，也可以用GetMutableDefault动态修改
</chatmessage>

```cpp
//拿到设置类
const UCommonLoadingScreenSettings* Settings = GetDefault<UCommonLoadingScreenSettings>();

//动态修改
const UCommonLoadingScreenSettings* Settings = GetMutableDefault<UCommonLoadingScreenSettings>();
```