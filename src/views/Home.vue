<template>
 <header>
    <Banner />
  </header>

  <main class="main--container bg-white">
   <Overview />
   <Info class="mt-2/3" />
   <Slider />
  </main>
</template>

<script lang="ts" setup>
import Banner from './components/Banner.vue';
import Info from './components/Info.vue';
import Overview from './components/Overview.vue';
import Slider from './components/slide.vue';
</script>