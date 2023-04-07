<script setup lang="ts">
import {computed} from "vue";
import {useStore} from "vuex";

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const store = useStore();

const carts = computed(() => store.getters.SLIDER_ANIMATES);


const modules = [Pagination, Navigation]

defineExpose({
  carts,
  modules
})
</script>


<template>
  <h3 class="mb-5">Slides</h3>
  <swiper
      class="pb-12"
      :modules="modules"
      :slidesPerView="4"
      :slidesPerGroup="4"
      :space-between="10"
      :navigation="true"
      :pagination="{
          clickable: true,
        }"
      :breakpoints="{
          390: {
            spaceBetween: 5,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          600: {
            spaceBetween: 16,
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          960: {
            spaceBetween: 16,
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          1280: {
            spaceBetween: 16,
            slidesPerView: 4,
            slidesPerGroup: 4
          }
      }"
  >
    <swiper-slide v-for="card in carts" :key="card.id">
      <div class="card d-flex position-relative flex-column">
        <router-link class="w-100 h-100" :to="{name: 'cardPage', params: {id: card?.id}}">
          <img class="card_img v-img__img--cover" :src="card?.images?.downsized.url" :alt="card?.title">
        </router-link>
        <div class="card-content position-absolute pa-4">
          <h5>{{card?.title}}</h5>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">
  .swiper-button-next,
  .swiper-button-prev {
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
    border: 1px solid purple;
    background-color: white !important;
    &:after {
      color: purple !important;
      font-size: 16px;
    }
  }
</style>