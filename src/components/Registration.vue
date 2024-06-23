<script>
import Vue from 'vue';

export default Vue.extend({
  name: "registration",
  data() {
    return {
      form: {
        field_name: "Full Name",
        field_email: "Email Address",
        field_username: "Username",
        field_password: "Password",
        field_password_confirm: "Confirm Password",
        name: "",
        email: "",
        username: "",
        password: "",
        password_confirm: ""
      }
    };
  },
  methods: {
    submitForm() {
      let name = this.form.name;
      let email = this.form.email;
      let username = this.form.username;
      let password = this.form.password;
      let passwordConfirm = this.form.password_confirm;
      console.log(`Name: ${name}, Email: ${email}, Username: ${username}, Password: ${password}, Confirm Password: ${passwordConfirm}`);
    },
    changeFocus(event) {
      switch (event.target.id) {
        case "field_name":
          this.$refs.field_email.focus();
          break;
        case "field_email":
          this.$refs.field_username.focus();
          break;
        case "field_username":
          this.$refs.field_password.focus();
          break;
        case "field_password":
          this.$refs.field_password_confirm.focus();
          break;
      }
    },
    validateEmail(email) {
      const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regexEmail.test(email);
    },
    handleChange() {
      // Implement your logic here
    }
  }
});
</script>


<template>
  <div id="form" class="container border rounded mt-2 p-3 bg-dark text-light">
    <div class="col-12 border rounded p-4 bg-dark">     
      <div class="form-group">
        <label for="field_name" class="cols-sm-2 control-label">{{ form.field_name }}</label>
        <div class="cols-sm-12">
          <div class="input-group">
            <span class="pt-2 px-3 input-group-addon bg-info text-white">
              <i class="fa fa-user fa-lg" aria-hidden="true"></i>
            </span>
            <input v-model="form.name"
                   type="text"
                   class="form-control bg-dark text-light"
                   name="name"
                   id="field_name"
                   :placeholder="form.field_name"
                   v-on:keyup.enter="changeFocus($event)"
                   ref="field_name"/>
          </div>
        </div>
      </div>
      <div class="form-group mt-3">
        <label for="field_email" class="cols-sm-2 control-label">{{ form.field_email }}</label>
        <div class="cols-sm-12">
          <div class="input-group">
            <span class="pt-2 px-3 input-group-addon bg-info text-white">
              <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
            </span>
            <input v-model="form.email"
                   type="email"
                   class="form-control bg-dark text-light"
                   name="email"
                   id="field_email"
                   :placeholder="form.field_email"
                   v-on:keyup.enter="changeFocus($event)"
                   ref="field_email"/>
          </div>
        </div>
      </div>
      <div class="form-group mt-3">
        <label for="field_username" class="cols-sm-2 control-label">{{ form.field_username }}</label>
        <div class="cols-sm-12">
          <div class="input-group">
            <span class="pt-2 px-3 input-group-addon bg-info text-white">
              <i class="fa fa-users fa-lg" aria-hidden="true"></i>
            </span>
            <input v-model="form.username"
                   type="text"
                   class="form-control bg-dark text-light"
                   name="username"
                   id="field_username"
                   :placeholder="form.field_username"
                   v-on:keyup.enter="changeFocus($event)"
                   ref="field_username"/>
          </div>
        </div>
      </div>
      <div class="form-group mt-3">
        <label for="field_password" class="cols-sm-2 control-label">{{ form.field_password }}</label>
        <div class="cols-sm-12">
          <div class="input-group">
            <span class="pt-2 px-3 input-group-addon bg-info text-white">
              <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
            </span>
            <input v-model="form.password"
                   type="password"
                   class="form-control bg-dark text-light"
                   name="password"
                   id="field_password"
                   :placeholder="form.field_password"
                   v-on:keyup.enter="changeFocus($event)"
                   ref="field_password"/>
          </div>
        </div>
      </div>
      <div class="form-group mt-3">
        <label for="field_password_confirm" class="cols-sm-2 control-label">{{ form.field_password_confirm }}</label>
        <div class="cols-sm-12">
          <div class="input-group">
            <span class="pt-2 px-3 input-group-addon bg-info text-white">
              <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
            </span>
            <input v-model="form.password_confirm"
                   type="password"
                   class="form-control bg-dark text-light"
                   name="password_confirm"
                   id="field_password_confirm"
                   :placeholder="form.field_password_confirm"
                   ref="field_password_confirm"/>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-4">
        <button class="btn btn-primary btn-lg" v-on:click="submitForm">Register</button>
      </div>
    </div>
  </div>
</template>

