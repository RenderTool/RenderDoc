---
title: UMG-NameSlot 
order: 1
category:
  - 教程知识
---
## 导读
<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40">
创建复杂的用户界面时，可能需要重用大量模板化的小部件，例如：切换菜单时能不能通过一个模板实现修改部分内容，而保持部分内容不变。<br>
命名槽小组件-NameSlot专门用于在模板化 UI 中充当占位符。
</ChatMessage>

## 实现目标

![](..%2Fassets%2Fdemonameslot.gif)

## 实践

1.在UMG控制板中添加命名插槽-NameSlot。

![](..%2Fassets%2FNameSlot.jpg)

2. 排好基本布局，确定固定内容和可变内容，可变内容由NameSlot组件占位。

![](..%2Fassets%2Fnameslotroot.jpg)

3. 新建一个继承自这个模板的UMG类,打开后可以看到多了一个自定义的NameSlot插槽。

![](..%2Fassets%2Fnewslotchild.gif)

4. NameSlot插槽插入我们想要的UMG,这样我们就实现了模板多态，表现如下动画：

![](..%2Fassets%2Fnameslot.gif)

## 参考链接

[官网](https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/UMG/UserGuide/WidgetTypeReference/NamedSlot/)
