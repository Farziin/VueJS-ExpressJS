<template>
  <b-button class="button-style" :style="style" v-html="text" @mouseover="mouseOver()"
            @mouseleave="mouseOver()" @click="clickFunction()"></b-button>
</template>

<script>
export default {
  name: 'm-button',
  props: [
    'backgroundColor',
    'hoveringColor',
    'size',
    'text',
    'clickFunction'
  ],
  computed: {
    style () {
      return {
        'background-color': this.hovering ? this.hoveringColor : this.backgroundColor,
        'color': this.hovering ? this.backgroundColor : this.hoveringColor
      }
    }
  },
  data () {
    return {
      hovering: false
    }
  },
  methods: {
    mouseOver () {
      this.hovering = !this.hovering
    }
  }
}
</script>

<style scoped>
  .button-style {
    border-radius: 6px;
    border: solid 1px;
    padding: 15px;
    transition: 0.5s;
  }
</style>
