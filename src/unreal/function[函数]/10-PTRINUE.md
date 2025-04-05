---
title: F10.UClass|类
order: 10
category:
  - u++
tag:
  - Specifiers
---

### 类和对象

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
类和对象什么区别？
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
这个叫类
</chatmessage>

```cpp
class Person {
public:
    string Name;
    int Age;
};
```
<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
根据这个类实例化的叫对象
</chatmessage>

```cpp
Person person1;
Person new person2;
//....
delete person2;
```
<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
类的实例化就是创建对象的过程。在面向对象编程中，通过实例化类来创建对象，这个过程也被称为类的实例化。而UE中因为有反射系统，推荐你用NewObject来实例化
</chatmessage>

### UE类实例化

>模板
```cpp
UYourClass* MyObject = NewObject<UYourClass>();
```

>静态工厂

```cpp
UYourClass* MyObject = UYourClass::CreateInstance();
```

>SpawnActor

```cpp
AYourActor* MyActor = GetWorld()->SpawnActor<AYourActor>(YourActorClass, SpawnLocation, SpawnRotation);
```
### UE类引用

```cpp
TSoftClassPtr<UUserWidget> WidgetClass;
UClass* UUserWidget = WidgetClass.Get();
```
<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
注意这里还是类，不是实例化的对象，所以你可以在引擎中看到从类构建实例、创建UI的控件、spawnActor这种节点。
</chatmessage>

<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
先来了解一下几个UE中的引用类型.
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
<chatmessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
本质都是指针
</chatmessage>

### UE中的指针模板

1. **shared_ptr|共享指针:**

记录该对象当前被多少个共享指针所持有。当一个共享指针被销毁时，所有指向该对象的共享指针的计数都会减少。当指向一个对象的所有共享指针都被销毁时，对象自动被销毁。

2. **unique_ptr|唯一指针：**

该对象只能被一个唯一指针所持有。当唯一指针被销毁时，对应的对象也被销毁。

3. **weak_ptr|弱指针：**

该指针并不直接指向对象，而是指向该对象的共享指针。这样即使弱指针始终存在，没有被销毁，对象也会在共享指针的管理下自动销毁。

## 参考链接
[【UE4】对象指针，类指针，智能指针，硬引用，软引用](https://zhuanlan.zhihu.com/p/604213414#:~:text=%E8%BD%AF%E7%B1%BB%E5%BC%95%E7%94%A8%EF%BC%9A%20TSoftClassPtr%3CT%3E%20SoftClassRef%3B%20%E5%9C%A8%E8%93%9D%E5%9B%BE%E4%B8%AD%EF%BC%8C%E8%BD%AF%E7%B1%BB%E5%BC%95%E7%94%A8%E5%AF%B9%E5%BA%94%E7%9A%84%E6%98%AF%E6%B5%85%E7%B4%AB%E8%89%B2%E7%9A%84%E8%BD%AF%E7%B1%BB%E5%BC%95%E7%94%A8%EF%BC%9A%20%E4%B8%8D%E8%BF%87%EF%BC%8C%E8%BF%99%E4%B8%A4%E7%A7%8D%E4%B8%9C%E8%A5%BF%E6%9C%AC%E8%B4%A8%E4%B8%8A%E5%8F%AA%E6%98%AF%E4%B8%BA%E4%BA%86%E5%AD%98%E5%82%A8%E4%B8%80%E4%B8%AA%E8%B5%84%E4%BA%A7%E8%B7%AF%E5%BE%84%E3%80%82,%E5%A6%82%E6%9E%9C%E4%BD%A0%E4%B8%8D%E5%9C%A8%E4%B9%8E%E8%93%9D%E5%9B%BE%E5%B1%82%E6%98%BE%E7%A4%BA%E7%9A%84%E5%9B%BE%E6%A0%87%E7%9A%84%E8%AF%9D%EF%BC%8C%E5%AE%8C%E5%85%A8%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%20FSoftObjectPath%20%E5%92%8C%20FSoftClassPath%20%E6%9D%A5%E4%BB%A3%E6%9B%BF%E4%BB%96%E4%BB%AC%E7%9A%84%E9%83%A8%E5%88%86%E5%8A%9F%E8%83%BD%E3%80%82)