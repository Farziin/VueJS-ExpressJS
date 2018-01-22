<template>
  <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab title="ویرایش اطلاعات کاربری" active>
        <edit-profile></edit-profile>
      </b-tab>
      <b-tab title="تغییر رمز عبور" disabled></b-tab>
      <b-tab title="انتقال اشتراک از سایت قدیم" disabled></b-tab>
      <b-tab title="دعوت دوستان" disabled></b-tab>
    </b-tabs>
  </b-card>

</template>

<script>
import EditProfile from './edit-profile'

export default {
  components: {EditProfile},
  name: 'settings'
}
</script>

<style scoped>

</style>
