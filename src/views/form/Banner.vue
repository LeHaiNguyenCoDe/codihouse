<template>
  <section class="banner--container relative">
    <div class="banner-img">
      <img class="main-banner w-full h-full object-cover" :src="shutterstock" alt="Banner">
    </div>

    <div class="banner-groups-left">
      <img class="absolute left-4/9 -bottom-10 max-w-full md:w-1/2 vector-responsive object-contain" :src="vector" alt="Vector">
    </div>

    <div class="banner-groups-bottom">
      <img class="absolute bottom-0 left-0 w-full z-10" :src="rectangle" alt="Rectangle">
    </div>
    
    <div class="banner-groups-text absolute bottom-1/5 left-4/9 suntory-pepsico text-white">
      WEBSITE SUNTORY PEPSICO
    </div>
  </section>
</template>

<script lang="ts" setup>
import shutterstock from '@/assets/images/header/Shutterstock_01.svg';
import vector from '@/assets/images/header/Vector.svg';
import rectangle from '@/assets/images/header/Rectangle.svg';
</script>

<style>
.vector-responsive{
  @media (max-width: 540px) {
    width: 50%;
    position: absolute;
    top: -5%;
  }
}

.suntory-pepsico{
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 15%;
  text-align: center;
}
</style>
