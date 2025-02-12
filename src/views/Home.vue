<template>
 <header>
    <Banner />
  </header>

  <main class="main--container">
   <Overview />
  </main>
</template>

<script lang="ts" setup>
import Banner from './components/Banner.vue';
import Overview from './components/Overview.vue';


</script>

<style lang="scss" scoped>
.banner-groups-left img {
  max-width: 45%;
  right: 50px;
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
