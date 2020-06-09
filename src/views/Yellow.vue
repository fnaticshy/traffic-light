<template>
  <div>
    <Timer @onAddAnimation="animation = true" />
    <ColorRed :animation="animation"/>
    <ColorYellow :animation="animation"/>
  </div>
</template>

<script>
import ColorYellow from "../components/colors/ColorYellow";
import ColorRed from "../components/colors/ColorRed";
import Timer from "../components/Timer";
export default {
  name: "Yellow",
  components: {
    ColorRed,
    ColorYellow,
    Timer
  },
  data() {
    return {
      animation: false
    };
  },
  computed: {
    yellowTimeout() {
      return this.$store.getters.yellowTimeout;
    }
  },
  created() {
    this.$store.dispatch('saveState', "yellow")
    setTimeout(() => {
      this.$store.dispatch('changeActiveColor', 'yellow')
    }, this.yellowTimeout)
  }
};
</script>
