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
    avatarWidth: Number // 头像宽度
  }
}
</script>

<style scoped>
.chat-message {
  margin-top: 10px; /* 设置聊天消息之间的间距 */
  display: flex;
  align-items: flex-start;
}

.avatar img {
  max-width: 50px;
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
