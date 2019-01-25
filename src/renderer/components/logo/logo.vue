<template>
  <div class="logo">
    <!-- html code -->
    <span class="logo-img"/>
    <p class="logo-text"><slot/></p>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'Logo'
}
</script>

<style scoped lang="scss">
/* scss */
.logo {
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo-img {
    width: 64px;
    height: 75px;
    background: url("./temail-logo@2x.png") no-repeat;
    background-size: 100%;
  }

  .logo-text {
    margin-top: 14px;
    // stylelint-disable-next-line
    font-family: PingFangSC-Medium;
    font-size: 26px;
    line-height: 37px;
    color: #f8f9fb;
  }
}
</style>
