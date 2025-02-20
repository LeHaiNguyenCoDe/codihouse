<template>
    <div class="info-product-slider relative mt-31 xl:h-[63rem] md:h-[60vw] h-80vw bg-gradient-blue space-y-8 z-10">
      <div class="info-product--title mx-auto pt-12 w-11/12 grid grid-cols-3">
        <!-- Hiển thị Background Images -->
        <div v-for="(bg, index) in backgroundImages" :key="index">
          <img :src="bg.src" :alt="bg.alt" :class="bg.class">
        </div>
  
        <div class="xl:col-span-1 md:col-span-1 col-span-2 flex items-start">
          <div class="info-product--title-square bg-[#7BE2F6] mt-0.5"></div>
          <label class="font-medium text-title-regular color-white ml-2">{{ title }}</label>
        </div>
  
        <div class="col-start-3 col-span-1 text-white text-[16px] ml-5 w-11/12 xl:flex md:hidden hidden">
          {{ description }}
        </div>
      </div>
  
      <div class="info-product-slider--content w-full mx-auto flex gap-0 overflow-hidden relative z-10 xl:gap-6 lg:gap-8 md:gap-6 gap-3">
        <!-- Slide nhỏ bên trái -->
        <div class="slider-small w-4vw" v-if="behindSlide" @click="prevSlide">
          <img :src="behindSlide.image" alt="Slide" class="xl:w-[411px] xl:h-[211px] object-cover md:w-[25vw] md:h-[15vw] w-25vw">
        </div>
  
        <!-- Slide chính -->
        <div class="slider-main w-[60vw] relative z-10">
          <transition name="fade" mode="out-in">
            <img :src="mainSlide.image" :key="mainSlide.image" alt="Main Slide" class="xl:w-60vw xl:h-[536px] md:w-[60vw] md:h-[35vw] w-55vw object-cover">
          </transition>
          <div class="text-white font-bold text-32px">
            <span class="text-[#A8F4FC]">{{ mainSlideIndex + 1 }}/</span> {{ mainSlide.text }}
          </div>
        </div>
  
        <!-- Slide nhỏ bên phải -->
        <div class="h-full grid grid-rows-2 gap-7 items-end w-[30vw]">
          <div class="slider-small">
            <transition-group name="fade" tag="div" class="flex xl:gap-6 md:gap-6 gap-2">
              <div v-for="(slide, index) in filteredSlides" :key="index" @click="changeSlide(mainSlideIndex + index + 1)">
                <img :src="slide.image" alt="Slide" class="xl:w-[411px] xl:h-[211px] object-cover md:w-[25vw] md:h-[15vw] w-25vw">
                <p class="text-[#A8F4FC] text-24px">{{ mainSlideIndex + index + 2 }}/</p>
              </div>
            </transition-group>
          </div>
  
          <!-- Nút điều hướng -->
          <div class="absolute xl:bottom-12% lg:bottom-15% md:bottom-20% bottom-10vw left-70vw flex gap-2 xl:scale-100 md:scale-70 scale-50">
            <button :disabled="mainSlideIndex === 0" class="w-14 h-14 flex justify-center items-center border-[#D3FCFD] rounded-full bg-transparent disabled:opacity-50" @click="prevSlide">
              <img src="../../assets/images/icon/ArrowLeft.png" alt="">
            </button>
            <button :disabled="mainSlideIndex === content.length - 1" class="w-14 h-14 flex justify-center items-center rounded-full border-[#26AAE1] bg-[#A8F4FC] disabled:opacity-50" @click="nextSlide">
              <img src="../../assets/images/icon/ArrowRight.png" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, defineProps, PropType } from "vue";
  
  const props = defineProps({
    title: String,
    description: String,
    content: { type: Array as PropType<{ text: string, image?: string }[]>, default: () => [] },  // <-- Sửa lại props cho đúng
    backgroundImages: Array as PropType<{ src: string, alt: string, class: string }[]>,
    videoSrc: String
  });
  
  const mainSlideIndex = ref(0);
  const mainSlide = computed(() => props.content[mainSlideIndex.value]);
  const behindSlide = computed(() => (mainSlideIndex.value > 0 ? props.content[mainSlideIndex.value - 1] : null));
  const filteredSlides = computed(() => props.content.slice(mainSlideIndex.value + 1, mainSlideIndex.value + 3));
  
  const prevSlide = () => { if (mainSlideIndex.value > 0) mainSlideIndex.value--; };
  const nextSlide = () => { if (mainSlideIndex.value < props.content.length - 1) mainSlideIndex.value++; };
  const changeSlide = (index: number) => { mainSlideIndex.value = index; };
  </script>