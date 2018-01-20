<template>
  <div class="root">
    <b-form-group class="form-group">
      <b-form-textarea id="custom-txtarea" v-model="text" placeholder="نظر شما درباره این فیلم چیست ؟" :rows="6" no-resize="true"></b-form-textarea>
      <b-form-radio-group v-model="selected" :options="options" class="radio-btn">
      </b-form-radio-group>
      <!--<picker-->
      <!--autoFocus="true">-->
      <!--</picker>-->
    </b-form-group>
    <m-button backgroundColor="#4E9B6E" hoveringColor="white" text="ثبت دیدگاه" class="m-btn"></m-button>
  </div>
</template>

<script>
import {Picker, Emoji} from 'emoji-mart-vue'
import MButton from '../m-button'

export default {
  name: 'custom-textarea',
  components: {
    MButton,
    Picker,
    Emoji
  },
  data () {
    return {
      text: '',
      selected: 'noComment',
      options: [
        {text: 'نظری ندارم', value: 'noComment'},
        {text: 'پیشنهاد نمی‌کنم', value: 'noSuggested'},
        {text: 'پیشنهاد می‌کنم', value: 'suggested'}
      ]
    }
  }
}
</script>

<style scoped>
  .root {
    width: 100%;
    margin-top: 40px;
  }

  .form-group {
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  #custom-txtarea {
    overflow: hidden;
    border: none;
  }

  .radio-btn {
    float: right;
  }

  .m-btn {
    float: left;
  }

</style>
