<template>
  <div class="message-item">
    <div class="avatar-box"
         ref="avatarBox">
      <a-image :src="avatar"
               :alt="name"
               :fallback="defaultAvatar" />
    </div>
    <div class="content-box">
      <div class="base-info-box">
        <div class="name">
          <span>{{name}}</span>
          <span>12m</span>
        </div>
        <div class="desc">
          {{desc}}
        </div>
      </div>
      <div class="tag-box">
        <span v-for="item in tags"
              :key="item">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRefs } from '@vue/reactivity'
import { onMounted, watchEffect } from '@vue/runtime-core'
export default {
  props: {
    avatar: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: []
    }
  },
  setup(props) {
    const avatarBox = ref(null)
    const { name, desc, tags, avatar } = toRefs(props)
    const defaultAvatar = `${
      import.meta.env.VITE_API_BASE_URL
    }/avatar/default-avatar.gif`

    return { name, desc, tags, avatar, defaultAvatar, avatarBox }
  }
}
</script>

<style scoped>
.message-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  width: 100%;
  height: 74px;

  border-radius: 12px;
  --avatar-w: 38px;

  margin: 8px 0px;
  cursor: pointer;
}
.message-item:hover,
.message-item.is-selected {
  background: rgba(97, 94, 240, 0.06);
}
.avatar-box {
  width: var(--avatar-w);
  height: var(--avatar-w);

  background: #d8d8d8;
  border-radius: 12px;
  margin: 0px 12px 0px 0px;
  overflow: hidden;
}
.avatar-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - var(--avatar-w) - 12px);
  height: 100%;
  font-size: 12px;
}
.base-info-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.tag-box {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-size: 10px;
  transform: scale(0.8);
  transform-origin: left;
}
.name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: 600;
}
.name > span:last-child {
  opacity: 0.3;
}
.desc {
  font-weight: 600;
  transform: scale(0.8);
  transform-origin: left;
  color: rgba(0, 0, 0, 0.4);
}
.tag-box > span {
  padding: 2px 6px;

  background: #c6f6d5;
  border-radius: 12px;
  color: #38a169;
  font-weight: 600;

  margin: 0px 8px;
}
.tag-box > span:first-child {
  margin: 0px;
}
</style>
