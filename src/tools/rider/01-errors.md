---
title: 修复Rider在UE5.2报错找不到DirectX符号问题
order : 1
category:
  - rider
---

## 修复Rider在UE5.2报错找不到DirectX符号问题

## 问题复现

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
BABA不想再重新做了，直接网图了。
</ChatMessage>

![](assets%2Fimage3.png)

## 解决思路

![](assets%2Fjjwt.png)

### 1.下载文件

>UE5.2的源码Github中下载[DirectX.Build.cs](https://github.com/EpicGames/UnrealEngine/blob/5.2/Engine/Source/ThirdParty/Windows/DirectX/DirectX.Build.cs)  
放入<span style = "color : red ;">UE_5.2(UE根目录)\Engine\Source\ThirdParty\Windows\DirectX</span>

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
打不开链接就直接新建一个DirectX.Build.cs
</ChatMessage>

![](assets%2FSAVE.jpg)

```cpp
// Copyright Epic Games, Inc. All Rights Reserved.

using System.IO;
using UnrealBuildTool;

public class DirectX : ModuleRules
{
	public static string GetDir(ReadOnlyTargetRules Target)
	{
		return Target.UEThirdPartySourceDirectory + "Windows/DirectX";
	}

	public static string GetIncludeDir(ReadOnlyTargetRules Target)
	{
		return GetDir(Target) + "/include";
	}

	public static string GetLibDir(ReadOnlyTargetRules Target)
	{
		return Path.Combine(GetDir(Target), "Lib", Target.Architecture.WindowsName) + "/";
	}

	public static string GetDllDir(ReadOnlyTargetRules Target)
	{
		return Path.Combine(Target.RelativeEnginePath, "Binaries/ThirdParty/Windows/DirectX", Target.Architecture.WindowsName) + "/";
	}

	public DirectX(ReadOnlyTargetRules Target) : base(Target)
	{
		Type = ModuleType.External;
	}
}

```
### 添加条目
>Rider定位到\Engine\Source\ThirdParty\Windows对着Windows文件夹右键添加现有条目且选择DirectX文件夹
![](assets%2Fadditem.jpg)

## 参考链接

[知乎dest1yo](https://zhuanlan.zhihu.com/p/647644457)

[Rider官方](https://youtrack.jetbrains.com/issue/RSCPP-34310/Cant-resolve-DirectX-symbol-in-engine-sources-UE-5.2#focus=Comments-27-7378458.0-0)