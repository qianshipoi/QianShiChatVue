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
  padding: 12px;

  height: 93px;

  border-radius: 12px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 8px 0px;
}
.message-item.is-selected {
  background: rgba(97, 94, 240, 0.06);
}
.avatar-box {
  position: static;
  width: 48px;
  height: 48px;
  left: 12px;
  top: 12px;

  background: #d8d8d8;
  border-radius: 12px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 16px 0px 0px;
}
.content-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 48px - 16px);
  height: 69px;
}
.base-info-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 39px;
}
.tag-box {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  height: 22px;
  left: 0px;
  top: 47px;
  font-size: 12px;

  margin: 8px 0px 0px;
}
.name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 21px;
  font-weight: 600;
}
.name > span:last-child {
  opacity: 0.3;
}
.desc {
  height: 18px;

  font-family: Metropolis;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;

  color: rgba(0, 0, 0, 0.4);
}
.tag-box > span {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2px 8px;

  height: 22px;

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
