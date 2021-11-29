<template>
  <div class="message-box"
       :style="{'text-align':isLeft ? 'left': 'right'}">
    <span :class="{'self':!isLeft}">QianShiPoi</span>
  </div>
</template>

<script >
export default {
  props: {
    isLeft: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const { isLeft } = props
    return { isLeft }
  }
}
</script>

<style  scoped>
.message-box {
  width: 100%;
  height: 30px;
  margin: 6px 0;
}
.message-box > span {
  display: inline-flex;
  padding: 8px 16px;
  background: #f1f1f1;
  border-radius: 8px;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: black;
}
.message-box > span.self {
  background: #615ef0;
  color: #ffffff;
}
</style>
