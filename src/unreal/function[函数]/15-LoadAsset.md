---
title: F15.AssetLoad的几种方法
order : 15
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
资源加载的几种写法
</chatmessage>

## 前置

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
先来了解一下几个UE中的引用类型
</chatmessage>

![](..%2Fassets%2Floadassets002.png)

1. **对象引用 (`TObjectPtr`):**
    - **特性：** 对象引用是强引用，它持有对 `UObject` 派生类对象的强引用，当对象销毁时，引用计数减少。
    - **用途：** 适用于需要确保对象在引用期间不会被销毁的情况，例如需要持有一个具体对象的引用。

```cpp
TObjectPtr<UYourClass> MyObject;
```

2. **软引用 (`TSoftObjectPtr`):**
    - **特性：** 软引用是一种弱引用，它不会增加对象的引用计数。如果对象被销毁，软引用会变为无效。
    - **用途：** 适用于需要引用对象，但不要求对象一直存在的情况，例如在需要加载对象时，但不希望对象一直保持在内存中。

```cpp
TSoftObjectPtr<UYourClass> MySoftObject;
```

3. **类引用 (`TSubclassOf`):**
    - **特性：** 类引用是用于引用类的一种方式，而不是类的实例。它不会增加类的引用计数。
    - **用途：** 适用于需要引用类本身而不是类的实例的情况，例如在运行时动态生成对象的时候。

```cpp
TSubclassOf<UYourClass> MyClass;
```

4. **软类引用 (`TSoftClassPtr`):**
    - **特性：** 软类引用是软引用的类版本，用于引用类，当类被销毁时，引用变为无效。
    - **用途：** 类似于软引用，适用于需要引用类但不要求一直存在的情况，例如在需要加载类时。

```cpp
TSoftClassPtr<UYourClass> MySoftClass;
```

### 类和对象

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
类和对象什么区别？
</chatmessage>

1. **类 (Class):**
    - **定义：** 类是一个抽象的概念，是对相似对象的通用属性和行为的抽象描述。它定义了对象的结构和行为。
    - **特征：** 类是一个模板或蓝图，描述了一组对象共同的特性和行为。
    - **例子：** 如果我们考虑“汽车”作为一个类，它可能包括属性如“颜色”、“速度”、“品牌”以及行为如“启动”、“停止”等。

2. **对象 (Object):**
    - **定义：** 对象是类的实例，是类的具体化。它是内存中的一个实体，具有类定义的属性和行为。
    - **特征：** 对象是类的具体表现，具有类定义的特性和可以执行的方法。
    - **例子：** 如果我们实例化一个特定的汽车对象，它可能具有特定的颜色、速度、品牌，以及可以执行启动和停止等方法。

3. **关系：**
    - 类和对象之间的关系是抽象与具体的关系。一个类可以有多个对象的实例，每个对象都是该类的具体实现。
    - 类定义了对象的结构和行为，而对象则是类的具体实例，具有类定义的属性和方法。
    - 对象是类的实体化，可以看作是类的具体实例。

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
所以这里的引用一般是实例化的对象，但不一定是实例化的类。
</chatmessage>

## 异步

![](..%2Fassets%2Fload001.png)

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
这里主要记录一下UAssetManager的异步加载，异步加载一定要检查指针！对于高频加载操作千万别自己释放句柄！因为异步玩玩不是实时的，容易出现线程安全问题！
</chatmessage>

```cpp
//定义句柄
TSharedPtr<FStreamableHandle> Handle;

TSoftObjectPtr<UInventorySubConfig> SubConfig;//如果是软引用，需要先ToSoftObjectPath()，使用需要先ToSoftObjectPath重载版本

const UInventoryTotalConfig* SubConfig;//如果是对象指针，可以直接放进去,会有对应的重载版本

//委托
FStreamableDelegate SubConfigLoadDelegate = FStreamableDelegate::CreateUObject(this, &你的类::回调函数, Index);

//异步加载
Handle = UAssetManager::Get().GetStreamableManager().RequestAsyncLoad(SubConfig, SubConfigLoadDelegate);

Handle.isValid();//是否有效
Handle->HasLoadCompleted();//进度 
Handle.GetLoadedAsset();//获取资源
Handle.Reset();//释放句柄

```

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
对应的蓝图节点
</chatmessage>

![](..%2Fassets%2Floadassets.png)


## 同步

![](..%2Fassets%2Fload002.png)

```cpp

```

## 参考文档

[https://www.cnblogs.com/shiroe/p/14710066.html](https://www.cnblogs.com/shiroe/p/14710066.html)

[官方文档](https://docs.unrealengine.com/5.3/zh-CN/asynchronous-asset-loading-in-unreal-engine/)


[官方直播](https://www.bilibili.com/video/BV1Mr4y1A7nZ/?t=1h03m33s&vd_source=fc61eb54bf3245afbff2be6b8c1ebfc2)

[https://qiita.com/Zi_su/items/81dc5b5e29a96ad2cecc](https://qiita.com/Zi_su/items/81dc5b5e29a96ad2cecc)

[https://jdelezenne.github.io/Codex/UE4/Assets%20Streaming.html](https://jdelezenne.github.io/Codex/UE4/Assets%20Streaming.html)