---
title: Umg.UI焦点问题
order: 7
category:
  - unreal
---

## UI焦点问题

## 导言

>最近在做道具轮盘，大致流程是按下某个按键，弹出一个轮盘，使用鼠标或者手柄来选择某个插槽。
本篇记录一下实现中的一些坑。

### 实现原理

```cpp

FVector2D URadialWheelWidget::GetWheelCenterPosition()
{
	if (!WheelOverlay)
	{
		return FVector2D::ZeroVector;
	}

	// 获取 Overlay 的几何信息
	const FGeometry& Geometry = WheelOverlay->GetCachedGeometry();

	// 本地中心点
	const FVector2D LocalCenter = Geometry.GetLocalSize() * 0.5f;

	// 转换到绝对屏幕坐标
	FVector2D PixelPosition;
	FVector2D ViewportPosition;
	USlateBlueprintLibrary::LocalToViewport(this, Geometry, LocalCenter, PixelPosition, ViewportPosition);

	// 加上DPI缩放
	return ViewportPosition * UWidgetLayoutLibrary::GetViewportScale(this);
}
void URadialWheelWidget::CalcAngleAndDistanceFromDir(const FVector2D& Dir, float& OutAngle, double& OutDistance) const
{
	OutDistance = Dir.Size();

	if (!Dir.IsNearlyZero())
	{
	    // Y 翻转
		OutAngle = FMath::RadiansToDegrees(FMath::Atan2(Dir.Y, Dir.X)) + 90.f;
		OutAngle = FRotator::ClampAxis(OutAngle);
	}
	else
	{
		OutDistance = 0.0;
		OutAngle = 0.f;
	}
}
FVector2D URadialWheelWidget::GetMousePosition()
{
    float Angle = 0.f;
	double Distance = 0.0;

	//1. 获取鼠标在屏幕中的绝对位置（考虑DPI缩放）
	const FVector2D MousePos = UWidgetLayoutLibrary::GetMousePositionOnViewport(this) *
							UWidgetLayoutLibrary::GetViewportScale(this);
    //2.获取轮盘中心坐标
	const FVector2D Center = GetWheelCenterPosition();
    //3.计算偏移向量
	const FVector2D Dir = MousePos - Center;
	
	//4.计算角度和距离
	CalcAngleAndDistanceFromDir(Dir, Angle, Distance);
}
	
```

<chatmessage avatar="../../../assets/emoji/new9.png" :avatarWidth="40" alignLeft >

这里比较重要的知识点是坐标系的转化，UE用的是反笛卡尔坐标系，即`Y`轴朝下为正方向，所以反`Tan`后需要反转一下。

</chatmessage>
