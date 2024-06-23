<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'stopWatch',
  data() {
    return {
      pdTime: 0,
      interval: null,
      pdHours: 0,
      pdMinutes: 0,
      pdSeconds: 0,
      disable: false
    };
  },
  methods: {
    clickHandler(event) {      
      if (event.target.id === "start") {        
        this.startTimer();
      } else if (event.target.id === "stop") {        
        this.stopTimer();
      }
    },
    startTimer() {
      this.interval = setInterval(() => {
        this.pdTime++;
        if (this.pdTime > 9) {
          this.pdTime = 0;
          this.pdSeconds++;
        }
        if (this.pdSeconds > 59) {
          this.pdSeconds = 0;
          this.pdMinutes++;
        }
        if (this.pdMinutes > 59) {
          this.pdMinutes = 0;
          this.pdHours++;
        }
      }, 100);
    },
    stopTimer() {
      clearInterval(this.interval);
    },
  },
});
</script>

<template>
  <div class="container border rounded mt-2 p-3 bg-dark text-light">
    <div class="col-12 border rounded text-primary text-center mb-2">
      <h2>StopWatch</h2>
    </div>
    <div class="row align-items-center">
      <div class="col-3 text-center">
        <span id="start" class="fa fa-play-circle fa-3x" 
        v-on:click="clickHandler($event)"></span>
      </div>
      <div class="col-6 text-center text-light">
        <h3>{{ pdHours }}:{{ pdMinutes }}:{{ pdSeconds }}.{{ pdTime * 10 }}</h3>
      </div>
      <div class="col-3 text-center">
        <span id="stop" class="fa fa-pause-circle fa-3x" v-on:click="clickHandler($event)"></span>
      </div>
    </div>
  </div>
</template>


