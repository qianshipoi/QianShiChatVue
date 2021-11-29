<template>
  <div class="message-panel">
    <header>
      <div class="user-content">
        <div class="user-avatar"></div>
        <div class="user-info">
          <a href="javascript:;">Kuriyama Mirai</a>
          <span>· Online</span>
        </div>
      </div>
    </header>
    <main>
      <MessageFrame />
    </main>
    <footer>
      <input type="text"
             class="input-box" />
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'
import MessageFrame from './MessageFrame.vue'

export default {
  components: { MessageFrame },
  setup() {
    const state = ref({
      count: 0
    })

    return {
      state
    }
  }
}
</script>

<style scoped>
.message-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 512px;
  height: 100%;
  border-left: 1px solid #00000014;

  background: #ffffff;
}
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 64px;
  border-bottom: 1px solid #00000014;
}
main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  width: 100%;
  height: calc(100% - 80px - 96px);
}
footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;

  border-top: 1px solid #00000014;
  width: 100%;
  height: 96px;
}
.input-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  width: 100%;
  height: 48px;

  background: #ffffff;

  border: 2px solid #e2e8f0;
  box-sizing: border-box;
  border-radius: 12px;
  outline: none;

  margin: 0px 12px;
}
.user-content {
  display: flex;
}
.user-avatar {
  width: 38px;
  height: 38px;

  background: #d8d8d8;
  border-radius: 10px;
  margin: 0px 12px;
}
.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 188px;
  height: 43px;
  left: 56px;
  top: 0px;
}
.user-info > a {
  width: 188px;
  height: 25px;

  font-family: Metropolis;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 125%;
  text-align: left;

  color: #000000;
}
.user-info > span {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  width: 56px;
  height: 18px;
  left: 0px;
  top: 25px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
}
</style>
