<template>
  <div>
    <div class="col-sm-12 cols" v-if="show">
      <b-row class="col-sm-6 right-col" align-v="center" align-h="center">
        <b-row class="col-sm-7">
          <div class="rate-row">
            <span class="rate">کارگردانی</span>
            <custom-input-range :value="directionRate" @update:value="newVal => directionRate = newVal" minValue="0" maxValue="10" class="range col-sm-6"></custom-input-range>
          </div>
          <div class="rate-row">
            <span class="rate">بازیگری</span>
            <custom-input-range :value="actingRate" @update:value="newVal => actingRate = newVal" minValue="0" maxValue="10" class="range col-sm-6"></custom-input-range>
          </div>
          <div class="rate-row">
            <span class="rate">فیلم‌نامه</span>
            <custom-input-range :value="screenPlayRate" @update:value="newVal => screenPlayRate = newVal" minValue="0" maxValue="10" class="range col-sm-6"></custom-input-range>
          </div>
        </b-row>
        <b-row class="col-sm-4" align-v="center" align-h="center">
          <b-img rounded="circle" width="100px" :src="require('../../assets/images/personal.jpg')"></b-img>
        </b-row>
      </b-row>
      <b-row class="col-sm-6" align-v="center" align-h="center">
        <b-form class="form">
          <b-form-group class="form-group">
            <b-form-textarea id="custom-txtarea" v-model="text" placeholder="نظر شما درباره این فیلم چیست ؟" :rows="6" no-resize="true"></b-form-textarea>
            <b-form-radio-group v-model="selected" :options="options" class="radio-btn">
            </b-form-radio-group>
          </b-form-group>
          <m-button :clickFunction="sendComment" backgroundColor="#4E9B6E" hoveringColor="white" text="ثبت دیدگاه" class="m-btn"></m-button>
        </b-form>
      </b-row>
    </div>
    <div class="col-sm-12 success-text" v-if="!show">
      نظر شما ثبت شد.
    </div>
  </div>
</template>

<script>
import CustomInputRange from './custom-input-range'
import MButton from '../m-button'
import api from '../../services/api'

export default {
  components: {
    CustomInputRange,
    MButton
  },
  name: 'comment-tab',
  props: [
    'id'
  ],
  data () {
    return {
      directionRate: 6,
      actingRate: 6,
      screenPlayRate: 6,
      text: '',
      show: true,
      selected: 'noComment',
      options: [
        {text: 'نظری ندارم', value: 'noComment'},
        {text: 'پیشنهاد نمی‌کنم', value: 'noSuggested'},
        {text: 'پیشنهاد می‌کنم', value: 'suggested'}
      ]
    }
  },
  methods: {
    sendComment () {
      var comment = {}
      comment.comment = this.text
      comment.direction_rate = this.directionRate
      comment.acting_rate = this.actingRate
      comment.screenplay_rate = this.screenPlayRate
      comment.select = this.selected
      var self = this
      api().post('/movie/' + this.id + '/comments', comment)
        .then(function (response) {
          self.show = !self.show
          console.log('FRONT SENT COMMENT RESPONSE: ', response)
        })
        .catch(function (err) {
          console.log('FRONT SENT COMMENT RESPONSE ERROR', err)
        })
    }
  }
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
    padding-bottom: 80px;
  }

  .form {
    margin-top: 20px;
    width: 100%;
  }

  .form-group {
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  #custom-txtarea {
    overflow: hidden;
    border: none;
  }

  .radio-btn {
    float: right;
  }

  .m-btn {
    float: left;
    margin-top: 20px;
  }

  .success-text {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: #4b9567;
    margin-top: 30px;
  }

</style>
