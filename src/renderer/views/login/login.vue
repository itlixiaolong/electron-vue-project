<template>
  <div class="login">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Login',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.login {
  height: 625px;
  background-image: url("./login-bg.png");
  background-size: cover;
}
</style>
