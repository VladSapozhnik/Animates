<script setup lang="ts">
import {useStore} from "vuex";
import {computed, ref} from "vue";
import CartsItem from "./CartsItem.vue";
import NotFoundCard from "./NotFoundCard.vue";


const store = useStore();

const cards = computed(() => store.getters.HANDLER_SEARCH);
let isCopy = ref(false)

defineExpose({
  isCopy
})
</script>

<template>
  <v-container class="d-flex flex-wrap">
    <v-row>
      <transition v-for="card of cards" name="card">
        <CartsItem :id="card?.id" :img="card?.images.downsized.url" :title="card.title" :url="card?.images?.original?.url" :copy="isCopy"/>
      </transition>
      <NotFoundCard v-if="!cards.length"/>
    </v-row>
  </v-container>

</template>

<style lang="scss">
.card {
  cursor: pointer;
  height: 350px;
  overflow: hidden;

  &-content {
    width: 100%;
    background-color: rgba(0, 0, 0, .6);
    left: 0;
    color: white;
    bottom: 0;
    cursor: default;
  }

  //flex: 0 1 calc(33.33% - 15px);
  //margin-right: 15px;
  &_img {
    width: 100%;
    height: 100%;
    transition: transform 150ms linear 0s;
    transform: scale(1.1);
  }
}

.card-enter-active {
  transition: all .1s ease;
}

.card-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.card-enter, .card-leave-to {
  opacity: 0;
}
</style>