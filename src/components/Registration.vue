<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "registration",
  data() {
    return {
      form: {
        campo_nombre: "Nombre Completo",
        campo_email: "Correo electronico",
        campo_usuario: "Nombre de usuario",
        campo_pass: "Contraseña",
        campo_pass_Confirm: "Confirme la contraseña",
        fNombre: "",
        fEmail: "",
        fUsuario: "",
        fPass: "",
        fPass_Confirm: ""
      }
    }
  },
  methods: {
    print() {
      let eName = this.form.fNombre;
      let eEmail = this.form.fEmail;
      let eUsuario = this.form.fUsuario;
      let eContraseña = this.form.fPass;
      let eConfirContraseña = this.form.fPass_Confirm;
      console.log(`Nombre : ${eName} Email : ${eEmail} Usuario : ${eUsuario} Contraseña : ${eContraseña} Confirmar contraseña : ${eConfirContraseña}`);
    },
    changeFocus(e) {
      switch (e.target.id) {
        case "campo_nombre":
          this.$refs.campo_email.focus();
          break;
        case "campo_email":
          this.$refs.campo_usuario.focus();
          break;
        case "campo_usuario":
          this.$refs.campo_pass.focus();
          break;
        case "campo_pass":
          this.$refs.campo_pass_Confirm.focus();
          break;
      }
    },
    validateEmail(email) {
      const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regexEmail.test(email);
    },
    eventChangeHandler() {
      // Implementar la lógica aquí
    }
  }
});
</script>

<template>
  <div id="form" class="container mt-5">
    <div class="col-12 border rounded p-4 bg-light">
      <h3 class="text-center mb-4">Registration Form</h3>
      <div class="form-group">
        <label for="campo_nombre" class="cols-sm-2 control-label">{{ form.campo_nombre }}</label>
        <div class="cols-sm-12">
          <div class="input-group">
            <span class="pt-2 px-3 input-group-addon bg-info text-white">
              <i class="fa fa-user" aria-hidden="true"></i>
            </span>
            <input v-model="form.fNombre"
                   type="text"
                   class="form-control"
                   name="name"
                   id="campo_nombre"
                   :placeholder="form.campo_nombre"
                   v-on:keyup.enter="changeFocus($event)"
                   ref="campo_nombre"/>
          </div>
        </div>
      </div>
      <div class="form-group mt-3">
        <label for="campo_email" class="cols-sm-2 control-label">{{ form.campo_email }}</label>
        <div class="cols-sm-12">
          <div class="input-group">
            <span class="pt-2 px-3 input-group-addon bg-info text-white">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
            <input v-model="form.fEmail"
                   type="email"
                   class="form-control"
                   name="email"
                   id="campo_email"
                   :placeholder="form.campo_email"
                   v-on:keyup.enter="changeFocus($event)"
                   ref="campo_email"/>
          </div>
        </div>
      </div>
      <div class="form-group mt-3">
        <label for="campo_usuario" class="cols-sm-2 control-label">{{ form.campo_usuario }}</label>
        <div class="cols-sm-12">
          <div class="input-group">
            <span class="pt-2 px-3 input-group-addon bg-info text-white">
              <i class="fa fa-users" aria-hidden="true"></i>
            </span>
            <input v-model="form.fUsuario"
                   type="text"
                   class="form-control"
                   name="usuario"
                   id="campo_usuario"
                   :placeholder="form.campo_usuario"
                   v-on:keyup.enter="changeFocus($event)"
                   ref="campo_usuario"/>
          </div>
        </div>
      </div>
      <div class="form-group mt-3">
        <label for="campo_pass" class="cols-sm-2 control-label">{{ form.campo_pass }}</label>
        <div class="cols-sm-12">
          <div class="input-group">
            <span class="pt-2 px-3 input-group-addon bg-info text-white">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
            <input v-model="form.fPass"
                   type="password"
                   class="form-control"
                   name="contraseña"
                   id="campo_pass"
                   :placeholder="form.campo_pass"
                   v-on:keyup.enter="changeFocus($event)"
                   ref="campo_pass"/>
          </div>
        </div>
      </div>
      <div class="form-group mt-3">
        <label for="campo_pass_Confirm" class="cols-sm-2 control-label">{{ form.campo_pass_Confirm }}</label>
        <div class="cols-sm-12">
          <div class="input-group">
            <span class="pt-2 px-3 input-group-addon bg-info text-white">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
            <input v-model="form.fPass_Confirm"
                   type="password"
                   class="form-control"
                   name="confirmarcontraseña"
                   id="campo_pass_Confirm"
                   :placeholder="form.campo_pass_Confirm"
                   ref="campo_pass_Confirm"/>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-4">
        <button class="btn btn-primary btn-lg" v-on:click="print">Registrarse</button>
      </div>
    </div>
  </div>
</template>


