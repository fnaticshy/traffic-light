<template>
  <div class="color-green" :class="{ animated: animation }"></div>
</template>

<script>
export default {
  name: "ColorGreen",
  props: {
    animation: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.color-green {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(134, 122, 67, 0.75);
}

.color-green.animated {
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
