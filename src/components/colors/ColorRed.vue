<template>
  <div class="color-red" :class="{ animated: animation }"></div>
</template>

<script>
export default {
  name: "ColorRed",
  props: {
    animation: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.color-red {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 128, 128, 0.75);
}

.color-red.animated {
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
