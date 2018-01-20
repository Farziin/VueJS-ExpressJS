<template>
  <div class="col-sm-12 cols">
    <b-row class="col-sm-6 right-col" align-v="center" align-h="center">
      <b-row class="col-sm-7">
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
      </b-row>
      <b-row class="col-sm-4" align-v="center" align-h="center">
        <b-img rounded="circle" width="100px" :src="require('../../assets/images/personal.jpg')"></b-img>
      </b-row>
    </b-row>
    <b-row class="col-sm-6" align-v="center" align-h="center">
      <custom-textarea></custom-textarea>
    </b-row>
  </div>
</template>

<script>
import CustomInputRange from './custom-input-range'
import CustomTextarea from './custom-textarea'

export default {
  components: {
    CustomTextarea,
    CustomInputRange
  },
  name: 'comment-tab'
}

</script>

<style scoped>
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

  .cols {
    display: flex;
  }

  .right-col {
    padding-bottom: 50px;
  }
</style>
