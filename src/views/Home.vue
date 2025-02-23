<template>
 <header>
    <Banner />
  </header>

  <main class="main--container">
    <InfoProduct />
  </main>

  <footer>
    <Footer />
  </footer>
</template>

<script lang="ts" setup>
import Banner from './form/Banner.vue';
import InfoProduct from './form/InfoProduct.vue';
import Footer from './form/Footer.vue';
</script>