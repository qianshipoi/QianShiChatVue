
import { ref, onBeforeMount } from 'vue'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { useStore } from 'vuex'

export default function useConnection (logOut) {
  let connection
  const store = useStore()
  const messages = ref([])
  const users = ref([])

  onBeforeMount(() => {
    connection = new HubConnectionBuilder()
      .withUrl('http://localhost:5000/chathub', {
        accessTokenFactory: () => store.state.accessToken
      })
      .configureLogging(LogLevel.Information)
      .build()
    start()
  })

  const start = async () => {
    try {
      await connection.start()
      users.value = await connection.invoke('GetUsersAsync')
      console.log(users)
      connection.on('ReceiveMessage', (userId, message) => {
        messages.value.push({
          id: new Date().getTime(),
          message: message.content
        })
      })
    } catch (err) {
      if (err.message == 'Unauthorized') {
        logOut && logOut()
      }
      setTimeout(start, 5000)
    }
  }
  const joinPrivateChannel = async (userId) => {
    return await connection.invoke('CreateOrJoinPrivateChannel', userId)
  }

  const quitPrivateChannel = async (channelName) => {
    if (!!channelName) {
      await connection.invoke('QuitPrivateChannel', channelName)
    }
  }

  const sendPrivateChannel = async (channelName, msg) => {
    if (!!channelName) {
      await connection.invoke(
        'SendMessageToPrivateChannel',
        channelName,
        msg
      )
    }
  }

  return {
    users,
    messages,
    joinPrivateChannel,
    quitPrivateChannel,
    sendPrivateChannel,
  }

}
