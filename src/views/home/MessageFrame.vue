<template>
  <div class="message-frame">
    <MessageAvatarBox />
    <MessageAvatarBox :self="false" />
    <MessageAvatarBox />
  </div>
</template>

<script setup>
import MessageAvatarBox from './MessageAvatarBox.vue'
</script>

<style scoped>
.message-frame {
  width: 100%;
}
</style>
