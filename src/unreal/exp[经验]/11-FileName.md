---
title: EXP11.Path|该死的文件名！
order : 11
category:
  - u++
---

## 路径

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
咱先来了解一下几种路径
</chatmessage>

>一种是相对路径，一种则是绝对路径

![](..%2Fassets%2Fhotfix025.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
但他们都是相对于硬盘根目录的。但你在游戏里可能会看到大量类似这样的目录：
</chatmessage>

```cpp
Game/XXX
```

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

这里的`Game`其实就是`Content`(内容浏览器)目录

</chatmessage>

## 问题

<chatmessage avatar="../../assets/emoji/new7.png" :avatarWidth="40">
！说起这个我就来气！
</chatmessage>

<chatmessage avatar="../../assets/emoji/new5.png" :avatarWidth="40" alignLeft>
什么个事?
</chatmessage>

### FDirectoryPath

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">

我想创建一个包，里面要填路径，于是就用了`FDirectoryPath`

</chatmessage>

```cpp
UPROPERTY(EditAnywhere,BlueprintReadWrite)
FDirectoryPath GeneratePath;
```

<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">

非常坑爹的是他返回的不是类似`Game/`这样的路径。

</chatmessage>

>点击后会弹出一个目录选择框

![](..%2Fassets%2FFDirectoryPath001.jpg)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">

奇怪的是编辑器设置里，选择后却是类似`Game/`这样的路径，而且这个弹出的窗口看着更像是查看内部文件目录。

</chatmessage>

![](..%2Fassets%2FFDirectoryPath002.jpg)


<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
这个路径就是对的，和我们右键复制包路径是一样的。
</chatmessage>

![](..%2Fassets%2FFDirectoryPath003.jpg)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
可以用蓝图控件反射看看这货是什么。
</chatmessage>

![](..%2Fassets%2FFDirectoryPath004.jpg)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
很明显这是一个自定义的属性细节面板类，里面封装一些处理路径的方法。
</chatmessage>

![](..%2Fassets%2FFDirectoryPath005.png)


```cpp
// 响应用户点击“选择文件夹”按钮，打开目录选择对话框，并将选中的目录路径写入属性面板中的对应字段
FReply FDirectoryPathStructCustomization::OnPickDirectory(
	TSharedRef<IPropertyHandle> PropertyHandle,         // 需要设置值的属性句柄（路径字段）
	const bool bRelativeToGameContentDir,               // 是否将路径相对于游戏内容目录（Content）
	const bool bUseRelativePath                         // 是否将路径转换为工程相对路径
) const
{
	FString Directory;  // 用于保存用户最终选择的目录路径

	// 获取桌面平台模块（用于打开文件/目录对话框）
	IDesktopPlatform* DesktopPlatform = FDesktopPlatformModule::Get();
	if (DesktopPlatform)
	{
		// 获取 Slate 中当前按钮所在的窗口句柄，作为对话框的父窗口
		TSharedPtr<SWindow> ParentWindow = FSlateApplication::Get().FindWidgetWindow(BrowseButton.ToSharedRef());
		void* ParentWindowHandle = (ParentWindow.IsValid() && ParentWindow->GetNativeWindow().IsValid())
			? ParentWindow->GetNativeWindow()->GetOSWindowHandle()
			: nullptr;

		// 获取上一次打开目录的位置（用户体验优化）
		FString StartDirectory = FEditorDirectories::Get().GetLastDirectory(ELastDirectory::GENERIC_IMPORT);

		// 如果要求相对路径，且初始目录不合法，则重置为 Game Content 目录
		if (bRelativeToGameContentDir && !IsValidPath(StartDirectory, bRelativeToGameContentDir))
		{
			StartDirectory = AbsoluteGameContentDir;
		}

		// 无限循环：直到用户选择合法目录或取消对话框
		for (;;)
		{
			// 打开目录选择对话框（阻塞式）
			if (DesktopPlatform->OpenDirectoryDialog(
				ParentWindowHandle,
				LOCTEXT("FolderDialogTitle", "Choose a directory").ToString(),
				StartDirectory,
				Directory))
			{
				// 校验路径合法性（支持返回失败原因）
				FText FailureReason;
				if (IsValidPath(Directory, bRelativeToGameContentDir, &FailureReason))
				{
					// 记录最近使用目录（用于下一次打开对话框）
					FEditorDirectories::Get().SetLastDirectory(ELastDirectory::GENERIC_IMPORT, Directory);

					// 如果路径相对于 Content，去掉绝对路径前缀
					if (bRelativeToGameContentDir)
					{
						Directory.RightChopInline(AbsoluteGameContentDir.Len(), EAllowShrinking::No);
					}
					// 如果要求使用工程相对路径（如相对于 .uproject 文件）
					else if (bUseRelativePath)
					{
						Directory = IFileManager::Get().ConvertToRelativePath(*Directory);
					}

					// 设置属性面板上的值
					PropertyHandle->SetValue(Directory);
				}
				else
				{
					// 选择的路径不合法，弹出提示并更新起始目录
					StartDirectory = Directory;
					FMessageDialog::Open(EAppMsgType::Ok, FailureReason);
					continue;  // 重新打开选择对话框
				}
			}
			break;  // 用户取消选择，跳出循环
		}
	}

	return FReply::Handled();  // 返回 Slate 的处理结果
}

```


### 宏标记

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

意味着我们需要写上宏标记，让他变成`RelativeToGameContentDir`,这样就可以直接选择Content目录了。

</chatmessage>

```cpp
UPROPERTY(config, EditAnywhere, Category = "PackageSettings", meta = (RelativeToGameContentDir, LongPackageName))
FDirectoryPath GeneratePath;
```


![](..%2Fassets%2FFDirectoryPath006.png)


## 函数

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
官方封装了一些非常方便的静态函数,咱们挑几个常用的记录一下：
</chatmessage>

```text
Engine\Source\Runtime\Core\Public\Misc\Paths.h
```

### `FPaths::ValidatePath()`

> 检查路径有效性

### `FPaths::MakeValidFileName()`

> 自动转换成合法的文件名。


