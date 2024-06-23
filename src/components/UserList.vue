<script>
  import Vue from 'vue';

  export default Vue.extend({
    name: "usersComponent",
    data() {
      return {
        users: [
          {
              id: 1,
              name: "Juan Pérez",
              email: "juan.perez@example.com",
              userName: "JuanPe3"
          },
          {
              id: 2,
              name: "María García",
              email: "maria.garcia@example.com",
              userName: "Maria34"
          },
          {
              id: 3,
              name: "Carlos López",
              email: "carlos.lopez@example.com",
              userName: "Crack123"
          },
          {
              id: 4,
              name: "Ana Martínez",
              email: "ana.martinez@example.com",
              userName: "MarAna123"
          },
          {
              id: 5,
              name: "Luis Fernández",
              email: "luis.fernandez@example.com",
              userName: "Fernandez23"
          }
        ]
      };
    }
  });
</script>

<template>
  <div class="container border rounded mt-2 p-3 bg-dark text-light">
    <div class="col-12 border rounded text-primary text-center mb-2">
      <h2>Users</h2>
    </div>
    <div class="row">
      <div class="col-12">
        <ul class="list-group" id="users-list">
          <li class="list-group-item dark-mode-item" v-for="user in users" :key="user.id">
            Full name: <strong>{{ user.name }}</strong><br>
            Email: {{ user.email }}<br>
            User: {{ user.userName }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #333; /* Color de fondo oscuro */
  color: #fff; /* Texto en color blanco */
  border-color: #555; /* Color del borde */
}

.dark-mode-item {
  background-color: #444; /* Color de fondo para elementos de lista */
  border-color: #666; /* Color del borde de elementos de lista */
  color: #fff; /* Texto en color blanco */
}

.dark-mode-item strong {
  color: #ffc107; /* Color del texto fuerte (nombre del usuario) */
}
</style>

