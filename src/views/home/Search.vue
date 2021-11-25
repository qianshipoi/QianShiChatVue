<template>
  <div class="search-box">

    <input type="text"
           class="search-content-box"
           placeholder="Search Messages" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style  scoped>
.search-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 24px;

  position: static;
  width: 349px;
  height: 72px;
  left: 0px;
  top: 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
}
.search-content-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;

  position: static;
  width: 301px;
  height: 48px;
  left: 24px;
  top: 12px;

  background: #f3f3f3;
  border-radius: 12px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 10px 0px;

  border: none;
  outline: none;
}
</style>
