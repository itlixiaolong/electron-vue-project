<template>
  <div class="password-use">
    <!-- html code -->
    <logo>输入秘邮安全使用密码</logo>
    <div class="password-inputs-wrapper">
      <input
        v-model="password"
        class="hidden-input"
        type="password"
        maxlength="6"
        autofocus
        @keyup="handleTypePassword">
      <div class="password-inputs-item">
        <span
          v-for="(item,index) in passwordArr"
          :key="index"
          :class="[index===activeIndex?'actived':'']"
          class="password-item">
          {{ item |toStar }}
        </span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Logo from '../../components/logo/logo';
export default {
  name: 'PasswordUse',
  components: {
    Logo
  },
  filters: {
    toStar (value) {
      return value ? '*' : ''
    }
  },
  data () {
    return {
      activeIndex: 0,
      passwordArr: ['', '', '', '', '', ''],
      password: ''
    }
  },
  computed: {
    notEmptyPasswordLength () {
      return this.passwordArr.filter(item => /\S/.test(item)).length
    }
  },
  methods: {
    handleTypePassword (e) {
      if (/\d/.test(e.key) && this.notEmptyPasswordLength < 6) {
        this.activeIndex++
        this.passwordArr[this.activeIndex - 1] = e.key
        this.passwordArr = Object.assign([], this.passwordArr)
      } else {
        this.activeIndex = 0
      }
    }
  }
}
</script>

<style scoped lang="scss">
.password-use {
  padding-top: 90px;

  .password-inputs-wrapper {
    .hidden-input {
      position: absolute;
      left: -100%;
    }

    .password-inputs-item {
      display: flex;
      width: 305px;
      padding-top: 70px;
      margin: 0 auto;
      justify-content: space-between;

      .password-item {
        width: 45px;
        height: 45px;
        // stylelint-disable-next-line
        font-family: PingFangSC-Medium;
        font-size: 20px;
        line-height: 45px;
        color: #fff;
        text-align: center;
        background-color: #1f2022;
        border: none;
        outline: none;

        &.actived {
          border: .5px solid #0098ff;
        }
      }
    }
  }
}

</style>
