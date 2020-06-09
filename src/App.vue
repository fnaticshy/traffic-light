<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    getActiveColor() {
      return this.$store.getters.getActiveColor;
    }
  },
  created() {
    this.unsubscribe = this.$store.subscribe(mutation => {
      if (
        mutation.type === "changeActiveColor" ||
        mutation.type === "setActive" ||
        mutation.type === "loadState"
      ) {
        this.$router.push(`/${this.getActiveColor}`);
      }
    });

    if (localStorage.getItem("state") === null) {
      this.$store.dispatch("setActive", window.location.pathname);
    } else {
      this.$store.dispatch("loadState");
    }
  },
  beforeDestroy() {
    this.unsubscribe();
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  position: relative;
  height: 100vh;
  width: 100vw;
}
</style>
