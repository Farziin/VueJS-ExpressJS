<template>
  <div class="root">
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
    <div class="option-row">
      <b-col cols="8">
        <b-dropdown id="lang" variant="light" class="dropdown">
          <template slot="button-content">
            <span id="all-lang">همه زبان‌ها</span>
          </template>
        </b-dropdown>
        <b-dropdown id="release" variant="light" class="dropdown">
          <template slot="button-content">
        <span>
          <span class="simple-text">ریلیز</span>
          <span class="all">همه</span>
        </span>
          </template>
        </b-dropdown>
        <b-dropdown id="type" variant="light" class="dropdown">
          <template slot="button-content">
        <span>
          <span class="simple-text">نوع</span>
          <span class="all">همه</span>
        </span>
          </template>
        </b-dropdown>
        <b-dropdown id="resolution" variant="light" class="dropdown">
          <template slot="button-content">
        <span>
          <span class="simple-text">رزولوشن</span>
          <span class="all">همه</span>
        </span>
          </template>
        </b-dropdown>
      </b-col>
      <b-col cols="4">
        <div>
          <b-button class="grid-btn-active"><i class="fa fa-list-ul" aria-hidden="true"></i></b-button>
          <b-button class="grid-btn-disabled"><i class="fa fa-th" aria-hidden="true"></i></b-button>
          <span class="guide">راهنما ؟</span>
        </div>
        <div>
          <b-form-radio-group v-model="selected" :options="options" class="radio-btn"></b-form-radio-group>
        </div>
      </b-col>
    </div>
    <span class="download-title">Blueray</span>
    <hr class="download-separator"/>
    <movie-download-row></movie-download-row>

    <span class="download-title">موسیقی متن</span>
    <hr class="download-separator"/>
    <music-download-row></music-download-row>
  </div>
</template>

<script>
import FilmInformation from './film-information'
import MButton from '../m-button'
import MovieDownloadRow from './movie-download-row'
import MusicDownloadRow from './music-download-row'

export default {
  components: {
    MusicDownloadRow,
    MovieDownloadRow,
    MButton,
    FilmInformation},
  name: 'download-tab',
  props: [
    'id'
  ],
  data () {
    return {
      selected: 'noComment',
      options: [
        {text: 'پیشنهادی', value: 'suggesting'},
        {text: 'حرفه‌ای', value: 'professional'}
      ],
      downloadRate: 7,
      max: 10,
      suggested: 64,
      allUsers: 72
    }
  }
}
</script>

<style scoped>

  .download-rate {
    display: flex;
    margin: 30px 5%;
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

  #all-lang {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 2px 20px;
    margin-left: 30px;
  }

  .dropdown {
    border: 2px solid lightgray;
    border-radius: 7px;
  }

  .dropdown:focus {
    outline: none;
  }

  .all {
    background-color: dodgerblue;
    color: white;
    border-radius: 5px;
    padding: 2px 20px;
    margin-right: 10px;
    margin-left: 30px;
  }

  .option-row {
    display: flex;
  }

  .grid-btn-active {
    border: 1px solid black;
    padding: 10px 12px;
    background-color: white;
    font-size: 20px;
    color: black;
  }

  .grid-btn-active:hover {
    background-color: black;
    color: white;
    transition: 0.5s;
  }

  .grid-btn-active:focus {
    outline: none;
  }

  .grid-btn-disabled {
    border: 1px solid #606060;
    padding: 10px 12px;
    font-size: 20px;
    background-color: white;
    color: #606060;
  }

  .grid-btn-disabled:hover {
    background-color: #606060;
    color: white;
    transition: 0.5s;
  }

  .grid-btn-disabled:focus {
    outline: none;
  }

  .guide {
    color: orange;
    cursor: pointer;
    margin-right: 20px;
  }

  .guide:hover {
    color: #dd8f00;
  }

  .radio-btn {
    margin-top: 15px;
  }

  .download-title {
    display:flex;
    margin-right: 100px;
    margin-top: 30px;
    color: #1a7adb;
    font-size: 20px;
    font-weight: bold;
  }

  .download-separator {
    background-color: #1a7adb;
    height: 1px;
    margin: 5px 90px;
    border: none;
  }
</style>
