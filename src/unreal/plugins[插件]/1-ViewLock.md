---
title: P1.ViewLock
order : 1
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
Baba!我想做一个辅助锁敌插件！
</chatmessage>

## 思考

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
没明白你想要做什么？
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
锁敌锁敌，顾名思义就是类似老头环那种，屏幕中心出现一个辅助瞄准UI玩家视角会自动瞄准吸附到锁定对象上！
</chatmessage>

![](..%2Fassets%2Fviewlock001.jpg)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
说说你的理解
</chatmessage>

## 方案1

### 发射简单射线

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
无非就是发射一道射线然后锁定相机到物体上。
</chatmessage>

![](..%2Fassets%2Fviewlock.jpg)

### 方案1|问题
<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
你这种方案过于简单了，大的物体勉强凑合。如果有这种小的物体阁下如何应对？
</chatmessage>

![](..%2Fassets%2Fviewlock002.jpg)

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
射线检测的距离如果极远，则会出现这种尴尬场景。
</chatmessage>

<gifwithbutton src="../../assets/unrealgif/hpup38.gif"/>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
这难道不是你自己菜吗（小声bb）瞄准到对面了嘛？
</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
至少我们可以确定以下几点：
</chatmessage>

1. 单纯的射线并不适合用来检测物体。
2. 需要一个极限检测距离。
3. 需要一个极限脱离距离。

## 方案2

### 球状射线检测

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
既然不好瞄准发射一道球状射线，然后获取最先碰到的物体不就行了？
</chatmessage>

![](..%2Fassets%2Fviewlock003.jpg)

### 方案2|问题

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
想法很不错！但你是否考虑过下图的情况？你的瞄准目标是远方的物体，实际锁定的确实右边这个物体。
</chatmessage>

![](..%2Fassets%2Fviewlock004.jpg)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
给我整不会了！球状射线能检测到多个物体，可是最近的这个物体不一定是我想要的物体！
</chatmessage>

## 方案3

### 球状射线检测+视口中心夹角计算

![](..%2Fassets%2Fviewlock005.jpg)

### 原理说明

1. **发射球形射线**：确定所有与球体相交的物体。
2. **计算每个物体的夹角**：评估物体相对于视口方向的角度。
3. **选择最小夹角物体**：找到夹角最小的物体作为最终结果。

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
这样的方法确保了找到的物体不仅在视口范围内，而且是最接近视口中心方向的物体。
</chatmessage>


### 核心函数

``` cpp
AActor* UViewLockComponent::GetNearestFocusActor(ETraceType TraceType)
{
    if (!ViewController) return nullptr;

    // 获取控制器视口位置和方向
    FVector ViewportLocation;
    FRotator ViewportRotation;
    ViewController->GetPlayerViewPoint(ViewportLocation, ViewportRotation);

    // 以用户组件位置为起点
    const FVector StaLocation = GetOwner()->GetActorLocation();
    // 视口朝向*距离为终点
    const FVector EndLocation = StaLocation + ViewportRotation.Vector() * LockViewAttribute.MaxFocusDist;

    // 根据枚举值选择执行的追踪方法
	switch (TraceType)
	{
	case ETraceType::Single:
		return PerformSingleTrace(StaLocation, EndLocation);
	case ETraceType::Multi:
		return PerformMultiTrace(ViewportLocation, ViewportRotation, StaLocation, EndLocation);
	default:
		return nullptr;
	}
}
//方案2
AActor* UViewLockComponent::PerformSingleTrace(const FVector& StaLocation, const FVector& EndLocation)
{
    FHitResult OutHit;
    UKismetSystemLibrary::SphereTraceSingleForObjects(
        this,
        StaLocation,
        EndLocation,
        LockViewAttribute.ViewHalfSize,
        LockViewAttribute.ObjectTypes,
        false,
        {},
        LockViewAttribute.DebugType,
        OutHit,
        true);
    return OutHit.GetActor();
}
//方案3
AActor* UViewLockComponent::PerformMultiTrace(const FVector& ViewportLocation, const FRotator& ViewportRotation, const FVector& StaLocation, const FVector& EndLocation)
{
    TArray<FHitResult> OutHits;
    UKismetSystemLibrary::SphereTraceMultiForObjects(
        this,
        StaLocation,
        EndLocation,
        LockViewAttribute.ViewHalfSize,
        LockViewAttribute.ObjectTypes,
        false,
        {},
        LockViewAttribute.DebugType,
        OutHits,
        true);

    if (OutHits.Num() == 0) return nullptr;

    float MinAngle = MAX_FLT;
    AActor* NearestActor = nullptr;
	
    for (const FHitResult& Hit : OutHits)
    {
        AActor* HitActor = Hit.GetActor();
        if (HitActor)
        {
            // 获取物体位置
            FVector ActorLocation = HitActor->GetActorLocation();

            // 计算物体与玩家视口方向的向量
            FVector ToActor = ActorLocation - ViewportLocation;
            ToActor.Normalize();

            // 计算玩家视口方向的向量
            FVector ViewDirection = ViewportRotation.Vector();

            // 计算物体与玩家视口方向的夹角
            float Angle = FMath::RadiansToDegrees(FMath::Acos(FVector::DotProduct(ToActor, ViewDirection)));

            // 更新最小夹角和对应的物体
            if (Angle < MinAngle)
            {
                MinAngle = Angle;
                NearestActor = HitActor;
            }
        }
    }

    return NearestActor;
}
```




