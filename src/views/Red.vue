<template>
  <div>
    <Timer @onAddAnimation="animation = true" />
    <ColorGreen :animation="animation"/>
    <ColorRed :animation="animation"/>
  </div>
</template>

<script>
import ColorGreen from "../components/colors/ColorYellow";
import ColorRed from "../components/colors/ColorRed";
import Timer from "../components/Timer";

export default {
  name: "Red",
  components: {
    ColorGreen,
    ColorRed,
    Timer
  },
  data() {
    return {
      animation: false
    };
  },
  computed: {
    redTimeout() {
      return this.$store.getters.redTimeout;
    },
  },
  created() {
    this.$store.dispatch('saveState', "red")
    setTimeout(() => {
      this.$store.dispatch('changeActiveColor', 'red')
    }, this.redTimeout)
  }
};
</script>