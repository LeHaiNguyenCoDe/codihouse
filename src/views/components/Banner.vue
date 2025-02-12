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
.banner-groups-left img {
  max-inline-size: 45%;
  inset-inline-end: 50px;
}

.banner-groups-text {
  position: absolute;
  inset-block-end: 10%;
  inset-inline-start: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 8px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: clamp(12px, 1.2vw, 14px); 
  line-height: 20px;
  letter-spacing: 4px;
  color: #ffffff;
  inline-size: fit-content;
  max-inline-size: 80%;
}

@media (max-width: 768px) {
  .banner-groups-text {
    inset-block-end: 5%; 
    font-size: 4px; 
  }
}
</style>
