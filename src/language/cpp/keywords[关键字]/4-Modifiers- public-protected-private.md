---
title: c++4.public|protected|private
order: 4
category:
   - c++
---
<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
在面向对象编程中，`public`、`protected` 和 `private` 是访问控制修饰符，用于控制类的成员（属性和方法）对外的可见性。
</chatmessage>

## 类(class)中

### 访问控制

<chatmessage avatar="../../../assets/emoji/ybk.png" :avatarWidth="40">
class默认是private,对自己可见。
</chatmessage>


![](..%2Fassets%2Fpublicchat.png)

>**Private自己可见|Protected自己和好友可见|Public所有人可见**


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

### 控制继承

<chatmessage avatar="../../../assets/emoji/bqb01.png" :avatarWidth="40">
`private` 派生的类中能访问到吗？
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
使用 private 继承时，基类的 private 成员确实被继承了，但在派生类中的访问权限发生了改变。
不同的继承方法，继承后的成员属性也会变化：
</chatmessage>

![](..%2Fassets%2Fpuprpv.png)


1. **Public继承：** 如果派生类使用 `public` 关键字继承基类，那么基类中的 `public` 和 `protected` 成员在派生类中的访问权限不变，而 `private` 成员在派生类中仍然是不可访问的。

    ```cpp
    class Base {
    public:
        int publicMember;
    private:
        int privateMember;
    protected:
        int protectedMember;
    };

    class Derived : public Base {
        // publicMember 在Derived中是public
        // privateMember 在Derived中仍然是不可访问的
        // protectedMember 在Derived中是protected
    };
    ```

2. **Protected继承：** 如果派生类使用 `protected` 关键字继承基类，那么基类中的 `public` 和 `protected` 成员在派生类中的访问权限都变成了 `protected`，而 `private` 成员仍然是不可访问的。

    ```cpp
    class Base {
    public:
        int publicMember;
    private:
        int privateMember;
    protected:
        int protectedMember;
    };

    class Derived : protected Base {
        // publicMember 在Derived中是protected
        // privateMember 在Derived中仍然是不可访问的
        // protectedMember 在Derived中是protected
    };
    ```

3. **Private继承：** 如果派生类使用 `private` 关键字继承基类，那么基类中的 `public` 和 `protected` 成员在派生类中的访问权限都变成了 `private`，而 `private` 成员仍然是不可访问的。

    ```cpp
    class Base {
    public:
        int publicMember;
    private:
        int privateMember;
    protected:
        int protectedMember;
    };

    class Derived : private Base {
        // publicMember 在Derived中是private
        // privateMember 在Derived中仍然是不可访问的
        // protectedMember 在Derived中是private
    };
    ```
   
总结成表格：

| 访问        | 同一个类 | 派生类 | 外部的类 |
|-----------|------|-----|------|
| Public    | Yes  | Yes | Yes  |
| Protected | Yes  | Yes | No   |
| Private   | Yes  | No  | No   |


<chatmessage avatar="../../../assets/emoji/bqb (4).png" :avatarWidth="40">
那么`private` 修饰的类成员变量和函数一定只能通过自己访问是吧。
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (1).png" :avatarWidth="40" alignLeft>
并不一定，这个问题可以在下一章中得到答案。
</chatmessage>

## 结构体(struct)中
<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
struct默认都是Public
</chatmessage>