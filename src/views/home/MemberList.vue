<template>
  <div class="member-list">
    <div class="section-title">
      <span>Team Members</span>
      <span>6</span>
    </div>
    <MemberItem />
  </div>
</template>

<script>
import MemberItem from './MemberItem.vue'
export default {
  components: { MemberItem },
  setup() {
    return {}
  }
}
</script>

<style  scoped>
.member-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;

  position: static;
  width: 362px;
  height: 502px;
  left: 0px;
  top: 105px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 24px 0px;
}
.section-title {
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 138px;
  height: 22px;

  margin: 8px 0px;
}
.section-title > span:first-child {
  width: 106px;
  height: 21px;
  left: 0px;
  top: 0.5px;

  font-family: Metropolis;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;

  color: #000000;

  margin: 0px 8px;
}
.section-title > span:last-child {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2px 8px;

  position: static;
  width: 24px;
  height: 22px;
  left: 114px;
  top: 0px;

  /* Gray/Gray:200 */

  background: #edf2f7;
  border-radius: 24px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;
}
</style>
