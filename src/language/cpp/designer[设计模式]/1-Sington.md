---
title: DS1.Singleton|单例
order : 1
category:
  - c++
---

### Singleton|单例

<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
一个类保证全局只有一个实例
</chatmessage>

### 懒汉式（Lazy Initialization）

1. **懒汉式单例模式：**
    - **实例创建时机：** 懒汉式在第一次被调用时才创建实例，即在需要的时候才进行初始化。
    - **线程安全性：** 如果不进行特殊处理，懒汉式可能在多线程环境下引发竞态条件，导致多个线程同时检测到实例为`nullptr`，然后都尝试创建实例。为了解决这个问题，可以使用双重检查锁定（Double-Checked Locking）或者其他线程安全的机制。

   ```cpp
   class LazySingleton {
   private:
       static LazySingleton* instance;
       LazySingleton() {}  // 私有构造函数

   public:
       static LazySingleton* getInstance() {
           if (instance == nullptr) {
               instance = new LazySingleton();
           }
           return instance;
       }
   };

   // 在cpp文件中初始化静态成员变量
   LazySingleton* LazySingleton::instance = nullptr;
   ```
   
![](..%2Fassets%2FLazySingleton%20.svg)  

### 饿汉式（Eager Initialization）
2. **饿汉式单例模式：**
    - **实例创建时机：** 饿汉式在类加载时就创建实例，即在程序启动时就进行初始化，无论是否被调用都会创建实例。
    - **线程安全性：** 饿汉式天生是线程安全的，因为实例在类加载时就被创建，不存在多线程竞争的问题。

   ```cpp
   class EagerSingleton {
   private:
       static EagerSingleton* instance;
       EagerSingleton() {}  // 私有构造函数

   public:
       static EagerSingleton* getInstance() {
           return instance;
       }
   };

   // 在cpp文件中初始化静态成员变量
   EagerSingleton* EagerSingleton::instance = new EagerSingleton();
   ```
![](..%2Fassets%2FEagerSingleton.svg) 

### 小结

选择懒汉式还是饿汉式取决于具体的需求和应用场景。
懒汉式可以节省资源，只有在需要时才创建实例，但需要注意线程安全性。
饿汉式在程序启动时就创建实例，确保了线程安全，但可能会增加启动时间和占用资源。

### 双检锁单例

```cpp
class Singleton {
private:
    // 私有构造函数，防止外部实例化
    Singleton() {}

    // 静态实例指针
    static Singleton* instance;

    // 互斥锁，确保线程安全
    static std::mutex mutex;

public:
    // 获取单例实例的静态方法
    static Singleton* getInstance() {
        // 使用双重检查锁定以减少锁的竞争
        if (instance == nullptr) {
            std::lock_guard<std::mutex> lock(mutex);
            if (instance == nullptr) {
                instance = new Singleton();
            }
        }
        return instance;
    }
};

// 初始化静态成员变量
Singleton* Singleton::instance = nullptr;
std::mutex Singleton::mutex;
```

![](..%2Fassets%2FSingleton%20Class%20Diagram.svg)