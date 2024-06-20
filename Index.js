var app = new Vue({
    el:'#app',
    data:{
      mensaje:'Registro de sistema'
    },
    //ciclo de vida los componentes
  beforeCreate:function(){
    console.log("la instancia esta por ser creada");
  },
  created:function(){
    console.log("la instancia fue creada");
  },
  beforeMounted:function(){
    console.log("la instancia esta por ser montada");
  },
  mounted:function(){
    console.log("la instancia fue montada");
  },
  beforeUpdate:function(){
    console.log("la instancia antes de actualizarse");
  },
    updated:function(){
       console.log("la instancia se actualizo");
    }
  })
  
  var saludo = new Vue({
    el:'#saludo',
    data:{
      mensaje:'Lista de Usuarios'
    }
  })
  var info = new Vue({
    el:'#info',
    data:{
      mensaje:'esta es una informacion'
    }
  })
  
  var form = new Vue({
    el:"#form",
    data:{
      campo_nombre: "Nombre Completo",
      campo_email: "Correo electronico",
      campo_usuario: "Nombre de usuario",
      campo_pass: "Contraseña",
      campo_pass_Confirm: "Confirme la contraseña",
      fNombre: "",
      fEmail: "",
      fUsuario: "",
      fPass: "",
      fPass_Confirm: "",
    },
    methods: {
      print: function() {
          let eName = document.getElementById('name').value;
          let eEmail = document.getElementById('email').value;
          let eUsuario = document.getElementById('usuario').value;
          let eContraseña = document.getElementById('contraseña').value;
          let eConfirContraseña = document.getElementById('confirmarcontraseña').value;
          console.log(` Nombre : ${eName} Email : ${eEmail} Usuario : ${eUsuario} Contraseña : ${eContraseña} Confirmar contraseña : ${eConfirContraseña}` ); 
      }
    }
  })
  var Example = new Vue({
    el:"#Example",
    data:{
      usuarios: [
        {
            id: 1,
            nombre: "Juan Pérez",
            correo: "juan.perez@example.com",
            edad: 28
        },
        {
            id: 2,
            nombre: "María García",
            correo: "maria.garcia@example.com",
            edad: 34
        },
        {
            id: 3,
            nombre: "Carlos López",
            correo: "carlos.lopez@example.com",
            edad: 25
        },
        {
            id: 4,
            nombre: "Ana Martínez",
            correo: "ana.martinez@example.com",
            edad: 30
        },
        {
            id: 5,
            nombre: "Luis Fernández",
            correo: "luis.fernandez@example.com",
            edad: 27
        }
    ]
    }
  })

  var contador = new Vue({
    el:"#contador",
    data:{
      cantidad:0
    }
  })
  