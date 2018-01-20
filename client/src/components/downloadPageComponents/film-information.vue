<template>
  <div class="root">
    <div class="container-fluid title-bar" :style="titleBarStyle">
      <span class="title">{{ pageTitle }}</span>
      <b-img :src="poster" width="350" class="poster" :style="posterBackground"></b-img>
    </div>

    <div class="info-part">
      <b-img fluid :src="image" class="image"></b-img>
      <div class="info">
        <div class="info-row">
          <span class="rate-cell"><span v-html="starIcon" class="star"></span> {{ imdbRate }}</span>
        </div>
        <div class="info-row">
          <div class="simple-text">زبان: {{ lang }}</div>
          <div class="simple-text country">محصول  {{ country }}</div>
        </div>
        <hr class="separator"/>
        <div>
          <div class="persian-title">{{ persianTitle }}</div>
          <div class="simple-text">{{ description }}</div>
        </div>
        <hr class="separator"/>
        <div class="simple-text">کارگردان: {{ director }}</div>
        <div class="simple-text">نویسنده: {{ writer }}</div>
        <div class="simple-text">ستارگان: {{ stars }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'film-information',
  props: [
    'id'
  ],
  data () {
    return {
      pageTitle: 'دانلود انیمیشن Despicable Me 3 دوبله فارسی',
      imdbRate: '7.2',
      lang: 'انگلیسی',
      country: 'ایالات متحده آمریکا',
      persianTitle: 'دانلود انیمیشن من شرور 3 (من نفرت‌انگیز 3) دوبله فارسی',
      description: 'گرو که به همراه سه دخترش، زندگی جدیدی را با لوسی آغاز کرده، قصد دارد تا تمام شرارت‌های پیشین خود را کنار بگذارد و به زندگی‌اش به طور عادی ادامه دهد اما سر و کله برادر دوقلویش که سال‌ها پیش او را گم کرده است پیدا می‌شود ...',
      director: 'خودم',
      writer: 'خودم',
      stars: 'خودم و خودش',
      image: require('../../assets/images/despicable-me3-large-pic.jpg'),
      poster: require('../../assets/images/despicable-me3-poster.jpg'),
      color: 'orange',
      starIcon: '<i class="fa fa-star" aria-hidden="true"></i>'
    }
  },
  computed: {
    titleBarStyle () {
      return {
        'background-color': this.color
      }
    },
    posterBackground () {
      return {
        'background-color': this.color
      }
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
  }

  .poster {
    position: relative;
    z-index: +1;
    padding: 10px;
    top: 50px;
    left: 370px;
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
    top: 50%;
    left: 50%;
    transform: translate(-70%, -120%);
  }
</style>
