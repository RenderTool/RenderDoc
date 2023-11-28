---
title: DP1.单例[Singleton]TODO
order : 1
category:
  - u++
---

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
什么是单例?
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
确保一个类只有一个实例，并为其提供一个全局访问入口
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
UE中支持原生C++单例实现吗？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
支持！但官方不推荐使用！官方推荐我们使用subsystem
</ChatMessage>

![](..%2Fassets%2Fsingletonc%2B%2B.png)

```cpp
class UMySingleton : public UObject
{
public:
	static UMySingleton* GetInstance() { return Instance; }

private:
	static UMySingleton* Instance;
};
```

C++静态类单例的优劣势：

优势：
1. 对接口程序员来说更为熟悉。

劣势：
1. 与编辑器交互差：未处理时，编辑器中多次运行游戏会保留实例。
2. 与类默认对象交互差：未处理时，创建类默认对象也会创建实例。
3. 生命周期不明确：需要谨慎编程和明确意图以管理单例的生命周期。


<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
 蓝图函数库是单例吗？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
蓝图函数库（Blueprint Function Library）并不是严格意义上的单例。蓝图函数库是一种特殊类型的类，通常用于存储一组静态函数，这些函数可供蓝图（Blueprint）图表中的蓝图调用。
</ChatMessage>


## 参考链接

[UE官方论坛](https://forums.unrealengine.com/t/singleton-pattern-in-c/430452)

[Cherno C++](https://www.bilibili.com/video/BV1bR4y177Hp/?spm_id_from=333.999.0.0)