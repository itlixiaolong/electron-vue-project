<template>
  <div
    id="app"
    class="app">
    <!-- <div class="content-custom"> -->
    <transition
      name="slide-right"
      mode="out-in">
      <router-view />
    </transition>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
.app {
  overflow: hidden;
}
</style>
