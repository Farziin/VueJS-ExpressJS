<template>
  <div class="row col-sm-12">
        <span class="value-text col-sm-4">
        {{ value }}
        از
        {{ maxValue }}
        </span>
    <input type="range" class="col-sm-6" id="range" :min="minValue" :max="maxValue" v-model="value">
  </div>

</template>

<script>
export default {
  name: 'custom-input-range',
  props: [
    'minValue',
    'maxValue',
    'value'
  ],
  watch: {
    value: function (newVal) {
      this.$emit('update:value', newVal)
    }
  }
}
</script>

<style scoped>

  .value-text {
    width: 25%;
    font-size: 15px;
    color: #145da9;
    font-weight: bold;
  }

  #range {
    overflow: hidden;
    height: 20px;
    direction: ltr;
    cursor: pointer;
    -webkit-appearance: none;
    margin-right: 10px;
  }

  #range::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 10px;
    width: 25px;
    border-radius: 5px;
    background: #145da9;
    margin-top: -5px;
  }

  #range::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 4px;
    border-radius: 2px;
    border: solid 2px #b4b4b4;
    background-color: #b4b4b4;
  }

  #range:focus {
    outline: none;
  }

  #range::-moz-range-track {
    height: 1px;
    border-radius: 2px;
    border: solid 2px #b4b4b4;
    background-color: #b4b4b4;
  }

  #range::-moz-range-thumb {
    border: none;
    height: 10px;
    width: 25px;
    border-radius: 5px;
    background: #145da9;
    margin-top: -5px;
  }

  #range::-ms-track {
    width: 300px;
    height: 5px;

    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
    background: transparent;

    /*leave room for the larger thumb to overflow with a transparent border */
    border-color: transparent;
    border-width: 6px 0;

    /*remove default tick marks*/
    color: transparent;
  }

  #range::-ms-fill-lower {
    background: #145da9;
    border-radius: 10px;
  }

  #range::-ms-fill-upper {
    background: #ddd;
    border-radius: 10px;
  }

  #range::-ms-thumb {
    border: none;
    height: 10px;
    width: 25px;
    border-radius: 5px;
    background: #145da9;
    margin-top: 0px;
  }
</style>
