import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "group-manage" */ '../views/login/login.vue'),
      children: [
        {
          path: '/',
          redirect: '/password-use'
        },
        {
          path: '/password-set',
          name: 'PasswordSet',
          component: () => import(/* webpackChunkName: "password-set" */ '../views/password/password-set.vue')
        },
        {
          path: '/password-use',
          name: 'PasswordUse',
          component: () => import(/* webpackChunkName: "password-use" */ '../views/password/password-use.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
})
