<template>
    <div @mouseover="showPanel()" @mouseleave="hidePanel()" class="root">
        <!--<script src="https://use.fontawesome.com/008cd32a02.js"></script>-->
        <film-card-overlay :id="id" :filmTitle="filmTitle" :year="year" :originalTitle="originalTitle" class="overlay" v-show="active"></film-card-overlay>
        <div class="film-card">
            <div class="top-part"></div>
            <div class="bottom-part" :style="style">
            </div>
            <b-img center :src="'http://localhost:8081/posters/' + id" class="film-poster"></b-img>

            <div class="category-div">
                <div class="table-row-sec">
                    <span class="category-cell" v-for="category in categorySplitter(categories)" :key="category">{{ category }}</span>
                </div>
            </div>
            <div class="rate-quality-div">
                <div class="table-row-sec">
                    <span class="rate-cell"><span v-html="starIcon" class="star"></span> {{ imdbRate }}</span>
                    <span class="quality-cell">{{ quality }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FilmCardOverlay from './film-card-overlay'

export default {
  components: {FilmCardOverlay},
  name: 'film-card',
  props: [
    'id',
    'color',
    'image',
    'categories',
    'imdbRate',
    'quality',
    'filmTitle',
    'year',
    'originalTitle'
  ],
  computed: {
    style () {
      return {'background-color': this.color}
    }
  },
  methods: {
    categorySplitter (string) {
      return string.split(' ')
    },
    showPanel () {
      this.active = true
    },
    hidePanel () {
      this.active = false
    }
  },
  data () {
    return {
      starIcon: '<i class="fa fa-star" aria-hidden="true"></i>',
      active: false
    }
  }
}
</script>

<style scoped>
    @font-face {
        font-family: IRANSansWeb;
        src: url('../assets/fonts/IRANSansWeb.ttf')
    }

    * {
        font-family: IRANSansWeb;
    }

    .root {
        display: inline-flex;
    }

    .overlay {
        display: flex;
        position: absolute;
    }

    .film-card {
        z-index: 0;
        position: relative;
        display: flex;
        width: 220px;
        flex-flow: column;
        height: 350px;
    }

    .top-part {
        background-color: grey;
        height: 50%;
    }

    .bottom-part {
        height: 50%;
    }

    .film-poster {
        position: absolute;
        width: 78%;
        height: 68%;
        top: 12%;
        left: 18.5%;
        transform: translate(-10%, -10%);
    }

    .category-div {
        position: absolute;
        display: table;
        table-layout: fixed;
        direction: rtl;
        width: 78%;
        top: 77%;
        left: 18.5%;
        transform: translate(-10%, -10%);
    }

    .table-row-sec {
        display: table-row;
        width: 100%;
    }

    .category-cell {
        display: table-cell;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        text-align: center;
        border-radius: 5px;
        border: solid 3px grey;
        background-color: lightgray;
        padding: 4px 5px;
    }

    .star {
        color: gold;
    }

    .rate-quality-div {
        position: absolute;
        display: table;
        table-layout: fixed;
        direction: rtl;
        width: 78%;
        top: 88%;
        left: 18.5%;
        border-spacing: 2px;
        transform: translate(-10%, -10%);
    }

    .quality-cell, .rate-cell {
        display: table-cell;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        text-align: center;
        border-radius: 5px;
        border: solid 1px black;
        background-color: transparent;
        padding: 4px 5px;
    }

</style>
