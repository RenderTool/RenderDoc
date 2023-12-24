---
title: DS2.SimpleFactory|简单工厂
order : 2
category:
  - c++
---

### SimpleFactory简单工厂

<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
简单工厂（Simple Factory）是一种创建型设计模式，其目的是通过一个单独的工厂类来创建对象，而不直接在客户端代码中实例化对象。
这种模式有助于将对象的创建过程封装起来，使客户端代码与具体对象的创建过程解耦。
</ChatMessage>

![](..%2Fassets%2FSimpleFactory.svg)

### Simple Factory 模式的核心组件：

1. **定义接口或抽象类：** 创建一个表示产品的接口或抽象类，其中包含产品的通用方法（例如，`operate`）。

2. **创建具体产品类：** 实现产品接口或继承抽象类，定义具体的产品类，每个类负责实现产品接口中的方法。

3. **定义工厂类：** 创建一个工厂类，其中包含一个用于创建产品对象的方法。这个方法可能是静态的，用于根据客户端的需求创建具体产品对象。

4. **客户端使用工厂类：** 客户端代码通过调用工厂类的方法来获取产品对象，而不是直接实例化具体产品类。这有助于降低客户端与具体产品类之间的耦合度。

### 实践

```cpp
#include <iostream>
#include <stdexcept>
#include <memory>

// 产品接口
class Product {
public:
    virtual void operate() = 0;
    virtual ~Product() = default;
};

// 具体产品类 A
class ConcreteProductA : public Product {
public:
    void operate() override {
        std::cout << "具体产品 A 的操作" << std::endl;
    }
};

// 具体产品类 B
class ConcreteProductB : public Product {
public:
    void operate() override {
        std::cout << "具体产品 B 的操作" << std::endl;
    }
};

// 简单工厂类
class SimpleFactory {
public:
    static std::unique_ptr<Product> createProduct(const std::string& type) {
        if (type == "A") {
            return std::make_unique<ConcreteProductA>();
        } else if (type == "B") {
            return std::make_unique<ConcreteProductB>();
        } else {
            throw std::invalid_argument("Unsupported product type");
        }
    }
};

// 客户端
int main() {
    // 客户端通过简单工厂创建具体产品对象，无需手动释放指针
    auto productA = SimpleFactory::createProduct("A");
    productA->operate();

    auto productB = SimpleFactory::createProduct("B");
    productB->operate();

    // 离开作用域时，智能指针会自动释放内存

    return 0;
}
```
>这种方式利用了多态性，客户端只需要知道产品的抽象接口，而不需要了解具体产品的实现细节。
这使得系统更加灵活，可以轻松地添加新的产品类，而不需要修改客户端代码。这符合面向对象设计的开闭原则。
这种模式有助于将对象的创建过程封装起来，使客户端代码与具体对象的创建过程解耦。
