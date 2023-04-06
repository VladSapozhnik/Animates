<script setup lang="ts">
import Header from "./components/Header.vue";
import {useStore} from "vuex";

const store = useStore();

store.dispatch('GET_ANIMATES');
store.dispatch('GET_RANDOM_ANIMATES');
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style scoped>
 * {
   box-sizing: border-box;
 }
</style>
