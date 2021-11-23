<template>
  <div class="home">
    <a-list class="user-list"
            item-layout="horizontal"
            :data-source="users"
            bordered>
      <template #renderItem="{ item }">
        <a-list-item @click="userClick(item)"
                     :class="{'bg-skyblue':selectedUser == item}">
          <a-list-item-meta :description="item.nickName"
                            style="height:40px">
            <template #title>
              <a href="javascript:;">{{ item.nickName }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="item.avatar" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
    <div class="content">
      <a-button @click="logout">登出</a-button>
      <h1 v-if="!!selectedUser">{{ selectedUser.nickName }}</h1>
      <h2 v-if="!!channelName">{{channelName}}</h2>
      <ul>
        <li v-for="message in messages"
            :key="message.id">{{message.message}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, toRaw } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import useConnection from './useConnection'

export default defineComponent({
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
  flex-direction: row;
  background-color: #42b983;
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
