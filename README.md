# Componentes con Vue.js 2, Bootstrap y fontawesome

Este proyecto es una aplicación web simple que muestra una lista de usuarios y un formulario de registro utilizando Vue.js y Bootstrap. 
La lista de usuarios se renderiza dinámicamente y está estilizada con Bootstrap para un diseño limpio y responsivo.

## Descripción

La aplicación permite:
- Visualizar una lista de usuarios con sus nombres, correos electrónicos y edades.
- Ingresar nuevos usuarios mediante un formulario de registro.
- Contador
- Cronometro

## Tecnologías Utilizadas

- [Vue.js](https://vuejs.org/): Framework progresivo de JavaScript para construir interfaces de usuario.
- [Bootstrap](https://getbootstrap.com/): Biblioteca de componentes de interfaz de usuario responsivos y estilos.
- -[fontawesome]

## Estructura del Proyecto 1.0.0

├── index.html

├── Style.css

├── Index.js

└── README.md


 ``` html
<!DOCTYPE html>
<html>
    <head>
         <!--Dependencias-->    
    </head>
    <body>
    <div class="container">
      <div class="row">       
        <div class="col-md-6">
                  <!--formulario-->   
        <div class="col-md-6">
          <div id="saludo" class="text-primary">
            <h1> {{ mensaje }}</h1>
          </div>
               <!--Lista de usuarios-->  
            <div class="row">
                <div class="col-12">                    
                    <ul class="list-group" id="Example" >
                      <li class="list-group-item" v-for="usuario in usuarios" :key="usuario.id">
                        <strong>{{ usuario.nombre }}</strong><br>
                        Correo: {{ usuario.correo }}<br>
                        Edad: {{ usuario.edad }}
                    </li>
                    </ul>
                </div>
            </div>
        </div>  
        </div>
         <!--Contador-->  
        <div class="row">
          <div class="col-md-6" style="font-size: 50px;">
                 <div id="contador" class="container border rounded mt-2">
                      <div class="col-12 border rounded text-primary text-center">
                        <h2>Contador</h2>
                      </div>
                      <div class="row">
                      <div class="col-3">
                        <span id="minus" class="fa fa-minus-square" v-on:click="cantidad--"></span>
                      </div>
                      <div class="col-6 text-center text-primary">
                        {{cantidad}}                      
                      </div>
                      <div class="col-3">
                        <span id="plus" class="fa fa-plus-square" v-on:click="cantidad++"></span>
                      </div>  
                    </div>
                 </div>  
          </div>
          <div class="col-md-6" style="font-size: 50px;">
            <div id="crono" class="container border rounded mt-2">
              <div class="col-12 border rounded text-primary text-center">
                <h2>Cronometro</h2>
              </div>
              <div class="row">
              <div class="col-3">
                <span id="iniciar" class="fa fa-play-circle" v-on:click="manejoClick($event)"></span>
              </div>
              <div class="col-6 text-center text-primary">
                {{pdHoras}}: {{pdMinutos}}:{{pdSegundos}}.{{pdTiempo*10}}
              </div>
              <div class="col-3">
                <span id="detener" class="fa fa-stop-circle" v-on:click="manejoClick($event)"></span>
              </div>  
            </div>
         </div>  
          </div>
      </div>
    </div>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <script src="/Index.js"></script>
    </body>
</html>
```
