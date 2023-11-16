<template>
  <div class="boxstyle">
    <img ref="gifContainer" :src="src" alt="GIF" :class="{ 'playing': isPlaying }" />
    <a @click="togglePlay" :style="{ backgroundImage: 'url(' + buttonBackground + ')', opacity: isPlaying ? 0.5 : 1 }">
    </a>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  props: {
    src: String, // GIF路径
    buttonBackground: String // 按钮背景图片路径
  },
  data() {
    return {
      isPlaying: false,
      uniqueId: uuidv4() // 生成唯一ID
    };
  },
  methods: {
    togglePlay() {
      this.play();
    },
    play() {
      // Add opacity transition effect
      this.isPlaying = true;
      this.$refs.gifContainer.src = this.$refs.gifContainer.src + '?' + this.uniqueId;
      setTimeout(() => {
        this.isPlaying = false;
      }, 300); // Adjust the delay (in milliseconds) as needed
    }
  }
};
</script>

<style scoped>
.playing {
  /* 在播放状态下可以添加一些样式 */
}

.boxstyle {
  display: flex;
  align-items: center;
}

a {
  background-image: url("../public/gif.svg")!important;
  background-size: cover; /* 确保背景图片完全覆盖按钮 */
  border: none; /* 移除按钮的边框 */
  cursor: pointer; /* 添加指针样式，表示可以点击 */
  z-index: 140;
  position: absolute;
  width: 30px;
  height: 30px;
  transition: opacity 0.3s ease; /* 添加透明度过渡效果 */
}
</style>
