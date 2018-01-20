<template>
  <div class="col-sm-12">
    <div class="col-sm-6">
      <div class="col-sm-8">
        <div class="rate-row">
          <span class="rate">کارگردانی</span>
          <custom-input-range minValue="0" maxValue="10" class="range col-sm-6"></custom-input-range>
        </div>
        <div class="rate-row">
          <span class="rate">بازیگری</span>
          <custom-input-range minValue="0" maxValue="10" class="range col-sm-6"></custom-input-range>
        </div>
        <div class="rate-row">
          <span class="rate">فیلم‌نامه</span>
          <custom-input-range minValue="0" maxValue="10" class="range col-sm-6"></custom-input-range>
        </div>
      </div>
      <div class="col-sm-4">

      </div>
    </div>
    <div class="col-sm-6">

    </div>
  </div>
</template>

<script>
import CustomInputRange from './custom-input-range'

export default {
  components: {CustomInputRange},
  name: 'comment-tab',
  data () {
    return {
      t: 0
    }
  }
}
</script>

<style scoped>
  @font-face {
    font-family: IRANSansWeb;
    src: url('~/assets/fonts/IRANSansWeb(FaNum)_0.ttf')
  }

  * {
    font-family: IRANSansWeb;
    direction: rtl;
  }

  .rate {
    color: #145da9;
    font-weight: bold;
    direction: rtl;

  }

  .rate-row {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    width: 100%;
  }

  .range {
    margin-top: 2px;
    float: left;
  }

</style>
