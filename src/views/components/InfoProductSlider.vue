<template>
  <div class="info-product-slider relative xl:min-h-[63rem] md:min-h-[60vw] min-h-80vw bg-gradient-blue space-y-8 z-10 pb-20">
    <div class="info-product--title mx-auto py-19 w-11/12 lg:grid grid-cols-3 relative">
      <img :src="backgroundImages[0].src" alt="" class="absolute xl:top-[-40%] md:top-[-70%] top-[-80%] w-55vw -left-150 z-0">
      <div class="xl:col-span-1 md:col-span-1 col-span-2 flex items-start">
        <div class="info-product--title-square bg-[#7BE2F6] mt-0.5"></div>
        <label class="font-medium text-title-regular color-white ml-2">{{ title }}</label>
      </div>
      <div class="col-start-3 text-body-info col-span-1 text-white w-11/12 xl:flex">
        {{ description }}
      </div>
    </div>

    <div class="info-product-slider--content w-full mx-auto flex gap-0 overflow-hidden relative xl:gap-6 lg:gap-8 md:gap-6 gap-3">
      <div class="behind-main slider-small w-4vw">
        <transition-group name="fade" tag="div" class="flex justify-end mx-[1vw]">
          <div v-if="behindSlide" @click="changeSlide(mainSlideIndex - 1)">
            <img :src="behindSlide?.image" alt="Slide"
              class="xl:w-[411px] xl:h-[211px] object-cover md:w-[25vw] md:h-[15vw] w-25vw">
          </div>
        </transition-group>
      </div>

      <div class="slider-main w-[60vw] relative z-10">
        <transition name="fade" mode="out-in" class="w-60vw">
          <img :src="mainSlide?.image" :key="mainSlide?.image" alt="Main Slide"
            class="xl:w-60vw xl:h-[536px] md:w-[60vw] md:h-[35vw] w-55vw object-cover">
        </transition>
        <transition name="fade" mode="out-in" class="flex items-start xl:w-8/12 lg:w-full gap-4 mt-4">
          <div class="font-[Montserrat] font-bold xl:text-32px lg:text-32px md:text-24px text-12px xl:leading-36px lg:leading-36px md:leading-36px leading-12px tracking-[2%] text-white" :key="mainSlide?.text">
            <span class="font-[Montserrat] font-normal xl:text-32px lg:text-32px md:text-24px text-12px xl:leading-36px lg:leading-36px md:leading-36px leading-12px tracking-[5%] text-[#A8F4FC]">
              {{ mainSlide?.number }}/
            </span>
            <span class="font-bold">{{ mainSlide?.text }}</span>
          </div>
        </transition>
      </div>

      <div class="absolute xl:bottom-12% lg:bottom-15% md:bottom-20% xl:left-84vw lg:left-82vw md:left-80vw bottom-10vw left-70vw flex gap-2 xl:scale-100 md:scale-70 scale-50">
        <button :disabled="mainSlideIndex === 0"
          class="w-14 h-14 flex justify-center items-center info-product-slider-button border-[#D3FCFD] rounded-full bg-transparent disabled:opacity-50"
          @click="prevSlide">
          <img :src="arrowLeft_01" alt="">
        </button>
        <button :disabled="mainSlideIndex === slides.length - 1"
          class="w-14 h-14 flex justify-center items-center rounded-full border-[#26AAE1] text-[#26AAE1] bg-[#A8F4FC] info-product-slider-button opacity-100 disabled:opacity-50"
          @click="nextSlide">
          <img :src="arrowRight_01" alt="">
        </button>
      </div>

      <div class="h-full grid grid-rows-2 gap-7 items-end w-[30vw]">
        <div class="slider-small">
          <transition-group name="fade" tag="div" class="flex xl:gap-6 md:gap-6 gap-2">
            <div v-for="(slide, index) in filteredSlides" :key="index" @click="changeSlide(mainSlideIndex + index + 1)">
              <img :src="slide?.image" alt="Slide"
                class="xl:w-[411px] xl:h-[211px] object-cover md:w-[25vw] md:h-[15vw] w-25vw">
            </div>
          </transition-group>
        </div>
        <div class="absolute xl:left-[65%] xl:scale-100 md:scale-70 top-[7vw] -translate-x-1/2 -z-1 md:left-[65%]">
          <img :src="backgroundImages[1].src" class="w-[30.19rem] h-[31.64rem]" alt="path_group">
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';

type Slide = {
  image: string;
  number: string;
  text: string;
};

type BackgroundImage = {
  src: string;
  alt: string;
  class: string;
};

const props = defineProps<{
  slides: Slide[];
  title: string;
  description: string;
  backgroundImages: BackgroundImage[];
  arrowLeft_01: string;
  arrowRight_01: string;
}>();

const mainSlideIndex = ref(0);
const mainSlide = computed(() => props.slides?.[mainSlideIndex.value] || null);
const behindSlide = computed(() => props.slides?.[mainSlideIndex.value - 1] || null);
const filteredSlides = computed(() => props.slides?.slice(mainSlideIndex.value + 1) || []);

const nextSlide = () => {
  if (mainSlideIndex.value < (props.slides?.length || 0) - 1) {
    mainSlideIndex.value += 1;
  }
};

const prevSlide = () => {
  if (mainSlideIndex.value > 0) {
    mainSlideIndex.value -= 1;
  }
};

const changeSlide = (index: number) => {
  if (index >= 0 && index < (props.slides?.length || 0)) {
    mainSlideIndex.value = index;
  }
};
</script>