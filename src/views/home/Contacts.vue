<template>
  <div class="contacts-box">
    <header>
      <h1>Messages</h1>
      <span>+</span>
    </header>
    <div class="global-list">
      <Search />
      <MessageList />
    </div>
  </div>
</template>

<script>
import MessageList from './MessageList.vue'
import Search from './Search.vue'
export default {
  components: { MessageList, Search },
  setup() {
    return {}
  }
}
</script>

<style scoped>
.contacts-box {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 280px;
  height: 100%;

  background: #ffffff;
}
header {
  /* Auto Layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 71px;

  border-bottom: 1px solid #0000001f;
}
header > h1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  width: 152px;
  height: 30px;
  left: 24px;
  top: 29px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
}
header > span {
  position: static;
  width: 40px;
  height: 40px;
  left: 285px;
  top: 24px;

  background: #615ef0;
  box-shadow: 0px 0px 15px rgba(65, 62, 189, 0.24);
  border-radius: 30px;
  font-size: 28px;
  color: white;
  flex: none;
  cursor: pointer;
  order: 1;
  flex-grow: 0;
  margin: 0px 10px;
}
</style>
