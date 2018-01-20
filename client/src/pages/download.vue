<template>
  <div>
    <header-part></header-part>
    <dropdown-menu></dropdown-menu>
    <film-information :id="id"></film-information>
    <div class="tabs">
      <b-tabs>
        <b-tab title="دانلود" active>
          <download-tab></download-tab>
        </b-tab>
        <b-tab title="زیرنویس"></b-tab>
        <b-tab title="نظر کاربران">
          <comment-tab></comment-tab>
        </b-tab>
        <b-tab title="نقد و بررسی"></b-tab>
        <b-tab title="عوامل فیلم"></b-tab>
        <b-tab title="جوایز"></b-tab>
        <b-tab title="گالری"></b-tab>
      </b-tabs>
      <footer-part></footer-part>
    </div>
  </div>
</template>

<script>
import HeaderPart from '../components/header-part'
import CommentTab from '../components/downloadPageComponents/comment-tab'
import DownloadTab from '../components/downloadPageComponents/download-tab'
import DropdownMenu from '../components/dropdown-menu'
import FilmInformation from '../components/downloadPageComponents/film-information'
import FooterPart from '../components/footer-part'

export default {
  components: {
    FooterPart,
    FilmInformation,
    DropdownMenu,
    DownloadTab,
    CommentTab,
    HeaderPart
  },
  metaInfo: {
    title: 'صفحه دانلود',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
}
</script>

<style scoped>
  @font-face {
    font-family: IRANSansWeb;
    src: url('../assets/fonts/IRANSansWeb(FaNum)_0.ttf')
  }

  * {
    font-family: IRANSansWeb;
    direction: rtl;
  }

  .tabs {
    position: relative;
    margin-top: 20px;
  }

</style>
