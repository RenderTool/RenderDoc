---
title: DS3.FactoryPattern|工厂模式
order : 3
category:
  - c++
---

### FactoryPattern

<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
工厂模式（Factory Pattern）是一种创建型设计模式，它提供了一个接口，用于创建对象的实例，但允许子类在改变实例化类的类型时，仍保持一致的创建接口。
工厂模式主要包括工厂方法模式和抽象工厂模式两种变体。
</chatmessage>

### 工厂方法模式（Factory Method Pattern）：

1. **定义：** 工厂方法模式定义了一个用于创建对象的接口，但由子类决定实例化的类是哪一个。它使一个类的实例化延迟到其子类。

2. **组成部分：**
    - **抽象产品类（Abstract Product）：** 声明了产品的接口。
    - **具体产品类（Concrete Product）：** 实现了抽象产品接口的具体类。
    - **抽象工厂类（Creator）：** 声明了一个创建产品对象的工厂方法，可以包含一些默认的实现。
    - **具体工厂类（Concrete Creator）：** 实现了抽象工厂类，实际负责创建产品的具体工厂。

3. **示例代码：**
   ```cpp
   class Product {
   public:
       virtual void operate() = 0;
   };

   class ConcreteProductA : public Product {
   public:
       void operate() override {
           // 具体产品 A 的操作
       }
   };

   class ConcreteProductB : public Product {
   public:
       void operate() override {
           // 具体产品 B 的操作
       }
   };

   class Creator {
   public:
       virtual Product* createProduct() = 0;
   };

   class ConcreteCreatorA : public Creator {
   public:
       Product* createProduct() override {
           return new ConcreteProductA();
       }
   };

   class ConcreteCreatorB : public Creator {
   public:
       Product* createProduct() override {
           return new ConcreteProductB();
       }
   };
   ```
![](..%2Fassets%2FFactory%20Method%20Pattern.svg)

### 抽象工厂模式（Abstract Factory Pattern）：

1. **定义：** 抽象工厂模式提供一个接口，用于创建相关或依赖对象的家族，而不需要指定它们的具体类。

2. **组成部分：**
    - **抽象产品类（Abstract Product）：** 声明了产品的接口。
    - **具体产品类（Concrete Product）：** 实现了抽象产品接口的具体类。
    - **抽象工厂类（Abstract Factory）：** 声明了一组创建相关产品的方法。
    - **具体工厂类（Concrete Factory）：** 实现了抽象工厂类，负责创建一组相关的产品。

3. **示例代码：**
   ```cpp
   class AbstractProductA {
   public:
       virtual void operate() = 0;
   };

   class ConcreteProductA1 : public AbstractProductA {
   public:
       void operate() override {
           // 具体产品 A1 的操作
       }
   };

   class ConcreteProductA2 : public AbstractProductA {
   public:
       void operate() override {
           // 具体产品 A2 的操作
       }
   };

   class AbstractProductB {
   public:
       virtual void operate() = 0;
   };

   class ConcreteProductB1 : public AbstractProductB {
   public:
       void operate() override {
           // 具体产品 B1 的操作
       }
   };

   class ConcreteProductB2 : public AbstractProductB {
   public:
       void operate() override {
           // 具体产品 B2 的操作
       }
   };

   class AbstractFactory {
   public:
       virtual AbstractProductA* createProductA() = 0;
       virtual AbstractProductB* createProductB() = 0;
   };

   class ConcreteFactory1 : public AbstractFactory {
   public:
       AbstractProductA* createProductA() override {
           return new ConcreteProductA1();
       }

       AbstractProductB* createProductB() override {
           return new ConcreteProductB1();
       }
   };

   class ConcreteFactory2 : public AbstractFactory {
   public:
       AbstractProductA* createProductA() override {
           return new ConcreteProductA2();
       }

       AbstractProductB* createProductB() override {
           return new ConcreteProductB2();
       }
   };
   ```
![](..%2Fassets%2FAbstract%20Factory%20Pattern.svg)

### 区别：

1. **工厂方法模式：**
    - 只定义一个创建产品的接口，由子类决定具体创建哪个产品。
    - 一个工厂对应一个产品。
    - 只有一个抽象工厂和一个具体工厂。

2. **抽象工厂模式：**
    - 定义一组创建相关产品的接口，一个工厂可以创建一组相关的产品。
    - 一个工厂对应一个产品家族。
    - 存在多个抽象工厂和多个具体工厂，每个具体工厂负责创建一组相关的产品。
  
### 依赖倒置

依赖倒置原则（Dependency Inversion Principle，DIP）是面向对象设计中的一项重要原则，它由罗伯特·C·马丁（Robert C. Martin）提出。该原则的核心思想是：

1. 高层模块不应该依赖于低层模块，两者都应该依赖于抽象。
2. 抽象不应该依赖于细节，细节应该依赖于抽象。

这意味着在设计系统时，应该将高层次的模块定义抽象接口，并且低层次的模块通过实现这些接口来依赖于抽象。这种反转的依赖关系有助于实现系统的松耦合，提高系统的灵活性和可维护性。

与工厂模式的关联在于，工厂模式是一种符合依赖倒置原则的设计模式。在工厂模式中，客户端不直接依赖于具体的产品类，而是依赖于一个抽象的工厂接口，通过工厂接口来创建具体的产品实例。这样，客户端与具体产品的实现细节解耦，而是依赖于抽象的工厂接口。


```cpp
#include <iostream>

// Abstract product interface
class Product {
public:
    virtual void operation() const = 0;
    virtual ~Product() = default;
};

// Concrete product implementation
class ConcreteProduct : public Product {
public:
    void operation() const override {
        std::cout << "ConcreteProduct operation\n";
    }
};

// Abstract factory interface
class Factory {
public:
    virtual Product* createProduct() const = 0;
    virtual ~Factory() = default;
};

// Concrete factory implementation
class ConcreteFactory : public Factory {
public:
    Product* createProduct() const override {
        return new ConcreteProduct();
    }
};

int main() {
    // Client code depends on abstract interfaces
    Factory* factory = new ConcreteFactory();
    Product* product = factory->createProduct();
    product->operation();

    // Cleanup
    delete product;
    delete factory;

    return 0;
}
```