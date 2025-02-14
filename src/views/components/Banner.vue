<template>
  <section class="banner--container relative">
    <div class="banner-img">
      <img class="main-banner w-full h-full object-cover" :src="shutterstock" alt="Banner">
    </div>

    <div class="banner-groups-left">
      <img class="absolute bottom-0 max-w-full object-contain" :src="vector" alt="Vector">
    </div>

    <div class="banner-groups-bottom">
      <img class="absolute bottom-0 left-0 w-full z-10" :src="rectangle" alt="Rectangle">
    </div>
    
    <div class="banner-groups-text">
      WEBSITE SUNTORY PEPSICO
    </div>
  </section>
</template>

<script lang="ts" setup>
import shutterstock from '@/assets/images/header/Shutterstock_01.svg';
import vector from '@/assets/images/header/Vector.svg';
import rectangle from '@/assets/images/header/Rectangle.svg';
</script>

<style lang="scss" scoped>

</style>
