<template>
 <div class="text-reponsive">
  <header>
    <Banner />
  </header>

  <main class="main--container bg-white">
   <Overview />
   <Info class="mt-2/3" />
   <Slider />
  </main>
 </div>
</template>

<script lang="ts" setup>
import Banner from './components/Banner.vue';
import Info from './components/Info.vue';
import Overview from './components/Overview.vue';
import Slider from './components/Sliderview.vue';
</script>

<style>
.text-reponsive{
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 28px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
}</style>
