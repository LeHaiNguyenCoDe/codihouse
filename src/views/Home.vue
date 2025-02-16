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
      <!-- <SincereConnection /> -->
    </main>
  </div>
</template>

<script setup>
import Banner from './form/Banner.vue';
import Info from './form/Info.vue';
import Overview from './form/Overview.vue';
import Slider from './form/Sliderview.vue';
import SolutionExperience from "@/views/form/SolutionExperience.vue";
import SincereConnection from "@/views/form/SincereConnection.vue";
</script>

<style scoped>
.text-responsive {
  font-size: 18px;
  line-height: 28px;
}
</style>
