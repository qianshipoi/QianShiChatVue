<template>
  <scroll-bar style="height:calc(100% - 58px)">
    <MessageItem v-for="item in users"
                 :class="{'is-selected':item.id===selected}"
                 @click="selected = item.id"
                 :key="item.id"
                 :avatar="item.avatar"
                 :desc="item.nickName"
                 :name="item.nickName"
                 :tags="['kuriyama']" />
  </scroll-bar>
  <!-- <div class="scroll-bar-wrap">
    <div class="message-list scroll-box">
      <MessageItem v-for="item in users"
                   :class="{'is-selected':item.id===selected}"
                   @click="selected = item.id"
                   :key="item.id"
                   :avatar="item.avatar"
                   :desc="item.nickName"
                   :name="item.nickName"
                   :tags="['kuriyama']" />
    </div>
    <div class="cover-bar"></div>
  </div> -->
</template>

<script>
import { defineComponent, ref, toRefs, watchEffect } from 'vue'
import MessageItem from './MessageItem.vue'
import ScrollBar from '../../components/ScrollBar.vue'
export default defineComponent({
  components: { MessageItem, ScrollBar },
  props: {
    users: {
      type: Array,
      default: []
    }
  },
  setup(props) {
    const { users } = toRefs(props)
    const selected = ref(1)

    return { selected, users }
  }
})
</script>

<style  scoped>
.message-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: calc(100% - 58px);
}
.scroll-bar-wrap {
  width: 100%;
  height: 100%;
  position: relative;
}
.scroll-box {
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
.scroll-bar-wrap:hover .cover-bar {
  opacity: 0;
  transition: all 0.5s;
}
</style>
