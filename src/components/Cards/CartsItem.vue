<script setup lang="ts">
 import {ref} from "vue";

 const props = defineProps({
   id: String,
   img: String,
   title: String,
   url: String,
   isCopy: Boolean
 })

 const copy = ref(props.isCopy);
  // let copy = ref(false)
 const copyUrl = (url: string) => {
   copy.value = true;

   setTimeout(() => {
     copy.value = false;
   }, 2000)
   navigator.clipboard.writeText(url);
 }

 defineExpose({
   props
 })
</script>

<template>
  <v-col class="v-col-md-4 v-col-sm-6 v-col-12" >
    <div class="card d-flex position-relative flex-column">
      <router-link class="w-100 h-100" :to="{name: 'cardPage', params: {id: props.id}}">
        <img class="card_img v-img__img--cover" :src="props.img" :alt="props.title">
      </router-link>
      <div class="card-content position-absolute pa-4">
        <h4 class="mb-2">{{ props.title }}</h4>
        <button @click="copyUrl(props?.url ?? '')" class="bg-purple pl-3 pr-3 pt-2 pb-2 text-decoration-none v-btn">
          <span v-if="!copy">Copy link</span>
          <span v-else>Link Copied!</span>
        </button>
      </div>
    </div>
  </v-col>
</template>