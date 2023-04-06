<script setup lang="ts">
import {useRoute} from "vue-router";
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore();

const router = useRoute();

const pending = computed(() => store.getters.PENDING);
const page = computed(() => store.getters.ANIMATES_PAGE(router.params.id));
</script>

<template v-if="pending">
  <v-container>
    <router-link class="text-decoration-none mb-5 bg-purple pl-10 pr-10 pt-3 pb-3 text-decoration-none v-btn" :to="{name: 'cardPage', params: {id: page[0]?.id}}">
      back to page
    </router-link>
    <div class="profile-page">
      <h2 class="mb-5 text-uppercase">User: {{ page[0]?.user.username }}</h2>
      <div class="profile-page_img mb-5">
        <img :src="page[0]?.user.avatar_url" :alt="page[0]?.user.username">
      </div>
      <a :href="page[0]?.user.profile_url" target="_blank" class="text-decoration-none bg-purple pl-10 pr-10 pt-3 pb-3 text-decoration-none v-btn" v-if="page[0]?.user.profile_url.length">Profile Gifhy</a>
    </div>
  </v-container>
</template>

<style lang="scss">
.profile-page {
  &_img {
    width: 300px;
    height: 300px;
    & img {
      width: 100%;
      height: 100%;
    }
  }

  &_link {
    color: black;
  }
}
</style>