<template>
  <b-card cols="12" class="root" :style="style()">
    <b-row>
      <b-col cols="5">
        <b-col cols="12" class="rate-row">
          <b-col cols="4" class="rate-title">کارگردانی  {{directorRate}} از {{max}}</b-col>
          <b-col cols="8">
            <b-progress :value="directorRate" animated :max="max"></b-progress>
          </b-col>
        </b-col>
        <b-col cols="12" class="rate-row">
          <b-col cols="4" class="rate-title">بازیگری  {{actingRate}} از {{max}}</b-col>
          <b-col cols="8">
            <b-progress :value="actingRate" animated :max="max"></b-progress>
          </b-col>
        </b-col>
        <b-col cols="12" class="rate-row">
          <b-col cols="4" class="rate-title">فیلمنامه  {{screenplayRate}} از {{max}}</b-col>
          <b-col cols="8">
            <b-progress :value="actingRate" animated :max="max"></b-progress>
          </b-col>
        </b-col>
      </b-col>
      <b-row cols="2" align-v="center">
        <b-img rounded="circle" width="100px" :src="require('../../assets/images/avatar.png')" class="profile-pic"></b-img>
      </b-row>
      <b-col cols="5" class="comment">
        <b-card class="comment-card">
          <b-row class="suggest">
            <div class="suggested" v-if="suggest">
              فیلم را پیشنهاد می‌کنم
              <i class="fa fa-check-square" aria-hidden="true"></i>
            </div>
            <div class="not-suggested" v-if="!suggest">
              فیلم را پیشنهاد نمی‌کنم
              <i class="fa fa-minus-square" aria-hidden="true"></i>
            </div>
          </b-row>
          <div class="comment-text">
            {{ text }}
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'comment',
  props: [
    'directorRate',
    'actingRate',
    'screenplayRate',
    'suggesting',
    'text'
  ],
  data () {
    return {
      max: 10,
      status: true,
      suggest: this.suggesting === 'noSuggested' ? 0 : true
    }
  },
  methods: {
    style () {
      return this.suggesting === 'noSuggested' ? {'border-color': '#d5d5d5'} : {'border-color': '#5fb37d'}
    }
  }
}
</script>

<style scoped>
  .root {
    margin: 40px 10%;
    border-radius: 10px;
    border: 3px solid;
    background-color: #f6f6f6;
  }

  .rate-row {
    display: flex;
    margin: 40px 0;
  }

  .rate-title {
    padding-right: 0;
    color: #1568bd;
    font-weight: bold;
  }

  .profile-pic {
    margin-right: 30px;
  }

  .comment {
    display: flex;
    margin: 10px 0;
    height: inherit;
  }

  .comment-card {
    display: flex;
    border-radius: 12px;
    margin-right: 20px;
    width: 100%;
    background-color: transparent;
  }

  .suggest {
    float: left;
  }

  .comment-text {
    clear: both;
    font-weight: bold;
    float: right;
    margin-top: 20px;
    font-size: 17px;
  }
  .suggested {
    color: #4b9567;
    font-weight: bolder;
    font-size: 18px;
  }

  .fa-check-square, .fa-minus-square {
    margin: 0 5px;
  }

  .not-suggested {
    color: #dd3140;
    font-weight: bolder;
    font-size: 18px;
  }

</style>
