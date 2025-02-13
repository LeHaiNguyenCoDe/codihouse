<template>
 <header>
    <Banner />
  </header>

  <main class="main--container">
   <Overview />
   <Info />
   <Slider />
  </main>
</template>

<script lang="ts" setup>
import Banner from './components/Banner.vue';
import Info from './components/info.vue';
import Overview from './components/Overview.vue';
import Slider from './components/slide.vue';
</script>