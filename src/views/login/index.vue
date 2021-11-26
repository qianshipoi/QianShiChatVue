<template>
  <div class="login-main">
    <RegisteredCom class="registered"
                   :switchFunc="qiehuan"></RegisteredCom>
    <LoginCom class="login"
              :switchFunc="qiehuan"></LoginCom>
    <div :class="['image', isLogin ? 'l' : 'r']"></div>
  </div>
</template>

<script>
import { ref } from 'vue'
import LoginCom from '../../components/LoginCom.vue'
import RegisteredCom from '../../components/RegisteredCom.vue'

export default {
  components: { LoginCom, RegisteredCom },
  setup() {
    const isLogin = ref(true)
    const qiehuan = () => {
      isLogin.value = !isLogin.value
    }
    return {
      isLogin,
      qiehuan
    }
  }
}
</script>

<style scoped>
.login-main {
  position: relative;
  display: grid;
  grid-template-columns: 50%;
  height: 100%;
}
.registered {
  grid-column: 1;
}
.login {
  grid-column: 2;
}
.image {
  position: absolute;
  z-index: 1;
  width: 50%;
  height: 100%;
  background-color: skyblue;
  transition: all 0.2s ease-in-out;
}
.l {
  left: 0;
}
.r {
  left: 50%;
}
</style>
