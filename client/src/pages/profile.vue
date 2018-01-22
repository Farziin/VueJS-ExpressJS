<template>
  <div class="root">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="تنظیمات" active>
          <settings></settings>
        </b-tab>
        <b-tab title="خرید اشتراک" disabled></b-tab>
        <b-tab title="سبد دانلود" disabled></b-tab>
        <b-tab title="فیلم‌های موردعلاقه" disabled></b-tab>
        <b-tab title="تیکت" disabled></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import HeaderPart from '../components/header-part'
import Settings from '../components/profileComponents/settings'

export default {
  components: {
    Settings,
    HeaderPart},
  name: 'profile'
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
</style>
