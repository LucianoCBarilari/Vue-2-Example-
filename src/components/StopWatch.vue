<template>


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
</template>

<script>
    var crono = new Vue({
    el:"#crono",
    data:{
      pdTiempo:0,
      interval:"",
      pdHoras:0,
      pdMinutos:0,
      pdSegundos:0
    },
    methods:{
      manejoClick:function(event){
        if(event.target.id==="iniciar"){

       
          this.interval = setInterval(()=>{
        this.pdTiempo++;
        if(this.pdTiempo>9){
          this.pdTiempo = 0
          this.pdSegundos++;
        }
        if(this.pdSegundos>59){
          this.pdSegundos=0;
          this.pdMinutos++;
        }
        if(this.pdMinutos>59){
          this.pdMinutos=0;
          this.pdHoras++;
        }
        },100);
      }
        else if(event.target.id==="detener"){
          clearInterval(this.interval);
        }
      }
    }
  })
</script>