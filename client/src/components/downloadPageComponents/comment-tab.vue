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
        <b-form class="form" v-on:submit.prevent="sendComment()">
          <b-form-group class="form-group">
            <b-form-textarea id="custom-txtarea" v-model="text" placeholder="نظر شما درباره این فیلم چیست ؟" :rows="6" :no-resize="true"></b-form-textarea>
            <b-form-radio-group v-model="selected" :options="options" class="radio-btn">
            </b-form-radio-group>
          </b-form-group>
          <b-button type="submit" class="submit-btn">ثبت دیدگاه</b-button>
        </b-form>
      </b-row>
    </div>
    <div class="col-sm-12 success-text" v-if="!show">
      نظر شما ثبت شد.
    </div>

    <div class="download-rate">
      <b-col cols="5">
        <div class="download-rate-text">ارزش دانلود {{ downloadRate }} از {{ max }}</div>

        <b-col cols="8">
          <b-progress :max="max">
            <b-progress-bar :value="downloadRate" variant="success" animated class="progress-bar"></b-progress-bar>
          </b-progress>
        </b-col>
      </b-col>
      <b-col cols="3">
        <b-col class="suggested-number" cols="8">
          {{ suggested }} نفر از {{ allUsers }} تماشای این فیلم را پیشنهاد کرده‌اند.
        </b-col>
      </b-col>
      <b-col cols="4">
        <b-col class="please-rate-text">شما هم بر اساس ارزش دانلود به فیلم رأی دهید.</b-col>
        <m-button backgroundColor="#1568bd" hoveringColor="white" text="امتیاز دهید"></m-button>
      </b-col>
    </div>

    <hr class="separator"/>

    <div class="col-sm-12">
      <comment v-for="comment in comments" :key="comment._id" :directorRate="parseInt(comment.direction_rate)" :actingRate="parseInt(comment.acting_rate)" :screenplayRate="parseInt(comment.screenplay_rate)" :text="comment.comment" :suggesting="comment.select"></comment>
    </div>
  </div>
</template>

<script>
import CustomInputRange from './custom-input-range'
import MButton from '../m-button'
import api from '../../services/api'
import Comment from './comment'

export default {
  components: {
    Comment,
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
      ],
      downloadRate: 0,
      max: 10,
      suggested: 64,
      allUsers: 72,
      comments: []
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
      comment.author = 'farziin'
      console.log('COMMENT', comment)
      var self = this
      api().post('/movie/' + this.id + '/comments', comment)
        .then(function (response) {
          self.show = !self.show
          console.log('FRONT SENT COMMENT RESPONSE: ', response)
        })
        .catch(function (err) {
          console.log('FRONT SENT COMMENT RESPONSE ERROR', err)
        })
    },
    giveComments () {
      var self = this
      api().get('/movie/' + this.id + '/comments')
        .then(function (response) {
          console.log('FRONT GIVE COMMENT RESPONSE: ', response)
          self.comments = response.data
          self.downloadRate = self.calculateDownloadRate()
        })
        .catch(function (err) {
          console.log('FRONT GIVE COMMENT RESPONSE ERROR', err)
        })
    },
    calculateDownloadRate () {
      var counter = 0
      var sum = 0
      for (var index in this.comments) {
        console.log('COMMENT')
        sum += ((parseInt(this.comments[index].direction_rate) + parseInt(this.comments[index].acting_rate) + parseInt(this.comments[index].screenplay_rate)) / 3)
        counter++
      }
      if (counter === 0) {
        return 0
      }
      return Math.round(sum / counter)
    }
  },
  created () {
    this.giveComments()
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

  .submit-btn {
    float: left;
    margin-top: 20px;
    background-color: #4E9B6E;
    padding: 15px 25px;
  }

  .submit-btn:hover {
    color: #4E9B6E;
    background-color: white;
    transition: 0.5s;
  }

  .success-text {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: #4b9567;
    margin-top: 30px;
  }

  .download-rate {
    display: flex;
    margin: 50px 5%;
  }

  .download-rate-text {
    text-align: right;
    color: green;
    font-weight: bold;
    font-size: 16px;
    margin-right: 20px;
  }

  .suggested-number {
    color: #1568bd;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
  }

  .please-rate-text {
    color: lightgray;
    text-align: center;
    font-size: 18px;
    margin-bottom: 15px;
  }

  .separator {
    background-color: lightgray;
    height: 1px;
    width: 90%;
  }

</style>
