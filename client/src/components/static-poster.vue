<template>
  <div class="container-fluid col-sm-12" :style="{ 'background-color': color }">
    <div class="col-sm-4 poster-text">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
      <m-button :backgroundColor="color" hoveringColor="white" text="طرفدارای بروسلی دانلود کنن" class="m-button"
                size="col-sm-6"></m-button>
    </div>
    <div class="col-sm-7">
      <b-img center :src="image" size="col-sm-6"></b-img>
    </div>
  </div>
</template>

<script>
import MButton from './m-button'

export default {
  components: {MButton},
  name: 'static-poster',
  props: [
    'color',
    'image',
    'title',
    'subtitle'
  ]
}
</script>

<style scoped>
  @font-face {
    font-family: IRANSansWeb;
    src: url('~/assets/fonts/IRANSansWeb(FaNum)_0.ttf')
  }

  * {
    direction: rtl;
    font-family: IRANSansWeb;
  }

  .container-fluid {
    margin-top: 10px;
    display: flex;
  }

  .title {
    color: white;
    font-size: 20px;
  }

  .subtitle {
    color: white;
    font-size: 16px;
    margin-top: 8px;
  }

  .poster-text {
    display: flex;
    flex-flow: column;
    align-items: right;
    justify-content: center;
    margin-right: 50px;
  }

  .m-button {
    margin-top: 15px;
  }
</style>
