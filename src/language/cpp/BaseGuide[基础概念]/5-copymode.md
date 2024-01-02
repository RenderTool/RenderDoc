---
title: c++6.浅拷贝|深拷贝
order : 6
category:
  - c++
---


<chatmessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40">
深拷贝和浅拷贝是什么？
</chatmessage>

### 概念

浅拷贝是对相同数据的共享引用，一个修改会影响到另一个。

<chatmessage avatar="../../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
浅拷贝中，传递的是引用，所以对引用的修改会反映在原始数据上。
</chatmessage>

而深拷贝是创建一个原始数据的独立副本，修改一个不会影响另一个。

<chatmessage avatar="../../../assets/emoji/new1.png" :avatarWidth="40" alignLeft>
深拷贝中，创建了一个新的数据副本，对其的修改不会影响原始数据。
</chatmessage>



#### 浅拷贝：

- **定义：** 浅拷贝是指对对象进行复制，仅复制对象的值，而不复制对象所指向的内容。

- **判断：** 当类中只包含简单数据类型的成员变量时，进行默认的复制构造函数或赋值操作符重载会产生浅拷贝。

- **示例：**
  ```cpp
  class ShallowCopyExample {
  public:
      int* data;

      ShallowCopyExample(const ShallowCopyExample& other) {
          data = other.data;  // 浅拷贝，只复制指针值，不复制内容
      }
  };
  ```

#### 深拷贝：

- **定义：** 深拷贝是指对对象进行复制，不仅复制对象的值，还复制对象所指向的内容。

- **判断：** 当类中包含动态分配内存的成员变量时，需要手动编写复制构造函数和赋值操作符重载来实现深拷贝。

- **示例：**
  ```cpp
  class DeepCopyExample {
  public:
      int* data;

      DeepCopyExample(const DeepCopyExample& other) {
          data = new int(*(other.data));  // 深拷贝，复制内容
      }

      DeepCopyExample& operator=(const DeepCopyExample& other) {
          if (this != &other) {
              delete data;  // 释放原有的动态内存
              data = new int(*(other.data));  // 深拷贝，复制内容
          }
          return *this;
      }
  };
  ```
## 对比

这两种拷贝方式各有优缺点，具体使用取决于程序的需求和设计。

浅拷贝通常更高效，但需要小心避免意外修改原始数据。
深拷贝则更安全，但可能涉及到更多的资源开销，特别是对于大型数据结构。

## 总结

| 行为          | 深拷贝（Deep Copy）  | 浅拷贝（Shallow Copy） |
|-------------|-----------------|-------------------|
| 复制基本数据类型    | 创建独立的副本         | 创建副本，共享相同的值       |
| 复制数组（静态或动态） | 复制所有元素，创建独立副本   | 复制数组对象，共享元素       |
| 复制对象（自定义类）  | 递归复制所有成员，创建独立副本 | 复制对象，共享引用类型的成员    |
| 复制嵌套对象      | 深度复制所有嵌套对象      | 复制外层对象，共享内部对象     |
