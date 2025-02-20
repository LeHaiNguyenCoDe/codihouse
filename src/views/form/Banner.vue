<template>
  <section ref="bannerRef" class="relative w-full h-fit opacity-0">
    <!-- Banner Image -->
    <div class="w-full h-full">
      <img class="w-full lg:h-full object-cover" src="~@/assets/images/header/header_banner.png" alt="Banner">
      <!-- Banner /Rectangle -->
      <img class="absolute bottom-0 left-0 w-full z-10" src="~@/assets/images/header/Rectangle.png" alt="Rectangle">
    </div>
    <!-- Banner Vector -->
    <img class="absolute top-10 right-5 md:top-1/2 md:right-10 md:w-[500px] md:-translate-y-1/2 md:h-[60rem] lg:w-[50rem] 
             h-[10rem] sm:w-[80px] sm:top-2 sm:right-2 sm:transform-none           
             object-contain z-10 opacity-40 brightness-540" src="~@/assets/images/header/vector.png" alt="Vector">
  </section>
</template>

<script setup lang="ts">
import { useBannerAnimation } from "@/composables/useBannerAnimation";

const { bannerRef } = useBannerAnimation();
</script>
