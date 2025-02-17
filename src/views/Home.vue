<template>
    <header>
      <Banner />
    </header>

    <main class="main--container bg-white container">
      <Overview />
      <Info class="mt-2/3" />
      <Slider />
      <SolutionExperience />
      <SincereConnection />
      <AboutSection />
      <WaterSustainability />
      <InferencePriority />
      <InteractiveShowcase />
      <NatureExploration />
    </main>
</template>

<script setup>
import Banner from './form/Banner.vue';
import Info from './form/Info.vue';
import Overview from './form/Overview.vue';
import Slider from './form/Sliderview.vue';
import SolutionExperience from "@/views/form/SolutionExperience.vue";
import SincereConnection from "@/views/form/SincereConnection.vue";
import AboutSection from "@/views/form/AboutSection.vue";
import WaterSustainability from './form/WaterSustainability.vue';
import { InferencePriority } from 'typescript';
import NatureExploration from './form/NatureExploration.vue';
import InteractiveShowcase from './form/InteractiveShowcase.vue'
</script>

<style scoped>
.main--container{
  max-width: max-content;
}
</style>
