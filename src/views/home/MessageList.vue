<template>
  <div class="message-list">
    <MessageItem v-for="item in [1,2,3,4,5,6]"
                 :class="{'is-selected':item===selected}"
                 @click="selected = item"
                 :key="item" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import MessageItem from './MessageItem.vue'
export default defineComponent({
  components: { MessageItem },
  setup() {
    const selected = ref(1)

    return { selected }
  }
})
</script>

<style  scoped>
.message-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;

  width: 349px;
}
</style>
