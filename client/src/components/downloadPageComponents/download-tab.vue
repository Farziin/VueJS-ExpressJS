<template>
  <div class="root">
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
      selected: 'suggesting',
      options: [
        {text: 'پیشنهادی', value: 'suggesting'},
        {text: 'حرفه‌ای', value: 'professional'}
      ]
    }
  }
}
</script>

<style scoped>

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
    margin-top: 40px;
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
