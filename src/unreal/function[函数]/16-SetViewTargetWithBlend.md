---
title: F16.SetViewTargetWithBlend平滑过度相机的几种方法
order : 16
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
基于SetViewTargetWithBlend平滑过度相机的几种方法
</chatmessage>

![](..%2Fassets%2FSetViewTargetWithBlend001.png)

## 方案1

1. 定义一个接口和一个相机数组

```cpp

//用于存场景中的相机
UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = Input, meta = (AllowPrivateAccess = "true"))
TArray<ACameraActor*> CameraArr;

UFUNCTION(BlueprintCallable, BlueprintNativeEvent, Category = "CameraInterface")
void IChangeCamera (int32 CameraID,float CameraSwitchTime) ;
```
2. 继承并实现

```cpp
//InterfaceChangeCamera Part1 .h 相机切换函数
void IChangeCamera_Implementation(int32 CameraID, float CameraSwitchTime) override;
void AInteractiveControllerPawn::IChangeCamera_Implementation(int32 CameraID, float CameraSwitchTime)
{
	if (PlayerController)
	{
		UExorcistFunctionLibrary::SwitchCameraByID(PlayerController, CameraArr, CameraID, CameraSwitchTime);
		GEngine->AddOnScreenDebugMessage(1, 1.0f, FColor::White, FString::SanitizeFloat(CameraID), true,
		                                 FVector2D(1, 1));
	}
}
//可以将其放入蓝图函数库中
void UExorcistFunctionLibrary::SwitchCameraByID(APlayerController* PlayerController,
                                                const TArray<ACameraActor*>& CameraArr, int32 CameraID,
                                                float CameraSwitchTime /*= 2.0f*/)
{
	// 检查输入的有效性
	if (!PlayerController || CameraArr.Num() == 0 || CameraID < 0 || CameraID >= CameraArr.Num())
	{
		// 输入无效，提前返回
		return;
	}

	// 获取当前相机
	AActor* CurrentCamera = PlayerController->GetViewTarget();

	// 检查相机ID是否与当前相机的ID相同
	if (CameraArr[CameraID] == CurrentCamera)
	{
		// 相机已经处于活动状态，提前返回
		return;
	}

	// 尝试将选择的相机角色转换为CameraActor类型
	ACameraActor* SelectedCamera = Cast<ACameraActor>(CameraArr[CameraID]);
	if (SelectedCamera)
	{
		// 将新相机设置为视角目标，并应用混合过渡效果
		PlayerController->SetViewTargetWithBlend(SelectedCamera, CameraSwitchTime); // 可根据需要调整混合时间
	}
}
```

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
这个方法有个缺点，就是Pawn必须提前放到场景中，然后指定相机。
</chatmessage>

![](..%2Fassets%2FSetViewTargetWithBlend002.png)

## 方案2

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
SetViewTargetWithBlend必须传入相机Actor而不是组件Component,而且这种绑定多相机的操作除非很明确设定，一般应该让蓝图自由发挥。
因此，我们可以添加子Actor来解决，配合之前的接口就可以实现动态切换相机了。
</chatmessage>

![](..%2Fassets%2FSetViewTargetWithBlend003.png)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
当然，最好是加入一些延迟锁，防止用户高频操作。
</chatmessage>

## 参考文档

[官方论坛](https://forums.unrealengine.com/t/how-to-make-smooth-camera-switch-transition/585725/6)

