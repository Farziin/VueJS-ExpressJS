<template>
  <div>
    <header-part></header-part>
    <div class="tabs">
      <b-tabs>
        <b-tab title="دانلود" active></b-tab>
        <b-tab title="زیرنویس"></b-tab>
        <b-tab title="نظر کاربران">
          <comment-tab></comment-tab>
        </b-tab>
        <b-tab title="نقد و بررسی"></b-tab>
        <b-tab title="عوامل فیلم"></b-tab>
        <b-tab title="جوایز"></b-tab>
        <b-tab title="گالری"></b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import HeaderPart from '../components/header-part'
import CommentTab from '../components/downloadPageComponents/comment-tab'

export default {
  components: {
    CommentTab,
    HeaderPart
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
    margin-top: 20px;
  }

</style>
