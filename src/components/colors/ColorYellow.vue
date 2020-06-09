<template>
  <div class="color-yellow" :class="{ animated: animation }"></div>
</template>

<script>
export default {
  name: "ColorYellow",
  props: {
    animation: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.color-yellow {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(250, 250, 127, 0.75);
}

.color-yellow.animated {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.01;
  }
  100% {
    opacity: 1;
  }
}
</style>
