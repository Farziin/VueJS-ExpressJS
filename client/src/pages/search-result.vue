<template>
  <div>
    <header-part></header-part>
    <div class="container">
      <carousel id="carousel" :perPage="4" :navigationEnabled="true"
                :navigationNextLabel="nextLabel" :navigationPrevLabel="prevLabel" :autoplay="true"
                :perPageCustom="[[480, 3], [768, 5]]">
        <slide v-for="movie in result" :key="movie._id">
          <film-card :id="movie._id" :color="movie.color" :filmTitle="movie.title" :year="movie.year" :imdbRate="movie.rate"
                     :categories="movie.category" :originalTitle="movie.original_title"
                     quality="BlueRay"></film-card>
          <!--TODO: add poster image-->
        </slide>
      </carousel>
    </div>
    <router-view :key="$route.params.text"></router-view>
    <footer-part></footer-part>
  </div>
</template>

<script>
import HeaderPart from '../components/header-part'
import FooterPart from '../components/footer-part'
import FilmCard from '../components/film-card'
import api from '../services/api'
import {Carousel, Slide} from 'vue-carousel'

export default {
  components: {
    FooterPart,
    HeaderPart,
    FilmCard,
    Carousel,
    Slide},
  name: 'search-result',
  data () {
    return {
      nextLabel: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      prevLabel: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      result: {},
      test: this.$route.params.text
    }
  },
  created () {
    this.result = this.search()
  },
  watch: {
    '$route': 'search'
  },
  methods: {
    search () {
      var self = this
      api().get('/search?q=' + self.$route.params.text)
        .then(function (response) {
          self.result = response.data
        })
        .catch(function (err) {
          self.result = {}
          console.log('ERROR IN SEARCH: ', err)
        })
    }
  }
}
</script>

<style scoped>
  #carousel {
    margin-top: 50px;
  }

  .fa-angle-right, .fa-angle-left {
    font-size: 50px;
  }
</style>
