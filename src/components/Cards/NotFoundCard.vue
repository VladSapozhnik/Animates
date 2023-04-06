<script setup lang="ts">
import {computed} from "vue";
import {useStore} from "vuex";

  const store = useStore();
  const randomAnimates = computed(() => store.getters.ANIMATES_RANDOM);

</script>

<template>
  <div class="w-33">
    <div class="card d-flex position-relative flex-column">
      <div class="w-100 h-100">
        <img class="card_img v-img__img--cover" :src="randomAnimates[0]?.images.downsized.url" :alt="randomAnimates[0]?.title">
      </div>
      <div class="card-content position-absolute pa-4">
        <h4>Not Found</h4>
      </div>
    </div>
  </div>
</template>