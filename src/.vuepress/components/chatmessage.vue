<template>
  <div class="chat-message" :class="{ 'align-left': alignLeft }">
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
    avatar: String,       // 头像路径
    avatarWidth: Number,  // 头像宽度
    alignLeft: Boolean    // 控制布局是否靠左，默认为 false
  }
}
</script>

<style scoped>
.chat-message {
  margin-top: 10px; /* 设置聊天消息之间的间距 */
  display: flex;
  align-items: flex-start;
}

.align-left {
  justify-content: flex-start;  /* 头像和聊天内容靠左布局 */
  flex-direction: row-reverse;
}

.avatar img {
  max-width: 55px;
//border-radius: 50%;
  margin-right: 10px;
}

.message {
  background-color: #e0e0e026;
  padding: 10px;
  border-radius: 4px;
//max-width: 60%;
}

.message p {
  margin: 0;
}
</style>
