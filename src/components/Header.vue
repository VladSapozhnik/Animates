<script setup lang="ts">
import {ref} from "vue";
import {useStore} from "vuex";

const store = useStore();
const search = ref('');
store.commit('UPDATE_SEARCH', search);
</script>

<template>
  <div class="header bg-purple position-sticky mb-12">
    <v-container class="d-flex align-center">
      <router-link to="/" class="header_logo font-weight-bold mr-10 text-uppercase text-decoration-none">
        Animate
      </router-link>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          placeholder="Search"
          label="Search"
          single-line
          hide-details
      >
      </v-text-field>
    </v-container>
  </div>
</template>

<style lang="scss">
  .header {
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    &_logo {
      color: #fff;
      font-size: 24px;
    }
  }
</style>