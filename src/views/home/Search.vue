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
  padding: 6px 12px;

  width: 100%;
  height: 58px;
}
.search-content-box {
  padding: 10px 20px;

  width: 100%;
  height: 48px;

  background: #f3f3f3;
  border-radius: 12px;

  margin: 10px 0px 0px 0px;

  border: none;
  outline: none;
}
</style>
