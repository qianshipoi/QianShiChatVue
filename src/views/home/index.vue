<template>
  <div class="home">
    <Menu></Menu>
    <Contacts :users="users" />
    <MessagePanel />
    <DirectoryPanel />
  </div>
</template>

<script>
import { ref, defineComponent, toRaw } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import useConnection from './useConnection'
import Menu from './Menu.vue'
import Contacts from './Contacts.vue'
import MessagePanel from './MessagePanel.vue'
import DirectoryPanel from './DirectoryPanel.vue'

export default defineComponent({
  components: { Menu, Contacts, MessagePanel, DirectoryPanel },
  setup() {
    const store = useStore()
    const router = useRouter()
    const selectedUser = ref({})
    const logout = () => {
      store.commit('logout')
      router.push('/login')
    }
    let {
      quitPrivateChannel,
      sendPrivateChannel,
      joinPrivateChannel,
      messages,
      users
    } = useConnection(logout)
    const channelName = ref('')
    const userClick = async (user) => {
      selectedUser.value = user
      await quitPrivateChannel(channelName.value)
      messages.value = []
      let userId = toRaw(user).id
      channelName.value = await joinPrivateChannel(userId)
    }
    return {
      logout,
      users,
      selectedUser,
      userClick,
      channelName,
      messages
    }
  }
})
</script>

<style scoped>
.home {
  display: flex;
  position: relative;
  width: 1152px;
  height: 820px;
  background: #f3f3f3;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
}
.user-list {
  width: 200px;
  height: 600px;
  overflow-y: auto;
}
.content {
  flex: 1;
}
.bg-skyblue {
  background-color: skyblue;
}
</style>
