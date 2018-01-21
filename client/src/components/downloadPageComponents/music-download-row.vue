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
      <b-col cols="8"></b-col>
      <b-col cols="4" class="quality-text" :style="qualityColor">{{ quality }}</b-col>
    </b-col>
    <b-col cols="3" class="third-sec" :style="thirdSecColor">
      <b-col class="simple-text length">{{ length }}</b-col>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'music-download-row',
  data () {
    return {
      size: '62.0MB',
      quality: '128kbps',
      color: '#33cbcc',
      length: '01:06:53'
    }
  },
  computed: {
    secondSecBorder () {
      return {
        'border-color': this.color
      }
    },
    qualityColor () {
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

  .report, .simple-text, .quality-text{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .quality-text {
    font-size: 19px;
  }

  .length {
    font-size: 20px;
  }

</style>
