import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/main'
import Download from '../pages/download'
import Profile from '../pages/profile'
import SearchResult from '../pages/search-result'
import UploadFilm from '../pages/upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'صفحه اصلی',
      component: Main
    },
    {
      path: '/download/:id',
      name: 'صفحه دانلود',
      component: Download
    },
    {
      path: '/profile',
      name: 'صفحه کاربری',
      component: Profile
    },
    {
      path: '/search-result/:text',
      name: 'نتیجه جستجو',
      component: SearchResult
    },
    {
      path: '/upload',
      name: 'آپلود فیلم',
      component: UploadFilm
    }
  ]
})
