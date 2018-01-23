<template>
  <div class="root">
    <div class="container-fluid title-bar" :style="titleBarStyle">
      <span class="title">دانلود {{data.original_title}} {{data.year}}</span>
      <b-img :src="'http://localhost:8081/posters/' + id" width="350" class="poster" :style="posterBackground"></b-img>
    </div>

    <div class="info-part">
      <b-img fluid :src="image" class="image"></b-img>
      <div class="info">
        <div class="info-row">
          <span class="rate-cell"><span v-html="starIcon" class="star"></span> {{ data.rate }}</span>
        </div>
        <div class="info-row">
          <div class="simple-text">زبان: {{ data.language }}</div>
          <div class="simple-text country">محصول  {{ data.country }}</div>
        </div>
        <hr class="separator"/>
        <div>
          <div class="persian-title">{{ data.title }}</div>
          <div class="simple-text">{{ data.description }}</div>
        </div>
        <hr class="separator"/>
        <div class="simple-text">کارگردان: {{ data.director }}</div>
        <div class="simple-text">نویسنده: {{ data.writer }}</div>
        <div class="simple-text">ستارگان: {{ data.stars }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../services/api'

export default {
  name: 'film-information',
  props: [
    'id'
  ],
  data () {
    return {
      image: require('../../assets/images/despicable-me3-large-pic.jpg'),
      starIcon: '<i class="fa fa-star" aria-hidden="true"></i>',
      data: []
    }
  },
  computed: {
    titleBarStyle () {
      return {
        'background-color': this.data.color
      }
    },
    posterBackground () {
      return {
        'background-color': this.data.color
      }
    }
  },
  created () {
    var self = this
    api().get('movie/' + this.id + '/details').then(function (response) {
      self.data = response.data
      console.log('RESPONSE', response.data)
      console.log(self.data)
    }).catch(function (error) {
      console.log('ERROR: ', error)
    })
  },
  watch: {
    id: function (newVal) {
      var self = this
      api().get('movie/' + newVal + '/details').then(function (response) {
        self.data = response.data
        console.log('RESPONSE', response.data)
        console.log(self.data)
      }).catch(function (error) {
        console.log('ERROR: ', error)
      })
    }
  }
}
</script>

<style scoped>

  .root {
    position: relative;
    margin-top: 20px;
  }

  .title-bar {
    display: inline-block;
    height: 100px;
  }

  .title {
    color: white;
    font-weight: bold;
    font-size: 20px;
    margin-right: 30px;
    margin-top: 10px;
    float: right;
    width: 20%;
  }

  .poster {
    position: relative;
    z-index: +1;
    padding: 10px;
    top: 50px;
    left: 275px;
    display: flex;
    float: right;
  }

  .info-part {
    position: relative;
    display: flex;
    direction: rtl;
  }

  .simple-text {
    z-index: +1;
    text-align: right;
    margin-bottom: 10px;
    color: white;
  }

  .country {
    margin-right: 20px;
  }

  .info-row {
    display: flex;
    margin-bottom: 10px;
  }

  .rate-cell {
    font-size: 16px;
    text-align: center;
    border-radius: 5px;
    border: solid 1px white;
    color: white;
    background-color: transparent;
    padding: 6px 8px;
  }

  .star {
    color: gold;
  }

  .persian-title {
    font-weight: bold;
    font-size: 18px;
    text-align: right;
    margin-bottom: 10px;
    color: white;
  }

  .separator {
    background-color: white;
    border: none;
    height: 2px;
  }

  .image {
    position: relative;
    margin-top: -10px;
    width: 100%;
  }

  .info {
    position: absolute;
    width: 60%;
    top: 43%;
    left: 50%;
    transform: translate(-70%, -100%);
    margin-top: 20px;
  }
</style>
