<template>
  <div class="overlay">
    <span class="download-text">دانلود</span>
    <span class="title">{{ filmTitle }}</span>
    <span class="year">{{ year }}</span>
    <div class="row">
      <router-link :to="'/download/' + id">
        <b-button class="circle-button" v-html="downloadIcon"></b-button>
      </router-link>
      <b-button class="circle-button" v-html="likeIcon"></b-button>
      <b-button class="circle-button" v-html="playIcon"></b-button>
    </div>
    <span class="title">{{ originalTitle }}</span>
  </div>
</template>

<script>
import CircleButton from './simple-circle-button'

export default {
  components: {CircleButton},
  name: 'film-card-overlay',
  props: [
    'filmTitle',
    'year',
    'originalTitle',
    'id'
  ],
  data () {
    return {
      downloadIcon: '<i class="fa fa-download" aria-hidden="true"></i>',
      likeIcon: '<i class="fa fa-heart-o" aria-hidden="true"></i>',
      playIcon: '<i class="fa fa-video-camera" aria-hidden="true"></i>'
    }
  }
  // methods: {
  //   goToDownloadPage (id) {
  //     this.$router.push('/download/' + id)
  //     this.$router.forward()
  //   }
  // }
}
</script>

<style scoped>

  .overlay {
    z-index: +1;
    background-color: black;
    flex-flow: column;
    justify-content: center;
    opacity: 0.55;
    width: 220px;
    height: 350px;
  }

  .download-text {
    color: gold;
    z-index: +2;
    text-align: center;
  }

  .title {
    color: white;
    text-align: center;
  }

  .year {
    color: gold;
    text-align: center;
  }

  .row {
    justify-content: center;
  }

  .circle-button {
    display: flex;
    align-items: center;
    align-content: center;
    border-radius: 50%;
    background-color: transparent;
    padding: 15px;
    margin: 5px;
  }

  .circle-button:hover {
    background-color: white;
    padding: 18px;
    color: #47494e;
    margin: 2px;
    transition: 0.4s;
  }

</style>
