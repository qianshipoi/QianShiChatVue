<template>
  <div :class="{'message-avatar-box':true,'self':self}">
    <div :class="{'avatar':true, 'self':self}"></div>
    <div class="messages">
      <MessageBox v-for="item in 4"
                  :isLeft="!self"
                  :key="item" />
    </div>
  </div>
</template>

<script >
import MessageBox from './MessageBox.vue'
export default {
  components: { MessageBox },
  props: {
    self: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const { self } = props
    return {
      self
    }
  }
}
</script>

<style scoped>
.message-avatar-box {
  display: flex;
  margin: 10px 0;
  width: 100%;
}
.message-avatar-box.self {
  flex-direction: row-reverse;
}
.avatar {
  width: 48px;
  height: 48px;
  background-color: #d8d8d8;
  border-radius: 14px;
  margin: 0 16px 0 0;
}
.avatar.self {
  margin: 0 0 0 16px;
}
.messages {
  width: calc(100% - 48px - 16px);
}
</style>
