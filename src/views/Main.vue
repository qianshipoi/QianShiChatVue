<template>
  <div class="app-main">
    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: String
  },
  setup() {
    return {
    };
  },
});
</script>

<style scoped>
.app-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.main-box {
  width: 800px;
  height: 600px;
  border-radius: 8px;
  background-color: #ccc;
  overflow: hidden;
}
</style>
