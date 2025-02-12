<template>
    <div class="bg-header absolute top-0 left-0 w-full h-full"></div>
    <img :src="vector" class="absolute top-0 right-5 xl:right-1/18 w-3/7 md:w-7/12 sm:w-1/3 lg:w-fit z-10 md:max-w-none" alt="Vector Image" />
    <img :src="rectangle" class="absolute bottom-0 w-full z-10" alt="Rectangle Image" />
    <p class="absolute bottom-5 md:bottom-14 xl:bottom-1/9 z-10 text-sm md:text-lg font-sans text-center">Website Suntory Pepsico</p>
</template>

<script lang="ts" setup>
import vector from '@/assets/images/header/Vector.svg';
import rectangle from '@/assets/images/header/Rectangle.svg';
import { ref, onMounted, onUnmounted } from 'vue';

const bgSize = ref('cover');

const updateBgSize = () => {
    bgSize.value = window.innerWidth < 1025 ? '100% auto' : 'cover';
    document.documentElement.style.setProperty('--bg-size', bgSize.value);
};

onMounted(() => {
    updateBgSize();
    window.addEventListener('resize', updateBgSize);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateBgSize);
});
</script>

<style lang="css" scoped>
.bg-header {
    background-image: url('@/assets/images/header/Shutterstock_01.svg');
    background-size: var(--bg-size);
    background-repeat: no-repeat;
    background-position: top;
}
</style>