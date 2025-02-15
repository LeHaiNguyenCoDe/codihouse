<template>
  <div class="text-responsive">
    <header>
      <Banner />
    </header>

    <main class="main--container bg-white">
      <Overview />
      <Info class="mt-2/3" />
      <Slider />
      <SolutionExperience />
    </main>
  </div>
</template>

<script setup>
import Banner from './components/Banner.vue';
import Info from './components/Info.vue';
import Overview from './components/Overview.vue';
import Slider from './components/Sliderview.vue';
import SolutionExperience from "@/views/components/SolutionExperience.vue";
</script>

<style scoped>
.text-responsive {
  font-size: 18px;
  line-height: 28px;
}
</style>
