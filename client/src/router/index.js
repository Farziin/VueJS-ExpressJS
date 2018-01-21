import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/main'
import Download from '../pages/download'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'صفحه اصلی',
      component: Main
    },
    {
      path: '/download',
      name: 'صفحه دانلود',
      component: Download
    }
  ]
})