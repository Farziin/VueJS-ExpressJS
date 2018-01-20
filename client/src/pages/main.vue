<template>
  <div>
    <header-part></header-part>
    <dropdown-menu class="top-margin"></dropdown-menu>
    <search-part></search-part>
    <static-poster color="#790405"
                   image="https://lh3.googleusercontent.com/UywUqv0xKbzNQOXF0Ww1qkpHEPgAKPpZkEsEwDpsInrsufUnFF6NY547TQCC6DRe7g_rnWiqEG8"
                   title="اسطوره کنگ‌فو و رویای صعود به قله"
                   subtitle="از بهترین‌ نبرد‌های بروسلی"></static-poster>

    <div class="container">
      <carousel id="carousel" :perPage="5" :navigationEnabled="true"
                :navigationNextLabel="nextLabel" :navigationPrevLabel="prevLabel" :autoplay="true"
                :perPageCustom="[[480, 3], [768, 5]]">
        <slide>
          <film-card color="#AE7444" filmTitle="Glass Castle" year="2017" imdbRate="7.2"
                     categories="درام زندگینامه"
                     image="https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2Nzk0MDE3Nl5BMl5BanBnXkFtZTgwOTI0ODc0MjI@._V1_UX182_CR0,0,182,268_AL_.jpg"
                     quality="BlueRay"></film-card>
        </slide>
      </carousel>
    </div>
    <footer-part></footer-part>
  </div>
</template>

<script>
import HeaderPart from '../components/header-part'
import DropdownMenu from '../components/dropdown-menu'
import SearchPart from '../components/search-part'
import StaticPoster from '../components/static-poster'
import FilmCard from '../components/film-card'
import {Carousel, Slide} from 'vue-carousel'
import FooterPart from '../components/footer-part'

export default {
  components: {
    FooterPart,
    FilmCard,
    HeaderPart,
    DropdownMenu,
    SearchPart,
    StaticPoster,
    Carousel,
    Slide
  },
  data () {
    return {
      nextLabel: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      prevLabel: '<i class="fa fa-angle-left" aria-hidden="true"></i>'
    }
  }
}
</script>

<style>

  #carousel {
    margin-top: 20px;
  }

  .fa-angle-right, .fa-angle-left {
    font-size: 50px;
  }
</style>
