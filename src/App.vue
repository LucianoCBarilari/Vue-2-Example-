<script>
import Counter from './components/Counter.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import Registration from './components/Registration.vue';

export default {
  components: {
    Counter,
    HeaderComponent,
    Registration
  },
  data() {
    return {
      message: '¡Hola!'
    };
  }
};
</script>

<template>
  <div id="app">
    <HeaderComponent />
    <div class="text-center my-4">
      <h1 class="text-primary">{{ message }}</h1>
    </div>
    <div class="row justify-content-center mb-4">
      <Counter />
    </div>
    <div class="row justify-content-center">
      <Registration />
    </div>
  </div>
</template>



<style>
    /*Estilo para el tema oscuro*/
    body {
    background-color: #343a40; /* Cambia el color de fondo a tu preferencia */
    color: #fff; /* Color de texto */
}

.nav-pills .nav-link {
    color: rgba(255, 255, 255, 0.5); /* Color de los enlaces */
}

.nav-pills .nav-link.active {
    color: #fff; /* Color del enlace activo */
}

.nav-pills .nav-link:hover {
    color: #fff; /* Color de los enlaces al pasar el mouse */
}

.link-body-emphasis {
    color: #fff; /* Color del enlace principal */
}

.link-body-emphasis:hover {
    color: #fff; /* Color del enlace principal al pasar el mouse */
}

header {
    background-color: #343a40; /* Color de fondo del encabezado */
}
</style>
