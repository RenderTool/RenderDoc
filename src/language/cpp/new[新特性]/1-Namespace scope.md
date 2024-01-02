---
title: c++1.Namespace作用域
order : 1
category:
  - c++
---
<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
Namespace的作用域
</chatmessage>

1. 每个命名空间定义引入一个作用范围，包含该命名空间的所有内容。

2. 重新声明或特化的部分也在该范围内。

3. 全局作用域是整个程序的作用范围。

```cpp
namespace Q {
  namespace V { void f(); }
  void V::f() {         // in the scope of V
  }
}
```

在这段代码中：
1. `namespace Q` 的作用范围包括整个命名空间 `Q`。
2. `namespace V` 的作用范围包括整个命名空间 `V`，这也包括了 `void f();` 的定义。
3. `void V::f()` 是函数 `f` 的定义，它位于命名空间 `V` 的作用范围内。

![](..%2Fassets%2Fnamespace.png)

总结：

- `namespace Q` 的作用范围包括整个命名空间 `Q`，其中包括 `namespace V` 和函数 `V::f()`。
- `namespace V` 的作用范围包括整个命名空间 `V`，其中包括函数 `V::f()`。
