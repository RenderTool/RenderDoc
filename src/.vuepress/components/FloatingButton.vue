<template>
  <button id="floatingButton" @click="handleClick">点击我</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('按钮被点击了！');
    }
  }
}
</script>

<style scoped>
#floatingButton {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
</style>
