---
title: vuepress-1.添加自定义组件
order : 1
category:
  - vuepress
---

## 问题描述

vuepress添加自定义组件-以实现聊天气泡为例。

## 实现目标
<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
  这是一条聊天消息。
</ChatMessage>

## 实现思路

### 方案1：Markdown镶嵌HTML

#### 1. 添加到 VuePress 项目中的 Markdown 文件中：
``` markdown
<div class="chat-container">
  <div class="chat-message">
    <div class="avatar">
      <img :src="avatar" :style="{ width: avatarWidth + 'px' }" alt="头像">
    </div>
    <div class="message">
      <p>这是一条聊天消息。</p>
    </div>
  </div>
</div>

```
#### 2. 在你的 VuePress 项目中的 .vuepress/styles/index.styl 或者 .vuepress/styles/index.scss 文件中，添加以下 CSS 样式：
``` css
.chat-container {
  max-width: 80%; /* 设置聊天容器的最大宽度 */
  margin: 0 auto; /* 将聊天容器居中显示 */
}

.chat-message {
  display: flex;
  align-items: flex-start; /* 将聊天内容垂直对齐到顶部 */
  margin-bottom: 20px; /* 设置聊天消息之间的间距 */
}

.avatar img {
  max-width: 50px; /* 设置头像的最大宽度 */
  border-radius: 50%; /* 将头像设置成圆形 */
}

.message {
  background-color: #e0e0e0; /* 设置聊天消息的背景颜色 */
  padding: 10px; /* 设置聊天消息的内边距 */
  border-radius: 10px; /* 设置聊天消息的圆角 */
  max-width: 60%; /* 设置聊天消息的最大宽度 */
}

.message p {
  margin: 0; /* 清除段落的默认外边距 */
}
```
### 方案2：全局导入 Vue 组件

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
很显然，方案1局限非常大，每次使用都要粘贴大量代码。
</ChatMessage>

#### 1. 在`.vuepress`中添加目录`components`

![add vue comps.jpg](assets%2Fadd%20vue%20comps.jpg)

#### 2. 添加vue组件

![add vue comps.jpg](assets%2Fadd%20vue%20comps.jpg)

#### 3. 将之前的代码写入组件

``` vue
<template>
  <div class="chat-message">
    <div class="avatar">
      <img :src="avatar" :style="{ width: avatarWidth + 'px' }" alt="头像">
    </div>
    <div class="message">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: String, // 头像路径
  }
}
</script>

<style scoped>
.chat-message {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
}

.avatar img {
  max-width: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.message {
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 10px;
  max-width: 60%;
}

.message p {
  margin: 0;
}
.avatar img {
  max-width: 100%; /* 保持头像在容器内的最大宽度 */
  margin-right: 10px;
}
</style>

```

#### 4. `.vuepress`下新建client.ts

```ts
// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
// @ts-ignore
import ChatMessage from "./components/ChatMessage.vue";

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component("ChatMessage", ChatMessage);
    },
});

```
#### 5. 在对应的md中使用

```markdown
<ChatMessage avatar="/assets/R.jpg" :avatarWidth="50">
  这是一条聊天消息。
</ChatMessage>
```

## 参考资料
[vuepress官方添加组件教程](https://vuejs.press/zh/reference/plugin/register-components.html)
