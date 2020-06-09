<template>
  <div class="timer">Will change after {{ savedTime }} seconds</div>
</template>

<script>
export default {
  name: "Timer",
  computed: {
    getActiveColor() {
      return this.$store.getters.getActiveColor;
    },
    timeouts() {
      return this.$store.getters.timeouts;
    },
    currentTime() {
      return Number(this.timeouts[this.getActiveColor] / 1000);
    }
  },
  data() {
    return {
      timer: null,
      savedTime: null
    };
  },
  mounted() {
    this.savedTime = this.currentTime;
    this.startTimer();
  },
  destroyed() {
    this.stopTimer();
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.savedTime--;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    }
  },
  watch: {
    savedTime(time) {
      if (time < 3) {
        this.$emit("onAddAnimation");
      }
      if (time === 0) {
        this.stopTimer();
      }
    }
  }
};
</script>

<style scoped>
.timer {
  position: absolute;
  top: 100px;
  left: 100px;
  color: black;
  font-size: 48px;
  font-weight: bold;
  z-index: 2;
  font-family: arial, sans-serif;
  text-shadow: #2b2a2a82 3px 4px 9px;
}
</style>
