<template>
  <div class="directory-panel">
    <header>
      <span>Directory</span>
      <a href="javascript:;"></a>
    </header>
    <main>
      <MemberList />
    </main>
  </div>
</template>

<script >
import MemberList from './MemberList.vue'
import { ref } from 'vue'

export default {
  components: { MemberList },
  setup() {
    const state = ref({
      count: 0
    })

    return {
      state
    }
  }
}
</script>

<style scoped>
.directory-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 362px;
  height: 1024px;
  left: 1078px;
  top: 0px;

  background: #ffffff;
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.08);
}
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;
  padding: 0 20px;
  border-bottom: 1px solid #00000014;
}
header > span {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
}
header > a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background: rgba(97, 94, 240, 0.1);
  border-radius: 30px;
}
main {
  width: 100%;
  height: calc(100% - 80px);
}
</style>
