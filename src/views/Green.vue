<template>
  <div class="wrapper">
    <Timer @onAddAnimation="animation = true" />
    <ColorGreen :animation="animation" />
    <ColorYellow :animation="animation" />
  </div>
</template>

<script>
import ColorGreen from "../components/colors/ColorGreen";
import ColorYellow from "../components/colors/ColorYellow";
import Timer from "../components/Timer";

export default {
  name: "Green",
  components: {
    ColorGreen,
    ColorYellow,
    Timer
  },
  data() {
    return {
      animation: false
    };
  },
  computed: {
    greenTimeout() {
      return this.$store.getters.greenTimeout;
    }
  },
  created() {
    this.$store.dispatch('saveState', "green")
    setTimeout(() => {
      this.$store.dispatch("changeActiveColor", "green");
    }, this.greenTimeout);
  }
};
</script>

<style>
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
