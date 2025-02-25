<template>
    <section class="relative w-full min-h-screen">
        <img :src="bg_banner" alt="" class="absolute object-cover w-full -z-10 ">
        <img :src="vector" alt="" class="absolute top-0 right-5vw">
        <img :src="white_space" alt="" class="absolute bottom left-0 z-10 w-full">
    </section>
</template>
<script lang="ts" setup>
import bg_banner from "@/assets/images/header/Shutterstock_01.svg";
import vector from "@/assets/images/header/Vector.svg";
import white_space from "@/assets/images/header/Rectangle.svg";
</script>