<template>
  <div class="member-item">
    <div class="avatar"></div>
    <div class="content">
      <div class="name">
        <span>Kuriyama Mirai</span>
      </div>
      <div class="desc">
        Kuriyama Mirai
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style  scoped>
.member-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px;

  width: 100%;
  height: 58px;
}
.avatar {
  width: 38px;
  height: 38px;

  background: #d8d8d8;
  border-radius: 12px;

  flex: none;
  margin: 0px 12px 0 0;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 38px - 12px);
  height: 69px;

  transform: scale(0.8);
  transform-origin: left top;
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
.desc {
  height: 18px;

  font-family: Metropolis;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;

  color: rgba(0, 0, 0, 0.4);
}
</style>
