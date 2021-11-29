<template>
  <div class="message-item">
    <div class="avatar-box"></div>
    <div class="content-box">
      <div class="base-info-box">
        <div class="name">
          <span>Kuriyama Mirai</span>
          <span>12m</span>
        </div>
        <div class="desc">
          Kuriyama Mirai
        </div>
      </div>
      <div class="tag-box">
        <span>Kuriyama</span>
        <span>Mirai</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
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
