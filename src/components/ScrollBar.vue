<template>
  <div class="scroll-bar-wrap">
    <div class="scroll-box">
      <slot></slot>
    </div>
    <div class="cover-bar"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.scroll-bar-wrap {
  width: 100%;
  position: relative;
}
.scroll-box {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.scroll-box::-webkit-scrollbar {
  width: 0.4em;
}
.scroll-box::-webkit-scrollbar,
.scroll-box::-webkit-scrollbar-thumb {
  overflow: visible;
  border-radius: 4px;
}
.scroll-box::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
}
.cover-bar {
  position: absolute;
  background: #fff;
  height: 100%;
  top: 0;
  right: 0;
  width: 0.4em;
  -webkit-transition: all 0.5s;
  opacity: 1;
}
/* MAGIC HAPPENS HERE */
.scroll-bar-wrap:hover .cover-bar {
  opacity: 0;
  -webkit-transition: all 0.5s;
}
</style>
