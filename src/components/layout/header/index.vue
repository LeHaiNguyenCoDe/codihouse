<template>
    <section ref="bannerRef" class="relative w-full h-fit">
      <!-- Banner Image -->
      <div class="w-full h-full">
        <img class="w-full lg:h-full object-cover -z-10" :src="bg_banner" alt="Banner">
        <!-- Banner /Rectangle --> 
        <img class="absolute top-0 right-5vw z-10 xl:w-auto md:w-45vw w-45vw" :src="vector" alt="Vector">
      </div>
      <!-- Banner Vector -->
      <img class="absolute left-0 bottom-0vw z-10 w-full" :src="white_space" alt="Rectangle">
    </section>
  </template>
<script lang="ts" setup>
import bg_banner from "@/assets/images/header/Shutterstock_01.svg";
import vector from "@/assets/images/header/Vector.svg";
import white_space from "@/assets/images/header/Rectangle.svg";
</script>