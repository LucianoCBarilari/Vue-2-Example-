<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name:"counter",
  data(){
    return {
      quantity:0
    }
  }
})
</script>
<template>
        <div  class="container border rounded mt-2">
            <div class="col-12 border rounded text-primary text-center">
              <h2>counter</h2>
            </div>
            <div class="row">
            <div class="col-3">
              <span id="minus" class="fa fa-minus-square" v-on:click="quantity--"></span>
            </div>
            <div class="col-6 text-center text-primary">
              {{quantity}}                      
            </div>
            <div class="col-3">
              <span id="plus" class="fa fa-plus-square" v-on:click="quantity++"></span>
            </div>  
          </div>
        </div>  
</template>




