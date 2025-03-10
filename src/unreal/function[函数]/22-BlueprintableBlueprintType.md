---
title: F22.Blueprintable| BlueprintType傻傻分不清
order : 22
category:
  - u++
---

### 导言

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
Dady!Blueprintable和BlueprintType 啥区别啊？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
是不是脑子胀痛，感觉要长脑子了？
</chatmessage>

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
还有还有 ，如果是写在配置里的结构体要不要标记Blueprintable？BlueprintType ？
</chatmessage>

###  `Blueprintable` vs `BlueprintType` 对比

| 特性             | `Blueprintable`                                  | `BlueprintType`            |
|----------------|--------------------------------------------------|----------------------------|
| **适用对象**       | 仅 `UCLASS`                                       | `UCLASS` 和 `USTRUCT`       |
| **主要作用**       | 允许蓝图继承 C++ 类                                     | 允许在蓝图中作为变量、参数、返回值          |
| **是否允许创建蓝图子类** | ✅ 是                                              | ❌ 否（除非同时是 `Blueprintable`） |
| **蓝图中作为数据使用**  | ✅ 如果同时是 `BlueprintType`                          | ✅ 是                        |
| **常用场景**       | `AActor`、`UComponent`、`UGameplayAbility` 等需要蓝图扩展 | 数据结构、配置类、传输数据用的对象          |
| **常用组合**       | `UCLASS(Blueprintable, BlueprintType)`           | `USTRUCT(BlueprintType)`   |


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

咱先做个试验，一些类在`UCLASS`中写上`Blueprintable`和 `BlueprintType`，一些只写一个或不写。

</chatmessage>

![](..%2Fassets%2Fblueprintable_001.png)

>标记了`Blueprintable`和`BlueprintType`不仅可以创建蓝图派生类，而且还能再蓝图中作为变量、参数、返回值

 ![](..%2Fassets%2Fblueprintable_002.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
没有Blueprintable，蓝图创建列表中都无法创建，意味着无法用蓝图继承派生C++类。
</chatmessage>

![](..%2Fassets%2Fblueprintable_003.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
只写了Blueprintable没有BlueprintType的，无法变成变量使用。
</chatmessage>

![](..%2Fassets%2Fblueprintable_004.png)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
也就是说我必须带上这个BlueprintType才能在蓝图中当变量使用？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

是的，不过也有例外，例如你继承了`UDeveloperSettingsBackedByCVars` 这种设置类时，即便结构体不标记 `BlueprintType`
依然可以在设置中配置。

</chatmessage>

![](..%2Fassets%2Fblueprintable_005.png)

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
但我在蓝图中确实查无此人
</chatmessage>

![](..%2Fassets%2Fblueprintable_006.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
是的，这样也可以避免一些配置用的结构体被蓝图滥用
</chatmessage>
