<script setup lang="ts">
import {useRoute} from "vue-router";
import {computed} from "vue";
import {useStore} from "vuex";
import Slider from "./Slider.vue";


const store = useStore();
const router = useRoute();



const pending = computed(() => store.getters.PENDING);
const page = computed(() => store.getters.ANIMATES_PAGE(router.params.id));

</script>

<template v-if="pending">
  <v-container>
    <router-link to="/" class="mb-5 bg-purple pl-10 pr-10 pt-3 pb-3 text-decoration-none v-btn">Home</router-link>
    <div class="card-page mb-10">
      <h2 class="mb-5">{{ page[0]?.title }}</h2>
      <div class="card-page_img mb-4 w-50">
        <img :src="page[0]?.images.original.url" class="w-100 v-img__img--contain" alt="ads">
      </div>
      <router-link :to="{name: 'profilePage', params: {id: page[0]?.id}}" class="text-decoration-none bg-purple pl-10 pr-10 pt-3 pb-3 text-decoration-none v-btn" v-if="page[0]?.username.length">
        User: {{page[0]?.username }}
      </router-link>
    </div>
    <Slider/>
  </v-container>
</template>

<style lang="scss">
.card-page {
  cursor: pointer;

  &_img {
    max-height: 700px;
    overflow: hidden;
  }

  &_link {
    color: black;
  }
}
</style>