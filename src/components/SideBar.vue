<script>
import Vue from 'vue';
import foot1 from '../assets/astroPandi.png';

export default Vue.extend({
  name: "sideBar",
  data() {
      return{
        logo: foot1
      }
     }
  })
</script>


<template>
<div class="d-flex flex-column vh-100 text-white bg-dark p-3" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Sidebar</span>
    </a>
    <hr class="mb-4">
    <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
                <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
                Home
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-white">
                <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
                Dashboard
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-white">
                <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
                Orders
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-white">
                <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
                Products
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-white">
                <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                Customers
            </a>
        </li>
    </ul>
    <hr class="mt-auto">
    <div class="container">
        <img :src="logo" alt="" width="50" height="50" class="rounded-circle me-2">
    </div>
</div>
</template>