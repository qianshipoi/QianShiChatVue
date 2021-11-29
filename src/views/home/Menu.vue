<template>
  <div class="menu-box">
    <main>
      <div class="logo">Q</div>
      <ul class="menu-items">
        <li class="menu-item">I</li>
        <li class="menu-item">A</li>
        <li class="menu-item">N</li>
        <li class="menu-item">S</li>
        <li class="menu-item">H</li>
        <li class="menu-item">I</li>
      </ul>
    </main>
    <footer>S</footer>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style  scoped>
.menu-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 24px;

  position: relative;
  z-index: 1;
  width: 70px;
  height: 100%;

  background: #ffffff;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
}
main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 56px;
  margin: 10px 0px;
}
.logo {
  width: 48px;
  height: 48px;
  font-size: 32px;
  color: white;
  background: #615ef0;
  border-radius: 14px;
}
.menu-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 30px;
}
.menu-item {
  width: 27px;
  height: 24px;
  left: 1.5px;
  top: 112px;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;

  color: #000000;

  margin: 32px 0px;
}
footer {
  position: static;
  width: 24px;
  height: 24px;
  left: 32px;
  top: 976px;

  font-family: 字体 Awesome 6 Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;

  color: #000000;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
}
</style>
