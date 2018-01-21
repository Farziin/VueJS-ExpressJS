<template>
  <div class="root">
    <b-col cols="3" class="sec">
      <b-button class="download-btn">
        <i class="fa fa-download" aria-hidden="true"></i>
        {{ size }}
      </b-button>
      <b-button class="subtitle">ف</b-button>
      <b-button class="download-cart">
        <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
      </b-button>
    </b-col>
    <b-col cols="6" class="second-sec" :style="secondSecBorder">
      <b-col cols="1" class="report">
        <i class="fa fa-flag-o" aria-hidden="true"></i>
      </b-col>
      <b-col cols="5"></b-col>
      <b-col cols="2" class="simple-text">{{ company }}</b-col>
      <b-col cols="2" class="simple-text">{{ language }}</b-col>
      <b-col cols="2" class="simple-text codec-text" :style="codecColor">{{ codec }}</b-col>
    </b-col>
    <b-col cols="3" class="third-sec" :style="thirdSecColor">
      <b-col cols="6" class="simple-text">{{ quality }}</b-col>
      <b-col cols="6" class="simple-text">{{ resolution }}</b-col>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'movie-download-row',
  data () {
    return {
      size: '1.9GB',
      codec: 'x264',
      quality: 'Blueray',
      color: '#00cc99',
      resolution: '1080p',
      company: 'Ganool',
      language: 'زبان اصلی'
    }
  },
  computed: {
    secondSecBorder () {
      return {
        'border-color': this.color
      }
    },
    codecColor () {
      return {
        'color': this.color
      }
    },
    thirdSecColor () {
      return {
        'color': 'white',
        'background-color': this.color
      }
    }
  }
}
</script>

<style scoped>

  .root {
    display: flex;
    margin: 15px 100px;
    border-radius: 7px;
    height: 45px;
  }

  .sec, .second-sec, .third-sec{
    display: flex;
    padding: 0;
  }

  .second-sec {
    border: 2px solid;
  }

  .third-sec {
    border-radius: 7px 0 0 7px;
  }

  .download-btn {
    width: 50%;
    border-radius: 0 7px 7px 0;
    background-color: #4b4b4b;
    border: #4b4b4b;
    float: right;
  }

  .download-btn:hover {
    background-color: #717171;
  }

  .subtitle, .download-cart {
    width: 25%;
    border-radius: 0;
    background-color: #555555;
    border: #555555;
  }

  .subtitle:hover , .download-cart:hover{
    background-color: #8d8d8d;
  }

  .report, .simple-text{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .codec-text {
    font-size: 20px;
  }

</style>
