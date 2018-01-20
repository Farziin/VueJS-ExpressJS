<template>
  <div>
    <b-button :style="style" class="circle-btn" v-html="icon"></b-button>
  </div>
</template>

<script>
export default {
  name: 'circle-button',
  props: [
    'icon',
    'color',
    'hoveringColor'
  ],
  computed: {
    style () {
      return {'background-color': this.color}
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
  .circle-btn {
    border-radius: 50%;
    padding: 14px;
    display: flex;
    font-size: 22px;
    align-items: center;
    margin-left: 5px;
  }
</style>
