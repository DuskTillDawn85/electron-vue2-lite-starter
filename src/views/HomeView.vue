<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/img/hero.png"
    >
    <HelloWorld msg="Build Your Vue.js App For Desktop With Electron" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 300px;
}
</style>
