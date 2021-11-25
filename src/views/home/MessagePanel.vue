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
    <main></main>
    <footer>
      <input type="text"
             class="input-box" />
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
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
  padding: 0px;

  position: absolute;
  width: 640px;
  height: 1024px;
  left: 437px;
  top: 0px;
  border-left: 1px solid #00000014;

  background: #ffffff;
}
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;

  position: static;
  width: 640px;
  height: 80px;
  left: 0px;
  top: 0px;
  border-bottom: 1px solid #00000014;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}
main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
}
footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;

  border-top: 1px solid #00000014;
  width: 640px;
  height: 96px;
}
.input-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  position: static;
  width: 548px;
  height: 48px;
  left: 68px;
  top: 24px;

  /* White */

  background: #ffffff;
  /* Gray/Gray:300 */

  border: 2px solid #e2e8f0;
  box-sizing: border-box;
  border-radius: 12px;
  outline: none;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 1;
  margin: 0px 24px;
}
.user-content {
  display: flex;
}
.user-avatar {
  position: static;
  width: 40px;
  height: 40px;
  left: 0px;
  top: 0px;

  background: #d8d8d8;
  border-radius: 10px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 16px;
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
