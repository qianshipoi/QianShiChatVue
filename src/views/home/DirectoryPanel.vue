<template>
  <div class="directory-panel">
    <header>
      <span>Directory</span>
      <a href="javascript:;"></a>
    </header>
    <main>
      <DirectoryItemPanel title="Team Members">
        <MemberItem v-for="item in [1,2,3,4,5]"
                    :key="item" />
      </DirectoryItemPanel>
      <DirectoryItemPanel title="Files">
        <FileItem v-for="item in [1,2,3,4,5]"
                  :key="item" />
      </DirectoryItemPanel>
    </main>
  </div>
</template>

<script >
import DirectoryItemPanel from './DirectoryItemPanel.vue'
import MemberItem from './MemberItem.vue'
import FileItem from './FileItem.vue'
import { ref } from 'vue'

export default {
  components: { DirectoryItemPanel, MemberItem, FileItem },
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

  width: calc(100% - 512px - 70px - 280px);
  height: 100%;
  border-left: 1px solid #00000014;

  background: #ffffff;
}
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 64px;
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
