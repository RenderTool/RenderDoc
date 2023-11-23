---
title: c++4.public|protected|private
order: 4
category:
   - c++
---
<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
在面向对象编程中，`public`、`protected` 和 `private` 是访问控制修饰符，用于控制类的成员（属性和方法）对外的可见性。
</ChatMessage>

## 类(class)中

### 访问控制和继承

<ChatMessage avatar="../../../assets/emoji/ybk.png" :avatarWidth="40">
class默认是private,对自己可见。
</ChatMessage>

![](..%2Fassets%2Fpublicchat.png)

>**Private自己可见|Protected自己和好友可见|Public所有人可见**

<hr>

<ChatMessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40">
为此Baba总结了一个表格
</ChatMessage>

| 访问        | 同一个类 | 派生类 | 外部的类 |
|-----------|------|-----|------|
| Public    | Yes  | Yes | Yes  |
| Protected | Yes  | Yes | No   |
| Private   | Yes  | No  | No   |


1. **Public（公共）:**
    - 成员声明为 `public` 的，可以在类的内部和外部访问。
    - 对于类的用户来说，`public` 成员是可见的，可以直接访问。

```cpp
class MyClass {
public:
    int publicVar;  // 公共变量
    void publicMethod() {
        // 公共方法
    }
};
```

2. **Protected（受保护的）:**
    - 成员声明为 `protected` 的，可以在类的内部访问，也可以在派生类中访问，但不能在类的外部访问。
    - `protected` 成员对类的用户是不可见的，只有类的派生类能够访问。

```cpp
class MyBaseClass {
protected:
    int protectedVar;  // 受保护的变量
    void protectedMethod() {
        // 受保护的方法
    }
};

class MyDerivedClass : public MyBaseClass {
public:
    void accessProtected() {
        protectedVar = 10;  // 在派生类中可以访问受保护的变量
        protectedMethod();  // 在派生类中可以调用受保护的方法
    }
};
```

3. **Private（私有的）:**
    - 成员声明为 `private` 的，只能在类的内部访问，对于类的用户和派生类都是不可见的。
    - `private` 成员对类的用户和派生类都是不可见的。

```cpp
class MyClass {
private:
    int privateVar;  // 私有变量
    void privateMethod() {
        // 私有方法
    }
};
```

## 结构体(struct)中
<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
struct默认都是Public
</ChatMessage>


