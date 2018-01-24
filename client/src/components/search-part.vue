<template>
  <section class="container-fluid">
    <b-img center src="http://cdn.pcwallart.com/images/interstellar-poster-1080p-wallpaper-4.jpg" fluid
           alt="Responsive image"/>
    <div class="centered col-sm-12">
      <span class="white-text row">{{ searchContainerTitle }}</span>
      <div class="row">
        <simple-circle-button icon="<i class='fa fa-search-plus' aria-hidden='true'></i>"
                              color="#8d7ebd"></simple-circle-button>
        <simple-circle-button icon="<i class='fa fa-search' aria-hidden='true'></i>"
                              color="#5aae7a"></simple-circle-button>
        <b-form-input type="text" placeholder="جست‌وجوی فیلم، سریال، بازیگر، کارگردان و ..."
                      class="col-sm-6 radius">
        </b-form-input>
      </div>
      <div class="row">
        <span class="col-sm-6"></span>
        <b-button class="orange col-sm-2">جستجو</b-button>
      </div>

    </div>

  </section>
</template>

<script>
import SimpleCircleButton from '../components/simple-circle-button'

export default {
  name: 'search-part',
  components: {
    SimpleCircleButton
  },
  data () {
    return {
      searchContainerTitle: 'دانلود فیلم، سریال، انیمیشن، مستند و دوبله با 13621 عنوان'
    }
  }
}
</script>

<style scoped>
  @font-face {
    font-family: IRANSansWeb;
    src: url('~/assets/fonts/IRANSansWeb(FaNum)_0.ttf')
  }

  * {
    font-family: IRANSansWeb;
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    direction: rtl;
  }

  .container-fluid {
    position: relative;
    text-align: center;
    color: white;
  }

  .white-text {
    color: white;
  }

  .row {
    margin-top: 10px;
    justify-content: center;
  }

  .radius {
    border-radius: 12px;
  }

  .orange {
    margin-left: 11%;
    margin-top: 10px;
    background-color: #DF8E00;
  }

  .orange:hover {
    background-color: #FFA500;
  }

</style>
