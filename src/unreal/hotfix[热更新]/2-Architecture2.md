---
title: HF|热更新02
order: 2
category:
  - unreal
---

## 前情回顾

前文中我们已经讨论了两个基础的更新方案，并意识到恶意破坏补丁可能带来的严重问题。本文将继续探讨如何优化和完善我们的方案。

## 校验

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
前文我们已经意识到验证本地文件的重要性，称之为校验
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
那具体怎么校验呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
如果不考虑分片，每个文件都可以计算出一个MD5值，通过比较本地文件和服务器上的MD5值来验证文件是否一致。
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
MD5?好像百度网盘上传文件时会计算文件的MD5，如果服务器有则不上传，从而直接实现秒传。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
没错，UE5中也有计算MD5的函数，我们可以封装成工具函数。
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
现在回想一下某些大厂游戏的更新流程。
</chatmessage>

### 独立启动器

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
我发现它们好像不是用游戏本体直接更新的，而是通过一个启动器来更新！
</chatmessage>

![](..%2Fassets%2Fhotfix031.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
对，有些游戏的启动器甚至不用登录，只是一个纯粹的游戏下载、展示和修复工具。
</chatmessage>


## 方案3

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
咱们的方案3浮出水面了！
</chatmessage>

![](..%2Fassets%2Fhotfix2.svg)

### 后端服务

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
问题来了！JSON怎么来？我怎么通知客户端更新？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
我们需要一个专门发送更新通知的设备，比如一台云电脑。我们称这个软件部分为后台服务，可以用Node.js或Spring Boot来开发。
</chatmessage>

>Spring Boot 是一个用于创建 Web 应用和服务的 Java 框架。 
Node.js 是一个开源、跨平台的 JavaScript 运行时环境。


<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
我靠！岂不是要学习Java?
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
虽说术业有专攻，咱们或多或少得了解一下，至少能走通流程。
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
我明白了！你这里的服务提供的是远程接口，后台和客户端都可以根据接口来修改规则。
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
根据咱们的需求分析出咱们至少需要这些服务：
</chatmessage>

1. 管理和提供版本更新信息服务

2. 文件验证和安全性服务

### 数据库|数据层

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
提到文件验证，是不是咱们还需要一个SQL服务去维护咱们的数据？
</chatmessage>

>SQL（Structured Query Language，结构化查询语言）是一种用于管理和操作关系型数据库的标准化编程语言。

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
SQL一般只存储对应的数据链接，我们还需要专门的空间去存储我们的游戏本体。
比如七牛云空间、阿里OSS、腾讯的COS等服务
</chatmessage>

<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
搜得寺内
</chatmessage>

### 常用架构


![](..%2Fassets%2Fwljg001.png)


