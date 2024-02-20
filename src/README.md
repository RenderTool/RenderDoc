---
home: true
icon: home
title: 主页
heroImage: ./logo.svg
#bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
#bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: RenderDoc
tagline:  斯高和的笔记
actions:
  - text: 开始修炼
    link: /#🤞关于本站
    type: primary
#features:
#  - title: 技术聚焦
#    details: 以 UE4/5 C++ 为主线，专注于解决与 UE4/5 相关的技术问题。
#  - title: 踩坑记录
#    details: 包括多种技能的踩坑经验，涵盖 C++、Lua、Python、Js 等...
#  - title: 丰富表达
#    details: 图文代码结合，直观地展示解决方案，同时享受问题解决的过程。



---
<hr>

### 🤞关于本站

欢迎你的到来，本站是基于 [VuePress](https://theme-hope.vuejs.press/zh/) 的中文个人备忘随笔。

我主要记录与建模、渲染技术、光线追踪、[UE4/UE5](https://docs.unrealengine.com/5.0/zh-CN/)、各类编程语言、以及各类工具使用等综合技术应用相关的内容。

希望这里的内容能对你有所帮助！

<hr>

### 主要形式：

### 1. 图文对话

<chatmessage avatar="./assets/emoji/hx.png" :avatarWidth="40">
babaUE引擎怎么在屏幕中打印内容！
</chatmessage>

<chatmessage avatar="./assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
  直接右键添加一个print节点就行啦！
</chatmessage>

### 2. 外链引用-视频-插件等

<iframe src="https://blueprintue.com/render/j0oxoqx7/" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

>蓝图模块基于 **[BlueprintUE](https://blueprintue.com/)**当前BlueprintUE部分是外链，无法保证其长期有效性。因此，每个蓝图都会提供一个备用的图像版本。

<chatmessage avatar="./assets/emoji/hx.png" :avatarWidth="40">
可我问的是C++怎么写？
</chatmessage>

<chatmessage avatar="./assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
上代码！ 
</chatmessage>

### 3. 代码演示

``` cpp
#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "TEST.generated.h"

UCLASS()
class EXORCIST_API UTEST : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()
	
public:
	
	UFUNCTION(BlueprintCallable, Category ="HelloWorld")
	static void HelloUE()
	{
	GEngine->AddOnScreenDebugMessage(-1, 5.f, FColor::Red, TEXT("HelloWorld"));
	}
};

```

<chatmessage avatar="./assets/emoji/bqb (6).png" :avatarWidth="40">
为了TA的视力健康，建议采用深色主题。
</chatmessage>

## 留情

<chatmessage avatar="./assets/emoji/hh.png" :avatarWidth="40">
本站大多为个人踩坑合实践记录,如果你发现一些错误和纰漏实属正常。要么是我不懂，要么是我还没写。
</chatmessage>

>如果你更深入的了解我，建议你看下我写的 [写在前面](/preface/README.md)

## :email: 联系

- **Email**: <a href="mailto:750831855@qq.com">750831855@qq.com</a>
- **声明**：请注意，本站仅供个人学习参考之用，部分流程和术语可能需要读者自行辨别和确认。
