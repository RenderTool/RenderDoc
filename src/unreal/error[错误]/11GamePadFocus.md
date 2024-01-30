---
title: Error11. ListView手柄聚焦失效无法操作
order : 11
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
加了一个ListView或者TileView，用手柄发现无法操作!
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
这是一个非常坑的东西！需要保证下面几个操作。
</chatmessage>

### 1.前提

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
需要使用CommonUI
</chatmessage>

### 2.去掉虚线选择轮廓

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

**编辑 - 项目首选项 - 用户界面** `渲染焦点规则`设置为`从不`

</chatmessage>

![](..%2Fassets%2Fganepadfocus.png)

### 3.聚焦组件

<chatmessage avatar="../../assets/emoji/new2.png" :avatarWidth="50" alignLeft>
和聚焦组件是否开启半毛钱关系没有，真的坑
</chatmessage>

![](..%2Fassets%2Fganepadfocus03.png)

### 4.重写函数GetDesiredFocus

<chatmessage avatar="../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
这样写是没用的
</chatmessage>

![](..%2Fassets%2Fganepadfocus02.png)

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
最好是判断现在是不是手柄输入，然后导航到索引为0的位置。
</chatmessage>

![](..%2Fassets%2Fganepadfocus05.png)

<chatmessage avatar="../../assets/emoji/bqb01.png" :avatarWidth="40">
导航和设置有区别吗？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
有大区别！，导航到位置只是导航不会触发，设置则会触发点击事件。
</chatmessage>

![](..%2Fassets%2Fganepadfocus04.png)

### 5.吊用没有的函数 NativeOnFocusReceived
<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
我看Lyra还写了一个接口函数，实测吊用没有，我真的想吐槽这方面官方文档真的不够仔细，能不能让开发者更专注游戏细节而不是这种基本细节！
</chatmessage>

```cpp
FReply UHeroSkinsWidget::NativeOnFocusReceived(const FGeometry& InGeometry, const FFocusEvent& InFocusEvent)
{
	const UCommonInputSubsystem* InputSubsystem = GetInputSubsystem();
	if (InputSubsystem && InputSubsystem->GetCurrentInputType() == ECommonInputType::Gamepad)
	{
		if (SkinListView)
		{
			SkinListView->NavigateToIndex(0);
			SkinListView->SetSelectedIndex(0);
			return FReply::Handled();
		}
	}
	return FReply::Unhandled();
}
```
![](..%2Fassets%2Fganepadfocus06.png)