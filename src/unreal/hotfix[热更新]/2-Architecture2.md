---
title: HF|热更新02
order: 2
category:
  - unreal
---

## 前情回顾

前文中，咱们已经讨论了2个非常简陋的更新方案了，并且咱们已经意识到恶意破坏补丁带来的灾难性BUG，本文将继续抽丝剥茧，实践优化完善我们的方案。

## 校验

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
前文我们已经意识到验证本地文件的重要性，我们把这个过程暂且称之为校验
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
那具体怎么校验呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
如果不考虑分片，理论上每个文件都能计算出一个MD5值（哈希值），通过对比本地文件MD5和服务器MD5来验证文件是否一致。
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
MD5?好像百度网盘上传文件时会计算文件的MD5，如果服务器有则不上传，从而直接实现秒传。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
是的，UE5中也有计算MD5的Help函数，咱们可以独立封装一成一个工具函数。
</chatmessage>

### 获取文件MD5(HASH)

```cpp
FMD5Hash CurrentPakHash = FMD5Hash::HashFile(*InFile);
FString CurrentPakHashString = LexToString(CurrentPakHash);
```

### 工具函数

```cpp
USTRUCT(BlueprintType)
struct FPakFileInfo
{
	GENERATED_USTRUCT_BODY()
public:

	UPROPERTY(EditAnywhere,BlueprintReadWrite)
	FString FileName;
	UPROPERTY(EditAnywhere,BlueprintReadWrite)
	FString Hash;
	UPROPERTY(EditAnywhere,BlueprintReadWrite)
	int32 FileSize = 0;
};
bool UFlibPatchParserHelper::GetPakFileInfo(const FString& InFile, FPakFileInfo& OutFileInfo)
{
	bool bRunStatus = false;
	if (FPaths::FileExists(InFile))
	{
		FString PathPart;
		FString FileNamePart;
		FString ExtensionPart;

		FPaths::Split(InFile, PathPart, FileNamePart, ExtensionPart);

		FMD5Hash CurrentPakHash = FMD5Hash::HashFile(*InFile);
		OutFileInfo.FileName = FString::Printf(TEXT("%s.%s"),*FileNamePart,*ExtensionPart);
		OutFileInfo.Hash = LexToString(CurrentPakHash);
		OutFileInfo.FileSize = IFileManager::Get().FileSize(*InFile);
		bRunStatus = true;
	}
	return bRunStatus;
}
```


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
现在仔细回想一下腾x等游戏更新流程。
</chatmessage>

### 独立启动器

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
我靠！他们好像不是用本体直接更新的！而是用一个类似启动器的东西！
</chatmessage>

![](..%2Fassets%2Fhotfix031.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
是的，有的游戏甚至启动器都不需要登录，而是一个纯粹的游戏下载、公共展示、游戏修复工具。
</chatmessage>


## 方案3

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
咱们的方案3浮出水面了！
</chatmessage>

![](..%2Fassets%2Fhotfix2.svg)

### 临时文件


![](..%2Fassets%2Fwljg001.png)


