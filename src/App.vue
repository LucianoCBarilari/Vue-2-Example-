<script>
import Counter from './components/Counter.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import Registration from './components/Registration.vue';
import StopWatch from './components/StopWatch.vue';
import UserList from './components/UserList.vue';
import SideBar from './components/SideBar.vue';

export default {
  components: {
    Counter,
    HeaderComponent,
    Registration,
    StopWatch,
    UserList,
    SideBar
  },
  data() {
    return {
      message: '¡Welcome to my Vue 2 web app example!'
    };
  }
};
</script>

<template>
  <div id="app">
    <HeaderComponent />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-1">
          <div >
            <SideBar/>
          </div>          
        </div>
        <div class="col-md-11">
          <div class="text-center">
            <h1 class="text-light">{{ message }}</h1>
          </div>
          <div class="container mt-5">
            <div class="row">
              <div class="col-md-6">
                <div class="custom-card">
                  <h5 class="card-title">Counter</h5>
                  <Counter />
                </div>
              </div>
              <div class="col-md-6">
                <div class="custom-card">
                  <h5 class="card-title">StopWatch</h5>
                  <StopWatch />
                </div>
              </div>
            </div>
          </div>
          <div class="container mt-5">
            <div class="row">
              <div class="col-md-6">
                <div class="custom-card">
                  <h5 class="card-title">Registration</h5>
                  <Registration />
                </div>
              </div>
              <div class="col-md-6">
                <div class="custom-card">
                  <h5 class="card-title">Users List</h5>
                  <UserList />
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.sidebar {
  background-color: #343a40;
  color: white;
  height: calc(100vh - 70px); /* 70px es la altura del header */
  width: 250px; /* Ancho fijo */
  padding: 1rem;
  position: fixed; /* Fijar la barra lateral */
  top: 100px; /* Altura del header */
  left: 0; /* Fijar a la izquierda */
  overflow-y: auto; /* Agregar scroll si es necesario */
}
.nav-link {
  color: white;
}
.nav-link:hover {
  color: #ddd;
}
</style>
