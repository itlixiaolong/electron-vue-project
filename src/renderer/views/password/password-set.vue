<template>
  <div class="password-set">
    <logo>秘邮安全密码设置</logo>
    <div class="password-content">
      <input
        v-model="password"
        type="password"
        placeholder="请输入6位纯数字密码"
        class="password">
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="请输入验证新密码"
        class="confirm-password">
      <div class="error-tips">{{ errTips }}</div>
      <div class="confirm-btn">
        确定
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Logo from '../../components/logo/logo';

export default {
  name: 'PasswordSet',
  components: {
    Logo
  },

  data () {
    return {
      password: '',
      confirmPassword: '',
      errTips: '密码不符，请重新输入'
    }
  },
  computed: {
    notEmptyPasswordLength () {
      return this.passwordArr.filter(item => /\S/.test(item)).length
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.password-set {
  padding-top: 90px;

  .password-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;

    .confirm-password {
      margin-top: 20px;
    }

    .error-tips {
      height: 40px;
      font-size: 12px;
      line-height: 40px;
      color: #ff3b2f;
      text-align: left;
    }

    .confirm-btn {
      width: 300px;
      height: 45px;
      padding: 13px 12px 12px;
      // stylelint-disable-next-line
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #fff;
      text-align: center;
      background: #535663;
      border-radius: 3px;
      box-shadow: inset 0 0 0 0 rgba(102, 105, 117, .7);
      box-sizing: border-box;
    }

    .password,
    .confirm-password {
      width: 300px;
      height: 45px;
      padding: 13px 12px 12px;
      color: #f8f9fb;
      background-color: #1f2022;
      border: none;
      outline: none;
      box-sizing: border-box;

      &::-webkit-input-placeholder {
        font-size: 14px;
        color: #8e8e93;
      }
    }
  }
}
</style>
