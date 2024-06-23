
<script>
import { defineComponent } from 'vue';
import foot1 from '../assets/astroPandi.png';

export default defineComponent ({
  name: 'headerComponent',
  data(){
    return{
      logo: foot1,
      author :"Luciano Castillo"
    }
  }
});
</script>

<template>
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-dark text-light">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
              <img :src="logo" alt="Logo" width="70px" height="70px">
              <span class="fs-4 text-light">{{ author }}</span>
            </a>
        
            <ul class="nav nav-pills">
              <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Features</a></li>             
            </ul>
        </header>
</template>

<style>
 

</style>