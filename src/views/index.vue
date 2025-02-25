<template>
  <Header />
  <main class="container flex mx-auto">
    <Home />
  </main>
  <Footer />
</template>
<script setup lang="ts">
import 'uno.css'
import Footer from '../../src/components/layout/footer/index.vue'
import Header from '../../src/components/layout/header/index.vue'
import Home from './form/home.vue'
</script>