<template>
  <div>
    <h4>Transitions</h4>
    <ul class="list-group">
      <li class="list-group">
        <form disabled class="transitions">
          <div class="form-group">
            <div class="btn-group" role="group">
              <button class="btn btn-secondary" @click="transition = 'fade'">fade</button>
              <button class="btn btn-secondary" @click="transition = 'slide-fade'">slide-fade</button>
              <button class="btn btn-secondary" @click="transition = 'bounce'">bounce</button>
            </div>
          </div>
          <div class="form-group">
            <div class="btn-group" role="group">
              <button class="btn btn-primary" @click="transitionEnabled = !transitionEnabled">Toggle {{ transition }}</button>
            </div>
          </div>
          <div class="form-group">
            <transition :name="transition">
              <p v-if="transitionEnabled">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
            </transition>
          </div>
        </form>
      </li>
    </ul>
  </div>
</template>

<script>
// https://vuejs.org/v2/guide/transitions.html

export default {
  name: 'TransitionTesting',
  data() {
    return {
      transition: 'fade',
      transitionEnabled: false
    }
  }
}
</script>

<style>
.transitions {
  width: 33%;
  margin: 0 auto;
}

/*--- transition fade ---*/
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave-active {
  transition: opacity 1.0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.1;
}

/*--- transition slide-fade ---*/
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

/*--- transition bounce ---*/
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
