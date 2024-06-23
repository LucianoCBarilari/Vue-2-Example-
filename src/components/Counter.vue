<script>
import Vue from 'vue';

export default Vue.extend({
  name: "counter",
  data() {
    return {
      quantity: 0
    };
  }
});
</script>

<template>
  <div class="container border rounded mt-2 p-3 bg-dark text-light">
    <div class="col-12 border rounded text-primary text-center mb-2">
      <h2>Counter</h2>
    </div>
    <div class="row align-items-center">
      <div class="col-3 text-center">
        <span id="minus" class="fa fa-minus-square fa-3x" v-on:click="quantity--"></span>
      </div>
      <div class="col-6 text-center text-light">
        <h3>{{ quantity }}</h3>
      </div>
      <div class="col-3 text-center">
        <span id="plus" class="fa fa-plus-square fa-3x" v-on:click="quantity++"></span>
      </div>
    </div>
  </div>
</template>