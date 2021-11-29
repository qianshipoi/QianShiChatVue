<template>
  <div class="member-list">
    <div class="section-title">
      <span>{{title}}</span>
      <span>{{count}}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Unknown'
    },
    count: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const { title, count } = props
    return { title, count }
  }
}
</script>

<style  scoped>
.member-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;

  width: 100%;

  margin: 16px 0px;
}
.section-title {
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 22px;

  margin: 8px 0px;
}
.section-title > span:first-child {
  height: 21px;
  left: 0px;
  top: 0.5px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;

  color: #000000;
}
.section-title > span:last-child {
  display: flex;
  flex-direction: column;
  text-align: center;

  width: 24px;
  height: 22px;

  background: #edf2f7;
  border-radius: 24px;

  margin: 0px 8px;
}
</style>
