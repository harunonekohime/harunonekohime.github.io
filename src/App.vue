<template>
  <v-menu></v-menu>
  <RouterView />
</template>
<script setup lang="ts">
import vMenu from './components/v-menu.vue'
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: cascadia;
  font-size: 14px;
  background: #ffeded;

  &.blur {
    overflow: hidden;
    main {
      filter: blur(5px);
    }
  }
}

#app {
  * {
    box-sizing: border-box;
  }
}

@font-face {
  font-family: 'cascadia';
  src: url(./assets/fonts/Cascadia.ttf);
}
</style>
