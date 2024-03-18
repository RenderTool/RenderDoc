---
title: F20.Vector中Size和Length区别
order : 20
category:
  - u++
---

### 导言

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
Vector中Size和Length区别？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
同个东西。。。
</chatmessage>

```cpp
template<typename T>
FORCEINLINE T TVector<T>::Size() const
{
    return FMath::Sqrt(X*X + Y*Y + Z*Z);
}

template<typename T>
FORCEINLINE T TVector<T>::Length() const
{
	return Size();
}

```