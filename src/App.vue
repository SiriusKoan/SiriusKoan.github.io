<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Copyright from "./components/Copyright.vue"
</script>

<template>
  <NavBar />
  <RouterView />
  <Copyright />
</template>

<style scoped>
@import "assets/base.css";

#app {
    margin: 0;
}
</style>
