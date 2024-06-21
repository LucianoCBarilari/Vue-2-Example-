<!-- src/App.vue -->
<template>
  <div id="app" class="container">
    <div class="row">       
      <div class="col-md-6">
        <div class="text-primary">
          <h1>{{ message }}</h1>
        </div>
      </div>        
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '¡Hola Pepe!'
    };
  }
};
</script>

<style>
h1{
  color:blue;
}
</style>
